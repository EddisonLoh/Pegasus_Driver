"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_details_details_module_ts"],{

/***/ 6244:
/*!*********************************************************!*\
  !*** ./src/app/pages/details/details-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsPageRoutingModule": () => (/* binding */ DetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details.page */ 5362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _details_page__WEBPACK_IMPORTED_MODULE_0__.DetailsPage
    }
];
class DetailsPageRoutingModule {
}
DetailsPageRoutingModule.ɵfac = function DetailsPageRoutingModule_Factory(t) { return new (t || DetailsPageRoutingModule)(); };
DetailsPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DetailsPageRoutingModule });
DetailsPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DetailsPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 557:
/*!*************************************************!*\
  !*** ./src/app/pages/details/details.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsPageModule": () => (/* binding */ DetailsPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details-routing.module */ 6244);
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details.page */ 5362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);








class DetailsPageModule {
}
DetailsPageModule.ɵfac = function DetailsPageModule_Factory(t) { return new (t || DetailsPageModule)(); };
DetailsPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DetailsPageModule });
DetailsPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _details_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailsPageRoutingModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule.forChild()] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DetailsPageModule, { declarations: [_details_page__WEBPACK_IMPORTED_MODULE_1__.DetailsPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
        _details_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailsPageRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateModule] }); })();


/***/ }),

/***/ 5362:
/*!***********************************************!*\
  !*** ./src/app/pages/details/details.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailsPage": () => (/* binding */ DetailsPage)
/* harmony export */ });
/* harmony import */ var C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/auth */ 1577);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/geolocation */ 7621);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/camera */ 4241);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 3298);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_overlay_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/overlay.service */ 5596);
/* harmony import */ var src_app_services_avatar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/avatar.service */ 5083);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 4666);


















function DetailsPage_ng_container_9_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 33);
  }

  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r10.imageDisplayUrl, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}

function DetailsPage_ng_container_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function DetailsPage_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DetailsPage_ng_container_9_img_1_Template, 1, 1, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, DetailsPage_ng_container_9_div_2_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "ion-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.imageDisplayUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.imageDisplayUrl);
  }
}

function DetailsPage_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-spinner", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 1, "DETAILS.UPLOAD_STATUS.UPLOADING"));
  }
}

function DetailsPage_ion_note_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-note", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "VALIDATION.REQUIRED"), " ");
  }
}

function DetailsPage_ion_select_option_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-select-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const type_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", type_r12.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", type_r12.name, " ");
  }
}

function DetailsPage_ng_container_59_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 42);
  }

  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r13.licenseDisplayUrl, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}

function DetailsPage_ng_container_59_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 1, "DETAILS.LICENSE_INFO.TAP_TO_UPLOAD"));
  }
}

function DetailsPage_ng_container_59_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function DetailsPage_ng_container_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, DetailsPage_ng_container_59_img_1_Template, 1, 1, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, DetailsPage_ng_container_59_div_2_Template, 5, 3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, DetailsPage_ng_container_59_div_3_Template, 2, 0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.licenseDisplayUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r5.licenseDisplayUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.licenseDisplayUrl);
  }
}

function DetailsPage_ng_template_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-spinner", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 1, "DETAILS.UPLOAD_STATUS.UPLOADING"));
  }
}

function DetailsPage_ion_spinner_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ion-spinner", 44);
  }
}

function DetailsPage_div_68_p_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u274C Form validation incomplete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function DetailsPage_div_68_p_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u274C Profile photo required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function DetailsPage_div_68_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u274C License photo required");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}

function DetailsPage_div_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 45)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Missing requirements:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, DetailsPage_div_68_p_3_Template, 2, 0, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, DetailsPage_div_68_p_4_Template, 2, 0, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, DetailsPage_div_68_p_5_Template, 2, 0, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r9.form.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r9.imageUrl || !ctx_r9.imageUrl.startsWith("img_") && !ctx_r9.imageUrl.startsWith("assets/"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !((tmp_2_0 = ctx_r9.form.get("driverLicenseImage")) == null ? null : tmp_2_0.value) || !((tmp_2_0 = ctx_r9.form.get("driverLicenseImage")) == null ? null : tmp_2_0.value.startsWith("img_")) && !((tmp_2_0 = ctx_r9.form.get("driverLicenseImage")) == null ? null : tmp_2_0.value.startsWith("assets/")));
  }
}

