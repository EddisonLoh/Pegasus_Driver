(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth-guard */ 3200);
/* harmony import */ var _guards_driver_profile_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/driver-profile.guard */ 8451);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const redirectUnauthorizedToLogin = () => (0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__.redirectUnauthorizedTo)(['login']);
const redirectLoggedInToHome = () => (0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__.redirectLoggedInTo)(['tabs']);
const routes = [
    {
        path: '',
        redirectTo: 'tabs',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 107)).then((m) => m.LoginPageModule),
        ...(0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__.canActivate)(redirectLoggedInToHome),
    },
    {
        path: 'tabs',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_tabs_tabs_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 5564)).then(m => m.TabsPageModule),
        canActivate: [_guards_driver_profile_guard__WEBPACK_IMPORTED_MODULE_0__.DriverProfileGuard], // Protect the tabs route with the new guard
    },
    {
        path: 'details',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_details_details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/details/details.module */ 557)).then(m => m.DetailsPageModule),
        ...(0,_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__.canActivate)(redirectUnauthorizedToLogin),
    },
    {
        path: 'payment',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_payment_payment_module_ts"), __webpack_require__.e("common")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/payment/payment.module */ 4923)).then(m => m.PaymentPageModule),
        canActivate: [_guards_driver_profile_guard__WEBPACK_IMPORTED_MODULE_0__.DriverProfileGuard], // Ensure protected route
    },
    {
        path: 'support',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_support_support_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/support/support.module */ 2602)).then(m => m.SupportPageModule),
        canActivate: [_guards_driver_profile_guard__WEBPACK_IMPORTED_MODULE_0__.DriverProfileGuard], // Ensure protected route
    },
    {
        path: 'about',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_about_about_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/about/about.module */ 8114)).then(m => m.AboutPageModule),
        canActivate: [_guards_driver_profile_guard__WEBPACK_IMPORTED_MODULE_0__.DriverProfileGuard], // Ensure protected route
    },
    {
        path: 'rating',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_rating_rating_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/rating/rating.module */ 4176)).then(m => m.RatingPageModule),
        canActivate: [_guards_driver_profile_guard__WEBPACK_IMPORTED_MODULE_0__.DriverProfileGuard], // Ensure protected route
    },
    {
        path: 'network',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_network_network_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/network/network.module */ 7846)).then(m => m.NetworkPageModule),
        canActivate: [_guards_driver_profile_guard__WEBPACK_IMPORTED_MODULE_0__.DriverProfileGuard], // Ensure protected route
    },
    {
        path: 'waiting',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_waiting_waiting_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./waiting/waiting.module */ 5363)).then(m => m.WaitingPageModule)
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules }), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);



class AppComponent {
    constructor(translate) {
        this.translate = translate;
        this.initializeApp();
    }
    initializeApp() {
        const savedLang = localStorage.getItem('preferred_language') || 'en';
        this.translate.setDefaultLang('en');
        this.translate.use(savedLang);
        document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-app");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, dependencies: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonApp, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonRouterOutlet], styles: ["ion-menu[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  padding: 20px 0;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%], ion-menu.md[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-list#inbox-list[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-list#inbox-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%] {\n  font-size: 22px;\n  min-height: 70px;\n  margin-bottom: 16px;\n}\n\n.allItems[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 19px;\n}\n\n.allItems[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 29px;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-list#labels-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-bottom: 90px;\n  color: #757575;\n  min-height: 20px;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-item.selected[_ngcontent-%COMP%] {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-item.selected[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: #616e7e;\n}\n\nion-menu.md[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-item.selected[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-list#labels-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%], ion-menu.ios[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n\nion-note[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected[_ngcontent-%COMP%] {\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJFQUFBO0FBQ0o7O0FBRUU7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtBQUNKOztBQUVFO0VBQ0UsbUJBQUE7QUFDSjs7QUFFRTs7RUFFRSxrQkFBQTtBQUNKOztBQUVFO0VBQ0UsMkRBQUE7QUFDSjs7QUFFRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUU7RUFDQyxlQUFBO0VBQ0EsZUFBQTtBQUNIOztBQUFHO0VBQ0MsZUFBQTtBQUVKOztBQUVFO0VBQ0UsZUFBQTtFQUVBLG1CQUFBO0VBRUEsY0FBQTtFQUVBLGdCQUFBO0FBRko7O0FBS0U7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFLRTtFQUNFLHNEQUFBO0FBRko7O0FBS0U7RUFDRSwrQkFBQTtBQUZKOztBQUtFO0VBQ0UsY0FBQTtBQUZKOztBQUtFO0VBQ0UsZ0JBQUE7QUFGSjs7QUFLRTtFQUNFLHNCQUFBO0FBRko7O0FBS0U7RUFDRSxtQkFBQTtBQUZKOztBQUtFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQUZKOztBQUtFO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBRko7O0FBS0U7RUFDRSwrQkFBQTtBQUZKOztBQUtFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFGSjs7QUFLRTtFQUNFLGtCQUFBO0FBRko7O0FBS0U7O0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtBQUZKOztBQUtFO0VBQ0Usa0JBQUE7QUFGSjs7QUFLRTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUVBLG9DQUFBO0FBSEo7O0FBTUU7RUFDRSxpQ0FBQTtBQUhKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51IGlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiA4cHg7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xyXG4gICAgcGFkZGluZzogMjBweCAwO1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5tZCBpb24tbm90ZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXHJcbiAgaW9uLW1lbnUubWQgaW9uLW5vdGUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBtaW4taGVpZ2h0OiA3MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICB9XHJcblxyXG4gIC5hbGxJdGVtc3tcclxuICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICBmb250LXNpemU6IDE5cHg7XHJcbiAgIGlvbi1pY29ue1xyXG4gICAgZm9udC1zaXplOiAyOXB4O1xyXG4gICB9XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51Lm1kIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgXHJcbiAgICBtYXJnaW4tYm90dG9tOiA5MHB4O1xyXG4gIFxyXG4gICAgY29sb3I6ICM3NTc1NzU7XHJcblxyXG4gICAgbWluLWhlaWdodDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTQpO1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogIzYxNmU3ZTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51LmlvcyBpb24tY29udGVudCB7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5pb3MgaW9uLWxpc3Qge1xyXG4gICAgcGFkZGluZzogMjBweCAwIDAgMDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XHJcbiAgICAtLW1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgY29sb3I6ICM3Mzg0OWE7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1tZW51LmlvcyBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxyXG4gIGlvbi1tZW51LmlvcyBpb24tbm90ZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG4gIH1cclxuICBcclxuICBpb24tbWVudS5pb3MgaW9uLW5vdGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIH1cclxuICBcclxuICBpb24tbm90ZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgXHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1pdGVtLnNlbGVjdGVkIHtcclxuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICB9Il19 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_fire_app__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/fire/app */ 9150);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ 6818);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/fire/auth */ 1577);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/fire/storage */ 2111);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ 5099);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ 2779);
/* harmony import */ var _otp_otp_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./otp/otp.component */ 3096);
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-otp-input */ 9306);
/* harmony import */ var _googlemaps_google_maps_services_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @googlemaps/google-maps-services-js */ 7614);
/* harmony import */ var _googlemaps_google_maps_services_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_googlemaps_google_maps_services_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _country_search_modal_country_search_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./country-search-modal/country-search-modal.component */ 9568);
/* harmony import */ var _enroute_chat_enroute_chat_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./enroute-chat/enroute-chat.component */ 5635);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/http-loader */ 8319);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/language.service */ 1155);
/* harmony import */ var _trip_summary_trip_summary_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./trip-summary/trip-summary.component */ 4948);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2560);
































// AoT requires an exported function for factories
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
class AppModule {
    constructor(translate) {
        translate.setDefaultLang('en');
        // Get saved language or use browser language
        const savedLang = localStorage.getItem('preferred_language');
        const browserLang = translate.getBrowserLang();
        const defaultLang = savedLang || (browserLang?.match(/en|ar/) ? browserLang : 'en');
        translate.use(defaultLang);
        document.documentElement.dir = defaultLang === 'ar' ? 'rtl' : 'ltr';
    }
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateService)); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonicRouteStrategy }, firebase_auth__WEBPACK_IMPORTED_MODULE_4__.GoogleAuthProvider, firebase_auth__WEBPACK_IMPORTED_MODULE_4__.FacebookAuthProvider, _googlemaps_google_maps_services_js__WEBPACK_IMPORTED_MODULE_7__.Client, _services_language_service__WEBPACK_IMPORTED_MODULE_10__.LanguageService], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule,
        ng_otp_input__WEBPACK_IMPORTED_MODULE_18__.NgOtpInputModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonicModule.forRoot(),
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_22__.provideFirebaseApp)(() => (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_22__.initializeApp)(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebase)),
        (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_23__.provideAuth)(() => {
            if (_capacitor_core__WEBPACK_IMPORTED_MODULE_3__.Capacitor.isNativePlatform()) {
                return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.initializeAuth)((0,firebase_app__WEBPACK_IMPORTED_MODULE_5__.getApp)(), {
                    persistence: firebase_auth__WEBPACK_IMPORTED_MODULE_4__.indexedDBLocalPersistence,
                });
            }
            else {
                return (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_23__.getAuth)();
            }
        }),
        (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_24__.provideFirestore)(() => (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_24__.getFirestore)()),
        (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_25__.provideStorage)(() => (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_25__.getStorage)()),
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule.forRoot({
            defaultLanguage: 'en',
            loader: {
                provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClient]
            }
        })] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _otp_otp_component__WEBPACK_IMPORTED_MODULE_6__.OtpComponent, _country_search_modal_country_search_modal_component__WEBPACK_IMPORTED_MODULE_8__.CountrySearchModalComponent, _enroute_chat_enroute_chat_component__WEBPACK_IMPORTED_MODULE_9__.EnrouteChatComponent, _trip_summary_trip_summary_component__WEBPACK_IMPORTED_MODULE_11__.TripSummaryComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule,
        ng_otp_input__WEBPACK_IMPORTED_MODULE_18__.NgOtpInputModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonicModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_fire_app__WEBPACK_IMPORTED_MODULE_22__.FirebaseAppModule, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_23__.AuthModule, _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_24__.FirestoreModule, _angular_fire_storage__WEBPACK_IMPORTED_MODULE_25__.StorageModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule] }); })();


/***/ }),

/***/ 9568:
/*!************************************************************************!*\
  !*** ./src/app/country-search-modal/country-search-modal.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CountrySearchModalComponent": () => (/* binding */ CountrySearchModalComponent)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);




function CountrySearchModalComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4)(1, "ion-item", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CountrySearchModalComponent_div_10_Template_ion_item_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const country_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.selectCountry(country_r1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-avatar", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const country_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", country_r1.flag, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", country_r1.name + " flag");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](country_r1.name);
} }
class CountrySearchModalComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.CountryJson = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.CountryJson;
        this.filteredCountries = [];
    }
    ngOnInit() {
        this.filteredCountries = this.CountryJson;
    }
    filterCountries(event) {
        const searchTerm = event.target.value.toLowerCase();
        this.filteredCountries = this.CountryJson.filter(country => country.name.toLowerCase().includes(searchTerm) ||
            country.dialCode.includes(searchTerm));
    }
    selectCountry(country) {
        this.modalCtrl.dismiss(country);
    }
    dismiss() {
        this.modalCtrl.dismiss();
    }
}
CountrySearchModalComponent.ɵfac = function CountrySearchModalComponent_Factory(t) { return new (t || CountrySearchModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController)); };
CountrySearchModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CountrySearchModalComponent, selectors: [["app-country-search-modal"]], decls: 11, vars: 1, consts: [["slot", "end"], [3, "click"], ["placeholder", "Search country", 3, "ionInput"], ["class", "country-item", 4, "ngFor", "ngForOf"], [1, "country-item"], ["slot", "start"], [3, "src", "alt"]], template: function CountrySearchModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Select Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-buttons", 0)(5, "ion-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CountrySearchModalComponent_Template_ion_button_click_5_listener() { return ctx.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-searchbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionInput", function CountrySearchModalComponent_Template_ion_searchbar_ionInput_7_listener($event) { return ctx.filterCountries($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-content")(9, "ion-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CountrySearchModalComponent_div_10_Template, 6, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.filteredCountries);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonSearchbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.TextValueAccessor], styles: ["ion-toolbar[_ngcontent-%COMP%] {\n  background: var(--ion-color-primary); \n}\nion-title[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: var(--ion-color-primary);\n}\nion-button[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  --color: var(--ion-color-primary);\n}\nion-searchbar[_ngcontent-%COMP%] {\n  --background: white;\n  --color: var(--ion-color-primary);\n  --placeholder-color: #8b9dc3;\n}\nion-item[_ngcontent-%COMP%] {\n  margin: 0.5rem 0;\n}\n.country-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.country-icon[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n  font-size: 1.5rem;\n  color: var(--ion-color-primary); \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50cnktc2VhcmNoLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdDQUFBO0FBQ0E7RUFDRSxvQ0FBQSxFQUFBLHdCQUFBO0FBQ0Y7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtBQUNGO0FBRUE7RUFDRSwrQkFBQTtFQUNBLGlDQUFBO0FBQ0Y7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSw0QkFBQTtBQUNGO0FBRUE7RUFDRSxnQkFBQTtBQUNGO0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUVBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBLEVBQUEsa0NBQUE7QUFDRiIsImZpbGUiOiJjb3VudHJ5LXNlYXJjaC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGNvdW50cnktc2VhcmNoLW1vZGFsLmNvbXBvbmVudC5zY3NzICovXHJcbmlvbi10b29sYmFyIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7IC8qIFVzaW5nIGEgc29saWQgY29sb3IgKi9cclxufVxyXG5cclxuaW9uLXRpdGxlIHtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxuaW9uLXNlYXJjaGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzhiOWRjMztcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gIG1hcmdpbjogMC41cmVtIDA7XHJcbn1cclxuXHJcbi5jb3VudHJ5LWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvdW50cnktaWNvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7IC8qIEljb24gY29sb3IgdG8gbWF0Y2ggdGhlIHRoZW1lICovXHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ 5635:
/*!********************************************************!*\
  !*** ./src/app/enroute-chat/enroute-chat.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnrouteChatComponent": () => (/* binding */ EnrouteChatComponent)
/* harmony export */ });
/* harmony import */ var C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/status-bar */ 9326);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 4661);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_avatar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/avatar.service */ 5083);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);












function EnrouteChatComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 21)(1, "ion-avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 23)(4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Online");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", (ctx_r0.chatData == null ? null : ctx_r0.chatData.userImage) || "assets/imgs/default-avatar.png", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((ctx_r0.chatData == null ? null : ctx_r0.chatData.userName) || "Chat");
  }
}

function EnrouteChatComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function EnrouteChatComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ion-spinner", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 1, "LOADING_MESSAGES"));
  }
}

function EnrouteChatComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ion-img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 2, "WE_RESPOND_IMMEDIATELY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 4, "TELL_US_HOW_WE_CAN_HELP"));
  }
}

function EnrouteChatComponent_div_15_div_1_ion_avatar_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-avatar", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", (ctx_r9.chatData == null ? null : ctx_r9.chatData.userImage) || "assets/imgs/default-avatar.png", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
  }
}

