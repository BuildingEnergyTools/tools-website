(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["goals"],{

/***/ "0QhP":
/*!****************************************************!*\
  !*** ./src/app/tool/goals/goals-routing.module.ts ***!
  \****************************************************/
/*! exports provided: GoalsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalsRoutingModule", function() { return GoalsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _analyze_analyze_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./analyze/analyze.component */ "cdwv");
/* harmony import */ var _compliance_compliance_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compliance/compliance.component */ "WGlE");
/* harmony import */ var _customize_customize_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customize/customize.component */ "q20t");
/* harmony import */ var _goals_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./goals.component */ "tHt4");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "eEmq");
/* harmony import */ var _target_target_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./target/target.component */ "PS16");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









const routes = [{
        path: '',
        component: _goals_component__WEBPACK_IMPORTED_MODULE_4__["GoalsComponent"],
        children: [{
                path: '',
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
            }, {
                path: 'analyze',
                component: _analyze_analyze_component__WEBPACK_IMPORTED_MODULE_1__["AnalyzeComponent"]
            }, {
                path: 'target',
                component: _target_target_component__WEBPACK_IMPORTED_MODULE_6__["TargetComponent"]
            }, {
                path: 'compliance',
                component: _compliance_compliance_component__WEBPACK_IMPORTED_MODULE_2__["ComplianceComponent"]
            }, {
                path: 'customize',
                component: _customize_customize_component__WEBPACK_IMPORTED_MODULE_3__["CustomizeComponent"]
            }]
    }];
class GoalsRoutingModule {
}
GoalsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: GoalsRoutingModule });
GoalsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ factory: function GoalsRoutingModule_Factory(t) { return new (t || GoalsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](GoalsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "I3wF":
/*!********************************************!*\
  !*** ./src/app/tool/goals/goals.module.ts ***!
  \********************************************/
/*! exports provided: GoalsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalsModule", function() { return GoalsModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/shared.module */ "PCNd");
/* harmony import */ var _analyze_analyze_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./analyze/analyze.component */ "cdwv");
/* harmony import */ var _compliance_compliance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compliance/compliance.component */ "WGlE");
/* harmony import */ var _customize_customize_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customize/customize.component */ "q20t");
/* harmony import */ var _goals_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./goals-routing.module */ "0QhP");
/* harmony import */ var _goals_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./goals.component */ "tHt4");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "eEmq");
/* harmony import */ var _target_target_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./target/target.component */ "PS16");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class GoalsModule {
}
GoalsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: GoalsModule });
GoalsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ factory: function GoalsModule_Factory(t) { return new (t || GoalsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _goals_routing_module__WEBPACK_IMPORTED_MODULE_5__["GoalsRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](GoalsModule, { declarations: [_analyze_analyze_component__WEBPACK_IMPORTED_MODULE_2__["AnalyzeComponent"],
        _compliance_compliance_component__WEBPACK_IMPORTED_MODULE_3__["ComplianceComponent"],
        _customize_customize_component__WEBPACK_IMPORTED_MODULE_4__["CustomizeComponent"],
        _goals_component__WEBPACK_IMPORTED_MODULE_6__["GoalsComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _target_target_component__WEBPACK_IMPORTED_MODULE_8__["TargetComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _goals_routing_module__WEBPACK_IMPORTED_MODULE_5__["GoalsRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]] }); })();


/***/ }),

/***/ "PS16":
/*!*******************************************************!*\
  !*** ./src/app/tool/goals/target/target.component.ts ***!
  \*******************************************************/
/*! exports provided: TargetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetComponent", function() { return TargetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");



class TargetComponent {
    constructor() {
    }
}
TargetComponent.ɵfac = function TargetComponent_Factory(t) { return new (t || TargetComponent)(); };
TargetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TargetComponent, selectors: [["ng-component"]], decls: 11, vars: 1, consts: [["fxLayout.gt-xs", "row", "fxLayout.xs", "column"], ["fxFlex", "25", 3, "ngClass.xs"], [1, "pl-4", "pr-4"], [1, "mat-h6"], ["src", "assets/images/better-outcomes-icon.svg", "alt", "", 1, "card-img", "img-g2"], ["fxFlex", "70"], ["src", "assets/images/better_outcome_pathway-01.png", "width", "100%", "alt", "use BETTER to target efficiency upgrade areas"]], template: function TargetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Target Efficiency Upgrade Areas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Use BETTER to import consumption data from ENERGY STAR Portfolio Manager. With a few clicks you can pinpoint low-performing buildings and high-impact upgrade opportunities within them.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.xs", "mb-4");
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__["DefaultClassDirective"]], encapsulation: 2 });


/***/ }),

/***/ "WGlE":
/*!***************************************************************!*\
  !*** ./src/app/tool/goals/compliance/compliance.component.ts ***!
  \***************************************************************/
/*! exports provided: ComplianceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplianceComponent", function() { return ComplianceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");



class ComplianceComponent {
    constructor() {
    }
}
ComplianceComponent.ɵfac = function ComplianceComponent_Factory(t) { return new (t || ComplianceComponent)(); };
ComplianceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ComplianceComponent, selectors: [["ng-component"]], decls: 13, vars: 1, consts: [["fxLayout.gt-xs", "row", "fxLayout.xs", "column"], ["fxFlex", "25", 3, "ngClass.xs"], [1, "pl-4"], [1, "mat-h6"], ["src", "assets/images/assetscore-outcomes-icon.svg", "alt", "", 1, "card-img", "img-g3"], ["fxFlex", "70"], ["src", "assets/images/asset-score-outcome_pathway-01.png", "width", "100%", "alt", "Use asset score to achieve compliance"]], template: function ComplianceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Achieve Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Use the Asset Score tool to identify a compliance pathway for underperforming buildings, including a prioritized list of cost-effective upgrade measures which can be shared with building owners to make their lives easier.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "One common and very effective process is for auditors to submit their reports using Audit Template, which a program implementer can then convert into an Asset Score report with one click.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.xs", "mb-4");
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__["DefaultClassDirective"]], encapsulation: 2 });


/***/ }),

