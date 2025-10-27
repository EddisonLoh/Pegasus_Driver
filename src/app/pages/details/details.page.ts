import { Component, OnInit } from '@angular/core';
import { Auth, updateEmail, updateProfile, User, GoogleAuthProvider, signInWithPopup, RecaptchaVerifier, PhoneAuthProvider, reauthenticateWithCredential, signInWithPhoneNumber, sendEmailVerification } from '@angular/fire/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AvatarService } from 'src/app/services/avatar.service';
import { OverlayService } from 'src/app/services/overlay.service';
import { Geolocation } from '@capacitor/geolocation';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { ActionSheetController, AlertController, LoadingController, Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { doc, setDoc, serverTimestamp } from '@angular/fire/firestore';
import { Drivers } from './../../interfaces/drivers';
import { geohashForLocation } from 'geofire-common';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  [x: string]: any;
  form: FormGroup;
  imageUrl: string;
  approve: boolean;
  approve2: boolean;
  user: User;
  cartypes: import("@angular/fire/firestore").DocumentData[];
  backButtonSubscription: any;
  isSubmitting = false;
  isUploading = false;

  constructor(
    private overlay: OverlayService,
    private authy: Auth,
    private avatar: AvatarService,
    private router: Router,
    private actionSheetController: ActionSheetController,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private platform: Platform,
    private translate: TranslateService
  ) {
    // Ensure the user is authenticated
    this.authy.onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        this.avatar.profile = user; // Ensure the profile is set
        console.log(user.uid);
        this.form.patchValue({
          fullname: user.displayName?.split(' ')[0] || '',
          lastname: user.displayName?.split(' ')[1] || '',
          email: user.email || ''
        });
      }
    });

    this.avatar.getCartypes().subscribe((d) => {
      console.log(d);
      this.cartypes = d;
    });
  }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.form = new FormGroup({
      fullname: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
          Validators.pattern('^[a-zA-Z ]*$')
        ],
        updateOn: 'change'
      }),
      lastname: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
          Validators.pattern('^[a-zA-Z ]*$')
        ],
        updateOn: 'change'
      }),
      email: new FormControl('', {
        validators: [
          Validators.required,
          Validators.email,
          Validators.maxLength(100)
        ],
        updateOn: 'change'
      }),
      plateNumber: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(10),
          Validators.pattern('^[A-Z0-9- ]*$')
        ]
      }),
      carType: new FormControl('', {
        validators: [Validators.required]
      }),
      carName: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50)
        ]
      }),
      mileage: new FormControl('', {
        validators: [
          Validators.required,
          Validators.min(0),
          Validators.max(999999)
        ]
      }),
      driverLicense: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20),
          Validators.pattern('^[A-Z0-9-]*$')
        ]
      }),
      driverLicenseImage: new FormControl('', {
        validators: [Validators.required]
      })
    });

    // Monitor form changes with shorter debounce time
    this.form.valueChanges
      .pipe(
        debounceTime(100),
        distinctUntilChanged()
      )
      .subscribe(() => {
        console.log('Form validity:', this.form.valid);
      });

    // Add status changes monitoring for immediate validation feedback
    this.form.statusChanges
      .pipe(
        distinctUntilChanged()
      )
      .subscribe(status => {
        console.log('Form status:', status);
      });
  }

  async changeImage(source: CameraSource) {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Base64,
        source: source,
      });

      if (image) {
        this.isUploading = true;

        if (!this.user?.uid) {
          throw new Error('Profile UID is missing');
        }

        const result = await this.avatar.uploadImage(image, this.user.uid);
        
        if (!result) {
          throw new Error('Upload failed');
        }
        
        this.imageUrl = result;
      }
    } catch (error) {
      const message = error.message?.includes('Photo URL is required') 
        ? 'The image is too big. Please try another image with a smaller size.'
        : `Upload failed: ${error.message}`;
        
      const alert = await this.alertController.create({
        header: await this.translate.get('DETAILS.ALERTS.UPLOAD_FAILED').toPromise(),
        message: message,
        buttons: ['OK'],
      });
      await alert.present();
    } finally {
      this.isUploading = false;
    }
  }
  

  async presentImageSourceActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: await this.translate.get('DETAILS.LICENSE_INFO.UPLOAD_PHOTO').toPromise(),
      buttons: [
        {
          text: await this.translate.get('DETAILS.BUTTONS.CAMERA').toPromise(),
          icon: 'camera',
          handler: () => {
            this.changeImage(CameraSource.Camera);
          }
        },
        {
          text: await this.translate.get('DETAILS.BUTTONS.GALLERY').toPromise(),
          icon: 'images',
          handler: () => {
            this.changeImage(CameraSource.Photos);
          }
        },
        {
          text: await this.translate.get('DETAILS.BUTTONS.FILE').toPromise(),
          icon: 'document',
          handler: () => {
            this.selectFile();
          }
        },
        {
          text: await this.translate.get('DETAILS.BUTTONS.CANCEL').toPromise(),
          icon: 'close',
          role: 'cancel'
        }
      ]
    });
    await actionSheet.present();
  }

  async selectFile() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = async (event: any) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = async (e: any) => {
          const image = {
            base64String: e.target.result.split(',')[1]
          };

          const result = await this.avatar.uploadImage(image as Photo, this.user.uid);

          if (!result) {
            const alert = await this.alertController.create({
              header: 'Upload failed',
              message: 'There was a problem uploading your avatar.',
              buttons: ['OK'],
            });
            await alert.present();
          } else {
            this.imageUrl = result; // Ensure imageUrl is updated
          }
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  }

  async reauthenticateWithPhoneNumber(): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
      try {
        const user = this.authy.currentUser;
        if (!user) throw new Error('User not authenticated');

        // Clear and recreate reCAPTCHA container
        const recaptchaContainerId = 'recaptcha-container';
        let recaptchaContainer = document.getElementById(recaptchaContainerId);
        if (recaptchaContainer) {
          recaptchaContainer.remove();
        }
        recaptchaContainer = document.createElement('div');
        recaptchaContainer.id = recaptchaContainerId;
        document.body.appendChild(recaptchaContainer);

        const recaptchaVerifier = new RecaptchaVerifier(recaptchaContainerId, {
          size: 'invisible'
        }, this.authy);

        const phoneNumber = user.phoneNumber;
        if (!phoneNumber) {
          throw new Error('User phone number is missing');
        }

        const verificationResult = await signInWithPhoneNumber(this.authy, phoneNumber, recaptchaVerifier);
        
        const alert = await this.alertController.create({
          header: 'Verification',
          inputs: [
            {
              name: 'verificationCode',
              type: 'text',
              placeholder: 'Enter verification code'
            }
          ],
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => reject(new Error('Verification cancelled'))
            },
            {
              text: 'Verify',
              handler: async (data) => {
                try {
                  const phoneCredential = PhoneAuthProvider.credential(
                    verificationResult.verificationId, 
                    data.verificationCode
                  );
                  await reauthenticateWithCredential(user, phoneCredential);
                  resolve();
                } catch (error) {
                  reject(error);
                }
              }
            }
          ]
        });
        await alert.present();

      } catch (error) {
        reject(error);
      }
    });
  }
  

  async updateProfile() {
    if (this.form.invalid || this.isSubmitting) {
      this.markFormGroupTouched(this.form);
      return;
    }

    this.isSubmitting = true;
    let loading = await this.loadingController.create({
      message: await this.translate.get('COMMON.PLEASE_WAIT').toPromise()
    });
    await loading.present();

    try {
      if (!this.imageUrl || this.imageUrl.length > 1000) {
        await loading.dismiss();
        throw new Error('Photo URL is required and must be less than 1000 characters');
      }

      // Store current user reference
      const currentUser = this.authy.currentUser;
      if (!currentUser) {
        throw new Error('No authenticated user found');
      }

      // Update profile
      await updateProfile(currentUser, {
        displayName: `${this.form.value.fullname} ${this.form.value.lastname}`,
        photoURL: this.imageUrl,
      });

      const carInfo = {
        plateNumber: this.form.value.plateNumber,
        carType: this.form.value.carType,
        carName: this.form.value.carName,
        mileage: this.form.value.mileage,
      };

      const driverInfo = {
        driverLicense: this.form.value.driverLicense,
        driverLicenseImage: this.form.value.driverLicenseImage,
      };

      await Geolocation.checkPermissions();
      const coordinates = await Geolocation.getCurrentPosition();
      
      // Use stored user reference
      await this.avatar.createNewDriver(
        coordinates, 
        this.form.value.fullname + ' ' + this.form.value.lastname, 
        this.form.value.email, 
        currentUser.phoneNumber, 
        carInfo.carName, 
        carInfo.carType, 
        carInfo.plateNumber, 
        this.imageUrl, 
        driverInfo.driverLicenseImage, 
        driverInfo.driverLicense, 
        carInfo.mileage
      );
      
      await this.avatar.createCard('Cash', '0', 'cash', 'None');
      this.approve2 = false;
      
      // Navigate after successful update
      await this.router.navigateByUrl('tabs', { replaceUrl: true });

    } catch (error) {
      console.error('Profile update error:', error);
      const errorMessage = this.getErrorMessage(error);
      await this.overlay.showAlert('Error', errorMessage);
    } finally {
      this.isSubmitting = false;
      if (loading) {
        await loading.dismiss();
      }
    }
  }

  async selectDriverLicenseImage() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = async (event: any) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = async (e: any) => {
          const image = {
            base64String: e.target.result.split(',')[1]
          };
          this.isUploading = true;
          const result = await this.avatar.uploadImage(image as Photo, this.user.uid);
          if (result) {
            this.form.patchValue({ driverLicenseImage: result });
          } else {
            const alert = await this.alertController.create({
              header: await this.translate.get('DETAILS.ALERTS.UPLOAD_FAILED').toPromise(),
              message: await this.translate.get('DETAILS.ALERTS.UPLOAD_FAILED_MESSAGE').toPromise(),
              buttons: ['OK'],
            });
            await alert.present();
          }
          this.isUploading = false;
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  }


   
  initializeBackButtonCustomHandler() {
    this.backButtonSubscription = this.platform.backButton.subscribeWithPriority(10, () => {
      this.handleBackButton();
    });
  }

  async handleBackButton() {
    try {
        await this.showExitConfirmation();
    } catch (error) {
      console.error('Error handling back button:', error);
    }
  }

  async showExitConfirmation() {
    const alert = await this.alertController.create({
      header: 'Exit App',
      message: 'Are you sure you want to exit the app?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Exit',
          handler: () => {
            navigator['app'].exitApp();
          }
        }
      ]
    });
    await alert.present();
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  private getErrorMessage(error: any): string {
    switch (error.code) {
      case 'auth/requires-recent-login':
        return 'Please re-authenticate to update your email';
      case 'auth/email-already-in-use':
        return 'This email is already registered';
      case 'auth/invalid-email':
        return 'Please enter a valid email address';
      case 'auth/operation-not-allowed':
        return 'Email verification is required before changing email';
      default:
        return error.message || 'An unexpected error occurred';
    }
  }

  async createNewDriver(coord: any, name: string, email: string, phone: any, car: string, cartype: string, plate: string, imageUrl: string, document: string, license: any, mileage: any): Promise<void> {
    try {
      const loc: Drivers = {
        geohash: geohashForLocation([coord.coords.latitude, coord.coords.longitude]),
        Driver_lat: coord.coords.latitude,
        Driver_lng: coord.coords.longitude,
        Driver_id: this.authy.currentUser.uid,
        Driver_name: name,
        Driver_car: car,
        Driver_imgUrl: imageUrl,
        Driver_rating: 0,
        distance: 0,
        duration: 0,
        seats: 1,
        start: false,
        stop: false,
        intransit: false,
        cancel: false,
        Driver_cartype: cartype,
        Driver_plate: plate,
        Driver_num_rides: 0,
        Document: document,
        Driver_email: email,
        Driver_phone: phone,
        onlineState: false,
        Earnings: 0,
        license: license,
        mileage: mileage,
        isApproved: false,
        submissionDate: serverTimestamp()
      };
      await setDoc(doc(this.firestore, "Drivers", this.authy.currentUser.uid), { ...loc });
      this.router.navigateByUrl('/waiting', { replaceUrl: true });
    } catch (e) {
      console.error('Error creating new driver:', e);
      throw new Error('Error creating new driver');
    }
  }

}
