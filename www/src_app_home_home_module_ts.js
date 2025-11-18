"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
class HomePageRoutingModule {
}
HomePageRoutingModule.ɵfac = function HomePageRoutingModule_Factory(t) { return new (t || HomePageRoutingModule)(); };
HomePageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomePageRoutingModule });
HomePageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomePageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);
/* harmony import */ var _shared_shared_translations_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared-translations.module */ 7912);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);







class HomePageModule {
}
HomePageModule.ɵfac = function HomePageModule_Factory(t) { return new (t || HomePageModule)(); };
HomePageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: HomePageModule });
HomePageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
        _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule,
        _shared_shared_translations_module__WEBPACK_IMPORTED_MODULE_2__.SharedTranslationsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](HomePageModule, { declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
        _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule,
        _shared_shared_translations_module__WEBPACK_IMPORTED_MODULE_2__.SharedTranslationsModule] }); })();


/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/geolocation */ 7621);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 3491);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var _capacitor_device__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/device */ 4744);
/* harmony import */ var _capacitor_network__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/network */ 4984);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var _enroute_chat_enroute_chat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../enroute-chat/enroute-chat.component */ 5635);
/* harmony import */ var _trip_summary_trip_summary_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../trip-summary/trip-summary.component */ 4948);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/auth */ 1577);
/* harmony import */ var _services_map_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/map.service */ 9947);
/* harmony import */ var _services_avatar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/avatar.service */ 5083);
/* harmony import */ var _services_geocode_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/geocode.service */ 8793);
/* harmony import */ var _services_overlay_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/overlay.service */ 5596);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 4666);





















const _c0 = ["map"];
const _c1 = ["mapElement"];
const _c2 = ["topBar"];
const _c3 = ["bottomBar"];

function HomePage_ion_fab_3_ion_fab_button_1_ion_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ion-icon", 18);
  }
}

function HomePage_ion_fab_3_ion_fab_button_1_ion_spinner_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ion-spinner", 19);
  }
}

function HomePage_ion_fab_3_ion_fab_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-fab-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HomePage_ion_fab_3_ion_fab_button_1_Template_ion_fab_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r14.SwitchOn());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HomePage_ion_fab_3_ion_fab_button_1_ion_icon_1_Template, 1, 0, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, HomePage_ion_fab_3_ion_fab_button_1_ion_spinner_2_Template, 1, 0, "ion-spinner", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r10.approve);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r10.approve);
  }
}

function HomePage_ion_fab_3_ion_fab_button_2_ion_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ion-icon", 18);
  }
}

function HomePage_ion_fab_3_ion_fab_button_2_ion_spinner_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "ion-spinner", 19);
  }
}

function HomePage_ion_fab_3_ion_fab_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-fab-button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HomePage_ion_fab_3_ion_fab_button_2_Template_ion_fab_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r18.SwitchOff());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HomePage_ion_fab_3_ion_fab_button_2_ion_icon_1_Template, 1, 0, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, HomePage_ion_fab_3_ion_fab_button_2_ion_spinner_2_Template, 1, 0, "ion-spinner", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r11.approve);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r11.approve);
  }
}

function HomePage_ion_fab_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-fab", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HomePage_ion_fab_3_ion_fab_button_1_Template, 3, 2, "ion-fab-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, HomePage_ion_fab_3_ion_fab_button_2_Template, 3, 2, "ion-fab-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r1.currentState);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r1.currentState);
  }
}

function HomePage_ion_fab_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-fab", 21)(1, "ion-fab-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HomePage_ion_fab_4_Template_ion_fab_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r20.EnterChat());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "ion-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}

function HomePage_ion_fab_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-fab", 24)(1, "ion-fab-button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HomePage_ion_fab_5_Template_ion_fab_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r22.presentCancelRideActionSheet());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "ion-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}

function HomePage_ion_fab_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-fab", 24)(1, "ion-fab-button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HomePage_ion_fab_6_Template_ion_fab_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r24.presentCancelRideActionSheet());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](2, "ion-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}

function HomePage_ion_list_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-list", 27)(1, "ion-item-group", 28)(2, "ion-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "ion-icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "ion-label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 2, "HOME.EARNINGS"), "", ctx_r7.earnings, "");
  }
}

function HomePage_ion_list_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 34)(1, "div", 35)(2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "ion-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "ion-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "ion-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 42)(14, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "ion-button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](22, "ion-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r26.durationText, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r26.distanceText, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("$", ctx_r26.riderInfo == null ? null : ctx_r26.riderInfo.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r26.riderInfo == null ? null : ctx_r26.riderInfo.Rider_Location);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](16, 8, "HOME.TIME_LEFT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r26.riderInfo == null ? null : ctx_r26.riderInfo.countDown);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](20, 10, "HOME.SECONDS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](25, 12, "HOME.ACCEPT"));
  }
}

function HomePage_ion_list_15_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 34)(1, "div", 35)(2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "ion-skeleton-text", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](5, "ion-skeleton-text", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "ion-skeleton-text", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 42)(9, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "ion-skeleton-text", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "ion-button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "ion-skeleton-text", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("animated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("animated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("animated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("animated", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("animated", true);
  }
}

function HomePage_ion_list_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-list", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HomePage_ion_list_15_Template_ion_list_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r28.AcceptRide());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, HomePage_ion_list_15_div_1_Template, 26, 14, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, HomePage_ion_list_15_div_2_Template, 13, 5, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r8.distanceText);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r8.distanceText);
  }
}

function HomePage_ion_list_16_ion_item_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-item")(1, "ion-label")(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "ion-icon", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, " Cash");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
}

function HomePage_ion_list_16_ion_item_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-item")(1, "ion-label")(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "ion-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, " Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
  }
}

function HomePage_ion_list_16_ion_button_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HomePage_ion_list_16_ion_button_33_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r36);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r35.PickUp());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "ion-icon", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "ion-label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 1, "HOME.PICK_UP"));
  }
}

function HomePage_ion_list_16_ion_button_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HomePage_ion_list_16_ion_button_34_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r37.DropOff());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "ion-icon", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "ion-label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 1, "HOME.DROP_OFF"));
  }
}

function HomePage_ion_list_16_ion_button_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function HomePage_ion_list_16_ion_button_35_Template_ion_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r40);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r39.Navigate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "ion-icon", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "ion-label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 1, "HOME.NAVIGATE"));
  }
}

function HomePage_ion_list_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-list", 51)(1, "ion-list-header", 52)(2, "ion-label", 53)(3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 54)(7, "ion-item")(8, "ion-item")(9, "ion-label")(10, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "p")(14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "ion-item", 55)(19, "ion-avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](20, "ion-img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "ion-label")(22, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](23, "ion-icon", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24, " 5 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](26, HomePage_ion_list_16_ion_item_26_Template, 5, 0, "ion-item", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](27, HomePage_ion_list_16_ion_item_27_Template, 5, 0, "ion-item", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "ion-item", 55)(29, "ion-label")(30, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "ion-item-group", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](33, HomePage_ion_list_16_ion_button_33_Template, 5, 3, "ion-button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](34, HomePage_ion_list_16_ion_button_34_Template, 5, 3, "ion-button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](35, HomePage_ion_list_16_ion_button_35_Template, 5, 3, "ion-button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 13, "HOME.ARRIVAL_IN"), " ", ctx_r9.durationText, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](12, 15, "HOME.YOUR_RIDER_IS"), " ", ctx_r9.riderInfo.Rider_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](16, 17, "HOME.DESTINATION"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r9.riderInfo.Rider_Destination);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx_r9.riderInfo.Rider_imgUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r9.cash);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r9.cash);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("$", ctx_r9.riderInfo.price, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r9.trackingStage);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r9.drivingToDestinationStage);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r9.trackingStage || ctx_r9.drivingToDestinationStage);
  }
}

class HomePage {
  constructor(auth, map, firestore, database, ngZone, geocode, overlay, cdr, toastController, actionSheetController, platform, alertController, modalCtrl, translate) {
    this.auth = auth;
    this.map = map;
    this.firestore = firestore;
    this.database = database;
    this.ngZone = ngZone;
    this.geocode = geocode;
    this.overlay = overlay;
    this.cdr = cdr;
    this.toastController = toastController;
    this.actionSheetController = actionSheetController;
    this.platform = platform;
    this.alertController = alertController;
    this.modalCtrl = modalCtrl;
    this.translate = translate;
    this.profile = null;
    this.address = 'Unknown';
    this.bookingStage = false;
    this.confirmStage = false;
    this.trackingStage = false;
    this.drivingToDestinationStage = false;
    this.cash = false;
    this.state = [];
    this.showResetLocationButton = false;
    this.destinationAddress = 'Drag To Pick Destination';
    this.locationAddress = 'Loading...';
    this.price = 0;
    this.current_Request_Number = -1;
    this.approve = true;
    this.acceptedState = false;
    this.riderLocation = null;
    this.countdownStarted = false;
    this.networkStatus$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__.BehaviorSubject(true);
    this.canShowButton = false;
    this.lastHandledState = null; // Interval in milliseconds for updating the route

    this.UPDATE_INTERVAL = 10000; // Update every 10 seconds
  }

