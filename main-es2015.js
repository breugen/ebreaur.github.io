(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\work\pantofar\src\main.ts */"zUnb");


/***/ }),

/***/ "1vza":
/*!************************************!*\
  !*** ./src/app/weather.service.ts ***!
  \************************************/
/*! exports provided: WeatherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherService", function() { return WeatherService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class WeatherService {
    constructor() {
        this.weatherBaseUrl = 'https://api.weatherbit.io/v2.0/forecast/daily?';
        this.APPID = 'd38d322193f04aa283603a1c6b073a16';
    }
    /** GET weather from the open free API with limitations */
    getWeather(city) {
        const currentDay = new Date().getDay();
        let nrOfDaysToFetch = currentDay ? (7 - currentDay) : 6;
        return fetch(this.weatherBaseUrl + 'city=' + city +
            '&country=RO&key=' + this.APPID + '&days=' + nrOfDaysToFetch)
            .then(response => response.json())
            .then(weatherResponse => weatherResponse.data[weatherResponse.data.length - 1].weather)
            .catch((err) => {
            console.error(err);
            return null;
        });
    }
}
WeatherService.ɵfac = function WeatherService_Factory(t) { return new (t || WeatherService)(); };
WeatherService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WeatherService, factory: WeatherService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeatherService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "2N90":
/*!**************************************!*\
  !*** ./src/app/database/database.ts ***!
  \**************************************/
/*! exports provided: Database */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Database", function() { return Database; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _trails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trails */ "RB+f");
/* harmony import */ var _cities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cities */ "nA0h");
/* harmony import */ var _trailDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trailDetails */ "z4cj");





class Database {
    getTrails() {
        return _trails__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
    getCities() {
        return _cities__WEBPACK_IMPORTED_MODULE_2__["default"];
    }
    getTrailDetails() {
        return _trailDetails__WEBPACK_IMPORTED_MODULE_3__["default"];
    }
}
Database.ɵfac = function Database_Factory(t) { return new (t || Database)(); };
Database.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Database, factory: Database.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Database, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], null, null); })();


/***/ }),

/***/ "3/0O":
/*!********************************************************!*\
  !*** ./src/app/trail-detail/trail-detail.component.ts ***!
  \********************************************************/
/*! exports provided: TrailDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrailDetailComponent", function() { return TrailDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! class-transformer */ "LGct");
/* harmony import */ var ng_gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-gallery */ "4Pm/");
/* harmony import */ var _trail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../trail */ "pGjJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _trail_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../trail.service */ "Mz6r");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _blaze_blaze_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../blaze/blaze.component */ "zuwX");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _segment_segment_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../segment/segment.component */ "dKD3");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _common_pipes_duration_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/pipes/duration.pipe */ "6lFv");
















function TrailDetailComponent_div_0_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " | Intoarcere: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx_r1.trail.reverseTime), "");
} }
function TrailDetailComponent_div_0_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " | ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.trailDetail == null ? null : ctx_r2.trailDetail.restrictions, " ");
} }
function TrailDetailComponent_div_0_h4_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.trail.pointLongList.join(" - "), " ");
} }
function TrailDetailComponent_div_0_mat_expansion_panel_14_mat_list_item_6_mat_divider_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-divider");
} }
function TrailDetailComponent_div_0_mat_expansion_panel_14_mat_list_item_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "segment", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TrailDetailComponent_div_0_mat_expansion_panel_14_mat_list_item_6_mat_divider_2_Template, 1, 0, "mat-divider", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const segment_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("trailSegment", segment_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r10 !== ctx_r8.segments.length - 1);
} }
function TrailDetailComponent_div_0_mat_expansion_panel_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Etape");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TrailDetailComponent_div_0_mat_expansion_panel_14_mat_list_item_6_Template, 3, 2, "mat-list-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.segments);
} }
function TrailDetailComponent_div_0_mat_expansion_panel_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Imagini");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "gallery", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r5.images);
} }
function TrailDetailComponent_div_0_mat_expansion_panel_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Descriere");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.trailDetail.description, " ");
} }
function TrailDetailComponent_div_0_mat_expansion_panel_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Flora si Fauna");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.trailDetail.wildlife, " ");
} }
function TrailDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "blaze", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Durata: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TrailDetailComponent_div_0_span_10_Template, 5, 3, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TrailDetailComponent_div_0_span_11_Template, 4, 1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TrailDetailComponent_div_0_h4_12_Template, 2, 1, "h4", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-accordion", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TrailDetailComponent_div_0_mat_expansion_panel_14_Template, 7, 2, "mat-expansion-panel", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TrailDetailComponent_div_0_mat_expansion_panel_15_Template, 6, 2, "mat-expansion-panel", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TrailDetailComponent_div_0_mat_expansion_panel_16_Template, 7, 2, "mat-expansion-panel", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TrailDetailComponent_div_0_mat_expansion_panel_17_Template, 7, 1, "mat-expansion-panel", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TrailDetailComponent_div_0_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Inapoi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("form", ctx_r0.trail.startBlaze);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.trail.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 10, ctx_r0.trail.time), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.trail.reverseTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.trailDetail == null ? null : ctx_r0.trailDetail.restrictions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.trail.pointLongList == null ? null : ctx_r0.trail.pointLongList.length) > (ctx_r0.trail.pointShortList == null ? null : ctx_r0.trail.pointShortList.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.trail.segments);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.images);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.trailDetail == null ? null : ctx_r0.trailDetail.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.trailDetail == null ? null : ctx_r0.trailDetail.wildlife);
} }
class TrailDetailComponent {
    constructor(route, trailService, location) {
        this.route = route;
        this.trailService = trailService;
        this.location = location;
    }
    ngOnInit() {
        this.getTrail();
    }
    getTrail() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.trailService.getTrail(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(trail => {
            this.trail = Object(class_transformer__WEBPACK_IMPORTED_MODULE_2__["plainToClass"])(_trail__WEBPACK_IMPORTED_MODULE_4__["Trail"], trail);
            if (Array.isArray(this.trail.segments)) {
                this.trail.mergeSegments();
                this.segments =
                    this.trail.segments.map((segment) => Object(class_transformer__WEBPACK_IMPORTED_MODULE_2__["plainToClass"])(_trail__WEBPACK_IMPORTED_MODULE_4__["Trail"], segment));
            }
            return this.trail;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(trail => this.trailService.getTrailDetail(trail.trailDetailId))).subscribe(trailDetail => {
            this.trailDetail = trailDetail;
            if (Array.isArray(this.trailDetail.pictures)) {
                this.images = this.trailDetail.pictures.map(picture => {
                    // if you ever want to add an image title:
                    // https://github.com/MurhafSousli/ngx-gallery/wiki/Advanced-Usage
                    return new ng_gallery__WEBPACK_IMPORTED_MODULE_3__["ImageItem"]({ src: picture['url'] });
                });
            }
        });
    }
    goBack() {
        this.location.back();
    }
}
TrailDetailComponent.ɵfac = function TrailDetailComponent_Factory(t) { return new (t || TrailDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_trail_service__WEBPACK_IMPORTED_MODULE_6__["TrailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"])); };
TrailDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrailDetailComponent, selectors: [["trail-detail"]], decls: 1, vars: 1, consts: [[4, "ngIf"], ["size", "lg", "caretSize", "2x", 3, "form"], ["class", "restrictions", 4, "ngIf"], ["multi", "", 1, "trail-segments-accordion"], [3, "expanded", 4, "ngIf"], [3, "click"], [1, "restrictions"], [3, "expanded"], [4, "ngFor", "ngForOf"], [3, "trailSegment"], [3, "items"]], template: function TrailDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TrailDetailComponent_div_0_Template, 20, 12, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.trail);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _blaze_blaze_component__WEBPACK_IMPORTED_MODULE_8__["BlazeComponent"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanelTitle"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListItem"], _segment_segment_component__WEBPACK_IMPORTED_MODULE_11__["SegmentComponent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDivider"], ng_gallery__WEBPACK_IMPORTED_MODULE_3__["GalleryComponent"]], pipes: [_common_pipes_duration_pipe__WEBPACK_IMPORTED_MODULE_13__["DurationPipe"]], styles: ["label[_ngcontent-%COMP%] {\n  color: #435960;\n  font-weight: bold;\n}\ninput[_ngcontent-%COMP%] {\n  font-size: 1em;\n  padding: .5rem;\n}\nbutton[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-right: .5rem;\n  background-color: #eee;\n  padding: 1rem;\n  border-radius: 4px;\n  font-size: 1rem;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #cfd8dc;\n}\nbutton[_ngcontent-%COMP%]:disabled {\n  background-color: #eee;\n  color: #ccc;\n  cursor: auto;\n}\n.trail-segments-accordion[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%]:not(:first-child) {\n  padding-top: 1rem;\n}\n.restrictions[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: tomato;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWlsLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhDQUE4QztBQUM5QztFQUNFLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InRyYWlsLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVHJhaWxEZXRhaWxDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cbmxhYmVsIHtcbiAgY29sb3I6ICM0MzU5NjA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuaW5wdXQge1xuICBmb250LXNpemU6IDFlbTtcbiAgcGFkZGluZzogLjVyZW07XG59XG5idXR0b24ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZmQ4ZGM7XG59XG5idXR0b246ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBjb2xvcjogI2NjYztcbiAgY3Vyc29yOiBhdXRvO1xufVxuXG4udHJhaWwtc2VnbWVudHMtYWNjb3JkaW9uIG1hdC1saXN0LWl0ZW06bm90KDpmaXJzdC1jaGlsZCkge1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbn1cblxuLnJlc3RyaWN0aW9ucyBiIHtcbiAgY29sb3I6IHRvbWF0bztcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrailDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'trail-detail',
                templateUrl: './trail-detail.component.html',
                styleUrls: ['./trail-detail.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _trail_service__WEBPACK_IMPORTED_MODULE_6__["TrailService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] }]; }, null); })();


/***/ }),