function EnrouteChatComponent_div_15_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 38)(1, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const message_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](message_r8.fromName);
  }
}

function EnrouteChatComponent_div_15_div_1_ion_avatar_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-avatar", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

const _c0 = function (a0, a1) {
  return {
    "my-message": a0,
    "other-message": a1
  };
};

function EnrouteChatComponent_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EnrouteChatComponent_div_15_div_1_ion_avatar_1_Template, 2, 1, "ion-avatar", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, EnrouteChatComponent_div_15_div_1_div_3_Template, 3, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, EnrouteChatComponent_div_15_div_1_ion_avatar_8_Template, 2, 0, "ion-avatar", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const message_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](6, _c0, message_r8.myMsg, !message_r8.myMsg));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !message_r8.myMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !message_r8.myMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](message_r8.msg);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r7.formatTime(message_r8.createdAt));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", message_r8.myMsg);
  }
}

function EnrouteChatComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EnrouteChatComponent_div_15_div_1_Template, 9, 9, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx_r4.messages));
  }
}

function EnrouteChatComponent_ion_icon_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-icon", 41);
  }
}

function EnrouteChatComponent_ion_spinner_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-spinner", 42);
  }
}

class EnrouteChatComponent {
  constructor(chatService, router, translate) {
    this.chatService = chatService;
    this.router = router;
    this.translate = translate;
    this.newMsg = '';
    this.hasNoData = false;
    this.isLoading = true;
    this.currentLanguage = 'en';
    this.isTyping = false;
    this.currentLanguage = this.translate.currentLang || 'en';
  }

  ngOnInit() {
    console.log('Chat initialized with:', this.chatData);
    this.loadMessages();
  }

  ngOnDestroy() {
    if (this.messageSubscription) {
      this.messageSubscription.unsubscribe();
    }
  }

  loadMessages() {
    if (!this.chatData?.userId) {
      console.error('No userId provided to load messages');
      this.hasNoData = true;
      this.isLoading = false;
      return;
    }

    this.isLoading = true;
    this.messages = this.chatService.getChatMessage(this.chatData.userId);
    this.messageSubscription = this.messages.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(messages => {
      if (messages.length === 0) {
        this.hasNoData = true;
      } else {
        this.hasNoData = false;
        setTimeout(() => this.scrollToBottom(), 300);
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.finalize)(() => this.isLoading = false)).subscribe();
  }

  scrollToBottom() {
    var _this = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this.content.scrollToBottom(300);
      } catch (err) {
        console.error('Error scrolling to bottom:', err);
      }
    })();
  }

  Show() {
    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_1__.StatusBar.setOverlaysWebView({
        overlay: false
      });
    })();
  }

  Hide() {
    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _capacitor_status_bar__WEBPACK_IMPORTED_MODULE_1__.StatusBar.setOverlaysWebView({
        overlay: true
      });
    })();
  }

  sendMessage() {
    var _this2 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this2.newMsg.trim()) return;

      try {
        _this2.isTyping = true;
        yield _this2.chatService.addChatEnRouteMessage(_this2.newMsg.trim(), _this2.chatData.userId);
        _this2.newMsg = '';
        yield _this2.scrollToBottom();
        yield _this2.chatService.updatChatMessageInfo(_this2.chatData.userId);
      } catch (error) {
        console.error('Error sending message:', error); // You could add a toast notification here for error feedback
      } finally {
        _this2.isTyping = false;
      }
    })();
  }

  setLanguage(lang) {
    this.currentLanguage = lang;
    this.translate.use(lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('preferred_language', lang);
  }

  closeChat() {
    this.router.navigate(['/home']);
  }

  formatTime(timestamp) {
    if (!timestamp) return '';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    const now = new Date();
    const diff = now.getTime() - date.getTime(); // Less than 24 hours, show time only

    if (diff < 24 * 60 * 60 * 1000) {
      return date.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      });
    } // More than 24 hours, show date and time


    return date.toLocaleDateString([], {
      month: 'short',
      day: 'numeric'
    }) + ' ' + date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });
  }

}

EnrouteChatComponent.ɵfac = function EnrouteChatComponent_Factory(t) {
  return new (t || EnrouteChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_avatar_service__WEBPACK_IMPORTED_MODULE_2__.AvatarService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService));
};

EnrouteChatComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: EnrouteChatComponent,
  selectors: [["app-enroute-chat"]],
  viewQuery: function EnrouteChatComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonContent, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    }
  },
  inputs: {
    chatData: "chatData"
  },
  decls: 24,
  vars: 12,
  consts: [[1, "ion-no-border", "chat-header"], ["slot", "start"], ["defaultHref", "/home"], [1, "chat-title"], ["class", "user-info", 4, "ngIf"], [4, "ngIf"], ["slot", "end"], ["color", "primary"], ["name", "call", "slot", "icon-only"], [3, "click"], ["name", "close-outline"], [1, "chat-content"], ["class", "loading-container", 4, "ngIf"], ["class", "empty-chat", 4, "ngIf"], ["class", "messages-container", 4, "ngIf"], [1, "chat-footer"], [1, "input-container"], ["rows", "1", "maxLength", "500", "autoGrow", "true", 1, "message-input", 3, "placeholder", "ngModel", "ngModelChange", "ionFocus", "ionBlur"], [1, "send-button", 3, "disabled", "click"], ["name", "send", 4, "ngIf"], ["name", "dots", "class", "send-spinner", 4, "ngIf"], [1, "user-info"], ["alt", "User", 3, "src"], [1, "user-details"], [1, "status"], [1, "loading-container"], ["name", "bubbles"], [1, "empty-chat"], ["src", "../../../assets/imgs/chat.svg"], [1, "messages-container"], ["class", "message-wrapper", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "message-wrapper", 3, "ngClass"], ["class", "message-avatar", 4, "ngIf"], [1, "message-bubble"], ["class", "message-info", 4, "ngIf"], [1, "message-content"], [1, "message-time"], [1, "message-avatar"], [1, "message-info"], [1, "sender-name"], ["src", "assets/imgs/default-avatar.png", "alt", "Me"], ["name", "send"], ["name", "dots", 1, "send-spinner"]],
  template: function EnrouteChatComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ion-back-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-title", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, EnrouteChatComponent_div_5_Template, 8, 2, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, EnrouteChatComponent_span_6_Template, 2, 0, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-buttons", 6)(8, "ion-button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "ion-icon", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ion-button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EnrouteChatComponent_Template_ion_button_click_10_listener() {
        return ctx.closeChat();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "ion-icon", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "ion-content", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, EnrouteChatComponent_div_13_Template, 5, 3, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, EnrouteChatComponent_div_14_Template, 8, 6, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, EnrouteChatComponent_div_15_Template, 3, 3, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "ion-footer", 15)(17, "ion-toolbar")(18, "div", 16)(19, "ion-textarea", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function EnrouteChatComponent_Template_ion_textarea_ngModelChange_19_listener($event) {
        return ctx.newMsg = $event;
      })("ionFocus", function EnrouteChatComponent_Template_ion_textarea_ionFocus_19_listener() {
        return ctx.Show();
      })("ionBlur", function EnrouteChatComponent_Template_ion_textarea_ionBlur_19_listener() {
        return ctx.Hide();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "ion-button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EnrouteChatComponent_Template_ion_button_click_21_listener() {
        return ctx.sendMessage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, EnrouteChatComponent_ion_icon_22_Template, 1, 0, "ion-icon", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, EnrouteChatComponent_ion_spinner_23_Template, 1, 0, "ion-spinner", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.chatData == null ? null : ctx.chatData.userName);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx.chatData == null ? null : ctx.chatData.userName));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.hasNoData && !ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.hasNoData);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](20, 10, "TYPE_MESSAGE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.newMsg);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.newMsg.trim() || ctx.isTyping);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isTyping);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isTyping);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonFooter, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonSpinner, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonTextarea, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.TextValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonBackButtonDelegate, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
  styles: [".chat-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --background: #ffffff;\n  --border-color: transparent;\n}\n.chat-header[_ngcontent-%COMP%]   .chat-title[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.chat-header[_ngcontent-%COMP%]   .chat-title[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  margin-right: 10px;\n}\n.chat-header[_ngcontent-%COMP%]   .chat-title[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.chat-header[_ngcontent-%COMP%]   .chat-title[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0;\n}\n.chat-header[_ngcontent-%COMP%]   .chat-title[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--ion-color-success);\n  margin: 0;\n}\n.chat-content[_ngcontent-%COMP%] {\n  --background: #f5f5f5;\n}\n.chat-content[_ngcontent-%COMP%]   .loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n.chat-content[_ngcontent-%COMP%]   .loading-container[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  --color: var(--ion-color-primary);\n}\n.chat-content[_ngcontent-%COMP%]   .loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium);\n}\n.chat-content[_ngcontent-%COMP%]   .empty-chat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  padding: 20px;\n  text-align: center;\n}\n.chat-content[_ngcontent-%COMP%]   .empty-chat[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%] {\n  max-width: 200px;\n  margin-bottom: 20px;\n}\n.chat-content[_ngcontent-%COMP%]   .empty-chat[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--ion-color-primary);\n  margin-bottom: 8px;\n}\n.chat-content[_ngcontent-%COMP%]   .empty-chat[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium);\n  margin-top: 0;\n}\n.chat-content[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.chat-content[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .message-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 16px;\n}\n.chat-content[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .message-wrapper[_ngcontent-%COMP%]   .message-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  flex-shrink: 0;\n}\n.chat-content[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .message-wrapper[_ngcontent-%COMP%]   .message-bubble[_ngcontent-%COMP%] {\n  max-width: 75%;\n  padding: 12px;\n  border-radius: 18px;\n  position: relative;\n}\n.chat-content[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .message-wrapper[_ngcontent-%COMP%]   .message-bubble[_ngcontent-%COMP%]   .message-info[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.chat-content[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .message-wrapper[_ngcontent-%COMP%]   .message-bubble[_ngcontent-%COMP%]   .message-info[_ngcontent-%COMP%]   .sender-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 13px;\n}\n.chat-content[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .message-wrapper[_ngcontent-%COMP%]   .message-bubble[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 1.4;\n  word-break: break-word;\n}\n.chat-content[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .message-wrapper[_ngcontent-%COMP%]   .message-bubble[_ngcontent-%COMP%]   .message-time[_ngcontent-%COMP%] {\n  font-size: 11px;\n  opacity: 0.7;\n  text-align: right;\n  margin-top: 4px;\n}\n.chat-content[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .message-wrapper.my-message[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.chat-content[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .message-wrapper.my-message[_ngcontent-%COMP%]   .message-avatar[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.chat-content[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .message-wrapper.my-message[_ngcontent-%COMP%]   .message-bubble[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-primary);\n  color: white;\n  border-bottom-right-radius: 4px;\n}\n.chat-content[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .message-wrapper.other-message[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.chat-content[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .message-wrapper.other-message[_ngcontent-%COMP%]   .message-avatar[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.chat-content[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .message-wrapper.other-message[_ngcontent-%COMP%]   .message-bubble[_ngcontent-%COMP%] {\n  background-color: white;\n  color: var(--ion-color-dark);\n  border-bottom-left-radius: 4px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n.chat-footer[_ngcontent-%COMP%] {\n  --background: #ffffff;\n  --border-color: #e0e0e0;\n}\n.chat-footer[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 8px 16px;\n}\n.chat-footer[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .message-input[_ngcontent-%COMP%] {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --padding-top: 10px;\n  --padding-bottom: 10px;\n  --background: #f0f2f5;\n  --border-radius: 24px;\n  --placeholder-color: var(--ion-color-medium);\n  margin-right: 8px;\n  flex: 1;\n  max-height: 120px;\n}\n.chat-footer[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .send-button[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --padding-end: 0;\n  --border-radius: 50%;\n  --background: var(--ion-color-primary);\n  width: 40px;\n  height: 40px;\n  margin: 0;\n}\n.chat-footer[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .send-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.chat-footer[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   .send-button[_ngcontent-%COMP%]   .send-spinner[_ngcontent-%COMP%] {\n  --color: white;\n}\n[dir=rtl][_nghost-%COMP%]   .messages-container[_ngcontent-%COMP%]   .message-wrapper.my-message[_ngcontent-%COMP%]   .message-avatar[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .messages-container[_ngcontent-%COMP%]   .message-wrapper.my-message[_ngcontent-%COMP%]   .message-avatar[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: 8px;\n}\n[dir=rtl][_nghost-%COMP%]   .messages-container[_ngcontent-%COMP%]   .message-wrapper.my-message[_ngcontent-%COMP%]   .message-bubble[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .messages-container[_ngcontent-%COMP%]   .message-wrapper.my-message[_ngcontent-%COMP%]   .message-bubble[_ngcontent-%COMP%] {\n  border-bottom-right-radius: 18px;\n  border-bottom-left-radius: 4px;\n}\n[dir=rtl][_nghost-%COMP%]   .messages-container[_ngcontent-%COMP%]   .message-wrapper.other-message[_ngcontent-%COMP%]   .message-avatar[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .messages-container[_ngcontent-%COMP%]   .message-wrapper.other-message[_ngcontent-%COMP%]   .message-avatar[_ngcontent-%COMP%] {\n  margin-right: 0;\n  margin-left: 8px;\n}\n[dir=rtl][_nghost-%COMP%]   .messages-container[_ngcontent-%COMP%]   .message-wrapper.other-message[_ngcontent-%COMP%]   .message-bubble[_ngcontent-%COMP%], [dir=rtl]   [_nghost-%COMP%]   .messages-container[_ngcontent-%COMP%]   .message-wrapper.other-message[_ngcontent-%COMP%]   .message-bubble[_ngcontent-%COMP%] {\n  border-bottom-left-radius: 18px;\n  border-bottom-right-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVucm91dGUtY2hhdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFRTtFQUNFLHFCQUFBO0VBQ0EsMkJBQUE7QUFESjtBQUtJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBSE47QUFLTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFIUjtBQU1NO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBSlI7QUFNUTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUFKVjtBQU9RO0VBQ0UsZUFBQTtFQUNBLCtCQUFBO0VBQ0EsU0FBQTtBQUxWO0FBWUE7RUFDRSxxQkFBQTtBQVRGO0FBV0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQVRKO0FBV0k7RUFDRSxtQkFBQTtFQUNBLGlDQUFBO0FBVE47QUFZSTtFQUNFLDhCQUFBO0FBVk47QUFjRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBWko7QUFjSTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFaTjtBQWVJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtBQWJOO0FBZ0JJO0VBQ0UsOEJBQUE7RUFDQSxhQUFBO0FBZE47QUFrQkU7RUFDRSxhQUFBO0FBaEJKO0FBa0JJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBaEJOO0FBa0JNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBaEJSO0FBbUJNO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBakJSO0FBbUJRO0VBQ0Usa0JBQUE7QUFqQlY7QUFtQlU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFqQlo7QUFxQlE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQW5CVjtBQXNCUTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBcEJWO0FBd0JNO0VBQ0UsMkJBQUE7QUF0QlI7QUF3QlE7RUFDRSxnQkFBQTtBQXRCVjtBQXlCUTtFQUNFLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0FBdkJWO0FBMkJNO0VBQ0UsbUJBQUE7QUF6QlI7QUEyQlE7RUFDRSxpQkFBQTtBQXpCVjtBQTRCUTtFQUNFLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLHdDQUFBO0FBMUJWO0FBaUNBO0VBQ0UscUJBQUE7RUFDQSx1QkFBQTtBQTlCRjtBQWdDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBOUJKO0FBZ0NJO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNENBQUE7RUFDQSxpQkFBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtBQTlCTjtBQWlDSTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHNDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FBL0JOO0FBaUNNO0VBQ0UsZUFBQTtBQS9CUjtBQWtDTTtFQUNFLGNBQUE7QUFoQ1I7QUEyQ1E7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUF4Q1Y7QUEyQ1E7RUFDRSxnQ0FBQTtFQUNBLDhCQUFBO0FBekNWO0FBOENRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBNUNWO0FBK0NRO0VBQ0UsK0JBQUE7RUFDQSwrQkFBQTtBQTdDViIsImZpbGUiOiJlbnJvdXRlLWNoYXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNb2Rlcm4gY2hhdCBzdHlsaW5nXHJcbi5jaGF0LWhlYWRlciB7XHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBcclxuICAuY2hhdC10aXRsZSB7XHJcbiAgICAudXNlci1pbmZvIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgXHJcbiAgICAgIGlvbi1hdmF0YXIge1xyXG4gICAgICAgIHdpZHRoOiAzNnB4O1xyXG4gICAgICAgIGhlaWdodDogMzZweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC51c2VyLWRldGFpbHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBcclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuc3RhdHVzIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY2hhdC1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgXHJcbiAgLmxvYWRpbmctY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgXHJcbiAgICBpb24tc3Bpbm5lciB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcCB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmVtcHR5LWNoYXQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbiAgICBpb24taW1nIHtcclxuICAgICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaDIge1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcCB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLm1lc3NhZ2VzLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgXHJcbiAgICAubWVzc2FnZS13cmFwcGVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgXHJcbiAgICAgIC5tZXNzYWdlLWF2YXRhciB7XHJcbiAgICAgICAgd2lkdGg6IDM2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAubWVzc2FnZS1idWJibGUge1xyXG4gICAgICAgIG1heC13aWR0aDogNzUlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLm1lc3NhZ2UtaW5mbyB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC5zZW5kZXItbmFtZSB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLm1lc3NhZ2UtY29udGVudCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLm1lc3NhZ2UtdGltZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICYubXktbWVzc2FnZSB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5tZXNzYWdlLWF2YXRhciB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAubWVzc2FnZS1idWJibGUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICYub3RoZXItbWVzc2FnZSB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBcclxuICAgICAgICAubWVzc2FnZS1hdmF0YXIge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5tZXNzYWdlLWJ1YmJsZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNoYXQtZm9vdGVyIHtcclxuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgLS1ib3JkZXItY29sb3I6ICNlMGUwZTA7XHJcbiAgXHJcbiAgLmlucHV0LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgXHJcbiAgICAubWVzc2FnZS1pbnB1dCB7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcclxuICAgICAgLS1wYWRkaW5nLWVuZDogMTZweDtcclxuICAgICAgLS1wYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiAjZjBmMmY1O1xyXG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgZmxleDogMTtcclxuICAgICAgbWF4LWhlaWdodDogMTIwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zZW5kLWJ1dHRvbiB7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgLS1wYWRkaW5nLWVuZDogMDtcclxuICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICB3aWR0aDogNDBweDtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIFxyXG4gICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuc2VuZC1zcGlubmVyIHtcclxuICAgICAgICAtLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gUlRMIHN1cHBvcnRcclxuOmhvc3QtY29udGV4dChbZGlyPVwicnRsXCJdKSB7XHJcbiAgLm1lc3NhZ2VzLWNvbnRhaW5lciB7XHJcbiAgICAubWVzc2FnZS13cmFwcGVyIHtcclxuICAgICAgJi5teS1tZXNzYWdlIHtcclxuICAgICAgICAubWVzc2FnZS1hdmF0YXIge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLm1lc3NhZ2UtYnViYmxlIHtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxOHB4O1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgJi5vdGhlci1tZXNzYWdlIHtcclxuICAgICAgICAubWVzc2FnZS1hdmF0YXIge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLm1lc3NhZ2UtYnViYmxlIHtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE4cHg7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"]
});