  ngAfterViewInit() {
    var _this = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this.EnterBookingStage(); // Check and request geolocation permissions


        const permissionStatus = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.checkPermissions();

        if (permissionStatus.location !== 'granted') {
          // Show alert explaining why we need location access
          yield _this.showLocationPermissionAlert();
          const requestResult = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.requestPermissions();

          if (requestResult.location !== 'granted') {
            throw new Error('Location permission is required to use this app');
          }
        }

        const coordinates = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.getCurrentPosition({
          enableHighAccuracy: true
        });
        _this.coordinates = coordinates;
        yield _this.initializeNetworkMonitoring();
        yield _this.fetchOnlineState();
        yield _this.map.createMap(_this.mapRef.nativeElement, coordinates);
        _this.mapy = true;

        _this.setMapHeight();

        window.addEventListener('resize', _this.setMapHeight.bind(_this));

        _this.initializeBackButtonCustomHandler();

        _this.LatLng = {
          lat: coordinates.coords.latitude,
          lng: coordinates.coords.longitude
        };

        _this.database.updateDriverLocation(_this.LatLng);

        _this.DestinationLatLng = {
          lat: coordinates.coords.latitude,
          lng: coordinates.coords.longitude
        };

        _this.database.getEarnings().subscribe( /*#__PURE__*/function () {
          var _ref = (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (d) {
            _this.earnings = d.Earnings;
          });

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());

        _this.database.getCards().subscribe( /*#__PURE__*/function () {
          var _ref2 = (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (d) {
            _this.cards = d;
            _this.approve = false;

            _this.cards.forEach(element => {
              if (element.selected) {
                _this.selected = element;
                _this.selectedCard = element.name;
              }
            });
          });

          return function (_x2) {
            return _ref2.apply(this, arguments);
          };
        }());

        yield _this.handleDriverRequestSnapshot();
        _this.actualLocation = _this.map.actualLocation;
        _this.locationAddress = _this.map.locationAddress;

        _this.map.newMap.setOnCameraIdleListener(() => {
          _this.ngZone.run(() => {
            _this.showResetLocationButton = true;
          });
        });
      } catch (e) {
        if (e.code === 1) {
          // Permission denied error code
          yield _this.handleLocationPermissionDenied();
        } else {
          _this.overlay.showAlert('Error', e.message || 'An unexpected error occurred');
        }
      } // Start polling position


      _this.startPollingPosition(); // Start background geolocation for mobile devices


      yield _this.checkPlatform();
    })();
  }

  initializeNetworkMonitoring() {
    var _this2 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const status = yield _capacitor_network__WEBPACK_IMPORTED_MODULE_3__.Network.getStatus();
      _this2.isConnected = status.connected;

      _this2.networkStatus$.next(_this2.isConnected);

      console.log('Network monitoring initialized. Initial status:', _this2.isConnected);
      _capacitor_network__WEBPACK_IMPORTED_MODULE_3__.Network.addListener('networkStatusChange', status => {
        console.log('Network status changed:', status);
        _this2.isConnected = status.connected;

        _this2.networkStatus$.next(_this2.isConnected);
      });

      _this2.networkStatus$.subscribe(isConnected => {
        _this2.ngZone.run(() => {
          if (isConnected) {
            _this2.router.navigate(['/tabs']);
          } else {
            _this2.router.navigate(['/network']);
          }
        });
      });
    })();
  }

  initializeBackButtonCustomHandler() {
    this.backButtonSubscription = this.platform.backButton.subscribeWithPriority(10, () => {
      this.handleBackButton();
    });
  }

  handleBackButton() {
    if (this.bookingStage) {
      this.showExitConfirmation();
    } else if (this.confirmStage) {
      this.ResetState();
    } else if (this.trackingStage) {
      this.showCancelRideConfirmation();
    } else if (this.drivingToDestinationStage) {
      this.showCannotExitAlert();
    }
  }

  showExitConfirmation() {
    var _this3 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertController.create({
        header: 'Exit App',
        message: 'Are you sure you want to exit the app?',
        buttons: [{
          text: 'Cancel',
          role: 'cancel'
        }, {
          text: 'Exit',
          handler: () => {
            navigator['app'].exitApp();
          }
        }]
      });
      yield alert.present();
    })();
  }

  showCancelRideConfirmation() {
    var _this4 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this4.alertController.create({
        header: 'Cancel Ride',
        message: 'Are you sure you want to cancel this ride?',
        buttons: [{
          text: 'No',
          role: 'cancel'
        }, {
          text: 'Yes',
          handler: () => {
            // Implement logic to cancel the ride
            console.log('Ride cancelled');

            _this4.presentCancelRideActionSheet();
          }
        }]
      });
      yield alert.present();
    })();
  }

  showCannotExitAlert() {
    var _this5 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this5.alertController.create({
        header: 'Cannot Exit',
        message: 'You cannot exit the app during an active trip.',
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }

  checkPlatform() {
    var _this6 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const info = yield _capacitor_device__WEBPACK_IMPORTED_MODULE_2__.Device.getInfo();

      if (info.platform === 'ios' || info.platform === 'android') {
        _this6.startBackgroundGeolocation();
      }
    })();
  }

  startPollingPosition() {
    var _this7 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const pollInterval = 5000; // Polling interval in milliseconds

      const updatePosition = /*#__PURE__*/function () {
        var _ref3 = (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          try {
            const position = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_1__.Geolocation.getCurrentPosition({
              enableHighAccuracy: true
            });
            _this7.DriverLatLng = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            _this7.database.updateDriverLocation(_this7.DriverLatLng);
          } catch (error) {
            console.error('Error getting position:', error);
          }

          setTimeout(updatePosition, pollInterval); // Poll every pollInterval milliseconds
        });

        return function updatePosition() {
          return _ref3.apply(this, arguments);
        };
      }();

      updatePosition();
    })();
  }

  checkAndClearIncompleteRide() {
    var _this8 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const user = _this8.auth.currentUser;

      if (user) {
        const driverDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__.doc)(_this8.firestore, 'Drivers', user.uid);
        const driverDoc = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__.getDoc)(driverDocRef);
        const driverData = driverDoc.data();

        if (driverData && driverData.currentRequestId) {
          const requestRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__.doc)(_this8.firestore, 'Request', driverData.currentRequestId);
          const requestDoc = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__.getDoc)(requestRef);
          const requestData = requestDoc.data();

          if (requestData && requestData.status !== 'completed') {
            // Clear currentRequestId if the ride is not completed
            yield _this8.clearCurrentRequestId(user.uid);
            _this8.lastHandledState = null;
            console.log('Cleared incomplete ride on app restart.');
          }
        }
      }
    })();
  }

  startBackgroundGeolocation() {
    var _this9 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const info = yield _capacitor_device__WEBPACK_IMPORTED_MODULE_2__.Device.getInfo(); // Only proceed with background geolocation setup on mobile devices

        if (info.platform === 'ios' || info.platform === 'android') {
          if (!window.BackgroundGeolocation) {
            console.warn('BackgroundGeolocation is not available on this platform');
            return;
          }

          const options = {
            stationaryRadius: 50,
            distanceFilter: 50,
            desiredAccuracy: 10,
            debug: true,
            notificationTitle: 'Background tracking',
            notificationText: 'enabled',
            startOnBoot: true,
            stopOnTerminate: false,
            locationProvider: window.BackgroundGeolocation.provider.ANDROID_ACTIVITY_PROVIDER,
            interval: 60000,
            fastestInterval: 5000,
            activitiesInterval: 10000,
            stopOnStillActivity: false
          };
          window.BackgroundGeolocation.configure(options);
          window.BackgroundGeolocation.on('location', location => {
            console.log('Location update: ', location);
            _this9.DriverLatLng = {
              lat: location.latitude,
              lng: location.longitude
            };

            _this9.database.updateDriverLocation(_this9.DriverLatLng);
          });
          window.BackgroundGeolocation.start();
        } else {
          // For web platform, just use regular position polling
          console.log('Using regular position polling for web platform');

          _this9.startPollingPosition();
        }
      } catch (e) {
        console.error('BackgroundGeolocation configuration error: ', e); // Fallback to regular position polling on error

        _this9.startPollingPosition();
      }
    })();
  }

  stopBackgroundGeolocation() {
    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const info = yield _capacitor_device__WEBPACK_IMPORTED_MODULE_2__.Device.getInfo();

      if ((info.platform === 'ios' || info.platform === 'android') && window.BackgroundGeolocation) {
        window.BackgroundGeolocation.stop();
      }
    })();
  }

  getRiderLocation(driverId) {
    this.database.getRiderLocation(driverId).then(location => {
      this.riderLocation = location;
      this.DestinationLatLng = {
        lat: this.riderLocation.lat,
        lng: this.riderLocation.lng
      };
      console.log(this.riderLocation); // For testing purposes
    }).catch(error => {
      console.error('Error fetching driver location:', error);
    });
  }

  handleDriverRequestSnapshot() {
    var _this10 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this10.auth.onAuthStateChanged(user => {
        if (user) {
          const driverDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__.doc)(_this10.firestore, 'Drivers', user.uid);
          (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__.onSnapshot)(driverDocRef, /*#__PURE__*/function () {
            var _ref4 = (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (driverDoc) {
              _this10.driverData = driverDoc.data();

              if (_this10.driverData && _this10.driverData.currentRequestId) {
                const requestRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__.doc)(_this10.firestore, 'Request', _this10.driverData.currentRequestId);

                if (_this10.driverRequestUnsubscribe) {
                  _this10.driverRequestUnsubscribe();
                }

                _this10.driverRequestUnsubscribe = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__.onSnapshot)(requestRef, /*#__PURE__*/function () {
                  var _ref5 = (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (doc) {
                    console.log("It happened Here", doc.data());
                    _this10.riderInfo = doc.data();

                    if (_this10.riderInfo && _this10.lastHandledState !== _this10.riderInfo.status) {
                      console.log("Should trigger", _this10.riderInfo.status);
                      _this10.lastHandledState = _this10.riderInfo.status; // Update the last handled state

                      switch (_this10.riderInfo.status) {
                        case 'cancelled':
                          yield _this10.handleCancelledState(_this10.riderInfo);
                          break;

                        case 'pending':
                          yield _this10.handlePendingState(_this10.riderInfo);
                          break;

                        case 'confirmed':
                          yield _this10.handleConfirmedState(_this10.riderInfo);
                          break;

                        case 'started':
                          yield _this10.handleStartedState(_this10.riderInfo);
                          break;

                        case 'stopped':
                          yield _this10.handleStoppedState(_this10.riderInfo);
                          break;

                        default:
                          console.error('Unknown ride status:', _this10.riderInfo.status);
                          break;
                      }
                    }
                  });

                  return function (_x4) {
                    return _ref5.apply(this, arguments);
                  };
                }());
              }
            });

            return function (_x3) {
              return _ref4.apply(this, arguments);
            };
          }());
        }
      });
    })();
  }

  handlePendingState(doco) {
    var _this11 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('Handling the pending state:', doco);
        const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__.doc)(_this11.firestore, `Riders`, doco.Rider_id);
        const docSnapshot = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__.getDoc)(userDocRef);

        if (docSnapshot.exists()) {
          console.log("I'm here!!!!!!!!!!");

          if (!_this11.acceptedState) {
            if (!_this11.countdownStarted) {
              _this11.countdownStarted = true; // Flag to ensure countdown starts only once
              // Initial state setup

              _this11.EnterConfirmStage();

              _this11.cash = !doco.card;
              _this11.DestinationLatLng = {
                lat: _this11.riderInfo.Des_lat,
                lng: _this11.riderInfo.Des_lng
              };

              _this11.getDistanceandDirections();

              _this11.map.newMap.enableCurrentLocation(false); // Start the countdown watcher


              _this11.watchCountdown(doco);
            }
          }
        }
      } catch (e) {
        _this11.overlay.showAlert('Confirm Error', e);
      }
    })();
  }

  watchCountdown(doco) {
    var _this12 = this;

    const requestRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__.doc)(this.firestore, 'Request', doco.requestId);
    this.requestID = doco.requestId;
    const countdownWatcher = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__.onSnapshot)(requestRef, /*#__PURE__*/function () {
      var _ref6 = (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (doc) {
        if (doc.exists()) {
          const data = doc.data();
          const currentCountdown = data.countDown;
          console.log('Current countdown:', currentCountdown);

          if (currentCountdown <= 1) {
            yield _this12.checkAndClearIncompleteRide();

            _this12.ClearRide();

            _this12.FCOUNT = true;
            _this12.lastHandledState = null;

            _this12.overlay.showAlert('Lost', 'Ride Lost');

            countdownWatcher(); // Unsubscribe from changes

            _this12.acceptedState = false;
          }
        } else {
          console.error('Ride request document does not exist.');
        }
      });

      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }());
    this.countdownWatcher = countdownWatcher; // Store the unsubscribe function if needed
  }

  UpdateCountDown(time, requestId) {
    var _this13 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const requestDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__.doc)(_this13.firestore, "Request", requestId);
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__.updateDoc)(requestDocRef, {
          countDown: time
        });
        return true;
      } catch (e) {
        console.log(e);
        return null;
      }
    })();
  }

  startCountdown(initialTime, requestId) {
    var _this14 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let timeRemaining = initialTime;

      const updateCountdown = /*#__PURE__*/function () {
        var _ref7 = (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          if (timeRemaining > 0) {
            yield _this14.UpdateCountDown(timeRemaining, requestId); // this.updatePieChart(timeRemaining, initialTime);

            timeRemaining--;
            setTimeout(updateCountdown, 1000); // Update every second
          }
        });

        return function updateCountdown() {
          return _ref7.apply(this, arguments);
        };
      }();

      updateCountdown();
    })();
  }

  completeRideAndProcessPayment(doc) {
    var _this15 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Complete the ride, process payment, and update ride history
      const rideData = doc;
      console.log("This is the ride data: ", rideData);
      yield _this15.processPayment(rideData);
      yield _this15.updateRideHistory(rideData);
    })();
  }

  processPayment(rideData) {
    var _this16 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Logic to process payment
      console.log('Processing payment for ride:', rideData); // Example: Call a payment API and update Firestore with payment status

      const Drivershare = 80 / 100 * rideData.price;
      const amt = rideData.price - Drivershare;
      yield _this16.database.updateEarnings(amt + _this16.earnings);
    })();
  }

  updateRideHistory(rideData) {
    var _this17 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Logic to update ride history
      console.log('Updating ride history for ride:', rideData); // Example: Add ride data to a 'RideHistory' collection in Firestore

      yield _this17.database.createHistory(rideData);
    })();
  }

  clearCurrentRequestId(driverId) {
    var _this18 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const driverDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__.doc)(_this18.firestore, 'Drivers', driverId);
      yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__.updateDoc)(driverDocRef, {
        currentRequestId: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__.deleteField)()
      });
    })();
  }

  handleConfirmedState(doc) {
    var _this19 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this19.ResetState();
        yield _this19.getRiderLocation(_this19.riderInfo.Rider_id);
        _this19.DestinationLatLng = {
          lat: _this19.riderLocation?.lat ?? _this19.riderInfo.Loc_lat,
          lng: _this19.riderLocation?.lng ?? _this19.riderInfo.Loc_lng
        }; // Show a more specific message

        _this19.overlay.showLoader('Navigating to rider...'); // Pre-fetch data and setup markers concurrently


        yield Promise.all([_this19.handleDriverToRider(_this19.DriverLatLng, _this19.DestinationLatLng), _this19.database.updateOnlineState(false) // Update driver status while loading
        ]);
      } catch (error) {
        console.error('Error in handleConfirmedState:', error);

        _this19.overlay.showAlert('Error', 'Failed to initialize navigation');
      }
    })();
  }

  handleStartedState(doc) {
    var _this20 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this20.ResetState();
        _this20.DestinationLatLng = {
          lat: doc.Des_lat,
          lng: doc.Des_lng
        }; // Show a more specific message

        _this20.overlay.showLoader('Starting trip...'); // Pre-fetch data and setup markers concurrently


        yield Promise.all([_this20.handleRiderToDestination(_this20.DriverLatLng, _this20.DestinationLatLng), _this20.database.updateOnlineState(false) // Update driver status while loading
        ]);
      } catch (error) {
        console.error('Error in handleStartedState:', error);

        _this20.overlay.showAlert('Error', 'Failed to start trip');
      }
    })();
  }

  handleStoppedState(doc) {
    var _this21 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this21.checkAndClearIncompleteRide(); // Unsubscribe from the current request listener

      if (_this21.driverRequestUnsubscribe) {
        _this21.driverRequestUnsubscribe();
      }

      _this21.clearPrevMarkers();

      if (_this21.newPoly) {
        yield _this21.clearPolyline(_this21.newPoly);
      } // Show trip summary modal before returning to home


      yield _this21.showTripSummary(doc); // Complete the ride and process payment

      yield _this21.completeRideAndProcessPayment(doc);
      yield _this21.database.updateOnlineState(true);

      _this21.map.newMap.enableCurrentLocation(true);

      _this21.acceptedState = false;
    })();
  }

  showTripSummary(doc) {
    var _this22 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Use this.requestID if available, otherwise try to get it from the trip data
      const requestIdToUse = _this22.requestID || _this22.driverData?.currentRequestId || doc.requestId;
      const modal = yield _this22.modalCtrl.create({
        component: _trip_summary_trip_summary_component__WEBPACK_IMPORTED_MODULE_5__.TripSummaryComponent,
        componentProps: {
          tripData: doc,
          requestId: requestIdToUse
        },
        cssClass: 'trip-summary-modal',
        backdropDismiss: false
      });
      yield modal.present();
      const {
        data
      } = yield modal.onDidDismiss(); // After modal is dismissed, return to home

      _this22.EnterBookingStage();

      yield _this22.ReturnHome();
    })();
  }

  setMapHeight() {
    const bottomBarHeight = this.bottomBar.nativeElement.offsetHeight;
    const availableHeight = window.innerHeight - bottomBarHeight;
    this.mapRef.nativeElement.style.height = `${availableHeight}px`;
  }

  setMapHeight2HandleDrivertoRider() {
    const bottomBarHeight = this.bottomBar.nativeElement.offsetHeight + 100;
    const availableHeight = window.innerHeight - bottomBarHeight;
    this.mapRef.nativeElement.style.height = `${availableHeight}px`;
  }

  setMapHeightDrivertoDestination() {
    const bottomBarHeight = this.bottomBar.nativeElement.offsetHeight;
    const availableHeight = window.innerHeight - bottomBarHeight;
    this.mapRef.nativeElement.style.height = `${availableHeight}px`;
  }

  handleCancelledState(data) {
    var _this23 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(`Ride was cancelled by ${data.canceledBy} for reason: ${data.cancellationReason}`);

      if (data.canceledBy == 'rider') {
        _this23.overlay.showAlert('Cancelled', 'Rider cancelled');
      }

      _this23.ClearRide();

      _this23.removed = true;
      console.log('Ride is cancelled.');
      _this23.acceptedState = false; // Clear currentRequestId in driverData

      const driverDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__.doc)(_this23.firestore, 'Drivers', _this23.auth.currentUser.uid);
      yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__.updateDoc)(driverDocRef, {
        currentRequestId: null
      });
      yield _this23.database.updateOnlineState(true);
      yield _this23.fetchOnlineState();
    })();
  }

  EnterChat() {
    var _this24 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const options = {
        component: _enroute_chat_enroute_chat_component__WEBPACK_IMPORTED_MODULE_4__.EnrouteChatComponent,
        componentProps: {
          userId: _this24.requestID,
          message: ""
        },
        swipeToClose: true
      };
      const modal = yield _this24.modalCtrl.create(options);
      return yield modal.present();
    })();
  }

  startTimer(sec) {
    var _this25 = this;

    const nop = (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.interval)(1000).subscribe( /*#__PURE__*/(0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this25.database.updateCountDown(sec);
      sec--;

      if (sec == 0) {
        nop.unsubscribe();
      }
    }));
  }

  chooseCard(event) {
    var _this26 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this26.overlay.showLoader('Selecting Card..');

        yield _this26.database.updateCard(_this26.selected.name, _this26.selected.number, _this26.selected.type, _this26.selected.id, false);

        for (const element of _this26.cards) {
          if (element.name == event) {
            yield _this26.database.updateCard(element.name, element.number, element.type, element.id, true);

            _this26.overlay.hideLoader();
          }
        }
      } catch (e) {
        _this26.overlay.showAlert('Error', JSON.stringify(e));
      }
    })();
  }

  AcceptRide() {
    var _this27 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this27.acceptedState = true;
        const requestRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__.doc)(_this27.firestore, 'Request', _this27.driverData.currentRequestId);
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__.updateDoc)(requestRef, {
          status: 'confirmed'
        });
      } catch (e) {
        _this27.overlay.showAlert('Error', JSON.stringify(e)); // Retry or provide user feedback

      }
    })();
  }

  resetLocation() {
    var _this28 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this28.map.newMap.setCamera({
        animate: true,
        animationDuration: 500,
        zoom: 15,
        coordinate: _this28.LatLng
      });
      _this28.showResetLocationButton = false;
    })();
  }

  PickUp() {
    var _this29 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this29.canShowButton = false;

        _this29.overlay.showLoader('Picking Up..');

        const requestRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__.doc)(_this29.firestore, 'Request', _this29.driverData.currentRequestId);
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__.updateDoc)(requestRef, {
          status: 'started'
        });

        _this29.overlay.hideLoader();
      } catch (e) {
        _this29.overlay.showAlert('Error', JSON.stringify(e));
      }
    })();
  }

  DropOff() {
    var _this30 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const requestRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__.doc)(_this30.firestore, 'Request', _this30.driverData.currentRequestId);
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__.updateDoc)(requestRef, {
          status: 'stopped'
        });
      } catch (e) {
        _this30.overlay.showAlert('Error', JSON.stringify(e));
      }
    })();
  }

  Navigate() {// Implementation for navigation

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  }

  fetchOnlineState() {
    var _this31 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log("Fetching online state...");
        const onlineState = yield _this31.database.getOnlineState();
        console.log('Online state fetched from database:', onlineState); // Log the fetched state

        _this31.currentState = onlineState;
        console.log('Current state updated to:', _this31.currentState);

        _this31.cdr.detectChanges();
      } catch (e) {
        console.error('Error fetching online state:', e);

        _this31.overlay.showAlert('Error', 'Failed to fetch online state.');
      }
    })();
  }

  SwitchOn() {
    var _this32 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this32.approve = true;
        console.log('Attempting to go online...');
        yield _this32.database.updateOnlineState(true);
        yield _this32.fetchOnlineState(); // Fetch the current state from the database

        console.log('Successfully went online.');
      } catch (e) {
        console.error('Error in SwitchOn:', e);

        _this32.overlay.showAlert('Error', 'Failed to go online.');
      } finally {
        _this32.approve = false;

        _this32.cdr.detectChanges();
      }
    })();
  }

  SwitchOff() {
    var _this33 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this33.approve = true;
        console.log('Attempting to go offline...');
        yield _this33.database.updateOnlineState(false);
        yield _this33.fetchOnlineState(); // Fetch the current state from the database

        console.log('Successfully went offline.');
      } catch (e) {
        console.error('Error in SwitchOff:', e);

        _this33.overlay.showAlert('Error', 'Failed to go offline.');
      } finally {
        _this33.approve = false;

        _this33.cdr.detectChanges();
      }
    })();
  }

  clearPrevMarkers() {
    var _this34 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Clear animated marker
        if (_this34.animatedMarker) {
          yield _this34.clearMarker(_this34.animatedMarker);
          _this34.animatedMarker = null;
        }

        if (_this34.routeUpdateSubscription) {
          _this34.routeUpdateSubscription.unsubscribe();
        } // Clear other markers


        if (_this34.rider_marker) {
          yield _this34.clearMarker(_this34.rider_marker);
          _this34.rider_marker = null;
        } // Clear other markers


        if (_this34.driver_marker) {
          yield _this34.clearMarker(_this34.driver_marker);
          _this34.driver_marker = null;
        } // Clear other markers


        if (_this34.destinationMarker) {
          yield _this34.clearMarker(_this34.destinationMarker);
          _this34.destinationMarker = null;
        } // Clear other markers


        if (_this34.driver_marker1) {
          yield _this34.clearMarker(_this34.driver_marker1);
          _this34.driver_marker1 = null;
        } // Clear other markers


        if (_this34.destinationMarker1) {
          yield _this34.clearMarker(_this34.destinationMarker1);
          _this34.destinationMarker1 = null;
        } // Clear other markers


        if (_this34.marker1) {
          yield _this34.clearMarker(_this34.marker1);
          _this34.marker1 = null;
        }

        if (_this34.marker2) {
          yield _this34.clearMarker(_this34.marker2);
          _this34.marker2 = null;
        }
      } catch (e) {
        console.error('Error clearing markers:', e);
      }
    })();
  }

  clearMarker(marker) {
    var _this35 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (marker) {
        try {
          yield _this35.map.newMap.removeMarker(marker);
          console.log("Marker was cleared!");
        } catch (error) {
          console.error('Error clearing marker:', error);
        }
      }
    })();
  }

  clearPolyline(polyline) {
    var _this36 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (polyline) {
        try {
          yield _this36.map.newMap.removePolylines(polyline);
          console.log('Polyline cleared:', polyline);
          _this36.newPoly = null;
        } catch (error) {
          console.error('Error clearing polyline:', error);
        }
      } else {
        console.warn('No polyline to clear');
      }
    })();
  }

  ResetState() {
    var _this37 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Clear previous markers
        yield _this37.clearPrevMarkers(); // Clear any existing polylines

        if (_this37.newPoly) {
          yield _this37.clearPolyline(_this37.newPoly);
        }

        const availableHeight = 1024;

        _this37.map.newMap.enableTouch();

        _this37.setMapHeight();

        window.addEventListener('resize', _this37.setMapHeight.bind(_this37)); // Ensure the map respects the boundaries of the top and bottom bars

        _this37.mapRef.nativeElement.style.height = `${availableHeight}px`; // // Start watching the user's position
        // this.startPollingPosition();
      } catch (e) {
        throw new Error(e);
      }
    })();
  }

  getDistanceandDirections() {
    var _this38 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (!_this38.canStart) {
          console.log('LatLng:', _this38.DriverLatLng);
          const origin1 = new google.maps.LatLng(_this38.DriverLatLng.lat, _this38.DriverLatLng.lng);
          const origin2 = new google.maps.LatLng(_this38.DestinationLatLng.lat, _this38.DestinationLatLng.lng);
          const request = {
            origin: origin1,
            destination: origin2,
            travelMode: google.maps.TravelMode.DRIVING
          };
          console.log('Directions request:', request);

          _this38.geocode.directions.route(request, /*#__PURE__*/function () {
            var _ref9 = (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response, status) {
              console.log('Directions request status:', status);

              if (status === 'OK') {
                _this38.direction = response;
                _this38.canStart = false;
                _this38.distance = response.routes[0].legs[0].distance.value;
                console.log('Directions response:', response);
                console.log("Should Happen here.");
                _this38.distanceText = response.routes[0].legs[0].distance.text;
                _this38.durationText = response.routes[0].legs[0].duration.text;
                console.log('distanceText:', _this38.distanceText);
                console.log('durationText:', _this38.durationText);
                _this38.bounds = response.routes[0].bounds;

                _this38.setMapHeight();

                window.addEventListener('resize', _this38.setMapHeight.bind(_this38));
                yield _this38.createAndAddMarkers(_this38.DriverLatLng, _this38.DestinationLatLng);
              } else {
                _this38.overlay.showAlert('Error', `Failed to get directions: ${status}`);

                _this38.canStart = false; // Reset canStart in case of error
              }
            });

            return function (_x6, _x7) {
              return _ref9.apply(this, arguments);
            };
          }());

          _this38.canStart = true;
        }
      } catch (e) {
        console.error('Error in getDistanceandDirections:', e);

        _this38.overlay.showAlert('Error', JSON.stringify(e));

        _this38.canStart = false; // Reset canStart in case of error
      }
    })();
  }

  ReturnHome() {
    var _this39 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this39.canStart = false;
        _this39.distanceText = null;
        _this39.durationText = null;
        _this39.riderInfo = null;
        clearInterval(_this39.countdownInterval);
        _this39.countdownStarted = false;
        _this39.rideLostShown = false;
        yield _this39.ResetState();

        _this39.EnterBookingStage();

        yield _this39.map.newMap.setCamera({
          animate: true,
          animationDuration: 500,
          zoom: 15,
          coordinate: _this39.LatLng
        }); // Optionally, you can re-subscribe to the listener here if needed

        yield _this39.database.updateOnlineState(true);
        yield _this39.fetchOnlineState();
        yield _this39.handleDriverRequestSnapshot();
        _this39.removed = false;
      } catch (e) {
        _this39.overlay.showAlert('Error', JSON.stringify(e));
      }
    })();
  }

  presentCancelRideActionSheet() {
    var _this40 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const actionSheet = yield _this40.actionSheetController.create({
        header: yield _this40.translate.get('HOME.CANCEL_RIDE.HEADER').toPromise(),
        buttons: [{
          text: yield _this40.translate.get('HOME.CANCEL_RIDE.CHANGED_MIND').toPromise(),
          handler: () => {
            _this40.cancelRide('Changed my mind');
          }
        }, {
          text: yield _this40.translate.get('HOME.CANCEL_RIDE.TOOK_TOO_LONG').toPromise(),
          handler: () => {
            _this40.cancelRide('Driver took too long');
          }
        }, {
          text: yield _this40.translate.get('HOME.CANCEL_RIDE.FOUND_ANOTHER').toPromise(),
          handler: () => {
            _this40.cancelRide('Found another ride');
          }
        }, {
          text: yield _this40.translate.get('HOME.CANCEL_RIDE.OTHER').toPromise(),
          handler: () => {
            _this40.cancelRide('Other');
          }
        }, {
          text: yield _this40.translate.get('COMMON.CANCEL').toPromise(),
          role: 'cancel'
        }]
      });
      yield actionSheet.present();
    })();
  }

  cancelRide(reason) {
    var _this41 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this41.driverCleared = true;

      _this41.overlay.showLoader('Cancelling Ride..');

      const rideRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__.doc)(_this41.firestore, 'Request', _this41.driverData.currentRequestId);
      const rideSnapshot = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__.getDoc)(rideRef);
      const rideData = rideSnapshot.data();
      yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__.updateDoc)(rideRef, {
        status: 'cancelled',
        cancellationReason: reason,
        canceledBy: 'driver'
      }); // Create a new document in the cancelledRides collection

      const cancelledRideRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__.doc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__.collection)(_this41.firestore, 'CancelledRides'));
      yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__.setDoc)(cancelledRideRef, { ...rideData,
        status: 'cancelled',
        cancellationReason: reason,
        canceledBy: 'rider',
        cancelledAt: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__.serverTimestamp)(),
        originalRequestId: _this41.requestID
      });
      const toast = yield _this41.toastController.create({
        message: 'Ride has been cancelled.',
        duration: 2000
      });

      _this41.overlay.hideLoader();

      _this41.ReturnHome();

      yield toast.present();
    })();
  }

  ClearRide() {
    var _this42 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this42.ReturnHome();
      } catch (e) {
        _this42.overlay.showAlert('Error', JSON.stringify(e));
      }
    })();
  }

  createAndAddMarkers(loc, des) {
    var _this43 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const markerSize = {
        width: 30,
        height: 30
      };
      const iconAnchor = {
        x: 10,
        y: 0
      }; // Center bottom of the icon

      try {
        _this43.map.newMap.disableTouch(); // Add start marker


        _this43.marker1 = yield _this43.map.newMap.addMarker({
          coordinate: loc,
          iconUrl: 'assets/icon/point.png',
          title: 'Start',
          iconSize: markerSize,
          iconAnchor: iconAnchor,
          iconOrigin: {
            x: 1,
            y: 0
          }
        }); // Add destination marker

        _this43.marker2 = yield _this43.map.newMap.addMarker({
          coordinate: des,
          iconUrl: 'assets/icon/flag.png',
          title: 'Destination',
          iconSize: markerSize,
          iconAnchor: iconAnchor,
          iconOrigin: {
            x: 1,
            y: 0
          }
        }); // Calculate the center point between the start and destination

        const locs = [{
          geoCode: {
            latitude: loc.lat,
            longitude: loc.lng
          }
        }, {
          geoCode: {
            latitude: des.lat,
            longitude: des.lng
          }
        }];

        const center = _this43.map.calculateCenter(locs); // Calculate the bounds


        const bounds = new google.maps.LatLngBounds();
        bounds.extend(new google.maps.LatLng(loc.lat, loc.lng));
        bounds.extend(new google.maps.LatLng(des.lat, des.lng)); // Set map height before calculating zoom level

        const availableHeight = _this43.mapRef.nativeElement.offsetHeight; // Prepare map dimensions for calculating zoom level

        const mapDim = {
          height: availableHeight,
          width: _this43.mapRef.nativeElement.offsetWidth
        }; // Calculate zoom level

        const zoomLevel = _this43.map.getBoundsZoomLevel(bounds, mapDim);

        console.log(loc.lat, loc.lng);
        console.log(des.lat, des.lng); // Manually set zoom level if needed

        const adjustedZoomLevel = zoomLevel - 1; // Adjust as necessary

        yield _this43.map.setCameraToLocation({
          lat: center.latitude,
          lng: center.longitude
        }, adjustedZoomLevel, _this43.map.calculateBearing(loc, des)); // Add polyline between the start and destination

        yield _this43.addPolyline(loc, des);
      } catch (error) {
        console.error('Error adding markers and polyline:', error);
      }
    })();
  }

  handleDriverToRider(driverLatLng, riderLatLng) {
    var _this44 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const markerSize = {
        width: 30,
        height: 30
      };
      const iconAnchor = {
        x: 10,
        y: 0
      }; // Center bottom of the icon

      let stageTransitioned = false;

      try {
        // Add driver marker at the starting position
        const driverMarker = yield _this44.map.newMap.addMarker({
          coordinate: driverLatLng,
          iconUrl: 'assets/icon/car.png',
          title: 'Driver',
          iconSize: markerSize,
          iconAnchor: iconAnchor,
          iconOrigin: {
            x: 2,
            y: 0
          }
        });
        _this44.driver_marker = driverMarker; // Add rider marker at the destination position

        const riderMarker = yield _this44.map.newMap.addMarker({
          coordinate: riderLatLng,
          iconUrl: _this44.database.user.photoURL,
          title: 'Rider',
          iconSize: markerSize,
          iconAnchor: iconAnchor,
          iconOrigin: {
            x: 2,
            y: 0
          }
        });
        _this44.rider_marker = riderMarker; // Function to update route, duration, and distance

        const updateRoute = /*#__PURE__*/function () {
          var _ref10 = (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            const request = {
              origin: driverLatLng,
              destination: riderLatLng,
              travelMode: google.maps.TravelMode.DRIVING
            };

            _this44.geocode.directions.route(request, /*#__PURE__*/function () {
              var _ref11 = (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response, status) {
                if (status === 'OK') {
                  const path = response.routes[0].overview_path.map(latlng => ({
                    lat: latlng.lat(),
                    lng: latlng.lng()
                  })); // Update these specific variables for driver-to-rider stage

                  _this44.driverToRiderDuration = response.routes[0].legs[0].duration.text;
                  _this44.driverToRiderDistance = response.routes[0].legs[0].distance.text; // Also update the general variables for backward compatibility

                  _this44.duration = _this44.driverToRiderDuration;
                  _this44.distance = _this44.driverToRiderDistance;
                  console.log(`Driving to Rider - Duration: ${_this44.driverToRiderDuration}, Distance: ${_this44.driverToRiderDistance}`);
                  const locs = [{
                    geoCode: {
                      latitude: driverLatLng.lat,
                      longitude: driverLatLng.lng
                    }
                  }, {
                    geoCode: {
                      latitude: riderLatLng.lat,
                      longitude: riderLatLng.lng
                    }
                  }];

                  const center = _this44.map.calculateCenter(locs);

                  const bounds = new google.maps.LatLngBounds();
                  bounds.extend(new google.maps.LatLng(driverLatLng.lat, driverLatLng.lng));
                  bounds.extend(new google.maps.LatLng(riderLatLng.lat, riderLatLng.lng));
                  const availableHeight = _this44.mapRef.nativeElement.offsetHeight; // Prepare map dimensions for calculating zoom level

                  const mapDim = {
                    height: availableHeight,
                    width: _this44.mapRef.nativeElement.offsetWidth
                  }; // Calculate zoom level

                  const zoomLevel = _this44.map.getBoundsZoomLevel(bounds, mapDim); // Manually set zoom level if needed


                  const adjustedZoomLevel = zoomLevel - 1; // Adjust as necessary

                  yield _this44.map.setCameraToLocation({
                    lat: center.latitude,
                    lng: center.longitude
                  }, adjustedZoomLevel, _this44.map.calculateBearing(driverLatLng, riderLatLng)); // Update polyline for the route

                  if (_this44.newPoly) {
                    yield _this44.clearPolyline(_this44.newPoly);
                  }

                  yield _this44.addPolyline(driverLatLng, riderLatLng); // Call EnterDrivingToDestinationStage after determining duration and distance

                  if (!stageTransitioned) {
                    _this44.EnterTrackingStage();

                    _this44.setMapHeightDrivertoDestination();

                    window.addEventListener('resize', _this44.setMapHeightDrivertoDestination.bind(_this44));
                    stageTransitioned = true;

                    _this44.overlay.hideLoader();
                  } // Animate the driver marker along the path to the rider


                  yield _this44.animateMarker(_this44.driver_marker, path, 'assets/icon/car.png');
                } else {
                  console.error('Direction ERROR:', response);

                  _this44.overlay.showAlert('Direction ERROR', JSON.stringify(response));
                }
              });

              return function (_x8, _x9) {
                return _ref11.apply(this, arguments);
              };
            }());
          });

          return function updateRoute() {
            return _ref10.apply(this, arguments);
          };
        }(); // Start updating the route periodically


        const routeUpdate$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.interval)(_this44.UPDATE_INTERVAL).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.switchMap)(() => updateRoute())); // Subscribe to the interval observable to start updating

        _this44.routeUpdateSubscription = routeUpdate$.subscribe(); // Cleanup subscription when the component or context is destroyed
        // Call routeUpdateSubscription.unsubscribe() when needed
      } catch (error) {
        console.error('Error handling driver to rider:', error);
      }
    })();
  }

  handleRiderToDestination(driverLatLng, destinationLatLng) {
    var _this45 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const markerSize = {
        width: 30,
        height: 30
      };
      const iconAnchor = {
        x: 10,
        y: 0
      }; // Center bottom of the icon

      let stageTransitioned = false;

      try {
        // Update driver marker to driver's current position
        const driverMarker = yield _this45.map.newMap.addMarker({
          coordinate: driverLatLng,
          iconUrl: 'assets/icon/car.png',
          title: 'Driver',
          iconSize: markerSize,
          iconAnchor: iconAnchor,
          iconOrigin: {
            x: 0,
            y: 0
          }
        });
        _this45.driver_marker1 = driverMarker; // Add destination marker

        const destinationMarker = yield _this45.map.newMap.addMarker({
          coordinate: destinationLatLng,
          iconUrl: 'assets/icon/flag.png',
          title: 'Destination',
          iconSize: markerSize,
          iconAnchor: iconAnchor,
          iconOrigin: {
            x: 0,
            y: 0
          }
        });
        _this45.destinationMarker1 = destinationMarker; // Function to update route, duration, and distance

        const updateRoute = /*#__PURE__*/function () {
          var _ref12 = (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
            const request = {
              origin: driverLatLng,
              destination: destinationLatLng,
              travelMode: google.maps.TravelMode.DRIVING
            };

            _this45.geocode.directions.route(request, /*#__PURE__*/function () {
              var _ref13 = (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (response, status) {
                if (status === 'OK') {
                  const path = response.routes[0].overview_path.map(latlng => ({
                    lat: latlng.lat(),
                    lng: latlng.lng()
                  })); // Update these specific variables for rider-to-destination stage

                  _this45.riderToDestinationDuration = response.routes[0].legs[0].duration.text;
                  _this45.riderToDestinationDistance = response.routes[0].legs[0].distance.text; // Also update the general variables for backward compatibility

                  _this45.duration = _this45.riderToDestinationDuration;
                  _this45.distance = _this45.riderToDestinationDistance;
                  console.log(`Driving to Destination - Duration: ${_this45.riderToDestinationDuration}, Distance: ${_this45.riderToDestinationDistance}`);
                  const locs = [{
                    geoCode: {
                      latitude: driverLatLng.lat,
                      longitude: driverLatLng.lng
                    }
                  }, {
                    geoCode: {
                      latitude: destinationLatLng.lat,
                      longitude: destinationLatLng.lng
                    }
                  }];

                  const center = _this45.map.calculateCenter(locs);

                  const bounds = new google.maps.LatLngBounds();
                  bounds.extend(new google.maps.LatLng(driverLatLng.lat, driverLatLng.lng));
                  bounds.extend(new google.maps.LatLng(destinationLatLng.lat, destinationLatLng.lng));
                  const availableHeight = _this45.mapRef.nativeElement.offsetHeight; // Prepare map dimensions for calculating zoom level

                  const mapDim = {
                    height: availableHeight,
                    width: _this45.mapRef.nativeElement.offsetWidth
                  }; // Calculate zoom level

                  const zoomLevel = _this45.map.getBoundsZoomLevel(bounds, mapDim); // Manually set zoom level if needed


                  const adjustedZoomLevel = zoomLevel - 1; // Adjust as necessary

                  yield _this45.map.setCameraToLocation({
                    lat: center.latitude,
                    lng: center.longitude
                  }, adjustedZoomLevel, _this45.map.calculateBearing(driverLatLng, destinationLatLng)); // Update polyline for the route

                  if (_this45.newPoly) {
                    yield _this45.clearPolyline(_this45.newPoly);
                  }

                  yield _this45.addPolyline(driverLatLng, destinationLatLng); // Call EnterDrivingToDestinationStage after determining duration and distance

                  if (!stageTransitioned) {
                    _this45.EnterDrivingToDestinationStage();

                    _this45.setMapHeightDrivertoDestination();

                    window.addEventListener('resize', _this45.setMapHeightDrivertoDestination.bind(_this45));
                    stageTransitioned = true;

                    _this45.overlay.hideLoader();
                  } // Animate the driver marker along the path to the destination


                  yield _this45.animateMarker(_this45.driver_marker, path, 'assets/icon/car.png');
                } else {
                  console.error('Direction ERROR:', response);

                  _this45.overlay.showAlert('Direction ERROR', JSON.stringify(response));
                }
              });

              return function (_x10, _x11) {
                return _ref13.apply(this, arguments);
              };
            }());
          });

          return function updateRoute() {
            return _ref12.apply(this, arguments);
          };
        }(); // Start updating the route periodically


        const routeUpdate$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.interval)(_this45.UPDATE_INTERVAL).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.switchMap)(() => updateRoute())); // Subscribe to the interval observable to start updating

        _this45.routeUpdateSubscription = routeUpdate$.subscribe();
      } catch (error) {
        console.error('Error handling rider to destination:', error);
      }
    })();
  }

  animateMarker(marker, path, iconUrl) {
    var _this46 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const markerSize = {
        width: 50,
        height: 50
      };
      const iconAnchor = {
        x: 25,
        y: 50
      }; // Center bottom of the icon

      const moveMarker = /*#__PURE__*/function () {
        var _ref14 = (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (i) {
          if (i >= path.length) return;
          yield _this46.map.newMap.removeMarker(marker);
          const coordinate = path[i] instanceof google.maps.LatLng ? {
            lat: path[i].lat(),
            lng: path[i].lng()
          } : {
            lat: path[i].lat,
            lng: path[i].lng
          };
          marker = yield _this46.map.newMap.addMarker({
            coordinate: coordinate,
            iconUrl: iconUrl,
            title: 'Moving Marker',
            iconSize: markerSize,
            iconAnchor: iconAnchor,
            iconOrigin: {
              x: 0,
              y: 0
            }
          });
          requestAnimationFrame(() => moveMarker(i + 1));
        });

        return function moveMarker(_x12) {
          return _ref14.apply(this, arguments);
        };
      }();

      yield moveMarker(0); // Store the last position of the animated marker

      _this46.animatedMarker = marker;
    })();
  }

  addPolyline(loc, des) {
    var _this47 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const polylineColor = "#007bff";
        const polylines = [{
          path: [{
            lat: loc.lat,
            lng: loc.lng
          }, {
            lat: des.lat,
            lng: des.lng
          }],
          strokeColor: polylineColor,
          strokeWeight: 8,
          geodesic: true
        }];
        _this47.newPoly = yield _this47.map.newMap.addPolylines(polylines);
        return polylines[0].path; // Ensure the return type is always an array
      } catch (e) {
        console.log('Error Adding Polyline: ', e);
        return [];
      }
    })();
  }

  ngOnDestroy() {
    this.stopBackgroundGeolocation();

    if (this.routeUpdateSubscription) {
      this.routeUpdateSubscription.unsubscribe();
    }

    if (this.newPoly) {
      this.clearPolyline(this.newPoly);
    }

    window.removeEventListener('resize', this.setMapHeight.bind(this));
  }

  EnterBookingStage() {
    this.bookingStage = true;
    this.confirmStage = false;
    this.trackingStage = false;
    this.mapPinStage = false;
    this.drivingToDestinationStage = false;
  }

  EnterConfirmStage() {
    this.bookingStage = false;
    this.confirmStage = true;
    this.trackingStage = false;
    this.mapPinStage = false;
    this.drivingToDestinationStage = false;
  }

  EnterSearchingStage() {
    this.bookingStage = false;
    this.confirmStage = false;
    this.trackingStage = false;
    this.mapPinStage = false;
    this.drivingToDestinationStage = false;
  }

  EnterNoDriverStage() {
    this.bookingStage = false;
    this.confirmStage = false;
    this.trackingStage = false;
    this.mapPinStage = false;
    this.drivingToDestinationStage = false;
  }

  EnterTrackingStage() {
    this.bookingStage = false;
    this.confirmStage = false;
    this.trackingStage = true;
    this.mapPinStage = false;
    this.drivingToDestinationStage = false;
  }

  EnterDrivingToDestinationStage() {
    this.bookingStage = false;
    this.confirmStage = false;
    this.trackingStage = false;
    this.mapPinStage = false;
    this.drivingToDestinationStage = true;
  }

  changeLanguage(language) {
    var _this48 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this48.translate.use(language); // Optionally save the language preference


      localStorage.setItem('preferred_language', language);
    })();
  }

  showLocationPermissionAlert() {
    var _this49 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this49.alertController.create({
        header: 'Location Access Required',
        message: 'This app needs access to your location to connect you with nearby riders. Please enable location access to continue.',
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }

  handleLocationPermissionDenied() {
    var _this50 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this50.alertController.create({
        header: 'Location Access Denied',
        message: 'This app requires location access to function. Please enable location access in your device settings to continue.',
        buttons: [{
          text: 'Open Settings',
          handler: () => {
            // Open device settings if possible
            if (_this50.platform.is('ios')) {
              window.open('app-settings:');
            } else if (_this50.platform.is('android')) {
              window.open('package:settings');
            }
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            // Optionally redirect to a different page or show alternative content
            console.log('User cancelled location permission');
          }
        }]
      });
      yield alert.present();
    })();
  } // Optional: Create a reusable loading message service


  getLoadingMessage(state) {
    const messages = {
      confirmed: 'Navigating to rider...',
      started: 'Starting trip...',
      stopped: 'Completing trip...' // Add more states as needed

    };
    return messages[state] || 'Loading...';
  }

}