/***/ "5gbS":
/*!********************************************************!*\
  !*** ./src/app/trail-search/trail-search.component.ts ***!
  \********************************************************/
/*! exports provided: TrailSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrailSearchComponent", function() { return TrailSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _trail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../trail.service */ "Mz6r");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







function TrailSearchComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trail_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", trail_r2.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", trail_r2.name, " ");
} }
class TrailSearchComponent {
    constructor(trailService) {
        this.trailService = trailService;
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    // Push a search term into the observable stream.
    search(term) {
        this.searchTerms.next(term);
    }
    ngOnInit() {
        this.trails$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300), 
        // ignore new term if same as previous term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), 
        // switch to new search observable each time the term changes
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((term) => this.trailService.searchTrails(term)));
    }
}
TrailSearchComponent.ɵfac = function TrailSearchComponent_Factory(t) { return new (t || TrailSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_trail_service__WEBPACK_IMPORTED_MODULE_3__["TrailService"])); };
TrailSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrailSearchComponent, selectors: [["app-trail-search"]], decls: 8, vars: 3, consts: [["id", "search-component"], ["for", "search-box"], ["id", "search-box", 3, "input"], ["searchBox", ""], [1, "search-result"], [4, "ngFor", "ngForOf"], [3, "routerLink"]], template: function TrailSearchComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Trail Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function TrailSearchComponent_Template_input_input_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return ctx.search(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TrailSearchComponent_li_6_Template, 3, 2, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 1, ctx.trails$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: bold;\n  font-size: 1.2rem;\n  margin-top: 1rem;\n  margin-bottom: .5rem;\n\n}\n\ninput[_ngcontent-%COMP%] {\n  padding: .5rem;\n  width: 100%;\n  max-width: 600px;\n  box-sizing: border-box;\n  display: block;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: #336699 auto 1px;\n}\n\nli[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n\n.search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border-bottom: 1px solid gray;\n  border-left: 1px solid gray;\n  border-right: 1px solid gray;\n  display: inline-block;\n  width: 100%;\n  max-width: 600px;\n  padding: .5rem;\n  box-sizing: border-box;\n  text-decoration: none;\n  color: black;\n}\n\n.search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #435A60;\n  color: white;\n}\n\nul.search-result[_ngcontent-%COMP%] {\n  margin-top: 0;\n  padding-left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWlsLXNlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtCQUErQjs7QUFFL0I7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsb0JBQW9COztBQUV0Qjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ2pCIiwiZmlsZSI6InRyYWlsLXNlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVHJhaWxTZWFyY2ggcHJpdmF0ZSBzdHlsZXMgKi9cblxubGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcblxufVxuaW5wdXQge1xuICBwYWRkaW5nOiAuNXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6ICMzMzY2OTkgYXV0byAxcHg7XG59XG5cbmxpIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuLnNlYXJjaC1yZXN1bHQgbGkgYSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGdyYXk7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdyYXk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIHBhZGRpbmc6IC41cmVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnNlYXJjaC1yZXN1bHQgbGkgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzVBNjA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxudWwuc2VhcmNoLXJlc3VsdCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrailSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-trail-search',
                templateUrl: './trail-search.component.html',
                styleUrls: ['./trail-search.component.css']
            }]
    }], function () { return [{ type: _trail_service__WEBPACK_IMPORTED_MODULE_3__["TrailService"] }]; }, null); })();


/***/ }),

/***/ "6lFv":
/*!***********************************************!*\
  !*** ./src/app/common/pipes/duration.pipe.ts ***!
  \***********************************************/
/*! exports provided: DurationPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DurationPipe", function() { return DurationPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DurationPipe {
    transform(value) {
        if (value % 60) {
            return Math.floor(value / 60) + 'h:' + (value % 60) + 'm';
        }
        else {
            return Math.floor(value / 60) + 'h';
        }
    }
}
DurationPipe.ɵfac = function DurationPipe_Factory(t) { return new (t || DurationPipe)(); };
DurationPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "duration", type: DurationPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DurationPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'duration' }]
    }], null, null); })();


/***/ }),

/***/ "6nUm":
/*!**********************************************!*\
  !*** ./src/app/weather/weather.component.ts ***!
  \**********************************************/