class DetailsPage {
  constructor(overlay, authy, avatar, router, actionSheetController, alertController, loadingController, platform, translate, firestore) {
    this.overlay = overlay;
    this.authy = authy;
    this.avatar = avatar;
    this.router = router;
    this.actionSheetController = actionSheetController;
    this.alertController = alertController;
    this.loadingController = loadingController;
    this.platform = platform;
    this.translate = translate;
    this.firestore = firestore;
    this.imageDisplayUrl = '';
    this.licenseDisplayUrl = '';
    this.cartypes = [];
    this.isSubmitting = false;
    this.isUploading = false;
    this.isUploadingLicense = false; // Ensure the user is authenticated

    this.authy.onAuthStateChanged(user => {
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
    this.avatar.getCartypes().subscribe({
      next: d => {
        console.log('Cartypes received:', d);
        this.cartypes = d;
      },
      error: error => {
        console.error('Failed to fetch cartypes:', error); // Fallback to mock data if service fails

        this.cartypes = [{
          id: 'sedan',
          name: 'Sedan'
        }, {
          id: 'suv',
          name: 'SUV'
        }, {
          id: 'hatchback',
          name: 'Hatchback'
        }, {
          id: 'pickup',
          name: 'Pickup Truck'
        }, {
          id: 'van',
          name: 'Van'
        }, {
          id: 'coupe',
          name: 'Coupe'
        }];
      }
    });
  }

  ngOnInit() {
    this.initForm(); // Initialize with local default images for Android compatibility

    if (!this.imageDisplayUrl) {
      this.imageDisplayUrl = 'assets/imgs/about.svg';
      this.imageUrl = 'assets/imgs/about.svg'; // Set the imageUrl for validation
    }

    if (!this.licenseDisplayUrl) {
      this.licenseDisplayUrl = 'assets/icon/favicon.png'; // Set the form control value for license image

      this.form.patchValue({
        driverLicenseImage: 'assets/icon/favicon.png'
      });
    } // Test connectivity on page load


    this.testConnectivity();
  }

  testConnectivity() {
    var _this = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('Testing Firebase connectivity...');
        const isConnected = yield _this.avatar.testConnectivity();
        console.log('Connectivity test result:', isConnected ? 'SUCCESS' : 'FAILED');
      } catch (error) {
        console.error('Connectivity test error:', error);
      }
    })();
  } // Helper method to add timeout to promises


  withTimeout(promise, timeoutMs, errorMessage) {
    return Promise.race([promise, new Promise((_, reject) => setTimeout(() => reject(new Error(errorMessage)), timeoutMs))]);
  } // Method to reset form state in case of errors


  resetFormState() {
    this.isSubmitting = false;
    this.isUploading = false;
    this.isUploadingLicense = false;
  } // Method to check if all required data is present for submission


  isFormCompleteForSubmission() {
    const formValid = this.form.valid; // Accept both uploaded images (img_) and default images (assets/)

    const hasProfileImage = this.imageUrl && (this.imageUrl.startsWith('img_') || this.imageUrl.startsWith('assets/'));
    const licenseImageValue = this.form.get('driverLicenseImage')?.value;
    const hasLicenseImage = licenseImageValue && (licenseImageValue.startsWith('img_') || licenseImageValue.startsWith('assets/'));
    console.log('Form validation check:', {
      formValid,
      hasProfileImage,
      hasLicenseImage,
      imageUrl: this.imageUrl,
      licenseImageValue: licenseImageValue
    });
    return formValid && hasProfileImage && hasLicenseImage;
  }

  initForm() {
    this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
      fullname: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^[a-zA-Z ]*$')],
        updateOn: 'change'
      }),
      lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^[a-zA-Z ]*$')],
        updateOn: 'change'
      }),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(100)],
        updateOn: 'change'
      }),
      plateNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^[A-Z0-9- ]*$')]
      }),
      carType: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
      }),
      carName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(50)]
      }),
      mileage: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.max(999999)]
      }),
      driverLicense: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', {
        validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^[A-Z0-9-]*$')]
      }),
      driverLicenseImage: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('')
    }); // Monitor form changes with shorter debounce time

    this.form.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(100), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.distinctUntilChanged)()).subscribe(() => {
      console.log('Form validity:', this.form.valid);
    }); // Add status changes monitoring for immediate validation feedback

    this.form.statusChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.distinctUntilChanged)()).subscribe(status => {
      console.log('Form status:', status);
    });
  }

  presentImageSourceActionSheet() {
    var _this2 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionSheet = yield _this2.actionSheetController.create({
        header: (yield _this2.translate.get('DETAILS.PROFILE_INFO.UPLOAD_PHOTO').toPromise()) || 'Upload Profile Photo',
        buttons: [{
          text: yield _this2.translate.get('DETAILS.BUTTONS.CAMERA').toPromise(),
          icon: 'camera',
          handler: () => {
            _this2.getImage(_capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Camera);
          }
        }, {
          text: yield _this2.translate.get('DETAILS.BUTTONS.GALLERY').toPromise(),
          icon: 'images',
          handler: () => {
            _this2.getImage(_capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Photos);
          }
        }, {
          text: yield _this2.translate.get('DETAILS.BUTTONS.FILE').toPromise(),
          icon: 'document',
          handler: () => {
            _this2.getImage(_capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Photos);
          }
        }, {
          text: yield _this2.translate.get('DETAILS.BUTTONS.CANCEL').toPromise(),
          icon: 'close',
          role: 'cancel'
        }]
      });
      yield actionSheet.present();
    })();
  }

  getImage(source) {
    var _this3 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this3.loadingController.create({
        message: (yield _this3.translate.get('DETAILS.UPLOAD_STATUS.UPLOADING').toPromise()) || 'Uploading image...'
      });

      try {
        console.log('Getting profile photo from camera/gallery...');
        const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto({
          quality: 70,
          allowEditing: true,
          resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraResultType.Base64,
          source: source,
          width: 400 // Limit width to reduce size

        });

        if (image.base64String) {
          yield loading.present();
          _this3.isUploading = true;
          console.log('Compressing and storing image...'); // Store image and get reference with timeout

          const imageReference = yield _this3.withTimeout(_this3.compressImageForFirebase(image, 'profile'), 30000, 'Image processing timed out. Please try with a smaller image.');
          _this3.imageUrl = imageReference;
          console.log('Getting display URL...'); // Get display URL for immediate preview

          _this3.imageDisplayUrl = yield _this3.getImageDataUrl(imageReference, 'profile'); // Trigger change detection for form validation

          _this3.form.updateValueAndValidity();

          console.log('Profile image stored successfully with reference:', imageReference);
          const successAlert = yield _this3.alertController.create({
            header: (yield _this3.translate.get('COMMON.SUCCESS').toPromise()) || 'Success',
            message: (yield _this3.translate.get('DETAILS.ALERTS.PROFILE_UPLOAD_SUCCESS').toPromise()) || 'Profile image uploaded successfully!',
            buttons: ['OK']
          });
          yield successAlert.present();
        } else {
          throw new Error('No image data received from camera');
        }
      } catch (error) {
        console.error('getImage error:', error);
        let message = 'Upload failed. Please try again.';

        if (error.message?.includes('User cancelled')) {
          // Don't show error for user cancellation
          return;
        } else if (error.message?.includes('Photo URL is required') || error.message?.includes('too big')) {
          message = (yield _this3.translate.get('DETAILS.ALERTS.IMAGE_TOO_BIG').toPromise()) || 'The image is too big. Please try another image with a smaller size.';
        } else if (error.message?.includes('Permission')) {
          message = 'Camera permission is required. Please enable camera access in your device settings.';
        } else if (error.message?.includes('network') || error.message?.includes('Network')) {
          message = 'Network error. Please check your internet connection and try again.';
        } else {
          message = (yield _this3.translate.get('DETAILS.ALERTS.UPLOAD_FAILED').toPromise()) || `Upload failed: ${error.message || 'Unknown error'}`;
        }

        const alert = yield _this3.alertController.create({
          header: (yield _this3.translate.get('DETAILS.ALERTS.UPLOAD_FAILED').toPromise()) || 'Upload Failed',
          message: message,
          buttons: ['OK']
        });
        yield alert.present();
      } finally {
        _this3.isUploading = false;

        try {
          yield loading.dismiss();
        } catch (dismissError) {
          console.warn('Error dismissing loading:', dismissError);
        }
      }
    })();
  }

  updateProfile() {
    var _this4 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this4.isFormCompleteForSubmission() || _this4.isSubmitting) {
        _this4.markFormGroupTouched(_this4.form);

        return;
      }

      _this4.isSubmitting = true;
      let loading = yield _this4.loadingController.create({
        message: (yield _this4.translate.get('COMMON.PLEASE_WAIT').toPromise()) || 'Please wait...'
      });

      try {
        yield loading.present();
        console.log('Starting profile update process...'); // Validate profile image (accept both uploaded and default images)

        if (!_this4.imageUrl || !_this4.imageUrl.startsWith('img_') && !_this4.imageUrl.startsWith('assets/')) {
          throw new Error('Profile photo is required');
        } // Validate license image (accept both uploaded and default images)


        const licenseImageUrl = _this4.form.get('driverLicenseImage')?.value;

        if (!licenseImageUrl || !licenseImageUrl.startsWith('img_') && !licenseImageUrl.startsWith('assets/')) {
          throw new Error('Driver license photo is required');
        } // Store current user reference


        const currentUser = _this4.authy.currentUser;

        if (!currentUser) {
          throw new Error('No authenticated user found. Please log in again.');
        }

        console.log('Updating Firebase Auth profile...'); // Update profile (use a local asset for Firebase Auth since we store actual images in Firestore)

        yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__.updateProfile)(currentUser, {
          displayName: `${_this4.form.value.fullname} ${_this4.form.value.lastname}`,
          photoURL: `assets/imgs/about.svg`
        });
        const carInfo = {
          plateNumber: _this4.form.value.plateNumber,
          carType: _this4.form.value.carType,
          carName: _this4.form.value.carName,
          mileage: _this4.form.value.mileage
        };
        const driverInfo = {
          driverLicense: _this4.form.value.driverLicense,
          driverLicenseImage: _this4.form.value.driverLicenseImage
        };
        console.log('Checking location permissions...');
        const permissionStatus = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.checkPermissions();
        console.log('Location permission status:', permissionStatus);

        if (permissionStatus.location !== 'granted') {
          console.log('Requesting location permissions...');
          const requestResult = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.requestPermissions();

          if (requestResult.location !== 'granted') {
            throw new Error('Location permission is required to register as a driver. Please enable location access in your device settings.');
          }
        }

        console.log('Getting current location...');
        const coordinates = yield _this4.withTimeout(_capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.getCurrentPosition({
          enableHighAccuracy: false,
          timeout: 15000
        }), 20000, 'Location request timed out. Please ensure GPS is enabled and try again.');
        console.log('Location obtained:', coordinates);
        console.log('Creating driver profile...'); // Use stored user reference with timeout

        yield _this4.withTimeout(_this4.avatar.createNewDriver(coordinates, _this4.form.value.fullname + ' ' + _this4.form.value.lastname, _this4.form.value.email, currentUser.phoneNumber, carInfo.carName, carInfo.carType, carInfo.plateNumber, _this4.imageUrl, driverInfo.driverLicenseImage, driverInfo.driverLicense, carInfo.mileage), 30000, 'Driver profile creation timed out. Please check your internet connection and try again.');
        console.log('Creating payment card...');
        yield _this4.withTimeout(_this4.avatar.createCard('Cash', '0', 'cash', 'None'), 10000, 'Payment card creation timed out. Please try again.');
        _this4.approve2 = false;
        console.log('Profile update completed successfully. Navigating to tabs...'); // Navigate after successful update

        yield _this4.router.navigateByUrl('tabs', {
          replaceUrl: true
        });
      } catch (error) {
        console.error('Profile update error:', error); // Determine specific error message

        let errorMessage = 'An unexpected error occurred. Please try again.';

        if (error.message) {
          errorMessage = error.message;
        } else if (error.code) {
          switch (error.code) {
            case 'auth/network-request-failed':
              errorMessage = 'Network error. Please check your internet connection and try again.';
              break;

            case 'auth/too-many-requests':
              errorMessage = 'Too many requests. Please wait a moment and try again.';
              break;

            case 'permission-denied':
              errorMessage = 'Permission denied. Please check your account permissions.';
              break;

            case 'unavailable':
              errorMessage = 'Service temporarily unavailable. Please try again later.';
              break;

            default:
              errorMessage = `Error (${error.code}): ${error.message || 'Unknown error occurred'}`;
          }
        } // Show detailed error alert


        const alert = yield _this4.alertController.create({
          header: 'Registration Failed',
          message: errorMessage,
          buttons: [{
            text: 'OK',
            role: 'cancel'
          }, {
            text: 'Retry',
            handler: () => {
              // Allow user to retry
              setTimeout(() => {
                _this4.updateProfile();
              }, 1000);
            }
          }]
        });
        yield alert.present();
      } finally {
        _this4.resetFormState();

        if (loading) {
          try {
            yield loading.dismiss();
          } catch (dismissError) {
            console.warn('Error dismissing loading:', dismissError);
          }
        }
      }
    })();
  }

  selectDriverLicenseImage() {
    var _this5 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionSheet = yield _this5.actionSheetController.create({
        header: yield _this5.translate.get('DETAILS.LICENSE_INFO.UPLOAD_PHOTO').toPromise(),
        buttons: [{
          text: yield _this5.translate.get('DETAILS.BUTTONS.CAMERA').toPromise(),
          icon: 'camera',
          handler: () => {
            _this5.getLicenseImage(_capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Camera);
          }
        }, {
          text: yield _this5.translate.get('DETAILS.BUTTONS.GALLERY').toPromise(),
          icon: 'images',
          handler: () => {
            _this5.getLicenseImage(_capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Photos);
          }
        }, {
          text: yield _this5.translate.get('DETAILS.BUTTONS.FILE').toPromise(),
          icon: 'document',
          handler: () => {
            _this5.getLicenseImage(_capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Photos);
          }
        }, {
          text: yield _this5.translate.get('DETAILS.BUTTONS.CANCEL').toPromise(),
          icon: 'close',
          role: 'cancel'
        }]
      });
      yield actionSheet.present();
    })();
  }

  getLicenseImage(source) {
    var _this6 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this6.loadingController.create({
        message: (yield _this6.translate.get('DETAILS.UPLOAD_STATUS.UPLOADING').toPromise()) || 'Uploading image...'
      });

      try {
        console.log('Getting license photo from camera/gallery...');
        const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto({
          quality: 70,
          allowEditing: true,
          resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraResultType.Base64,
          source: source,
          width: 400 // Limit width to reduce size

        });

        if (image.base64String) {
          yield loading.present();
          _this6.isUploadingLicense = true; // Store image and get reference

          const imageReference = yield _this6.compressImageForFirebase(image, 'license');

          _this6.form.patchValue({
            driverLicenseImage: imageReference
          }); // Get display URL for immediate preview


          _this6.licenseDisplayUrl = yield _this6.getImageDataUrl(imageReference, 'license'); // Trigger change detection for form validation

          _this6.form.updateValueAndValidity();

          console.log('License image stored successfully with reference:', imageReference);
          const successAlert = yield _this6.alertController.create({
            header: (yield _this6.translate.get('COMMON.SUCCESS').toPromise()) || 'Success',
            message: (yield _this6.translate.get('DETAILS.ALERTS.LICENSE_UPLOAD_SUCCESS').toPromise()) || 'License image uploaded successfully!',
            buttons: ['OK']
          });
          yield successAlert.present();
        }
      } catch (error) {
        console.error('getLicenseImage error:', error);
        const message = error.message?.includes('Photo URL is required') ? (yield _this6.translate.get('DETAILS.ALERTS.IMAGE_TOO_BIG').toPromise()) || 'The image is too big. Please try another image with a smaller size.' : (yield _this6.translate.get('DETAILS.ALERTS.UPLOAD_FAILED').toPromise()) || `Upload failed: ${error.message || 'Unknown error'}`;
        const alert = yield _this6.alertController.create({
          header: (yield _this6.translate.get('DETAILS.ALERTS.UPLOAD_FAILED').toPromise()) || 'Upload Failed',
          message: message,
          buttons: ['OK']
        });
        yield alert.present();
      } finally {
        _this6.isUploadingLicense = false;
        yield loading.dismiss();
      }
    })();
  }

  compressImageForFirebase(image, type) {
    var _this7 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (!image.base64String) {
          throw new Error('No image data provided');
        }

        if (!_this7.user?.uid) {
          throw new Error('User not authenticated');
        } // Store the full-quality compressed image in Firestore for actual use


        const fullQualityBase64 = yield _this7.compressImage(image.base64String, 0.8, 800, 600); // Store full image in Firestore

        const timestamp = Date.now();
        const imageId = `${type}_${timestamp}`;
        const imageDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__.doc)(_this7.firestore, `drivers/${_this7.user.uid}/images/${imageId}`);
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__.setDoc)(imageDocRef, {
          imageData: fullQualityBase64,
          type: type,
          uploadedAt: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__.serverTimestamp)(),
          uploadedBy: _this7.user.uid
        }); // Return a reference ID that we can use to retrieve the full image

        const imageReference = `img_${_this7.user.uid}_${imageId}`;
        console.log('Image stored in Firestore with ID:', imageReference);
        console.log('Full quality image size:', fullQualityBase64.length, 'characters');
        return imageReference;
      } catch (error) {
        console.error('Error processing image:', error);
        throw error;
      }
    })();
  } // Method to retrieve actual image data for display


  getImageDataUrl(imageReference, type = 'profile') {
    var _this8 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Handle default images
        if (!imageReference || imageReference === 'default_profile') {
          return 'assets/imgs/about.svg';
        }

        if (imageReference === 'default_license') {
          return 'assets/icon/favicon.png';
        }

        if (!imageReference.startsWith('img_')) {
          // Return appropriate default based on type
          return type === 'profile' ? 'assets/imgs/about.svg' : 'assets/icon/favicon.png';
        } // Extract user ID and image ID from reference


        const parts = imageReference.split('_');

        if (parts.length < 3) {
          return type === 'profile' ? 'assets/imgs/about.svg' : 'assets/icon/favicon.png';
        }

        const userId = parts[1];
        const imageId = parts.slice(2).join('_'); // Get image from Firestore

        const imageDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__.doc)(_this8.firestore, `drivers/${userId}/images/${imageId}`);
        const imageDoc = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__.getDoc)(imageDocRef);

        if (imageDoc.exists()) {
          const data = imageDoc.data();
          return `data:image/jpeg;base64,${data.imageData}`;
        } // Return default if image not found


        return type === 'profile' ? 'assets/imgs/about.svg' : 'assets/icon/favicon.png';
      } catch (error) {
        console.error('Error retrieving image:', error); // Return default on error

        return type === 'profile' ? 'assets/imgs/about.svg' : 'assets/icon/favicon.png';
      }
    })();
  }

  compressImage(base64, quality = 0.7, maxWidth = 800, maxHeight = 600) {
    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise((resolve, reject) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();

        img.onload = () => {
          // Calculate new dimensions
          let {
            width,
            height
          } = img;

          if (width > height) {
            if (width > maxWidth) {
              height = height * maxWidth / width;
              width = maxWidth;
            }
          } else {
            if (height > maxHeight) {
              width = width * maxHeight / height;
              height = maxHeight;
            }
          }

          canvas.width = width;
          canvas.height = height; // Draw and compress

          ctx.drawImage(img, 0, 0, width, height);
          const compressedBase64 = canvas.toDataURL('image/jpeg', quality).split(',')[1];
          console.log('Image compressed from', base64.length, 'to', compressedBase64.length, 'characters');
          resolve(compressedBase64);
        };

        img.onerror = () => reject(new Error('Failed to load image for compression'));

        img.src = `data:image/jpeg;base64,${base64}`;
      });
    })();
  }

  markFormGroupTouched(formGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  getErrorMessage(error) {
    if (error.message) {
      return error.message;
    }

    switch (error.code) {
      case 'auth/requires-recent-login':
        return 'Please re-authenticate to update your email';

      case 'auth/email-already-in-use':
        return 'This email is already registered';

      case 'auth/invalid-email':
        return 'Please enter a valid email address';

      case 'auth/operation-not-allowed':
        return 'Email verification is required before changing email';

      case 'auth/network-request-failed':
        return 'Network error. Please check your internet connection.';

      case 'auth/too-many-requests':
        return 'Too many requests. Please wait and try again.';

      case 'permission-denied':
        return 'Permission denied. Please check your account permissions.';

      case 'unavailable':
        return 'Service temporarily unavailable. Please try again later.';

      case 'failed-precondition':
        return 'Database operation failed. Please try again.';

      default:
        return error.toString() || 'An unexpected error occurred';
    }
  }

}