HomePage.ɵfac = function HomePage_Factory(t) {
  return new (t || HomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_15__.Auth), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_map_service__WEBPACK_IMPORTED_MODULE_6__.MapService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__.Firestore), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_avatar_service__WEBPACK_IMPORTED_MODULE_7__.AvatarService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_geocode_service__WEBPACK_IMPORTED_MODULE_8__.GeocodeService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_overlay_service__WEBPACK_IMPORTED_MODULE_9__.OverlayService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_16__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_16__.ActionSheetController), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_16__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_16__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_16__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslateService));
};

HomePage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: HomePage,
  selectors: [["app-home"]],
  viewQuery: function HomePage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c2, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c3, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.mapRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.mapElement = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.topBar = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.bottomBar = _t.first);
    }
  },
  decls: 17,
  vars: 10,
  consts: [[1, "ion-no-border", "custom-toolbar-background", 3, "translucent"], ["topBar", ""], ["vertical", "top", "horizontal", "end", "class", "lowered-fab", 4, "ngIf"], ["vertical", "top", "horizontal", "start", "style", "margin-top: 20px;", 4, "ngIf"], ["vertical", "top", "horizontal", "end", "style", "margin-top: 20px;", 4, "ngIf"], ["scroll-y", "false", 3, "fullscreen"], ["map", ""], [1, "ion-no-border", 3, "translucent"], ["bottomBar", ""], ["class", "shadow-top", "lines", "full", 4, "ngIf"], ["class", "shadow-top book modern-accept-card", "lines", "none", 3, "click", 4, "ngIf"], ["class", "shadow-top", "lines", "none", 4, "ngIf"], ["vertical", "top", "horizontal", "end", 1, "lowered-fab"], ["size", "large", "color", "danger", 3, "click", 4, "ngIf"], ["size", "large", "color", "success", 3, "click", 4, "ngIf"], ["size", "large", "color", "danger", 3, "click"], ["name", "power-sharp", "color", "light", 4, "ngIf"], ["name", "crescent", 4, "ngIf"], ["name", "power-sharp", "color", "light"], ["name", "crescent"], ["size", "large", "color", "success", 3, "click"], ["vertical", "top", "horizontal", "start", 2, "margin-top", "20px"], ["color", "success", 3, "click"], ["name", "chatbubbles"], ["vertical", "top", "horizontal", "end", 2, "margin-top", "20px"], ["color", "danger", 3, "click"], ["name", "close-sharp"], ["lines", "full", 1, "shadow-top"], [1, "ion-margin-horizontal", "ion-margin-bottom"], ["shape", "round", "color", "primary", "size", "large", "type", "submit", "expand", "block", 1, "main-button"], ["slot", "start", "name", "cash-sharp", "color", "light"], ["color", "light"], ["lines", "none", 1, "shadow-top", "book", "modern-accept-card", 3, "click"], ["class", "accept-ride-content", 4, "ngIf"], [1, "accept-ride-content"], [1, "ride-info-row"], [1, "trip-details"], ["name", "time-outline"], ["name", "locate-outline", 1, "ml-2"], [1, "price-tag"], [1, "location-container"], ["name", "location"], [1, "countdown-container"], [1, "timer-indicator"], ["shape", "round", "color", "light", "type", "submit", "expand", "block", 1, "accept-button"], ["slot", "start", "name", "checkmark-sharp"], [2, "width", "120px", 3, "animated"], [2, "width", "60px", 3, "animated"], [2, "width", "180px", 3, "animated"], [2, "width", "150px", 3, "animated"], ["disabled", "", "shape", "round", "color", "light", "expand", "block", 1, "accept-button"], ["lines", "none", 1, "shadow-top"], [1, "ion-margin-bottom"], [1, "ion-text-center"], [1, "card"], [1, "price"], [3, "src"], ["slot", "icon-only", "color", "secondary", "name", "star"], [4, "ngIf"], ["shape", "round", "class", "main-button", "color", "success", "size", "large", "type", "submit", "expand", "block", 3, "click", 4, "ngIf"], ["shape", "round", "class", "main-button", "color", "primary", "size", "large", "type", "submit", "expand", "block", 3, "click", 4, "ngIf"], ["color", "primary", "slot", "icon-only", "name", "cash"], ["color", "primary", "slot", "icon-only", "name", "card"], ["shape", "round", "color", "success", "size", "large", "type", "submit", "expand", "block", 1, "main-button", 3, "click"], ["slot", "start", "name", "checkmark-sharp", "color", "light"], ["shape", "round", "color", "primary", "size", "large", "type", "submit", "expand", "block", 1, "main-button", 3, "click"], ["slot", "start", "name", "map-sharp", "color", "light"]],
  template: function HomePage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-header", 0)(1, "div", null, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](3, HomePage_ion_fab_3_Template, 3, 2, "ion-fab", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](4, HomePage_ion_fab_4_Template, 3, 0, "ion-fab", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](5, HomePage_ion_fab_5_Template, 3, 0, "ion-fab", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](6, HomePage_ion_fab_6_Template, 3, 0, "ion-fab", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "ion-content", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "capacitor-google-maps", null, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "ion-footer", 7)(11, "div", null, 8)(13, "ion-row");
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](14, HomePage_ion_list_14_Template, 7, 4, "ion-list", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, HomePage_ion_list_15_Template, 3, 2, "ion-list", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, HomePage_ion_list_16_Template, 36, 19, "ion-list", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.bookingStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.trackingStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.trackingStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.confirmStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("fullscreen", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.bookingStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.confirmStage);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.trackingStage || ctx.drivingToDestinationStage);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonItemGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonListHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonSkeletonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonSpinner, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe],
  styles: ["capacitor-google-maps[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  height: 100vh;\n  border-radius: 15px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n\n@keyframes slide-top {\n  0% {\n    transform: translateY(100%);\n  }\n  100% {\n    transform: translateY(0%);\n  }\n}\n\n@keyframes slide-bottom {\n  100% {\n    transform: translateY(50%);\n  }\n  0% {\n    transform: translateY(0%);\n  }\n}\n\n.slide-bottom[_ngcontent-%COMP%] {\n  animation: slide-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\n.slide-top[_ngcontent-%COMP%] {\n  animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\n\n.centerPin[_ngcontent-%COMP%] {\n  animation-name: slide-top;\n  animation-duration: 0.8s;\n}\n\n.bottomItems[_ngcontent-%COMP%] {\n  animation-name: slide-top;\n  animation-duration: 0.5s;\n}\n\nion-skeleton-text[_ngcontent-%COMP%] {\n  --background: rgba(0, 98, 255, 0.625);\n}\n\nion-content[_ngcontent-%COMP%] {\n  --background: transparent;\n  margin-top: 20px;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n  padding-top: 5vh;\n  background: transparent;\n  display: block;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%] {\n  margin-right: 2.5vh;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  border-radius: 20px 20px 0 0;\n  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1);\n}\n\nion-footer[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 1.8rem;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-fab[_ngcontent-%COMP%] {\n  margin-top: -40px;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n  color: var(--ion-color-dark);\n  --background: var(--ion-color-light);\n}\n\nion-footer[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  color: var(--ion-color-dark);\n  --inner-padding-bottom: 1px;\n  --inner-padding-end: 0;\n  --inner-padding-start: 0;\n  --inner-padding-top: 0;\n  --background: var(--ion-color-light);\n  border-radius: 10px;\n}\n\nion-footer[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--ion-color-dark);\n}\n\nion-skeleton-text[_ngcontent-%COMP%] {\n  --background: rgba(188, 232, 198, 0.962);\n}\n\n.accept[_ngcontent-%COMP%] {\n  font-size: 1.3em;\n  padding: 12px;\n}\n\n.unbook[_ngcontent-%COMP%] {\n  background: #0a602d;\n}\n\n.book[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--ion-color-success) 0%, #0a8f3c 100%);\n  border-radius: 20px 20px 0 0;\n  padding: 20px 0;\n}\n\n.book[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]   .ion-padding[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.book[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]   .accept[_ngcontent-%COMP%] {\n  font-size: 1.6em;\n  padding: 16px;\n  color: rgba(255, 255, 255, 0.9);\n  font-weight: 600;\n  margin-bottom: 12px;\n}\n\n.book[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2em !important;\n  padding: 16px !important;\n  color: rgba(255, 255, 255, 0.9) !important;\n  margin: 8px 0;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 12px;\n}\n\n.book[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]   .acceptTimer[_ngcontent-%COMP%] {\n  font-size: 1.4em;\n  color: white;\n  background: rgba(var(--ion-color-danger-rgb), 0.9);\n  padding: 16px;\n  border-radius: 16px;\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  margin: 16px 0;\n  text-align: center;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n\n.book[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]   .acceptTimer[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 700;\n}\n\n.book[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]   .acceptPrice[_ngcontent-%COMP%] {\n  font-size: 2.5em;\n  color: white;\n  font-weight: 700;\n  text-align: center;\n  margin: 20px 0;\n  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.book[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]   .acceptPrice[_ngcontent-%COMP%]::before {\n  content: \"$\";\n  font-size: 0.8em;\n  vertical-align: top;\n  margin-right: 2px;\n}\n\n.book[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  margin: 16px 20px;\n  height: 56px;\n  --border-radius: 16px;\n  --background: rgba(255, 255, 255, 0.95);\n  --color: var(--ion-color-success);\n  font-weight: 600;\n  font-size: 1.2em;\n  letter-spacing: 0.5px;\n}\n\n.book[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-right: 8px;\n}\n\n.book[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]:hover {\n  --background: white;\n}\n\n.custom-toolbar-background[_ngcontent-%COMP%] {\n  border-bottom: 2px solid var(--ion-color-primary);\n  animation: borderColorChange 4s infinite;\n  animation-timing-function: linear;\n}\n\n@keyframes borderColorChange {\n  0% {\n    border-color: red;\n  }\n  25% {\n    border-color: blue;\n  }\n  50% {\n    border-color: green;\n  }\n  75% {\n    border-color: yellow;\n  }\n  100% {\n    border-color: red;\n  }\n}\n\n.center-button[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.acceptTimer[_ngcontent-%COMP%] {\n  font-size: 1.3em;\n  color: aliceblue;\n  margin-right: auto;\n  background: var(--ion-color-danger);\n  padding: 12px;\n  border-radius: 100px;\n  border: 1.3px solid aliceblue;\n}\n\n.centerElem[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-items: center;\n}\n\n.pickMe[_ngcontent-%COMP%] {\n  height: 300px;\n}\n\n.price[_ngcontent-%COMP%] {\n  margin-left: auto;\n  flex: 0.7;\n}\n\n.shadow-top[_ngcontent-%COMP%] {\n  box-shadow: 0px -1.5px 1.5px rgba(196, 196, 196, 0.414);\n  animation-name: slide-top;\n  animation-duration: 0.6s;\n}\n\n.top_bar[_ngcontent-%COMP%] {\n  box-shadow: 0px 1.5px 1.5px rgba(196, 196, 196, 0.414);\n  --background: none;\n}\n\n.card[_ngcontent-%COMP%] {\n  box-shadow: 0px -1.5px 1.5px rgba(196, 196, 196, 0.414);\n  border-radius: 10px;\n}\n\n.main-button[_ngcontent-%COMP%] {\n  color: var(--ion-color-dark);\n  --background: var(--ion-color-light-shade);\n  border-radius: 10px;\n}\n\n.preview[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  display: flex;\n  justify-content: center;\n}\n\n.fallback[_ngcontent-%COMP%] {\n  width: 128px;\n  height: 128px;\n  border-radius: 50%;\n  background: #bfbfbf;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 500;\n}\n\n.map[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 1024px;\n  padding-bottom: 100%;\n  border-radius: 15px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n\n.lowered-fab[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\nion-skeleton-text[_ngcontent-%COMP%] {\n  --background: rgba(255, 255, 255, 0.1);\n  border-radius: 8px;\n  height: 24px;\n  margin: 8px 0;\n}\n\nion-skeleton-text.price-skeleton[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 120px;\n  margin: 16px auto;\n}\n\n.modern-accept-card[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--ion-color-success) 0%, #0a8f3c 100%);\n  border-radius: 20px 20px 0 0;\n  padding: 16px;\n  max-height: 280px;\n  overflow: hidden;\n}\n\n.accept-ride-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.ride-info-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 12px;\n  padding: 12px;\n}\n\n.trip-details[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: white;\n  font-size: 1.1rem;\n  font-weight: 500;\n}\n\n.trip-details[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 4px;\n  font-size: 18px;\n}\n\n.trip-details[_ngcontent-%COMP%]   .ml-2[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\n.price-tag[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: white;\n  background: rgba(0, 0, 0, 0.2);\n  padding: 6px 12px;\n  border-radius: 10px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.location-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.15);\n  padding: 10px 12px;\n  border-radius: 10px;\n  color: white;\n  font-size: 1rem;\n}\n\n.location-container[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  font-size: 18px;\n}\n\n.location-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.countdown-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.timer-indicator[_ngcontent-%COMP%] {\n  background: rgba(var(--ion-color-danger-rgb), 0.8);\n  color: white;\n  padding: 10px 16px;\n  border-radius: 30px;\n  font-size: 1.1rem;\n  font-weight: 500;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  text-align: center;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n\n.timer-indicator[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1.2rem;\n}\n\n.accept-button[_ngcontent-%COMP%] {\n  margin: 4px 0;\n  height: 48px;\n  --border-radius: 12px;\n  --background: rgba(255, 255, 255, 0.95);\n  --color: var(--ion-color-success-shade);\n  font-weight: 600;\n  font-size: 1.1rem;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);\n}\n\n.accept-button[_ngcontent-%COMP%]:hover {\n  --background: white;\n}\n\n.accept-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-right: 6px;\n}\n\nion-skeleton-text[_ngcontent-%COMP%] {\n  --background: rgba(255, 255, 255, 0.15);\n  border-radius: 8px;\n  height: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0NBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsMkJBQUE7RUFDRjtFQUNBO0lBQ0UseUJBQUE7RUFDRjtBQUNGOztBQUVBO0VBQ0U7SUFDRSwwQkFBQTtFQUFGO0VBRUE7SUFDRSx5QkFBQTtFQUFGO0FBQ0Y7O0FBR0E7RUFDRSxzRUFBQTtBQURGOztBQUlBO0VBQ0UsbUVBQUE7QUFERjs7QUFJQTtFQUNFLHlCQUFBO0VBQ0Esd0JBQUE7QUFERjs7QUFJQTtFQUNFLHlCQUFBO0VBQ0Esd0JBQUE7QUFERjs7QUFJQTtFQUNFLHFDQUFBO0FBREY7O0FBSUE7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBS0U7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQUZKOztBQUdJO0VBQ0UsbUJBQUE7QUFETjs7QUFHSTtFQUNFLDRCQUFBO0VBQ0EseUNBQUE7QUFETjs7QUFHUTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUFEVjs7QUFNRTtFQUNFLGlCQUFBO0FBSko7O0FBT0k7RUFDRSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7QUFMTjs7QUFNTTtFQUNFLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0FBSlI7O0FBS1E7RUFDRSw0QkFBQTtBQUhWOztBQVVBO0VBQ0Usd0NBQUE7QUFQRjs7QUFVQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQVBGOztBQVVBO0VBQ0UsbUJBQUE7QUFQRjs7QUFVQTtFQUNFLDhFQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0FBUEY7O0FBVUk7RUFDRSxXQUFBO0FBUk47O0FBV0k7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFUTjs7QUFZSTtFQUNFLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0FBVk47O0FBYUk7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrREFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7QUFYTjs7QUFhTTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQVhSOztBQWVJO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx5Q0FBQTtBQWJOOztBQWVNO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQWJSOztBQWtCRTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUNBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQWhCSjs7QUFrQkk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFoQk47O0FBbUJJO0VBQ0UsbUJBQUE7QUFqQk47O0FBc0JBO0VBQ0UsaURBQUE7RUFDQSx3Q0FBQTtFQUNBLGlDQUFBO0FBbkJGOztBQXNCQTtFQUNFO0lBQUssaUJBQUE7RUFsQkw7RUFtQkE7SUFBTSxrQkFBQTtFQWhCTjtFQWlCQTtJQUFNLG1CQUFBO0VBZE47RUFlQTtJQUFNLG9CQUFBO0VBWk47RUFhQTtJQUFPLGlCQUFBO0VBVlA7QUFDRjs7QUFZQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFWRjs7QUFhQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7QUFWRjs7QUFhQTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7QUFWRjs7QUFhQTtFQUNFLGFBQUE7QUFWRjs7QUFhQTtFQUNFLGlCQUFBO0VBQ0EsU0FBQTtBQVZGOztBQWFBO0VBQ0UsdURBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0FBVkY7O0FBYUE7RUFDRSxzREFBQTtFQUNBLGtCQUFBO0FBVkY7O0FBYUE7RUFDRSx1REFBQTtFQUNBLG1CQUFBO0FBVkY7O0FBYUE7RUFDRSw0QkFBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7QUFWRjs7QUFhQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBVkY7O0FBYUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBVkY7O0FBYUE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx3Q0FBQTtBQVZGOztBQWFBO0VBQ0UsZ0JBQUE7QUFWRjs7QUFhQTtFQUNFLHNDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQVZGOztBQVlFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQVZKOztBQWNBO0VBQ0UsOEVBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBWEY7O0FBY0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBWEY7O0FBY0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBWEY7O0FBY0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQVhGOztBQWFFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FBWEo7O0FBY0U7RUFDRSxnQkFBQTtBQVpKOztBQWdCQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0NBQUE7QUFiRjs7QUFnQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQWJGOztBQWVFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FBYko7O0FBZ0JFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBZEo7O0FBa0JBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBZkY7O0FBa0JBO0VBQ0Usa0RBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7QUFmRjs7QUFpQkU7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBZko7O0FBbUJBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHVDQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUNBQUE7QUFoQkY7O0FBa0JFO0VBQ0UsbUJBQUE7QUFoQko7O0FBbUJFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBakJKOztBQXFCQTtFQUNFLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBbEJGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiY2FwYWNpdG9yLWdvb2dsZS1tYXBzIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGUtdG9wIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGUtYm90dG9tIHtcclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xyXG4gIH1cclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xyXG4gIH1cclxufVxyXG5cclxuLnNsaWRlLWJvdHRvbSB7XHJcbiAgYW5pbWF0aW9uOiBzbGlkZS1ib3R0b20gMC41cyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7XHJcbn1cclxuXHJcbi5zbGlkZS10b3Age1xyXG4gIGFuaW1hdGlvbjogc2xpZGUtdG9wIDAuNXMgY3ViaWMtYmV6aWVyKDAuMjUwLCAwLjQ2MCwgMC40NTAsIDAuOTQwKSBib3RoO1xyXG59XHJcblxyXG4uY2VudGVyUGluIHtcclxuICBhbmltYXRpb24tbmFtZTogc2xpZGUtdG9wO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC44cztcclxufVxyXG5cclxuLmJvdHRvbUl0ZW1zIHtcclxuICBhbmltYXRpb24tbmFtZTogc2xpZGUtdG9wO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcclxufVxyXG5cclxuaW9uLXNrZWxldG9uLXRleHQge1xyXG4gIC0tYmFja2dyb3VuZDogcmdiYSgwLCA5OCwgMjU1LCAwLjYyNSk7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbmlvbi1mb290ZXIge1xyXG4gIGlvbi1yb3cge1xyXG4gICAgcGFkZGluZy10b3A6IDV2aDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBpb24tZmFiLWJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMi41dmg7XHJcbiAgICB9XHJcbiAgICBpb24tbGlzdCB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwIDA7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgLTRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICBpb24tbGlzdC1oZWFkZXIge1xyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBpb24tZmFiIHtcclxuICAgIG1hcmdpbi10b3A6IC00MHB4O1xyXG4gIH1cclxuICBpb24tbGlzdCB7XHJcbiAgICAucGF5bWVudCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4xZW07XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWJvdHRvbTogMXB4O1xyXG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgICAgIC0taW5uZXItcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaW9uLXNrZWxldG9uLXRleHQge1xyXG4gIC0tYmFja2dyb3VuZDogcmdiYSgxODgsIDIzMiwgMTk4LCAwLjk2Mik7XHJcbn1cclxuXHJcbi5hY2NlcHQge1xyXG4gIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgcGFkZGluZzogMTJweDtcclxufVxyXG5cclxuLnVuYm9vayB7XHJcbiAgYmFja2dyb3VuZDogIzBhNjAyZDtcclxufVxyXG5cclxuLmJvb2sge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKSAwJSwgIzBhOGYzYyAxMDAlKTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMCAwO1xyXG4gIHBhZGRpbmc6IDIwcHggMDtcclxuICBcclxuICBpb24tbGlzdC1oZWFkZXIge1xyXG4gICAgLmlvbi1wYWRkaW5nIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5hY2NlcHQge1xyXG4gICAgICBmb250LXNpemU6IDEuNmVtO1xyXG4gICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDEuMmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmc6IDE2cHggIWltcG9ydGFudDtcclxuICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KSAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmFjY2VwdFRpbWVyIHtcclxuICAgICAgZm9udC1zaXplOiAxLjRlbTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYW5nZXItcmdiKSwgMC45KTtcclxuICAgICAgcGFkZGluZzogMTZweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xyXG4gICAgICBtYXJnaW46IDE2cHggMDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgXHJcbiAgICAgIHN0cm9uZyB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYWNjZXB0UHJpY2Uge1xyXG4gICAgICBmb250LXNpemU6IDIuNWVtO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICAgIHRleHQtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICBcclxuICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiAnJCc7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpb24tYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMTZweCAyMHB4O1xyXG4gICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpO1xyXG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICBcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY3VzdG9tLXRvb2xiYXItYmFja2dyb3VuZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICBhbmltYXRpb246IGJvcmRlckNvbG9yQ2hhbmdlIDRzIGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxufVxyXG5cclxuQGtleWZyYW1lcyBib3JkZXJDb2xvckNoYW5nZSB7XHJcbiAgMCUgeyBib3JkZXItY29sb3I6IHJlZDsgfVxyXG4gIDI1JSB7IGJvcmRlci1jb2xvcjogYmx1ZTsgfVxyXG4gIDUwJSB7IGJvcmRlci1jb2xvcjogZ3JlZW47IH1cclxuICA3NSUgeyBib3JkZXItY29sb3I6IHllbGxvdzsgfVxyXG4gIDEwMCUgeyBib3JkZXItY29sb3I6IHJlZDsgfVxyXG59XHJcblxyXG4uY2VudGVyLWJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYWNjZXB0VGltZXIge1xyXG4gIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICBib3JkZXI6IDEuM3B4IHNvbGlkIGFsaWNlYmx1ZTtcclxufVxyXG5cclxuLmNlbnRlckVsZW0ge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5waWNrTWUge1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbn1cclxuXHJcbi5wcmljZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgZmxleDogMC43O1xyXG59XHJcblxyXG4uc2hhZG93LXRvcCB7XHJcbiAgYm94LXNoYWRvdzogMHB4IC0xLjVweCAxLjVweCByZ2JhKDE5NiwgMTk2LCAxOTYsIDAuNDE0KTtcclxuICBhbmltYXRpb24tbmFtZTogc2xpZGUtdG9wO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC42cztcclxufVxyXG5cclxuLnRvcF9iYXIge1xyXG4gIGJveC1zaGFkb3c6IDBweCAxLjVweCAxLjVweCByZ2JhKDE5NiwgMTk2LCAxOTYsIDAuNDE0KTtcclxuICAtLWJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBib3gtc2hhZG93OiAwcHggLTEuNXB4IDEuNXB4IHJnYmEoMTk2LCAxOTYsIDE5NiwgMC40MTQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5tYWluLWJ1dHRvbiB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLnByZXZpZXcge1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmZhbGxiYWNrIHtcclxuICB3aWR0aDogMTI4cHg7XHJcbiAgaGVpZ2h0OiAxMjhweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogI2JmYmZiZjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLm1hcCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDI0cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4ubG93ZXJlZC1mYWIge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbmlvbi1za2VsZXRvbi10ZXh0IHtcclxuICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgXHJcbiAgJi5wcmljZS1za2VsZXRvbiB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBtYXJnaW46IDE2cHggYXV0bztcclxuICB9XHJcbn1cclxuXHJcbi5tb2Rlcm4tYWNjZXB0LWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKSAwJSwgIzBhOGYzYyAxMDAlKTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMCAwO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgbWF4LWhlaWdodDogMjgwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmFjY2VwdC1yaWRlLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDEycHg7XHJcbn1cclxuXHJcbi5yaWRlLWluZm8tcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbn1cclxuXHJcbi50cmlwLWRldGFpbHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBcclxuICBpb24taWNvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbiAgXHJcbiAgLm1sLTIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICB9XHJcbn1cclxuXHJcbi5wcmljZS10YWcge1xyXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBwYWRkaW5nOiA2cHggMTJweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5sb2NhdGlvbi1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xyXG4gIHBhZGRpbmc6IDEwcHggMTJweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgXHJcbiAgaW9uLWljb24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIHNwYW4ge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICB9XHJcbn1cclxuXHJcbi5jb3VudGRvd24tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4udGltZXItaW5kaWNhdG9yIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYW5nZXItcmdiKSwgMC44KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTBweCAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gIFxyXG4gIHN0cm9uZyB7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgfVxyXG59XHJcblxyXG4uYWNjZXB0LWJ1dHRvbiB7XHJcbiAgbWFyZ2luOiA0cHggMDtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KTtcclxuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSk7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICBcclxuICAmOmhvdmVyIHtcclxuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gIH1cclxufVxyXG5cclxuaW9uLXNrZWxldG9uLXRleHQge1xyXG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4iXX0= */"]
});