/*! exports provided: WeatherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherComponent", function() { return WeatherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");



class WeatherComponent {
    constructor(weather) {
        this.weather = weather;
    }
    ngOnInit() {
        this.icon = this.getIconForCode(this.weather.code);
    }
    getIconForCode(code) {
        if ([900, 300, 301, 302, 500, 501, 511, 520].includes(code)) {
            return 'cloud-rain';
        }
        if ((code === 804) || (code === 803)) {
            return 'cloud';
        }
        if ([230, 231, 232, 233, 502, 522].includes(code)) {
            return 'cloud-showers-heavy';
        }
        if ([801, 802].includes(code)) {
            return 'cloud-sun';
        }
        if ([200, 201, 202, 521].includes(code)) {
            return 'cloud-sun-rain';
        }
        if (code === 800) {
            return 'sun';
        }
        if ((600 <= code) && (code < 700)) {
            return 'snowflake';
        }
        if ((700 <= code) && (code < 800)) {
            return 'smog';
        }
        return 'exclamation-circle';
    }
}
WeatherComponent.ɵfac = function WeatherComponent_Factory(t) { return new (t || WeatherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MAT_SNACK_BAR_DATA"])); };
WeatherComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WeatherComponent, selectors: [["weather"]], decls: 5, vars: 5, consts: [[1, "description"]], template: function WeatherComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.weather.city, " weekend weather: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.weather.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fas fa-", ctx.icon, " fa-2x");
    } }, styles: [".description[_ngcontent-%COMP%] {\r\n    float: left;\r\n}\r\n\r\ni[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXRoZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoid2VhdGhlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlc2NyaXB0aW9uIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG5pIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeatherComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'weather',
                styleUrls: ['./weather.component.css'],
                template: `
      <div class="description">
        {{weather.city}} weekend weather: <br>
        {{weather.description}}
      </div>
      <i class="fas fa-{{icon}} fa-2x">
    `
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MAT_SNACK_BAR_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
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

/***/ "DruN":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message.service */ "OdHV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function MessagesComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", message_r2, " ");
} }
function MessagesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessagesComponent_div_0_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.messageService.clear(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Clear messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MessagesComponent_div_0_div_5_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.messageService.messages);
} }
class MessagesComponent {
    constructor(messageService) {
        this.messageService = messageService;
    }
    ngOnInit() {
    }
}
MessagesComponent.ɵfac = function MessagesComponent_Factory(t) { return new (t || MessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"])); };
MessagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessagesComponent, selectors: [["app-messages"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "clear", 3, "click"], [4, "ngFor", "ngForOf"]], template: function MessagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MessagesComponent_div_0_Template, 6, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.messageService.messages.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["h2[_ngcontent-%COMP%] {\n  color: #A80000;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: lighter;\n}\n.clear[_ngcontent-%COMP%] {\n  color: #333;\n  background-color: #eee;\n  margin-bottom: 12px;\n  padding: 1rem;\n  border-radius: 4px;\n  font-size: 1rem;\n}\n.clear[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #42545C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBQzNDO0VBQ0UsY0FBYztFQUNkLHlDQUF5QztFQUN6QyxvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJtZXNzYWdlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTWVzc2FnZXNDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cbmgyIHtcbiAgY29sb3I6ICNBODAwMDA7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbn1cblxuLmNsZWFyIHtcbiAgY29sb3I6ICMzMzM7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLmNsZWFyOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjU0NUM7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-messages',
                templateUrl: './messages.component.html',
                styleUrls: ['./messages.component.css']
            }]
    }], function () { return [{ type: _message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "FUlj":
/*!*******************************************!*\
  !*** ./src/app/in-memory-data.service.ts ***!
  \*******************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _database_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./database/database */ "2N90");



class InMemoryDataService {
    createDb() {
        const database = new _database_database__WEBPACK_IMPORTED_MODULE_1__["Database"]();
        const trails = database.getTrails();
        const cities = database.getCities();
        const trailDetails = database.getTrailDetails();
        return {
            trails,
            cities,
            trailDetails
        };
    }
    // Overrides the genId method to ensure that a trail always has an id.
    // If the trails array is empty,
    // the method below returns the initial number (11).
    // if the trails array is not empty, the method below returns the highest
    // trail id + 1.
    genId(trails) {
        return trails.length > 0 ? Math.max(...trails.map(trail => trail.id)) + 1 : 11;
    }
}
InMemoryDataService.ɵfac = function InMemoryDataService_Factory(t) { return new (t || InMemoryDataService)(); };
InMemoryDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InMemoryDataService, factory: InMemoryDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InMemoryDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "Mz6r":
/*!**********************************!*\
  !*** ./src/app/trail.service.ts ***!
  \**********************************/
/*! exports provided: TrailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrailService", function() { return TrailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! class-transformer */ "LGct");
/* harmony import */ var _trail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trail */ "pGjJ");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./message.service */ "OdHV");