/***/ }),

/***/ 8451:
/*!************************************************!*\
  !*** ./src/app/guards/driver-profile.guard.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DriverProfileGuard": () => (/* binding */ DriverProfileGuard)
/* harmony export */ });
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ 1577);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4383);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_avatar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/avatar.service */ 5083);








class DriverProfileGuard {
    constructor(auth, router, avatar) {
        this.auth = auth;
        this.router = router;
        this.avatar = avatar;
    }
    canActivate() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.from)(new Promise((resolve) => {
            (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)(this.auth, (user) => {
                resolve(user);
            });
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)((user) => {
            if (!user) {
                this.router.navigate(['login']);
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(false);
            }
            if (!user.displayName || !user.photoURL) {
                this.router.navigate(['details']);
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(false);
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(true);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(() => {
            this.router.navigate(['network']);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(false);
        }));
    }
}
DriverProfileGuard.ɵfac = function DriverProfileGuard_Factory(t) { return new (t || DriverProfileGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.Auth), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_services_avatar_service__WEBPACK_IMPORTED_MODULE_0__.AvatarService)); };
DriverProfileGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: DriverProfileGuard, factory: DriverProfileGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3096:
/*!**************************************!*\
  !*** ./src/app/otp/otp.component.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpComponent": () => (/* binding */ OtpComponent)
/* harmony export */ });
/* harmony import */ var C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _services_overlay_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/overlay.service */ 5596);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/language.service */ 1155);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-otp-input */ 9306);









const _c0 = ["otpInput"];

function OtpComponent_ng_container_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "ion-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "OTP.CONTINUE"), " ");
  }
}

function OtpComponent_ion_progress_bar_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ion-progress-bar", 21);
  }
}

const _c1 = function () {
  return {
    "width": "40px",
    "height": "40px",
    "font-size": "20px",
    "font-weight": "500",
    "background-color": "var(--ion-color-light)",
    "color": "var(--ion-color-dark)",
    "border": "none",
    "border-radius": "12px"
  };
};

const _c2 = function (a1) {
  return {
    length: 6,
    inputStyles: a1
  };
};

class OtpComponent {
  constructor(modalCtrl, auth, overlay, translate, languageService) {
    this.modalCtrl = modalCtrl;
    this.auth = auth;
    this.overlay = overlay;
    this.translate = translate;
    this.languageService = languageService;
    this.defaultOtp = '';
    this.phone = '';
    this.countryCode = '';
    this.otp = '';
    this.countdown = 60;
    this.approve2 = false;
    this.currentLanguage = 'en';
    this.textDir = 'ltr';
    this.currentLanguage = this.languageService.getLanguage() || 'en';
    this.setTextDirection();
  }

  ngOnInit() {
    this.startCountdown();

    if (this.defaultOtp) {
      setTimeout(() => {
        this.otpInput.setValue(this.defaultOtp);
        this.otp = this.defaultOtp;
      }, 0);
    } // Subscribe to language changes


    this.languageService.languageChange.subscribe(lang => {
      this.currentLanguage = lang;
      this.setTextDirection();
    });
  }

  ngOnDestroy() {
    this.stopCountdown();
  }

  setTextDirection() {
    this.textDir = this.currentLanguage === 'ar' ? 'rtl' : 'ltr';
    document.dir = this.textDir;
  }

  startCountdown() {
    this.countdown = 60;
    this.stopCountdown(); // Clear any existing interval

    this.countdownInterval = setInterval(() => {
      this.countdown--;

      if (this.countdown <= 0) {
        this.stopCountdown();
      }
    }, 1000);
  }

  stopCountdown() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }

  onOtpChange(otp) {
    this.otp = otp;
  }

  resend() {
    var _this = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.countdown <= 0) {
        try {
          _this.overlay.showLoader(yield _this.translate.get('RESENDING_OTP').toPromise()); // Call your resend OTP method here


          _this.overlay.hideLoader();

          _this.overlay.showToast(yield _this.translate.get('OTP_RESENT').toPromise());

          _this.startCountdown();
        } catch (error) {
          _this.overlay.hideLoader();

          _this.overlay.showAlert(yield _this.translate.get('ERROR').toPromise(), yield _this.translate.get('RESEND_FAILED').toPromise());
        }
      }
    })();
  }

  verifyOtp() {
    var _this2 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.otp.length === 6) {
        _this2.approve2 = true;

        try {
          _this2.overlay.showLoader('');

          const userCredential = yield _this2.confirmationResult.confirm(_this2.otp);

          if (userCredential.user) {
            _this2.overlay.hideLoader();

            _this2.modalCtrl.dismiss({
              success: true
            });
          }
        } catch (error) {
          _this2.overlay.hideLoader();

          console.error('OTP verification error:', error);

          _this2.overlay.showAlert(yield _this2.translate.get('ERROR').toPromise(), yield _this2.translate.get('INVALID_OTP').toPromise());
        } finally {
          _this2.approve2 = false;

          _this2.overlay.hideLoader();
        }
      } else {
        _this2.overlay.showAlert(yield _this2.translate.get('ERROR').toPromise(), yield _this2.translate.get('ENTER_VALID_OTP').toPromise());
      }
    })();
  }

  closeModal() {
    this.modalCtrl.dismiss({
      success: false
    });
  }

  changeLanguage(lang) {
    this.languageService.setLanguage(lang);
    this.translate.use(lang);
    this.currentLanguage = lang;
    this.setTextDirection();
  }

}

OtpComponent.ɵfac = function OtpComponent_Factory(t) {
  return new (t || OtpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_overlay_service__WEBPACK_IMPORTED_MODULE_2__.OverlayService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService));
};

OtpComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: OtpComponent,
  selectors: [["app-otp"]],
  viewQuery: function OtpComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.otpInput = _t.first);
    }
  },
  inputs: {
    defaultOtp: "defaultOtp",
    phone: "phone",
    countryCode: "countryCode",
    confirmationResult: "confirmationResult"
  },
  decls: 32,
  vars: 22,
  consts: [[1, "ion-no-border", 3, "translucent"], ["slot", "start"], ["color", "primary", 3, "click"], ["slot", "icon-only", "name", "close"], [1, "modern-header"], [1, "app-title"], [1, "app-tagline"], [1, "ion-no-border", "modern-content"], ["lines", "none", 1, "ion-padding"], ["lines", "none", 1, "ion-margin", "otp-container"], ["align", "center", 1, "ion-padding-top", "ion-padding-bottom"], [3, "config", "onInputChange"], ["otpInput", ""], ["lines", "none", 1, "ion-margin", "timer-container"], [1, "countdown"], [1, "button-container"], ["shape", "round", "fill", "outline", "size", "large", "expand", "block", "color", "primary", 1, "resend-button", 3, "disabled", "click"], ["shape", "round", "size", "large", "expand", "block", "color", "primary", 1, "submit-button", 3, "disabled", "click"], [4, "ngIf"], ["color", "light", "type", "indeterminate", 4, "ngIf"], ["color", "light", "slot", "end", "name", "arrow-forward"], ["color", "light", "type", "indeterminate"]],
  template: function OtpComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1)(3, "ion-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OtpComponent_Template_ion_button_click_3_listener() {
        return ctx.closeModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "ion-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ion-title", 4)(6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "ion-content", 7)(13, "ion-list", 8)(14, "ion-item", 9)(15, "ion-label")(16, "div", 10)(17, "ng-otp-input", 11, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onInputChange", function OtpComponent_Template_ng_otp_input_onInputChange_17_listener($event) {
        return ctx.onOtpChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "ion-item", 13)(20, "ion-label")(21, "div", 10)(22, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](24, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 15)(26, "ion-button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OtpComponent_Template_ion_button_click_26_listener() {
        return ctx.resend();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](28, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "ion-button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function OtpComponent_Template_ion_button_click_29_listener() {
        return ctx.verifyOtp();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, OtpComponent_ng_container_30_Template, 4, 3, "ng-container", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, OtpComponent_ion_progress_bar_31_Template, 1, 0, "ion-progress-bar", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 11, "OTP.VERIFY"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 13, "OTP.ENTER_CODE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](20, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](19, _c1)));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx.countdown, " ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](24, 15, "OTP.SECONDS_REMAINING"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.countdown > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](28, 17, "OTP.RESEND"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.otp || ctx.otp.length !== 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.approve2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.approve2);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, ng_otp_input__WEBPACK_IMPORTED_MODULE_8__.NgOtpInputComponent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonProgressBar, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonToolbar, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
  styles: ["ion-content[_ngcontent-%COMP%] {\n  --background: #ffffff;\n}\n\nion-list[_ngcontent-%COMP%] {\n  background: transparent;\n}\n\n.modern-header[_ngcontent-%COMP%]   .app-title[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 700;\n  margin-bottom: 0.25rem;\n}\n\n.modern-header[_ngcontent-%COMP%]   .app-tagline[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  opacity: 0.8;\n}\n\n.modern-content[_ngcontent-%COMP%]   .otp-container[_ngcontent-%COMP%] {\n  margin: 2rem 0;\n  --background: transparent;\n}\n\n.modern-content[_ngcontent-%COMP%]   .timer-container[_ngcontent-%COMP%] {\n  --background: transparent;\n  margin-bottom: 1rem;\n}\n\n  .otp-input {\n  width: 40px !important;\n  height: 40px !important;\n  font-size: 20px !important;\n  font-weight: 500 !important;\n  background-color: var(--ion-color-light) !important;\n  color: var(--ion-color-dark) !important;\n  border: none !important;\n  border-radius: 12px !important;\n  margin: 0 4px !important;\n  transition: all 0.3s ease;\n}\n\n  .otp-input:focus {\n  box-shadow: 0 4px 12px rgba(var(--ion-color-primary-rgb), 0.2);\n}\n\n.countdown[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--ion-color-medium);\n}\n\n.button-container[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n}\n\n.button-container[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  --border-radius: 12px;\n}\n\n.button-container[_ngcontent-%COMP%]   ion-button.submit-button[_ngcontent-%COMP%] {\n  --box-shadow: 0 4px 12px rgba(var(--ion-color-primary-rgb), 0.3);\n}\n\n.button-container[_ngcontent-%COMP%]   ion-button.submit-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\n.button-container[_ngcontent-%COMP%]   ion-button.resend-button[_ngcontent-%COMP%] {\n  --border-width: 2px;\n}\n\n[_nghost-%COMP%]   .rtl-support[dir=rtl][_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  transform: scaleX(-1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm90cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUU7RUFDRSx1QkFBQTtBQUNKOztBQUdJO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBQU47O0FBR0k7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQUROOztBQU1JO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0FBSE47O0FBTUk7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FBSk47O0FBU0k7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLG1EQUFBO0VBQ0EsdUNBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtBQU5OOztBQVFNO0VBQ0UsOERBQUE7QUFOUjs7QUFXRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0FBUko7O0FBV0U7RUFDRSxlQUFBO0FBUko7O0FBVUk7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0FBUk47O0FBVU07RUFDRSxnRUFBQTtBQVJSOztBQVVRO0VBQ0UsZ0JBQUE7QUFSVjs7QUFZTTtFQUNFLG1CQUFBO0FBVlI7O0FBbUJRO0VBQ0UscUJBQUE7QUFoQlYiLCJmaWxlIjoib3RwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIH1cclxuICBcclxuICBpb24tbGlzdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgXHJcbiAgLm1vZGVybi1oZWFkZXIge1xyXG4gICAgLmFwcC10aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYXBwLXRhZ2xpbmUge1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLm1vZGVybi1jb250ZW50IHtcclxuICAgIC5vdHAtY29udGFpbmVyIHtcclxuICAgICAgbWFyZ2luOiAycmVtIDA7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnRpbWVyLWNvbnRhaW5lciB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIDo6bmctZGVlcCB7XHJcbiAgICAub3RwLWlucHV0IHtcclxuICAgICAgd2lkdGg6IDQwcHggIWltcG9ydGFudDtcclxuICAgICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCkgIWltcG9ydGFudDtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKSAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW46IDAgNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcblxyXG4gICAgICAmOmZvY3VzIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuY291bnRkb3duIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b24tY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgIFxyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgXHJcbiAgICAgICYuc3VibWl0LWJ1dHRvbiB7XHJcbiAgICAgICAgLS1ib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4zKTtcclxuICAgICAgICBcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgJi5yZXNlbmQtYnV0dG9uIHtcclxuICAgICAgICAtLWJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIFJUTCBTdXBwb3J0XHJcbiAgOmhvc3Qge1xyXG4gICAgLnJ0bC1zdXBwb3J0IHtcclxuICAgICAgJltkaXI9XCJydGxcIl0ge1xyXG4gICAgICAgIGlvbi1idXR0b24gaW9uLWljb24ge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAiXX0= */"]
});

