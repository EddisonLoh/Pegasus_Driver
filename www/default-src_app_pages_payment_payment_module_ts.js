"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_payment_payment_module_ts"],{

/***/ 4018:
/*!*********************************************************!*\
  !*** ./src/app/pages/payment/payment-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentPageRoutingModule": () => (/* binding */ PaymentPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment.page */ 8622);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _payment_page__WEBPACK_IMPORTED_MODULE_0__.PaymentPage
    }
];
class PaymentPageRoutingModule {
}
PaymentPageRoutingModule.ɵfac = function PaymentPageRoutingModule_Factory(t) { return new (t || PaymentPageRoutingModule)(); };
PaymentPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PaymentPageRoutingModule });
PaymentPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PaymentPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 4923:
/*!*************************************************!*\
  !*** ./src/app/pages/payment/payment.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentPageModule": () => (/* binding */ PaymentPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _payment_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-routing.module */ 4018);
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment.page */ 8622);
/* harmony import */ var _shared_shared_translations_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared-translations.module */ 7912);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);







class PaymentPageModule {
}
PaymentPageModule.ɵfac = function PaymentPageModule_Factory(t) { return new (t || PaymentPageModule)(); };
PaymentPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PaymentPageModule });
PaymentPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _payment_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentPageRoutingModule,
        _shared_shared_translations_module__WEBPACK_IMPORTED_MODULE_2__.SharedTranslationsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PaymentPageModule, { declarations: [_payment_page__WEBPACK_IMPORTED_MODULE_1__.PaymentPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _payment_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentPageRoutingModule,
        _shared_shared_translations_module__WEBPACK_IMPORTED_MODULE_2__.SharedTranslationsModule] }); })();


/***/ }),

/***/ 8622:
/*!***********************************************!*\
  !*** ./src/app/pages/payment/payment.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentPage": () => (/* binding */ PaymentPage)
/* harmony export */ });
/* harmony import */ var C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_avatar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/avatar.service */ 5083);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_app_services_overlay_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/overlay.service */ 5596);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);











const _c0 = ["paymentform"];

function PaymentPage_ion_chip_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-chip", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 1, "WALLET.VERIFIED"));
  }
}

function PaymentPage_ion_item_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ion-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-label")(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-note", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const transaction_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", transaction_r3.type === "credit" ? "arrow-down-circle" : "arrow-up-circle")("color", transaction_r3.type === "credit" ? "success" : "primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](transaction_r3.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](7, 7, transaction_r3.timestamp.toDate(), "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", transaction_r3.type === "credit" ? "success" : "primary");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", transaction_r3.type === "credit" ? "+" : "-", "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](10, 10, transaction_r3.amount, ctx_r1.wallet == null ? null : ctx_r1.wallet.currency), " ");
  }
}

function PaymentPage_ion_item_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-item", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ion-skeleton-text", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-label")(3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "ion-skeleton-text", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "ion-skeleton-text", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "ion-skeleton-text", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !ctx_r2.isLoading);
  }
}

const _c1 = function () {
  return [1, 2, 3];
};

class PaymentPage {
  constructor(prof, nav, http, alertCtrl, overlay, formBuilder, translate) {
    this.prof = prof;
    this.nav = nav;
    this.http = http;
    this.alertCtrl = alertCtrl;
    this.overlay = overlay;
    this.formBuilder = formBuilder;
    this.translate = translate;
    this.stripe = Stripe('pk_test_0t85o0Llo0MbBfC9imSzznam');
    this.cash = 'cash';
    this.currentLanguage = 'en';
    this.transactions = [];
    this.isLoading = true;
    this.subscriptions = [];
    this.currentLanguage = this.translate.currentLang || 'en';
  }

  ionViewDidEnter() {
    this.skeletOns = [{}, {}, {}, {}, {}];
    this.setupStripe();
    this.prof.getCards().subscribe(d => {
      console.log(d);
      this.cards = d;
      this.cards.forEach(element => {
        console.log(element);

        if (element.selected == true) {
          this.selected = element;
          this.selectedCard = element.name;
          console.log(this.selectedCard);
        }
      });
    });
  }