class TrailService {
    constructor(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.trailsUrl = 'api/trails'; // URL to web api
        this.citiesUrl = 'api/cities';
        this.trailDetailsUrl = 'api/trailDetails';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    /** GET trails from the server */
    getCities() {
        return this.http.get(this.citiesUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => {
            const cities = data.map(element => {
                return Object(class_transformer__WEBPACK_IMPORTED_MODULE_4__["plainToClass"])(_trail__WEBPACK_IMPORTED_MODULE_5__["City"], element);
            });
            return cities.filter(city => city.active);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(_ => this.log('fetched cities')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getCities', [])));
    }
    /** GET trails from the server */
    getTrails(type, active, direction, cityCode, isRoundTrip) {
        return this.http.get(this.trailsUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(data => {
            const trails = data.map(element => {
                const trail = Object(class_transformer__WEBPACK_IMPORTED_MODULE_4__["plainToClass"])(_trail__WEBPACK_IMPORTED_MODULE_5__["Trail"], element);
                trail.mergeSegments();
                return trail;
            });
            return trails.filter(trail => {
                return (trail.type === type) && (trail.cityCodes.includes(cityCode) &&
                    (!isRoundTrip || trail.isRoundTrip()));
            }).sort((trailA, trailB) => {
                if (direction === 'asc') {
                    return trailA[active] < trailB[active] ? -1 : 1;
                }
                else {
                    return trailA[active] > trailB[active] ? -1 : 1;
                }
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(_ => this.log('fetched trails')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getTrails', [])));
    }
    /** GET trail by id. Return `undefined` when id not found */
    getTrailNo404(id) {
        const url = `${this.trailsUrl}/?id=${id}`;
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(trails => trails[0]), // returns a {0|1} element array
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(h => {
            const outcome = h ? `fetched` : `did not find`;
            this.log(`${outcome} trail id=${id}`);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError(`getTrail id=${id}`)));
    }
    /** GET trail by id. Will 404 if id not found */
    getTrail(id) {
        const url = `${this.trailsUrl}/${id}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(_ => this.log(`fetched trail id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError(`getTrail id=${id}`)));
    }
    /* GET trails whose name contains search term */
    searchTrails(term) {
        if (!term.trim()) {
            // if not search term, return empty trail array.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        }
        return this.http.get(`${this.trailsUrl}/?name=${term}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(x => x.length ?
            this.log(`found trails matching "${term}"`) :
            this.log(`no trails matching "${term}"`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('searchTrails', [])));
    }
    //////// Save methods //////////
    /** POST: add a new trail to the server */
    addTrail(trail) {
        return this.http.post(this.trailsUrl, trail, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((newTrail) => this.log(`added trail w/ id=${newTrail.id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addTrail')));
    }
    /** DELETE: delete the trail from the server */
    deleteTrail(id) {
        const url = `${this.trailsUrl}/${id}`;
        return this.http.delete(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(_ => this.log(`deleted trail id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteTrail')));
    }
    /** PUT: update the trail on the server */
    updateTrail(trail) {
        return this.http.put(this.trailsUrl, trail, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(_ => this.log(`updated trail id=${trail.id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updateTrail')));
    }
    /** GET trail details by id. Will 404 if id not found */
    getTrailDetail(id) {
        const url = `${this.trailDetailsUrl}/${id}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(_ => this.log(`fetched trail details id=${id}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError(`getTrailDetail id=${id}`)));
    }
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    }
    /** Log a TrailService message with the MessageService */
    log(message) {
        this.messageService.add(`TrailService: ${message}`);
    }
}
TrailService.ɵfac = function TrailService_Factory(t) { return new (t || TrailService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"])); };
TrailService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TrailService, factory: TrailService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrailService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "OdHV":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MessageService {
    constructor() {
        this.messages = [];
    }
    add(message) {
        this.messages.push(message);
    }
    clear() {
        this.messages = [];
    }
}
MessageService.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(); };
MessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MessageService, factory: MessageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();


/***/ }),

/***/ "QX6l":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _trail_type_trail_type_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trail-type/trail-type.component */ "R0Km");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class DashboardComponent {
    constructor(_snackBar) {
        this._snackBar = _snackBar;
        this.trails = [];
    }
    ngOnInit() { }
    showTypeInfo(evt, type) {
        evt.stopPropagation();
        evt.preventDefault();
        this._snackBar.openFromComponent(_trail_type_trail_type_component__WEBPACK_IMPORTED_MODULE_1__["TrailTypeComponent"], {
            duration: 5000,
            data: { type }
        });
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 29, vars: 0, consts: [[1, "trails-menu"], ["routerLink", "/trails/1"], [1, "caption"], [1, "fas", "fa-walking", "fa-5x"], [1, "details", 3, "click"], [1, "fas", "fa-question-circle", "fa-2x"], ["routerLink", "/trails/2"], [1, "fas", "fa-hiking", "fa-5x"], [1, "details"], [1, "fas", "fa-ban", "fa-lg"], ["routerLink", "/trails/3"], [1, "fas", "fa-home", "fa-5x"], ["routerLink", "/trails/4"], [1, "fas", "fa-hotel", "fa-5x"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "PLIMBARE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_div_click_6_listener($event) { return ctx.showTypeInfo($event, 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "DRUMETIE DE ZI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "WEEKEND MARGARETA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "WEEKEND STEA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["h2[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n.trails-menu[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: auto;\r\n  max-width: 1000px;\r\n\r\n  \r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  justify-content: space-around;\r\n  align-content: flex-start;\r\n  align-items: flex-start;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  background-color: #3f525c;\r\n  border-radius: 10px;\r\n  padding: 1rem;\r\n  font-size: 1.2rem;\r\n  text-decoration: none;\r\n  display: flex;\r\n  color: whitesmoke;\r\n  text-align: center;\r\n  min-width: 70px;\r\n  margin: .5rem 1rem;\r\n  box-sizing: border-box;\r\n  \r\n  flex: 45%;\r\n}\r\n\r\n\r\n\r\na[_ngcontent-%COMP%]:not(:first-child) {\r\n  opacity: 0.6;\r\n  pointer-events: none;\r\n}\r\n\r\na[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\r\n  width: 70%;\r\n}\r\n\r\na[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\r\n  width: 30%;\r\n}\r\n\r\n.caption[_ngcontent-%COMP%] {\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n@media (max-width: 800px) {\r\n  a[_ngcontent-%COMP%] {\r\n    flex: 100%;\r\n    box-sizing: content-box;\r\n  }\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n  background-color: black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRDQUE0Qzs7QUFFNUM7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGlCQUFpQjs7RUFFakIsWUFBWTtFQUtaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osU0FBUztBQUNYOztBQUVBLDBEQUEwRDs7QUFDMUQ7RUFDRSxZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsdUJBQXVCO0VBQ3pCO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekIiLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBEYXNoYm9hcmRDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cclxuXHJcbmgyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50cmFpbHMtbWVudSB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcblxyXG4gIC8qIGZsZXhib3ggKi9cclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtbW96LWJveDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG5hIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MjVjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWluLXdpZHRoOiA3MHB4O1xyXG4gIG1hcmdpbjogLjVyZW0gMXJlbTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC8qIGZsZXhib3ggKi9cclxuICBmbGV4OiA0NSU7XHJcbn1cclxuXHJcbi8qIHRlbXBvcmFyeSB1bnRpbCB3ZSBoYXZlIGEgYmlnZ2VyIERCIGZvciBtb3JlIHRyYWlscy4gICovXHJcbmE6bm90KDpmaXJzdC1jaGlsZCkge1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuYSA+IGRpdjpmaXJzdC1jaGlsZCB7XHJcbiAgd2lkdGg6IDcwJTtcclxufVxyXG5cclxuYSAuZGV0YWlscyB7XHJcbiAgd2lkdGg6IDMwJTtcclxufVxyXG5cclxuLmNhcHRpb24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgYSB7XHJcbiAgICBmbGV4OiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgfVxyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.css']
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "R0Km":
/*!****************************************************!*\
  !*** ./src/app/trail-type/trail-type.component.ts ***!
  \****************************************************/
/*! exports provided: TrailTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrailTypeComponent", function() { return TrailTypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");



class TrailTypeComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
        switch (this.data['type']) {
            case 0:
                this.description = 'type 1';
                break;
            case 1:
                this.description = 'type 2';
                break;
            case 2:
                this.description = 'type 3';
                break;
            case 3:
                this.description = 'type 4';
        }
        ;
    }
}
TrailTypeComponent.ɵfac = function TrailTypeComponent_Factory(t) { return new (t || TrailTypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MAT_SNACK_BAR_DATA"])); };
TrailTypeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrailTypeComponent, selectors: [["ng-component"]], decls: 2, vars: 1, consts: [[1, "description"]], template: function TrailTypeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.description, " ");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrailTypeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                template: `
      <div class="description">
        {{description}}
      </div>
    `
            }]
    }], function () { return [{ type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MAT_SNACK_BAR_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "RB+f":
/*!************************************!*\
  !*** ./src/app/database/trails.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([
    {
        "id": 1,
        "type": 1,
        "name": "Hadambu",
        "massif": "Barnova",
        "blaze": "minus blue",
        "pointShortList": ["Gara Barnova", "Manastirea Barnova"],
        "pointLongList": ["Gara Barnova", "Sat Bordea", "Manastirea Barnova"],
        "time": 90,
        "cityCodes": ['Iasi'],
        "trailDetailId": 1
    },
    {
        "id": 2,
        "type": 1,
        "name": null,
        "massif": "Barnova",
        "cityCodes": ['Iasi'],
        "trailDetailId": 2,
        "segments": [
            {
                "id": 3,
                "blaze": "circle blue",
                "pointShortList": ["Gara Barnova", "Poiana cu Schit"],
                "time": 80
            },
            {
                "id": 4,
                "blaze": "circle red",
                "pointShortList": ["Poiana cu Schit", "Gara Barnova"],
                "pointLongList": ["Gara Barnova", "Cabana Barnova", "Manastirea Barnova"],
                "time": 40
            }
        ]
    },
    // FIXME: put some proper real trails here instead of the pasted ones:
    {
        "id": 6,
        "type": 1,
        "name": "Hadambu",
        "massif": "Barnova",
        "blaze": "plus red",
        "pointShortList": ["Gara Barnova", "Manastirea Barnova"],
        "pointLongList": ["Gara Barnova", "Sat Bordea", "Manastirea Barnova"],
        "time": 90,
        "cityCodes": ['Iasi'],
        "trailDetailId": 3
    },
    {
        "id": 6,
        "type": 1,
        "name": "Hadambu",
        "massif": "Barnova",
        "blaze": "minus red",
        "pointShortList": ["Gara Barnova", "Manastirea Barnova"],
        "time": 90,
        "cityCodes": ['Iasi'],
        "trailDetailId": 4
    },
    {
        "id": 6,
        "type": 1,
        "name": "Hadambu",
        "massif": "Barnova",
        "blaze": "caret-up red",
        "pointShortList": ["Gara Barnova", "Manastirea Barnova"],
        "time": 90,
        "cityCodes": ['Iasi']
    },
    {
        "id": 6,
        "type": 1,
        "name": "Hadambu",
        "massif": "Barnova",
        "blaze": "plus yellow",
        "pointShortList": ["Gara Barnova", "Manastirea Barnova"],
        "time": 90,
        "cityCodes": ['Iasi']
    },
    {
        "id": 6,
        "type": 1,
        "name": "Hadambu",
        "massif": "Barnova",
        "blaze": "minus yellow",
        "pointShortList": ["Gara Barnova", "Manastirea Barnova"],
        "time": 90,
        "cityCodes": ['Iasi']
    },
    {
        "id": 6,
        "type": 1,
        "name": "Hadambu",
        "massif": "Barnova",
        "blaze": "caret-up yellow",
        "pointShortList": ["Gara Barnova", "Manastirea Barnova"],
        "time": 90,
        "cityCodes": ['Iasi']
    },
    {
        "id": 6,
        "type": 1,
        "name": "Hadambu",
        "massif": "Barnova",
        "blaze": "plus blue",
        "pointShortList": ["Gara Barnova", "Manastirea Barnova"],
        "time": 90,
        "cityCodes": ['Iasi']
    },
    {
        "id": 6,
        "type": 1,
        "name": "Hadambu",
        "massif": "Barnova",
        "blaze": "minus blue",
        "pointShortList": ["Gara Barnova", "Manastirea Barnova"],
        "time": 90,
        "cityCodes": ['Iasi']
    },
    {
        "id": 6,
        "type": 1,
        "name": "Hadambu",
        "massif": "Barnova",
        "blaze": "circle blue",
        "pointShortList": ["Gara Barnova", "Manastirea Barnova"],
        "time": 90,
        "cityCodes": ['Iasi']
    },
    {
        "id": 6,
        "type": 1,
        "name": "Hadambu",
        "massif": "Barnova",
        "blaze": "caret-up blue",
        "pointShortList": ["Gara Barnova", "Manastirea Barnova"],
        "time": 90,
        "cityCodes": ['Iasi']
    },
    {
        "id": 6,
        "type": 1,
        "name": "Hadambu",
        "massif": "Barnova",
        "blaze": "minus blue",
        "pointShortList": ["Gara Barnova", "Manastirea Barnova"],
        "time": 90,
        "cityCodes": ['Iasi']
    },
    {
        "id": 6,
        "type": 1,
        "name": "Hadambu",
        "massif": "Barnova",
        "blaze": "minus blue",
        "pointShortList": ["Gara Barnova", "Manastirea Barnova"],
        "time": 90,
        "cityCodes": ['Iasi']
    },
    {
        "id": 6,
        "type": 1,
        "name": "Hadambu",
        "massif": "Barnova",
        "blaze": "minus blue",
        "pointShortList": ["Gara Barnova", "Manastirea Barnova"],
        "time": 90,
        "cityCodes": ['Iasi']
    },
    {
        "id": 6,
        "type": 1,
        "name": "Hadambu",
        "massif": "Barnova",
        "blaze": "minus blue",
        "pointShortList": ["Gara Barnova", "Manastirea Barnova"],
        "time": 90,
        "cityCodes": ['Iasi']
    },
    {
        "id": 6,
        "type": 1,
        "name": "Hadambu",
        "massif": "Barnova",
        "blaze": "minus blue",
        "pointShortList": ["Gara Barnova", "Manastirea Barnova"],
        "time": 90,
        "cityCodes": ['Iasi']
    },
    {
        "id": 6,
        "type": 1,
        "name": "Hadambu",
        "massif": "Barnova",
        "blaze": "minus blue",
        "pointShortList": ["Gara Barnova", "Manastirea Barnova"],
        "time": 90,
        "cityCodes": ['Iasi']
    },
    {
        "id": 6,
        "type": 1,
        "name": "Hadambu",
        "massif": "Barnova",
        "blaze": "minus blue",
        "pointShortList": ["Gara Barnova", "Manastirea Barnova"],
        "time": 90,
        "cityCodes": ['Iasi']
    },
    {
        "id": 6,
        "type": 1,
        "name": "Hadambu",
        "massif": "Barnova",
        "blaze": "minus blue",
        "pointShortList": ["Gara Barnova", "Manastirea Barnova"],
        "time": 90,
        "cityCodes": ['Iasi']
    },
]);


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'Poteca';
        this.subtitle = 'Trasee marcate pentru incepatori';
        this.isScrolled = false;
    }
    windowScroll(event) {
        const target = event.target;
        const newScroll = !!target.scrollingElement.scrollTop;
        if (this.isScrolled !== newScroll) {
            this.isScrolled = newScroll;
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function AppComponent_scroll_HostBindingHandler($event) { return ctx.windowScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, decls: 12, vars: 5, consts: [[1, "main-header"], [1, "app-title"], [1, "fas", "fa-map-signs", "fa-lg"], [1, "app-subtitle"], [1, "header-menu"], ["routerLink", "/dashboard"], [1, "fas", "fa-house-user", "fa-2x"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("app-header ", ctx.isScrolled ? "stuck" : "", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.subtitle);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".app-header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0px;\n  background: whitesmoke;\n  padding-top: .8rem;\n  padding-bottom: .2rem;\n  display:flex;\n  z-index: 2;\n  border-radius: 10px;\n}\n.app-header.stuck[_ngcontent-%COMP%] {\n  box-shadow: 0 6px 4px -4px grey;\n}\n.main-header[_ngcontent-%COMP%] {\n  flex: 5;\n}\n.header-menu[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.app-title[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: .1rem;\n  margin-left: 1rem;\n}\n.app-subtitle[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: .1rem;\n  margin-left: 1rem;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 1rem;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #e8e8e8;\n  color: #3d3d3d;\n  border-radius: 4px;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: white;\n  background-color: #42545C;\n}\nnav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNDQUFzQztBQUN0QztFQUNFLGdCQUFnQjtFQUNoQixRQUFRO0VBQ1Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFVBQVU7RUFDVixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLCtCQUErQjtBQUNqQztBQUVBO0VBQ0UsT0FBTztBQUNUO0FBRUE7RUFDRSxPQUFPO0FBQ1Q7QUFFQTtFQUNFLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBBcHBDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cbi5hcHAtaGVhZGVyIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gIHBhZGRpbmctdG9wOiAuOHJlbTtcbiAgcGFkZGluZy1ib3R0b206IC4ycmVtO1xuICBkaXNwbGF5OmZsZXg7XG4gIHotaW5kZXg6IDI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5hcHAtaGVhZGVyLnN0dWNrIHtcbiAgYm94LXNoYWRvdzogMCA2cHggNHB4IC00cHggZ3JleTtcbn1cblxuLm1haW4taGVhZGVyIHtcbiAgZmxleDogNTtcbn1cblxuLmhlYWRlci1tZW51IHtcbiAgZmxleDogMTtcbn1cblxuLmFwcC10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IC4xcmVtO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLmFwcC1zdWJ0aXRsZSB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IC4xcmVtO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxubmF2IGEge1xuICBwYWRkaW5nOiAxcmVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcbiAgY29sb3I6ICMzZDNkM2Q7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbm5hdiBhOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI1NDVDO1xufVxubmF2IGEuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, { windowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-in-memory-web-api */ "koPj");
/* harmony import */ var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./in-memory-data.service */ "FUlj");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _common_pipes_duration_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/pipes/duration.pipe */ "6lFv");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _trail_detail_trail_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./trail-detail/trail-detail.component */ "3/0O");
/* harmony import */ var _trails_trails_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./trails/trails.component */ "m57g");
/* harmony import */ var _trail_search_trail_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./trail-search/trail-search.component */ "5gbS");
/* harmony import */ var _segment_segment_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./segment/segment.component */ "dKD3");
/* harmony import */ var _blaze_blaze_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./blaze/blaze.component */ "zuwX");
/* harmony import */ var _weather_weather_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./weather/weather.component */ "6nUm");
/* harmony import */ var _trail_type_trail_type_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./trail-type/trail-type.component */ "R0Km");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./messages/messages.component */ "DruN");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var ng_gallery__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-gallery */ "4Pm/");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");

































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
            // and returns simulated server responses.
            // Remove it when a real server is ready to receive requests.
            angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_4__["HttpClientInMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_5__["InMemoryDataService"], { dataEncapsulation: false }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__["MatSortModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_22__["MatTableModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__["MatFormFieldModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__["MatSlideToggleModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_26__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__["MatExpansionModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_28__["MatListModule"],
            ng_gallery__WEBPACK_IMPORTED_MODULE_29__["GalleryModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__["MatSnackBarModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
        _trails_trails_component__WEBPACK_IMPORTED_MODULE_11__["TrailsComponent"],
        _trail_detail_trail_detail_component__WEBPACK_IMPORTED_MODULE_10__["TrailDetailComponent"],
        _messages_messages_component__WEBPACK_IMPORTED_MODULE_17__["MessagesComponent"],
        _trail_search_trail_search_component__WEBPACK_IMPORTED_MODULE_12__["TrailSearchComponent"],
        _common_pipes_duration_pipe__WEBPACK_IMPORTED_MODULE_7__["DurationPipe"],
        _blaze_blaze_component__WEBPACK_IMPORTED_MODULE_14__["BlazeComponent"],
        _segment_segment_component__WEBPACK_IMPORTED_MODULE_13__["SegmentComponent"],
        _weather_weather_component__WEBPACK_IMPORTED_MODULE_15__["WeatherComponent"],
        _trail_type_trail_type_component__WEBPACK_IMPORTED_MODULE_16__["TrailTypeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_4__["HttpClientInMemoryWebApiModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__["MatSortModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_22__["MatTableModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__["MatSlideToggleModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_26__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__["MatExpansionModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_28__["MatListModule"],
        ng_gallery__WEBPACK_IMPORTED_MODULE_29__["GalleryModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__["MatSnackBarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
                    // and returns simulated server responses.
                    // Remove it when a real server is ready to receive requests.
                    angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_4__["HttpClientInMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_5__["InMemoryDataService"], { dataEncapsulation: false }),
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__["MatSortModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_22__["MatTableModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__["MatFormFieldModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__["MatSlideToggleModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_26__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_27__["MatExpansionModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_28__["MatListModule"],
                    ng_gallery__WEBPACK_IMPORTED_MODULE_29__["GalleryModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_30__["MatSnackBarModule"]
                ],
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                    _trails_trails_component__WEBPACK_IMPORTED_MODULE_11__["TrailsComponent"],
                    _trail_detail_trail_detail_component__WEBPACK_IMPORTED_MODULE_10__["TrailDetailComponent"],
                    _messages_messages_component__WEBPACK_IMPORTED_MODULE_17__["MessagesComponent"],
                    _trail_search_trail_search_component__WEBPACK_IMPORTED_MODULE_12__["TrailSearchComponent"],
                    _common_pipes_duration_pipe__WEBPACK_IMPORTED_MODULE_7__["DurationPipe"],
                    _blaze_blaze_component__WEBPACK_IMPORTED_MODULE_14__["BlazeComponent"],
                    _segment_segment_component__WEBPACK_IMPORTED_MODULE_13__["SegmentComponent"],
                    _weather_weather_component__WEBPACK_IMPORTED_MODULE_15__["WeatherComponent"],
                    _trail_type_trail_type_component__WEBPACK_IMPORTED_MODULE_16__["TrailTypeComponent"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "dKD3":
/*!**********************************************!*\
  !*** ./src/app/segment/segment.component.ts ***!
  \**********************************************/
/*! exports provided: SegmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegmentComponent", function() { return SegmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _blaze_blaze_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blaze/blaze.component */ "zuwX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _common_pipes_duration_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/pipes/duration.pipe */ "6lFv");





function SegmentComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.trailSegment.pointLongList.join(" - "), " ");
} }
function SegmentComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.trailSegment.pointShortList.join(" - "), " ");
} }
class SegmentComponent {
    ngOnInit() {
    }
}
SegmentComponent.ɵfac = function SegmentComponent_Factory(t) { return new (t || SegmentComponent)(); };
SegmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SegmentComponent, selectors: [["segment"]], inputs: { trailSegment: "trailSegment" }, decls: 7, vars: 6, consts: [["size", "lg", "caretSize", "2x", 3, "form"], [4, "ngIf"]], template: function SegmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "blaze", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "duration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SegmentComponent_span_5_Template, 2, 1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SegmentComponent_span_6_Template, 2, 1, "span", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("form", ctx.trailSegment.blaze);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx.trailSegment.time));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.trailSegment.pointLongList == null ? null : ctx.trailSegment.pointLongList.length) > (ctx.trailSegment.pointShortList == null ? null : ctx.trailSegment.pointShortList.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.trailSegment.pointLongList == null ? null : ctx.trailSegment.pointLongList.length) < (ctx.trailSegment.pointShortList == null ? null : ctx.trailSegment.pointShortList.length));
    } }, directives: [_blaze_blaze_component__WEBPACK_IMPORTED_MODULE_1__["BlazeComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_common_pipes_duration_pipe__WEBPACK_IMPORTED_MODULE_3__["DurationPipe"]], styles: ["blaze[_ngcontent-%COMP%] {\r\n    margin-right: 0.2rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlZ21lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzZWdtZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJibGF6ZSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMnJlbTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SegmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'segment',
                styleUrls: ['./segment.component.css'],
                template: `
        <blaze form="{{trailSegment.blaze}}" size="lg" caretSize="2x"></blaze>
        <i>{{trailSegment.time | duration}}</i> |
        <span *ngIf="trailSegment.pointLongList?.length > trailSegment.pointShortList?.length">
          {{trailSegment.pointLongList.join(' - ')}}
        </span>
        <span *ngIf="trailSegment.pointLongList?.length < trailSegment.pointShortList?.length">
          {{trailSegment.pointShortList.join(' - ')}}
        </span>
    `
            }]
    }], null, { trailSegment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "m57g":
/*!********************************************!*\
  !*** ./src/app/trails/trails.component.ts ***!
  \********************************************/
/*! exports provided: TrailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrailsComponent", function() { return TrailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _trail_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../trail.service */ "Mz6r");
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../weather.service */ "1vza");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _blaze_blaze_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../blaze/blaze.component */ "zuwX");
/* harmony import */ var _common_pipes_duration_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common/pipes/duration.pipe */ "6lFv");
























function TrailsComponent_div_3_mat_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
} }
function TrailsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TrailsComponent_div_3_mat_spinner_1_Template, 1, 0, "mat-spinner", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isLoadingResults);
} }
function TrailsComponent_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const city_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", city_r13.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", city_r13.name, " ");
} }
function TrailsComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Marcaj");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TrailsComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "blaze", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("form", row_r14.startBlaze);
} }
function TrailsComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Traseu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TrailsComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r15.title);
} }
function TrailsComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Masiv");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TrailsComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r16.massif);
} }
function TrailsComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Timp");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TrailsComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "duration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, row_r17.time));
} }
function TrailsComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 26);
} }
function TrailsComponent_tr_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 27);
} if (rf & 2) {
    const row_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", row_r18.id, "");
} }
/**
 * @title Table retrieving data through HTTP
 */
