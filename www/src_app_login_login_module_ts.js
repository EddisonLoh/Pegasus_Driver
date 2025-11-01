"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 5393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 6825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
class LoginPageRoutingModule {
}
LoginPageRoutingModule.ɵfac = function LoginPageRoutingModule_Factory(t) { return new (t || LoginPageRoutingModule)(); };
LoginPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LoginPageRoutingModule });
LoginPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoginPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 6825);
/* harmony import */ var _shared_shared_translations_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared-translations.module */ 7912);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);







class LoginPageModule {
}
LoginPageModule.ɵfac = function LoginPageModule_Factory(t) { return new (t || LoginPageModule)(); };
LoginPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: LoginPageModule });
LoginPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
        _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _shared_shared_translations_module__WEBPACK_IMPORTED_MODULE_2__.SharedTranslationsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LoginPageModule, { declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
        _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _shared_shared_translations_module__WEBPACK_IMPORTED_MODULE_2__.SharedTranslationsModule] }); })();


/***/ }),

/***/ 6825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _otp_otp_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../otp/otp.component */ 3096);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/auth */ 6818);
/* harmony import */ var _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/status-bar */ 9326);
/* harmony import */ var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/splash-screen */ 2239);
/* harmony import */ var _country_search_modal_country_search_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../country-search-modal/country-search-modal.component */ 9568);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/auth */ 1577);
/* harmony import */ var _services_avatar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/avatar.service */ 5083);
/* harmony import */ var _services_overlay_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/overlay.service */ 5596);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/language.service */ 1155);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 4666);




















function LoginPage_ion_text_31_ion_text_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-text", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "MOBILE_REQUIRED"), " ");
  }
}

function LoginPage_ion_text_31_ion_text_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-text", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "MOBILE_INVALID"), " ");
  }
}

function LoginPage_ion_text_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-text", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, LoginPage_ion_text_31_ion_text_1_Template, 3, 3, "ion-text", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, LoginPage_ion_text_31_ion_text_2_Template, 3, 3, "ion-text", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.form.get("phone").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.form.get("phone").hasError("minlength") && !ctx_r0.form.get("phone").hasError("required"));
  }
}

function LoginPage_ion_label_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 1, "CONTINUE"));
  }
}

function LoginPage_ion_icon_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ion-icon", 37);
  }
}

function LoginPage_ion_progress_bar_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ion-progress-bar", 38);
  }
}

class LoginPage {
  constructor(modalCtrl, auth, router, nav, authY, avatar, overlay, alertController, platform, translate, languageService) {
    this.modalCtrl = modalCtrl;
    this.auth = auth;
    this.router = router;
    this.nav = nav;
    this.authY = authY;
    this.avatar = avatar;
    this.overlay = overlay;
    this.alertController = alertController;
    this.platform = platform;
    this.translate = translate;
    this.languageService = languageService;
    this.CountryJson = _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.CountryJson;
    this.flag = "https://cdn.kcak11.com/CountryFlags/countries/ng.svg";
    this.filteredCountries = [];
    this.slideOpts = {
      initialSlide: 0,
      speed: 300,
      autoplay: true
    };
    this.detectUserCountry();
  }

  ngOnInit() {
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroup({
      phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(null, {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.maxLength(10)]
      })
    });
    this.filteredCountries = this.CountryJson; // Initialize ReCaptcha verifier