/***/ }),

/***/ 8793:
/*!*********************************************!*\
  !*** ./src/app/services/geocode.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeocodeService": () => (/* binding */ GeocodeService)
/* harmony export */ });
/* harmony import */ var C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _googlemaps_google_maps_services_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @googlemaps/google-maps-services-js */ 7614);
/* harmony import */ var _googlemaps_google_maps_services_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_googlemaps_google_maps_services_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _overlay_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overlay.service */ 5596);









class GeocodeService {
  constructor(client, overlay, http) {
    this.client = client;
    this.overlay = overlay;
    this.http = http;
    this.service = new google.maps.DistanceMatrixService();
    this.directions = new google.maps.DirectionsService();
    this.apiUrl = 'https://maps.googleapis.com/maps/api';
  }

  getAddress(lat, lng) {
    const url = `${this.apiUrl}/geocode/json`;
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams().set('latlng', `${lat},${lng}`).set('key', src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiKey);
    return this.http.get(url, {
      params
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(response => response), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => {
      console.error('Error in reverse geocoding:', error);
      this.overlay.showAlert('GeoError', error.message);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(null);
    }));
  } // Convert the address to lat and lng


  getLatLng(address) {
    const url = `${this.apiUrl}/geocode/json`;
    const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpParams().set('address', address).set('key', src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiKey);
    return this.http.get(url, {
      params
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(response => response), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => {
      console.error('Error in geocoding:', error);
      this.overlay.showAlert('GeoError', error.message);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(null);
    }));
  } // Get the distance between the origin and destination