/***/ }),

/***/ 7556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ 1577);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ 6818);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);





class AuthService {
  constructor(auth) {
    this.auth = auth;
    this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.user$ = this.userSubject.asObservable();
  } // Initialize the auth listener


  initAuthListener() {
    (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)(this.auth, user => {
      this.userSubject.next(user);
    });
  } // Initialize RecaptchaVerifier


  recaptcha() {
    try {
      this.appVerifier = new _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.RecaptchaVerifier('sign-in-button', {
        size: 'invisible',
        callback: response => {
          console.log('reCAPTCHA solved:', response);
        },
        'expired-callback': () => {
          console.log('reCAPTCHA expired');
        }
      }, this.auth); // Only render on web platform

      if (typeof window !== 'undefined' && window.document && !window['Capacitor']) {
        this.appVerifier.render();
      }
    } catch (error) {
      console.error('Error initializing RecaptchaVerifier:', error);
    }
  }

  signInWithPhoneNumber(phoneNumber) {
    var _this = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('Attempting phone auth for:', phoneNumber);
        console.log('Platform check - Capacitor:', !!window['Capacitor']); // Always ensure we have a verifier

        if (!_this.appVerifier) {
          _this.recaptcha();
        }

        const confirmationResult = yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithPhoneNumber)(_this.auth, phoneNumber, _this.appVerifier);
        _this.confirmationResult = confirmationResult;
        return confirmationResult;
      } catch (e) {
        console.error('Phone auth error:', e);
        throw e;
      }
    })();
  }

  get currentUser() {
    return this.auth.currentUser;
  }

  signInWithGoogle() {
    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const provider = new _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.GoogleAuthProvider();
      const auth = (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();
      return (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithPopup)(auth, provider);
    })();
  }

  linkGoogleAccount(user) {
    var _this2 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const provider = new _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.GoogleAuthProvider();

      try {
        const result = yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithPopup)(_this2.auth, provider);
        const credential = _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.GoogleAuthProvider.credentialFromResult(result);

        if (credential) {
          yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.linkWithCredential)(user, credential);
        }
      } catch (error) {
        if (error.code === 'auth/credential-already-in-use') {
          console.error('Error during Google sign-in: ', error);

          if (error.customData && error.customData.email) {
            const existingSignInMethods = yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.fetchSignInMethodsForEmail)(_this2.auth, error.customData.email);

            if (existingSignInMethods.includes(_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.GoogleAuthProvider.PROVIDER_ID)) {
              yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.unlink)(_this2.auth.currentUser, _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.GoogleAuthProvider.PROVIDER_ID);
              const result = yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithPopup)(_this2.auth, provider);
              const credential = _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.GoogleAuthProvider.credentialFromResult(result);

              if (credential) {
                yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.linkWithCredential)(user, credential);
              }
            }
          } else {
            console.error('Missing email in error details: ', error);
          }
        } else {
          throw error;
        }
      }
    })();
  }

  verifyOtp(otp) {
    var _this3 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (!_this3.appVerifier) _this3.recaptcha();
        const result = yield _this3.confirmationResult.confirm(otp);
        console.log(result);
        const user = result?.user;
        console.log(user);
      } catch (e) {
        throw e?.message;
      }
    })();
  }

  logout() {
    return (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.signOut)(this.auth);
  }

}

AuthService.ɵfac = function AuthService_Factory(t) {
  return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__.Auth));
};

AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: AuthService,
  factory: AuthService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 5083:
/*!********************************************!*\
  !*** ./src/app/services/avatar.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AvatarService": () => (/* binding */ AvatarService)
/* harmony export */ });
/* harmony import */ var C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ 1577);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ 2111);
/* harmony import */ var geofire_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! geofire-common */ 3942);
/* harmony import */ var geofire_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(geofire_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2378);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ 2535);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ 7556);