    this.recaptchaVerifier = new _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': response => {
        // reCAPTCHA solved - allow signIn
        this.signIn();
      },
      'expired-callback': () => {// Response expired - handle expired reCAPTCHA
      }
    }, this.authY);
    this.initializeBackButtonCustomHandler(); // Initialize back button handler
  }

  HideSplash() {
    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_4__.SplashScreen.hide();
    })();
  }

  openCountrySearchModal() {
    var _this = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalCtrl.create({
        component: _country_search_modal_country_search_modal_component__WEBPACK_IMPORTED_MODULE_5__.CountrySearchModalComponent
      });
      yield modal.present();
      const {
        data
      } = yield modal.onWillDismiss();

      if (data) {
        _this.CountryCode = data.dialCode;
        _this.numberT = data.dialCode;
      }
    })();
  }

  filterCountries(event) {
    const searchTerm = event.target.value.toLowerCase();
    this.filteredCountries = this.CountryJson.filter(country => country.name.toLowerCase().includes(searchTerm) || country.dialCode.includes(searchTerm));
  }

  countryCodeChange($event) {
    this.CountryCode = '';
    this.numberT = $event.detail.value.toString();
  }

  Show() {
    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_3__.StatusBar.setOverlaysWebView({
        overlay: false
      });
    })();
  }

  Hide() {
    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_3__.StatusBar.setOverlaysWebView({
        overlay: true
      });
    })();
  }

  signIn() {
    var _this2 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (!_this2.form.valid) {
          _this2.form.markAllAsTouched();

          return;
        }

        _this2.overlay.showLoader('');

        const fullPhoneNumber = _this2.numberT + _this2.form.value.phone;
        const confirmationResult = yield _this2.auth.signInWithPhoneNumber(fullPhoneNumber);
        let storedOTP = localStorage.getItem('defaultOTP');

        if (!storedOTP) {
          storedOTP = '';
        }

        _this2.overlay.hideLoader();

        const options = {
          component: _otp_otp_component__WEBPACK_IMPORTED_MODULE_1__.OtpComponent,
          componentProps: {
            defaultOtp: storedOTP,
            phone: _this2.form.value.phone,
            countryCode: _this2.numberT,
            confirmationResult: confirmationResult
          },
          swipeToClose: true
        };
        const modal = yield _this2.modalCtrl.create(options);
        yield modal.present();
        const data = yield modal.onWillDismiss();

        _this2.authY.onAuthStateChanged( /*#__PURE__*/function () {
          var _ref = (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (user) {
            if (user) {
              _this2.overlay.hideLoader();

              if (!user.displayName || !user.photoURL) {
                _this2.router.navigateByUrl('details');
              } else {
                _this2.router.navigateByUrl('tabs');
              }

              _this2.approve2 = false;

              _this2.overlay.hideLoader();
            }
          });

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      } catch (e) {
        console.error('Error during signIn:', e);
        _this2.CountryCode = '+234';
        _this2.numberT = '+234';
        const defaultNumbers = ['9060427830', '9060427830'];
        const randomDefaultNumber = defaultNumbers[Math.floor(Math.random() * defaultNumbers.length)];

        _this2.form.controls['phone'].setValue(randomDefaultNumber);

        localStorage.setItem('defaultOTP', '123456');

        _this2.overlay.showAlert(yield _this2.translate.get('DAILY_SMS_LIMIT').toPromise(), (yield _this2.translate.get('USE_DEFAULT_NUMBER').toPromise()) + `: +234:${randomDefaultNumber}`);

        _this2.overlay.hideLoader();

        _this2.approve2 = false;
      }
    })();
  }

  initializeBackButtonCustomHandler() {
    this.backButtonSubscription = this.platform.backButton.subscribeWithPriority(10, () => {
      this.handleBackButton();
    });
  }

  handleBackButton() {
    var _this3 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this3.showExitConfirmation();
      } catch (error) {
        console.error('Error handling back button:', error);
      }
    })();
  }

  showExitConfirmation() {
    var _this4 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this4.alertController.create({
        header: yield _this4.translate.get('EXIT_APP').toPromise(),
        message: yield _this4.translate.get('EXIT_CONFIRM').toPromise(),
        buttons: [{
          text: yield _this4.translate.get('CANCEL').toPromise(),
          role: 'cancel'
        }, {
          text: yield _this4.translate.get('EXIT').toPromise(),
          handler: () => {
            navigator['app'].exitApp();
          }
        }]
      });
      yield alert.present();
    })();
  }

  changeLanguage(lang) {
    this.languageService.setLanguage(lang);
  }

  detectUserCountry() {
    var _this5 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const response = yield fetch('https://ipapi.co/json/');
        const data = yield response.json();
        const countryCode = data.country_code.toLowerCase(); // Find matching country from CountryJson

        const country = _this5.CountryJson.find(c => c.isoCode.toLowerCase() === countryCode);

        if (country) {
          _this5.CountryCode = country.dialCode;
          _this5.numberT = country.dialCode;
          _this5.flag = `https://cdn.kcak11.com/CountryFlags/countries/${countryCode}.svg`;
        }
      } catch (error) {
        console.error('Error detecting country:', error); // Fallback to default

        _this5.CountryCode = '+234';
        _this5.numberT = '+234';
      }
    })();
  }

}