/***/ "cdwv":
/*!*********************************************************!*\
  !*** ./src/app/tool/goals/analyze/analyze.component.ts ***!
  \*********************************************************/
/*! exports provided: AnalyzeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyzeComponent", function() { return AnalyzeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");



class AnalyzeComponent {
    constructor() {
    }
}
AnalyzeComponent.ɵfac = function AnalyzeComponent_Factory(t) { return new (t || AnalyzeComponent)(); };
AnalyzeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnalyzeComponent, selectors: [["ng-component"]], decls: 11, vars: 1, consts: [["fxLayout.gt-xs", "row", "fxLayout.xs", "column"], ["fxFlex", "25", 3, "ngClass.xs"], [1, "pl-4"], [1, "mat-h6"], ["src", "assets/images/com-resstock-outcomes-icon.svg", "alt", "", 1, "card-img", "img-g1"], ["fxFlex", "70"], ["src", "assets/images/comstock_outcome_pathway-01.png", "width", "100%", "alt", "Use ComStock and ResStock to analyze the building stock"]], template: function AnalyzeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Analyze Building Stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Give your building stock a checkup with ComStock and ResStock. View current and potential performance, see upgrade opportunities and run your own \"what if\" scenarios to evaluate policy impacts.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.xs", "mb-4");
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__["DefaultClassDirective"]], encapsulation: 2 });


/***/ }),

/***/ "eEmq":
/*!***************************************************!*\
  !*** ./src/app/tool/goals/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HomeComponent {
    constructor() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["ng-component"]], decls: 1, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Learn more about how the building energy data tools can help your organization realize its ultimate goals\n");
    } }, encapsulation: 2 });


/***/ }),

/***/ "q20t":
/*!*************************************************************!*\
  !*** ./src/app/tool/goals/customize/customize.component.ts ***!
  \*************************************************************/
/*! exports provided: CustomizeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizeComponent", function() { return CustomizeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




const _c0 = function () { return ["/developers"]; };
class CustomizeComponent {
    constructor() {
    }
}
CustomizeComponent.ɵfac = function CustomizeComponent_Factory(t) { return new (t || CustomizeComponent)(); };
CustomizeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomizeComponent, selectors: [["ng-component"]], decls: 12, vars: 3, consts: [["fxLayout.gt-xs", "row", "fxLayout.xs", "column"], ["fxFlex", "25", 3, "ngClass.xs"], [1, "pl-4"], [1, "mat-h6"], ["src", "assets/images/thirdparty-outcomes-icon.svg", "alt", "", 1, "card-img", "img-g4"], ["fxFlex", "70"], [1, "color-4", "bold-link", 3, "routerLink"]], template: function CustomizeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Customize");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "It's easy to combine DOE's building energy tools with other applications like Salesforce or the many proprietary and open-source applications available. Visit the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "For Developers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " page to learn more about customizing your workflows. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.xs", "mb-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__["DefaultClassDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], encapsulation: 2 });


/***/ }),

/***/ "tHt4":
/*!***********************************************!*\
  !*** ./src/app/tool/goals/goals.component.ts ***!
  \***********************************************/
/*! exports provided: GoalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalsComponent", function() { return GoalsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_tool_tool_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/tool/tool.component */ "NLSS");


class GoalsComponent {
    constructor() {
        this.navItems = [{
                title: 'Goals & Outcomes',
                icon: 'fa-info-circle',
                route: '/goals'
            }, {
                title: 'Analyze Building Stock',
                image: 'assets/images/com-resstock-outcomes-icon.svg',
                alt: '',
                route: 'analyze'
            }, {
                title: 'Target Efficiency Upgrade Areas',
                image: 'assets/images/better-outcomes-icon.svg',
                alt: '',
                route: 'target'
            }, {
                title: 'Achieve Compliance',
                image: 'assets/images/assetscore-outcomes-icon.svg',
                alt: '',
                route: 'compliance'
            }, {
                title: 'Customize Your Workflow',
                image: 'assets/images/thirdparty-outcomes-icon.svg',
                alt: '',
                route: 'customize'
            }];
    }
}
GoalsComponent.ɵfac = function GoalsComponent_Factory(t) { return new (t || GoalsComponent)(); };
GoalsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GoalsComponent, selectors: [["ng-component"]], decls: 4, vars: 1, consts: [[3, "navItems"], ["slot", "logo"]], template: function GoalsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-tool", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "GOALS & OUTCOMES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("navItems", ctx.navItems);
    } }, directives: [_shared_components_tool_tool_component__WEBPACK_IMPORTED_MODULE_1__["ToolComponent"]], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=goals.js.map