  getDirections(from, to) {
    var _this = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {// You can implement the directions request here using google.maps.DirectionsService
      } catch (e) {
        _this.overlay.showAlert('GeoError', e);

        console.log(e);
      }
    })();
  }

}

GeocodeService.ɵfac = function GeocodeService_Factory(t) {
  return new (t || GeocodeService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_googlemaps_google_maps_services_js__WEBPACK_IMPORTED_MODULE_2__.Client), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_overlay_service__WEBPACK_IMPORTED_MODULE_3__.OverlayService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

GeocodeService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
  token: GeocodeService,
  factory: GeocodeService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9947:
/*!*****************************************!*\
  !*** ./src/app/services/map.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapService": () => (/* binding */ MapService)
/* harmony export */ });
/* harmony import */ var C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _capacitor_google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/google-maps */ 4822);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _overlay_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overlay.service */ 5596);
/* harmony import */ var _geocode_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./geocode.service */ 8793);






class MapService {
  constructor(overlay, geocode) {
    this.overlay = overlay;
    this.geocode = geocode;
    this.locationAddress = 'Loading..';
  } //create google maps get the map movement listener


  createMap(ref, coords) {
    var _this = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this.newMap = yield _capacitor_google_maps__WEBPACK_IMPORTED_MODULE_1__.GoogleMap.create({
          id: 'my-cool-map',
          element: ref,
          apiKey: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiKey,
          config: {
            center: {
              lat: 5.5122138,
              lng: 7.4919135
            },
            zoom: 8
          }
        });
        _this.LatLng = {
          lat: coords.coords.latitude,
          lng: coords.coords.longitude
        };

        _this.newMap.enableTrafficLayer(true);

        _this.newMap.enableCurrentLocation(true);

        yield _this.newMap.setCamera({
          animate: true,
          animationDuration: 500,
          zoom: 15,
          coordinate: _this.LatLng
        });

        try {
          const address = yield _this.geocode.getAddress(_this.LatLng.lat, _this.LatLng.lng).toPromise();
          _this.actualLocation = address.results[0].formatted_address;
          _this.locationAddress = address.results[1].address_components[0].long_name + ' ' + address.results[1].address_components[1].long_name;
        } catch (error) {
          console.error('Error fetching address:', error);
        }

        _this.newMap.enableCurrentLocation(true);
      } catch (e) {
        _this.overlay.showAlert('Error', e);
      }
    })();
  }

  calculateCenter(points) {
    const latitudes = points.map(p => p.geoCode.latitude);
    const longitudes = points.map(p => p.geoCode.longitude);
    const avgLat = latitudes.reduce((a, b) => a + b, 0) / latitudes.length;
    const avgLng = longitudes.reduce((a, b) => a + b, 0) / longitudes.length;
    return {
      latitude: avgLat,
      longitude: avgLng
    };
  }

  getBoundsZoomLevel(bounds, mapDim) {
    const WORLD_DIM = {
      height: 256,
      width: 256
    };
    const ZOOM_MAX = 21;

    const latRad = lat => {
      const sin = Math.sin(lat * Math.PI / 180);
      const radX2 = Math.log((1 + sin) / (1 - sin)) / 2;
      return Math.max(Math.min(radX2, Math.PI), -Math.PI) / 2;
    };

    const zoom = (mapPx, worldPx, fraction) => Math.floor(Math.log(mapPx / worldPx / fraction) / Math.LN2);

    const ne = bounds.getNorthEast();
    const sw = bounds.getSouthWest();
    const latFraction = (latRad(ne.lat()) - latRad(sw.lat())) / Math.PI;
    const lngDiff = ne.lng() - sw.lng();
    const lngFraction = (lngDiff < 0 ? lngDiff + 360 : lngDiff) / 360;
    const latZoom = zoom(mapDim.height, WORLD_DIM.height, latFraction);
    const lngZoom = zoom(mapDim.width, WORLD_DIM.width, lngFraction);
    return Math.min(latZoom, lngZoom, ZOOM_MAX);
  }

  setCameraToLocation(coordinate, zoom, bearing) {
    var _this2 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.newMap) {
        try {
          yield _this2.newMap.setCamera({
            animate: true,
            animationDuration: 500,
            zoom: zoom,
            coordinate: coordinate,
            bearing: bearing
          });
        } catch (error) {
          console.error('Error setting camera:', error);
        }
      } else {
        console.error('Map is not initialized.');
      }
    })();
  } // Add other necessary methods like getAddress here


  calculateBearing(start, end) {
    const startLat = start.lat * (Math.PI / 180);
    const startLng = start.lng * (Math.PI / 180);
    const endLat = end.lat * (Math.PI / 180);
    const endLng = end.lng * (Math.PI / 180);
    const dLng = endLng - startLng;
    const y = Math.sin(dLng) * Math.cos(endLat);
    const x = Math.cos(startLat) * Math.sin(endLat) - Math.sin(startLat) * Math.cos(endLat) * Math.cos(dLng);
    const bearing = Math.atan2(y, x) * (180 / Math.PI);
    return (bearing + 360) % 360;
  }

}