class TrailsComponent {
    constructor(route, trailService, weatherService, _snackBar) {
        this.route = route;
        this.trailService = trailService;
        this.weatherService = weatherService;
        this._snackBar = _snackBar;
        this.displayedColumns = ['startBlaze', 'title', 'massif', 'time'];
        this.resultsLength = 0;
        this.isLoadingResults = true;
        this.selectedCity = 'Iasi';
        this.isRoundTrip = true;
    }
    static pageSlice(data, pageIndex) {
        return data.slice(pageIndex * this.pageSize, (pageIndex + 1) * this.pageSize);
    }
    ngOnInit() {
        this.filteredAndPagedIssues = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
        this.cities = this.trailService.getCities();
    }
    ngAfterViewInit() {
        this.filteredAndPagedIssues = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(this.sort.sortChange, this.paginator.page, this.select.selectionChange, this.slideToggle.change)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])({}), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => {
            const type = +this.route.snapshot.paramMap.get('type');
            this.isLoadingResults = true;
            return this.trailService.getTrails(type, this.sort.active, this.sort.direction, this.selectedCity ? this.selectedCity : 'IS', this.isRoundTrip);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => {
            // Flip flag to show that loading has finished.
            this.isLoadingResults = false;
            this.resultsLength = data.length;
            return TrailsComponent.pageSlice(data, this.paginator.pageIndex);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(() => {
            this.isLoadingResults = false;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
        }));
        this.showWeatherForCity(this.selectedCity);
    }
    resetPaging() {
        this.paginator.pageIndex = 0;
    }
    onCityChange() {
        this.resetPaging();
        this.showWeatherForCity(this.selectedCity);
    }
    showWeatherForCity(selectedCityName) {
        // I only show this when demo.
        // this.weatherService.getWeather(selectedCityName).then(weather => {
        //   this._snackBar.openFromComponent(WeatherComponent, {
        //     duration: 6000,
        //     data: Object.assign(weather, {city: selectedCityName})
        //   });
        // });
    }
}
// if you change page size you also need to update the template, Or pass it!
TrailsComponent.pageSize = 5;
TrailsComponent.ɵfac = function TrailsComponent_Factory(t) { return new (t || TrailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_trail_service__WEBPACK_IMPORTED_MODULE_8__["TrailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_weather_service__WEBPACK_IMPORTED_MODULE_9__["WeatherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"])); };
TrailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TrailsComponent, selectors: [["trails"]], viewQuery: function TrailsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggle"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.select = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.slideToggle = _t.first);
    } }, decls: 30, vars: 11, consts: [[1, "trails-container", "mat-elevation-z8"], ["class", "example-loading-shade", 4, "ngIf"], [1, "trails-list-header"], ["appearance", "fill", 1, "city-selector"], [3, "value", "valueChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "ngModel", "ngModelChange"], [1, "trails-table-container"], ["mat-table", "", "matSort", "", "matSortActive", "massif", "matSortDisableClear", "", "matSortDirection", "desc", 1, "example-table", 3, "dataSource", "matSortChange"], ["matColumnDef", "startBlaze"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "title"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "massif"], ["matColumnDef", "time"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "routerLink", 4, "matRowDef", "matRowDefColumns"], [3, "length", "pageSize"], [1, "example-loading-shade"], [4, "ngIf"], [3, "value"], ["mat-header-cell", ""], ["mat-cell", ""], ["size", "lg", "caretSize", "2x", 3, "form"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-header-row", ""], ["mat-row", "", 3, "routerLink"]], template: function TrailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Plimbari");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TrailsComponent_div_3_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "In apropierea orasul:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function TrailsComponent_Template_mat_select_valueChange_8_listener($event) { return ctx.selectedCity = $event; })("selectionChange", function TrailsComponent_Template_mat_select_selectionChange_8_listener() { return ctx.onCityChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TrailsComponent_mat_option_9_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-slide-toggle", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TrailsComponent_Template_mat_slide_toggle_ngModelChange_11_listener($event) { return ctx.isRoundTrip = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Doar Circuit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matSortChange", function TrailsComponent_Template_table_matSortChange_14_listener() { return ctx.resetPaging(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TrailsComponent_th_16_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TrailsComponent_td_17_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TrailsComponent_th_19_Template, 2, 0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TrailsComponent_td_20_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TrailsComponent_th_22_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, TrailsComponent_td_23_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](24, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, TrailsComponent_th_25_Template, 2, 0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, TrailsComponent_td_26_Template, 3, 3, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, TrailsComponent_tr_27_Template, 1, 0, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, TrailsComponent_tr_28_Template, 1, 1, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "mat-paginator", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoadingResults);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.selectedCity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 9, ctx.cities));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.isRoundTrip);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.filteredAndPagedIssues);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.resultsLength)("pageSize", 5);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatSpinner"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatCell"], _blaze_blaze_component__WEBPACK_IMPORTED_MODULE_17__["BlazeComponent"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatRow"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"], _common_pipes_duration_pipe__WEBPACK_IMPORTED_MODULE_18__["DurationPipe"]], styles: [".trails-container[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 200px;\n}\n\n.trails-table-container[_ngcontent-%COMP%] {\n  position: relative;\n  height: 55vh;\n  overflow: auto;\n}\n\n.trails-table-container[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%]:not(:first-child) {\n  padding-left: 0.2rem;\n  padding-right: 0.2rem;\n}\n\n.trails-table-container[_ngcontent-%COMP%]   .mat-header-cell[_ngcontent-%COMP%]:not(:first-child) {\n  padding-left: 0.2rem;\n  padding-right: 0.2rem;\n}\n\n.trails-table-container[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]:nth-child(odd){\n  background-color:whitesmoke;\n}\n\n.trails-table-container[_ngcontent-%COMP%]   .mat-column-startBlaze[_ngcontent-%COMP%] {\n  width: 10%;\n}\n\n.trails-table-container[_ngcontent-%COMP%]   .mat-column-title[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.trails-table-container[_ngcontent-%COMP%]   .mat-column-massif[_ngcontent-%COMP%] {\n  width: 20%;\n}\n\n.trails-table-container[_ngcontent-%COMP%]   .mat-column-time[_ngcontent-%COMP%] {\n  width: 20%;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-loading-shade[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 56px;\n  right: 0;\n  background: rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.example-rate-limit-reached[_ngcontent-%COMP%] {\n  color: #980000;\n  max-width: 360px;\n  text-align: center;\n}\n\n\n\n.mat-column-number[_ngcontent-%COMP%], .mat-column-state[_ngcontent-%COMP%] {\n  max-width: 64px;\n}\n\n.mat-column-created[_ngcontent-%COMP%] {\n  max-width: 124px;\n}\n\n.trails-list-header[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.trails-list-header[_ngcontent-%COMP%]   .city-selector[_ngcontent-%COMP%] {\n    width: 50%;\n}\n\n.trails-list-header[_ngcontent-%COMP%]   mat-slide-toggle[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlDQUF5Qzs7QUFFekMsY0FBYzs7QUFDZDtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFlBQVk7RUFDWixRQUFRO0VBQ1IsK0JBQStCO0VBQy9CLFVBQVU7RUFDVixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBLGtCQUFrQjs7QUFDbEI7O0VBRUUsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJ0cmFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFRyYWlsc0NvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xuXG4vKiBTdHJ1Y3R1cmUgKi9cbi50cmFpbHMtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbn1cblxuLnRyYWlscy10YWJsZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNTV2aDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi50cmFpbHMtdGFibGUtY29udGFpbmVyIC5tYXQtY2VsbDpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIHBhZGRpbmctbGVmdDogMC4ycmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAwLjJyZW07XG59XG5cbi50cmFpbHMtdGFibGUtY29udGFpbmVyIC5tYXQtaGVhZGVyLWNlbGw6bm90KDpmaXJzdC1jaGlsZCkge1xuICBwYWRkaW5nLWxlZnQ6IDAuMnJlbTtcbiAgcGFkZGluZy1yaWdodDogMC4ycmVtO1xufVxuXG4udHJhaWxzLXRhYmxlLWNvbnRhaW5lciAubWF0LXJvdzpudGgtY2hpbGQob2RkKXtcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZXNtb2tlO1xufVxuXG4udHJhaWxzLXRhYmxlLWNvbnRhaW5lciAubWF0LWNvbHVtbi1zdGFydEJsYXplIHtcbiAgd2lkdGg6IDEwJTtcbn1cblxuLnRyYWlscy10YWJsZS1jb250YWluZXIgLm1hdC1jb2x1bW4tdGl0bGUge1xuICB3aWR0aDogNTAlO1xufVxuXG4udHJhaWxzLXRhYmxlLWNvbnRhaW5lciAubWF0LWNvbHVtbi1tYXNzaWYge1xuICB3aWR0aDogMjAlO1xufVxuXG4udHJhaWxzLXRhYmxlLWNvbnRhaW5lciAubWF0LWNvbHVtbi10aW1lIHtcbiAgd2lkdGg6IDIwJTtcbn1cbiAgICAgIFxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtbG9hZGluZy1zaGFkZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDU2cHg7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICB6LWluZGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmV4YW1wbGUtcmF0ZS1saW1pdC1yZWFjaGVkIHtcbiAgY29sb3I6ICM5ODAwMDA7XG4gIG1heC13aWR0aDogMzYwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogQ29sdW1uIFdpZHRocyAqL1xuLm1hdC1jb2x1bW4tbnVtYmVyLFxuLm1hdC1jb2x1bW4tc3RhdGUge1xuICBtYXgtd2lkdGg6IDY0cHg7XG59XG5cbi5tYXQtY29sdW1uLWNyZWF0ZWQge1xuICBtYXgtd2lkdGg6IDEyNHB4O1xufVxuXG4udHJhaWxzLWxpc3QtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnRyYWlscy1saXN0LWhlYWRlciAuY2l0eS1zZWxlY3RvciB7XG4gICAgd2lkdGg6IDUwJTtcbn1cblxuLnRyYWlscy1saXN0LWhlYWRlciBtYXQtc2xpZGUtdG9nZ2xlIHtcbiAgcGFkZGluZzogMXJlbTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'trails',
                styleUrls: ['./trails.component.css'],
                templateUrl: 'trails.component.html',
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: _trail_service__WEBPACK_IMPORTED_MODULE_8__["TrailService"] }, { type: _weather_service__WEBPACK_IMPORTED_MODULE_9__["WeatherService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"]]
        }], select: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"]]
        }], slideToggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggle"]]
        }] }); })();