  chooseCard(event) {
    var _this = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(event);

      _this.overlay.showLoader('Please wait..');

      yield _this.prof.updateCard(_this.selected.name, _this.selected.number, _this.selected.type, _this.selected.id, false);
      yield _this.prof.updateCard(event.name, event.number, event.type, event.id, true);

      _this.overlay.hideLoader();
    })();
  }

  setupStripe() {
    var _this2 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const appearance = {
        theme: 'flat',
        variables: {
          colorPrimary: '#0570de',
          colorBackground: '#ffffff',
          colorText: '#30313d',
          colorDanger: '#df1b41',
          fontFamily: 'Ideal Sans, system-ui, sans-serif',
          spacingUnit: '2px',
          borderRadius: '4px' // See all possible variables below

        }
      };

      let elements = _this2.stripe.elements();

      var style = {
        base: {
          color: '#32325d',
          lineHeight: '24px',
          fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
          fontSmoothing: 'antialiased',
          fontSize: '17px',
          '::placeholder': {
            color: '#aab7c4'
          }
        },
        invalid: {
          color: '#fa755a',
          iconColor: '#3880ff'
        }
      };
      _this2.card = elements.create('card', {
        style: style
      });

      _this2.card.mount('#card-element');

      _this2.card.addEventListener('change', event => {
        var displayError = document.getElementById('card-errors');

        if (event.error) {
          displayError.textContent = event.error.message;
        } else {
          displayError.textContent = '';
        }
      });

      var form = document.getElementById('payment-form');
      form.addEventListener('submit', event => {
        event.preventDefault();
        console.log(event, _this2.card);
        _this2.approve = true;

        _this2.stripe.createSource(_this2.card).then( /*#__PURE__*/function () {
          var _ref = (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (result) {
            _this2.approve = false;

            if (result.error) {
              var errorElement = document.getElementById('card-errors');
              errorElement.textContent = result.error.message;

              _this2.overlay.showAlert('Payment Error', result.error.message);
            } else {
              console.log(result.source.id);
              yield _this2.prof.updateCard(_this2.selected.name, _this2.selected.number, _this2.selected.type, _this2.selected.id, false);
              yield _this2.prof.createCard(result.source.card.last4, result.source.card.last4, result.source.card.brand, result.source.id);

              _this2.card.removeEventListener('change', event => {});

              form.removeEventListener('submit', event => {});
              yield _this2.overlay.showToast('Successfully Added Card!');

              _this2.setupStripe(); //  this.makePayment(result.id);

            }
          });

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      });
    })();
  }

  showPayMentAlert(title, subtitle, canLeave) {
    var _this3 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertCtrl.create({
        header: title,
        subHeader: subtitle,
        buttons: [{
          text: 'Approve',
          role: 'cancel',
          handler: () => {
            if (canLeave) {
              _this3.nav.pop();
            }
          }
        }],
        backdropDismiss: false
      });
      alert.present();
    })();
  }

  ngOnInit() {
    this.loadWalletData();
  }

  setLanguage(lang) {
    this.currentLanguage = lang;
    this.translate.use(lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('preferred_language', lang);
  }

  loadWalletData() {
    // Subscribe to wallet updates
    this.subscriptions.push(this.prof.getWalletBalance().subscribe(wallet => {
      this.wallet = wallet;
      this.isLoading = false;
    })); // Subscribe to transactions

    this.subscriptions.push(this.prof.getWalletTransactions().subscribe(transactions => {
      this.transactions = transactions;
    }));
  }

  addMoney() {
    var _this4 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const amount = yield _this4.overlay.showPrompt(_this4.translate.instant('WALLET.ADD_MONEY'), _this4.translate.instant('WALLET.ENTER_AMOUNT'));
      const numAmount = parseFloat(amount);

      if (amount && !isNaN(numAmount)) {
        try {
          yield _this4.prof.addTransaction({
            amount: numAmount,
            type: 'credit',
            description: _this4.translate.instant('WALLET.MONEY_ADDED')
          });
          yield _this4.overlay.showToast(_this4.translate.instant('WALLET.MONEY_ADDED_SUCCESS'));
        } catch (error) {
          yield _this4.overlay.showAlert('Error', error.message);
        }
      }
    })();
  }

  withdraw() {
    var _this5 = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this5.wallet?.balance) {
        yield _this5.overlay.showAlert(_this5.translate.instant('WALLET.ERROR'), _this5.translate.instant('WALLET.INSUFFICIENT_BALANCE'));
        return;
      }

      const amount = yield _this5.overlay.showPrompt(_this5.translate.instant('WALLET.WITHDRAW'), _this5.translate.instant('WALLET.ENTER_AMOUNT'));
      const numAmount = parseFloat(amount);

      if (amount && !isNaN(numAmount) && numAmount <= _this5.wallet.balance) {
        try {
          yield _this5.prof.addTransaction({
            amount: numAmount,
            type: 'debit',
            description: _this5.translate.instant('WALLET.WITHDRAWAL')
          });
          yield _this5.overlay.showToast(_this5.translate.instant('WALLET.WITHDRAWAL_SUCCESS'));
        } catch (error) {
          yield _this5.overlay.showAlert('Error', error.message);
        }
      }
    })();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}