MapService.ɵfac = function MapService_Factory(t) {
  return new (t || MapService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_overlay_service__WEBPACK_IMPORTED_MODULE_3__.OverlayService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_geocode_service__WEBPACK_IMPORTED_MODULE_4__.GeocodeService));
};

MapService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: MapService,
  factory: MapService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4758:
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/device/dist/esm/definitions.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 4744:
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/device/dist/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Device": () => (/* binding */ Device)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 4758);

const Device = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Device', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_device_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 5168)).then(m => new m.DeviceWeb())
});



/***/ }),

/***/ 5325:
/*!*********************************************************************!*\
  !*** ./node_modules/@capacitor/google-maps/dist/esm/definitions.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LatLngBounds": () => (/* binding */ LatLngBounds),
/* harmony export */   "MapType": () => (/* binding */ MapType)
/* harmony export */ });
/* harmony import */ var C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _implementation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./implementation */ 1819);


class LatLngBounds {
  constructor(bounds) {
    this.southwest = bounds.southwest;
    this.center = bounds.center;
    this.northeast = bounds.northeast;
  }

  contains(point) {
    var _this = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const result = yield _implementation__WEBPACK_IMPORTED_MODULE_1__.CapacitorGoogleMaps.mapBoundsContains({
        bounds: _this,
        point
      });
      return result['contains'];
    })();
  }

  extend(point) {
    var _this2 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const result = yield _implementation__WEBPACK_IMPORTED_MODULE_1__.CapacitorGoogleMaps.mapBoundsExtend({
        bounds: _this2,
        point
      });
      _this2.southwest = result['bounds']['southwest'];
      _this2.center = result['bounds']['center'];
      _this2.northeast = result['bounds']['northeast'];
      return _this2;
    })();
  }

}
var MapType;