DetailsPage.ɵfac = function DetailsPage_Factory(t) {
  return new (t || DetailsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_overlay_service__WEBPACK_IMPORTED_MODULE_3__.OverlayService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__.Auth), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_avatar_service__WEBPACK_IMPORTED_MODULE_4__.AvatarService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ActionSheetController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__.Firestore));
};

DetailsPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: DetailsPage,
  selectors: [["app-details"]],
  decls: 72,
  vars: 51,
  consts: [[1, "ion-padding", "custom-content"], [3, "formGroup"], [1, "profile-image-section"], [1, "image-container", 3, "click"], [4, "ngIf", "ngIfElse"], ["uploadingTemplate", ""], [1, "form-container"], [1, "custom-group"], ["position", "floating"], ["formControlName", "fullname", "type", "text"], ["slot", "error", 4, "ngIf"], ["formControlName", "lastname", 3, "placeholder"], ["formControlName", "email", "type", "email", 3, "placeholder"], ["formControlName", "plateNumber", 3, "placeholder"], ["formControlName", "carType", 3, "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "carName", 3, "placeholder"], ["formControlName", "mileage", "type", "number", 3, "placeholder"], ["formControlName", "driverLicense", 3, "placeholder"], [1, "license-image-section"], [1, "license-image-container", 3, "click"], ["licenseUploadingTemplate", ""], [1, "submit-section"], ["expand", "block", 1, "submit-button", 3, "disabled", "click"], ["name", "save", "slot", "start"], ["name", "crescent", 4, "ngIf"], ["style", "margin-top: 10px; font-size: 12px; color: #666;", 4, "ngIf"], ["fill", "clear", "size", "small", 2, "margin-top", "10px", 3, "click"], ["name", "wifi", "slot", "start"], ["alt", "Profile photo", 3, "src", 4, "ngIf"], ["class", "placeholder", 4, "ngIf"], [1, "overlay"], ["name", "camera"], ["alt", "Profile photo", 3, "src"], [1, "placeholder"], ["name", "person"], [1, "upload-loader"], ["name", "circular"], ["slot", "error"], [3, "value"], ["alt", "License photo", 3, "src", 4, "ngIf"], ["class", "overlay", 4, "ngIf"], ["alt", "License photo", 3, "src"], ["name", "id-card"], ["name", "crescent"], [2, "margin-top", "10px", "font-size", "12px", "color", "#666"], [4, "ngIf"]],
  template: function DetailsPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-content", 0)(6, "form", 1)(7, "div", 2)(8, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DetailsPage_Template_div_click_8_listener() {
        return ctx.presentImageSourceActionSheet();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, DetailsPage_ng_container_9_Template, 5, 2, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, DetailsPage_ng_template_10_Template, 5, 3, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 6)(13, "ion-list")(14, "ion-item-group", 7)(15, "ion-item-divider")(16, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](18, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "ion-item")(20, "ion-label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](22, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](23, "ion-input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, DetailsPage_ion_note_24_Template, 3, 3, "ion-note", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "ion-item");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "ion-input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](27, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "ion-item");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "ion-input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](30, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "ion-item-group", 7)(32, "ion-item-divider")(33, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](35, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "ion-item");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "ion-input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](38, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "ion-item")(40, "ion-select", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](41, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, DetailsPage_ion_select_option_42_Template, 2, 2, "ion-select-option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "ion-item");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](44, "ion-input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](45, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "ion-item");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](47, "ion-input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](48, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "ion-item-group", 7)(50, "ion-item-divider")(51, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](53, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "ion-item");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](55, "ion-input", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](56, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 19)(58, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DetailsPage_Template_div_click_58_listener() {
        return ctx.selectDriverLicenseImage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](59, DetailsPage_ng_container_59_Template, 4, 3, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](60, DetailsPage_ng_template_60_Template, 5, 3, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 22)(63, "ion-button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DetailsPage_Template_ion_button_click_63_listener() {
        return ctx.updateProfile();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](64, "ion-icon", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](66, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](67, DetailsPage_ion_spinner_67_Template, 1, 0, "ion-spinner", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](68, DetailsPage_div_68_Template, 6, 3, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "ion-button", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DetailsPage_Template_ion_button_click_69_listener() {
        return ctx.testConnectivity();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](70, "ion-icon", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71, " Test Firebase Connection ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](11);

      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](61);

      let tmp_5_0;
      let tmp_7_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 25, "DETAILS.TITLE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isUploading)("ngIfElse", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](18, 27, "DETAILS.PERSONAL_INFO.TITLE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("ion-invalid", ((tmp_5_0 = ctx.form.get("fullname")) == null ? null : tmp_5_0.touched) && ((tmp_5_0 = ctx.form.get("fullname")) == null ? null : tmp_5_0.invalid));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](22, 29, "DETAILS.PERSONAL_INFO.FIRST_NAME"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_7_0 = ctx.form.get("fullname")) == null ? null : tmp_7_0.touched) && ((tmp_7_0 = ctx.form.get("fullname")) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors["required"]));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](27, 31, "DETAILS.PERSONAL_INFO.LAST_NAME"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](30, 33, "DETAILS.PERSONAL_INFO.EMAIL"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](35, 35, "DETAILS.VEHICLE_INFO.TITLE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](38, 37, "DETAILS.VEHICLE_INFO.PLATE_NUMBER"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](41, 39, "DETAILS.VEHICLE_INFO.CAR_TYPE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.cartypes);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](45, 41, "DETAILS.VEHICLE_INFO.CAR_NAME"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](48, 43, "DETAILS.VEHICLE_INFO.MILEAGE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](53, 45, "DETAILS.LICENSE_INFO.TITLE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](56, 47, "DETAILS.LICENSE_INFO.NUMBER"));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isUploadingLicense)("ngIfElse", _r6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.isFormCompleteForSubmission() || ctx.isSubmitting);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](66, 49, "DETAILS.BUTTONS.SUBMIT"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isSubmitting);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isFormCompleteForSubmission());
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonItemDivider, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonItemGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonNote, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.NumericValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.TextValueAccessor, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe],
  styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-color-light);\n}\n\nion-item-group[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  background: var(--ion-color-light);\n  border-radius: 8px;\n}\n\nion-item[_ngcontent-%COMP%] {\n  --background: var(--ion-color-light);\n  --border-radius: 8px;\n  margin-bottom: 8px;\n}\n\nion-item.ion-invalid.ion-touched[_ngcontent-%COMP%] {\n  --highlight-background: var(--ion-color-danger);\n}\n\nion-item-divider[_ngcontent-%COMP%] {\n  --background: transparent;\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  font-weight: 600;\n  letter-spacing: 0.4px;\n  text-transform: uppercase;\n  font-size: 0.8rem;\n}\n\nion-note[_ngcontent-%COMP%] {\n  color: var(--ion-color-danger);\n  font-size: 0.8rem;\n  margin-top: 4px;\n}\n\nion-button[_ngcontent-%COMP%] {\n  --border-radius: 8px;\n  margin-top: 16px;\n}\n\nion-button[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\nion-img[_ngcontent-%COMP%] {\n  margin: auto;\n  width: auto;\n}\n\nion-avatar[_ngcontent-%COMP%] {\n  width: 128px;\n  height: 128px;\n}\n\n.preview[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  display: flex;\n  justify-content: center;\n}\n\n.fallback[_ngcontent-%COMP%] {\n  width: 128px;\n  height: 128px;\n  border-radius: 50%;\n  background: #bfbfbf;\n  color: black;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 500;\n}\n\n#container[_ngcontent-%COMP%] {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.custom-content[_ngcontent-%COMP%] {\n  --background: #f5f5f5;\n}\n\n.profile-image-section[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 20px 0 30px;\n}\n\n.profile-image-section[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 120px;\n  height: 120px;\n  border-radius: 60px;\n  overflow: hidden;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n  transition: transform 0.3s ease;\n  background: #f8f9fa;\n}\n\n.profile-image-section[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n\n.profile-image-section[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.profile-image-section[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: #e0e0e0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.profile-image-section[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: #999;\n}\n\n.profile-image-section[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.6);\n  padding: 8px;\n  display: flex;\n  justify-content: center;\n}\n\n.profile-image-section[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 20px;\n}\n\n.form-container[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 16px;\n  margin-bottom: 20px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n}\n\n.form-container[_ngcontent-%COMP%]   .custom-group[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  background: transparent;\n}\n\n.form-container[_ngcontent-%COMP%]   .custom-group[_ngcontent-%COMP%]   ion-item-divider[_ngcontent-%COMP%] {\n  --background: transparent;\n  --padding-start: 0;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  font-size: 0.9rem;\n  color: var(--ion-color-primary);\n  margin-bottom: 12px;\n}\n\n.form-container[_ngcontent-%COMP%]   .custom-group[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --background: #f8f9fa;\n  --border-radius: 8px;\n  --padding-start: 16px;\n  margin-bottom: 12px;\n}\n\n.form-container[_ngcontent-%COMP%]   .custom-group[_ngcontent-%COMP%]   ion-item.ion-invalid.ion-touched[_ngcontent-%COMP%] {\n  --background: #fff5f5;\n}\n\n.form-container[_ngcontent-%COMP%]   .custom-group[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%], .form-container[_ngcontent-%COMP%]   .custom-group[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  font-size: 1rem;\n}\n\n.license-image-section[_ngcontent-%COMP%] {\n  margin: 16px 0;\n}\n\n.license-image-section[_ngcontent-%COMP%]   .license-image-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  min-height: 200px;\n  border-radius: 12px;\n  overflow: hidden;\n  background: #f8f9fa;\n  border: 2px dashed #ddd;\n  transition: all 0.3s ease;\n}\n\n.license-image-section[_ngcontent-%COMP%]   .license-image-container[_ngcontent-%COMP%]:hover {\n  border-color: var(--ion-color-primary);\n  background: #f0f0f0;\n}\n\n.license-image-section[_ngcontent-%COMP%]   .license-image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n  object-fit: cover;\n  border-radius: 8px;\n}\n\n.license-image-section[_ngcontent-%COMP%]   .license-image-container[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 40px 20px;\n  color: #666;\n}\n\n.license-image-section[_ngcontent-%COMP%]   .license-image-container[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 12px;\n}\n\n.license-image-section[_ngcontent-%COMP%]   .license-image-container[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: center;\n}\n\n.submit-section[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n\n.submit-section[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%] {\n  --background: var(--ion-color-primary);\n  --border-radius: 12px;\n  --box-shadow: 0 4px 12px rgba(var(--ion-color-primary-rgb), 0.3);\n  margin: 0;\n  height: 48px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n\n.submit-section[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%]:hover {\n  --background: var(--ion-color-primary-shade);\n}\n\n.submit-section[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\nion-note[_ngcontent-%COMP%] {\n  color: var(--ion-color-danger);\n  font-size: 0.8rem;\n  margin-top: 4px;\n  padding-left: 16px;\n}\n\n.upload-loader[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  background: rgba(var(--ion-color-primary-rgb), 0.1);\n}\n\n.upload-loader[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  margin-bottom: 8px;\n  color: var(--ion-color-primary);\n}\n\n.upload-loader[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--ion-color-primary);\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0Usb0NBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0U7RUFDRSwrQ0FBQTtBQUNKOztBQUdBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBRUU7RUFDRSxnQkFBQTtBQUFKOztBQUlBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFERjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBQUo7O0FBSUU7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQURKOztBQUlFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFLRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQUZKOztBQUtFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBRko7O0FBS0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQUZKOztBQUtFO0VBQ0UscUJBQUE7QUFGSjs7QUFNQTtFQUNFLHFCQUFBO0FBSEY7O0FBT0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUpGOztBQU1FO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5Q0FBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0FBSko7O0FBTUk7RUFDRSxzQkFBQTtBQUpOOztBQU9JO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUxOOztBQVFJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBTk47O0FBUU07RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQU5SOztBQVVJO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFSTjs7QUFVTTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBUlI7O0FBZUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7QUFaRjs7QUFjRTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7QUFaSjs7QUFjSTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7QUFaTjs7QUFlSTtFQUNFLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBYk47O0FBZU07RUFDRSxxQkFBQTtBQWJSOztBQWdCTTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQWRSOztBQXFCQTtFQUNFLGNBQUE7QUFsQkY7O0FBb0JFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FBbEJKOztBQW9CSTtFQUNFLHNDQUFBO0VBQ0EsbUJBQUE7QUFsQk47O0FBcUJJO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBbkJOOztBQXNCSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBcEJOOztBQXNCTTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQXBCUjs7QUF1Qk07RUFDRSxTQUFBO0VBQ0Esa0JBQUE7QUFyQlI7O0FBNEJBO0VBQ0UsZ0JBQUE7QUF6QkY7O0FBMkJFO0VBQ0Usc0NBQUE7RUFDQSxxQkFBQTtFQUNBLGdFQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUF6Qko7O0FBMkJJO0VBQ0UsNENBQUE7QUF6Qk47O0FBNEJJO0VBQ0UsZ0JBQUE7QUExQk47O0FBZ0NBO0VBQ0UsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQTdCRjs7QUFpQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtREFBQTtBQTlCRjs7QUFnQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7QUE5Qko7O0FBaUNFO0VBQ0UsU0FBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtBQS9CSiIsImZpbGUiOiJkZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbn1cclxuXHJcbmlvbi1pdGVtLWdyb3VwIHtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuXHJcbiAgJi5pb24taW52YWxpZC5pb24tdG91Y2hlZCB7XHJcbiAgICAtLWhpZ2hsaWdodC1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1pdGVtLWRpdmlkZXIge1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMC40cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxufVxyXG5cclxuaW9uLW5vdGUge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBtYXJnaW4tdG9wOiA0cHg7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gIC0tYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgXHJcbiAgaW9uLXNwaW5uZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1pbWd7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59XHJcbmlvbi1hdmF0YXIge1xyXG4gICAgd2lkdGg6IDEyOHB4O1xyXG4gICAgaGVpZ2h0OiAxMjhweDtcclxuICAgXHJcbiAgfVxyXG4gIFxyXG4gIC5wcmV2aWV3IHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5mYWxsYmFjayB7XHJcbiAgICB3aWR0aDogMTI4cHg7XHJcbiAgICBoZWlnaHQ6IDEyOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogI2JmYmZiZjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuIFxyXG4gIFxyXG4gICNjb250YWluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgfVxyXG4gIFxyXG4gICNjb250YWluZXIgc3Ryb25nIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gIH1cclxuICBcclxuICAjY29udGFpbmVyIHAge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBjb2xvcjogIzhjOGM4YztcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRhaW5lciBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcblxyXG4vLyBNb2Rlcm4gc3R5bGluZyBmb3IgdGhlIGVudGlyZSBwYWdlXHJcbi5jdXN0b20tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG59XHJcblxyXG4vLyBQcm9maWxlIEltYWdlIFNlY3Rpb25cclxuLnByb2ZpbGUtaW1hZ2Utc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46IDIwcHggMCAzMHB4O1xyXG5cclxuICAuaW1hZ2UtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxuICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnBsYWNlaG9sZGVyIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZDogI2UwZTBlMDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm92ZXJsYXkge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC42KTtcclxuICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBGb3JtIENvbnRhaW5lclxyXG4uZm9ybS1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLDAsMCwwLjA1KTtcclxuXHJcbiAgLmN1c3RvbS1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgaW9uLWl0ZW0tZGl2aWRlciB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgIH1cclxuXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICAgICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuXHJcbiAgICAgICYuaW9uLWludmFsaWQuaW9uLXRvdWNoZWQge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogI2ZmZjVmNTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW9uLWlucHV0LCBpb24tc2VsZWN0IHtcclxuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBMaWNlbnNlIEltYWdlIFNlY3Rpb25cclxuLmxpY2Vuc2UtaW1hZ2Utc2VjdGlvbiB7XHJcbiAgbWFyZ2luOiAxNnB4IDA7XHJcblxyXG4gIC5saWNlbnNlLWltYWdlLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xyXG4gICAgYm9yZGVyOiAycHggZGFzaGVkICNkZGQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgYmFja2dyb3VuZDogI2YwZjBmMDtcclxuICAgIH1cclxuXHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIH1cclxuXHJcbiAgICAucGxhY2Vob2xkZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiA0MHB4IDIwcHg7XHJcbiAgICAgIGNvbG9yOiAjNjY2O1xyXG5cclxuICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBTdWJtaXQgQnV0dG9uXHJcbi5zdWJtaXQtc2VjdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogMjRweDtcclxuXHJcbiAgLnN1Ym1pdC1idXR0b24ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAtLWJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjMpO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1zcGlubmVyIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEVycm9yIE1lc3NhZ2VzXHJcbmlvbi1ub3RlIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgbWFyZ2luLXRvcDogNHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTZweDtcclxufVxyXG5cclxuLy8gQWRkIHRoZXNlIHN0eWxlcyB0byB5b3VyIGV4aXN0aW5nIFNDU1NcclxuLnVwbG9hZC1sb2FkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMSk7XHJcbiAgXHJcbiAgaW9uLXNwaW5uZXIge1xyXG4gICAgd2lkdGg6IDQ4cHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIH1cclxuICBcclxuICBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG59XHJcbiAgXHJcbiAgIl19 */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_details_details_module_ts.js.map