PaymentPage.ɵfac = function PaymentPage_Factory(t) {
  return new (t || PaymentPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_avatar_service__WEBPACK_IMPORTED_MODULE_1__.AvatarService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_overlay_service__WEBPACK_IMPORTED_MODULE_2__.OverlayService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService));
};

PaymentPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: PaymentPage,
  selectors: [["app-payment"]],
  viewQuery: function PaymentPage_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.stripeButton = _t.first);
    }
  },
  decls: 36,
  vars: 25,
  consts: [[1, "ion-no-border", 3, "translucent"], ["slot", "start"], [1, "ion-padding"], [1, "balance-card", "ion-margin-bottom"], [1, "balance-header"], ["color", "success", 4, "ngIf"], [1, "balance-amount"], [1, "balance-actions"], ["expand", "block", 3, "click"], ["name", "add-circle-outline", "slot", "start"], ["expand", "block", "fill", "outline", 3, "click"], ["name", "cash-outline", "slot", "start"], [1, "transactions-section"], ["lines", "full", "class", "transaction-item", 4, "ngFor", "ngForOf"], ["lines", "full", "class", "transaction-item", 3, "hidden", 4, "ngFor", "ngForOf"], ["color", "success"], ["name", "checkmark-circle"], ["lines", "full", 1, "transaction-item"], ["slot", "start", 3, "name", "color"], ["slot", "end", 3, "color"], ["lines", "full", 1, "transaction-item", 3, "hidden"], ["animated", "", "slot", "start", 2, "width", "20px", "height", "20px"], ["animated", "", 2, "width", "50%"], ["animated", "", 2, "width", "70%"], ["animated", "", "slot", "end", 2, "width", "50px"]],
  template: function PaymentPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ion-back-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-content", 2)(8, "ion-card", 3)(9, "ion-card-content")(10, "div", 4)(11, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, PaymentPage_ion_chip_14_Template, 5, 3, "ion-chip", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 6)(16, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 7)(20, "ion-button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PaymentPage_Template_ion_button_click_20_listener() {
        return ctx.addMoney();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "ion-icon", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](23, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "ion-button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PaymentPage_Template_ion_button_click_24_listener() {
        return ctx.withdraw();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "ion-icon", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](27, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 12)(29, "ion-list-header")(30, "ion-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](32, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "ion-list");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, PaymentPage_ion_item_34_Template, 11, 13, "ion-item", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, PaymentPage_ion_item_35_Template, 8, 1, "ion-item", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 11, "WALLET.TITLE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 13, "WALLET.BALANCE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.wallet == null ? null : ctx.wallet.isVerified);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx.wallet == null ? null : ctx.wallet.currency, " ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](18, 15, ctx.wallet == null ? null : ctx.wallet.balance, "1.2-2"), "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](23, 18, "WALLET.ADD_MONEY"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](27, 20, "WALLET.WITHDRAW"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](32, 22, "WALLET.RECENT_TRANSACTIONS"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.transactions);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](24, _c1));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonChip, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonListHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonNote, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonSkeletonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonBackButtonDelegate, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
  styles: ["@keyframes slide-top {\n  0% {\n    transform: translateY(100%);\n  }\n  100% {\n    transform: translateY(0%);\n  }\n}\n.slide-top[_ngcontent-%COMP%] {\n  animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n}\nion-item[_ngcontent-%COMP%] {\n  animation-name: slide-top;\n  animation-duration: 0.5s;\n}\n.test[_ngcontent-%COMP%] {\n  animation-name: slide-top;\n  animation-duration: 0.6s;\n}\n.balance-card[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--ion-color-primary) 0%, var(--ion-color-primary-shade) 100%);\n  border-radius: 16px;\n}\n.balance-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.balance-card[_ngcontent-%COMP%]   .balance-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.balance-card[_ngcontent-%COMP%]   .balance-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: white;\n  margin: 0;\n  font-size: 18px;\n  font-weight: 500;\n}\n.balance-card[_ngcontent-%COMP%]   .balance-amount[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.balance-card[_ngcontent-%COMP%]   .balance-amount[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 36px;\n  font-weight: 700;\n  margin: 0;\n}\n.balance-card[_ngcontent-%COMP%]   .balance-actions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 12px;\n  gap: 12px;\n}\n.balance-card[_ngcontent-%COMP%]   .balance-actions[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  margin: 0;\n  --background: rgba(255, 255, 255, 0.1);\n  --color: white;\n}\n.balance-card[_ngcontent-%COMP%]   .balance-actions[_ngcontent-%COMP%]   ion-button[fill=outline][_ngcontent-%COMP%] {\n  --border-color: rgba(255, 255, 255, 0.3);\n}\n.transactions-section[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.transactions-section[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n.transactions-section[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 18px;\n}\n.transaction-item[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  margin-bottom: 8px;\n}\n.transaction-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-right: 12px;\n}\n.transaction-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin-bottom: 4px;\n}\n.transaction-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium);\n  font-size: 12px;\n}\n.transaction-item[_ngcontent-%COMP%]   ion-note[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n}\n@keyframes slide-in {\n  from {\n    transform: translateY(20px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.transaction-item[_ngcontent-%COMP%] {\n  animation: slide-in 0.3s ease-out forwards;\n  animation-delay: calc(var(--animation-order) * 0.1s);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7SUFDRSwyQkFBQTtFQUNKO0VBQ0U7SUFDRSx5QkFBQTtFQUNKO0FBQ0Y7QUFFRTtFQUNJLG1FQUFBO0FBQU47QUFHRTtFQUNFLHlCQUFBO0VBQ0Esd0JBQUE7QUFBSjtBQUdFO0VBQ0UseUJBQUE7RUFDQSx3QkFBQTtBQUFKO0FBR0E7RUFDRSxxR0FBQTtFQUNBLG1CQUFBO0FBQUY7QUFFRTtFQUNFLGFBQUE7QUFBSjtBQUdFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQURKO0FBR0k7RUFDRSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUROO0FBS0U7RUFDRSxtQkFBQTtBQUhKO0FBS0k7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQUhOO0FBT0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtBQUxKO0FBT0k7RUFDRSxTQUFBO0VBQ0Esc0NBQUE7RUFDQSxjQUFBO0FBTE47QUFPTTtFQUNFLHdDQUFBO0FBTFI7QUFXQTtFQUNFLGdCQUFBO0FBUkY7QUFVRTtFQUNFLGVBQUE7QUFSSjtBQVVJO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBUk47QUFhQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQVZGO0FBWUU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUFWSjtBQWNJO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQVpOO0FBZUk7RUFDRSw4QkFBQTtFQUNBLGVBQUE7QUFiTjtBQWlCRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQWZKO0FBbUJBO0VBQ0U7SUFDRSwyQkFBQTtJQUNBLFVBQUE7RUFoQkY7RUFrQkE7SUFDRSx3QkFBQTtJQUNBLFVBQUE7RUFoQkY7QUFDRjtBQW1CQTtFQUNFLDBDQUFBO0VBQ0Esb0RBQUE7QUFqQkYiLCJmaWxlIjoicGF5bWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAa2V5ZnJhbWVzIHNsaWRlLXRvcCB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuc2xpZGUtdG9wIHtcclxuICAgICAgYW5pbWF0aW9uOiBzbGlkZS10b3AgMC41cyBjdWJpYy1iZXppZXIoMC4yNTAsIDAuNDYwLCAwLjQ1MCwgMC45NDApIGJvdGg7XHJcbiAgfVxyXG5cclxuICBpb24taXRlbXtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS10b3A7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XHJcbiAgfVxyXG5cclxuICAudGVzdHtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZS10b3A7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNnM7XHJcbiAgfVxyXG5cclxuLmJhbGFuY2UtY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpIDAlLCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSkgMTAwJSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBcclxuICBpb24tY2FyZC1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDI0cHg7XHJcbiAgfVxyXG5cclxuICAuYmFsYW5jZS1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG5cclxuICAgIGgxIHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5iYWxhbmNlLWFtb3VudCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgXHJcbiAgICBoMiB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYmFsYW5jZS1hY3Rpb25zIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICBnYXA6IDEycHg7XHJcblxyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgICAgIC0tY29sb3I6IHdoaXRlO1xyXG4gICAgICBcclxuICAgICAgJltmaWxsPVwib3V0bGluZVwiXSB7XHJcbiAgICAgICAgLS1ib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnRyYW5zYWN0aW9ucy1zZWN0aW9uIHtcclxuICBtYXJnaW4tdG9wOiAyNHB4O1xyXG5cclxuICBpb24tbGlzdC1oZWFkZXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgXHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4udHJhbnNhY3Rpb24taXRlbSB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG5cclxuICBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgfVxyXG5cclxuICBpb24tbGFiZWwge1xyXG4gICAgaDIge1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHAge1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlvbi1ub3RlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWRlLWluIHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG4udHJhbnNhY3Rpb24taXRlbSB7XHJcbiAgYW5pbWF0aW9uOiBzbGlkZS1pbiAwLjNzIGVhc2Utb3V0IGZvcndhcmRzO1xyXG4gIGFuaW1hdGlvbi1kZWxheTogY2FsYyh2YXIoLS1hbmltYXRpb24tb3JkZXIpICogMC4xcyk7XHJcbn1cclxuICAiXX0= */"]
});

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_payment_payment_module_ts.js.map