class AvatarService {
  constructor(auth, firestore, storage, authService) {
    var _this = this;

    this.auth = auth;
    this.firestore = firestore;
    this.storage = storage;
    this.authService = authService; // Add connectivity check

    this.checkFirebaseConnectivity();
    this.authStateSubscription = (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.onAuthStateChanged)(this.auth, /*#__PURE__*/function () {
      var _ref = (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (user) {
        if (user) {
          _this.user = user;
          console.log('User authenticated, loading profile...');

          try {
            yield _this.loadUserProfile();
          } catch (error) {
            console.error('Error loading user profile:', error); // Retry after a delay

            setTimeout( /*#__PURE__*/(0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
              try {
                yield _this.loadUserProfile();
              } catch (retryError) {
                console.error('Retry failed for loading user profile:', retryError);
              }
            }), 3000);
          }
        } else {
          console.log("User not authenticated");
          _this.userName = "None";
        }
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  checkFirebaseConnectivity() {
    var _this2 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('Checking Firebase connectivity...');
        console.log('Firebase config:', {
          projectId: _this2.firestore.app.options.projectId,
          authDomain: _this2.firestore.app.options.authDomain,
          apiKey: _this2.firestore.app.options.apiKey?.substring(0, 10) + '...'
        }); // Try to read from a simple collection to test connectivity

        const testRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_this2.firestore, 'connectivity-test');
        const testQuery = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.query)(testRef, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.limit)(1));
        const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Connectivity test timeout')), 10000));
        yield Promise.race([(0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.getDocs)(testQuery), timeoutPromise]);
        console.log('Firebase connectivity: OK');
      } catch (error) {
        console.error('Firebase connectivity issue:', error);
        console.error('Error code:', error.code);
        console.error('Error message:', error.message); // Log additional diagnostic information

        console.log('Network state:', navigator.onLine ? 'Online' : 'Offline');
        console.log('User agent:', navigator.userAgent);
        console.log('Platform:', window['Capacitor'] ? 'Native' : 'Web');
      }
    })();
  } // Public method to test connectivity


  testConnectivity() {
    var _this3 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this3.checkFirebaseConnectivity();
        return true;
      } catch (error) {
        console.error('Connectivity test failed:', error);
        return false;
      }
    })();
  }

  loadUserProfile() {
    var _this4 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        console.log('Loading user profile for UID:', _this4.user.uid); // Add timeout to prevent hanging

        const profilePromise = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this4.firestore, 'Drivers', _this4.user.uid));
        const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Profile load timeout')), 15000));
        const profileDoc = yield Promise.race([profilePromise, timeoutPromise]);

        if (profileDoc.exists()) {
          _this4.profile = profileDoc.data();
          console.log('User profile loaded successfully');
        } else {
          console.log('No existing profile found, creating default profile'); // Create a default profile if none exists

          const defaultProfile = {
            Driver_id: _this4.user.uid,
            Driver_name: _this4.user.displayName || 'New Driver',
            Driver_email: _this4.user.email || '',
            Driver_phone: _this4.user.phoneNumber || '',
            Driver_imgUrl: 'assets/imgs/about.svg',
            Driver_rating: 0,
            Driver_num_rides: 0,
            onlineState: false,
            Earnings: 0,
            isApproved: false,
            submissionDate: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.serverTimestamp)()
          };

          try {
            // Set the default profile in Firestore with timeout
            const setDocPromise = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this4.firestore, 'Drivers', _this4.user.uid), defaultProfile);
            const setTimeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Profile creation timeout')), 15000));
            yield Promise.race([setDocPromise, setTimeoutPromise]);
            _this4.profile = defaultProfile;
            console.log('Default profile created successfully');
          } catch (setError) {
            console.error('Error creating default profile:', setError); // Use the default profile locally even if Firestore write fails

            _this4.profile = defaultProfile;
          }
        }
      } catch (error) {
        console.error('Error loading user profile:', error);
        console.error('Error code:', error.code);
        console.error('Error message:', error.message); // Create a minimal local profile as fallback

        _this4.profile = {
          Driver_id: _this4.user.uid,
          Driver_name: _this4.user.displayName || 'Driver',
          Driver_email: _this4.user.email || '',
          Driver_phone: _this4.user.phoneNumber || '',
          Driver_imgUrl: 'assets/imgs/about.svg',
          Driver_rating: 0,
          Driver_num_rides: 0,
          onlineState: false,
          Earnings: 0
        };
        throw error;
      }
    })();
  }

  getUserProfile(user) {
    const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(this.firestore, `Drivers/${user.uid}`);
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.docData)(userDocRef);
  }

  rejectRider() {
    var _this5 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this5.firestore, "Request", _this5.auth.currentUser.uid);
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.updateDoc)(userDocRef, {
          cancel: true,
          start: false
        });
        yield _this5.updateOnlineState(true);
        return true;
      } catch (e) {
        console.error('Error rejecting rider:', e);
        return false;
      }
    })();
  }

  pickRider() {
    var _this6 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this6.firestore, "Request", _this6.auth.currentUser.uid);
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.updateDoc)(userDocRef, {
          start: true
        });
        return true;
      } catch (e) {
        console.error('Error picking rider:', e);
        return false;
      }
    })();
  }

  endRide() {
    var _this7 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this7.firestore, "Request", _this7.auth.currentUser.uid);
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.updateDoc)(userDocRef, {
          stop: true,
          start: false
        });
        return true;
      } catch (e) {
        console.error('Error ending ride:', e);
        return false;
      }
    })();
  }

  saveCarInfo(uid, carInfo) {
    var _this8 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this8.firestore, `Drivers/${uid}/CarInfo`), carInfo);
      } catch (e) {
        console.error('Error saving car info:', e);
        throw new Error('Error saving car info');
      }
    })();
  }

  saveDriverInfo(uid, driverInfo) {
    var _this9 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this9.firestore, `Drivers/${uid}/DriverInfo`), driverInfo);
      } catch (e) {
        console.error('Error saving driver info:', e);
        throw new Error('Error saving driver info');
      }
    })();
  }

  createHistory(user) {
    var _this10 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const loc = { ...user,
          time: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.serverTimestamp)()
        };
        const historyId = (0,uuid__WEBPACK_IMPORTED_MODULE_5__["default"])(); // Generate a random ID
        // Make sure to include the requestId in the history document

        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this10.firestore, "Drivers", `${_this10.auth.currentUser.uid}/History/${historyId}`), { ...loc,
          requestId: user.requestId || loc.requestId // Include requestId

        });
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this10.firestore, `AllRides/${_this10.auth.currentUser.uid}/customer/${historyId}`), { ...loc
        });
      } catch (e) {
        console.error('Error creating history:', e);
        throw new Error('Error creating history');
      }
    })();
  }

  getOnlineState() {
    var _this11 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const user = _this11.auth.currentUser;

      if (user) {
        const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this11.firestore, 'Drivers', user.uid);
        const userDoc = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(userDocRef);

        if (userDoc.exists()) {
          const data = userDoc.data();
          console.log('Fetched data:', data); // Log the fetched data

          return data.onlineState;
        }
      }

      throw new Error('User not authenticated or document does not exist');
    })();
  }

  goOffline() {
    var _this12 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.deleteDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this12.firestore, "Drivers", _this12.auth.currentUser.uid));
      } catch (e) {
        console.error('Error going offline:', e);
        throw new Error('Error going offline');
      }
    })();
  }

  deleteDriverFromRequest(ID) {
    var _this13 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.deleteDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this13.firestore, "Request", ID));
      } catch (e) {
        console.error('Error deleting driver from request:', e);
        throw new Error('Error deleting driver from request');
      }
    })();
  }

  updateCountDown(time) {
    var _this14 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this14.firestore, "Request", _this14.auth.currentUser.uid);
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.updateDoc)(userDocRef, {
          countDown: time
        });
        return true;
      } catch (e) {
        console.error('Error updating countdown:', e);
        return false;
      }
    })();
  }

  getMessage() {
    const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(this.firestore, `Messages/${this.auth.currentUser.uid}/messages`);
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collectionData)(userDocRef);
  }

  getChatMessage(ID) {
    const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(this.firestore, `Request/${ID}/messages`);
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collectionData)(userDocRef);
  }

  addChatEnRouteMessage(msg, iD) {
    var _this15 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.addDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_this15.firestore, `Request/${iD}/messages`), {
        msg: msg,
        from: _this15.auth.currentUser.uid,
        createdAt: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.serverTimestamp)(),
        myMsg: true,
        fromName: _this15.profile.Rider_name
      });
    })();
  }

  updatChatMessageInfo(id) {
    var _this16 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this16.firestore, `Request/${id}/`), {
        name: _this16.profile.Rider_name,
        id: _this16.profile.Rider_id,
        phone: _this16.profile.Rider_phone,
        email: _this16.profile.Rider_email,
        new: true
      });
    })();
  }

  pushDriverToRequest(coord, name, email, phone, car, cartype, plate, imageUrl, document, ID) {
    var _this17 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const loc = {
          geohash: (0,geofire_common__WEBPACK_IMPORTED_MODULE_1__.geohashForLocation)([coord.coords.latitude, coord.coords.longitude]),
          Driver_lat: coord.coords.latitude,
          Driver_lng: coord.coords.longitude,
          Driver_id: _this17.auth.currentUser.uid,
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
          license: undefined,
          mileage: undefined,
          isApproved: false,
          submissionDate: undefined
        };
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.updateDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this17.firestore, "Request", ID), { ...loc
        });
      } catch (e) {
        console.error('Error pushing driver to request:', e);
        throw new Error('Error pushing driver to request');
      }
    })();
  }

  createNewDriver(coord, name, email, phone, car, cartype, plate, imageUrl, document, license, mileage) {
    var _this18 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const loc = {
          geohash: (0,geofire_common__WEBPACK_IMPORTED_MODULE_1__.geohashForLocation)([coord.coords.latitude, coord.coords.longitude]),
          Driver_lat: coord.coords.latitude,
          Driver_lng: coord.coords.longitude,
          Driver_id: _this18.auth.currentUser.uid,
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
          license: license || null,
          mileage: mileage || null,
          isApproved: false,
          submissionDate: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.serverTimestamp)()
        };
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this18.firestore, "Drivers", _this18.auth.currentUser.uid), { ...loc
        });
      } catch (e) {
        console.error('Error creating new driver:', e);
        throw new Error('Error creating new driver');
      }
    })();
  }

  getDriver() {
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collectionData)(this.driverCollection, {
      idField: 'id'
    });
  }

  getUserType(uid) {
    var _this19 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this19.firestore, `Riders/${uid}`);
      const userDoc = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(userDocRef);

      if (userDoc.exists()) {
        return 'rider';
      }

      return null;
    })();
  }

  updateDriver(driver) {
    const driverDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(this.firestore, `Drivers/${driver.Driver_id}`);
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.updateDoc)(driverDocRef, { ...driver
    });
  }

  uploadImage(cameraFile, uid) {
    var _this20 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const storageRef = (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__.ref)(_this20.storage, _this20.pathM);

      try {
        yield (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__.uploadString)(storageRef, cameraFile.base64String, 'base64');
        const imageUrl = yield (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__.getDownloadURL)(storageRef);
        const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this20.firestore, `Drivers/${uid}`);
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)(userDocRef, {
          imageUrl
        });
        return true;
      } catch (e) {
        console.log(e);
        return null;
      }
    })();
  } //  async uploadImage(cameraFile: Photo, uid: string): Promise<string> {
  //     try {
  //       console.log('Starting image upload for uid:', uid);
  //       if (!cameraFile.base64String) {
  //         console.error('No base64 string in camera file');
  //         throw new Error('No image data provided');
  //       }
  //       console.log('Base64 string length:', cameraFile.base64String.length);
  //       const timestamp = Date.now();
  //       const fileName = `avatars/${uid}_${timestamp}.jpg`;
  //       console.log('Uploading to:', fileName);
  //       const storageRef = ref(this.storage, fileName);
  //       // ---------- BLOB CONVERSION (unchanged) ----------
  //       const byteCharacters = atob(cameraFile.base64String);
  //       const byteNumbers = new Array(byteCharacters.length);
  //       for (let i = 0; i < byteCharacters.length; i++) {
  //         byteNumbers[i] = byteCharacters.charCodeAt(i);
  //       }
  //       const byteArray = new Uint8Array(byteNumbers);
  //       const blob = new Blob([byteArray], { type: 'image/jpeg' });
  //       console.log('Blob created, size:', blob.size);
  //       // ---------- UPLOAD (modular SDK) ----------
  //       console.log('Starting upload...');
  //       const uploadResult = await uploadBytes(storageRef, blob, {
  //         contentType: 'image/jpeg',
  //         customMetadata: {
  //           uploadedBy: uid,
  //           uploadedAt: timestamp.toString(),
  //         },
  //       });
  //       console.log('Upload complete, uploadResult:', uploadResult);
  //       // ---------- GET DOWNLOAD URL (with retry) ----------
  //       let imageUrl = '';
  //       let retries = 3;
  //       while (retries > 0) {
  //         try {
  //           imageUrl = await getDownloadURL(uploadResult.ref);
  //           if (imageUrl) break;
  //         } catch (urlError) {
  //           console.error(`DownloadURL attempt ${4 - retries} failed:`, urlError);
  //           retries--;
  //           if (retries === 0) throw new Error('Failed to get download URL');
  //           await new Promise(r => setTimeout(r, 1000));
  //         }
  //       }
  //       // ---------- FIRESTORE UPDATE (unchanged) ----------
  //       const userDocRef = doc(this.firestore, `Drivers/${uid}`);
  //       const snap = await getDoc(userDocRef);
  //       if (snap.exists()) {
  //         await updateDoc(userDocRef, { Driver_imgUrl: imageUrl });
  //         console.log('Updated existing driver document');
  //       } else {
  //         await setDoc(userDocRef, { Driver_imgUrl: imageUrl }, { merge: true });
  //         console.log('Created new driver document');
  //       }
  //       console.log('Image upload complete! Final URL:', imageUrl);
  //       return imageUrl;
  //     } catch (e: any) {
  //       console.error('Error uploading image:', e);
  //       console.error('Code:', e.code);
  //       console.error('Message:', e.message);
  //       throw e;          // keep throwing – caller shows the alert
  //     }
  //   }


  getCards() {
    const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(this.firestore, `Drivers/${this.auth.currentUser.uid}/Cards`);
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collectionData)(userDocRef);
  }

  getEarnings() {
    const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(this.firestore, `Drivers/${this.auth.currentUser.uid}`);
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.docData)(userDocRef);
  }

  getCartypes() {
    console.log('Fetching cartypes from Firestore...');
    const cartypesRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(this.firestore, `Cartypes`);
    return new rxjs__WEBPACK_IMPORTED_MODULE_7__.Observable(observer => {
      // Set a timeout for the Firestore request
      const timeoutId = setTimeout(() => {
        console.log('Cartypes fetch timed out, using mock data');
        const mockCartypes = [{
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
        observer.next(mockCartypes);
        observer.complete();
      }, 10000); // 10 second timeout

      (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collectionData)(cartypesRef).subscribe({
        next: data => {
          clearTimeout(timeoutId);
          console.log('Cartypes received from Firestore:', data); // If no data is returned from Firestore, use mock data

          if (!data || data.length === 0) {
            console.log('No cartypes found in Firestore, using mock data');
            const mockCartypes = [{
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
            observer.next(mockCartypes);
          } else {
            observer.next(data);
          }
        },
        error: error => {
          clearTimeout(timeoutId);
          console.error('Error fetching cartypes from Firestore:', error);
          console.error('Error code:', error.code);
          console.error('Error message:', error.message); // Provide mock data on error

          const mockCartypes = [{
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
          observer.next(mockCartypes);
        },
        complete: () => {
          clearTimeout(timeoutId);
          observer.complete();
        }
      });
    });
  } // getCartypes(): Observable<DocumentData[]> {
  //   try {
  //     console.log('Fetching cartypes from Firestore...');
  //     const cartypesRef = collection(this.firestore, `Cartypes`);
  //     const cartypesObservable = collectionData(cartypesRef);
  //     // Add error handling to the observable
  //     return new Observable(observer => {
  //       cartypesObservable.subscribe({
  //         next: (data) => {
  //           console.log('Cartypes fetched successfully:', data);
  //           observer.next(data);
  //         },
  //         error: (error) => {
  //           console.error('Error fetching cartypes:', error);
  //           console.error('Error code:', error.code);
  //           console.error('Error message:', error.message);
  //           observer.error(error);
  //         },
  //         complete: () => {
  //           console.log('Cartypes fetch completed');
  //           observer.complete();
  //         }
  //       });
  //     });
  //   } catch (error) {
  //     console.error('Error in getCartypes method:', error);
  //     throw error;
  //   }
  // }


  getRequests() {
    const requestsRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(this.firestore, `Request/${this.auth.currentUser.uid}`);
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.docData)(requestsRef);
  }

  getDrivers() {
    const driversRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(this.firestore, `Drivers`);
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collectionData)(driversRef);
  }

  addChatMessage(msg) {
    var _this21 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.addDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_this21.firestore, `Messages/${_this21.profile.Driver_id}/messages`), {
          msg,
          from: _this21.auth.currentUser.uid,
          createdAt: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.serverTimestamp)(),
          myMsg: true,
          fromName: _this21.profile.Driver_name
        });
      } catch (e) {
        console.error('Error adding chat message:', e);
        throw new Error('Error adding chat message');
      }
    })();
  }

  createCard(name, number, type, id) {
    var _this22 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const card = {
          name,
          number,
          type,
          id,
          selected: true
        };
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this22.firestore, `Drivers/${_this22.auth.currentUser.uid}/Cards/${name}`), { ...card
        });
        return true;
      } catch (e) {
        console.error('Error creating card:', e);
        return false;
      }
    })();
  }

  updateCard(name, number, type, id, state) {
    var _this23 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const card = {
          name,
          number,
          type,
          id,
          selected: state
        };
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.updateDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this23.firestore, `Drivers/${_this23.profile.Rider_id}/Cards/${name}`), { ...card
        });
        return true;
      } catch (e) {
        console.error('Error updating card:', e);
        return false;
      }
    })();
  }

  updateOnlineState(state) {
    var _this24 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const user = _this24.auth.currentUser;

      if (user) {
        const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this24.firestore, 'Drivers', user.uid);
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)(userDocRef, {
          onlineState: state
        }, {
          merge: true
        });
      }
    })();
  }

  getRiderLocation(riderId) {
    return new Promise((resolve, reject) => {
      const riderDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(this.firestore, 'Riders', riderId);
      (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.onSnapshot)(riderDocRef, doc => {
        const data = doc.data();

        if (data && data.Loc_lat) {
          const riderlocation = {
            lat: data.Loc_lat,
            lng: data.Loc_lng
          };
          resolve(riderlocation);
        } else {
          resolve(null);
        }
      }, error => {
        reject(error);
      });
    });
  }

  updateDriverLocation(coord) {
    var _this25 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this25.firestore, `Drivers/${_this25.auth.currentUser.uid}`);
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.updateDoc)(userDocRef, {
          geohash: (0,geofire_common__WEBPACK_IMPORTED_MODULE_1__.geohashForLocation)([coord.lat, coord.lng]),
          Driver_lat: coord.lat,
          Driver_lng: coord.lng
        });
        return true;
      } catch (e) {
        console.error('Error updating driver location:', e);
        return false;
      }
    })();
  }

  updateEarnings(value) {
    var _this26 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this26.firestore, `Drivers/${_this26.auth.currentUser.uid}`);
        yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.updateDoc)(userDocRef, {
          Earnings: value
        });
        return true;
      } catch (e) {
        console.error('Error updating earnings:', e);
        return false;
      }
    })();
  }

  ngOnDestroy() {
    if (this.authStateSubscription) {
      this.authStateSubscription();
    }
  }

  initializeWallet(driverId) {
    var _this27 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const walletRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this27.firestore, `Drivers/${driverId}/wallet/main`);
      const defaultWallet = {
        balance: 0,
        currency: 'USD',
        lastUpdated: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.serverTimestamp)(),
        isVerified: false
      };
      yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.setDoc)(walletRef, defaultWallet);
    })();
  }

  getWalletBalance() {
    const walletRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(this.firestore, `Drivers/${this.auth.currentUser.uid}/wallet/main`);
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.docData)(walletRef);
  }

  getWalletTransactions(limitCount = 10) {
    const transactionsRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(this.firestore, `Drivers/${this.auth.currentUser.uid}/wallet/main/transactions`);
    return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collectionData)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.query)(transactionsRef, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.orderBy)('timestamp', 'desc'), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.limit)(limitCount)));
  }

  addTransaction(transaction) {
    var _this28 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const batch = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.writeBatch)(_this28.firestore);
      const driverId = _this28.auth.currentUser.uid; // Get current wallet

      const walletRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_this28.firestore, `Drivers/${driverId}/wallet/main`);
      const walletSnap = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)(walletRef);
      const currentWallet = walletSnap.data(); // Calculate new balance

      const amount = transaction.type === 'credit' ? transaction.amount : -transaction.amount;
      const newBalance = (currentWallet.balance || 0) + amount; // Update wallet

      batch.update(walletRef, {
        balance: newBalance,
        lastUpdated: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.serverTimestamp)()
      }); // Add transaction

      const transactionRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_this28.firestore, `Drivers/${driverId}/wallet/main/transactions`));
      const newTransaction = {
        id: transactionRef.id,
        amount: transaction.amount,
        type: transaction.type,
        description: transaction.description,
        timestamp: (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.serverTimestamp)(),
        status: 'completed',
        reference: transaction.reference,
        balance: newBalance
      };
      batch.set(transactionRef, newTransaction);
      yield batch.commit();
    })();
  }

  updateTripRating(requestId, rating, comment) {
    var _this29 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const user = _this29.auth.currentUser;
        if (!user) throw new Error('No user logged in'); // Update in TripHistory collection

        const tripHistoryRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_this29.firestore, `Drivers/${user.uid}/TripHistory`);
        const tripHistoryQuery = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.query)(tripHistoryRef, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.where)('requestId', '==', requestId));
        const tripHistorySnapshot = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.getDocs)(tripHistoryQuery);

        if (!tripHistorySnapshot.empty) {
          const tripDoc = tripHistorySnapshot.docs[0];
          yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.updateDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(tripHistoryRef, tripDoc.id), {
            driverRating: rating,
            driverComment: comment
          });
        } // Update in History collection that's used by the history page


        const historyRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_this29.firestore, `Drivers/${user.uid}/History`);
        const historyQuery = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.query)(historyRef, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.where)('requestId', '==', requestId));
        const historySnapshot = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.getDocs)(historyQuery);

        if (!historySnapshot.empty) {
          const historyDoc = historySnapshot.docs[0];
          yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.updateDoc)((0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(historyRef, historyDoc.id), {
            driverRating: rating,
            driverComment: comment
          });
        } else {
          console.warn('Could not find history document with requestId:', requestId);
        }

        return true;
      } catch (error) {
        console.error('Error updating trip rating:', error);
        throw error;
      }
    })();
  }

}

AvatarService.ɵfac = function AvatarService_Factory(t) {
  return new (t || AvatarService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__.Auth), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__.Firestore), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__.Storage), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService));
};

AvatarService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
  token: AvatarService,
  factory: AvatarService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1155:
/*!**********************************************!*\
  !*** ./src/app/services/language.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageService": () => (/* binding */ LanguageService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 8699);



class LanguageService {
    constructor(translate) {
        this.translate = translate;
        this.languageChange = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.currentLang = 'en';
        // Initialize with stored language or default
        const storedLang = localStorage.getItem('language') || 'en';
        this.setLanguage(storedLang);
    }
    setLanguage(lang) {
        this.currentLang = lang;
        this.translate.use(lang);
        localStorage.setItem('language', lang);
        this.languageChange.next(lang);
        document.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }
    getLanguage() {
        return this.currentLang;
    }
}
LanguageService.ɵfac = function LanguageService_Factory(t) { return new (t || LanguageService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService)); };
LanguageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LanguageService, factory: LanguageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5596:
/*!*********************************************!*\
  !*** ./src/app/services/overlay.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OverlayService": () => (/* binding */ OverlayService)
/* harmony export */ });
/* harmony import */ var C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);



class OverlayService {
  constructor(loadingCtrl, toast, alertController) {
    this.loadingCtrl = loadingCtrl;
    this.toast = toast;
    this.alertController = alertController;
  }

  showLoader(msg) {
    if (!this.isLoading) this.isLoading = true;
    return this.loadingCtrl.create({
      message: msg,
      spinner: 'lines-sharp',
      cssClass: 'default-alert'
    }).then(res => {
      res.present().then(() => {
        if (!this.isLoading) {
          res.dismiss().then(() => {
            console.log('abort presenting');
          });
        }
      });
    }).catch(e => {
      this.isLoading = false;
      console.log(e);
    });
  }