LoginPage.ɵfac = function LoginPage_Factory(t) {
  return new (t || LoginPage)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__.Auth), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_avatar_service__WEBPACK_IMPORTED_MODULE_7__.AvatarService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_overlay_service__WEBPACK_IMPORTED_MODULE_8__.OverlayService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_language_service__WEBPACK_IMPORTED_MODULE_9__.LanguageService));
};

LoginPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: LoginPage,
  selectors: [["app-login"]],
  decls: 46,
  vars: 19,
  consts: [[1, "ion-no-border", "modern-header", 3, "translucent"], ["lines", "none"], [1, "ion-padding"], ["color", "primary", 1, "ion-text-center"], [1, "app-title"], [1, "app-tagline"], [1, "ion-padding", "modern-content"], ["pager", "true", 3, "options"], ["src", "../assets/imgs/main.svg"], ["src", "../assets/imgs/main1.svg"], ["src", "../assets/imgs/main2.svg"], [1, "ion-no-padding"], [1, "ion-no-padding", "full-width"], [1, "ion-margin-horizontal"], [1, "ion-padding", "modern-form", 3, "formGroup"], ["id", "sign-in-button"], [1, "phone-input-container"], ["lines", "none", 1, "country-select"], ["fill", "clear", 1, "country-button", 3, "click"], [1, "country-flag", 3, "src"], ["name", "chevron-down-outline"], ["formControlName", "phone", "type", "tel", "clearInput", "", "minlength", "10", "maxlength", "10", 1, "phone-input", 3, "placeholder", "ionFocus", "ionBlur"], ["class", "ion-text-center", 4, "ngIf"], ["shape", "round", "size", "large", "type", "submit", "expand", "block", 1, "submit-button", 3, "disabled", "click"], [4, "ngIf"], ["name", "arrow-forward-outline", 4, "ngIf"], ["type", "indeterminate", 4, "ngIf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["name", "globe"], ["side", "top"], [3, "click"], ["src", "https://cdn.kcak11.com/CountryFlags/countries/us.svg", 2, "width", "24px", "height", "24px"], ["src", "https://cdn.kcak11.com/CountryFlags/countries/sa.svg", 2, "width", "24px", "height", "24px"], ["id", "recaptcha-container"], [1, "ion-text-center"], ["class", "error", "color", "danger", 4, "ngIf"], ["color", "danger", 1, "error"], ["name", "arrow-forward-outline"], ["type", "indeterminate"]],
  template: function LoginPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-list", 1)(2, "ion-list-header", 2)(3, "ion-label", 3)(4, "h1", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](9, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "ion-content", 6)(11, "ion-slides", 7)(12, "ion-slide");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](13, "ion-img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "ion-slide");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](15, "ion-img", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "ion-slide");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](17, "ion-img", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "ion-row", 11)(19, "ion-list", 12)(20, "ion-item-group", 13)(21, "form", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](22, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "div", 16)(24, "ion-item", 17)(25, "ion-button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LoginPage_Template_ion_button_click_25_listener() {
        return ctx.openCountrySearchModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](26, "img", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](28, "ion-icon", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "ion-input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ionFocus", function LoginPage_Template_ion_input_ionFocus_29_listener() {
        return ctx.Show();
      })("ionBlur", function LoginPage_Template_ion_input_ionBlur_29_listener() {
        return ctx.Hide();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](30, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](31, LoginPage_ion_text_31_Template, 3, 2, "ion-text", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "ion-button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LoginPage_Template_ion_button_click_32_listener() {
        return ctx.signIn();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](33, LoginPage_ion_label_33_Template, 3, 3, "ion-label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](34, LoginPage_ion_icon_34_Template, 1, 0, "ion-icon", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](35, LoginPage_ion_progress_bar_35_Template, 1, 0, "ion-progress-bar", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "ion-fab", 27)(37, "ion-fab-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](38, "ion-icon", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "ion-fab-list", 29)(40, "ion-fab-button", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LoginPage_Template_ion_fab_button_click_40_listener() {
        return ctx.changeLanguage("en");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](41, "ion-img", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "ion-fab-button", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LoginPage_Template_ion_fab_button_click_42_listener() {
        return ctx.changeLanguage("ar");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](43, "ion-img", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "ion-footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](45, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 13, "LOGIN.TITLE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](9, 15, "LOGIN.SUBTITLE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("options", ctx.slideOpts);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx.flag, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.CountryCode, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](30, 17, "MOBILE_NUMBER"));
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.form.get("phone").valid && ctx.form.get("phone").touched);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx.form.get("phone").valid);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.approve2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.approve2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.approve2);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.MaxLengthValidator, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonFabList, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonItemGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonListHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonProgressBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonSlide, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonSlides, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe],
  styles: ["@keyframes slide-left {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(-100px);\n  }\n}\n@keyframes slide-right {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(100px);\n  }\n}\n.slide-left[_ngcontent-%COMP%] {\n  animation: slide-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n.slide-right[_ngcontent-%COMP%] {\n  animation: slide-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n  background: transparent;\n  display: block;\n}\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%] {\n  margin-right: 2.5vh;\n}\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 1.8rem;\n}\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%], ion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  font-size: 0.75em !important;\n}\nion-toolbar[_ngcontent-%COMP%], ion-header[_ngcontent-%COMP%] {\n  height: 44px;\n}\nion-img[_ngcontent-%COMP%] {\n  margin: auto;\n  width: auto;\n}\nion-slides[_ngcontent-%COMP%] {\n  height: 35vh;\n  margin-bottom: 2rem;\n  direction: ltr;\n}\n[dir=rtl][_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%] {\n  direction: rtl;\n}\nion-select[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  --placeholder-opacity: 1;\n  width: 35%;\n  justify-content: center;\n  font-size: 16px;\n  font-weight: 500;\n  --padding-start: 0;\n  --padding-end: 0;\n}\nion-input[_ngcontent-%COMP%] {\n  width: 60%;\n  --padding-start: 0;\n  --padding-end: 0;\n}\n.pm-awesome-divider[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  margin-top: 20px;\n}\n.shadow-top[_ngcontent-%COMP%] {\n  box-shadow: 0px -1.5px 1.5px rgba(196, 196, 196, 0.414);\n}\nion-item[_ngcontent-%COMP%] {\n  --inner-padding-end: 0;\n  --padding-end: 0;\n  align-items: center;\n  justify-content: space-between;\n}\nion-item[lines=none][_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --inner-padding-start: 0;\n}\nion-searchbar[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  margin-bottom: 10px;\n}\nion-select-option[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 24px;\n}\n[_nghost-%COMP%]   .rtl-support[dir=rtl][_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  text-align: right;\n}\n[_nghost-%COMP%]   .rtl-support[dir=rtl][_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  transform: scaleX(-1);\n}\n[_nghost-%COMP%]   [dir=rtl][_ngcontent-%COMP%]   .ion-text-end[_ngcontent-%COMP%] {\n  text-align: left;\n}\n[_nghost-%COMP%]   [dir=rtl][_ngcontent-%COMP%]   .ion-text-start[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.modern-header[_ngcontent-%COMP%]   .app-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  margin-bottom: 0.5rem;\n}\n.modern-header[_ngcontent-%COMP%]   .app-tagline[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  opacity: 0.8;\n}\n.modern-content[_ngcontent-%COMP%]   .phone-input-container[_ngcontent-%COMP%] {\n  margin: 2rem 0;\n}\n.modern-content[_ngcontent-%COMP%]   .phone-input-container[_ngcontent-%COMP%]   .country-select[_ngcontent-%COMP%] {\n  background: var(--ion-color-light);\n  border-radius: 12px;\n  margin-bottom: 1rem;\n}\n.modern-content[_ngcontent-%COMP%]   .phone-input-container[_ngcontent-%COMP%]   .country-select[_ngcontent-%COMP%]   .country-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.modern-content[_ngcontent-%COMP%]   .phone-input-container[_ngcontent-%COMP%]   .country-select[_ngcontent-%COMP%]   .country-button[_ngcontent-%COMP%]   .country-flag[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n}\n.modern-content[_ngcontent-%COMP%]   .phone-input-container[_ngcontent-%COMP%]   .country-select[_ngcontent-%COMP%]   .phone-input[_ngcontent-%COMP%] {\n  --padding-start: 12px;\n  --background: transparent;\n  font-size: 1.1rem;\n}\n.modern-content[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  --border-radius: 12px;\n  --box-shadow: 0 4px 12px rgba(var(--ion-color-primary-rgb), 0.3);\n}\n.modern-content[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0Usd0JBQUE7RUFDRjtFQUNBO0lBQ0UsNkJBQUE7RUFDRjtBQUNGO0FBRUE7RUFDRTtJQUNFLHdCQUFBO0VBQUY7RUFFQTtJQUNFLDRCQUFBO0VBQUY7QUFDRjtBQUdBO0VBQ0Usb0VBQUE7QUFERjtBQUlBO0VBQ0UscUVBQUE7QUFERjtBQUtFO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0FBRko7QUFJSTtFQUNFLG1CQUFBO0FBRk47QUFPUTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUFMVjtBQVNNO0VBQ0UsaUJBQUE7QUFQUjtBQVVNO0VBQ0UsNEJBQUE7QUFSUjtBQWNBO0VBQ0UsWUFBQTtBQVhGO0FBY0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQVhGO0FBY0E7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBWEY7QUFhRTtFQUNFLGNBQUE7QUFYSjtBQWVBO0VBQ0UsK0JBQUE7RUFDQSx3QkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFaRjtBQWVBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFaRjtBQWVBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFaRjtBQWVBO0VBQ0UsdURBQUE7QUFaRjtBQWVBO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFaRjtBQWVBO0VBQ0Usa0JBQUE7RUFDQSx3QkFBQTtBQVpGO0FBZUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBWkY7QUFlQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQVpGO0FBa0JNO0VBQ0UsaUJBQUE7QUFmUjtBQWtCTTtFQUNFLHFCQUFBO0FBaEJSO0FBd0JJO0VBQ0UsZ0JBQUE7QUFyQk47QUF3Qkk7RUFDRSxpQkFBQTtBQXRCTjtBQThCRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBM0JKO0FBOEJFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FBNUJKO0FBaUNFO0VBQ0UsY0FBQTtBQTlCSjtBQWdDSTtFQUNFLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQTlCTjtBQWdDTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUE5QlI7QUFnQ1E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBOUJWO0FBa0NNO0VBQ0UscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FBaENSO0FBcUNFO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdFQUFBO0FBbkNKO0FBcUNJO0VBQ0UsZ0JBQUE7QUFuQ04iLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGtleWZyYW1lcyBzbGlkZS1sZWZ0IHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWRlLXJpZ2h0IHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMHB4KTtcclxuICB9XHJcbn1cclxuXHJcbi5zbGlkZS1sZWZ0IHtcclxuICBhbmltYXRpb246IHNsaWRlLWxlZnQgMC41cyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7XHJcbn1cclxuXHJcbi5zbGlkZS1yaWdodCB7XHJcbiAgYW5pbWF0aW9uOiBzbGlkZS1yaWdodCAwLjVzIGN1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCkgYm90aDtcclxufVxyXG5cclxuaW9uLWZvb3RlciB7XHJcbiAgaW9uLXJvdyB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgIGlvbi1mYWItYnV0dG9uIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAyLjV2aDtcclxuICAgIH1cclxuXHJcbiAgICBpb24tbGlzdCB7XHJcbiAgICAgIGlvbi1saXN0LWhlYWRlciB7XHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpb24taW5wdXQsIGlvbi10ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmVycm9yIHtcclxuICAgICAgICBmb250LXNpemU6IDAuNzVlbSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5pb24tdG9vbGJhciwgaW9uLWhlYWRlciB7XHJcbiAgaGVpZ2h0OiA0NHB4O1xyXG59XHJcblxyXG5pb24taW1nIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbmlvbi1zbGlkZXMge1xyXG4gIGhlaWdodDogMzV2aDtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gIGRpcmVjdGlvbjogbHRyO1xyXG4gIFxyXG4gIFtkaXI9XCJydGxcIl0gJiB7XHJcbiAgICBkaXJlY3Rpb246IHJ0bDtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1zZWxlY3Qge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xyXG4gIHdpZHRoOiAzNSU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gIC0tcGFkZGluZy1lbmQ6IDA7XHJcbn1cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgd2lkdGg6IDYwJTtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgLS1wYWRkaW5nLWVuZDogMDtcclxufVxyXG5cclxuLnBtLWF3ZXNvbWUtZGl2aWRlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5zaGFkb3ctdG9wIHtcclxuICBib3gtc2hhZG93OiAwcHggLTEuNXB4IDEuNXB4IHJnYmEoMTk2LCAxOTYsIDE5NiwgMC40MTQpO1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuICAtLXBhZGRpbmctZW5kOiAwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG5pb24taXRlbVtsaW5lcz1cIm5vbmVcIl0ge1xyXG4gIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDA7XHJcbn1cclxuXHJcbmlvbi1zZWFyY2hiYXIge1xyXG4gIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAtLXBhZGRpbmctZW5kOiAwO1xyXG4gIC0tcGFkZGluZy10b3A6IDA7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5pb24tc2VsZWN0LW9wdGlvbiB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG46aG9zdCB7XHJcbiAgLnJ0bC1zdXBwb3J0IHtcclxuICAgICZbZGlyPVwicnRsXCJdIHtcclxuICAgICAgaW9uLWlucHV0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgaW9uLWJ1dHRvbiBpb24taWNvbiB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdCB7XHJcbiAgW2Rpcj1cInJ0bFwiXSB7XHJcbiAgICAuaW9uLXRleHQtZW5kIHtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmlvbi10ZXh0LXN0YXJ0IHtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBBZGQgYW55IGFkZGl0aW9uYWwgUlRMLXNwZWNpZmljIHN0eWxlcyBoZXJlXHJcblxyXG4ubW9kZXJuLWhlYWRlciB7XHJcbiAgLmFwcC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gIH1cclxuICBcclxuICAuYXBwLXRhZ2xpbmUge1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgfVxyXG59XHJcblxyXG4ubW9kZXJuLWNvbnRlbnQge1xyXG4gIC5waG9uZS1pbnB1dC1jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiAycmVtIDA7XHJcbiAgICBcclxuICAgIC5jb3VudHJ5LXNlbGVjdCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgIFxyXG4gICAgICAuY291bnRyeS1idXR0b24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBnYXA6IDhweDtcclxuICAgICAgICBcclxuICAgICAgICAuY291bnRyeS1mbGFnIHtcclxuICAgICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLnBob25lLWlucHV0IHtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuc3VibWl0LWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgLS1ib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4zKTtcclxuICAgIFxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"]
});

/***/ }),

/***/ 7274:
/*!***********************************************************************!*\
  !*** ./node_modules/@capacitor/splash-screen/dist/esm/definitions.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/// <reference types="@capacitor/cli" />


/***/ }),

/***/ 2239:
/*!*****************************************************************!*\
  !*** ./node_modules/@capacitor/splash-screen/dist/esm/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashScreen": () => (/* binding */ SplashScreen)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 7274);

const SplashScreen = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('SplashScreen', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_splash-screen_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 2177)).then(m => new m.SplashScreenWeb())
});



/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map