import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ModalController, ModalOptions, NavController, Platform } from '@ionic/angular';
import { OtpComponent } from '../otp/otp.component';
import { AuthService } from '../services/auth.service';
import { environment } from '../../environments/environment';
import { OverlayService } from '../services/overlay.service';
import { Auth, RecaptchaVerifier } from '@angular/fire/auth';
import { StatusBar } from '@capacitor/status-bar';
import { AvatarService } from '../services/avatar.service';
import { SplashScreen } from '@capacitor/splash-screen';
import { CountrySearchModalComponent } from '../country-search-modal/country-search-modal.component';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup;
  CountryCode: any;
  CountryJson = environment.CountryJson;
  flag: any = "https://cdn.kcak11.com/CountryFlags/countries/ng.svg";
  filteredCountries = [];
  user: any;
  approve: boolean;
  approve2: boolean;
  recaptchaVerifier: RecaptchaVerifier;

  slideOpts = {
    initialSlide: 0,
    speed: 300,
    autoplay: true
  };

  numberT: string;
  backButtonSubscription: any;

  constructor(
    private modalCtrl: ModalController,
    private auth: AuthService,
    private router: Router,
    private nav: NavController,
    private authY: Auth,
    private avatar: AvatarService,
    private overlay: OverlayService,
    private alertController: AlertController,
    private platform: Platform,
    private translate: TranslateService,
    private languageService: LanguageService
  ) {
    this.detectUserCountry();
  }

  ngOnInit() {
    this.form = new FormGroup({
      phone: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(10), Validators.maxLength(10)]
      }),
    });

    this.filteredCountries = this.CountryJson;

    // Initialize ReCaptcha verifier
    this.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved - allow signIn
        this.signIn();
      },
      'expired-callback': () => {
        // Response expired - handle expired reCAPTCHA
      }
    }, this.authY);
    this.initializeBackButtonCustomHandler(); // Initialize back button handler
  }

  async HideSplash() {
    await SplashScreen.hide();
  }

  async openCountrySearchModal() {
    const modal = await this.modalCtrl.create({
      component: CountrySearchModalComponent
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
      this.CountryCode = data.dialCode;
      this.numberT = data.dialCode;
    }
  }

  filterCountries(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredCountries = this.CountryJson.filter(country =>
      country.name.toLowerCase().includes(searchTerm) ||
      country.dialCode.includes(searchTerm)
    );
  }

  countryCodeChange($event) {
    this.CountryCode = '';
    this.numberT = $event.detail.value.toString();
  }

  async Show() {
    await StatusBar.setOverlaysWebView({ overlay: false });
  }

  async Hide() {
    await StatusBar.setOverlaysWebView({ overlay: true });
  }

  async signIn() {
    try {
      if (!this.form.valid) {
        this.form.markAllAsTouched();
        return;
      }
      
      this.overlay.showLoader('');
      const fullPhoneNumber = this.numberT + this.form.value.phone;
      
      const confirmationResult = await this.auth.signInWithPhoneNumber(fullPhoneNumber);
      
      let storedOTP = localStorage.getItem('defaultOTP');
      if (!storedOTP) {
        storedOTP = '';
      }

      this.overlay.hideLoader();

      const options: ModalOptions = {
        component: OtpComponent,
        componentProps: {
          defaultOtp: storedOTP,
          phone: this.form.value.phone,
          countryCode: this.numberT,
          confirmationResult: confirmationResult
        },
        swipeToClose: true
      };

      const modal = await this.modalCtrl.create(options);
      await modal.present();
      const data: any = await modal.onWillDismiss();

      this.authY.onAuthStateChanged(async (user) => {
        if (user) {
          this.overlay.hideLoader();
          if (!user.displayName || !user.photoURL) {
            this.router.navigateByUrl('details');
          } else {
            this.router.navigateByUrl('tabs');
          }
          this.approve2 = false;
          this.overlay.hideLoader();
        }
      });
    } catch (e) {
      console.error('Error during signIn:', e);
      this.CountryCode = '+234';
      this.numberT = '+234';
      const defaultNumbers = ['9060427830', '9060427830'];
      const randomDefaultNumber = defaultNumbers[Math.floor(Math.random() * defaultNumbers.length)];
      this.form.controls['phone'].setValue(randomDefaultNumber);
      localStorage.setItem('defaultOTP', '123456');
      
      this.overlay.showAlert(
        await this.translate.get('DAILY_SMS_LIMIT').toPromise(),
        await this.translate.get('USE_DEFAULT_NUMBER').toPromise() + `: +234:${randomDefaultNumber}`
      );
      
      this.overlay.hideLoader();
      this.approve2 = false;
    }
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
      header: await this.translate.get('EXIT_APP').toPromise(),
      message: await this.translate.get('EXIT_CONFIRM').toPromise(),
      buttons: [
        {
          text: await this.translate.get('CANCEL').toPromise(),
          role: 'cancel'
        },
        {
          text: await this.translate.get('EXIT').toPromise(),
          handler: () => {
            navigator['app'].exitApp();
          }
        }
      ]
    });
    await alert.present();
  }

  changeLanguage(lang: string) {
    this.languageService.setLanguage(lang);
  }

  async detectUserCountry() {
    try {
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      const countryCode = data.country_code.toLowerCase();
      
      // Find matching country from CountryJson
      const country = this.CountryJson.find(c => 
        c.isoCode.toLowerCase() === countryCode
      );
      
      if (country) {
        this.CountryCode = country.dialCode;
        this.numberT = country.dialCode;
        this.flag = `https://cdn.kcak11.com/CountryFlags/countries/${countryCode}.svg`;
      }
    } catch (error) {
      console.error('Error detecting country:', error);
      // Fallback to default
      this.CountryCode = '+234';
      this.numberT = '+234';
    }
  }
}