  hideLoader() {
    if (this.isLoading) this.isLoading = false;
    return this.loadingCtrl.dismiss().then(() => console.log('dismissed')).catch(e => console.log(e));
  }

  showToast(message) {
    var _this = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.toast.create({
        message: message,
        position: 'top',
        duration: 500,
        cssClass: 'default-alert'
      });
      yield alert.present();
    })();
  }

  showAlert(header, message) {
    var _this2 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertController.create({
        header,
        message,
        cssClass: 'default-alert',
        buttons: ['OK']
      });
      _this2.currentAlert = alert;
      yield _this2.currentAlert.present();
    })();
  }

  hideAlert() {
    if (this.currentAlert) {
      this.currentAlert.dismiss();
      this.currentAlert = null;
    }
  }

  showPrompt(header, message) {
    var _this3 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertController.create({
        header,
        message,
        inputs: [{
          name: 'amount',
          type: 'number',
          placeholder: '0.00'
        }],
        buttons: [{
          text: 'Cancel',
          role: 'cancel'
        }, {
          text: 'OK',
          handler: data => data.amount
        }]
      });
      yield alert.present();
      const result = yield alert.onDidDismiss();
      return result.role !== 'cancel' ? result.data.values.amount : null;
    })();
  }

}

OverlayService.ɵfac = function OverlayService_Factory(t) {
  return new (t || OverlayService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.LoadingController), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ToastController), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.AlertController));
};

OverlayService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: OverlayService,
  factory: OverlayService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4948:
/*!********************************************************!*\
  !*** ./src/app/trip-summary/trip-summary.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TripSummaryComponent": () => (/* binding */ TripSummaryComponent)
/* harmony export */ });
/* harmony import */ var C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_avatar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/avatar.service */ 5083);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);









function TripSummaryComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r0.mapImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}

function TripSummaryComponent_ion_item_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ion-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-label")(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Distance");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.formattedDistance);
  }
}

function TripSummaryComponent_ion_item_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ion-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-label")(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.formattedDuration);
  }
}

function TripSummaryComponent_ion_item_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ion-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-label")(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Fare");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.formattedPrice);
  }
}

function TripSummaryComponent_ion_item_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ion-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-label")(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Pickup");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.tripData.Rider_Location);
  }
}

function TripSummaryComponent_ion_item_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ion-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-label")(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Destination");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.tripData.Destination);
  }
}

function TripSummaryComponent_ion_icon_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TripSummaryComponent_ion_icon_30_Template_ion_icon_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const num_r7 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.setRating(num_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const num_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", ctx_r6.rating >= num_r7 ? "star" : "star-outline");
  }
}

const _c0 = function () {
  return [1, 2, 3, 4, 5];
};

class TripSummaryComponent {
  constructor(modalCtrl, firestore, avatarService, toastController) {
    this.modalCtrl = modalCtrl;
    this.firestore = firestore;
    this.avatarService = avatarService;
    this.toastController = toastController;
    this.rating = 0;
    this.comment = '';
    this.tripDate = new Date();
    this.mapImageUrl = ''; // Add properties to store formatted distance and duration

    this.formattedDistance = '';
    this.formattedDuration = '';
    this.formattedPrice = '';
  }

  ngOnInit() {
    console.log('Trip Summary - Request ID:', this.requestId);
    console.log('Trip Summary - Trip Data:', this.tripData); // Generate a static map image URL based on trip coordinates

    if (this.tripData && this.tripData.Loc_lat && this.tripData.Loc_lng && this.tripData.Des_lat && this.tripData.Des_lng) {
      this.generateMapImageUrl(); // Format the trip details

      this.formatTripDetails();
    }
  }

  formatTripDetails() {
    // Format distance
    if (this.tripData.distance) {
      this.formattedDistance = typeof this.tripData.distance === 'string' ? this.tripData.distance : `${(this.tripData.distance / 1000).toFixed(2)} km`;
    } // Format duration


    if (this.tripData.duration) {
      this.formattedDuration = typeof this.tripData.duration === 'string' ? this.tripData.duration : `${Math.floor(this.tripData.duration / 60)} mins`;
    } // Format price


    if (this.tripData.price) {
      this.formattedPrice = `$${this.tripData.price.toFixed(2)}`;
    }
  }

  generateMapImageUrl() {
    // Create a Google Static Maps URL with the route
    const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY'; // Replace with your actual API key

    const origin = `${this.tripData.Loc_lat},${this.tripData.Loc_lng}`;
    const destination = `${this.tripData.Des_lat},${this.tripData.Des_lng}`;
    this.mapImageUrl = `https://maps.googleapis.com/maps/api/staticmap?size=600x300&markers=color:green|label:A|${origin}&markers=color:red|label:B|${destination}&path=color:0x0000ff|weight:5|${origin}|${destination}&key=${apiKey}`;
  }

  setRating(value) {
    this.rating = value;
  }

  submitRating() {
    var _this = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (!_this.rating) {
          const toast = yield _this.toastController.create({
            message: 'Please select a rating before submitting',
            duration: 2000,
            color: 'warning'
          });
          yield toast.present();
          return;
        } // Check if requestId exists, with better logging


        if (!_this.requestId) {
          console.error('Missing requestId in trip summary. Available data:', {
            tripData: _this.tripData,
            requestIdProperty: _this.requestId
          }); // Try to get requestId from tripData as fallback

          if (_this.tripData && _this.tripData.requestId) {
            _this.requestId = _this.tripData.requestId;
            console.log('Found requestId in tripData:', _this.requestId);
          }
        } // Update the request document with the rating


        if (_this.requestId) {
          const requestRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_this.firestore, 'Request', _this.requestId);
          yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)(requestRef, {
            driverRating: _this.rating,
            driverComment: _this.comment || '',
            ratedByDriver: true
          }); // Also add to trip history if needed

          yield _this.avatarService.updateTripRating(_this.requestId, _this.rating, _this.comment);
          const toast = yield _this.toastController.create({
            message: 'Rating submitted successfully',
            duration: 2000,
            color: 'success'
          });
          yield toast.present();

          _this.dismiss();
        } else {
          // If requestId is missing, show error toast
          const toast = yield _this.toastController.create({
            message: 'Error: Trip ID is missing',
            duration: 2000,
            color: 'danger'
          });
          yield toast.present();
        }
      } catch (error) {
        console.error('Error submitting rating:', error);
        const toast = yield _this.toastController.create({
          message: 'Failed to submit rating. Please try again.',
          duration: 2000,
          color: 'danger'
        });
        yield toast.present();
      }
    })();
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true,
      'rated': this.rating > 0
    });
  }

}

TripSummaryComponent.ɵfac = function TripSummaryComponent_Factory(t) {
  return new (t || TripSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__.Firestore), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_avatar_service__WEBPACK_IMPORTED_MODULE_1__.AvatarService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController));
};

TripSummaryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: TripSummaryComponent,
  selectors: [["app-trip-summary"]],
  inputs: {
    tripData: "tripData",
    requestId: "requestId"
  },
  decls: 37,
  vars: 13,
  consts: [["slot", "end"], [3, "click"], ["name", "close-outline"], [1, "ion-padding"], ["class", "trip-map", 4, "ngIf"], [1, "trip-details-card"], [1, "trip-info"], ["lines", "none"], ["name", "calendar-outline", "slot", "start"], ["lines", "none", 4, "ngIf"], [1, "rating-section"], [1, "star-rating"], [3, "name", "click", 4, "ngFor", "ngForOf"], ["position", "floating"], ["rows", "4", 3, "ngModel", "ngModelChange"], ["expand", "block", 1, "submit-button", 3, "click"], [1, "trip-map"], ["alt", "Trip route map", 3, "src"], ["name", "navigate-outline", "slot", "start"], ["name", "time-outline", "slot", "start"], ["name", "cash-outline", "slot", "start"], ["name", "location-outline", "slot", "start"], ["name", "flag-outline", "slot", "start"], [3, "name", "click"]],
  template: function TripSummaryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header")(1, "ion-toolbar")(2, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Trip Summary");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-buttons", 0)(5, "ion-button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TripSummaryComponent_Template_ion_button_click_5_listener() {
        return ctx.dismiss();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "ion-icon", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-content", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, TripSummaryComponent_div_8_Template, 2, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5)(10, "ion-card")(11, "ion-card-content")(12, "div", 6)(13, "ion-item", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "ion-icon", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ion-label")(16, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Date");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, TripSummaryComponent_ion_item_21_Template, 7, 1, "ion-item", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, TripSummaryComponent_ion_item_22_Template, 7, 1, "ion-item", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, TripSummaryComponent_ion_item_23_Template, 7, 1, "ion-item", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, TripSummaryComponent_ion_item_24_Template, 7, 1, "ion-item", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, TripSummaryComponent_ion_item_25_Template, 7, 1, "ion-item", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 10)(27, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Rate your experience");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, TripSummaryComponent_ion_icon_30_Template, 1, 1, "ion-icon", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "ion-item")(32, "ion-label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Comments (optional)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "ion-textarea", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TripSummaryComponent_Template_ion_textarea_ngModelChange_34_listener($event) {
        return ctx.comment = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "ion-button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TripSummaryComponent_Template_ion_button_click_35_listener() {
        return ctx.submitRating();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, " Submit Rating ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.mapImageUrl);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](20, 9, ctx.tripDate, "MMM dd, yyyy"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.formattedDistance);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.formattedDuration);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.formattedPrice);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.tripData == null ? null : ctx.tripData.Rider_Location);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.tripData == null ? null : ctx.tripData.Destination);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](12, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.comment);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTextarea, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.TextValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
  styles: [".summary-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  max-width: 600px;\n  margin: 0 auto;\n}\n\n.header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n}\n\n.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 600;\n  margin-bottom: 5px;\n  color: var(--ion-color-primary);\n}\n\n.header[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium);\n  font-size: 14px;\n  margin: 0;\n}\n\n.trip-details[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n\n.detail-card[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: var(--ion-color-light);\n  border-radius: 12px;\n  padding: 15px 10px;\n  margin: 0 5px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n\n.detail-card[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: var(--ion-color-primary);\n  margin-bottom: 8px;\n}\n\n.detail-card[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.detail-card[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--ion-color-medium);\n  margin: 0;\n}\n\n.detail-card[_ngcontent-%COMP%]   .detail-info[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin: 5px 0 0;\n}\n\n.map-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n  margin-bottom: 20px;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n\n.map-container[_ngcontent-%COMP%]   .trip-map[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.trip-map[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n  border-radius: 12px;\n  overflow: hidden;\n  margin-bottom: 16px;\n}\n\n.trip-map[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.trip-details-card[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.trip-details-card[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n\n.trip-details-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 0;\n}\n\n.trip-details-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin-right: 12px;\n  color: var(--ion-color-primary);\n  font-size: 24px;\n}\n\n.trip-details-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 16px;\n  color: var(--ion-color-dark);\n}\n\n.trip-details-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--ion-color-medium);\n}\n\n.rating-section[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.rating-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\n\n.rating-section[_ngcontent-%COMP%]   .star-rating[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n\n.rating-section[_ngcontent-%COMP%]   .star-rating[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: #ffc409;\n  margin: 0 5px;\n  cursor: pointer;\n}\n\n.rating-section[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  --border-radius: 10px;\n  --background: var(--ion-color-primary);\n  height: 48px;\n  font-weight: 600;\n}\n\n.buttons-container[_ngcontent-%COMP%] {\n  margin-top: auto;\n  padding-bottom: 20px;\n}\n\n.buttons-container[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  --border-radius: 10px;\n  height: 48px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyaXAtc3VtbWFyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFDRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7QUFDSjs7QUFFRTtFQUNFLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUFBSjs7QUFJQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3Q0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esd0NBQUE7QUFERjs7QUFHRTtFQUNFLGVBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUU7RUFDRSxrQkFBQTtBQUZKOztBQUlJO0VBQ0UsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtBQUZOOztBQUtJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUhOOztBQVFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3Q0FBQTtBQUxGOztBQU9FO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUxKOztBQVNBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFORjs7QUFRRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFOSjs7QUFVQTtFQUNFLG1CQUFBO0FBUEY7O0FBU0U7RUFDRSxtQkFBQTtFQUNBLHlDQUFBO0FBUEo7O0FBVUU7RUFDRSxrQkFBQTtBQVJKOztBQVVJO0VBQ0Usa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7QUFSTjs7QUFXSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0FBVE47O0FBWUk7RUFDRSxlQUFBO0VBQ0EsOEJBQUE7QUFWTjs7QUFlQTtFQUNFLGdCQUFBO0FBWkY7O0FBY0U7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFaSjs7QUFlRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBYko7O0FBZUk7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBYk47O0FBaUJFO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBZko7O0FBbUJBO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtBQWhCRjs7QUFrQkU7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQWhCSiIsImZpbGUiOiJ0cmlwLXN1bW1hcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VtbWFyeS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIH1cclxuXHJcbiAgLmRhdGUge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLnRyaXAtZGV0YWlscyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmRldGFpbC1jYXJkIHtcclxuICBmbGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBwYWRkaW5nOiAxNXB4IDEwcHg7XHJcbiAgbWFyZ2luOiAwIDVweDtcclxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG5cclxuICBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIH1cclxuXHJcbiAgLmRldGFpbC1pbmZvIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG4gICAgLmxhYmVsIHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnZhbHVlIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBtYXJnaW46IDVweCAwIDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubWFwLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG5cclxuICAudHJpcC1tYXAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcbn1cclxuXHJcbi50cmlwLW1hcCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICBcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcbn1cclxuXHJcbi50cmlwLWRldGFpbHMtY2FyZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBcclxuICBpb24tY2FyZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1pdGVtIHtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgIFxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaDIge1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5yYXRpbmctc2VjdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBcclxuICBoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICB9XHJcbiAgXHJcbiAgLnN0YXItcmF0aW5nIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICBjb2xvcjogI2ZmYzQwOTtcclxuICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuc3VibWl0LWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxufVxyXG5cclxuLmJ1dHRvbnMtY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG5cclxuICBpb24tYnV0dG9uIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyA5ShOlRI8493ovNQ4e--utZawgmjc3x0g',
        authDomain: 'pegasus-2be94.firebaseapp.com',
        projectId: 'pegasus-2be94',
        storageBucket: 'pegasus-2be94.firebasestorage.app',
        messagingSenderId: '459110381543',
        appId: '1:459110381543:android:ba2071e2cea27c5cdfaf42'
    },
    apiKey: 'AIzaSyCTYjoPhLcshZVuEdr-amopUuVMy8lyEmA',
    onesignal: {
        appId: 'ba7d77ed-1525-416c-9ac5-7b5d36e68740',
        restApiKey: 'YTM3ODgyMzQtNjg1ZC00YTQwLWJmNjItNTA4M2VkMmY3MDdl',
        android_channel_id: ''
    },
    serverUrl: "https://payment-server-wheat.vercel.app/",
    CountryJson: [
        {
            "name": "Afghanistan",
            "dialCode": "+93",
            "isoCode": "AF",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/af.svg"
        },
        {
            "name": "Aland Islands",
            "dialCode": "+358",
            "isoCode": "AX",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ax.svg"
        },
        {
            "name": "Albania",
            "dialCode": "+355",
            "isoCode": "AL",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/al.svg"
        },
        {
            "name": "Algeria",
            "dialCode": "+213",
            "isoCode": "DZ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/dz.svg"
        },
        {
            "name": "American Samoa",
            "dialCode": "+1684",
            "isoCode": "AS",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/as.svg"
        },
        {
            "name": "Andorra",
            "dialCode": "+376",
            "isoCode": "AD",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ad.svg"
        },
        {
            "name": "Angola",
            "dialCode": "+244",
            "isoCode": "AO",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ao.svg"
        },
        {
            "name": "Anguilla",
            "dialCode": "+1264",
            "isoCode": "AI",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ai.svg"
        },
        {
            "name": "Antarctica",
            "dialCode": "+672",
            "isoCode": "AQ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/aq.svg"
        },
        {
            "name": "Antigua and Barbuda",
            "dialCode": "+1268",
            "isoCode": "AG",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ag.svg"
        },
        {
            "name": "Argentina",
            "dialCode": "+54",
            "isoCode": "AR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ar.svg"
        },
        {
            "name": "Armenia",
            "dialCode": "+374",
            "isoCode": "AM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/am.svg"
        },
        {
            "name": "Aruba",
            "dialCode": "+297",
            "isoCode": "AW",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/aw.svg"
        },
        {
            "name": "Ascension Island",
            "dialCode": "+247",
            "isoCode": "AC",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ac.svg"
        },
        {
            "name": "Australia",
            "dialCode": "+61",
            "isoCode": "AU",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/au.svg"
        },
        {
            "name": "Austria",
            "dialCode": "+43",
            "isoCode": "AT",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/at.svg"
        },
        {
            "name": "Azerbaijan",
            "dialCode": "+994",
            "isoCode": "AZ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/az.svg"
        },
        {
            "name": "Bahamas",
            "dialCode": "+1242",
            "isoCode": "BS",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bs.svg"
        },
        {
            "name": "Bahrain",
            "dialCode": "+973",
            "isoCode": "BH",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bh.svg"
        },
        {
            "name": "Bangladesh",
            "dialCode": "+880",
            "isoCode": "BD",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bd.svg"
        },
        {
            "name": "Barbados",
            "dialCode": "+1246",
            "isoCode": "BB",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bb.svg"
        },
        {
            "name": "Belarus",
            "dialCode": "+375",
            "isoCode": "BY",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/by.svg"
        },
        {
            "name": "Belgium",
            "dialCode": "+32",
            "isoCode": "BE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/be.svg"
        },
        {
            "name": "Belize",
            "dialCode": "+501",
            "isoCode": "BZ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bz.svg"
        },
        {
            "name": "Benin",
            "dialCode": "+229",
            "isoCode": "BJ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bj.svg"
        },
        {
            "name": "Bermuda",
            "dialCode": "+1441",
            "isoCode": "BM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bm.svg"
        },
        {
            "name": "Bhutan",
            "dialCode": "+975",
            "isoCode": "BT",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bt.svg"
        },
        {
            "name": "Bolivia",
            "dialCode": "+591",
            "isoCode": "BO",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bo.svg"
        },
        {
            "name": "Bosnia and Herzegovina",
            "dialCode": "+387",
            "isoCode": "BA",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ba.svg"
        },
        {
            "name": "Botswana",
            "dialCode": "+267",
            "isoCode": "BW",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bw.svg"
        },
        {
            "name": "Brazil",
            "dialCode": "+55",
            "isoCode": "BR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/br.svg"
        },
        {
            "name": "British Indian Ocean Territory",
            "dialCode": "+246",
            "isoCode": "IO",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/io.svg"
        },
        {
            "name": "Brunei Darussalam",
            "dialCode": "+673",
            "isoCode": "BN",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bn.svg"
        },
        {
            "name": "Bulgaria",
            "dialCode": "+359",
            "isoCode": "BG",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bg.svg"
        },
        {
            "name": "Burkina Faso",
            "dialCode": "+226",
            "isoCode": "BF",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bf.svg"
        },
        {
            "name": "Burundi",
            "dialCode": "+257",
            "isoCode": "BI",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bi.svg"
        },
        {
            "name": "Cambodia",
            "dialCode": "+855",
            "isoCode": "KH",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/kh.svg"
        },
        {
            "name": "Cameroon",
            "dialCode": "+237",
            "isoCode": "CM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/cm.svg"
        },
        {
            "name": "Canada",
            "dialCode": "+1",
            "isoCode": "CA",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ca.svg"
        },
        {
            "name": "Cape Verde",
            "dialCode": "+238",
            "isoCode": "CV",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/cv.svg"
        },
        {
            "name": "Cayman Islands",
            "dialCode": "+1345",
            "isoCode": "KY",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ky.svg"
        },
        {
            "name": "Central African Republic",
            "dialCode": "+236",
            "isoCode": "CF",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/cf.svg"
        },
        {
            "name": "Chad",
            "dialCode": "+235",
            "isoCode": "TD",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/td.svg"
        },
        {
            "name": "Chile",
            "dialCode": "+56",
            "isoCode": "CL",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/cl.svg"
        },
        {
            "name": "China",
            "dialCode": "+86",
            "isoCode": "CN",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/cn.svg"
        },
        {
            "name": "Christmas Island",
            "dialCode": "+61",
            "isoCode": "CX",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/cx.svg"
        },
        {
            "name": "Cocos (Keeling) Islands",
            "dialCode": "+61",
            "isoCode": "CC",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/cc.svg"
        },
        {
            "name": "Colombia",
            "dialCode": "+57",
            "isoCode": "CO",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/co.svg"
        },
        {
            "name": "Comoros",
            "dialCode": "+269",
            "isoCode": "KM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/km.svg"
        },
        {
            "name": "Congo",
            "dialCode": "+242",
            "isoCode": "CG",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/cg.svg"
        },
        {
            "name": "Cook Islands",
            "dialCode": "+682",
            "isoCode": "CK",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ck.svg"
        },
        {
            "name": "Costa Rica",
            "dialCode": "+506",
            "isoCode": "CR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/cr.svg"
        },
        {
            "name": "Croatia",
            "dialCode": "+385",
            "isoCode": "HR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/hr.svg"
        },
        {
            "name": "Cuba",
            "dialCode": "+53",
            "isoCode": "CU",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/cu.svg"
        },
        {
            "name": "Cyprus",
            "dialCode": "+357",
            "isoCode": "CY",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/cy.svg"
        },
        {
            "name": "Czech Republic",
            "dialCode": "+420",
            "isoCode": "CZ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/cz.svg"
        },
        {
            "name": "Democratic Republic of the Congo",
            "dialCode": "+243",
            "isoCode": "CD",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/cd.svg"
        },
        {
            "name": "Denmark",
            "dialCode": "+45",
            "isoCode": "DK",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/dk.svg"
        },
        {
            "name": "Djibouti",
            "dialCode": "+253",
            "isoCode": "DJ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/dj.svg"
        },
        {
            "name": "Dominica",
            "dialCode": "+1767",
            "isoCode": "DM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/dm.svg"
        },
        {
            "name": "Dominican Republic",
            "dialCode": "+1849",
            "isoCode": "DO",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/do.svg"
        },
        {
            "name": "Ecuador",
            "dialCode": "+593",
            "isoCode": "EC",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ec.svg"
        },
        {
            "name": "Egypt",
            "dialCode": "+20",
            "isoCode": "EG",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/eg.svg"
        },
        {
            "name": "El Salvador",
            "dialCode": "+503",
            "isoCode": "SV",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sv.svg"
        },
        {
            "name": "Equatorial Guinea",
            "dialCode": "+240",
            "isoCode": "GQ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gq.svg"
        },
        {
            "name": "Eritrea",
            "dialCode": "+291",
            "isoCode": "ER",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/er.svg"
        },
        {
            "name": "Estonia",
            "dialCode": "+372",
            "isoCode": "EE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ee.svg"
        },
        {
            "name": "Eswatini",
            "dialCode": "+268",
            "isoCode": "SZ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sz.svg"
        },
        {
            "name": "Ethiopia",
            "dialCode": "+251",
            "isoCode": "ET",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/et.svg"
        },
        {
            "name": "Falkland Islands (Malvinas)",
            "dialCode": "+500",
            "isoCode": "FK",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/fk.svg"
        },
        {
            "name": "Faroe Islands",
            "dialCode": "+298",
            "isoCode": "FO",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/fo.svg"
        },
        {
            "name": "Fiji",
            "dialCode": "+679",
            "isoCode": "FJ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/fj.svg"
        },
        {
            "name": "Finland",
            "dialCode": "+358",
            "isoCode": "FI",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/fi.svg"
        },
        {
            "name": "France",
            "dialCode": "+33",
            "isoCode": "FR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/fr.svg"
        },
        {
            "name": "French Guiana",
            "dialCode": "+594",
            "isoCode": "GF",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gf.svg"
        },
        {
            "name": "French Polynesia",
            "dialCode": "+689",
            "isoCode": "PF",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/pf.svg"
        },
        {
            "name": "Gabon",
            "dialCode": "+241",
            "isoCode": "GA",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ga.svg"
        },
        {
            "name": "Gambia",
            "dialCode": "+220",
            "isoCode": "GM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gm.svg"
        },
        {
            "name": "Georgia",
            "dialCode": "+995",
            "isoCode": "GE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ge.svg"
        },
        {
            "name": "Germany",
            "dialCode": "+49",
            "isoCode": "DE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/de.svg"
        },
        {
            "name": "Ghana",
            "dialCode": "+233",
            "isoCode": "GH",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gh.svg"
        },
        {
            "name": "Gibraltar",
            "dialCode": "+350",
            "isoCode": "GI",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gi.svg"
        },
        {
            "name": "Greece",
            "dialCode": "+30",
            "isoCode": "GR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gr.svg"
        },
        {
            "name": "Greenland",
            "dialCode": "+299",
            "isoCode": "GL",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gl.svg"
        },
        {
            "name": "Grenada",
            "dialCode": "+1473",
            "isoCode": "GD",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gd.svg"
        },
        {
            "name": "Guadeloupe",
            "dialCode": "+590",
            "isoCode": "GP",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gp.svg"
        },
        {
            "name": "Guam",
            "dialCode": "+1671",
            "isoCode": "GU",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gu.svg"
        },
        {
            "name": "Guatemala",
            "dialCode": "+502",
            "isoCode": "GT",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gt.svg"
        },
        {
            "name": "Guernsey",
            "dialCode": "+44-1481",
            "isoCode": "GG",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gg.svg"
        },
        {
            "name": "Guinea",
            "dialCode": "+224",
            "isoCode": "GN",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gn.svg"
        },
        {
            "name": "Guinea-Bissau",
            "dialCode": "+245",
            "isoCode": "GW",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gw.svg"
        },
        {
            "name": "Guyana",
            "dialCode": "+592",
            "isoCode": "GY",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gy.svg"
        },
        {
            "name": "Haiti",
            "dialCode": "+509",
            "isoCode": "HT",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ht.svg"
        },
        {
            "name": "Holy See (Vatican City State)",
            "dialCode": "+379",
            "isoCode": "VA",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/va.svg"
        },
        {
            "name": "Honduras",
            "dialCode": "+504",
            "isoCode": "HN",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/hn.svg"
        },
        {
            "name": "Hong Kong",
            "dialCode": "+852",
            "isoCode": "HK",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/hk.svg"
        },
        {
            "name": "Hungary",
            "dialCode": "+36",
            "isoCode": "HU",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/hu.svg"
        },
        {
            "name": "Iceland",
            "dialCode": "+354",
            "isoCode": "IS",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/is.svg"
        },
        {
            "name": "India",
            "dialCode": "+91",
            "isoCode": "IN",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/in.svg"
        },
        {
            "name": "Indonesia",
            "dialCode": "+62",
            "isoCode": "ID",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/id.svg"
        },
        {
            "name": "Iran",
            "dialCode": "+98",
            "isoCode": "IR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ir.svg"
        },
        {
            "name": "Iraq",
            "dialCode": "+964",
            "isoCode": "IQ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/iq.svg"
        },
        {
            "name": "Ireland",
            "dialCode": "+353",
            "isoCode": "IE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ie.svg"
        },
        {
            "name": "Isle of Man",
            "dialCode": "+44-1624",
            "isoCode": "IM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/im.svg"
        },
        {
            "name": "Occupied Palestine",
            "dialCode": "+970",
            "isoCode": "PS",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ps.svg"
        },
        {
            "name": "Italy",
            "dialCode": "+39",
            "isoCode": "IT",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/it.svg"
        },
        {
            "name": "Ivory Coast / Cote d'Ivoire",
            "dialCode": "+225",
            "isoCode": "CI",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ci.svg"
        },
        {
            "name": "Jamaica",
            "dialCode": "+1876",
            "isoCode": "JM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/jm.svg"
        },
        {
            "name": "Japan",
            "dialCode": "+81",
            "isoCode": "JP",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/jp.svg"
        },
        {
            "name": "Jersey",
            "dialCode": "+44-1534",
            "isoCode": "JE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/je.svg"
        },
        {
            "name": "Jordan",
            "dialCode": "+962",
            "isoCode": "JO",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/jo.svg"
        },
        {
            "name": "Kazakhstan",
            "dialCode": "+77",
            "isoCode": "KZ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/kz.svg"
        },
        {
            "name": "Kenya",
            "dialCode": "+254",
            "isoCode": "KE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ke.svg"
        },
        {
            "name": "Kiribati",
            "dialCode": "+686",
            "isoCode": "KI",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ki.svg"
        },
        {
            "name": "Korea, Democratic People's Republic of Korea",
            "dialCode": "+850",
            "isoCode": "KP",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/kp.svg"
        },
        {
            "name": "Korea, Republic of South Korea",
            "dialCode": "+82",
            "isoCode": "KR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/kr.svg"
        },
        {
            "name": "Kosovo",
            "dialCode": "+383",
            "isoCode": "XK",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/xk.svg"
        },
        {
            "name": "Kuwait",
            "dialCode": "+965",
            "isoCode": "KW",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/kw.svg"
        },
        {
            "name": "Kyrgyzstan",
            "dialCode": "+996",
            "isoCode": "KG",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/kg.svg"
        },
        {
            "name": "Laos",
            "dialCode": "+856",
            "isoCode": "LA",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/la.svg"
        },
        {
            "name": "Latvia",
            "dialCode": "+371",
            "isoCode": "LV",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/lv.svg"
        },
        {
            "name": "Lebanon",
            "dialCode": "+961",
            "isoCode": "LB",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/lb.svg"
        },
        {
            "name": "Lesotho",
            "dialCode": "+266",
            "isoCode": "LS",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ls.svg"
        },
        {
            "name": "Liberia",
            "dialCode": "+231",
            "isoCode": "LR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/lr.svg"
        },
        {
            "name": "Libya",
            "dialCode": "+218",
            "isoCode": "LY",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ly.svg"
        },
        {
            "name": "Liechtenstein",
            "dialCode": "+423",
            "isoCode": "LI",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/li.svg"
        },
        {
            "name": "Lithuania",
            "dialCode": "+370",
            "isoCode": "LT",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/lt.svg"
        },
        {
            "name": "Luxembourg",
            "dialCode": "+352",
            "isoCode": "LU",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/lu.svg"
        },
        {
            "name": "Macau",
            "dialCode": "+853",
            "isoCode": "MO",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mo.svg"
        },
        {
            "name": "Madagascar",
            "dialCode": "+261",
            "isoCode": "MG",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mg.svg"
        },
        {
            "name": "Malawi",
            "dialCode": "+265",
            "isoCode": "MW",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mw.svg"
        },
        {
            "name": "Malaysia",
            "dialCode": "+60",
            "isoCode": "MY",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/my.svg"
        },
        {
            "name": "Maldives",
            "dialCode": "+960",
            "isoCode": "MV",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mv.svg"
        },
        {
            "name": "Mali",
            "dialCode": "+223",
            "isoCode": "ML",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ml.svg"
        },
        {
            "name": "Malta",
            "dialCode": "+356",
            "isoCode": "MT",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mt.svg"
        },
        {
            "name": "Marshall Islands",
            "dialCode": "+692",
            "isoCode": "MH",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mh.svg"
        },
        {
            "name": "Martinique",
            "dialCode": "+596",
            "isoCode": "MQ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mq.svg"
        },
        {
            "name": "Mauritania",
            "dialCode": "+222",
            "isoCode": "MR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mr.svg"
        },
        {
            "name": "Mauritius",
            "dialCode": "+230",
            "isoCode": "MU",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mu.svg"
        },
        {
            "name": "Mayotte",
            "dialCode": "+262",
            "isoCode": "YT",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/yt.svg"
        },
        {
            "name": "Mexico",
            "dialCode": "+52",
            "isoCode": "MX",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mx.svg"
        },
        {
            "name": "Micronesia, Federated States of Micronesia",
            "dialCode": "+691",
            "isoCode": "FM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/fm.svg"
        },
        {
            "name": "Moldova",
            "dialCode": "+373",
            "isoCode": "MD",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/md.svg"
        },
        {
            "name": "Monaco",
            "dialCode": "+377",
            "isoCode": "MC",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mc.svg"
        },
        {
            "name": "Mongolia",
            "dialCode": "+976",
            "isoCode": "MN",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mn.svg"
        },
        {
            "name": "Montenegro",
            "dialCode": "+382",
            "isoCode": "ME",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/me.svg"
        },
        {
            "name": "Montserrat",
            "dialCode": "+1664",
            "isoCode": "MS",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ms.svg"
        },
        {
            "name": "Morocco",
            "dialCode": "+212",
            "isoCode": "MA",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ma.svg"
        },
        {
            "name": "Mozambique",
            "dialCode": "+258",
            "isoCode": "MZ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mz.svg"
        },
        {
            "name": "Myanmar",
            "dialCode": "+95",
            "isoCode": "MM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mm.svg"
        },
        {
            "name": "Namibia",
            "dialCode": "+264",
            "isoCode": "NA",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/na.svg"
        },
        {
            "name": "Nauru",
            "dialCode": "+674",
            "isoCode": "NR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/nr.svg"
        },
        {
            "name": "Nepal",
            "dialCode": "+977",
            "isoCode": "NP",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/np.svg"
        },
        {
            "name": "Netherlands",
            "dialCode": "+31",
            "isoCode": "NL",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/nl.svg"
        },
        {
            "name": "Netherlands Antilles",
            "dialCode": "+599",
            "isoCode": "AN",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/an.svg"
        },
        {
            "name": "New Caledonia",
            "dialCode": "+687",
            "isoCode": "NC",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/nc.svg"
        },
        {
            "name": "New Zealand",
            "dialCode": "+64",
            "isoCode": "NZ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/nz.svg"
        },
        {
            "name": "Nicaragua",
            "dialCode": "+505",
            "isoCode": "NI",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ni.svg"
        },
        {
            "name": "Niger",
            "dialCode": "+227",
            "isoCode": "NE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ne.svg"
        },
        {
            "name": "Nigeria",
            "dialCode": "+234",
            "isoCode": "NG",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ng.svg"
        },
        {
            "name": "Niue",
            "dialCode": "+683",
            "isoCode": "NU",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/nu.svg"
        },
        {
            "name": "Norfolk Island",
            "dialCode": "+672",
            "isoCode": "NF",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/nf.svg"
        },
        {
            "name": "North Macedonia",
            "dialCode": "+389",
            "isoCode": "MK",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mk.svg"
        },
        {
            "name": "Northern Mariana Islands",
            "dialCode": "+1670",
            "isoCode": "MP",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mp.svg"
        },
        {
            "name": "Norway",
            "dialCode": "+47",
            "isoCode": "NO",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/no.svg"
        },
        {
            "name": "Oman",
            "dialCode": "+968",
            "isoCode": "OM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/om.svg"
        },
        {
            "name": "Pakistan",
            "dialCode": "+92",
            "isoCode": "PK",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/pk.svg"
        },
        {
            "name": "Palau",
            "dialCode": "+680",
            "isoCode": "PW",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/pw.svg"
        },
        {
            "name": "Palestine",
            "dialCode": "+970",
            "isoCode": "PS",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ps.svg"
        },
        {
            "name": "Panama",
            "dialCode": "+507",
            "isoCode": "PA",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/pa.svg"
        },
        {
            "name": "Papua New Guinea",
            "dialCode": "+675",
            "isoCode": "PG",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/pg.svg"
        },
        {
            "name": "Paraguay",
            "dialCode": "+595",
            "isoCode": "PY",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/py.svg"
        },
        {
            "name": "Peru",
            "dialCode": "+51",
            "isoCode": "PE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/pe.svg"
        },
        {
            "name": "Philippines",
            "dialCode": "+63",
            "isoCode": "PH",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ph.svg"
        },
        {
            "name": "Pitcairn",
            "dialCode": "+872",
            "isoCode": "PN",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/pn.svg"
        },
        {
            "name": "Poland",
            "dialCode": "+48",
            "isoCode": "PL",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/pl.svg"
        },
        {
            "name": "Portugal",
            "dialCode": "+351",
            "isoCode": "PT",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/pt.svg"
        },
        {
            "name": "Puerto Rico",
            "dialCode": "+1939",
            "isoCode": "PR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/pr.svg"
        },
        {
            "name": "Qatar",
            "dialCode": "+974",
            "isoCode": "QA",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/qa.svg"
        },
        {
            "name": "Reunion",
            "dialCode": "+262",
            "isoCode": "RE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/re.svg"
        },
        {
            "name": "Romania",
            "dialCode": "+40",
            "isoCode": "RO",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ro.svg"
        },
        {
            "name": "Russia",
            "dialCode": "+7",
            "isoCode": "RU",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ru.svg"
        },
        {
            "name": "Rwanda",
            "dialCode": "+250",
            "isoCode": "RW",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/rw.svg"
        },
        {
            "name": "Saint Barthelemy",
            "dialCode": "+590",
            "isoCode": "BL",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/bl.svg"
        },
        {
            "name": "Saint Helena, Ascension and Tristan Da Cunha",
            "dialCode": "+290",
            "isoCode": "SH",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sh.svg"
        },
        {
            "name": "Saint Kitts and Nevis",
            "dialCode": "+1869",
            "isoCode": "KN",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/kn.svg"
        },
        {
            "name": "Saint Lucia",
            "dialCode": "+1758",
            "isoCode": "LC",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/lc.svg"
        },
        {
            "name": "Saint Martin",
            "dialCode": "+590",
            "isoCode": "MF",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/mf.svg"
        },
        {
            "name": "Saint Pierre and Miquelon",
            "dialCode": "+508",
            "isoCode": "PM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/pm.svg"
        },
        {
            "name": "Saint Vincent and the Grenadines",
            "dialCode": "+1784",
            "isoCode": "VC",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/vc.svg"
        },
        {
            "name": "Samoa",
            "dialCode": "+685",
            "isoCode": "WS",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ws.svg"
        },
        {
            "name": "San Marino",
            "dialCode": "+378",
            "isoCode": "SM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sm.svg"
        },
        {
            "name": "Sao Tome and Principe",
            "dialCode": "+239",
            "isoCode": "ST",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/st.svg"
        },
        {
            "name": "Saudi Arabia",
            "dialCode": "+966",
            "isoCode": "SA",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sa.svg"
        },
        {
            "name": "Senegal",
            "dialCode": "+221",
            "isoCode": "SN",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sn.svg"
        },
        {
            "name": "Serbia",
            "dialCode": "+381",
            "isoCode": "RS",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/rs.svg"
        },
        {
            "name": "Seychelles",
            "dialCode": "+248",
            "isoCode": "SC",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sc.svg"
        },
        {
            "name": "Sierra Leone",
            "dialCode": "+232",
            "isoCode": "SL",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sl.svg"
        },
        {
            "name": "Singapore",
            "dialCode": "+65",
            "isoCode": "SG",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sg.svg"
        },
        {
            "name": "Sint Maarten",
            "dialCode": "+1721",
            "isoCode": "SX",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sx.svg"
        },
        {
            "name": "Slovakia",
            "dialCode": "+421",
            "isoCode": "SK",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sk.svg"
        },
        {
            "name": "Slovenia",
            "dialCode": "+386",
            "isoCode": "SI",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/si.svg"
        },
        {
            "name": "Solomon Islands",
            "dialCode": "+677",
            "isoCode": "SB",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sb.svg"
        },
        {
            "name": "Somalia",
            "dialCode": "+252",
            "isoCode": "SO",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/so.svg"
        },
        {
            "name": "South Africa",
            "dialCode": "+27",
            "isoCode": "ZA",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/za.svg"
        },
        {
            "name": "South Georgia and the South Sandwich Islands",
            "dialCode": "+500",
            "isoCode": "GS",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gs.svg"
        },
        {
            "name": "South Sudan",
            "dialCode": "+211",
            "isoCode": "SS",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ss.svg"
        },
        {
            "name": "Spain",
            "dialCode": "+34",
            "isoCode": "ES",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/es.svg"
        },
        {
            "name": "Sri Lanka",
            "dialCode": "+94",
            "isoCode": "LK",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/lk.svg"
        },
        {
            "name": "Sudan",
            "dialCode": "+249",
            "isoCode": "SD",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sd.svg"
        },
        {
            "name": "Suriname",
            "dialCode": "+597",
            "isoCode": "SR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sr.svg"
        },
        {
            "name": "Svalbard and Jan Mayen",
            "dialCode": "+47",
            "isoCode": "SJ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/sj.svg"
        },
        {
            "name": "Sweden",
            "dialCode": "+46",
            "isoCode": "SE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/se.svg"
        },
        {
            "name": "Switzerland",
            "dialCode": "+41",
            "isoCode": "CH",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ch.svg"
        },
        {
            "name": "Syrian Arab Republic",
            "dialCode": "+963",
            "isoCode": "SY",
            "flag": "https://jumpshare.com/s/uU39FZDb3x1Wg7HDMhEZ"
        },
        {
            "name": "Taiwan",
            "dialCode": "+886",
            "isoCode": "TW",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/tw.svg"
        },
        {
            "name": "Tajikistan",
            "dialCode": "+992",
            "isoCode": "TJ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/tj.svg"
        },
        {
            "name": "Tanzania, United Republic of Tanzania",
            "dialCode": "+255",
            "isoCode": "TZ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/tz.svg"
        },
        {
            "name": "Thailand",
            "dialCode": "+66",
            "isoCode": "TH",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/th.svg"
        },
        {
            "name": "Timor-Leste",
            "dialCode": "+670",
            "isoCode": "TL",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/tl.svg"
        },
        {
            "name": "Togo",
            "dialCode": "+228",
            "isoCode": "TG",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/tg.svg"
        },
        {
            "name": "Tokelau",
            "dialCode": "+690",
            "isoCode": "TK",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/tk.svg"
        },
        {
            "name": "Tonga",
            "dialCode": "+676",
            "isoCode": "TO",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/to.svg"
        },
        {
            "name": "Trinidad and Tobago",
            "dialCode": "+1868",
            "isoCode": "TT",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/tt.svg"
        },
        {
            "name": "Tunisia",
            "dialCode": "+216",
            "isoCode": "TN",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/tn.svg"
        },
        {
            "name": "Turkey",
            "dialCode": "+90",
            "isoCode": "TR",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/tr.svg"
        },
        {
            "name": "Turkmenistan",
            "dialCode": "+993",
            "isoCode": "TM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/tm.svg"
        },
        {
            "name": "Turks and Caicos Islands",
            "dialCode": "+1649",
            "isoCode": "TC",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/tc.svg"
        },
        {
            "name": "Tuvalu",
            "dialCode": "+688",
            "isoCode": "TV",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/tv.svg"
        },
        {
            "name": "Uganda",
            "dialCode": "+256",
            "isoCode": "UG",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ug.svg"
        },
        {
            "name": "Ukraine",
            "dialCode": "+380",
            "isoCode": "UA",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ua.svg"
        },
        {
            "name": "United Arab Emirates",
            "dialCode": "+971",
            "isoCode": "AE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ae.svg"
        },
        {
            "name": "United Kingdom",
            "dialCode": "+44",
            "isoCode": "GB",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/gb.svg"
        },
        {
            "name": "United States",
            "dialCode": "+1",
            "isoCode": "US",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/us.svg"
        },
        {
            "name": "United States Minor Outlying Islands",
            "dialCode": "+246",
            "isoCode": "UMI",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/umi.svg"
        },
        {
            "name": "Uruguay",
            "dialCode": "+598",
            "isoCode": "UY",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/uy.svg"
        },
        {
            "name": "Uzbekistan",
            "dialCode": "+998",
            "isoCode": "UZ",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/uz.svg"
        },
        {
            "name": "Vanuatu",
            "dialCode": "+678",
            "isoCode": "VU",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/vu.svg"
        },
        {
            "name": "Venezuela, Bolivarian Republic of Venezuela",
            "dialCode": "+58",
            "isoCode": "VE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ve.svg"
        },
        {
            "name": "Vietnam",
            "dialCode": "+84",
            "isoCode": "VN",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/vn.svg"
        },
        {
            "name": "Virgin Islands, British",
            "dialCode": "+1284",
            "isoCode": "VG",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/vg.svg"
        },
        {
            "name": "Virgin Islands, U.S.",
            "dialCode": "+1340",
            "isoCode": "VI",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/vi.svg"
        },
        {
            "name": "Wallis and Futuna",
            "dialCode": "+681",
            "isoCode": "WF",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/wf.svg"
        },
        {
            "name": "Yemen",
            "dialCode": "+967",
            "isoCode": "YE",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/ye.svg"
        },
        {
            "name": "Zambia",
            "dialCode": "+260",
            "isoCode": "ZM",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/zm.svg"
        },
        {
            "name": "Zimbabwe",
            "dialCode": "+263",
            "isoCode": "ZW",
            "flag": "https://cdn.kcak11.com/CountryFlags/countries/zw.svg"
        }
    ]
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		7950,
		"default-node_modules_ionic_core_dist_esm_data-caf38df0_js-node_modules_ionic_core_dist_esm_th-d3ab8e",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"default-node_modules_ionic_core_dist_esm_data-caf38df0_js-node_modules_ionic_core_dist_esm_th-d3ab8e",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 2480:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map