"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_history_history_module_ts"],{

/***/ 4207:
/*!*********************************************************!*\
  !*** ./src/app/pages/history/history-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoryPageRoutingModule": () => (/* binding */ HistoryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history.page */ 2722);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _history_page__WEBPACK_IMPORTED_MODULE_0__.HistoryPage
    }
];
class HistoryPageRoutingModule {
}
HistoryPageRoutingModule.ɵfac = function HistoryPageRoutingModule_Factory(t) { return new (t || HistoryPageRoutingModule)(); };
HistoryPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HistoryPageRoutingModule });
HistoryPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HistoryPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 608:
/*!*************************************************!*\
  !*** ./src/app/pages/history/history.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoryPageModule": () => (/* binding */ HistoryPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _history_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history-routing.module */ 4207);
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history.page */ 2722);
/* harmony import */ var _shared_shared_translations_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared-translations.module */ 7912);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);







class HistoryPageModule {
}
HistoryPageModule.ɵfac = function HistoryPageModule_Factory(t) { return new (t || HistoryPageModule)(); };
HistoryPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: HistoryPageModule });
HistoryPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
        _history_routing_module__WEBPACK_IMPORTED_MODULE_0__.HistoryPageRoutingModule,
        _shared_shared_translations_module__WEBPACK_IMPORTED_MODULE_2__.SharedTranslationsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](HistoryPageModule, { declarations: [_history_page__WEBPACK_IMPORTED_MODULE_1__.HistoryPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
        _history_routing_module__WEBPACK_IMPORTED_MODULE_0__.HistoryPageRoutingModule,
        _shared_shared_translations_module__WEBPACK_IMPORTED_MODULE_2__.SharedTranslationsModule] }); })();


/***/ }),

/***/ 2722:
/*!***********************************************!*\
  !*** ./src/app/pages/history/history.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoryPage": () => (/* binding */ HistoryPage)
/* harmony export */ });
/* harmony import */ var C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ 1577);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 8699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);










function HistoryPage_ion_list_45_ion_item_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-skeleton-text", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}

const _c0 = function () {
  return [1, 2, 3];
};

function HistoryPage_ion_list_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HistoryPage_ion_list_45_ion_item_1_Template, 2, 0, "ion-item", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
  }
}

function HistoryPage_ng_template_46_ion_list_0_div_1_ion_card_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-card", 17)(1, "ion-card-content")(2, "ion-grid")(3, "ion-row")(4, "ion-col", 18)(5, "ion-avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ion-img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-col", 20)(8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "ion-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "ion-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-col", 24)(18, "h3", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-badge", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
  }

  if (rf & 2) {
    const trip_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", trip_r11.Rider_imgUrl || "assets/imgs/default-avatar.png");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](trip_r11.Rider_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](13, 7, trip_r11.time == null ? null : trip_r11.time.toDate(), "shortTime"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", trip_r11.driverRating || "N/A", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 10, trip_r11.earnings));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", trip_r11.status === "completed" ? "success" : "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", trip_r11.status, " ");
  }
}

function HistoryPage_ng_template_46_ion_list_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "ion-item-divider", 14)(2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-note", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, HistoryPage_ng_template_46_ion_list_0_div_1_ion_card_8_Template, 23, 12, "ion-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const group_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 3, group_r9.date, "mediumDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 6, group_r9.totalEarnings), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", group_r9.trips);
  }
}

function HistoryPage_ng_template_46_ion_list_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HistoryPage_ng_template_46_ion_list_0_div_1_Template, 9, 8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r7.groupedHistories);
  }
}

function HistoryPage_ng_template_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HistoryPage_ng_template_46_ion_list_0_Template, 2, 1, "ion-list", 9);
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](49);

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.groupedHistories.length > 0)("ngIfElse", _r3);
  }
}

function HistoryPage_ng_template_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "HISTORY.NO_DATA"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 4, "HISTORY.BOOK_RIDE"));
  }
}

class HistoryPage {
  constructor(nav, firestore, auth, translate) {
    this.nav = nav;
    this.firestore = firestore;
    this.auth = auth;
    this.translate = translate;
    this.histories = [];
    this.groupedHistories = [];
    this.loading = true;
    this.selectedPeriod = 'week';
    this.totalTrips = 0;
    this.averageRating = 0;
    this.totalEarnings = 0;
  }

  ngOnInit() {
    this.loadHistory();
  }

