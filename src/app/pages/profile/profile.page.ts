import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { StatusBar } from '@capacitor/status-bar';
import { LoadingController, AlertController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AvatarService } from 'src/app/services/avatar.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profile: any = null;
  currentLanguage: string = 'en';
  isLoading: boolean = true;

  constructor(
    public avatarService: AvatarService,
    private authService: AuthService,
    private router: Router,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private nav: NavController,
    private translate: TranslateService
  ) {
    this.currentLanguage = this.translate.currentLang || 'en';
    this.loadProfile();
  }

  async loadProfile() {
    this.isLoading = true;
    if (this.authService.currentUser) {
      this.avatarService.getUserProfile(this.authService.currentUser).subscribe(
        (profile) => {
          this.profile = profile;
          this.isLoading = false;
        },
        (error) => {
          console.error('Error loading profile:', error);
          this.isLoading = false;
        }
      );
    }
  }

  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }

  goBack(){
    this.router.navigate(['/home']); // Replace '/previous-page' with your desired route
  }

  ngOnInit() {
  }

  async changeImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera, // Camera, Photos or Prompt!
    });

    if (image) {
      const loading = await this.loadingController.create();
      await loading.present();

      const result = await this.avatarService.uploadImage(image, this.avatarService.profile.uid);
      loading.dismiss();

      if (!result) {
        const alert = await this.alertController.create({
          header: 'Upload failed',
          message: 'There was a problem uploading your avatar.',
          buttons: ['OK'],
        });
        await alert.present();
      }
    }
  }

  setLanguage(event: any) {
    const lang = event.detail.value;
    this.currentLanguage = lang;
    this.translate.use(lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('preferred_language', lang);
  }

  getProfileImageSrc(): string {
    if (!this.profile?.Driver_imgUrl) {
      return 'assets/imgs/about.svg';
    }
    
    // Check if it's an external URL (ui-avatars.com, via.placeholder.com, etc.)
    if (this.profile.Driver_imgUrl.startsWith('http://') || this.profile.Driver_imgUrl.startsWith('https://')) {
      // If it's an external URL, replace with local asset for Android compatibility
      return 'assets/imgs/about.svg';
    }
    
    // If it's already a local asset or base64 data, use it as is
    return this.profile.Driver_imgUrl;
  }
}