/***/ }),

/***/ "nA0h":
/*!************************************!*\
  !*** ./src/app/database/cities.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([
    {
        "name": "Bucuresti",
        "active": true,
        // a code that will work with the weather API.
        "code": "Bucuresti"
    },
    {
        "name": "Iasi",
        "active": true,
        "code": "Iasi"
    },
    {
        "name": "Cluj",
        "active": true,
        "code": "Cluj"
    },
    {
        "name": "Timisoara",
        "active": true,
        "code": "Timisoara"
    },
    {
        "name": "Constanta",
        "active": true,
        "code": "Constanta"
    },
    {
        "name": "Sibiu",
        "active": true,
        "code": "Sibiu"
    },
    {
        "name": "Brasov",
        "active": true,
        "code": "Brasov"
    },
    {
        "name": "Oradea",
        "active": true,
        "code": "Oradea"
    }
]);


/***/ }),

/***/ "pGjJ":
/*!**************************!*\
  !*** ./src/app/trail.ts ***!
  \**************************/
/*! exports provided: Blaze, City, Trail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Blaze", function() { return Blaze; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "City", function() { return City; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Trail", function() { return Trail; });
// A blaze in the beginning meant "a mark made on a tree by slashing the bark"
var Blaze;
(function (Blaze) {
    Blaze["RED_CROSS"] = "plus red";
    Blaze["RED_STRIPE"] = "minus red";
    Blaze["RED_DOT"] = "circle red";
    Blaze["RED_TRIANGLE"] = "caret-up red";
    Blaze["YELLOW_CROSS"] = "plus yellow";
    Blaze["YELLOW_STRIPE"] = "minus yellow";
    Blaze["YELLOW_DOT"] = "circle yellow";
    Blaze["YELLOW_TRIANGLE"] = "caret-up yellow";
    Blaze["BLUE_CROSS"] = "plus blue";
    Blaze["BLUE_STRIPE"] = "minus blue";
    Blaze["BLUE_DOT"] = "circle blue";
    Blaze["BLUE_TRIANGLE"] = "caret-up blue";
})(Blaze || (Blaze = {}));
class City {
    constructor() {
    }
}
// A lof of optional properties, since we can use this interface to define
// a segment of a trail as well, but also a full trail, so we keep things
// very flexible.
class Trail {
    constructor() {
    }
    get startBlaze() {
        return this.blaze ? this.blaze : this.segments[0].blaze;
    }
    get title() {
        return this.name ? this.name : this.pointShortList.join(' - ');
    }
    isRoundTrip() {
        if (!Array.isArray(this.pointShortList) || !this.pointShortList.length) {
            return false;
        }
        else {
            return this.pointShortList[0] ===
                this.pointShortList[this.pointShortList.length - 1];
        }
    }
    mergeSegments() {
        if (Array.isArray(this.segments) && this.segments.length) {
            // this trails is defined with segments -> calculate the totals
            // Usually there should not be more then 2-3 segments, we can loop
            // multiple times over this list without any penalty.
            if (!Array.isArray(this.pointShortList) || !this.pointShortList.length) {
                this.pointShortList = [];
                this.segments.forEach((segment, index) => {
                    if (Array.isArray(segment.pointShortList) && segment.pointShortList.length) {
                        // segment N starts with the last point of segment N-1 -> ignore it
                        this.pointShortList =
                            this.pointShortList.concat(segment.pointShortList.slice(index ? 1 : 0));
                    }
                });
            }
            if (!Array.isArray(this.pointShortList) || !this.pointShortList.length) {
                this.pointLongList = [];
                this.segments.forEach((segment, index) => {
                    if (Array.isArray(segment.pointLongList) && segment.pointLongList.length) {
                        // segment N starts with the last point of segment N-1 -> ignore it
                        this.pointShortList =
                            this.pointLongList.concat(segment.pointLongList.slice(index ? 1 : 0));
                    }
                });
            }
            if (!this.time && this.segments[0].time) {
                this.time = 0;
                this.segments.forEach((segment) => {
                    this.time += segment.time;
                });
            }
            if (!this.reverseTime && this.segments[0].reverseTime) {
                this.reverseTime = 0;
                this.segments.forEach((segment) => {
                    this.reverseTime += segment.reverseTime;
                });
            }
        }
    }
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _trails_trails_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trails/trails.component */ "m57g");
/* harmony import */ var _trail_detail_trail_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trail-detail/trail-detail.component */ "3/0O");







const routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
    { path: 'detail/:id', component: _trail_detail_trail_detail_component__WEBPACK_IMPORTED_MODULE_4__["TrailDetailComponent"] },
    { path: 'trails/:type', component: _trails_trails_component__WEBPACK_IMPORTED_MODULE_3__["TrailsComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "z4cj":
/*!******************************************!*\
  !*** ./src/app/database/trailDetails.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([
    {
        "id": 1,
        "pictures": [
            {
                "url": "http://www.poianacuschit.ro/foto/2011/s5.jpg",
                "description": "this picture label"
            },
            {
                "url": "http://www.poianacuschit.ro/foto/2011/s4.jpg",
                "description": "this 2 picture label"
            }
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        // for things like 'forbidden in winter'
        "restrictions": "Interzis iarna.",
        "water": "Nemo enim ipsam voluptatem",
        "equipment": "Ut enim ad minima veniam, quis nos",
        "wildlife": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
    },
    {
        "id": 2,
        "pictures": [
            {
                "url": "http://www.poianacuschit.ro/foto/2011/s5.jpg",
                "description": "this picture label"
            },
            {
                "url": "http://www.poianacuschit.ro/foto/2011/s4.jpg",
                "description": "this 2 picture label"
            }
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        // for things like 'forbidden in winter'
        "restrictions": null,
        "water": "Nemo enim ipsam voluptatem",
        "equipment": "Ut enim ad minima veniam, quis nos",
        "wildlife": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
    },
    {
        "id": 3,
        "pictures": [
            {
                "url": "http://www.poianacuschit.ro/foto/2011/s5.jpg",
                "description": "this picture label"
            },
            {
                "url": "http://www.poianacuschit.ro/foto/2011/s4.jpg",
                "description": "this 2 picture label"
            }
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        // for things like 'forbidden in winter'
        "restrictions": "Interzis iarna.",
        "water": "Nemo enim ipsam voluptatem",
        "equipment": "Ut enim ad minima veniam, quis nos",
        "wildlife": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
    },
    {
        "id": 4,
        "pictures": [
            {
                "url": "http://www.poianacuschit.ro/foto/2011/s5.jpg",
                "description": "this picture label"
            },
            {
                "url": "http://www.poianacuschit.ro/foto/2011/s4.jpg",
                "description": "this 2 picture label"
            }
        ],
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        // for things like 'forbidden in winter'
        "restrictions": "",
        "water": "Nemo enim ipsam voluptatem",
        "equipment": "Ut enim ad minima veniam, quis nos",
        "wildlife": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
    }
]);


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zuwX":
/*!******************************************!*\
  !*** ./src/app/blaze/blaze.component.ts ***!
  \******************************************/
/*! exports provided: BlazeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlazeComponent", function() { return BlazeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BlazeComponent {
    ngOnInit() {
        this.bestSize = this.form.startsWith('caret') ? this.caretSize : this.size;
    }
}
BlazeComponent.ɵfac = function BlazeComponent_Factory(t) { return new (t || BlazeComponent)(); };
BlazeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlazeComponent, selectors: [["blaze"]], inputs: { form: "form", size: "size", caretSize: "caretSize" }, decls: 1, vars: 4, template: function BlazeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("fas fa-", ctx.form, " fa-", ctx.bestSize, "");
    } }, styles: [".red[_ngcontent-%COMP%] {\r\n    color: tomato;\r\n}\r\n\r\n.blue[_ngcontent-%COMP%] {\r\n    color: lightskyblue;\r\n}\r\n\r\n.yellow[_ngcontent-%COMP%] {\r\n    color: goldenrod\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsYXplLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0k7QUFDSiIsImZpbGUiOiJibGF6ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZCB7XHJcbiAgICBjb2xvcjogdG9tYXRvO1xyXG59XHJcblxyXG4uYmx1ZSB7XHJcbiAgICBjb2xvcjogbGlnaHRza3libHVlO1xyXG59XHJcblxyXG4ueWVsbG93IHtcclxuICAgIGNvbG9yOiBnb2xkZW5yb2RcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlazeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'blaze',
                styleUrls: ['./blaze.component.css'],
                inputs: ['form', 'size', 'caretSize'],
                template: `
      <i class="fas fa-{{form}} fa-{{bestSize}}"></i>
    `
            }]
    }], null, null); })();


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map