  loadHistory() {
    var _this = this;

    return (0,C_Users_user_Pegasus_Driver_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this.loading = true;
        const userId = _this.auth.currentUser.uid;
        const historyRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_this.firestore, `Drivers/${userId}/History`); // Create query based on selected period

        const startDate = _this.getStartDate();

        const historyQuery = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.query)(historyRef, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.where)('time', '>=', startDate), (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.orderBy)('time', 'desc'));
        const snapshot = yield (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)(historyQuery);
        _this.histories = snapshot.docs.map(doc => {
          const data = doc.data();
          return { ...data
          };
        });

        _this.processHistoryData();
      } catch (error) {
        console.error('Error fetching history:', error);
      } finally {
        _this.loading = false;
      }
    })();
  }

  getStartDate() {
    const now = new Date();

    switch (this.selectedPeriod) {
      case 'today':
        return new Date(now.setHours(0, 0, 0, 0));

      case 'week':
        const lastWeek = new Date(now);
        lastWeek.setDate(lastWeek.getDate() - 7);
        return lastWeek;

      case 'month':
        const lastMonth = new Date(now);
        lastMonth.setMonth(lastMonth.getMonth() - 1);
        return lastMonth;

      default:
        return new Date(now.setHours(0, 0, 0, 0));
    }
  }

  processHistoryData() {
    // Calculate totals
    this.totalTrips = this.histories.length;
    this.totalEarnings = this.histories.reduce((sum, trip) => sum + (trip.earnings || 0), 0); // Only use driverRating for consistency

    const totalRating = this.histories.reduce((sum, trip) => {
      return sum + (trip.driverRating || 0);
    }, 0);
    this.averageRating = this.totalTrips > 0 ? totalRating / this.totalTrips : 0; // Group by date

    const groups = new Map();
    this.histories.forEach(trip => {
      const date = new Date(trip.time.toDate()).toDateString();

      if (!groups.has(date)) {
        groups.set(date, {
          date: new Date(date),
          trips: [],
          totalEarnings: 0
        });
      }

      const group = groups.get(date);
      group.trips.push(trip);
      group.totalEarnings += trip.earnings || 0;
    });
    this.groupedHistories = Array.from(groups.values()).sort((a, b) => b.date.getTime() - a.date.getTime());
  }

  filterHistory() {
    this.loadHistory();
  }

}

HistoryPage.ɵfac = function HistoryPage_Factory(t) {
  return new (t || HistoryPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__.Firestore), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__.Auth), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService));
};