(function (MapType) {
  /**
   * Basic map.
   */
  MapType["Normal"] = "Normal";
  /**
   * Satellite imagery with roads and labels.
   */

  MapType["Hybrid"] = "Hybrid";
  /**
   * Satellite imagery with no labels.
   */

  MapType["Satellite"] = "Satellite";
  /**
   * Topographic data.
   */

  MapType["Terrain"] = "Terrain";
  /**
   * No base map tiles.
   */

  MapType["None"] = "None";
})(MapType || (MapType = {}));

/***/ }),

/***/ 1819:
/*!************************************************************************!*\
  !*** ./node_modules/@capacitor/google-maps/dist/esm/implementation.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CapacitorGoogleMaps": () => (/* binding */ CapacitorGoogleMaps)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 5099);

const CapacitorGoogleMaps = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('CapacitorGoogleMaps', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_google-maps_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 601)).then(m => new m.CapacitorGoogleMapsWeb())
});
CapacitorGoogleMaps.addListener('isMapInFocus', data => {
  var _a;

  const x = data.x;
  const y = data.y;
  const elem = document.elementFromPoint(x, y);
  const internalId = (_a = elem === null || elem === void 0 ? void 0 : elem.dataset) === null || _a === void 0 ? void 0 : _a.internalId;
  const mapInFocus = internalId === data.mapId;
  CapacitorGoogleMaps.dispatchMapEvent({
    id: data.mapId,
    focus: mapInFocus
  });
});


/***/ }),

/***/ 4822:
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/google-maps/dist/esm/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleMap": () => (/* reexport safe */ _map__WEBPACK_IMPORTED_MODULE_1__.GoogleMap),
/* harmony export */   "LatLngBounds": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_0__.LatLngBounds),
/* harmony export */   "MapType": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_0__.MapType)
/* harmony export */ });
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./definitions */ 5325);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ 8968);
/* eslint-disable @typescript-eslint/no-namespace */




/***/ }),

/***/ 8968:
/*!*************************************************************!*\
  !*** ./node_modules/@capacitor/google-maps/dist/esm/map.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoogleMap": () => (/* binding */ GoogleMap)
/* harmony export */ });
/* harmony import */ var C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./definitions */ 5325);
/* harmony import */ var _implementation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./implementation */ 1819);





class MapCustomElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = '';

    if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.getPlatform() == 'ios') {
      this.style.overflow = 'scroll';
      this.style['-webkit-overflow-scrolling'] = 'touch';
      const overflowDiv = document.createElement('div');
      overflowDiv.style.height = '200%';
      this.appendChild(overflowDiv);
    }
  }

}

customElements.define('capacitor-google-map', MapCustomElement);
class GoogleMap {
  constructor(id) {
    this.element = null;
    this.resizeObserver = null;

    this.handleScrollEvent = () => this.updateMapBounds();

    this.id = id;
  }
  /**
   * Creates a new instance of a Google Map
   * @param options
   * @param callback
   * @returns GoogleMap
   */


  static create(options, callback) {
    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const newMap = new GoogleMap(options.id);

      if (!options.element) {
        throw new Error('container element is required');
      }

      if (options.config.androidLiteMode === undefined) {
        options.config.androidLiteMode = false;
      }

      newMap.element = options.element;
      newMap.element.dataset.internalId = options.id;
      const elementBounds = yield GoogleMap.getElementBounds(options.element);
      options.config.width = elementBounds.width;
      options.config.height = elementBounds.height;
      options.config.x = elementBounds.x;
      options.config.y = elementBounds.y;
      options.config.devicePixelRatio = window.devicePixelRatio;

      if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.getPlatform() == 'android') {
        newMap.initScrolling();
      }