HistoryPage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: HistoryPage,
  selectors: [["app-history"]],
  decls: 50,
  vars: 33,
  consts: [[1, "ion-no-border", 3, "translucent"], ["slot", "start"], ["color", "primary"], [1, "stats-card"], [1, "stat-item"], [3, "ngModel", "ngModelChange", "ionChange"], ["value", "today"], ["value", "week"], ["value", "month"], [4, "ngIf", "ngIfElse"], ["loadedContent", ""], ["noData", ""], [4, "ngFor", "ngForOf"], ["animated", "", 2, "width", "100%", "height", "100px"], ["sticky", "true"], ["slot", "end"], ["class", "trip-card", 4, "ngFor", "ngForOf"], [1, "trip-card"], ["size", "2"], [3, "src"], ["size", "7"], [1, "trip-details"], ["name", "time-outline"], ["name", "star"], ["size", "3", 1, "ion-text-end"], [1, "earnings"], [3, "color"], [1, "empty-state"], ["src", "../assets/imgs/empty.svg"]],
  template: function HistoryPage_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0)(1, "ion-toolbar")(2, "ion-buttons", 1)(3, "ion-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-back-button");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-card", 3)(9, "ion-grid")(10, "ion-row")(11, "ion-col")(12, "div", 4)(13, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-col")(19, "div", 4)(20, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "number");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ion-col")(27, "div", 4)(28, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](30, "currency");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](33, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ion-segment", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HistoryPage_Template_ion_segment_ngModelChange_34_listener($event) {
        return ctx.selectedPeriod = $event;
      })("ionChange", function HistoryPage_Template_ion_segment_ionChange_34_listener() {
        return ctx.filterHistory();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "ion-segment-button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](37, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "ion-segment-button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](40, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "ion-segment-button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](43, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "ion-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, HistoryPage_ion_list_45_Template, 2, 2, "ion-list", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, HistoryPage_ng_template_46_Template, 1, 2, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, HistoryPage_ng_template_48_Template, 8, 6, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](47);

      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("translucent", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 14, "HISTORY.TITLE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.totalTrips);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 16, "HISTORY.TOTAL_TRIPS"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](22, 18, ctx.averageRating, "1.1-1"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 21, "HISTORY.AVG_RATING"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](30, 23, ctx.totalEarnings));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](33, 25, "HISTORY.TOTAL_EARNINGS"));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedPeriod);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](37, 27, "HISTORY.TODAY"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](40, 29, "HISTORY.THIS_WEEK"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](43, 31, "HISTORY.THIS_MONTH"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading)("ngIfElse", _r1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonAvatar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonBadge, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCard, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCardContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonImg, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonItemDivider, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonNote, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSegment, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSegmentButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonSkeletonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonBackButtonDelegate, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CurrencyPipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
  styles: ["ion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 15px;\n  --padding-end: 15px;\n  --border-radius: 8px;\n  margin-bottom: 10px;\n  background: #f9f9f9;\n}\nion-content[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%] {\n  --border-radius: 50%;\n  width: 40px;\n  height: 40px;\n}\nion-content[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]   ion-skeleton-text[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  --border-radius: 50%;\n}\nion-content[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-bottom: 5px;\n}\nion-content[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  color: #666;\n}\nion-content[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   ion-skeleton-text[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n.stats-card[_ngcontent-%COMP%] {\n  margin: 16px;\n  border-radius: 16px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.stats-card[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.stats-card[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.4em;\n  font-weight: bold;\n  color: var(--ion-color-primary);\n}\n.stats-card[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0;\n  font-size: 0.8em;\n  color: var(--ion-color-medium);\n}\nion-segment[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  --background: var(--ion-color-light);\n}\n.trip-card[_ngcontent-%COMP%] {\n  margin: 8px 16px;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.trip-card[_ngcontent-%COMP%]   .trip-details[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  color: var(--ion-color-medium);\n  margin: 4px 0;\n}\n.trip-card[_ngcontent-%COMP%]   .trip-details[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.trip-card[_ngcontent-%COMP%]   .earnings[_ngcontent-%COMP%] {\n  color: var(--ion-color-success);\n  font-weight: bold;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px;\n}\n.empty-state[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%] {\n  max-width: 200px;\n  margin: 0 auto;\n}\n.empty-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  color: var(--ion-color-primary);\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium);\n}\nion-item-divider[_ngcontent-%COMP%] {\n  --background: var(--ion-color-light);\n  --padding-start: 16px;\n  --padding-end: 16px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpc3RvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUFOO0FBR0k7RUFDRSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRE47QUFFTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFBUjtBQUtNO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQUhSO0FBS007RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFIUjtBQU1NO0VBQ0UsZUFBQTtBQUpSO0FBU0E7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5Q0FBQTtBQU5GO0FBUUU7RUFDRSxrQkFBQTtBQU5KO0FBT0k7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FBTE47QUFPSTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0FBTE47QUFVQTtFQUNFLGlCQUFBO0VBQ0Esb0NBQUE7QUFQRjtBQVVBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0FBUEY7QUFTRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7QUFQSjtBQVNJO0VBQ0UsZUFBQTtBQVBOO0FBV0U7RUFDRSwrQkFBQTtFQUNBLGlCQUFBO0FBVEo7QUFhQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQVZGO0FBWUU7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUFWSjtBQWFFO0VBQ0UsZ0JBQUE7RUFDQSwrQkFBQTtBQVhKO0FBY0U7RUFDRSw4QkFBQTtBQVpKO0FBZ0JBO0VBQ0Usb0NBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFiRiIsImZpbGUiOiJoaXN0b3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxNXB4O1xyXG4gICAgICAtLXBhZGRpbmctZW5kOiAxNXB4O1xyXG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcclxuICAgIH1cclxuICBcclxuICAgIGlvbi1hdmF0YXIge1xyXG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgaW9uLXNrZWxldG9uLXRleHQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgaDIge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgfVxyXG4gICAgICBwIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGlvbi1za2VsZXRvbi10ZXh0IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbi5zdGF0cy1jYXJkIHtcclxuICBtYXJnaW46IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwwLDAsMC4xKTtcclxuXHJcbiAgLnN0YXQtaXRlbSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoMyB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgZm9udC1zaXplOiAxLjRlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgbWFyZ2luOiA0cHggMDtcclxuICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaW9uLXNlZ21lbnQge1xyXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxufVxyXG5cclxuLnRyaXAtY2FyZCB7XHJcbiAgbWFyZ2luOiA4cHggMTZweDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsMCwwLDAuMDgpO1xyXG5cclxuICAudHJpcC1kZXRhaWxzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiA0cHg7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICBtYXJnaW46IDRweCAwO1xyXG4gICAgXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5lYXJuaW5ncyB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG59XHJcblxyXG4uZW1wdHktc3RhdGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAzMnB4O1xyXG4gIFxyXG4gIGlvbi1pbWcge1xyXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuXHJcbiAgaDIge1xyXG4gICAgbWFyZ2luLXRvcDogMjRweDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1pdGVtLWRpdmlkZXIge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XHJcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbiAgIl19 */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_history_history_module_ts.js.map