      if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.isNativePlatform()) {
        options.element = {};

        const getMapBounds = () => {
          var _a, _b;

          const mapRect = (_b = (_a = newMap.element) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) !== null && _b !== void 0 ? _b : {};
          return {
            x: mapRect.x,
            y: mapRect.y,
            width: mapRect.width,
            height: mapRect.height
          };
        };

        const onDisplay = () => {
          _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.onDisplay({
            id: newMap.id,
            mapBounds: getMapBounds()
          });
        };

        const onResize = () => {
          _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.onResize({
            id: newMap.id,
            mapBounds: getMapBounds()
          });
        };

        const ionicPage = newMap.element.closest('.ion-page');

        if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.getPlatform() === 'ios' && ionicPage) {
          ionicPage.addEventListener('ionViewWillEnter', () => {
            setTimeout(() => {
              onDisplay();
            }, 100);
          });
          ionicPage.addEventListener('ionViewDidEnter', () => {
            setTimeout(() => {
              onDisplay();
            }, 100);
          });
        }

        const lastState = {
          width: elementBounds.width,
          height: elementBounds.height,
          isHidden: false
        };
        newMap.resizeObserver = new ResizeObserver(() => {
          if (newMap.element != null) {
            const mapRect = newMap.element.getBoundingClientRect();
            const isHidden = mapRect.width === 0 && mapRect.height === 0;

            if (!isHidden) {
              if (lastState.isHidden) {
                if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.getPlatform() === 'ios' && !ionicPage) {
                  onDisplay();
                }
              } else if (lastState.width !== mapRect.width || lastState.height !== mapRect.height) {
                onResize();
              }
            }

            lastState.width = mapRect.width;
            lastState.height = mapRect.height;
            lastState.isHidden = isHidden;
          }
        });
        newMap.resizeObserver.observe(newMap.element);
      } // small delay to allow for iOS WKWebView to setup corresponding element sub-scroll views ???


      yield new Promise((resolve, reject) => {
        setTimeout( /*#__PURE__*/(0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          try {
            yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.create(options);
            resolve(undefined);
          } catch (err) {
            reject(err);
          }
        }), 200);
      });

      if (callback) {
        const onMapReadyListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onMapReady', data => {
          if (data.mapId == newMap.id) {
            callback(data);
            onMapReadyListener.remove();
          }
        });
      }

      return newMap;
    })();
  }

  static getElementBounds(element) {
    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new Promise(resolve => {
        let elementBounds = element.getBoundingClientRect();

        if (elementBounds.width == 0) {
          let retries = 0;
          const boundsInterval = setInterval(function () {
            if (elementBounds.width == 0 && retries < 30) {
              elementBounds = element.getBoundingClientRect();
              retries++;
            } else {
              if (retries == 30) {
                console.warn('Map size could not be determined');
              }

              clearInterval(boundsInterval);
              resolve(elementBounds);
            }
          }, 100);
        } else {
          resolve(elementBounds);
        }
      });
    })();
  }
  /**
   * Enable touch events on native map
   *
   * @returns void
   */


  enableTouch() {
    var _this = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.enableTouch({
        id: _this.id
      });
    })();
  }
  /**
   * Disable touch events on native map
   *
   * @returns void
   */


  disableTouch() {
    var _this2 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.disableTouch({
        id: _this2.id
      });
    })();
  }
  /**
   * Enable marker clustering
   *
   * @param minClusterSize - The minimum number of markers that can be clustered together.
   * @defaultValue 4
   *
   * @returns void
   */


  enableClustering(minClusterSize) {
    var _this3 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.enableClustering({
        id: _this3.id,
        minClusterSize
      });
    })();
  }
  /**
   * Disable marker clustering
   *
   * @returns void
   */


  disableClustering() {
    var _this4 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.disableClustering({
        id: _this4.id
      });
    })();
  }
  /**
   * Adds a marker to the map
   *
   * @param marker
   * @returns created marker id
   */


  addMarker(marker) {
    var _this5 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addMarker({
        id: _this5.id,
        marker
      });
      return res.id;
    })();
  }
  /**
   * Adds multiple markers to the map
   *
   * @param markers
   * @returns array of created marker IDs
   */


  addMarkers(markers) {
    var _this6 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addMarkers({
        id: _this6.id,
        markers
      });
      return res.ids;
    })();
  }
  /**
   * Remove marker from the map
   *
   * @param id id of the marker to remove from the map
   * @returns
   */


  removeMarker(id) {
    var _this7 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.removeMarker({
        id: _this7.id,
        markerId: id
      });
    })();
  }
  /**
   * Remove markers from the map
   *
   * @param ids array of ids to remove from the map
   * @returns
   */


  removeMarkers(ids) {
    var _this8 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.removeMarkers({
        id: _this8.id,
        markerIds: ids
      });
    })();
  }

  addPolygons(polygons) {
    var _this9 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addPolygons({
        id: _this9.id,
        polygons
      });
      return res.ids;
    })();
  }

  addPolylines(polylines) {
    var _this10 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addPolylines({
        id: _this10.id,
        polylines
      });
      return res.ids;
    })();
  }

  removePolygons(ids) {
    var _this11 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.removePolygons({
        id: _this11.id,
        polygonIds: ids
      });
    })();
  }

  addCircles(circles) {
    var _this12 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addCircles({
        id: _this12.id,
        circles
      });
      return res.ids;
    })();
  }

  removeCircles(ids) {
    var _this13 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.removeCircles({
        id: _this13.id,
        circleIds: ids
      });
    })();
  }

  removePolylines(ids) {
    var _this14 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.removePolylines({
        id: _this14.id,
        polylineIds: ids
      });
    })();
  }
  /**
   * Destroy the current instance of the map
   */


  destroy() {
    var _this15 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a;

      if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.getPlatform() == 'android') {
        _this15.disableScrolling();
      }

      if (_capacitor_core__WEBPACK_IMPORTED_MODULE_1__.Capacitor.isNativePlatform()) {
        (_a = _this15.resizeObserver) === null || _a === void 0 ? void 0 : _a.disconnect();
      }

      _this15.removeAllMapListeners();

      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.destroy({
        id: _this15.id
      });
    })();
  }
  /**
   * Update the map camera configuration
   *
   * @param config
   * @returns
   */


  setCamera(config) {
    var _this16 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.setCamera({
        id: _this16.id,
        config
      });
    })();
  }

  getMapType() {
    var _this17 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const {
        type
      } = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.getMapType({
        id: _this17.id
      });
      return _definitions__WEBPACK_IMPORTED_MODULE_2__.MapType[type];
    })();
  }
  /**
   * Sets the type of map tiles that should be displayed.
   *
   * @param mapType
   * @returns
   */


  setMapType(mapType) {
    var _this18 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.setMapType({
        id: _this18.id,
        mapType
      });
    })();
  }
  /**
   * Sets whether indoor maps are shown, where available.
   *
   * @param enabled
   * @returns
   */


  enableIndoorMaps(enabled) {
    var _this19 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.enableIndoorMaps({
        id: _this19.id,
        enabled
      });
    })();
  }
  /**
   * Controls whether the map is drawing traffic data, if available.
   *
   * @param enabled
   * @returns
   */


  enableTrafficLayer(enabled) {
    var _this20 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.enableTrafficLayer({
        id: _this20.id,
        enabled
      });
    })();
  }
  /**
   * Show accessibility elements for overlay objects, such as Marker and Polyline.
   *
   * Only available on iOS.
   *
   * @param enabled
   * @returns
   */


  enableAccessibilityElements(enabled) {
    var _this21 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.enableAccessibilityElements({
        id: _this21.id,
        enabled
      });
    })();
  }
  /**
   * Set whether the My Location dot and accuracy circle is enabled.
   *
   * @param enabled
   * @returns
   */


  enableCurrentLocation(enabled) {
    var _this22 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.enableCurrentLocation({
        id: _this22.id,
        enabled
      });
    })();
  }
  /**
   * Set padding on the 'visible' region of the view.
   *
   * @param padding
   * @returns
   */


  setPadding(padding) {
    var _this23 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.setPadding({
        id: _this23.id,
        padding
      });
    })();
  }
  /**
   * Get the map's current viewport latitude and longitude bounds.
   *
   * @returns {LatLngBounds}
   */


  getMapBounds() {
    var _this24 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return new _definitions__WEBPACK_IMPORTED_MODULE_2__.LatLngBounds(yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.getMapBounds({
        id: _this24.id
      }));
    })();
  }

  fitBounds(bounds, padding) {
    var _this25 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.fitBounds({
        id: _this25.id,
        bounds,
        padding
      });
    })();
  }

  initScrolling() {
    const ionContents = document.getElementsByTagName('ion-content'); // eslint-disable-next-line @typescript-eslint/prefer-for-of

    for (let i = 0; i < ionContents.length; i++) {
      ionContents[i].scrollEvents = true;
    }

    window.addEventListener('ionScroll', this.handleScrollEvent);
    window.addEventListener('scroll', this.handleScrollEvent);
    window.addEventListener('resize', this.handleScrollEvent);

    if (screen.orientation) {
      screen.orientation.addEventListener('change', () => {
        setTimeout(this.updateMapBounds, 500);
      });
    } else {
      window.addEventListener('orientationchange', () => {
        setTimeout(this.updateMapBounds, 500);
      });
    }
  }

  disableScrolling() {
    window.removeEventListener('ionScroll', this.handleScrollEvent);
    window.removeEventListener('scroll', this.handleScrollEvent);
    window.removeEventListener('resize', this.handleScrollEvent);

    if (screen.orientation) {
      screen.orientation.removeEventListener('change', () => {
        setTimeout(this.updateMapBounds, 1000);
      });
    } else {
      window.removeEventListener('orientationchange', () => {
        setTimeout(this.updateMapBounds, 1000);
      });
    }
  }

  updateMapBounds() {
    if (this.element) {
      const mapRect = this.element.getBoundingClientRect();
      _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.onScroll({
        id: this.id,
        mapBounds: {
          x: mapRect.x,
          y: mapRect.y,
          width: mapRect.width,
          height: mapRect.height
        }
      });
    }
  }
  /*
  private findContainerElement(): HTMLElement | null {
    if (!this.element) {
      return null;
    }
       let parentElement = this.element.parentElement;
    while (parentElement !== null) {
      if (window.getComputedStyle(parentElement).overflowY !== 'hidden') {
        return parentElement;
      }
         parentElement = parentElement.parentElement;
    }
       return null;
  }
  */

  /**
   * Set the event listener on the map for 'onCameraIdle' events.
   *
   * @param callback
   * @returns
   */


  setOnCameraIdleListener(callback) {
    var _this26 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this26.onCameraIdleListener) {
        _this26.onCameraIdleListener.remove();
      }

      if (callback) {
        _this26.onCameraIdleListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onCameraIdle', _this26.generateCallback(callback));
      } else {
        _this26.onCameraIdleListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onBoundsChanged' events.
   *
   * @param callback
   * @returns
   */


  setOnBoundsChangedListener(callback) {
    var _this27 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this27.onBoundsChangedListener) {
        _this27.onBoundsChangedListener.remove();
      }

      if (callback) {
        _this27.onBoundsChangedListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onBoundsChanged', _this27.generateCallback(callback));
      } else {
        _this27.onBoundsChangedListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onCameraMoveStarted' events.
   *
   * @param callback
   * @returns
   */


  setOnCameraMoveStartedListener(callback) {
    var _this28 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this28.onCameraMoveStartedListener) {
        _this28.onCameraMoveStartedListener.remove();
      }

      if (callback) {
        _this28.onCameraMoveStartedListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onCameraMoveStarted', _this28.generateCallback(callback));
      } else {
        _this28.onCameraMoveStartedListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onClusterClick' events.
   *
   * @param callback
   * @returns
   */


  setOnClusterClickListener(callback) {
    var _this29 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this29.onClusterClickListener) {
        _this29.onClusterClickListener.remove();
      }

      if (callback) {
        _this29.onClusterClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onClusterClick', _this29.generateCallback(callback));
      } else {
        _this29.onClusterClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onClusterInfoWindowClick' events.
   *
   * @param callback
   * @returns
   */


  setOnClusterInfoWindowClickListener(callback) {
    var _this30 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this30.onClusterInfoWindowClickListener) {
        _this30.onClusterInfoWindowClickListener.remove();
      }

      if (callback) {
        _this30.onClusterInfoWindowClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onClusterInfoWindowClick', _this30.generateCallback(callback));
      } else {
        _this30.onClusterInfoWindowClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onInfoWindowClick' events.
   *
   * @param callback
   * @returns
   */


  setOnInfoWindowClickListener(callback) {
    var _this31 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this31.onInfoWindowClickListener) {
        _this31.onInfoWindowClickListener.remove();
      }

      if (callback) {
        _this31.onInfoWindowClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onInfoWindowClick', _this31.generateCallback(callback));
      } else {
        _this31.onInfoWindowClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMapClick' events.
   *
   * @param callback
   * @returns
   */


  setOnMapClickListener(callback) {
    var _this32 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this32.onMapClickListener) {
        _this32.onMapClickListener.remove();
      }

      if (callback) {
        _this32.onMapClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onMapClick', _this32.generateCallback(callback));
      } else {
        _this32.onMapClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onPolygonClick' events.
   *
   * @param callback
   * @returns
   */


  setOnPolygonClickListener(callback) {
    var _this33 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this33.onPolygonClickListener) {
        _this33.onPolygonClickListener.remove();
      }

      if (callback) {
        _this33.onPolygonClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onPolygonClick', _this33.generateCallback(callback));
      } else {
        _this33.onPolygonClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onCircleClick' events.
   *
   * @param callback
   * @returns
   */


  setOnCircleClickListener(callback) {
    var _this34 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this34.onCircleClickListener) [_this34.onCircleClickListener.remove()];

      if (callback) {
        _this34.onCircleClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onCircleClick', _this34.generateCallback(callback));
      } else {
        _this34.onCircleClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMarkerClick' events.
   *
   * @param callback
   * @returns
   */


  setOnMarkerClickListener(callback) {
    var _this35 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this35.onMarkerClickListener) {
        _this35.onMarkerClickListener.remove();
      }

      if (callback) {
        _this35.onMarkerClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onMarkerClick', _this35.generateCallback(callback));
      } else {
        _this35.onMarkerClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onPolylineClick' events.
   *
   * @param callback
   * @returns
   */


  setOnPolylineClickListener(callback) {
    var _this36 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this36.onPolylineClickListener) {
        _this36.onPolylineClickListener.remove();
      }

      if (callback) {
        _this36.onPolylineClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onPolylineClick', _this36.generateCallback(callback));
      } else {
        _this36.onPolylineClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMarkerDragStart' events.
   *
   * @param callback
   * @returns
   */


  setOnMarkerDragStartListener(callback) {
    var _this37 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this37.onMarkerDragStartListener) {
        _this37.onMarkerDragStartListener.remove();
      }

      if (callback) {
        _this37.onMarkerDragStartListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onMarkerDragStart', _this37.generateCallback(callback));
      } else {
        _this37.onMarkerDragStartListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMarkerDrag' events.
   *
   * @param callback
   * @returns
   */


  setOnMarkerDragListener(callback) {
    var _this38 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this38.onMarkerDragListener) {
        _this38.onMarkerDragListener.remove();
      }

      if (callback) {
        _this38.onMarkerDragListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onMarkerDrag', _this38.generateCallback(callback));
      } else {
        _this38.onMarkerDragListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMarkerDragEnd' events.
   *
   * @param callback
   * @returns
   */


  setOnMarkerDragEndListener(callback) {
    var _this39 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this39.onMarkerDragEndListener) {
        _this39.onMarkerDragEndListener.remove();
      }

      if (callback) {
        _this39.onMarkerDragEndListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onMarkerDragEnd', _this39.generateCallback(callback));
      } else {
        _this39.onMarkerDragEndListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMyLocationButtonClick' events.
   *
   * @param callback
   * @returns
   */


  setOnMyLocationButtonClickListener(callback) {
    var _this40 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this40.onMyLocationButtonClickListener) {
        _this40.onMyLocationButtonClickListener.remove();
      }

      if (callback) {
        _this40.onMyLocationButtonClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onMyLocationButtonClick', _this40.generateCallback(callback));
      } else {
        _this40.onMyLocationButtonClickListener = undefined;
      }
    })();
  }
  /**
   * Set the event listener on the map for 'onMyLocationClick' events.
   *
   * @param callback
   * @returns
   */


  setOnMyLocationClickListener(callback) {
    var _this41 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this41.onMyLocationClickListener) {
        _this41.onMyLocationClickListener.remove();
      }

      if (callback) {
        _this41.onMyLocationClickListener = yield _implementation__WEBPACK_IMPORTED_MODULE_3__.CapacitorGoogleMaps.addListener('onMyLocationClick', _this41.generateCallback(callback));
      } else {
        _this41.onMyLocationClickListener = undefined;
      }
    })();
  }
  /**
   * Remove all event listeners on the map.
   *
   * @param callback
   * @returns
   */


  removeAllMapListeners() {
    var _this42 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this42.onBoundsChangedListener) {
        _this42.onBoundsChangedListener.remove();

        _this42.onBoundsChangedListener = undefined;
      }

      if (_this42.onCameraIdleListener) {
        _this42.onCameraIdleListener.remove();

        _this42.onCameraIdleListener = undefined;
      }

      if (_this42.onCameraMoveStartedListener) {
        _this42.onCameraMoveStartedListener.remove();

        _this42.onCameraMoveStartedListener = undefined;
      }

      if (_this42.onClusterClickListener) {
        _this42.onClusterClickListener.remove();

        _this42.onClusterClickListener = undefined;
      }

      if (_this42.onClusterInfoWindowClickListener) {
        _this42.onClusterInfoWindowClickListener.remove();

        _this42.onClusterInfoWindowClickListener = undefined;
      }

      if (_this42.onInfoWindowClickListener) {
        _this42.onInfoWindowClickListener.remove();

        _this42.onInfoWindowClickListener = undefined;
      }

      if (_this42.onMapClickListener) {
        _this42.onMapClickListener.remove();

        _this42.onMapClickListener = undefined;
      }

      if (_this42.onPolylineClickListener) {
        _this42.onPolylineClickListener.remove();

        _this42.onPolylineClickListener = undefined;
      }

      if (_this42.onMarkerClickListener) {
        _this42.onMarkerClickListener.remove();

        _this42.onMarkerClickListener = undefined;
      }

      if (_this42.onPolygonClickListener) {
        _this42.onPolygonClickListener.remove();

        _this42.onPolygonClickListener = undefined;
      }

      if (_this42.onCircleClickListener) {
        _this42.onCircleClickListener.remove();

        _this42.onCircleClickListener = undefined;
      }

      if (_this42.onMarkerDragStartListener) {
        _this42.onMarkerDragStartListener.remove();

        _this42.onMarkerDragStartListener = undefined;
      }

      if (_this42.onMarkerDragListener) {
        _this42.onMarkerDragListener.remove();

        _this42.onMarkerDragListener = undefined;
      }

      if (_this42.onMarkerDragEndListener) {
        _this42.onMarkerDragEndListener.remove();

        _this42.onMarkerDragEndListener = undefined;
      }

      if (_this42.onMyLocationButtonClickListener) {
        _this42.onMyLocationButtonClickListener.remove();

        _this42.onMyLocationButtonClickListener = undefined;
      }

      if (_this42.onMyLocationClickListener) {
        _this42.onMyLocationClickListener.remove();

        _this42.onMyLocationClickListener = undefined;
      }
    })();
  }

  generateCallback(callback) {
    const mapId = this.id;
    return data => {
      if (data.mapId == mapId) {
        callback(data);
      }
    };
  }

}

/***/ }),

/***/ 3491:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/interval.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "interval": () => (/* binding */ interval)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observable */ 2378);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 328);
/* harmony import */ var _util_isNumeric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isNumeric */ 7269);



function interval(period = 0, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
  if (!(0,_util_isNumeric__WEBPACK_IMPORTED_MODULE_1__.isNumeric)(period) || period < 0) {
    period = 0;
  }

  if (!scheduler || typeof scheduler.schedule !== 'function') {
    scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async;
  }

  return new _Observable__WEBPACK_IMPORTED_MODULE_2__.Observable(subscriber => {
    subscriber.add(scheduler.schedule(dispatch, period, {
      subscriber,
      counter: 0,
      period
    }));
    return subscriber;
  });
}

function dispatch(state) {
  const {
    subscriber,
    counter,
    period
  } = state;
  subscriber.next(counter);
  this.schedule({
    subscriber,
    counter: counter + 1,
    period
  }, period);
}

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map