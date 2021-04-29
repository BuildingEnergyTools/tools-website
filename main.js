(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/tools-website/tools-website/src/main.ts */"zUnb");


/***/ }),

/***/ "1Rfq":
/*!***************************************************!*\
  !*** ./src/app/home/graphic/graphic.component.ts ***!
  \***************************************************/
/*! exports provided: GraphicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphicComponent", function() { return GraphicComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/shared.service */ "wbvY");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









const _c0 = function (a0) { return { background: a0 }; };
const cards = ['pm', 'at', 'seed', 'csrs', 'better', 'as', '3p'];
const goals = ['g1', 'g2', 'g3', 'g4'];
class GraphicComponent {
    constructor(sharedService, document) {
        this.sharedService = sharedService;
        this.document = document;
        this.cardStatus = {};
        this.elements = {};
        this.hovers = {};
        this.hoverColor = '#7ab0cc';
        this._arrows = [];
    }
    toggleCard(card) {
        if (this.cardStatus[card]) {
            this.cardStatus[card] = false;
        }
        else {
            cards.forEach(currentCard => {
                this.cardStatus[currentCard] = card === currentCard;
            });
        }
    }
    mouseEnter(div) {
        this.hovers[div] = true;
    }
    mouseLeave(div) {
        this.hovers[div] = false;
    }
}
GraphicComponent.ɵfac = function GraphicComponent_Factory(t) { return new (t || GraphicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); };
GraphicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GraphicComponent, selectors: [["app-graphic"]], decls: 203, vars: 51, consts: [["fxLayout", "row wrap", "fxFlex", "100%", "fxFlexOffset", "0%"], ["fxLayout", "column", "fxFlex", "100%", 1, "col-type-4"], [1, "col-bkgnd-4"], [1, "header4"], [1, "header"], ["fxLayout", "row", 1, "mb-2"], ["fxFlex", "25%"], ["fxLayoutAlign", "space-around"], ["id", "g1", "routerLink", "goals/analyze", 1, "mb-2", "py-4", "pr-1", "pl-1", 3, "ngStyle", "mouseenter", "mouseleave"], ["fxLayout", "row"], [1, "my-auto", "pr-4", "card-img-g1", 3, "fxFlex"], ["src", "assets/images/com-resstock-outcomes-icon.svg", "alt", "ComStock & ResStock outcomes icon"], [1, "my-auto"], [1, "card-text", "m-auto", "pr-3"], ["id", "g2", "routerLink", "goals/target", 1, "mb-2", "py-4", "pr-1", "pl-1", 3, "ngStyle", "mouseenter", "mouseleave"], ["fxLayout", "row", 1, "no-gutters"], [1, "my-auto", "pr-4", "card-img-g2", 3, "fxFlex"], ["src", "assets/images/better-outcomes-icon.svg", "alt", "BETTER outcomes icon"], [1, "card-text", "m-auto"], ["id", "g3", "routerLink", "goals/compliance", 1, "mb-2", "py-4", "pr-1", "pl-1", 3, "ngStyle", "mouseenter", "mouseleave"], [1, "card-img-g3", "my-auto", "pr-1", 3, "fxFlex"], ["src", "assets/images/assetscore-outcomes-icon.svg", "alt", "Asset Score Outcomes icon"], ["id", "g4", "routerLink", "goals/customize", 1, "mb-2", "py-4", "pr-1", "pl-1", 3, "ngStyle", "mouseenter", "mouseleave"], [1, "my-auto", "pr-3", "card-img-g4", 3, "fxFlex"], ["src", "assets/images/thirdparty-outcomes-icon.svg", "alt", "third-party outcomes icon"], ["fxLayout", "column", 1, "mt-2", "mr-2", "col-pad", "col-type-1", 3, "fxFlex"], [1, "col-bkgnd-1"], [1, "header1"], ["fxLayoutAlign", "space-around", 1, "pt-2"], ["id", "pm", 1, "mb-4", 3, "ngStyle", "click"], [3, "hidden"], [1, "p-4"], ["src", "assets/images/pm-logo.svg", "alt", "EnergyStar Portfolio Manager Logo", 1, "card-img-2"], [1, "card-text"], ["fxLayoutAlign", "center center"], ["href", "https://www.energystar.gov/buildings/facility-owners-and-managers/existing-buildings/use-portfolio-manager", "mat-raised-button", "", "target", "_blank", "role", "button", 1, "btn-type-1", 3, "click"], [1, "ml-2", "align-center"], [1, "fas", "fa-external-link-alt"], ["fxLayoutAlign", "space-around", 1, "pt-5"], ["id", "at", 1, "card-zindex", 3, "ngStyle", "click"], [1, "img-ctr"], ["src", "assets/images/audit-template-logo.svg", "alt", "Audit Template Logo", 1, "card-img-at"], ["routerLink", "audit-template", "mat-raised-button", "", "role", "button", 1, "btn", "btn-type-1", 3, "click"], ["fxLayout", "column", 1, "mt-2", "mr-2", "col-pad", "col-type-2", 3, "fxFlex"], [1, "col-bkgnd-2"], [1, "header2"], ["id", "seed", 1, "card-zindex", "pt-5", 3, "click"], [1, "card-img-sm"], ["src", "assets/images/seed-logo.svg", "alt", "SEED Logo"], [1, "card-tex"], ["routerLink", "seed", "mat-raised-button", "", "role", "button", 1, "btn", "btn-type-2", 3, "click"], ["fxLayout", "column", 1, "mt-2", "col-pad", "col-type-3", 3, "fxFlex"], [1, "col-bkgnd-3"], [1, "header3"], ["id", "csrs", 1, "sm-spc", 3, "ngStyle", "click"], [1, "pl-6", "pt-1"], ["src", "assets/images/com-resstock-logos.svg", "alt", "ComStock & ResStock Logos", 1, "card-img-csrs"], ["routerLink", "comstock-resstock", "role", "button", "mat-raised-button", "", 1, "btn", "btn-type-3", 3, "click"], ["id", "better", 1, "sm-spc", 3, "ngStyle", "click"], [1, "pl-6"], ["src", "assets/images/better-logo.svg", "alt", "BETTER Logo", 1, "card-img-better"], ["routerLink", "better", "mat-raised-button", "", "role", "button", 1, "btn", "btn-type-3", 3, "click"], ["id", "as", 1, "sm-spc", 3, "ngStyle", "click"], ["src", "assets/images/asset-score-logo.svg", "alt", "Asset Score Logo", 1, "card-img-as"], ["routerLink", "asset-score", "mat-raised-button", "", "role", "button", 1, "btn", "btn-type-3", 3, "click"], ["id", "3p", 1, "sm-spc", 3, "ngStyle", "click"], ["fxFlex", "15%", 1, "mt-1"], ["src", "assets/images/third-party-icon-only.svg", "alt", "3rd party tools Logos", 1, "card-img-3p"], ["fxFlex", "70%", 1, "text-3p", "my-auto"], ["routerLink", "developers", "role", "button", "mat-raised-button", "", 1, "btn", "btn-type-5"]], template: function GraphicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "GOALS & OUTCOMES");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function GraphicComponent_Template_mat_card_mouseenter_9_listener() { return ctx.mouseEnter("g1"); })("mouseleave", function GraphicComponent_Template_mat_card_mouseleave_9_listener() { return ctx.mouseLeave("g1"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Assess Impacts and Identify New Opportunities");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-card", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function GraphicComponent_Template_mat_card_mouseenter_19_listener() { return ctx.mouseEnter("g2"); })("mouseleave", function GraphicComponent_Template_mat_card_mouseleave_19_listener() { return ctx.mouseLeave("g2"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Identify Measures and Suggest Areas for Deeper Evaluations");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-card", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function GraphicComponent_Template_mat_card_mouseenter_29_listener() { return ctx.mouseEnter("g3"); })("mouseleave", function GraphicComponent_Template_mat_card_mouseleave_29_listener() { return ctx.mouseLeave("g3"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Bring Buildings into Compliance with EUI and GHGe Requirements");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-card", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function GraphicComponent_Template_mat_card_mouseenter_39_listener() { return ctx.mouseEnter("g4"); })("mouseleave", function GraphicComponent_Template_mat_card_mouseleave_39_listener() { return ctx.mouseLeave("g4"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Customize Your Workflow with CRM, Data Visualizations, and More");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "DATA COLLECTION & REPORTING");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "mat-card", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GraphicComponent_Template_mat_card_click_53_listener() { return ctx.toggleCard("pm"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "mat-card-content", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "mat-card-content", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Building owners use ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "ENERGY STAR Portfolio Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, " to report their energy use. This information reveals how efficiently a building is being operated.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Portfolio Manager also generates an ENERGY STAR Score, a number from 0-100 which many cities use to set their performance targets and prioritize buildings for upgrade.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GraphicComponent_Template_a_click_66_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Learn more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "mat-card", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GraphicComponent_Template_mat_card_click_71_listener() { return ctx.toggleCard("at"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "mat-card-content", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "mat-card-content", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Audit Template");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, " is an online portal which cities use to collect standardized information \u2013 no more wrestling with Excel files or proprietary formats \u2013 about a building's physical systems and recommended upgrades.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Auditors use the mobile-friendly interface to submit data.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GraphicComponent_Template_a_click_83_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Learn more");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "MANAGEMENT & COMPLIANCE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "mat-card", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GraphicComponent_Template_mat_card_click_91_listener() { return ctx.toggleCard("seed"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "mat-card-content", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](94, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "mat-card-content", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "SEED Platform");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, " is a central database for city BEPS data. It merges information from Portfolio Manager, Audit Template, and other city datasets in one place, behind one intuitive interface.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "With just a few clicks, your city can:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "Merge datasets");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "Assess the completeness of audit reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "Perform automated quality assurance");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "Share data with third parties");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Track the progress fo BEPS compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "Leverage DOE's analysis & evaluation tools to identify upgrade opportunities within buildings and across the city's building stock, assess the performance of the BEPS program, and set program cycle goals.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "Share data with CRM systems & dashboards");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "p", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "Because SEED automates so many manual, time-intensive processes, even cities with severely limited resources and staff and use SEED to achieve their program goals.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GraphicComponent_Template_a_click_122_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "Learn more");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "ANALYSIS & EVALUATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "mat-card", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GraphicComponent_Template_mat_card_click_130_listener() { return ctx.toggleCard("csrs"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "mat-card-content", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](133, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "mat-card-content", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "Find Big Improvements with Big Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "Use the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, "ResStock");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "ComStock");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, " analysis tools to identify which building stock improvements save the most energy and money.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "By combining large public and private data sources, statistical sampling, detailed sub-hourly building simulations, and high-performance computing, these two tools achieve unprecedented granularity and accuracy in modeling the U.S. building stock.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GraphicComponent_Template_a_click_148_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "Learn more");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "mat-card", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GraphicComponent_Template_mat_card_click_151_listener() { return ctx.toggleCard("better"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "mat-card-content", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](154, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "mat-card-content", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "Target Buildings & Tailor Measures");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "The BETTER tool converts readily-available monthly energy consumption data (like that collected by ENERGY STAR Portfolio Manager and shared with SEED) into specific, cost-effective recommendations for energy efficiency upgrade measures. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "It allows the precise targeting of efficiency improvements in one or many buildings.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, "BETTER doesn't replace an audit, but it does provide a preliminary estimate of the size and make-up of potential energy efficiency projects. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "a", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GraphicComponent_Template_a_click_165_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "Learn more");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "mat-card", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GraphicComponent_Template_mat_card_click_168_listener() { return ctx.toggleCard("as"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "mat-card-content", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](171, "img", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "mat-card-content", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, "Get Cost Effective Upgrade Recommendations");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, "The ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, "Asset Score");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179, " tool assesses the energy efficiency of a building\u2019s physical systems and produces an Energy Asset Score Report. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, "Use Asset Score to identify cost-effective energy efficiency measures to help buildings meet EUI and GHGe goals for compliance with your jurisdiction\u2019s BPS policy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GraphicComponent_Template_a_click_183_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](184, "Learn more");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "mat-card", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GraphicComponent_Template_mat_card_click_186_listener() { return ctx.toggleCard("3p"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "mat-card-content", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](190, "img", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](192, "3rd Party Tools");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "mat-card-content", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](195, "Leverage Other Tools");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, "Whether you want to notify building owners of their compliance using Customer Relationship Management (CRM) programs, pipe data into a public dashboard, access data from the DOE Building Performance Database (BPD), or take advantage of other tools, there's a way to do it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](199, "Application Programming Interfaces (APIs) can make ready use of the BuildingSync file format used by Audit Template, SEED, and Asset Score.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "a", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](202, "For Developers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](31, _c0, ctx.hovers["g2"] == true || ctx.hovers["g3"] == true || ctx.hovers["g4"] == true ? "#a7afb2;" : "white"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fxFlex", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](33, _c0, ctx.hovers["g1"] == true || ctx.hovers["g3"] == true || ctx.hovers["g4"] == true ? "#a7afb2;" : "white"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fxFlex", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](35, _c0, ctx.hovers["g1"] == true || ctx.hovers["g2"] == true || ctx.hovers["g4"] == true ? "#a7afb2;" : "white"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fxFlex", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](37, _c0, ctx.hovers["g1"] == true || ctx.hovers["g2"] == true || ctx.hovers["g3"] == true ? "#a7afb2;" : "white"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fxFlex", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fxFlex", ctx.sharedService.colSize[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](39, _c0, ctx.hovers["g3"] == true || ctx.hovers["g4"] == true ? "#a7afb2;" : "#fff;"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.cardStatus.pm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.cardStatus.pm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](41, _c0, ctx.hovers["g1"] == true || ctx.hovers["g2"] == true ? "#a7afb2;" : "white"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.cardStatus.at);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.cardStatus.at);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fxFlex", ctx.sharedService.colSize[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.cardStatus.seed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.cardStatus.seed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fxFlex", ctx.sharedService.colSize[2]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](43, _c0, ctx.hovers["g2"] == true || ctx.hovers["g3"] == true || ctx.hovers["g4"] == true ? "#a7afb2;" : "white"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.cardStatus.csrs);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.cardStatus.csrs);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](45, _c0, ctx.hovers["g1"] == true || ctx.hovers["g3"] == true || ctx.hovers["g4"] == true ? "#a7afb2;" : "white"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.cardStatus.better);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.cardStatus.better);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](47, _c0, ctx.hovers["g1"] == true || ctx.hovers["g2"] == true || ctx.hovers["g4"] == true ? "#a7afb2;" : "white"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.cardStatus.as);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.cardStatus.as);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](49, _c0, ctx.hovers["g1"] == true || ctx.hovers["g2"] == true || ctx.hovers["g3"] == true ? "#a7afb2;" : "white"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.cardStatus["3p"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.cardStatus["3p"]);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexOffsetDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__["DefaultStyleDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardSubtitle"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n}\n[_nghost-%COMP%]  [hidden] {\n  display: none;\n}\n.break[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n  height: 0;\n}\n.mat-card-content[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-bottom: 0;\n}\n.mat-card-footer[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.color-1[_ngcontent-%COMP%] {\n  color: #3b88af;\n}\n.color-2[_ngcontent-%COMP%] {\n  color: #024880;\n}\n.color-3[_ngcontent-%COMP%] {\n  color: #478662;\n}\n.color-4[_ngcontent-%COMP%] {\n  color: #094f58;\n}\n.color-5[_ngcontent-%COMP%] {\n  color: #f5af13;\n}\n.white[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.header[_ngcontent-%COMP%] {\n  padding: 5px 10px 5px 10px;\n  align-self: flex-center;\n  font-size: 1rem;\n  font-weight: 500;\n  color: white;\n  height: 60px;\n  text-transform: uppercase;\n  text-align: center;\n  opacity: 1;\n  padding-top: 1.7rem;\n  vertical-align: middle;\n}\n.header1[_ngcontent-%COMP%], .header2[_ngcontent-%COMP%], .header3[_ngcontent-%COMP%], .header4[_ngcontent-%COMP%] {\n  position: relative;\n}\n.col-heading[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  text-align: center;\n  color: white;\n  font-size: 1rem;\n  font-weight: 400;\n}\n.arrow[_ngcontent-%COMP%] {\n  width: 3.5rem;\n  position: absolute;\n}\n.arrow1[_ngcontent-%COMP%] {\n  left: 17rem;\n  top: 3.7rem;\n}\n.arrow2[_ngcontent-%COMP%], .arrow3[_ngcontent-%COMP%] {\n  top: 2.8rem;\n  left: 17rem;\n}\n.col-bkgnd-1[_ngcontent-%COMP%] {\n  margin: 0px 0px 5px 0px;\n  position: relative;\n  height: 5vh;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.col-bkgnd-1[_ngcontent-%COMP%]::before {\n  content: \"\";\n  background-image: url('diagram-images-data-collection.jpg');\n  background-size: cover;\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  opacity: 0.5;\n}\n.col-bkgnd-2[_ngcontent-%COMP%] {\n  margin: 0px 0px 5px 0px;\n  position: relative;\n  height: 5vh;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.col-bkgnd-2[_ngcontent-%COMP%]::before {\n  content: \"\";\n  background-image: url('diagram-header-manag-compli.jpg');\n  background-size: cover;\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  opacity: 0.75;\n}\n.col-bkgnd-3[_ngcontent-%COMP%] {\n  margin: 0px 0px 5px 0px;\n  position: relative;\n  height: 5vh;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.col-bkgnd-3[_ngcontent-%COMP%]::before {\n  content: \"\";\n  background-image: url('diagram-header-analysis.jpg');\n  background-size: cover;\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  opacity: 0.75;\n}\n.col-bkgnd-4[_ngcontent-%COMP%] {\n  margin: 0px 0px 5px 0px;\n  position: relative;\n  height: 5vh;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.col-bkgnd-4[_ngcontent-%COMP%]::before {\n  content: \"\";\n  background-image: url('outcomes-header-background.jpg');\n  background-size: cover;\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  opacity: 0.75;\n}\n.sm-spc[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem !important;\n  padding-bottom: 0.25rem;\n  padding-top: 0.25rem;\n}\n.col-line-1[_ngcontent-%COMP%] {\n  border-top: 4px solid #3B88AF;\n  width: calc(100% - 70px);\n  margin: auto;\n}\n.col-pad[_ngcontent-%COMP%] {\n  padding-bottom: 10px;\n}\n.col-line-white[_ngcontent-%COMP%] {\n  border-top: 4px solid #Fff;\n}\n.col-title[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: normal;\n  font-size: 16px;\n  color: #ffffff;\n  text-align: center;\n}\n.col-type-1[_ngcontent-%COMP%] {\n  background-color: #3B88AF;\n}\n.col-type-1[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\n  margin-left: 40px;\n  margin-right: 40px;\n  width: 100%;\n}\n.btn-type-1[_ngcontent-%COMP%] {\n  background: #3B88AF;\n  color: #fff;\n}\n.btn-type-2[_ngcontent-%COMP%] {\n  background-color: #024880;\n  color: #fff;\n}\n.btn-type-3[_ngcontent-%COMP%] {\n  background-color: #478662;\n  color: #fff;\n}\n.btn-type-5[_ngcontent-%COMP%] {\n  background-color: #f5af13;\n  color: #fff;\n}\n.col-line-2[_ngcontent-%COMP%] {\n  border-top: 4px solid #024880;\n  width: calc(100% - 70px);\n  margin: auto;\n}\n.col-type-2[_ngcontent-%COMP%] {\n  background-color: #024880;\n}\n.col-type-2[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\n  margin-left: 40px;\n  margin-right: 40px;\n  width: 80%;\n}\n.col-type-2[_ngcontent-%COMP%]   #under-seed[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  text-align: center;\n}\n.col-line-3[_ngcontent-%COMP%] {\n  border-top: 4px solid #478662;\n  width: calc(100% - 70px);\n  margin: auto;\n}\n.col-type-3[_ngcontent-%COMP%] {\n  background-color: #478662;\n}\n.col-type-3[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\n  margin-left: 40px;\n  margin-right: 40px;\n  width: 80%;\n}\n.col-line-4[_ngcontent-%COMP%] {\n  border-top: 4px solid #094F58;\n  width: calc(100% - 70px);\n  margin: auto;\n}\n.col-type-4[_ngcontent-%COMP%] {\n  background-color: #094F58;\n}\n.col-type-4[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\n  font-family: \"Roboto Condensed\", Roboto, \"Helvetica Neue\", sans-serif;\n  margin-left: 15px;\n  margin-right: 14px;\n  \n}\n.col-line-5[_ngcontent-%COMP%] {\n  border-top: 4px solid #f5af13;\n  width: calc(100% - 70px);\n  margin: auto;\n}\n.home-nav[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n  text-decoration: none;\n}\n.home-nav[_ngcontent-%COMP%]:hover {\n  color: #EEE;\n  text-decoration: none;\n}\n.card-img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.card-img-3p[_ngcontent-%COMP%] {\n  width: 70%;\n}\n.text-3p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  vertical-align: center;\n  color: #454444;\n}\n.card-img-2[_ngcontent-%COMP%] {\n  width: 110%;\n}\n.card-margin[_ngcontent-%COMP%] {\n  margin-bottom: 3.5rem;\n}\n.img-ctr[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.card-img-csrs[_ngcontent-%COMP%] {\n  width: 65%;\n}\n.card-img-as[_ngcontent-%COMP%] {\n  width: 70%;\n}\n.card-img-at[_ngcontent-%COMP%] {\n  width: 80%;\n}\n.card-img-better[_ngcontent-%COMP%] {\n  width: 75%;\n  padding-bottom: 5px;\n}\n.card-img-sm[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.card-img-sm[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 65%;\n}\n.card-img-g1[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.card-img-g1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 55%;\n}\n.card-img-g2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.card-img-g2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 65%;\n}\n.card-img-g3[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.card-img-g3[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40%;\n}\n.card-img-g4[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.card-img-g4[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  width: 80%;\n}\n.card-zindex[_ngcontent-%COMP%] {\n  z-index: 5;\n}\n#g1[_ngcontent-%COMP%], #g2[_ngcontent-%COMP%], #g3[_ngcontent-%COMP%], #g4[_ngcontent-%COMP%] {\n  height: 120px;\n}\n.card-footer[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.25rem;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-top: 1px solid rgba(0, 0, 0, 0.125);\n}\n.card-footer[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #6c757d !important;\n}\n.bsync1[_ngcontent-%COMP%], .bsync2[_ngcontent-%COMP%] {\n  position: relative;\n  left: 50%;\n  border-radius: 18px;\n  border: 4px solid #f5af13;\n  margin: 0 auto !important;\n  width: auto !important;\n  z-index: 6;\n}\n.bsync1.bsync1[_ngcontent-%COMP%], .bsync2.bsync1[_ngcontent-%COMP%] {\n  top: -200px;\n}\n.bsync1.bsync2[_ngcontent-%COMP%], .bsync2.bsync2[_ngcontent-%COMP%] {\n  top: -175px;\n}\n.bsync1[_ngcontent-%COMP%]   .mat-card-content[_ngcontent-%COMP%], .bsync2[_ngcontent-%COMP%]   .mat-card-content[_ngcontent-%COMP%] {\n  line-height: 0;\n  max-width: 100px;\n}\n.bsync1-flip[_ngcontent-%COMP%]   .mat-card-content[_ngcontent-%COMP%], .bsync2-flip[_ngcontent-%COMP%]   .mat-card-content[_ngcontent-%COMP%] {\n  line-height: normal;\n  max-width: 160px;\n}\n.yellow-border[_ngcontent-%COMP%] {\n  border: 4px solid #f5af13;\n}\n#bsync1.mat-card[_ngcontent-%COMP%], #bsync2.mat-card[_ngcontent-%COMP%] {\n  padding: 4px;\n}\n.bsync-img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.py-big[_ngcontent-%COMP%] {\n  padding-top: 4rem;\n  padding-bottom: 4rem;\n}\n\n.mt-0[_ngcontent-%COMP%], .my-0[_ngcontent-%COMP%] {\n  margin-top: 0 !important;\n}\n.mr-0[_ngcontent-%COMP%], .mx-0[_ngcontent-%COMP%] {\n  margin-right: 0 !important;\n}\n.mb-0[_ngcontent-%COMP%], .my-0[_ngcontent-%COMP%] {\n  margin-bottom: 0 !important;\n}\n.ml-0[_ngcontent-%COMP%], .mx-0[_ngcontent-%COMP%] {\n  margin-left: 0 !important;\n}\n.m-1[_ngcontent-%COMP%] {\n  margin: 0.25rem !important;\n}\n.mt-1[_ngcontent-%COMP%], .my-1[_ngcontent-%COMP%] {\n  margin-top: 0.25rem !important;\n}\n.mr-1[_ngcontent-%COMP%], .mx-1[_ngcontent-%COMP%] {\n  margin-right: 0.25rem !important;\n}\n.mb-1[_ngcontent-%COMP%], .my-1[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem !important;\n}\n.ml-1[_ngcontent-%COMP%], .mx-1[_ngcontent-%COMP%] {\n  margin-left: 0.25rem !important;\n}\n.m-2[_ngcontent-%COMP%] {\n  margin: 0.5rem !important;\n}\n.mt-2[_ngcontent-%COMP%], .my-2[_ngcontent-%COMP%] {\n  margin-top: 0.5rem !important;\n}\n.mr-2[_ngcontent-%COMP%], .mx-2[_ngcontent-%COMP%] {\n  margin-right: 0.5rem !important;\n}\n.mb-2[_ngcontent-%COMP%], .my-2[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem !important;\n}\n.ml-2[_ngcontent-%COMP%], .mx-2[_ngcontent-%COMP%] {\n  margin-left: 0.5rem !important;\n}\n.m-3[_ngcontent-%COMP%] {\n  margin: 1rem !important;\n}\n.mt-3[_ngcontent-%COMP%], .my-3[_ngcontent-%COMP%] {\n  margin-top: 1rem !important;\n}\n.mr-3[_ngcontent-%COMP%], .mx-3[_ngcontent-%COMP%] {\n  margin-right: 1rem !important;\n}\n.mb-3[_ngcontent-%COMP%], .my-3[_ngcontent-%COMP%] {\n  margin-bottom: 1rem !important;\n}\n.ml-3[_ngcontent-%COMP%], .mx-3[_ngcontent-%COMP%] {\n  margin-left: 1rem !important;\n}\n.m-4[_ngcontent-%COMP%] {\n  margin: 1.5rem !important;\n}\n.mt-4[_ngcontent-%COMP%], .my-4[_ngcontent-%COMP%] {\n  margin-top: 1.5rem !important;\n}\n.mr-4[_ngcontent-%COMP%], .mx-4[_ngcontent-%COMP%] {\n  margin-right: 1.5rem !important;\n}\n.mb-4[_ngcontent-%COMP%], .my-4[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem !important;\n}\n.ml-4[_ngcontent-%COMP%], .mx-4[_ngcontent-%COMP%] {\n  margin-left: 1.5rem !important;\n}\n.m-5[_ngcontent-%COMP%] {\n  margin: 3rem !important;\n}\n.mt-5[_ngcontent-%COMP%], .my-5[_ngcontent-%COMP%] {\n  margin-top: 3rem !important;\n}\n.mr-5[_ngcontent-%COMP%], .mx-5[_ngcontent-%COMP%] {\n  margin-right: 3rem !important;\n}\n.mb-5[_ngcontent-%COMP%], .my-5[_ngcontent-%COMP%] {\n  margin-bottom: 3rem !important;\n}\n.ml-5[_ngcontent-%COMP%], .mx-5[_ngcontent-%COMP%] {\n  margin-left: 3rem !important;\n}\n.p-0[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n.pt-0[_ngcontent-%COMP%], .py-0[_ngcontent-%COMP%] {\n  padding-top: 0 !important;\n}\n.pr-0[_ngcontent-%COMP%], .px-0[_ngcontent-%COMP%] {\n  padding-right: 0 !important;\n}\n.pb-0[_ngcontent-%COMP%], .py-0[_ngcontent-%COMP%] {\n  padding-bottom: 0 !important;\n}\n.pl-0[_ngcontent-%COMP%], .px-0[_ngcontent-%COMP%] {\n  padding-left: 0 !important;\n}\n.p-1[_ngcontent-%COMP%] {\n  padding: 0.25rem !important;\n}\n.pt-1[_ngcontent-%COMP%], .py-1[_ngcontent-%COMP%] {\n  padding-top: 0.25rem !important;\n}\n.pr-1[_ngcontent-%COMP%], .px-1[_ngcontent-%COMP%] {\n  padding-right: 0.25rem !important;\n}\n.pb-1[_ngcontent-%COMP%], .py-1[_ngcontent-%COMP%] {\n  padding-bottom: 0.25rem !important;\n}\n.pl-1[_ngcontent-%COMP%], .px-1[_ngcontent-%COMP%] {\n  padding-left: 0.25rem !important;\n}\n.p-2[_ngcontent-%COMP%] {\n  padding: 0.5rem !important;\n}\n.pt-2[_ngcontent-%COMP%], .py-2[_ngcontent-%COMP%] {\n  padding-top: 0.5rem !important;\n}\n.pr-2[_ngcontent-%COMP%], .px-2[_ngcontent-%COMP%] {\n  padding-right: 0.5rem !important;\n}\n.pb-2[_ngcontent-%COMP%], .py-2[_ngcontent-%COMP%] {\n  padding-bottom: 0.5rem !important;\n}\n.pl-2[_ngcontent-%COMP%], .px-2[_ngcontent-%COMP%] {\n  padding-left: 0.5rem !important;\n}\n.p-3[_ngcontent-%COMP%] {\n  padding: 1rem !important;\n}\n.pt-3[_ngcontent-%COMP%], .py-3[_ngcontent-%COMP%] {\n  padding-top: 1rem !important;\n}\n.pr-3[_ngcontent-%COMP%], .px-3[_ngcontent-%COMP%] {\n  padding-right: 1rem !important;\n}\n.pb-3[_ngcontent-%COMP%], .py-3[_ngcontent-%COMP%] {\n  padding-bottom: 1rem !important;\n}\n.pl-3[_ngcontent-%COMP%], .px-3[_ngcontent-%COMP%] {\n  padding-left: 1rem !important;\n}\n.p-4[_ngcontent-%COMP%] {\n  padding: 1.5rem !important;\n}\n.pt-4[_ngcontent-%COMP%], .py-4[_ngcontent-%COMP%] {\n  padding-top: 1.5rem !important;\n}\n.pr-4[_ngcontent-%COMP%], .px-4[_ngcontent-%COMP%] {\n  padding-right: 1.5rem !important;\n}\n.pb-4[_ngcontent-%COMP%], .py-4[_ngcontent-%COMP%] {\n  padding-bottom: 1.5rem !important;\n}\n.pl-4[_ngcontent-%COMP%], .px-4[_ngcontent-%COMP%] {\n  padding-left: 1.5rem !important;\n}\n.p-5[_ngcontent-%COMP%] {\n  padding: 3rem !important;\n}\n.pt-5[_ngcontent-%COMP%], .py-5[_ngcontent-%COMP%] {\n  padding-top: 3rem !important;\n}\n.pr-5[_ngcontent-%COMP%], .px-5[_ngcontent-%COMP%] {\n  padding-right: 3rem !important;\n}\n.pb-5[_ngcontent-%COMP%], .py-5[_ngcontent-%COMP%] {\n  padding-bottom: 3rem !important;\n}\n.pl-5[_ngcontent-%COMP%], .px-5[_ngcontent-%COMP%] {\n  padding-left: 3rem !important;\n}\n.pl-6[_ngcontent-%COMP%], .px-6[_ngcontent-%COMP%] {\n  padding-left: 3.5rem !important;\n}\n.m-n1[_ngcontent-%COMP%] {\n  margin: -0.25rem !important;\n}\n.mt-n1[_ngcontent-%COMP%], .my-n1[_ngcontent-%COMP%] {\n  margin-top: -0.25rem !important;\n}\n.mr-n1[_ngcontent-%COMP%], .mx-n1[_ngcontent-%COMP%] {\n  margin-right: -0.25rem !important;\n}\n.mb-n1[_ngcontent-%COMP%], .my-n1[_ngcontent-%COMP%] {\n  margin-bottom: -0.25rem !important;\n}\n.ml-n1[_ngcontent-%COMP%], .mx-n1[_ngcontent-%COMP%] {\n  margin-left: -0.25rem !important;\n}\n.m-n2[_ngcontent-%COMP%] {\n  margin: -0.5rem !important;\n}\n.mt-n2[_ngcontent-%COMP%], .my-n2[_ngcontent-%COMP%] {\n  margin-top: -0.5rem !important;\n}\n.mr-n2[_ngcontent-%COMP%], .mx-n2[_ngcontent-%COMP%] {\n  margin-right: -0.5rem !important;\n}\n.mb-n2[_ngcontent-%COMP%], .my-n2[_ngcontent-%COMP%] {\n  margin-bottom: -0.5rem !important;\n}\n.ml-n2[_ngcontent-%COMP%], .mx-n2[_ngcontent-%COMP%] {\n  margin-left: -0.5rem !important;\n}\n.m-n3[_ngcontent-%COMP%] {\n  margin: -1rem !important;\n}\n.mt-n3[_ngcontent-%COMP%], .my-n3[_ngcontent-%COMP%] {\n  margin-top: -1rem !important;\n}\n.mr-n3[_ngcontent-%COMP%], .mx-n3[_ngcontent-%COMP%] {\n  margin-right: -1rem !important;\n}\n.mb-n3[_ngcontent-%COMP%], .my-n3[_ngcontent-%COMP%] {\n  margin-bottom: -1rem !important;\n}\n.ml-n3[_ngcontent-%COMP%], .mx-n3[_ngcontent-%COMP%] {\n  margin-left: -1rem !important;\n}\n.m-n4[_ngcontent-%COMP%] {\n  margin: -1.5rem !important;\n}\n.mt-n4[_ngcontent-%COMP%], .my-n4[_ngcontent-%COMP%] {\n  margin-top: -1.5rem !important;\n}\n.mr-n4[_ngcontent-%COMP%], .mx-n4[_ngcontent-%COMP%] {\n  margin-right: -1.5rem !important;\n}\n.mb-n4[_ngcontent-%COMP%], .my-n4[_ngcontent-%COMP%] {\n  margin-bottom: -1.5rem !important;\n}\n.ml-n4[_ngcontent-%COMP%], .mx-n4[_ngcontent-%COMP%] {\n  margin-left: -1.5rem !important;\n}\n.m-n5[_ngcontent-%COMP%] {\n  margin: -3rem !important;\n}\n.mt-n5[_ngcontent-%COMP%], .my-n5[_ngcontent-%COMP%] {\n  margin-top: -3rem !important;\n}\n.mr-n5[_ngcontent-%COMP%], .mx-n5[_ngcontent-%COMP%] {\n  margin-right: -3rem !important;\n}\n.mb-n5[_ngcontent-%COMP%], .my-n5[_ngcontent-%COMP%] {\n  margin-bottom: -3rem !important;\n}\n.ml-n5[_ngcontent-%COMP%], .mx-n5[_ngcontent-%COMP%] {\n  margin-left: -3rem !important;\n}\n.m-auto[_ngcontent-%COMP%] {\n  margin: auto !important;\n}\n.mt-auto[_ngcontent-%COMP%], .my-auto[_ngcontent-%COMP%] {\n  margin-top: auto !important;\n}\n.mr-auto[_ngcontent-%COMP%], .mx-auto[_ngcontent-%COMP%] {\n  margin-right: auto !important;\n}\n.mb-auto[_ngcontent-%COMP%], .my-auto[_ngcontent-%COMP%] {\n  margin-bottom: auto !important;\n}\n.ml-auto[_ngcontent-%COMP%], .mx-auto[_ngcontent-%COMP%] {\n  margin-left: auto !important;\n}\n.pt-10[_ngcontent-%COMP%] {\n  padding-top: 6rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2dyYXBoaWMuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMvX3RoZW1lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFERjtBQUdFO0VBQ0UsYUFBQTtBQURKO0FBS0E7RUFDRSxnQkFBQTtFQUNBLFNBQUE7QUFGRjtBQUtBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBRkY7QUFLQTtFQUNFLGdCQUFBO0FBRkY7QUFLQTtFQUNFLGNBQUE7QUFGRjtBQUtBO0VBQ0UsY0FBQTtBQUZGO0FBS0E7RUFDRSxjQUFBO0FBRkY7QUFLQTtFQUNFLGNBQUE7QUFGRjtBQUtBO0VBQ0UsY0FBQTtBQUZGO0FBS0E7RUFDRSxXQUFBO0FBRkY7QUFLQTtFQUNFLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUZGO0FBTUE7RUFDRSxrQkFBQTtBQUhGO0FBTUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUhGO0FBTUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUFIRjtBQU1BO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUFIRjtBQU1BO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUFIRjtBQU1BO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFIRjtBQUtBO0VBQ0UsV0FBQTtFQUNBLDJEQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBRkY7QUFLQTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBRkY7QUFLQTtFQUNFLFdBQUE7RUFDQSx3REFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQUZGO0FBS0E7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUZGO0FBS0E7RUFDRSxXQUFBO0VBQ0Esb0RBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUFGRjtBQUtBO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFGRjtBQUtBO0VBQ0UsV0FBQTtFQUNBLHVEQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FBRkY7QUFLQTtFQUNFLGdDQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtBQUZGO0FBS0E7RUFDRSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtBQUZGO0FBS0E7RUFDRSxvQkFBQTtBQUZGO0FBS0E7RUFDRSwwQkFBQTtBQUZGO0FBS0E7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUZGO0FBU0E7RUFDRSx5QkFBQTtBQU5GO0FBUUU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQU5KO0FBVUE7RUFDRSxtQkFBQTtFQUNBLFdBQUE7QUFQRjtBQVVBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FBUEY7QUFVQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQVBGO0FBVUE7RUFDRSx5QkNwT087RURxT1AsV0FBQTtBQVBGO0FBVUE7RUFDRSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtBQVBGO0FBVUE7RUFDRSx5QkFBQTtBQVBGO0FBVUU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQVJKO0FBV0U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFUSjtBQWNBO0VBQ0UsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7QUFYRjtBQWNBO0VBQ0UseUJBQUE7QUFYRjtBQWNFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFaSjtBQWlCQTtFQUNFLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0FBZEY7QUFpQkE7RUFDRSx5QkFBQTtBQWRGO0FBZ0JFO0VBQ0UscUVDblNjO0VEb1NkLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBZEo7QUFrQkE7RUFDRSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtBQWZGO0FBa0JBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFmRjtBQWtCQTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtBQWZGO0FBa0JBO0VBQ0UsV0FBQTtBQWZGO0FBa0JBO0VBQ0UsVUFBQTtBQWZGO0FBa0JBO0VBQ0UsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFmRjtBQWtCQTtFQUNFLFdBQUE7QUFmRjtBQWtCQTtFQUNFLHFCQUFBO0FBZkY7QUFrQkE7RUFDRSxrQkFBQTtBQWZGO0FBa0JBO0VBQ0UsVUFBQTtBQWZGO0FBa0JBO0VBQ0UsVUFBQTtBQWZGO0FBa0JBO0VBQ0UsVUFBQTtBQWZGO0FBa0JBO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0FBZkY7QUFrQkE7RUFDRSxrQkFBQTtBQWZGO0FBaUJFO0VBQ0UsVUFBQTtBQWZKO0FBbUJBO0VBQ0Usa0JBQUE7QUFoQkY7QUFrQkU7RUFDRSxVQUFBO0FBaEJKO0FBb0JBO0VBQ0Usa0JBQUE7QUFqQkY7QUFtQkU7RUFDRSxVQUFBO0FBakJKO0FBcUJBO0VBQ0Usa0JBQUE7QUFsQkY7QUFvQkU7RUFDRSxVQUFBO0FBbEJKO0FBc0JBO0VBQ0Usa0JBQUE7QUFuQkY7QUFxQkU7RUFDRSxpQkFBQTtFQUNBLFVBQUE7QUFuQko7QUF1QkE7RUFDRSxVQUFBO0FBcEJGO0FBdUJBO0VBQ0UsYUFBQTtBQXBCRjtBQXVCQTtFQUNFLHdCQUFBO0VBQ0EscUNBQUE7RUFDQSwwQ0FBQTtBQXBCRjtBQXVCQTtFQUNFLDBEQUFBO0FBcEJGO0FBdUJBO0VBQ0UseUJBQUE7QUFwQkY7QUEwQkE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QUF2QkY7QUF5QkU7RUFDRSxXQUFBO0FBdkJKO0FBeUJFO0VBQ0UsV0FBQTtBQXZCSjtBQTBCRTtFQUNFLGNBQUE7RUFDQSxnQkFyQlM7QUFIYjtBQTZCRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBM0JpQjtBQUNyQjtBQThCQTtFQUNFLHlCQUFBO0FBM0JGO0FBZ0NFO0VBQ0UsWUFBQTtBQTdCSjtBQWlDQTtFQUNFLFdBQUE7QUE5QkY7QUFpQ0E7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FBOUJGO0FBaUNBLDBDQUFBO0FBQ0E7O0VBRUUsd0JBQUE7QUE5QkY7QUFpQ0E7O0VBRUUsMEJBQUE7QUE5QkY7QUFpQ0E7O0VBRUUsMkJBQUE7QUE5QkY7QUFpQ0E7O0VBRUUseUJBQUE7QUE5QkY7QUFpQ0E7RUFDRSwwQkFBQTtBQTlCRjtBQWlDQTs7RUFFRSw4QkFBQTtBQTlCRjtBQWlDQTs7RUFFRSxnQ0FBQTtBQTlCRjtBQWlDQTs7RUFFRSxpQ0FBQTtBQTlCRjtBQWlDQTs7RUFFRSwrQkFBQTtBQTlCRjtBQWlDQTtFQUNFLHlCQUFBO0FBOUJGO0FBaUNBOztFQUVFLDZCQUFBO0FBOUJGO0FBaUNBOztFQUVFLCtCQUFBO0FBOUJGO0FBaUNBOztFQUVFLGdDQUFBO0FBOUJGO0FBaUNBOztFQUVFLDhCQUFBO0FBOUJGO0FBaUNBO0VBQ0UsdUJBQUE7QUE5QkY7QUFpQ0E7O0VBRUUsMkJBQUE7QUE5QkY7QUFpQ0E7O0VBRUUsNkJBQUE7QUE5QkY7QUFpQ0E7O0VBRUUsOEJBQUE7QUE5QkY7QUFpQ0E7O0VBRUUsNEJBQUE7QUE5QkY7QUFpQ0E7RUFDRSx5QkFBQTtBQTlCRjtBQWlDQTs7RUFFRSw2QkFBQTtBQTlCRjtBQWlDQTs7RUFFRSwrQkFBQTtBQTlCRjtBQWlDQTs7RUFFRSxnQ0FBQTtBQTlCRjtBQWlDQTs7RUFFRSw4QkFBQTtBQTlCRjtBQWlDQTtFQUNFLHVCQUFBO0FBOUJGO0FBaUNBOztFQUVFLDJCQUFBO0FBOUJGO0FBaUNBOztFQUVFLDZCQUFBO0FBOUJGO0FBaUNBOztFQUVFLDhCQUFBO0FBOUJGO0FBaUNBOztFQUVFLDRCQUFBO0FBOUJGO0FBaUNBO0VBQ0UscUJBQUE7QUE5QkY7QUFpQ0E7O0VBRUUseUJBQUE7QUE5QkY7QUFpQ0E7O0VBRUUsMkJBQUE7QUE5QkY7QUFpQ0E7O0VBRUUsNEJBQUE7QUE5QkY7QUFpQ0E7O0VBRUUsMEJBQUE7QUE5QkY7QUFpQ0E7RUFDRSwyQkFBQTtBQTlCRjtBQWlDQTs7RUFFRSwrQkFBQTtBQTlCRjtBQWlDQTs7RUFFRSxpQ0FBQTtBQTlCRjtBQWlDQTs7RUFFRSxrQ0FBQTtBQTlCRjtBQWlDQTs7RUFFRSxnQ0FBQTtBQTlCRjtBQWlDQTtFQUNFLDBCQUFBO0FBOUJGO0FBaUNBOztFQUVFLDhCQUFBO0FBOUJGO0FBaUNBOztFQUVFLGdDQUFBO0FBOUJGO0FBaUNBOztFQUVFLGlDQUFBO0FBOUJGO0FBaUNBOztFQUVFLCtCQUFBO0FBOUJGO0FBaUNBO0VBQ0Usd0JBQUE7QUE5QkY7QUFpQ0E7O0VBRUUsNEJBQUE7QUE5QkY7QUFpQ0E7O0VBRUUsOEJBQUE7QUE5QkY7QUFpQ0E7O0VBRUUsK0JBQUE7QUE5QkY7QUFpQ0E7O0VBRUUsNkJBQUE7QUE5QkY7QUFpQ0E7RUFDRSwwQkFBQTtBQTlCRjtBQWlDQTs7RUFFRSw4QkFBQTtBQTlCRjtBQWlDQTs7RUFFRSxnQ0FBQTtBQTlCRjtBQWlDQTs7RUFFRSxpQ0FBQTtBQTlCRjtBQWlDQTs7RUFFRSwrQkFBQTtBQTlCRjtBQWlDQTtFQUNFLHdCQUFBO0FBOUJGO0FBaUNBOztFQUVFLDRCQUFBO0FBOUJGO0FBaUNBOztFQUVFLDhCQUFBO0FBOUJGO0FBaUNBOztFQUVFLCtCQUFBO0FBOUJGO0FBaUNBOztFQUVFLDZCQUFBO0FBOUJGO0FBa0NBOztFQUVFLCtCQUFBO0FBL0JGO0FBa0NBO0VBQ0UsMkJBQUE7QUEvQkY7QUFrQ0E7O0VBRUUsK0JBQUE7QUEvQkY7QUFrQ0E7O0VBRUUsaUNBQUE7QUEvQkY7QUFrQ0E7O0VBRUUsa0NBQUE7QUEvQkY7QUFrQ0E7O0VBRUUsZ0NBQUE7QUEvQkY7QUFrQ0E7RUFDRSwwQkFBQTtBQS9CRjtBQWtDQTs7RUFFRSw4QkFBQTtBQS9CRjtBQWtDQTs7RUFFRSxnQ0FBQTtBQS9CRjtBQWtDQTs7RUFFRSxpQ0FBQTtBQS9CRjtBQWtDQTs7RUFFRSwrQkFBQTtBQS9CRjtBQWtDQTtFQUNFLHdCQUFBO0FBL0JGO0FBa0NBOztFQUVFLDRCQUFBO0FBL0JGO0FBa0NBOztFQUVFLDhCQUFBO0FBL0JGO0FBa0NBOztFQUVFLCtCQUFBO0FBL0JGO0FBa0NBOztFQUVFLDZCQUFBO0FBL0JGO0FBa0NBO0VBQ0UsMEJBQUE7QUEvQkY7QUFrQ0E7O0VBRUUsOEJBQUE7QUEvQkY7QUFrQ0E7O0VBRUUsZ0NBQUE7QUEvQkY7QUFrQ0E7O0VBRUUsaUNBQUE7QUEvQkY7QUFrQ0E7O0VBRUUsK0JBQUE7QUEvQkY7QUFrQ0E7RUFDRSx3QkFBQTtBQS9CRjtBQWtDQTs7RUFFRSw0QkFBQTtBQS9CRjtBQWtDQTs7RUFFRSw4QkFBQTtBQS9CRjtBQWtDQTs7RUFFRSwrQkFBQTtBQS9CRjtBQWtDQTs7RUFFRSw2QkFBQTtBQS9CRjtBQWtDQTtFQUNFLHVCQUFBO0FBL0JGO0FBa0NBOztFQUVFLDJCQUFBO0FBL0JGO0FBa0NBOztFQUVFLDZCQUFBO0FBL0JGO0FBa0NBOztFQUVFLDhCQUFBO0FBL0JGO0FBa0NBOztFQUVFLDRCQUFBO0FBL0JGO0FBa0NBO0VBQ0UsNEJBQUE7QUEvQkYiLCJmaWxlIjoiZ3JhcGhpYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ0aGVtZVwiO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgJjo6bmctZGVlcCBbaGlkZGVuXSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4uYnJlYWsge1xuICBmbGV4LWJhc2lzOiAxMDAlO1xuICBoZWlnaHQ6IDA7XG59XG5cbi5tYXQtY2FyZC1jb250ZW50IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4ubWF0LWNhcmQtZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLmNvbG9yLTEge1xuICBjb2xvcjogbnRoKCRjb2xvcnMsIDEpO1xufVxuXG4uY29sb3ItMiB7XG4gIGNvbG9yOiBudGgoJGNvbG9ycywgMik7XG59XG5cbi5jb2xvci0zIHtcbiAgY29sb3I6IG50aCgkY29sb3JzLCAzKTtcbn1cblxuLmNvbG9yLTQge1xuICBjb2xvcjogbnRoKCRjb2xvcnMsIDQpO1xufVxuXG4uY29sb3ItNSB7XG4gIGNvbG9yOiBudGgoJGNvbG9ycywgNSk7XG59XG5cbi53aGl0ZSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uaGVhZGVyIHtcbiAgcGFkZGluZzo1cHggMTBweCA1cHggMTBweDtcbiAgYWxpZ24tc2VsZjogZmxleC1jZW50ZXI7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3BhY2l0eTogMTtcbiAgcGFkZGluZy10b3A6IDEuN3JlbTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblxufVxuXG4uaGVhZGVyMSwgLmhlYWRlcjIsIC5oZWFkZXIzLCAuaGVhZGVyNCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNvbC1oZWFkaW5nIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmFycm93IHtcbiAgd2lkdGg6IDMuNXJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uYXJyb3cxIHtcbiAgbGVmdDogMTdyZW07XG4gIHRvcDogMy43cmVtO1xufVxuXG4uYXJyb3cyLCAuYXJyb3czIHtcbiAgdG9wOiAyLjhyZW07XG4gIGxlZnQ6IDE3cmVtO1xufVxuXG4uY29sLWJrZ25kLTEge1xuICBtYXJnaW46IDBweCAwcHggNXB4IDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyBcbiAgaGVpZ2h0OiA1dmg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jb2wtYmtnbmQtMTo6YmVmb3JlIHsgICAgXG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZGlhZ3JhbS1pbWFnZXMtZGF0YS1jb2xsZWN0aW9uLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgb3BhY2l0eTogMC41MDtcbn1cblxuLmNvbC1ia2duZC0yIHtcbiAgbWFyZ2luOiAwcHggMHB4IDVweCAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgXG4gIGhlaWdodDo1dmg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbC1ia2duZC0yOjpiZWZvcmUgeyAgICBcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9kaWFncmFtLWhlYWRlci1tYW5hZy1jb21wbGkuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICByaWdodDogMHB4O1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMHB4O1xuICBvcGFjaXR5OiAwLjc1O1xufVxuXG4uY29sLWJrZ25kLTMge1xuICBtYXJnaW46IDBweCAwcHggNXB4IDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyBcbiAgaGVpZ2h0OiA1dmg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbC1ia2duZC0zOjpiZWZvcmUgeyAgICBcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9kaWFncmFtLWhlYWRlci1hbmFseXNpcy5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIG9wYWNpdHk6IDAuNzU7XG59XG5cbi5jb2wtYmtnbmQtNCB7XG4gIG1hcmdpbjogMHB4IDBweCA1cHggMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IFxuICBoZWlnaHQ6IDV2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29sLWJrZ25kLTQ6OmJlZm9yZSB7ICAgIFxuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL291dGNvbWVzLWhlYWRlci1iYWNrZ3JvdW5kLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgb3BhY2l0eTogMC43NTtcbn1cblxuLnNtLXNwYyB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbTtcbiAgcGFkZGluZy10b3A6IDAuMjVyZW07XG59XG5cbi5jb2wtbGluZS0xIHtcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICMzQjg4QUY7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA3MHB4KTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY29sLXBhZCB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4uY29sLWxpbmUtd2hpdGUge1xuICBib3JkZXItdG9wOiA0cHggc29saWQgI0ZmZjtcbn1cblxuLmNvbC10aXRsZSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuJGNvbFBhZDogNDA7XG4kY29sQnN5bmNQYWQ6IDExMDtcbiRob3ZlckNvbG9yOiAjN2FiMGNjO1xuXG4uY29sLXR5cGUtMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzQjg4QUY7XG5cbiAgLm1hdC1jYXJkIHtcbiAgICBtYXJnaW4tbGVmdDogJGNvbFBhZCArIHB4O1xuICAgIG1hcmdpbi1yaWdodDogJGNvbFBhZCArIHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5idG4tdHlwZS0xIHtcbiAgYmFja2dyb3VuZDogIzNCODhBRjtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5idG4tdHlwZS0yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyNDg4MDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5idG4tdHlwZS0zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ3ODY2MjtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5idG4tdHlwZS01IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5jb2wtbGluZS0yIHtcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICMwMjQ4ODA7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA3MHB4KTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY29sLXR5cGUtMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjQ4ODA7XG5cbiAgXG4gIC5tYXQtY2FyZCB7XG4gICAgbWFyZ2luLWxlZnQ6ICRjb2xQYWQgKyBweDtcbiAgICBtYXJnaW4tcmlnaHQ6ICRjb2xQYWQgKyBweDtcbiAgICB3aWR0aDogODAlO1xuICB9XG5cbiAgI3VuZGVyLXNlZWQge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuIFxufVxuXG4uY29sLWxpbmUtMyB7XG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCAjNDc4NjYyO1xuICB3aWR0aDogY2FsYygxMDAlIC0gNzBweCk7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmNvbC10eXBlLTMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc4NjYyO1xuXG4gIFxuICAubWF0LWNhcmQge1xuICAgIG1hcmdpbi1sZWZ0OiAkY29sUGFkICsgcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAkY29sUGFkICsgcHg7IFxuICAgIHdpZHRoOjgwJTtcbiAgfVxuXG59XG5cbi5jb2wtbGluZS00IHtcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICMwOTRGNTg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA3MHB4KTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY29sLXR5cGUtNCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwOTRGNTg7XG5cbiAgLm1hdC1jYXJkIHtcbiAgICBmb250LWZhbWlseTogJHJvYm90b0NvbmRlbnNlZDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE0cHg7IFxuICAgIC8qd2lkdGg6IDEwMCU7Ki9cbiAgfVxufVxuXG4uY29sLWxpbmUtNSB7XG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCAkb3JhbmdlO1xuICB3aWR0aDogY2FsYygxMDAlIC0gNzBweCk7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmhvbWUtbmF2IHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uaG9tZS1uYXY6aG92ZXIge1xuICBjb2xvcjogI0VFRTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY2FyZC1pbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNhcmQtaW1nLTNwIHtcbiAgd2lkdGg6IDcwJTtcbn1cblxuLnRleHQtM3Age1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM0NTQ0NDQ7XG59XG5cbi5jYXJkLWltZy0yIHtcbiAgd2lkdGg6IDExMCU7XG59XG5cbi5jYXJkLW1hcmdpbiB7XG4gIG1hcmdpbi1ib3R0b206IDMuNXJlbTtcbn1cblxuLmltZy1jdHIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJkLWltZy1jc3JzIHtcbiAgd2lkdGg6IDY1JTtcbn1cblxuLmNhcmQtaW1nLWFzIHtcbiAgd2lkdGg6IDcwJTtcbn1cblxuLmNhcmQtaW1nLWF0IHtcbiAgd2lkdGg6IDgwJTtcbn1cblxuLmNhcmQtaW1nLWJldHRlciB7XG4gIHdpZHRoOiA3NSU7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbi5jYXJkLWltZy1zbSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBpbWcge1xuICAgIHdpZHRoOiA2NSU7XG4gIH1cbn1cblxuLmNhcmQtaW1nLWcxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDU1JTtcbiAgfVxufVxuXG4uY2FyZC1pbWctZzIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDo2NSU7XG4gIH1cbn1cblxuLmNhcmQtaW1nLWczIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDQwJTtcbiAgfVxufVxuXG4uY2FyZC1pbWctZzQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgaW1nIHtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICB3aWR0aDogODAlO1xuICB9XG59XG5cbi5jYXJkLXppbmRleCB7XG4gIHotaW5kZXg6IDU7XG59XG5cbiNnMSwgI2cyLCAjZzMsICNnNCB7XG4gIGhlaWdodDogMTIwcHg7XG59XG5cbi5jYXJkLWZvb3RlciB7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMS4yNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjAzKTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xufVxuXG4uY2FyZC1mb290ZXI6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCBjYWxjKDAuMjVyZW0gLSAxcHgpIGNhbGMoMC4yNXJlbSAtIDFweCk7XG59XG5cbi50ZXh0LW11dGVkIHtcbiAgY29sb3I6ICM2Yzc1N2QgIWltcG9ydGFudDtcbn1cblxuJGJzeW5jV2lkdGg6IDEwMHB4O1xuJGJzeW5jRXhwYW5kZWRXaWR0aDogMTYwcHg7XG5cbi5ic3luYzEsIC5ic3luYzIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgYm9yZGVyOiA0cHggc29saWQgJG9yYW5nZTtcbiAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgei1pbmRleDogNjtcblxuICAmLmJzeW5jMSB7XG4gICAgdG9wOiAtMjAwcHg7XG4gIH1cbiAgJi5ic3luYzIge1xuICAgIHRvcDogLTE3NXB4O1xuICB9XG5cbiAgLm1hdC1jYXJkLWNvbnRlbnQge1xuICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgIG1heC13aWR0aDogJGJzeW5jV2lkdGg7XG4gIH1cbn1cblxuLmJzeW5jMS1mbGlwLCAuYnN5bmMyLWZsaXAge1xuICAubWF0LWNhcmQtY29udGVudCB7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICBtYXgtd2lkdGg6ICRic3luY0V4cGFuZGVkV2lkdGg7XG4gIH1cbn1cblxuLnllbGxvdy1ib3JkZXIge1xuICBib3JkZXI6IDRweCBzb2xpZCAkb3JhbmdlO1xufVxuXG5cbiNic3luYzEsICNic3luYzIge1xuICAmLm1hdC1jYXJkIHtcbiAgICBwYWRkaW5nOiA0cHg7XG4gIH1cbn1cblxuLmJzeW5jLWltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucHktYmlnIHtcbiAgcGFkZGluZy10b3A6ICA0cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogNHJlbTtcbn1cblxuLyogQk9PVFNUUkFQNSBtYXJnaW4gYW5kIHBhZGRpbmcgY2xhc3NlcyAqL1xuLm10LTAsXG4ubXktMCB7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbn1cblxuLm1yLTAsXG4ubXgtMCB7XG4gIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xufVxuXG4ubWItMCxcbi5teS0wIHtcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuXG4ubWwtMCxcbi5teC0wIHtcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbn1cblxuLm0tMSB7XG4gIG1hcmdpbjogMC4yNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubXQtMSxcbi5teS0xIHtcbiAgbWFyZ2luLXRvcDogMC4yNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubXItMSxcbi5teC0xIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tYi0xLFxuLm15LTEge1xuICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tbC0xLFxuLm14LTEge1xuICBtYXJnaW4tbGVmdDogMC4yNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubS0yIHtcbiAgbWFyZ2luOiAwLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm10LTIsXG4ubXktMiB7XG4gIG1hcmdpbi10b3A6IDAuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubXItMixcbi5teC0yIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm1iLTIsXG4ubXktMiB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubWwtMixcbi5teC0yIHtcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubS0zIHtcbiAgbWFyZ2luOiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tdC0zLFxuLm15LTMge1xuICBtYXJnaW4tdG9wOiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tci0zLFxuLm14LTMge1xuICBtYXJnaW4tcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcbn1cblxuLm1iLTMsXG4ubXktMyB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcbn1cblxuLm1sLTMsXG4ubXgtMyB7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tLTQge1xuICBtYXJnaW46IDEuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubXQtNCxcbi5teS00IHtcbiAgbWFyZ2luLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tci00LFxuLm14LTQge1xuICBtYXJnaW4tcmlnaHQ6IDEuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubWItNCxcbi5teS00IHtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tbC00LFxuLm14LTQge1xuICBtYXJnaW4tbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tLTUge1xuICBtYXJnaW46IDNyZW0gIWltcG9ydGFudDtcbn1cblxuLm10LTUsXG4ubXktNSB7XG4gIG1hcmdpbi10b3A6IDNyZW0gIWltcG9ydGFudDtcbn1cblxuLm1yLTUsXG4ubXgtNSB7XG4gIG1hcmdpbi1yaWdodDogM3JlbSAhaW1wb3J0YW50O1xufVxuXG4ubWItNSxcbi5teS01IHtcbiAgbWFyZ2luLWJvdHRvbTogM3JlbSAhaW1wb3J0YW50O1xufVxuXG4ubWwtNSxcbi5teC01IHtcbiAgbWFyZ2luLWxlZnQ6IDNyZW0gIWltcG9ydGFudDtcbn1cblxuLnAtMCB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuLnB0LTAsXG4ucHktMCB7XG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5wci0wLFxuLnB4LTAge1xuICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG59XG5cbi5wYi0wLFxuLnB5LTAge1xuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuXG4ucGwtMCxcbi5weC0wIHtcbiAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG59XG5cbi5wLTEge1xuICBwYWRkaW5nOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wdC0xLFxuLnB5LTEge1xuICBwYWRkaW5nLXRvcDogMC4yNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucHItMSxcbi5weC0xIHtcbiAgcGFkZGluZy1yaWdodDogMC4yNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucGItMSxcbi5weS0xIHtcbiAgcGFkZGluZy1ib3R0b206IDAuMjVyZW0gIWltcG9ydGFudDtcbn1cblxuLnBsLTEsXG4ucHgtMSB7XG4gIHBhZGRpbmctbGVmdDogMC4yNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucC0yIHtcbiAgcGFkZGluZzogMC41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wdC0yLFxuLnB5LTIge1xuICBwYWRkaW5nLXRvcDogMC41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wci0yLFxuLnB4LTIge1xuICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLnBiLTIsXG4ucHktMiB7XG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLnBsLTIsXG4ucHgtMiB7XG4gIHBhZGRpbmctbGVmdDogMC41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wLTMge1xuICBwYWRkaW5nOiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wdC0zLFxuLnB5LTMge1xuICBwYWRkaW5nLXRvcDogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucHItMyxcbi5weC0zIHtcbiAgcGFkZGluZy1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucGItMyxcbi5weS0zIHtcbiAgcGFkZGluZy1ib3R0b206IDFyZW0gIWltcG9ydGFudDtcbn1cblxuLnBsLTMsXG4ucHgtMyB7XG4gIHBhZGRpbmctbGVmdDogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucC00IHtcbiAgcGFkZGluZzogMS41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wdC00LFxuLnB5LTQge1xuICBwYWRkaW5nLXRvcDogMS41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wci00LFxuLnB4LTQge1xuICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLnBiLTQsXG4ucHktNCB7XG4gIHBhZGRpbmctYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLnBsLTQsXG4ucHgtNCB7XG4gIHBhZGRpbmctbGVmdDogMS41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wLTUge1xuICBwYWRkaW5nOiAzcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wdC01LFxuLnB5LTUge1xuICBwYWRkaW5nLXRvcDogM3JlbSAhaW1wb3J0YW50O1xufVxuXG4ucHItNSxcbi5weC01IHtcbiAgcGFkZGluZy1yaWdodDogM3JlbSAhaW1wb3J0YW50O1xufVxuXG4ucGItNSxcbi5weS01IHtcbiAgcGFkZGluZy1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcbn1cblxuLnBsLTUsXG4ucHgtNSB7XG4gIHBhZGRpbmctbGVmdDogM3JlbSAhaW1wb3J0YW50O1xufVxuXG5cbi5wbC02LFxuLnB4LTYge1xuICBwYWRkaW5nLWxlZnQ6IDMuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubS1uMSB7XG4gIG1hcmdpbjogLTAuMjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm10LW4xLFxuLm15LW4xIHtcbiAgbWFyZ2luLXRvcDogLTAuMjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm1yLW4xLFxuLm14LW4xIHtcbiAgbWFyZ2luLXJpZ2h0OiAtMC4yNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubWItbjEsXG4ubXktbjEge1xuICBtYXJnaW4tYm90dG9tOiAtMC4yNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubWwtbjEsXG4ubXgtbjEge1xuICBtYXJnaW4tbGVmdDogLTAuMjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm0tbjIge1xuICBtYXJnaW46IC0wLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm10LW4yLFxuLm15LW4yIHtcbiAgbWFyZ2luLXRvcDogLTAuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubXItbjIsXG4ubXgtbjIge1xuICBtYXJnaW4tcmlnaHQ6IC0wLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm1iLW4yLFxuLm15LW4yIHtcbiAgbWFyZ2luLWJvdHRvbTogLTAuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubWwtbjIsXG4ubXgtbjIge1xuICBtYXJnaW4tbGVmdDogLTAuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubS1uMyB7XG4gIG1hcmdpbjogLTFyZW0gIWltcG9ydGFudDtcbn1cblxuLm10LW4zLFxuLm15LW4zIHtcbiAgbWFyZ2luLXRvcDogLTFyZW0gIWltcG9ydGFudDtcbn1cblxuLm1yLW4zLFxuLm14LW4zIHtcbiAgbWFyZ2luLXJpZ2h0OiAtMXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubWItbjMsXG4ubXktbjMge1xuICBtYXJnaW4tYm90dG9tOiAtMXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubWwtbjMsXG4ubXgtbjMge1xuICBtYXJnaW4tbGVmdDogLTFyZW0gIWltcG9ydGFudDtcbn1cblxuLm0tbjQge1xuICBtYXJnaW46IC0xLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm10LW40LFxuLm15LW40IHtcbiAgbWFyZ2luLXRvcDogLTEuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubXItbjQsXG4ubXgtbjQge1xuICBtYXJnaW4tcmlnaHQ6IC0xLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm1iLW40LFxuLm15LW40IHtcbiAgbWFyZ2luLWJvdHRvbTogLTEuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubWwtbjQsXG4ubXgtbjQge1xuICBtYXJnaW4tbGVmdDogLTEuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubS1uNSB7XG4gIG1hcmdpbjogLTNyZW0gIWltcG9ydGFudDtcbn1cblxuLm10LW41LFxuLm15LW41IHtcbiAgbWFyZ2luLXRvcDogLTNyZW0gIWltcG9ydGFudDtcbn1cblxuLm1yLW41LFxuLm14LW41IHtcbiAgbWFyZ2luLXJpZ2h0OiAtM3JlbSAhaW1wb3J0YW50O1xufVxuXG4ubWItbjUsXG4ubXktbjUge1xuICBtYXJnaW4tYm90dG9tOiAtM3JlbSAhaW1wb3J0YW50O1xufVxuXG4ubWwtbjUsXG4ubXgtbjUge1xuICBtYXJnaW4tbGVmdDogLTNyZW0gIWltcG9ydGFudDtcbn1cblxuLm0tYXV0byB7XG4gIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xufVxuXG4ubXQtYXV0byxcbi5teS1hdXRvIHtcbiAgbWFyZ2luLXRvcDogYXV0byAhaW1wb3J0YW50O1xufVxuXG4ubXItYXV0byxcbi5teC1hdXRvIHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5tYi1hdXRvLFxuLm15LWF1dG8ge1xuICBtYXJnaW4tYm90dG9tOiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5tbC1hdXRvLFxuLm14LWF1dG8ge1xuICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xufVxuXG4ucHQtMTAge1xuICBwYWRkaW5nLXRvcDogNnJlbSAhaW1wb3J0YW50O1xufVxuIiwiJHJvYm90b0NvbmRlbnNlZDogXCJSb2JvdG8gQ29uZGVuc2VkXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuXG4kbWF4V2lkdGg6IDEyMDBweDtcblxuJHBhZDogMjZweDtcblxuJGJsdWVHcmF5OiAjNmU4NTkxO1xuJGdyYXk6ICNlZWU7XG4kb3JhbmdlOiAjZjVhZjEzO1xuXG4kY29sb3JzOlxuICAjM2I4OGFmXG4gICMwMjQ4ODBcbiAgIzQ3ODY2MlxuICAjMDk0ZjU4XG4gICRvcmFuZ2U7XG5cbiRob3Zlck9wYWNpdHk6IDAuODtcbiJdfQ== */"] });


/***/ }),

/***/ "1qPM":
/*!***************************************************************************************!*\
  !*** ./src/app/tools-overview/data-standardization/data-standardization.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DataStandardizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStandardizationComponent", function() { return DataStandardizationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/shared.service */ "wbvY");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






const cards = ['good', 'better', 'best'];
class DataStandardizationComponent {
    constructor(sharedService) {
        this.sharedService = sharedService;
        this.cardStatus = {};
    }
    toggleCard(card) {
        if (this.cardStatus[card]) {
            this.cardStatus[card] = false;
        }
        else {
            this.cardStatus[card] = true;
            //cards.forEach(currentCard => {
            //  this.cardStatus[currentCard] = card === currentCard;
            //});
        }
    }
}
DataStandardizationComponent.ɵfac = function DataStandardizationComponent_Factory(t) { return new (t || DataStandardizationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"])); };
DataStandardizationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataStandardizationComponent, selectors: [["ng-component"]], decls: 68, vars: 6, consts: [[1, "mt-3", "mx-5"], [1, "mat-h2", "mb-4"], [1, "bold"], ["src", "assets/images/arrow-good-better.png", "alt", "arrow left to right from good to best"], ["fxLayout", "row", "fxLayoutAlign", "space-between stretch", 1, "mt-2"], ["fxFlex", "33%"], ["id", "good", 1, "card-good", "mr-2", 3, "click"], [3, "hidden"], ["fxLayoutAlign", "center center"], ["src", "assets/images/bedes_logo-white.png", "alt", "BEDES Logo", 1, "data-card"], [1, "py-5", "align-center", "bold"], [1, "align-center", "bold"], [1, "card-text"], ["routerLink", "../bedes", "mat-raised-button", "", "role", "button", 1, "btn", 3, "click"], ["id", "better", 1, "card-better", "mr-2", 3, "click"], ["src", "assets/images/bldgsync-logo-white.png", "alt", "BuildingSync Logo", 1, "data-card"], ["routerLink", "../building-sync", "mat-raised-button", "", "role", "button", 1, "btn", 3, "click"], ["id", "best", 1, "card-best", 3, "click"], ["src", "assets/images/audit-template-logo-white.png", "alt", "Audit Template Logo", 1, "data-card"], [1, "bold", "align-center"], ["routerLink", "../audit-template", "mat-raised-button", "", "role", "button", 1, "btn", 3, "click"]], template: function DataStandardizationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Data Standardization: The Foundation of a Building Performance Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\"Standardization\" is the process of bringing building energy efficiency data into a common format, making it much easier to collect, store, analyze, and share. Use the navigator below to learn more about the tiers of data standardization.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Why standardize your data?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Keeping your building data with common terms or in a common format makes it much easier to collect, store, analyze, visualize, and share with partners to reach your programmatic goals. Start with BEDES to standardize your terms or field names, BuildingSync to give some structure to your data, or consider using Audit Template for full end-to-end standardization of your building asset and performance data. Standardizing your data saves time, money, and headache over the lifetime of your program. Use the navigator below to learn more about each tier of data standardization.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataStandardizationComponent_Template_mat_card_click_12_listener() { return ctx.toggleCard("good"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-content", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Use Standard Data Terms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card-content", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Standardize Data Terms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "If you\u2019re not ready to adopt a standard audit reporting tool or file format, we recommend that jurisdictions and auditors use common data terms in their systems. This is the most basic level of standardization.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "The Building Energy Data Exchange Specification (BEDES) contains over 600 building energy terms developed by DOE and the Lawrence Berkeley National Laboratory (LBNL). Using BEDES terms is a very simple way to improve data quality, enabling you to do more in less time.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataStandardizationComponent_Template_a_click_26_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Learn more about BEDES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-card", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataStandardizationComponent_Template_mat_card_click_29_listener() { return ctx.toggleCard("better"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-card-content", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Use a Standard File Format");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-card-content", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Standardize File Formats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "If you\u2019re not ready to adopt a single reporting tool like Audit Template, we recommend that jurisdictions and auditors use tools that can export data in a standard format like BuildingSync. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "BuildingSync is a language built on top of the BEDES dictionary used to describe buildings in a way that computers can understand. It provides a way to share building and audit information so that it\u2019s easier to give to other people and ensures that information will be just as usable ten years from now as it is today.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "BuildingSync is what enables Audit Template, Asset Score, SEED, and many other applications to work with BPS-related data so well.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataStandardizationComponent_Template_a_click_45_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Learn more about BuildingSync");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-card", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataStandardizationComponent_Template_mat_card_click_48_listener() { return ctx.toggleCard("best"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-card-content", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Use a Standard Tool");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-card-content", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h3", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Standardize Data Collection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Using a single tool like Audit Template to collect data is the easiest and most effective way to standardize data. This approach maximizes the value, persistence, usability and portability of audit data.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Auditors can use a mobile app to submit data using one of several ASHRAE-standard or custom reporting templates. Program administrators access a City Dashboard to monitor submissions, verify data, and download reports. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Because Audit Template uses the BuildingSync file format, audit data is future-proof and easily shared with those who need it. You can even generate an Asset Score report with cost-effective upgrade recommendations and a 1-10 overall efficiency rating. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "We recommend this path for organizations committed to the most ambitious goals, or those in the early stages of launching a building performance standard who don\u2019t have pre-existing commitments to other audit tools.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataStandardizationComponent_Template_a_click_66_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Learn more about Audit Template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.cardStatus.good);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.cardStatus.good);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.cardStatus.better);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.cardStatus.better);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.cardStatus.best);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.cardStatus.best);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatAnchor"]], styles: ["[_nghost-%COMP%]  [hidden] {\n  display: none;\n}\n\n.mt-5[_ngcontent-%COMP%], .my-5[_ngcontent-%COMP%] {\n  margin-top: 3rem !important;\n}\n\n.mt-3[_ngcontent-%COMP%], .my-3[_ngcontent-%COMP%] {\n  margin-top: 1rem !important;\n}\n\n.mt-2[_ngcontent-%COMP%], .my-2[_ngcontent-%COMP%] {\n  margin-top: 0.5rem !important;\n}\n\n.mr-3[_ngcontent-%COMP%], .mx-3[_ngcontent-%COMP%] {\n  margin-right: 1rem !important;\n}\n\n.mr-2[_ngcontent-%COMP%], .mx-2[_ngcontent-%COMP%] {\n  margin-right: 0.5rem !important;\n}\n\n.ml-3[_ngcontent-%COMP%], .mx-3[_ngcontent-%COMP%] {\n  margin-left: 1rem !important;\n}\n\n.mr-5[_ngcontent-%COMP%], .mx-5[_ngcontent-%COMP%] {\n  margin-right: 3rem !important;\n}\n\n.ml-5[_ngcontent-%COMP%], .mx-5[_ngcontent-%COMP%] {\n  margin-left: 3rem !important;\n}\n\n.mb-4[_ngcontent-%COMP%], .my-4[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem !important;\n}\n\n.mb-2[_ngcontent-%COMP%], .my-2[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem !important;\n}\n\n.pt-5[_ngcontent-%COMP%], .py-5[_ngcontent-%COMP%] {\n  padding-top: 3rem !important;\n}\n\n.bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.align-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.data-card[_ngcontent-%COMP%] {\n  min-height: 150px;\n}\n\n.card-good[_ngcontent-%COMP%] {\n  background-color: #1473cc;\n  color: white;\n}\n\n.card-better[_ngcontent-%COMP%] {\n  background-color: #125d9b;\n  color: white;\n}\n\n.card-best[_ngcontent-%COMP%] {\n  background-color: #092357;\n  color: white;\n}\n\n.card-white[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n}\n\n.btn-type-1[_ngcontent-%COMP%] {\n  background: #3B88AF;\n  color: #fff;\n}\n\n.btn-type-2[_ngcontent-%COMP%] {\n  background-color: #024880;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2RhdGEtc3RhbmRhcmRpemF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0UsYUFBQTtBQURKOztBQUtBOztFQUVFLDJCQUFBO0FBRkY7O0FBS0E7O0VBRUUsMkJBQUE7QUFGRjs7QUFLQTs7RUFFRSw2QkFBQTtBQUZGOztBQUtBOztFQUVFLDZCQUFBO0FBRkY7O0FBS0E7O0VBRUUsK0JBQUE7QUFGRjs7QUFLQTs7RUFFRSw0QkFBQTtBQUZGOztBQUtBOztFQUVFLDZCQUFBO0FBRkY7O0FBS0E7O0VBRUUsNEJBQUE7QUFGRjs7QUFLQTs7RUFFRSxnQ0FBQTtBQUZGOztBQUtBOztFQUVFLGdDQUFBO0FBRkY7O0FBS0E7O0VBRUUsNEJBQUE7QUFGRjs7QUFLQTtFQUNDLGlCQUFBO0FBRkQ7O0FBS0E7RUFDQyxrQkFBQTtBQUZEOztBQUtBO0VBQ0MsaUJBQUE7QUFGRDs7QUFLQTtFQUNDLHlCQUFBO0VBQ0EsWUFBQTtBQUZEOztBQUtBO0VBQ0MseUJBQUE7RUFDQSxZQUFBO0FBRkQ7O0FBS0E7RUFDQyx5QkFBQTtFQUNBLFlBQUE7QUFGRDs7QUFLQTtFQUNDLHVCQUFBO0VBQ0EsWUFBQTtBQUZEOztBQUtBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FBRkY7O0FBS0E7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUFGRiIsImZpbGUiOiJkYXRhLXN0YW5kYXJkaXphdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcblxuICAmOjpuZy1kZWVwIFtoaWRkZW5dIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5tdC01LFxuLm15LTUge1xuICBtYXJnaW4tdG9wOiAzcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tdC0zLFxuLm15LTMge1xuICBtYXJnaW4tdG9wOiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tdC0yLFxuLm15LTIge1xuICBtYXJnaW4tdG9wOiAwLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm1yLTMsXG4ubXgtMyB7XG4gIG1hcmdpbi1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubXItMixcbi5teC0yIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm1sLTMsXG4ubXgtMyB7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tci01LFxuLm14LTUge1xuICBtYXJnaW4tcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcbn1cblxuLm1sLTUsXG4ubXgtNSB7XG4gIG1hcmdpbi1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tYi00LFxuLm15LTQge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm1iLTIsXG4ubXktMiB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucHQtNSxcbi5weS01IHtcbiAgcGFkZGluZy10b3A6IDNyZW0gIWltcG9ydGFudDtcbn1cblxuLmJvbGQge1xuXHRmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmFsaWduLWNlbnRlciB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRhdGEtY2FyZCB7XG5cdG1pbi1oZWlnaHQ6IDE1MHB4O1xufVxuXG4uY2FyZC1nb29kIHtcblx0YmFja2dyb3VuZC1jb2xvcjojMTQ3M2NjO1xuXHRjb2xvcjp3aGl0ZTtcbn1cblxuLmNhcmQtYmV0dGVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjojMTI1ZDliO1xuXHRjb2xvcjp3aGl0ZTtcbn1cblxuLmNhcmQtYmVzdCB7XG5cdGJhY2tncm91bmQtY29sb3I6IzA5MjM1Nztcblx0Y29sb3I6d2hpdGU7XG59XG5cbi5jYXJkLXdoaXRlIHtcblx0YmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcblx0Y29sb3I6YmxhY2s7XG59XG5cbi5idG4tdHlwZS0xIHtcbiAgYmFja2dyb3VuZDogIzNCODhBRjtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5idG4tdHlwZS0yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyNDg4MDtcbiAgY29sb3I6ICNmZmY7XG59XG4iXX0= */"] });


/***/ }),

/***/ "6JCy":
/*!*******************************************************************!*\
  !*** ./src/app/tools-overview/developers/developers.component.ts ***!
  \*******************************************************************/
/*! exports provided: DevelopersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevelopersComponent", function() { return DevelopersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _tools_overview_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tools-overview.component */ "rX8i");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class DevelopersComponent {
    constructor() {
    }
}
DevelopersComponent.ɵfac = function DevelopersComponent_Factory(t) { return new (t || DevelopersComponent)(); };
DevelopersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DevelopersComponent, selectors: [["ng-component"]], decls: 47, vars: 0, consts: [["slot", "left"], ["slot", "right", "fxLayout", "column"], ["fxLayout", "row"], [1, "logo"], ["src", "assets/images/bldgsync-logo.svg", "alt", "BuildingSync Logo", "routerLink", "/building-sync"], [1, "description"], ["routerLink", "/building-sync"], ["src", "assets/images/ubid-logo.png", "alt", "Unique Building Identifier logo", "routerLink", "/ubid"], ["routerLink", "/ubid"], ["src", "assets/images/bedes-logo.png", "alt", "BEDES logo", "routerLink", "/bedes"], ["routerLink", "/bedes"], ["src", "assets/images/OE-logo.png", "alt", "Open Efficiency logo", "routerLink", "/oep"], ["routerLink", "/oep"], ["src", "assets/images/third-party-icon-text.svg", "alt", "3rd Party Tools", "routerLink", "/third-party"], ["routerLink", "/third-party"]], template: function DevelopersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-tools-overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "For Developers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Would you like to take your building data even further? Are you a product or service provider interested in incorporating data or features from the building energy data tools? Explore the tools at right to learn more about the wealth of opportunities available to developers.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Use the BuildingSync XML schema to standardize energy audit data, making it persistent and portable. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Learn more.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "The Unique Building ID (UBID) is a VIN for buildings, developed as superior alternative to common identifiers like street addresses and tax lot numbers. Use it to link disparate datasets and unleash the power of your data. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Learn more.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "The Building Energy Data Exchange Specification (BEDES) is dictionary of over 600 terms and definitions for building characteristics, efficiency measures, and energy use. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Learn more.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "The Open Efficiency Platform (OEP) is a pipeline from SEED to Salesforce. Use it to harness the power of CRM to supercharge efficiency programs. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Learn more.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "DOE\u2019s building energy data tools can be integrated with many third-party solutions such as CRM systems, data visualization applications, and more. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Learn more.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_tools_overview_component__WEBPACK_IMPORTED_MODULE_1__["ToolsOverviewComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited {\n  color: #f5af13;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2RldmVsb3BlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFBO0FBREYiLCJmaWxlIjoiZGV2ZWxvcGVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ0aGVtZVwiO1xuXG5hLCBhOnZpc2l0ZWQge1xuICBjb2xvcjogbnRoKCRjb2xvcnMsIDUpO1xufVxuIl19 */"] });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/shared.service */ "wbvY");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _graphic_graphic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graphic/graphic.component */ "1Rfq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





class HomeComponent {
    constructor(sharedService) {
        this.sharedService = sharedService;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 45, vars: 0, consts: [[1, "home-intro-text2", "my-2"], ["fxLayout", "row", "fxLayoutAlign", "space-around", "fxFlex", "90%", "fxFlexOffset", "5%", 1, "top-side"], ["href", "https://www.epa.gov/statelocalenergy/benchmarking-and-building-performance-standards-policy-toolkit", "target", "_blank"], [1, "ml-1", "align-center"], [1, "fas", "fa-external-link-alt"], ["fxLayout", "row", 1, "interactive-map-div"], ["fxLayoutAlign", "space-around", "fxFlex", "35%"], ["fxLayoutAlign", "space-around my-auto", "fxFlex", "65%"], ["fxLayout", "row", 1, "bottom-boxes"], ["fxFlex", "50%"], ["routerLink", "data-standardization", 1, "standardize"], ["routerLink", "data-standardization"], [1, "box-arrow"], ["src", "assets/images/box-arrow.svg"], ["fxFlex", "25%"], ["routerLink", "analysis-evaluation", 1, "explore-tools"], ["routerLink", "analysis-evaluation"], ["routerLink", "developers", 1, "dev"], ["routerLink", "developers"], [1, "mb-5", "mt-5"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "The U.S. Department of Energy developed a comprehensive suite of tools for accessing, managing, analyzing and sharing building energy data. This website describes how they can be used to support ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "building performance standards (BPS) policies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, ", one of many possible use cases.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Find Your Tool or Workflow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Mouse over and click on the tools below to get more information. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "When you\u2019re ready, follow the 'Learn More' button to see just how easy data can be.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-graphic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Get started with");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "data standardization");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Explore the analysis tools");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Find information for developers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexOffsetDirective"], _graphic_graphic_component__WEBPACK_IMPORTED_MODULE_3__["GraphicComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: [".developer-banner[_ngcontent-%COMP%] {\n  background-color: #f5af13;\n  font-family: \"Roboto Condensed\", Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px;\n  font-weight: bold;\n  height: 22px;\n  position: relative;\n  text-transform: uppercase;\n  \n}\n.developer-banner[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 100%;\n}\na[_ngcontent-%COMP%] {\n  color: #024880;\n}\n.developer[_ngcontent-%COMP%] {\n  padding: 20px 0;\n}\n.developer[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 12px 26px 0;\n}\n.developer[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  font-size: 18px;\n  line-height: 22px;\n}\n.dev-link[_ngcontent-%COMP%] {\n  color: black;\n}\n.home-intro-text[_ngcontent-%COMP%] {\n  margin: 1rem 0 0.5rem 0;\n  background: url('text-background.jpg');\n  background-size: cover;\n}\n.home-intro-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.home-intro-text2[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0.25rem 0;\n}\n.home-intro-text2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.interactive-map[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n  font-size: 18px;\n}\n.interactive-map-div[_ngcontent-%COMP%] {\n  \n  background-color: #4D4D4D;\n  padding: 8px 10px 0px 10px;\n  color: white;\n  margin-bottom: 10px;\n  display: flex;\n  width: 100%;\n  margin-left: 0%;\n}\n.interactive-map-div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-family: \"Roboto Condensed\", Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 1.3rem;\n  margin-top: 5px;\n}\n.interactive-map-div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: normal;\n  padding-bottom: 0px;\n  margin: 0px;\n}\n.bottom-boxes[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-left: 0%;\n  padding-right: 0%;\n  margin: 10px 0px 0px;\n  min-height: 200px;\n}\n.standardize[_ngcontent-%COMP%] {\n  background: url('get-started-box.jpg');\n  padding: 1rem 1rem;\n  background-size: 100% 100%;\n  cursor: pointer;\n  height: 200px;\n}\n.standardize[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.8rem;\n  padding-top: 10px;\n  padding-left: 4rem;\n  font-family: \"Roboto\", sans-serif;\n  line-height: 3rem;\n}\n.standardize[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n}\n.explore-tools[_ngcontent-%COMP%] {\n  background: url('analysis-box.jpg');\n  padding: 1rem 1rem;\n  margin-left: 10px;\n  background-size: auto;\n  cursor: pointer;\n  height: 200px;\n}\n.explore-tools[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.8rem;\n  padding-top: 10px;\n  padding-left: 4rem;\n  font-family: \"Roboto\", sans-serif;\n  line-height: 3rem;\n}\n.explore-tools[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n}\n.dev[_ngcontent-%COMP%] {\n  background: #f5af13;\n  padding: 1rem 1rem;\n  margin-left: 10px;\n  background-size: auto;\n  cursor: pointer;\n  height: 200px;\n}\n.dev[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.8rem;\n  padding-top: 10px;\n  padding-left: 2rem;\n  font-family: \"Roboto\", sans-serif;\n  line-height: 3rem;\n}\n.dev[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n}\n.box-arrow[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  width: 5rem;\n}\n.explore[_ngcontent-%COMP%] {\n  background-color: #EEEEEE;\n  padding: 10px 0px 5px 0px;\n  text-align: center;\n}\n.left-side[_ngcontent-%COMP%] {\n  border-right: 2px solid #ccc;\n  padding-right: 20px;\n  margin-bottom: 10px;\n}\n.top-side[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9zdHlsZXMvX3RoZW1lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSx5QkNHTztFREZQLHFFQ05nQjtFRE9oQixlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQU1BOzs7Ozs7Ozs7R0FBQTtBQUNGO0FBTEU7RUFDRSxXQUFBO0FBT0o7QUFRQTtFQUNFLGNBQUE7QUFMRjtBQVFBO0VBQ0UsZUFBQTtBQUxGO0FBT0U7RUFDRSxvQkFBQTtBQUxKO0FBT0k7RUFFRSxlQUFBO0VBQ0EsaUJBQUE7QUFOTjtBQVlBO0VBQ0UsWUFBQTtBQVRGO0FBWUE7RUFDRSx1QkFBQTtFQUNBLHNDQUFBO0VBQ0Esc0JBQUE7QUFURjtBQVdFO0VBQ0UsaUJBQUE7QUFUSjtBQWFBO0VBQ0UsMkJBQUE7QUFWRjtBQVlFO0VBQ0UsZUFBQTtBQVZKO0FBY0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUFYRjtBQWNBO0VBQ0Usb0NBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBWEY7QUFhRTtFQUNFLGdCQUFBO0VBQ0EscUVDdkZjO0VEd0ZkLGlCQUFBO0VBQ0EsZUFBQTtBQVhKO0FBY0U7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFaSjtBQWdCQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQWJGO0FBZ0JBO0VBQ0Usc0NBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFiRjtBQWVFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsaUJBQUE7QUFiSjtBQWVJO0VBQ0UsWUFBQTtBQWJOO0FBa0JBO0VBQ0UsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQWZGO0FBaUJFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsaUJBQUE7QUFmSjtBQWlCSTtFQUNFLFlBQUE7QUFmTjtBQW9CQTtFQUNFLG1CQ2hKTztFRGlKUCxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQWpCRjtBQW1CRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGlCQUFBO0FBakJKO0FBbUJJO0VBQ0UsWUFBQTtBQWpCTjtBQXNCQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQW5CRjtBQXNCQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQW5CRjtBQXNCQTtFQUNFLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQW5CRjtBQXNCQTtFQUNFLGdCQUFBO0FBbkJGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwidGhlbWVcIjtcblxuJGNvbFBhZDogNDA7XG5cbi5kZXZlbG9wZXItYmFubmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcbiAgZm9udC1mYW1pbHk6ICRyb2JvdG9Db25kZW5zZWQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGhlaWdodDogMjJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gID4gZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC8qXG4gICY6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGhlaWdodDogNHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IC03cHg7XG4gICAgd2lkdGg6IDE4NHB4O1xuICB9XG4gICovXG59XG5cbmEge1xuICBjb2xvcjogIzAyNDg4MDtcbn1cblxuLmRldmVsb3BlciB7XG4gIHBhZGRpbmc6IDIwcHggMDtcblxuICA+IGRpdiB7XG4gICAgcGFkZGluZzogMTJweCAkcGFkIDA7XG5cbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgIC8vIGJvcmRlci1yaWdodDogMXB4IHNvbGlkO1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgfVxuICB9XG5cbn1cblxuLmRldi1saW5rIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uaG9tZS1pbnRyby10ZXh0IHtcbiAgbWFyZ2luOiAxcmVtIDAgMC41cmVtIDA7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvdGV4dC1iYWNrZ3JvdW5kLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxuICBwIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgfVxufVxuXG4uaG9tZS1pbnRyby10ZXh0MiB7XG4gIG1hcmdpbjogMC4yNXJlbSAwIDAuMjVyZW0gMDtcblxuICBwIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbn1cblxuLmludGVyYWN0aXZlLW1hcCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uaW50ZXJhY3RpdmUtbWFwLWRpdiB7XG4gIC8qYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHg7Ki9cbiAgYmFja2dyb3VuZC1jb2xvcjogIzRENEQ0RDtcbiAgcGFkZGluZzogOHB4IDEwcHggMHB4IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWJvdHRvbToxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDAlO1xuXG4gIGgyIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtZmFtaWx5OiAkcm9ib3RvQ29uZGVuc2VkO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgfVxuXG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cbn1cblxuLmJvdHRvbS1ib3hlcyB7XG4gIHdpZHRoOjEwMCU7IFxuICBwYWRkaW5nLWxlZnQ6IDAlO1xuICBwYWRkaW5nLXJpZ2h0OiAwJTtcbiAgbWFyZ2luOiAxMHB4IDBweCAwcHg7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xufVxuXG4uc3RhbmRhcmRpemUge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2dldC1zdGFydGVkLWJveC5qcGdcIik7XG4gIHBhZGRpbmc6IDFyZW0gMXJlbTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGN1cnNvcjpwb2ludGVyO1xuICBoZWlnaHQ6IDIwMHB4O1xuXG4gIGgzIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA0cmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogM3JlbTtcblxuICAgIGEge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgfVxufVxuXG4uZXhwbG9yZS10b29scyB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvYW5hbHlzaXMtYm94LmpwZ1wiKTtcbiAgcGFkZGluZzogMXJlbSAxcmVtO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xuICBjdXJzb3I6cG9pbnRlcjtcbiAgaGVpZ2h0OiAyMDBweDtcblxuICBoMyB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogNHJlbTtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XG5cbiAgICBhIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gIH1cbn1cblxuLmRldiB7XG4gIGJhY2tncm91bmQ6ICRvcmFuZ2U7XG4gIHBhZGRpbmc6IDFyZW0gMXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogYXV0bztcbiAgY3Vyc29yOnBvaW50ZXI7XG4gIGhlaWdodDogMjAwcHg7XG5cbiAgaDMge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xuXG4gICAgYSB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICB9XG59XG5cbi5ib3gtYXJyb3cge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgd2lkdGg6IDVyZW07XG59XG5cbi5leHBsb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcbiAgcGFkZGluZzogMTBweCAwcHggNXB4IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubGVmdC1zaWRlIHtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI2NjYztcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnRvcC1zaWRlIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbiIsIiRyb2JvdG9Db25kZW5zZWQ6IFwiUm9ib3RvIENvbmRlbnNlZFwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcblxuJG1heFdpZHRoOiAxMjAwcHg7XG5cbiRwYWQ6IDI2cHg7XG5cbiRibHVlR3JheTogIzZlODU5MTtcbiRncmF5OiAjZWVlO1xuJG9yYW5nZTogI2Y1YWYxMztcblxuJGNvbG9yczpcbiAgIzNiODhhZlxuICAjMDI0ODgwXG4gICM0Nzg2NjJcbiAgIzA5NGY1OFxuICAkb3JhbmdlO1xuXG4kaG92ZXJPcGFjaXR5OiAwLjg7XG4iXX0= */"] });


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

/***/ "FLSU":
/*!***************************************************************************!*\
  !*** ./src/app/tools-overview/goals-outcomes/goals-outcomes.component.ts ***!
  \***************************************************************************/
/*! exports provided: GoalsOutcomesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalsOutcomesComponent", function() { return GoalsOutcomesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _tools_overview_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tools-overview.component */ "rX8i");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class GoalsOutcomesComponent {
    constructor() {
    }
}
GoalsOutcomesComponent.ɵfac = function GoalsOutcomesComponent_Factory(t) { return new (t || GoalsOutcomesComponent)(); };
GoalsOutcomesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GoalsOutcomesComponent, selectors: [["ng-component"]], decls: 45, vars: 0, consts: [["slot", "left"], ["slot", "right", "fxLayout", "column"], ["fxLayout", "row"], [1, "logo"], ["src", "assets/images/com-resstock-outcomes-icon.svg"], [1, "description"], ["src", "assets/images/comstock_outcome_pathway-01.png"], ["src", "assets/images/better-outcomes-icon.svg"], ["src", "assets/images/better_outcome_pathway-01.png"], ["src", "assets/images/assetscore-outcomes-icon.svg"], ["src", "assets/images/asset-score-outcome_pathway-01.png"], ["src", "assets/images/thirdparty-outcomes-icon.svg"], ["routerLink", "/developers"]], template: function GoalsOutcomesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-tools-overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Goals & Outcomes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Learn more about how the building energy data tools can help your organization realize its ultimate goals:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Analyze Building Stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Analysis tools will help states, municipalities, utilities, and manufacturers identify the most impactful building stock improvements.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Target Efficiency Upgrade Areas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Identify measures and suggest areas for deeper evaluations.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Achieve Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Use Asset Score to identify cost-effective energy efficiency measures to help buildings deliver EUI and GHGe metrics for compliance with a building performance policy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Customize");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Various tools and APIs are available to customize your workflow, connect to CRMs, add create data visualizations. Visit the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Developers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " page to learn more about these tools and capabilities.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_tools_overview_component__WEBPACK_IMPORTED_MODULE_1__["ToolsOverviewComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited {\n  color: #094f58;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2dvYWxzLW91dGNvbWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0FBQTtBQURGIiwiZmlsZSI6ImdvYWxzLW91dGNvbWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInRoZW1lXCI7XG5cbmEsIGE6dmlzaXRlZCB7XG4gIGNvbG9yOiBudGgoJGNvbG9ycywgNCk7XG59XG4iXX0= */"] });


/***/ }),

/***/ "NA4g":
/*!***************************************************!*\
  !*** ./src/app/shared/modules/material.module.ts ***!
  \***************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [
        // A11yModule,
        // CdkStepperModule,
        // CdkTableModule,
        // CdkTreeModule,
        // ClipboardModule,
        // DragDropModule,
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["LayoutModule"],
        // MatAutocompleteModule,
        // MatBadgeModule,
        // MatBottomSheetModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        // MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        // MatCheckboxModule,
        // MatChipsModule,
        // MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
        // MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        // MatInputModule,
        // MatListModule,
        // MatMenuModule,
        // MatNativeDateModule,
        // MatPaginatorModule,
        // MatProgressBarModule,
        // MatProgressSpinnerModule,
        // MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
        // MatSelectModule,
        // MatSidenavModule,
        // MatSliderModule,
        // MatSlideToggleModule,
        // MatSnackBarModule,
        // MatSortModule,
        // MatStepperModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
        // MatTabsModule,
        // MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [
        // A11yModule,
        // CdkStepperModule,
        // CdkTableModule,
        // CdkTreeModule,
        // ClipboardModule,
        // DragDropModule,
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["LayoutModule"],
        // MatAutocompleteModule,
        // MatBadgeModule,
        // MatBottomSheetModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        // MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
        // MatCheckboxModule,
        // MatChipsModule,
        // MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
        // MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        // MatInputModule,
        // MatListModule,
        // MatMenuModule,
        // MatNativeDateModule,
        // MatPaginatorModule,
        // MatProgressBarModule,
        // MatProgressSpinnerModule,
        // MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
        // MatSelectModule,
        // MatSidenavModule,
        // MatSliderModule,
        // MatSlideToggleModule,
        // MatSnackBarModule,
        // MatSortModule,
        // MatStepperModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
        // MatTabsModule,
        // MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"]] }); })();


/***/ }),

/***/ "NLSS":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/tool/tool.component.ts ***!
  \**********************************************************/
/*! exports provided: ToolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolComponent", function() { return ToolComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");





const _c0 = function (a0, a1) { return [a0, a1]; };
function ToolComponent_div_5_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 8);
} if (rf & 2) {
    const navItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, navItem_r1.icon, navItem_r1.fontAwesome || "fas"));
} }
function ToolComponent_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const navItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", navItem_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c1 = function () { return { exact: true }; };
function ToolComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ToolComponent_div_5_i_1_Template, 1, 4, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ToolComponent_div_5_div_2_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const navItem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", navItem_r1.route)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", navItem_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", navItem_r1.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", navItem_r1.title, " ");
} }
const _c2 = [[["", "slot", "logo"]]];
const _c3 = ["[slot=logo]"];
class ToolComponent {
    constructor(router) {
        this.router = router;
        this.navItems = [];
        const prefix = router.url.replace(/^(\/.+?)(\/.*)/g, '$1');
        switch (prefix) {
            case '/audit-template':
                this.color = 1;
                break;
            case '/seed':
                this.color = 2;
                break;
            case '/comstock-resstock':
            case '/better':
            case '/asset-score':
            case '/bpd':
                this.color = 3;
                break;
            case '/goals':
                this.color = 4;
                break;
            case '/building-sync':
            case '/ubid':
            case '/bedes':
            case '/oep':
            case '/third-party':
                this.color = 5;
                break;
            default:
                console.warn(`Unexpected route: ${router.url}`);
        }
    }
}
ToolComponent.ɵfac = function ToolComponent_Factory(t) { return new (t || ToolComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ToolComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToolComponent, selectors: [["app-tool"]], hostVars: 1, hostBindings: function ToolComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-color", ctx.color);
    } }, inputs: { navItems: "navItems" }, ngContentSelectors: _c3, decls: 8, vars: 3, consts: [["fxLayout", "row"], [1, "nav", 3, "fxFlex"], [1, "logo"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions", 4, "ngFor", "ngForOf"], [1, "body", 3, "fxFlex"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions"], [3, "ngClass", 4, "ngIf"], [4, "ngIf"], [3, "ngClass"], [3, "src"]], template: function ToolComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ToolComponent_div_5_Template, 4, 6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 75);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["DefaultClassDirective"]], styles: ["[data-color=\"1\"][_nghost-%COMP%]   nav[_ngcontent-%COMP%]   div.active[_ngcontent-%COMP%] {\n  background-color: #3b88af;\n}\n[data-color=\"2\"][_nghost-%COMP%]   nav[_ngcontent-%COMP%]   div.active[_ngcontent-%COMP%] {\n  background-color: #024880;\n}\n[data-color=\"3\"][_nghost-%COMP%]   nav[_ngcontent-%COMP%]   div.active[_ngcontent-%COMP%] {\n  background-color: #478662;\n}\n[data-color=\"4\"][_nghost-%COMP%]   nav[_ngcontent-%COMP%]   div.active[_ngcontent-%COMP%] {\n  background-color: #094f58;\n}\n[data-color=\"5\"][_nghost-%COMP%]   nav[_ngcontent-%COMP%]   div.active[_ngcontent-%COMP%] {\n  background-color: #f5af13;\n}\n.nav[_ngcontent-%COMP%], .body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  line-height: 23px;\n  padding: 26px;\n  position: relative;\n  font-size: 1rem;\n}\n.nav[_ngcontent-%COMP%]  > div, .body[_ngcontent-%COMP%]  > div {\n  width: 100%;\n}\n.nav[_ngcontent-%COMP%] , .body[_ngcontent-%COMP%]  {\n  \n}\n.nav[_ngcontent-%COMP%]  .mat-h3, .body[_ngcontent-%COMP%]  .mat-h3 {\n  font-size: 1.25em;\n}\n.nav[_ngcontent-%COMP%]  .mat-h5, .body[_ngcontent-%COMP%]  .mat-h5 {\n  font-size: 1.1em;\n}\n.nav[_ngcontent-%COMP%]  .mat-h6, .body[_ngcontent-%COMP%]  .mat-h6 {\n  font-size: 1em;\n}\n.nav[_ngcontent-%COMP%]  p, .nav[_ngcontent-%COMP%]  ul, .nav[_ngcontent-%COMP%]  ol, .body[_ngcontent-%COMP%]  p, .body[_ngcontent-%COMP%]  ul, .body[_ngcontent-%COMP%]  ol {\n  font-size: 1.1rem;\n}\n.nav[_ngcontent-%COMP%]  table, .body[_ngcontent-%COMP%]  table {\n  font-size: 1rem;\n}\n.nav[_ngcontent-%COMP%]  .logoimg-3p, .body[_ngcontent-%COMP%]  .logoimg-3p {\n  width: 80%;\n}\n.nav[_ngcontent-%COMP%]  .logoimg-3p2, .body[_ngcontent-%COMP%]  .logoimg-3p2 {\n  width: 60%;\n}\n.nav[_ngcontent-%COMP%]  .as-img, .body[_ngcontent-%COMP%]  .as-img {\n  width: 100%;\n}\n.nav[_ngcontent-%COMP%]  .mat-expansion-panel-header-title, .body[_ngcontent-%COMP%]  .mat-expansion-panel-header-title {\n  font-size: 1.1rem;\n  font-weight: bold;\n}\n.nav[_ngcontent-%COMP%]  a, .body[_ngcontent-%COMP%]  a {\n  color: #024880;\n  font-weight: bold;\n}\n.nav[_ngcontent-%COMP%]  a.not-bold, .body[_ngcontent-%COMP%]  a.not-bold {\n  font-weight: normal;\n}\n.nav[_ngcontent-%COMP%]  .color-1, .body[_ngcontent-%COMP%]  .color-1 {\n  color: #3B88AF;\n}\n.nav[_ngcontent-%COMP%]  .color-2, .body[_ngcontent-%COMP%]  .color-2 {\n  color: #024880;\n}\n.nav[_ngcontent-%COMP%]  .color-3, .body[_ngcontent-%COMP%]  .color-3 {\n  color: #478662;\n}\n.nav[_ngcontent-%COMP%]  .color-4, .body[_ngcontent-%COMP%]  .color-4 {\n  color: #094F58;\n}\n.nav[_ngcontent-%COMP%]  .color-5, .body[_ngcontent-%COMP%]  .color-5 {\n  color: #F5AF13;\n}\n.nav[_ngcontent-%COMP%]  .btn-type-1, .body[_ngcontent-%COMP%]  .btn-type-1 {\n  background-color: #3B88AF;\n  color: #fff;\n}\n.nav[_ngcontent-%COMP%]  .btn-type-2, .body[_ngcontent-%COMP%]  .btn-type-2 {\n  background-color: #024880;\n  color: #fff;\n}\n.nav[_ngcontent-%COMP%]  .btn-type-3, .body[_ngcontent-%COMP%]  .btn-type-3 {\n  background-color: #478662;\n  color: #fff;\n}\n.nav[_ngcontent-%COMP%]  .btn-type-5, .body[_ngcontent-%COMP%]  .btn-type-5 {\n  background-color: #f5af13;\n  color: #fff;\n}\n.nav[_ngcontent-%COMP%]  .mat-h2, .nav[_ngcontent-%COMP%]  .mat-h3, .nav[_ngcontent-%COMP%]  .mat-h4, .nav[_ngcontent-%COMP%]  .mat-h5, .nav[_ngcontent-%COMP%]  .mat-h6, .body[_ngcontent-%COMP%]  .mat-h2, .body[_ngcontent-%COMP%]  .mat-h3, .body[_ngcontent-%COMP%]  .mat-h4, .body[_ngcontent-%COMP%]  .mat-h5, .body[_ngcontent-%COMP%]  .mat-h6 {\n  font-weight: bold !important;\n}\n.nav[_ngcontent-%COMP%]  .center, .body[_ngcontent-%COMP%]  .center {\n  text-align: center;\n}\n.nav[_ngcontent-%COMP%]  .bold, .body[_ngcontent-%COMP%]  .bold {\n  font-weight: bold;\n  color: #2E2D2D;\n}\n.nav[_ngcontent-%COMP%]  .smaller-text, .body[_ngcontent-%COMP%]  .smaller-text {\n  font-size: 0.8em;\n}\n.nav[_ngcontent-%COMP%]  .blue-callout, .body[_ngcontent-%COMP%]  .blue-callout {\n  background-color: #024880;\n  color: white;\n  padding: 20px;\n  margin-left: 100px;\n}\n.nav[_ngcontent-%COMP%]  .callout, .body[_ngcontent-%COMP%]  .callout {\n  width: 40%;\n  margin: 20px auto;\n}\n.nav[_ngcontent-%COMP%]  .bold-link, .body[_ngcontent-%COMP%]  .bold-link {\n  font-weight: bold;\n}\n.nav[_ngcontent-%COMP%]  .card-img, .body[_ngcontent-%COMP%]  .card-img {\n  width: 100%;\n}\n.nav[_ngcontent-%COMP%]  .img-g1, .body[_ngcontent-%COMP%]  .img-g1 {\n  width: 55%;\n  padding-left: 20px;\n}\n.nav[_ngcontent-%COMP%]  .img-g2, .body[_ngcontent-%COMP%]  .img-g2 {\n  width: 50%;\n}\n.nav[_ngcontent-%COMP%]  .img-g3, .body[_ngcontent-%COMP%]  .img-g3 {\n  width: 45%;\n  padding-left: 30px;\n}\n.nav[_ngcontent-%COMP%]  .img-g4, .body[_ngcontent-%COMP%]  .img-g4 {\n  width: 50%;\n  padding-left: 20px;\n}\n.nav[_ngcontent-%COMP%]  table, .body[_ngcontent-%COMP%]  table {\n  border-collapse: collapse;\n}\n.nav[_ngcontent-%COMP%]  th, .body[_ngcontent-%COMP%]  th {\n  text-align: inherit;\n  text-align: -webkit-match-parent;\n}\n.nav[_ngcontent-%COMP%]  table, .body[_ngcontent-%COMP%]  table {\n  width: 100%;\n  margin-bottom: 1rem;\n  color: #212529;\n}\n.nav[_ngcontent-%COMP%]  .table th, .nav[_ngcontent-%COMP%]  .table td, .body[_ngcontent-%COMP%]  .table th, .body[_ngcontent-%COMP%]  .table td {\n  padding: 0.75rem;\n  vertical-align: top;\n  border-top: 1px solid #dee2e6;\n}\n.nav[_ngcontent-%COMP%]  .table thead th, .body[_ngcontent-%COMP%]  .table thead th {\n  vertical-align: bottom;\n  border-bottom: 2px solid #dee2e6;\n}\n.nav[_ngcontent-%COMP%]  .table tbody + tbody, .body[_ngcontent-%COMP%]  .table tbody + tbody {\n  border-top: 2px solid #dee2e6;\n}\n.nav[_ngcontent-%COMP%]  .table-sm th, .nav[_ngcontent-%COMP%]  .table-sm td, .body[_ngcontent-%COMP%]  .table-sm th, .body[_ngcontent-%COMP%]  .table-sm td {\n  padding: 0.3rem;\n}\n.nav[_ngcontent-%COMP%]  .table-bordered, .body[_ngcontent-%COMP%]  .table-bordered {\n  border: 1px solid #dee2e6;\n}\n.nav[_ngcontent-%COMP%]  .table-bordered th, .nav[_ngcontent-%COMP%]  .table-bordered td, .body[_ngcontent-%COMP%]  .table-bordered th, .body[_ngcontent-%COMP%]  .table-bordered td {\n  border: 1px solid #dee2e6;\n}\n.nav[_ngcontent-%COMP%]  .table-bordered thead th, .nav[_ngcontent-%COMP%]  .table-bordered thead td, .body[_ngcontent-%COMP%]  .table-bordered thead th, .body[_ngcontent-%COMP%]  .table-bordered thead td {\n  border-bottom-width: 2px;\n}\n.nav[_ngcontent-%COMP%]  .table-borderless th, .nav[_ngcontent-%COMP%]  .table-borderless td, .nav[_ngcontent-%COMP%]  .table-borderless thead th, .nav[_ngcontent-%COMP%]  .table-borderless tbody + tbody, .body[_ngcontent-%COMP%]  .table-borderless th, .body[_ngcontent-%COMP%]  .table-borderless td, .body[_ngcontent-%COMP%]  .table-borderless thead th, .body[_ngcontent-%COMP%]  .table-borderless tbody + tbody {\n  border: 0;\n}\n.nav[_ngcontent-%COMP%]  .table-striped tbody tr:nth-of-type(odd), .body[_ngcontent-%COMP%]  .table-striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.nav[_ngcontent-%COMP%]  .table-hover tbody tr:hover, .body[_ngcontent-%COMP%]  .table-hover tbody tr:hover {\n  color: #212529;\n  background-color: rgba(0, 0, 0, 0.075);\n}\n.nav[_ngcontent-%COMP%]  .table-primary, .nav[_ngcontent-%COMP%]  .table-primary > th, .nav[_ngcontent-%COMP%]  .table-primary > td, .body[_ngcontent-%COMP%]  .table-primary, .body[_ngcontent-%COMP%]  .table-primary > th, .body[_ngcontent-%COMP%]  .table-primary > td {\n  background-color: #b8daff;\n}\n.nav[_ngcontent-%COMP%]  .table-primary th, .nav[_ngcontent-%COMP%]  .table-primary td, .nav[_ngcontent-%COMP%]  .table-primary thead th, .nav[_ngcontent-%COMP%]  .table-primary tbody + tbody, .body[_ngcontent-%COMP%]  .table-primary th, .body[_ngcontent-%COMP%]  .table-primary td, .body[_ngcontent-%COMP%]  .table-primary thead th, .body[_ngcontent-%COMP%]  .table-primary tbody + tbody {\n  border-color: #7abaff;\n}\n.nav[_ngcontent-%COMP%]  .table-hover .table-primary:hover, .body[_ngcontent-%COMP%]  .table-hover .table-primary:hover {\n  background-color: #9fcdff;\n}\n.nav[_ngcontent-%COMP%]  .table-hover .table-primary:hover > td, .nav[_ngcontent-%COMP%]  .table-hover .table-primary:hover > th, .body[_ngcontent-%COMP%]  .table-hover .table-primary:hover > td, .body[_ngcontent-%COMP%]  .table-hover .table-primary:hover > th {\n  background-color: #9fcdff;\n}\n.nav[_ngcontent-%COMP%]  .table-light, .nav[_ngcontent-%COMP%]  .table-light > th, .nav[_ngcontent-%COMP%]  .table-light > td, .body[_ngcontent-%COMP%]  .table-light, .body[_ngcontent-%COMP%]  .table-light > th, .body[_ngcontent-%COMP%]  .table-light > td {\n  background-color: #fdfdfe;\n}\n.nav[_ngcontent-%COMP%]  .table-light th, .nav[_ngcontent-%COMP%]  .table-light td, .nav[_ngcontent-%COMP%]  .table-light thead th, .nav[_ngcontent-%COMP%]  .table-light tbody + tbody, .body[_ngcontent-%COMP%]  .table-light th, .body[_ngcontent-%COMP%]  .table-light td, .body[_ngcontent-%COMP%]  .table-light thead th, .body[_ngcontent-%COMP%]  .table-light tbody + tbody {\n  border-color: #fbfcfc;\n}\n.nav[_ngcontent-%COMP%]  .table-hover .table-light:hover, .body[_ngcontent-%COMP%]  .table-hover .table-light:hover {\n  background-color: #ececf6;\n}\n.nav[_ngcontent-%COMP%]  .table-hover .table-light:hover > td, .nav[_ngcontent-%COMP%]  .table-hover .table-light:hover > th, .body[_ngcontent-%COMP%]  .table-hover .table-light:hover > td, .body[_ngcontent-%COMP%]  .table-hover .table-light:hover > th {\n  background-color: #ececf6;\n}\n.nav[_ngcontent-%COMP%]  .table-active, .nav[_ngcontent-%COMP%]  .table-active > th, .nav[_ngcontent-%COMP%]  .table-active > td, .body[_ngcontent-%COMP%]  .table-active, .body[_ngcontent-%COMP%]  .table-active > th, .body[_ngcontent-%COMP%]  .table-active > td {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n.nav[_ngcontent-%COMP%]  .table-hover .table-active:hover, .body[_ngcontent-%COMP%]  .table-hover .table-active:hover {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n.nav[_ngcontent-%COMP%]  .table-hover .table-active:hover > td, .nav[_ngcontent-%COMP%]  .table-hover .table-active:hover > th, .body[_ngcontent-%COMP%]  .table-hover .table-active:hover > td, .body[_ngcontent-%COMP%]  .table-hover .table-active:hover > th {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n.nav[_ngcontent-%COMP%]  .table .thead-dark th, .body[_ngcontent-%COMP%]  .table .thead-dark th {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #454d55;\n}\n.nav[_ngcontent-%COMP%]  .table .thead-light th, .body[_ngcontent-%COMP%]  .table .thead-light th {\n  color: #495057;\n  background-color: #e9ecef;\n  border-color: #dee2e6;\n}\n@media (max-width: 575.98px) {\n  .nav[_ngcontent-%COMP%]  .table-responsive-sm, .body[_ngcontent-%COMP%]  .table-responsive-sm {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .nav[_ngcontent-%COMP%]  .table-responsive-sm > .table-bordered, .body[_ngcontent-%COMP%]  .table-responsive-sm > .table-bordered {\n    border: 0;\n  }\n}\n@media (max-width: 767.98px) {\n  .nav[_ngcontent-%COMP%]  .table-responsive-md, .body[_ngcontent-%COMP%]  .table-responsive-md {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .nav[_ngcontent-%COMP%]  .table-responsive-md > .table-bordered, .body[_ngcontent-%COMP%]  .table-responsive-md > .table-bordered {\n    border: 0;\n  }\n}\n@media (max-width: 991.98px) {\n  .nav[_ngcontent-%COMP%]  .table-responsive-lg, .body[_ngcontent-%COMP%]  .table-responsive-lg {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .nav[_ngcontent-%COMP%]  .table-responsive-lg > .table-bordered, .body[_ngcontent-%COMP%]  .table-responsive-lg > .table-bordered {\n    border: 0;\n  }\n}\n@media (max-width: 1199.98px) {\n  .nav[_ngcontent-%COMP%]  .table-responsive-xl, .body[_ngcontent-%COMP%]  .table-responsive-xl {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .nav[_ngcontent-%COMP%]  .table-responsive-xl > .table-bordered, .body[_ngcontent-%COMP%]  .table-responsive-xl > .table-bordered {\n    border: 0;\n  }\n}\n.nav[_ngcontent-%COMP%]  .table-responsive, .body[_ngcontent-%COMP%]  .table-responsive {\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.nav[_ngcontent-%COMP%]  .table-responsive > .table-bordered, .body[_ngcontent-%COMP%]  .table-responsive > .table-bordered {\n  border: 0;\n}\n.nav[_ngcontent-%COMP%]  a.bold-link:hover, .body[_ngcontent-%COMP%]  a.bold-link:hover {\n  text-decoration: none;\n  color: inherit;\n}\n.nav[_ngcontent-%COMP%]  .collab-image, .body[_ngcontent-%COMP%]  .collab-image {\n  width: 100%;\n  height: auto;\n}\n.nav[_ngcontent-%COMP%]  .mt-0, .nav[_ngcontent-%COMP%]  .my-0, .body[_ngcontent-%COMP%]  .mt-0, .body[_ngcontent-%COMP%]  .my-0 {\n  margin-top: 0 !important;\n}\n.nav[_ngcontent-%COMP%]  .mr-0, .nav[_ngcontent-%COMP%]  .mx-0, .body[_ngcontent-%COMP%]  .mr-0, .body[_ngcontent-%COMP%]  .mx-0 {\n  margin-right: 0 !important;\n}\n.nav[_ngcontent-%COMP%]  .mb-0, .nav[_ngcontent-%COMP%]  .my-0, .body[_ngcontent-%COMP%]  .mb-0, .body[_ngcontent-%COMP%]  .my-0 {\n  margin-bottom: 0 !important;\n}\n.nav[_ngcontent-%COMP%]  .ml-0, .nav[_ngcontent-%COMP%]  .mx-0, .body[_ngcontent-%COMP%]  .ml-0, .body[_ngcontent-%COMP%]  .mx-0 {\n  margin-left: 0 !important;\n}\n.nav[_ngcontent-%COMP%]  .m-1, .body[_ngcontent-%COMP%]  .m-1 {\n  margin: 0.25rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mt-1, .nav[_ngcontent-%COMP%]  .my-1, .body[_ngcontent-%COMP%]  .mt-1, .body[_ngcontent-%COMP%]  .my-1 {\n  margin-top: 0.25rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mr-1, .nav[_ngcontent-%COMP%]  .mx-1, .body[_ngcontent-%COMP%]  .mr-1, .body[_ngcontent-%COMP%]  .mx-1 {\n  margin-right: 0.25rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mb-1, .nav[_ngcontent-%COMP%]  .my-1, .body[_ngcontent-%COMP%]  .mb-1, .body[_ngcontent-%COMP%]  .my-1 {\n  margin-bottom: 0.25rem !important;\n}\n.nav[_ngcontent-%COMP%]  .ml-1, .nav[_ngcontent-%COMP%]  .mx-1, .body[_ngcontent-%COMP%]  .ml-1, .body[_ngcontent-%COMP%]  .mx-1 {\n  margin-left: 0.25rem !important;\n}\n.nav[_ngcontent-%COMP%]  .m-2, .body[_ngcontent-%COMP%]  .m-2 {\n  margin: 0.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mt-2, .nav[_ngcontent-%COMP%]  .my-2, .body[_ngcontent-%COMP%]  .mt-2, .body[_ngcontent-%COMP%]  .my-2 {\n  margin-top: 0.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mr-2, .nav[_ngcontent-%COMP%]  .mx-2, .body[_ngcontent-%COMP%]  .mr-2, .body[_ngcontent-%COMP%]  .mx-2 {\n  margin-right: 0.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mb-2, .nav[_ngcontent-%COMP%]  .my-2, .body[_ngcontent-%COMP%]  .mb-2, .body[_ngcontent-%COMP%]  .my-2 {\n  margin-bottom: 0.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .ml-2, .nav[_ngcontent-%COMP%]  .mx-2, .body[_ngcontent-%COMP%]  .ml-2, .body[_ngcontent-%COMP%]  .mx-2 {\n  margin-left: 0.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .m-3, .body[_ngcontent-%COMP%]  .m-3 {\n  margin: 1rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mt-3, .nav[_ngcontent-%COMP%]  .my-3, .body[_ngcontent-%COMP%]  .mt-3, .body[_ngcontent-%COMP%]  .my-3 {\n  margin-top: 1rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mr-3, .nav[_ngcontent-%COMP%]  .mx-3, .body[_ngcontent-%COMP%]  .mr-3, .body[_ngcontent-%COMP%]  .mx-3 {\n  margin-right: 1rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mb-3, .nav[_ngcontent-%COMP%]  .my-3, .body[_ngcontent-%COMP%]  .mb-3, .body[_ngcontent-%COMP%]  .my-3 {\n  margin-bottom: 1rem !important;\n}\n.nav[_ngcontent-%COMP%]  .ml-3, .nav[_ngcontent-%COMP%]  .mx-3, .body[_ngcontent-%COMP%]  .ml-3, .body[_ngcontent-%COMP%]  .mx-3 {\n  margin-left: 1rem !important;\n}\n.nav[_ngcontent-%COMP%]  .m-4, .body[_ngcontent-%COMP%]  .m-4 {\n  margin: 1.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mt-4, .nav[_ngcontent-%COMP%]  .my-4, .body[_ngcontent-%COMP%]  .mt-4, .body[_ngcontent-%COMP%]  .my-4 {\n  margin-top: 1.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mr-4, .nav[_ngcontent-%COMP%]  .mx-4, .body[_ngcontent-%COMP%]  .mr-4, .body[_ngcontent-%COMP%]  .mx-4 {\n  margin-right: 1.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mb-4, .nav[_ngcontent-%COMP%]  .my-4, .body[_ngcontent-%COMP%]  .mb-4, .body[_ngcontent-%COMP%]  .my-4 {\n  margin-bottom: 1.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .ml-4, .nav[_ngcontent-%COMP%]  .mx-4, .body[_ngcontent-%COMP%]  .ml-4, .body[_ngcontent-%COMP%]  .mx-4 {\n  margin-left: 1.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .m-5, .body[_ngcontent-%COMP%]  .m-5 {\n  margin: 3rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mt-5, .nav[_ngcontent-%COMP%]  .my-5, .body[_ngcontent-%COMP%]  .mt-5, .body[_ngcontent-%COMP%]  .my-5 {\n  margin-top: 3rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mr-5, .nav[_ngcontent-%COMP%]  .mx-5, .body[_ngcontent-%COMP%]  .mr-5, .body[_ngcontent-%COMP%]  .mx-5 {\n  margin-right: 3rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mb-5, .nav[_ngcontent-%COMP%]  .my-5, .body[_ngcontent-%COMP%]  .mb-5, .body[_ngcontent-%COMP%]  .my-5 {\n  margin-bottom: 3rem !important;\n}\n.nav[_ngcontent-%COMP%]  .ml-5, .nav[_ngcontent-%COMP%]  .mx-5, .body[_ngcontent-%COMP%]  .ml-5, .body[_ngcontent-%COMP%]  .mx-5 {\n  margin-left: 3rem !important;\n}\n.nav[_ngcontent-%COMP%]  .p-0, .body[_ngcontent-%COMP%]  .p-0 {\n  padding: 0 !important;\n}\n.nav[_ngcontent-%COMP%]  .pt-0, .nav[_ngcontent-%COMP%]  .py-0, .body[_ngcontent-%COMP%]  .pt-0, .body[_ngcontent-%COMP%]  .py-0 {\n  padding-top: 0 !important;\n}\n.nav[_ngcontent-%COMP%]  .pr-0, .nav[_ngcontent-%COMP%]  .px-0, .body[_ngcontent-%COMP%]  .pr-0, .body[_ngcontent-%COMP%]  .px-0 {\n  padding-right: 0 !important;\n}\n.nav[_ngcontent-%COMP%]  .pb-0, .nav[_ngcontent-%COMP%]  .py-0, .body[_ngcontent-%COMP%]  .pb-0, .body[_ngcontent-%COMP%]  .py-0 {\n  padding-bottom: 0 !important;\n}\n.nav[_ngcontent-%COMP%]  .pl-0, .nav[_ngcontent-%COMP%]  .px-0, .body[_ngcontent-%COMP%]  .pl-0, .body[_ngcontent-%COMP%]  .px-0 {\n  padding-left: 0 !important;\n}\n.nav[_ngcontent-%COMP%]  .p-1, .body[_ngcontent-%COMP%]  .p-1 {\n  padding: 0.25rem !important;\n}\n.nav[_ngcontent-%COMP%]  .pt-1, .nav[_ngcontent-%COMP%]  .py-1, .body[_ngcontent-%COMP%]  .pt-1, .body[_ngcontent-%COMP%]  .py-1 {\n  padding-top: 0.25rem !important;\n}\n.nav[_ngcontent-%COMP%]  .pr-1, .nav[_ngcontent-%COMP%]  .px-1, .body[_ngcontent-%COMP%]  .pr-1, .body[_ngcontent-%COMP%]  .px-1 {\n  padding-right: 0.25rem !important;\n}\n.nav[_ngcontent-%COMP%]  .pb-1, .nav[_ngcontent-%COMP%]  .py-1, .body[_ngcontent-%COMP%]  .pb-1, .body[_ngcontent-%COMP%]  .py-1 {\n  padding-bottom: 0.25rem !important;\n}\n.nav[_ngcontent-%COMP%]  .pl-1, .nav[_ngcontent-%COMP%]  .px-1, .body[_ngcontent-%COMP%]  .pl-1, .body[_ngcontent-%COMP%]  .px-1 {\n  padding-left: 0.25rem !important;\n}\n.nav[_ngcontent-%COMP%]  .p-2, .body[_ngcontent-%COMP%]  .p-2 {\n  padding: 0.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .pt-2, .nav[_ngcontent-%COMP%]  .py-2, .body[_ngcontent-%COMP%]  .pt-2, .body[_ngcontent-%COMP%]  .py-2 {\n  padding-top: 0.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .pr-2, .nav[_ngcontent-%COMP%]  .px-2, .body[_ngcontent-%COMP%]  .pr-2, .body[_ngcontent-%COMP%]  .px-2 {\n  padding-right: 0.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .pb-2, .nav[_ngcontent-%COMP%]  .py-2, .body[_ngcontent-%COMP%]  .pb-2, .body[_ngcontent-%COMP%]  .py-2 {\n  padding-bottom: 0.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .pl-2, .nav[_ngcontent-%COMP%]  .px-2, .body[_ngcontent-%COMP%]  .pl-2, .body[_ngcontent-%COMP%]  .px-2 {\n  padding-left: 0.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .p-3, .body[_ngcontent-%COMP%]  .p-3 {\n  padding: 1rem !important;\n}\n.nav[_ngcontent-%COMP%]  .pt-3, .nav[_ngcontent-%COMP%]  .py-3, .body[_ngcontent-%COMP%]  .pt-3, .body[_ngcontent-%COMP%]  .py-3 {\n  padding-top: 1rem !important;\n}\n.nav[_ngcontent-%COMP%]  .pr-3, .nav[_ngcontent-%COMP%]  .px-3, .body[_ngcontent-%COMP%]  .pr-3, .body[_ngcontent-%COMP%]  .px-3 {\n  padding-right: 1rem !important;\n}\n.nav[_ngcontent-%COMP%]  .pb-3, .nav[_ngcontent-%COMP%]  .py-3, .body[_ngcontent-%COMP%]  .pb-3, .body[_ngcontent-%COMP%]  .py-3 {\n  padding-bottom: 1rem !important;\n}\n.nav[_ngcontent-%COMP%]  .pl-3, .nav[_ngcontent-%COMP%]  .px-3, .body[_ngcontent-%COMP%]  .pl-3, .body[_ngcontent-%COMP%]  .px-3 {\n  padding-left: 1rem !important;\n}\n.nav[_ngcontent-%COMP%]  .p-4, .body[_ngcontent-%COMP%]  .p-4 {\n  padding: 1.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .pt-4, .nav[_ngcontent-%COMP%]  .py-4, .body[_ngcontent-%COMP%]  .pt-4, .body[_ngcontent-%COMP%]  .py-4 {\n  padding-top: 1.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .pr-4, .nav[_ngcontent-%COMP%]  .px-4, .body[_ngcontent-%COMP%]  .pr-4, .body[_ngcontent-%COMP%]  .px-4 {\n  padding-right: 1.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .pb-4, .nav[_ngcontent-%COMP%]  .py-4, .body[_ngcontent-%COMP%]  .pb-4, .body[_ngcontent-%COMP%]  .py-4 {\n  padding-bottom: 1.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .pl-4, .nav[_ngcontent-%COMP%]  .px-4, .body[_ngcontent-%COMP%]  .pl-4, .body[_ngcontent-%COMP%]  .px-4 {\n  padding-left: 1.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .p-5, .body[_ngcontent-%COMP%]  .p-5 {\n  padding: 3rem !important;\n}\n.nav[_ngcontent-%COMP%]  .pt-5, .nav[_ngcontent-%COMP%]  .py-5, .body[_ngcontent-%COMP%]  .pt-5, .body[_ngcontent-%COMP%]  .py-5 {\n  padding-top: 3rem !important;\n}\n.nav[_ngcontent-%COMP%]  .pr-5, .nav[_ngcontent-%COMP%]  .px-5, .body[_ngcontent-%COMP%]  .pr-5, .body[_ngcontent-%COMP%]  .px-5 {\n  padding-right: 3rem !important;\n}\n.nav[_ngcontent-%COMP%]  .pb-5, .nav[_ngcontent-%COMP%]  .py-5, .body[_ngcontent-%COMP%]  .pb-5, .body[_ngcontent-%COMP%]  .py-5 {\n  padding-bottom: 3rem !important;\n}\n.nav[_ngcontent-%COMP%]  .pl-5, .nav[_ngcontent-%COMP%]  .px-5, .body[_ngcontent-%COMP%]  .pl-5, .body[_ngcontent-%COMP%]  .px-5 {\n  padding-left: 3rem !important;\n}\n.nav[_ngcontent-%COMP%]  .m-n1, .body[_ngcontent-%COMP%]  .m-n1 {\n  margin: -0.25rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mt-n1, .nav[_ngcontent-%COMP%]  .my-n1, .body[_ngcontent-%COMP%]  .mt-n1, .body[_ngcontent-%COMP%]  .my-n1 {\n  margin-top: -0.25rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mr-n1, .nav[_ngcontent-%COMP%]  .mx-n1, .body[_ngcontent-%COMP%]  .mr-n1, .body[_ngcontent-%COMP%]  .mx-n1 {\n  margin-right: -0.25rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mb-n1, .nav[_ngcontent-%COMP%]  .my-n1, .body[_ngcontent-%COMP%]  .mb-n1, .body[_ngcontent-%COMP%]  .my-n1 {\n  margin-bottom: -0.25rem !important;\n}\n.nav[_ngcontent-%COMP%]  .ml-n1, .nav[_ngcontent-%COMP%]  .mx-n1, .body[_ngcontent-%COMP%]  .ml-n1, .body[_ngcontent-%COMP%]  .mx-n1 {\n  margin-left: -0.25rem !important;\n}\n.nav[_ngcontent-%COMP%]  .m-n2, .body[_ngcontent-%COMP%]  .m-n2 {\n  margin: -0.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mt-n2, .nav[_ngcontent-%COMP%]  .my-n2, .body[_ngcontent-%COMP%]  .mt-n2, .body[_ngcontent-%COMP%]  .my-n2 {\n  margin-top: -0.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mr-n2, .nav[_ngcontent-%COMP%]  .mx-n2, .body[_ngcontent-%COMP%]  .mr-n2, .body[_ngcontent-%COMP%]  .mx-n2 {\n  margin-right: -0.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mb-n2, .nav[_ngcontent-%COMP%]  .my-n2, .body[_ngcontent-%COMP%]  .mb-n2, .body[_ngcontent-%COMP%]  .my-n2 {\n  margin-bottom: -0.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .ml-n2, .nav[_ngcontent-%COMP%]  .mx-n2, .body[_ngcontent-%COMP%]  .ml-n2, .body[_ngcontent-%COMP%]  .mx-n2 {\n  margin-left: -0.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .m-n3, .body[_ngcontent-%COMP%]  .m-n3 {\n  margin: -1rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mt-n3, .nav[_ngcontent-%COMP%]  .my-n3, .body[_ngcontent-%COMP%]  .mt-n3, .body[_ngcontent-%COMP%]  .my-n3 {\n  margin-top: -1rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mr-n3, .nav[_ngcontent-%COMP%]  .mx-n3, .body[_ngcontent-%COMP%]  .mr-n3, .body[_ngcontent-%COMP%]  .mx-n3 {\n  margin-right: -1rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mb-n3, .nav[_ngcontent-%COMP%]  .my-n3, .body[_ngcontent-%COMP%]  .mb-n3, .body[_ngcontent-%COMP%]  .my-n3 {\n  margin-bottom: -1rem !important;\n}\n.nav[_ngcontent-%COMP%]  .ml-n3, .nav[_ngcontent-%COMP%]  .mx-n3, .body[_ngcontent-%COMP%]  .ml-n3, .body[_ngcontent-%COMP%]  .mx-n3 {\n  margin-left: -1rem !important;\n}\n.nav[_ngcontent-%COMP%]  .m-n4, .body[_ngcontent-%COMP%]  .m-n4 {\n  margin: -1.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mt-n4, .nav[_ngcontent-%COMP%]  .my-n4, .body[_ngcontent-%COMP%]  .mt-n4, .body[_ngcontent-%COMP%]  .my-n4 {\n  margin-top: -1.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mr-n4, .nav[_ngcontent-%COMP%]  .mx-n4, .body[_ngcontent-%COMP%]  .mr-n4, .body[_ngcontent-%COMP%]  .mx-n4 {\n  margin-right: -1.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mb-n4, .nav[_ngcontent-%COMP%]  .my-n4, .body[_ngcontent-%COMP%]  .mb-n4, .body[_ngcontent-%COMP%]  .my-n4 {\n  margin-bottom: -1.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .ml-n4, .nav[_ngcontent-%COMP%]  .mx-n4, .body[_ngcontent-%COMP%]  .ml-n4, .body[_ngcontent-%COMP%]  .mx-n4 {\n  margin-left: -1.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .m-n5, .body[_ngcontent-%COMP%]  .m-n5 {\n  margin: -3rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mt-n5, .nav[_ngcontent-%COMP%]  .my-n5, .body[_ngcontent-%COMP%]  .mt-n5, .body[_ngcontent-%COMP%]  .my-n5 {\n  margin-top: -3rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mr-n5, .nav[_ngcontent-%COMP%]  .mx-n5, .body[_ngcontent-%COMP%]  .mr-n5, .body[_ngcontent-%COMP%]  .mx-n5 {\n  margin-right: -3rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mb-n5, .nav[_ngcontent-%COMP%]  .my-n5, .body[_ngcontent-%COMP%]  .mb-n5, .body[_ngcontent-%COMP%]  .my-n5 {\n  margin-bottom: -3rem !important;\n}\n.nav[_ngcontent-%COMP%]  .ml-n5, .nav[_ngcontent-%COMP%]  .mx-n5, .body[_ngcontent-%COMP%]  .ml-n5, .body[_ngcontent-%COMP%]  .mx-n5 {\n  margin-left: -3rem !important;\n}\n.nav[_ngcontent-%COMP%]  .m-auto, .body[_ngcontent-%COMP%]  .m-auto {\n  margin: auto !important;\n}\n.nav[_ngcontent-%COMP%]  .mt-auto, .nav[_ngcontent-%COMP%]  .my-auto, .body[_ngcontent-%COMP%]  .mt-auto, .body[_ngcontent-%COMP%]  .my-auto {\n  margin-top: auto !important;\n}\n.nav[_ngcontent-%COMP%]  .mr-auto, .nav[_ngcontent-%COMP%]  .mx-auto, .body[_ngcontent-%COMP%]  .mr-auto, .body[_ngcontent-%COMP%]  .mx-auto {\n  margin-right: auto !important;\n}\n.nav[_ngcontent-%COMP%]  .mb-auto, .nav[_ngcontent-%COMP%]  .my-auto, .body[_ngcontent-%COMP%]  .mb-auto, .body[_ngcontent-%COMP%]  .my-auto {\n  margin-bottom: auto !important;\n}\n.nav[_ngcontent-%COMP%]  .ml-auto, .nav[_ngcontent-%COMP%]  .mx-auto, .body[_ngcontent-%COMP%]  .ml-auto, .body[_ngcontent-%COMP%]  .mx-auto {\n  margin-left: auto !important;\n}\n.nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  margin-bottom: 26px;\n  padding-bottom: 66.66667%;\n  position: relative;\n}\n.nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]     > img, .nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]     > div {\n  align-items: center;\n  bottom: 0;\n  display: flex;\n  font-family: \"Roboto Condensed\", Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 32px;\n  justify-content: center;\n  left: 0;\n  line-height: 40px;\n  margin: auto;\n  max-height: 100%;\n  max-width: 100%;\n  position: absolute;\n  right: 0;\n  text-align: center;\n  top: 0;\n}\n.nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  font-family: \"Roboto Condensed\", Roboto, \"Helvetica Neue\", sans-serif;\n  min-height: 32px;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #6e8591;\n  font-size: 24px;\n  text-align: center;\n  min-width: 48px;\n}\n.nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  min-width: 48px;\n  position: relative;\n}\n.nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 16px;\n  margin: 0 auto;\n  max-width: 20px;\n  z-index: 1;\n}\n.nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]::before {\n  background-color: #fff;\n  border-radius: 25%;\n  content: \"\";\n  height: 24px;\n  left: calc(24px - 24px / 2);\n  position: absolute;\n  width: 24px;\n}\n.nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   div.active[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   div.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.nav[_ngcontent-%COMP%]::after {\n  border-right: 1px solid #b2b2b2;\n  content: \"\";\n  height: calc(100% - 2 * 26px);\n  position: absolute;\n  right: 0;\n  top: 26px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Rvb2wuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zdHlsZXMvX3RoZW1lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTU07RUFDRSx5QkNJTjtBRFRGO0FBSU07RUFDRSx5QkNJTjtBRE5GO0FBQ007RUFDRSx5QkNJTjtBREhGO0FBRk07RUFDRSx5QkNJTjtBREFGO0FBTE07RUFDRSx5QkNJTjtBREdGO0FBREE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFDYkk7RURjSixrQkFBQTtFQUNBLGVBQUE7QUFJRjtBQUZFO0VBQ0UsV0FBQTtBQUlKO0FBREU7RUE4VkUseUNBQUE7QUExVko7QUFISTtFQUNFLGlCQUFBO0FBS047QUFGSTtFQUNFLGdCQUFBO0FBSU47QUFESTtFQUNFLGNBQUE7QUFHTjtBQUFJO0VBQ0UsaUJBQUE7QUFFTjtBQUNJO0VBQ0UsZUFBQTtBQUNOO0FBRUk7RUFDRSxVQUFBO0FBQU47QUFHSTtFQUNFLFVBQUE7QUFETjtBQUlJO0VBQ0UsV0FBQTtBQUZOO0FBS0k7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FBSE47QUFNSTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQUpOO0FBT0k7RUFDRSxtQkFBQTtBQUxOO0FBUUk7RUFDRSxjQUFBO0FBTk47QUFTSTtFQUNFLGNBQUE7QUFQTjtBQVVJO0VBQ0UsY0FBQTtBQVJOO0FBV0k7RUFDRSxjQUFBO0FBVE47QUFZSTtFQUNFLGNBQUE7QUFWTjtBQWFJO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FBWE47QUFjSTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQVpOO0FBZUk7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUFiTjtBQWdCSTtFQUNFLHlCQ3BHRztFRHFHSCxXQUFBO0FBZE47QUFpQkk7RUFDRSw0QkFBQTtBQWZOO0FBa0JJO0VBQ0Usa0JBQUE7QUFoQk47QUFtQkk7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUFqQk47QUFvQkk7RUFDRSxnQkFBQTtBQWxCTjtBQXFCSTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQW5CTjtBQXNCSTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQXBCTjtBQXVCSTtFQUNFLGlCQUFBO0FBckJOO0FBd0JJO0VBQ0UsV0FBQTtBQXRCTjtBQXlCSTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQXZCTjtBQTBCSTtFQUNFLFVBQUE7QUF4Qk47QUE0Qkk7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUExQk47QUE2Qkk7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUEzQk47QUE4Qkk7RUFDRSx5QkFBQTtBQTVCTjtBQStCSTtFQUNFLG1CQUFBO0VBQ0EsZ0NBQUE7QUE3Qk47QUFnQ0k7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBOUJOO0FBaUNJOzs7RUFFRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUE5Qk47QUFpQ0k7RUFDRSxzQkFBQTtFQUNBLGdDQUFBO0FBL0JOO0FBa0NJO0VBQ0UsNkJBQUE7QUFoQ047QUFtQ0k7OztFQUVFLGVBQUE7QUFoQ047QUFtQ0k7RUFDRSx5QkFBQTtBQWpDTjtBQW9DSTs7O0VBRUUseUJBQUE7QUFqQ047QUFvQ0k7OztFQUVFLHdCQUFBO0FBakNOO0FBb0NJOzs7Ozs7O0VBSUUsU0FBQTtBQS9CTjtBQWtDSTtFQUNFLHFDQUFBO0FBaENOO0FBbUNJO0VBQ0UsY0FBQTtFQUNBLHNDQUFBO0FBakNOO0FBb0NJOzs7OztFQUdFLHlCQUFBO0FBaENOO0FBbUNJOzs7Ozs7O0VBSUUscUJBQUE7QUE5Qk47QUFpQ0k7RUFDRSx5QkFBQTtBQS9CTjtBQWtDSTs7O0VBRUUseUJBQUE7QUEvQk47QUFrQ0k7Ozs7O0VBR0UseUJBQUE7QUE5Qk47QUFpQ0k7Ozs7Ozs7RUFJRSxxQkFBQTtBQTVCTjtBQStCSTtFQUNFLHlCQUFBO0FBN0JOO0FBZ0NJOzs7RUFFRSx5QkFBQTtBQTdCTjtBQWdDSTs7Ozs7RUFHRSxzQ0FBQTtBQTVCTjtBQStCSTtFQUNFLHNDQUFBO0FBN0JOO0FBZ0NJOzs7RUFFRSxzQ0FBQTtBQTdCTjtBQWdDSTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBOUJOO0FBaUNJO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUEvQk47QUFrQ0k7RUFDRTtJQUNFLGNBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQ0FBQTtFQWhDTjtFQWtDSTtJQUNFLFNBQUE7RUFoQ047QUFDRjtBQW1DSTtFQUNFO0lBQ0UsY0FBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtJQUNBLGlDQUFBO0VBakNOO0VBbUNJO0lBQ0UsU0FBQTtFQWpDTjtBQUNGO0FBb0NJO0VBQ0U7SUFDRSxjQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0lBQ0EsaUNBQUE7RUFsQ047RUFvQ0k7SUFDRSxTQUFBO0VBbENOO0FBQ0Y7QUFxQ0k7RUFDRTtJQUNFLGNBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQ0FBQTtFQW5DTjtFQXFDSTtJQUNFLFNBQUE7RUFuQ047QUFDRjtBQXNDSTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtBQXBDTjtBQXVDSTtFQUNFLFNBQUE7QUFyQ047QUF3Q0k7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUF0Q047QUF5Q0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQXZDTjtBQTJDSTs7O0VBRUUsd0JBQUE7QUF4Q047QUEyQ0k7OztFQUVFLDBCQUFBO0FBeENOO0FBMkNJOzs7RUFFRSwyQkFBQTtBQXhDTjtBQTJDSTs7O0VBRUUseUJBQUE7QUF4Q047QUEyQ0k7RUFDRSwwQkFBQTtBQXpDTjtBQTRDSTs7O0VBRUUsOEJBQUE7QUF6Q047QUE0Q0k7OztFQUVFLGdDQUFBO0FBekNOO0FBNENJOzs7RUFFRSxpQ0FBQTtBQXpDTjtBQTRDSTs7O0VBRUUsK0JBQUE7QUF6Q047QUE0Q0k7RUFDRSx5QkFBQTtBQTFDTjtBQTZDSTs7O0VBRUUsNkJBQUE7QUExQ047QUE2Q0k7OztFQUVFLCtCQUFBO0FBMUNOO0FBNkNJOzs7RUFFRSxnQ0FBQTtBQTFDTjtBQTZDSTs7O0VBRUUsOEJBQUE7QUExQ047QUE2Q0k7RUFDRSx1QkFBQTtBQTNDTjtBQThDSTs7O0VBRUUsMkJBQUE7QUEzQ047QUE4Q0k7OztFQUVFLDZCQUFBO0FBM0NOO0FBOENJOzs7RUFFRSw4QkFBQTtBQTNDTjtBQThDSTs7O0VBRUUsNEJBQUE7QUEzQ047QUE4Q0k7RUFDRSx5QkFBQTtBQTVDTjtBQStDSTs7O0VBRUUsNkJBQUE7QUE1Q047QUErQ0k7OztFQUVFLCtCQUFBO0FBNUNOO0FBK0NJOzs7RUFFRSxnQ0FBQTtBQTVDTjtBQStDSTs7O0VBRUUsOEJBQUE7QUE1Q047QUErQ0k7RUFDRSx1QkFBQTtBQTdDTjtBQWdESTs7O0VBRUUsMkJBQUE7QUE3Q047QUFnREk7OztFQUVFLDZCQUFBO0FBN0NOO0FBZ0RJOzs7RUFFRSw4QkFBQTtBQTdDTjtBQWdESTs7O0VBRUUsNEJBQUE7QUE3Q047QUFnREk7RUFDRSxxQkFBQTtBQTlDTjtBQWlESTs7O0VBRUUseUJBQUE7QUE5Q047QUFpREk7OztFQUVFLDJCQUFBO0FBOUNOO0FBaURJOzs7RUFFRSw0QkFBQTtBQTlDTjtBQWlESTs7O0VBRUUsMEJBQUE7QUE5Q047QUFpREk7RUFDRSwyQkFBQTtBQS9DTjtBQWtESTs7O0VBRUUsK0JBQUE7QUEvQ047QUFrREk7OztFQUVFLGlDQUFBO0FBL0NOO0FBa0RJOzs7RUFFRSxrQ0FBQTtBQS9DTjtBQWtESTs7O0VBRUUsZ0NBQUE7QUEvQ047QUFrREk7RUFDRSwwQkFBQTtBQWhETjtBQW1ESTs7O0VBRUUsOEJBQUE7QUFoRE47QUFtREk7OztFQUVFLGdDQUFBO0FBaEROO0FBbURJOzs7RUFFRSxpQ0FBQTtBQWhETjtBQW1ESTs7O0VBRUUsK0JBQUE7QUFoRE47QUFtREk7RUFDRSx3QkFBQTtBQWpETjtBQW9ESTs7O0VBRUUsNEJBQUE7QUFqRE47QUFvREk7OztFQUVFLDhCQUFBO0FBakROO0FBb0RJOzs7RUFFRSwrQkFBQTtBQWpETjtBQW9ESTs7O0VBRUUsNkJBQUE7QUFqRE47QUFvREk7RUFDRSwwQkFBQTtBQWxETjtBQXFESTs7O0VBRUUsOEJBQUE7QUFsRE47QUFxREk7OztFQUVFLGdDQUFBO0FBbEROO0FBcURJOzs7RUFFRSxpQ0FBQTtBQWxETjtBQXFESTs7O0VBRUUsK0JBQUE7QUFsRE47QUFxREk7RUFDRSx3QkFBQTtBQW5ETjtBQXNESTs7O0VBRUUsNEJBQUE7QUFuRE47QUFzREk7OztFQUVFLDhCQUFBO0FBbkROO0FBc0RJOzs7RUFFRSwrQkFBQTtBQW5ETjtBQXNESTs7O0VBRUUsNkJBQUE7QUFuRE47QUFzREk7RUFDRSwyQkFBQTtBQXBETjtBQXVESTs7O0VBRUUsK0JBQUE7QUFwRE47QUF1REk7OztFQUVFLGlDQUFBO0FBcEROO0FBdURJOzs7RUFFRSxrQ0FBQTtBQXBETjtBQXVESTs7O0VBRUUsZ0NBQUE7QUFwRE47QUF1REk7RUFDRSwwQkFBQTtBQXJETjtBQXdESTs7O0VBRUUsOEJBQUE7QUFyRE47QUF3REk7OztFQUVFLGdDQUFBO0FBckROO0FBd0RJOzs7RUFFRSxpQ0FBQTtBQXJETjtBQXdESTs7O0VBRUUsK0JBQUE7QUFyRE47QUF3REk7RUFDRSx3QkFBQTtBQXRETjtBQXlESTs7O0VBRUUsNEJBQUE7QUF0RE47QUF5REk7OztFQUVFLDhCQUFBO0FBdEROO0FBeURJOzs7RUFFRSwrQkFBQTtBQXRETjtBQXlESTs7O0VBRUUsNkJBQUE7QUF0RE47QUF5REk7RUFDRSwwQkFBQTtBQXZETjtBQTBESTs7O0VBRUUsOEJBQUE7QUF2RE47QUEwREk7OztFQUVFLGdDQUFBO0FBdkROO0FBMERJOzs7RUFFRSxpQ0FBQTtBQXZETjtBQTBESTs7O0VBRUUsK0JBQUE7QUF2RE47QUEwREk7RUFDRSx3QkFBQTtBQXhETjtBQTJESTs7O0VBRUUsNEJBQUE7QUF4RE47QUEyREk7OztFQUVFLDhCQUFBO0FBeEROO0FBMkRJOzs7RUFFRSwrQkFBQTtBQXhETjtBQTJESTs7O0VBRUUsNkJBQUE7QUF4RE47QUEyREk7RUFDRSx1QkFBQTtBQXpETjtBQTRESTs7O0VBRUUsMkJBQUE7QUF6RE47QUE0REk7OztFQUVFLDZCQUFBO0FBekROO0FBNERJOzs7RUFFRSw4QkFBQTtBQXpETjtBQTRESTs7O0VBRUUsNEJBQUE7QUF6RE47QUErREU7RUFDRSxtQkNweUJFO0VEcXlCRix5QkFBQTtFQUNBLGtCQUFBO0FBNURKO0FBK0RNO0VBQ0UsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLHFFQ2p6QlU7RURrekJWLGVBQUE7RUFDQSx1QkFBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7QUE3RFI7QUFrRUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFoRUo7QUFrRUk7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EscUVDejBCWTtFRDAwQlosZ0JBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0FBaEVOO0FBa0VNO0VBQ0UsY0N4MEJHO0VEeTBCSCxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBaEVSO0FBbUVNO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBakVSO0FBbUVRO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQWpFVjtBQW9FUTtFQUVFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFKTztFQUtQLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQVBPO0FBNURqQjtBQXVFTTtFQUNFLFdBQUE7QUFyRVI7QUF1RVE7RUFDRSxXQUFBO0FBckVWO0FBMkVFO0VBQ0UsK0JBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQ3YzQkU7QUQ4eUJOIiwiZmlsZSI6InRvb2wuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwidGhlbWVcIjtcblxuOmhvc3Qge1xuICBAZWFjaCAkY29sb3IgaW4gJGNvbG9ycyB7XG4gICAgJGk6IGluZGV4KCRjb2xvcnMsICRjb2xvcik7XG4gICAgJltkYXRhLWNvbG9yPVwiI3skaX1cIl0ge1xuICAgICAgbmF2IGRpdi5hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5uYXYsIC5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gIHBhZGRpbmc6ICRwYWQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxcmVtO1xuXG4gICY6Om5nLWRlZXAgPiBkaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgJjo6bmctZGVlcCB7XG4gICAgLm1hdC1oMyB7XG4gICAgICBmb250LXNpemU6MS4yNWVtO1xuICAgIH1cbiAgICBcbiAgICAubWF0LWg1IHtcbiAgICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgfVxuXG4gICAgLm1hdC1oNiB7XG4gICAgICBmb250LXNpemU6IDFlbTtcbiAgICB9XG5cbiAgICBwLCB1bCwgb2wge1xuICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgfVxuICAgIFxuICAgIHRhYmxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG5cbiAgICAubG9nb2ltZy0zcCB7XG4gICAgICB3aWR0aDo4MCU7XG4gICAgfVxuXG4gICAgLmxvZ29pbWctM3AyIHtcbiAgICAgIHdpZHRoOjYwJTtcbiAgICB9XG5cbiAgICAuYXMtaW1nIHtcbiAgICAgIHdpZHRoOjEwMCU7XG4gICAgfVxuXG4gICAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgYSB7XG4gICAgICBjb2xvcjogIzAyNDg4MDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIGEubm90LWJvbGQge1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICB9XG5cbiAgICAuY29sb3ItMSB7XG4gICAgICBjb2xvcjogIzNCODhBRjtcbiAgICB9XG4gICAgXG4gICAgLmNvbG9yLTIge1xuICAgICAgY29sb3I6ICMwMjQ4ODA7XG4gICAgfVxuICAgIFxuICAgIC5jb2xvci0zIHtcbiAgICAgIGNvbG9yOiAjNDc4NjYyO1xuICAgIH1cbiAgICBcbiAgICAuY29sb3ItNCB7XG4gICAgICBjb2xvcjogIzA5NEY1ODtcbiAgICB9XG4gICAgXG4gICAgLmNvbG9yLTUge1xuICAgICAgY29sb3I6ICNGNUFGMTM7XG4gICAgfSBcblxuICAgIC5idG4tdHlwZS0xIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzQjg4QUY7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG5cbiAgICAuYnRuLXR5cGUtMiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI0ODgwO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gICAgLmJ0bi10eXBlLTMge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3ODY2MjtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cblxuICAgIC5idG4tdHlwZS01IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG5cbiAgICAubWF0LWgyLCAubWF0LWgzLCAubWF0LWg0LCAubWF0LWg1LCAubWF0LWg2IHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmNlbnRlciB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmJvbGQge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBjb2xvcjogIzJFMkQyRDtcbiAgICB9XG5cbiAgICAuc21hbGxlci10ZXh0IHtcbiAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgfVxuXG4gICAgLmJsdWUtY2FsbG91dCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI0ODgwO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgICB9XG5cbiAgICAuY2FsbG91dCB7XG4gICAgICB3aWR0aDo0MCU7XG4gICAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICB9XG4gICAgXG4gICAgLmJvbGQtbGluayB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICAuY2FyZC1pbWcge1xuICAgICAgd2lkdGg6MTAwJTtcbiAgICB9XG5cbiAgICAuaW1nLWcxIHtcbiAgICAgIHdpZHRoOjU1JTtcbiAgICAgIHBhZGRpbmctbGVmdDoyMHB4O1xuICAgIH1cbiAgICBcbiAgICAuaW1nLWcyIHtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgXG4gICAgfVxuICAgIFxuICAgIC5pbWctZzMge1xuICAgICAgd2lkdGg6IDQ1JTtcbiAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICB9XG4gICAgXG4gICAgLmltZy1nNCB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIH1cblxuICAgIHRhYmxlIHtcbiAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgfVxuICAgIFxuICAgIHRoIHtcbiAgICAgIHRleHQtYWxpZ246IGluaGVyaXQ7XG4gICAgICB0ZXh0LWFsaWduOiAtd2Via2l0LW1hdGNoLXBhcmVudDtcbiAgICB9XG4gICAgXG4gICAgdGFibGUge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgY29sb3I6ICMyMTI1Mjk7XG4gICAgfVxuICAgIFxuICAgIC50YWJsZSB0aCxcbiAgICAudGFibGUgdGQge1xuICAgICAgcGFkZGluZzogMC43NXJlbTtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcbiAgICB9XG4gICAgXG4gICAgLnRhYmxlIHRoZWFkIHRoIHtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RlZTJlNjtcbiAgICB9XG4gICAgXG4gICAgLnRhYmxlIHRib2R5ICsgdGJvZHkge1xuICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNkZWUyZTY7XG4gICAgfVxuICAgIFxuICAgIC50YWJsZS1zbSB0aCxcbiAgICAudGFibGUtc20gdGQge1xuICAgICAgcGFkZGluZzogMC4zcmVtO1xuICAgIH1cbiAgICBcbiAgICAudGFibGUtYm9yZGVyZWQge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcbiAgICB9XG4gICAgXG4gICAgLnRhYmxlLWJvcmRlcmVkIHRoLFxuICAgIC50YWJsZS1ib3JkZXJlZCB0ZCB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xuICAgIH1cbiAgICBcbiAgICAudGFibGUtYm9yZGVyZWQgdGhlYWQgdGgsXG4gICAgLnRhYmxlLWJvcmRlcmVkIHRoZWFkIHRkIHtcbiAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcbiAgICB9XG4gICAgXG4gICAgLnRhYmxlLWJvcmRlcmxlc3MgdGgsXG4gICAgLnRhYmxlLWJvcmRlcmxlc3MgdGQsXG4gICAgLnRhYmxlLWJvcmRlcmxlc3MgdGhlYWQgdGgsXG4gICAgLnRhYmxlLWJvcmRlcmxlc3MgdGJvZHkgKyB0Ym9keSB7XG4gICAgICBib3JkZXI6IDA7XG4gICAgfVxuICAgIFxuICAgIC50YWJsZS1zdHJpcGVkIHRib2R5IHRyOm50aC1vZi10eXBlKG9kZCkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICB9XG4gICAgXG4gICAgLnRhYmxlLWhvdmVyIHRib2R5IHRyOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjMjEyNTI5O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA3NSk7XG4gICAgfVxuICAgIFxuICAgIC50YWJsZS1wcmltYXJ5LFxuICAgIC50YWJsZS1wcmltYXJ5ID4gdGgsXG4gICAgLnRhYmxlLXByaW1hcnkgPiB0ZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjhkYWZmO1xuICAgIH1cbiAgICBcbiAgICAudGFibGUtcHJpbWFyeSB0aCxcbiAgICAudGFibGUtcHJpbWFyeSB0ZCxcbiAgICAudGFibGUtcHJpbWFyeSB0aGVhZCB0aCxcbiAgICAudGFibGUtcHJpbWFyeSB0Ym9keSArIHRib2R5IHtcbiAgICAgIGJvcmRlci1jb2xvcjogIzdhYmFmZjtcbiAgICB9XG4gICAgXG4gICAgLnRhYmxlLWhvdmVyIC50YWJsZS1wcmltYXJ5OmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5ZmNkZmY7XG4gICAgfVxuICAgIFxuICAgIC50YWJsZS1ob3ZlciAudGFibGUtcHJpbWFyeTpob3ZlciA+IHRkLFxuICAgIC50YWJsZS1ob3ZlciAudGFibGUtcHJpbWFyeTpob3ZlciA+IHRoIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5ZmNkZmY7XG4gICAgfVxuICAgIFxuICAgIC50YWJsZS1saWdodCxcbiAgICAudGFibGUtbGlnaHQgPiB0aCxcbiAgICAudGFibGUtbGlnaHQgPiB0ZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZGZlO1xuICAgIH1cbiAgICBcbiAgICAudGFibGUtbGlnaHQgdGgsXG4gICAgLnRhYmxlLWxpZ2h0IHRkLFxuICAgIC50YWJsZS1saWdodCB0aGVhZCB0aCxcbiAgICAudGFibGUtbGlnaHQgdGJvZHkgKyB0Ym9keSB7XG4gICAgICBib3JkZXItY29sb3I6ICNmYmZjZmM7XG4gICAgfVxuICAgIFxuICAgIC50YWJsZS1ob3ZlciAudGFibGUtbGlnaHQ6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNmNjtcbiAgICB9XG4gICAgXG4gICAgLnRhYmxlLWhvdmVyIC50YWJsZS1saWdodDpob3ZlciA+IHRkLFxuICAgIC50YWJsZS1ob3ZlciAudGFibGUtbGlnaHQ6aG92ZXIgPiB0aCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2Y2O1xuICAgIH1cbiAgICBcbiAgICAudGFibGUtYWN0aXZlLFxuICAgIC50YWJsZS1hY3RpdmUgPiB0aCxcbiAgICAudGFibGUtYWN0aXZlID4gdGQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA3NSk7XG4gICAgfVxuICAgIFxuICAgIC50YWJsZS1ob3ZlciAudGFibGUtYWN0aXZlOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xuICAgIH1cbiAgICBcbiAgICAudGFibGUtaG92ZXIgLnRhYmxlLWFjdGl2ZTpob3ZlciA+IHRkLFxuICAgIC50YWJsZS1ob3ZlciAudGFibGUtYWN0aXZlOmhvdmVyID4gdGgge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA3NSk7XG4gICAgfVxuICAgIFxuICAgIC50YWJsZSAudGhlYWQtZGFyayB0aCB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDA7XG4gICAgICBib3JkZXItY29sb3I6ICM0NTRkNTU7XG4gICAgfVxuICAgIFxuICAgIC50YWJsZSAudGhlYWQtbGlnaHQgdGgge1xuICAgICAgY29sb3I6ICM0OTUwNTc7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xuICAgICAgYm9yZGVyLWNvbG9yOiAjZGVlMmU2O1xuICAgIH1cbiAgICBcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcbiAgICAgIC50YWJsZS1yZXNwb25zaXZlLXNtIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgICAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgICB9XG4gICAgICAudGFibGUtcmVzcG9uc2l2ZS1zbSA+IC50YWJsZS1ib3JkZXJlZCB7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4gICAgICAudGFibGUtcmVzcG9uc2l2ZS1tZCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgICAgfVxuICAgICAgLnRhYmxlLXJlc3BvbnNpdmUtbWQgPiAudGFibGUtYm9yZGVyZWQge1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xuICAgICAgLnRhYmxlLXJlc3BvbnNpdmUtbGcge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgICAgIH1cbiAgICAgIC50YWJsZS1yZXNwb25zaXZlLWxnID4gLnRhYmxlLWJvcmRlcmVkIHtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSB7XG4gICAgICAudGFibGUtcmVzcG9uc2l2ZS14bCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgICAgfVxuICAgICAgLnRhYmxlLXJlc3BvbnNpdmUteGwgPiAudGFibGUtYm9yZGVyZWQge1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC50YWJsZS1yZXNwb25zaXZlIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgIH1cbiAgICBcbiAgICAudGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZS1ib3JkZXJlZCB7XG4gICAgICBib3JkZXI6IDA7XG4gICAgfVxuICAgIFxuICAgIGEuYm9sZC1saW5rOmhvdmVyIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIH1cblxuICAgIC5jb2xsYWItaW1hZ2Uge1xuICAgICAgd2lkdGg6IDEwMCU7IFxuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cblxuICAgIC8qIGJvb3RzdHJhcCBtYXJnaW4gYW5kIHBhZGRpbmcgY2xhc3NlcyAqL1xuICAgIC5tdC0wLFxuICAgIC5teS0wIHtcbiAgICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubXItMCxcbiAgICAubXgtMCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubWItMCxcbiAgICAubXktMCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm1sLTAsXG4gICAgLm14LTAge1xuICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubS0xIHtcbiAgICAgIG1hcmdpbjogMC4yNXJlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5tdC0xLFxuICAgIC5teS0xIHtcbiAgICAgIG1hcmdpbi10b3A6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubXItMSxcbiAgICAubXgtMSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubWItMSxcbiAgICAubXktMSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm1sLTEsXG4gICAgLm14LTEge1xuICAgICAgbWFyZ2luLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubS0yIHtcbiAgICAgIG1hcmdpbjogMC41cmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm10LTIsXG4gICAgLm15LTIge1xuICAgICAgbWFyZ2luLXRvcDogMC41cmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm1yLTIsXG4gICAgLm14LTIge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubWItMixcbiAgICAubXktMiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubWwtMixcbiAgICAubXgtMiB7XG4gICAgICBtYXJnaW4tbGVmdDogMC41cmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm0tMyB7XG4gICAgICBtYXJnaW46IDFyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubXQtMyxcbiAgICAubXktMyB7XG4gICAgICBtYXJnaW4tdG9wOiAxcmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm1yLTMsXG4gICAgLm14LTMge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm1iLTMsXG4gICAgLm15LTMge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5tbC0zLFxuICAgIC5teC0zIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm0tNCB7XG4gICAgICBtYXJnaW46IDEuNXJlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5tdC00LFxuICAgIC5teS00IHtcbiAgICAgIG1hcmdpbi10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5tci00LFxuICAgIC5teC00IHtcbiAgICAgIG1hcmdpbi1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm1iLTQsXG4gICAgLm15LTQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm1sLTQsXG4gICAgLm14LTQge1xuICAgICAgbWFyZ2luLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5tLTUge1xuICAgICAgbWFyZ2luOiAzcmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm10LTUsXG4gICAgLm15LTUge1xuICAgICAgbWFyZ2luLXRvcDogM3JlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5tci01LFxuICAgIC5teC01IHtcbiAgICAgIG1hcmdpbi1yaWdodDogM3JlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5tYi01LFxuICAgIC5teS01IHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubWwtNSxcbiAgICAubXgtNSB7XG4gICAgICBtYXJnaW4tbGVmdDogM3JlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5wLTAge1xuICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5wdC0wLFxuICAgIC5weS0wIHtcbiAgICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnByLTAsXG4gICAgLnB4LTAge1xuICAgICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5wYi0wLFxuICAgIC5weS0wIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnBsLTAsXG4gICAgLnB4LTAge1xuICAgICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnAtMSB7XG4gICAgICBwYWRkaW5nOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnB0LTEsXG4gICAgLnB5LTEge1xuICAgICAgcGFkZGluZy10b3A6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAucHItMSxcbiAgICAucHgtMSB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnBiLTEsXG4gICAgLnB5LTEge1xuICAgICAgcGFkZGluZy1ib3R0b206IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAucGwtMSxcbiAgICAucHgtMSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAucC0yIHtcbiAgICAgIHBhZGRpbmc6IDAuNXJlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5wdC0yLFxuICAgIC5weS0yIHtcbiAgICAgIHBhZGRpbmctdG9wOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAucHItMixcbiAgICAucHgtMiB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAucGItMixcbiAgICAucHktMiB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnBsLTIsXG4gICAgLnB4LTIge1xuICAgICAgcGFkZGluZy1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAucC0zIHtcbiAgICAgIHBhZGRpbmc6IDFyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAucHQtMyxcbiAgICAucHktMyB7XG4gICAgICBwYWRkaW5nLXRvcDogMXJlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5wci0zLFxuICAgIC5weC0zIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAucGItMyxcbiAgICAucHktMyB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5wbC0zLFxuICAgIC5weC0zIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMXJlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5wLTQge1xuICAgICAgcGFkZGluZzogMS41cmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnB0LTQsXG4gICAgLnB5LTQge1xuICAgICAgcGFkZGluZy10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5wci00LFxuICAgIC5weC00IHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEuNXJlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5wYi00LFxuICAgIC5weS00IHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAucGwtNCxcbiAgICAucHgtNCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5wLTUge1xuICAgICAgcGFkZGluZzogM3JlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5wdC01LFxuICAgIC5weS01IHtcbiAgICAgIHBhZGRpbmctdG9wOiAzcmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnByLTUsXG4gICAgLnB4LTUge1xuICAgICAgcGFkZGluZy1yaWdodDogM3JlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5wYi01LFxuICAgIC5weS01IHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnBsLTUsXG4gICAgLnB4LTUge1xuICAgICAgcGFkZGluZy1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm0tbjEge1xuICAgICAgbWFyZ2luOiAtMC4yNXJlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5tdC1uMSxcbiAgICAubXktbjEge1xuICAgICAgbWFyZ2luLXRvcDogLTAuMjVyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubXItbjEsXG4gICAgLm14LW4xIHtcbiAgICAgIG1hcmdpbi1yaWdodDogLTAuMjVyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubWItbjEsXG4gICAgLm15LW4xIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IC0wLjI1cmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm1sLW4xLFxuICAgIC5teC1uMSB7XG4gICAgICBtYXJnaW4tbGVmdDogLTAuMjVyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubS1uMiB7XG4gICAgICBtYXJnaW46IC0wLjVyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubXQtbjIsXG4gICAgLm15LW4yIHtcbiAgICAgIG1hcmdpbi10b3A6IC0wLjVyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubXItbjIsXG4gICAgLm14LW4yIHtcbiAgICAgIG1hcmdpbi1yaWdodDogLTAuNXJlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5tYi1uMixcbiAgICAubXktbjIge1xuICAgICAgbWFyZ2luLWJvdHRvbTogLTAuNXJlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5tbC1uMixcbiAgICAubXgtbjIge1xuICAgICAgbWFyZ2luLWxlZnQ6IC0wLjVyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubS1uMyB7XG4gICAgICBtYXJnaW46IC0xcmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm10LW4zLFxuICAgIC5teS1uMyB7XG4gICAgICBtYXJnaW4tdG9wOiAtMXJlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5tci1uMyxcbiAgICAubXgtbjMge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAtMXJlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5tYi1uMyxcbiAgICAubXktbjMge1xuICAgICAgbWFyZ2luLWJvdHRvbTogLTFyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubWwtbjMsXG4gICAgLm14LW4zIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMXJlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5tLW40IHtcbiAgICAgIG1hcmdpbjogLTEuNXJlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5tdC1uNCxcbiAgICAubXktbjQge1xuICAgICAgbWFyZ2luLXRvcDogLTEuNXJlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5tci1uNCxcbiAgICAubXgtbjQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAtMS41cmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm1iLW40LFxuICAgIC5teS1uNCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAtMS41cmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm1sLW40LFxuICAgIC5teC1uNCB7XG4gICAgICBtYXJnaW4tbGVmdDogLTEuNXJlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5tLW41IHtcbiAgICAgIG1hcmdpbjogLTNyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubXQtbjUsXG4gICAgLm15LW41IHtcbiAgICAgIG1hcmdpbi10b3A6IC0zcmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm1yLW41LFxuICAgIC5teC1uNSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IC0zcmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm1iLW41LFxuICAgIC5teS1uNSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAtM3JlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5tbC1uNSxcbiAgICAubXgtbjUge1xuICAgICAgbWFyZ2luLWxlZnQ6IC0zcmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm0tYXV0byB7XG4gICAgICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubXQtYXV0byxcbiAgICAubXktYXV0byB7XG4gICAgICBtYXJnaW4tdG9wOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm1yLWF1dG8sXG4gICAgLm14LWF1dG8ge1xuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm1iLWF1dG8sXG4gICAgLm15LWF1dG8ge1xuICAgICAgbWFyZ2luLWJvdHRvbTogYXV0byAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5tbC1hdXRvLFxuICAgIC5teC1hdXRvIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cbi5uYXYge1xuICAubG9nbyB7XG4gICAgbWFyZ2luLWJvdHRvbTogJHBhZDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNjYuNjY2NjclOyAvLyAzLzIgYXNwZWN0IHJhdGlvXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgOjpuZy1kZWVwIHtcbiAgICAgID4gaW1nLCA+IGRpdiB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICRyb2JvdG9Db25kZW5zZWQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB0b3A6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICBkaXYge1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmb250LWZhbWlseTogJHJvYm90b0NvbmRlbnNlZDtcbiAgICAgIG1pbi1oZWlnaHQ6IDMycHg7XG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcblxuICAgICAgaSB7XG4gICAgICAgIGNvbG9yOiAkYmx1ZUdyYXk7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtaW4td2lkdGg6IDQ4cHg7XG4gICAgICB9XG5cbiAgICAgIGRpdiB7XG4gICAgICAgIG1pbi13aWR0aDogNDhweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIG1heC13aWR0aDogMjBweDtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAkc2l6ZTogMjRweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1JTtcbiAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICBoZWlnaHQ6ICRzaXplO1xuICAgICAgICAgIGxlZnQ6IGNhbGMoMjRweCAtICN7JHNpemV9IC8gMik7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHdpZHRoOiAkc2l6ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuXG4gICAgICAgIGkge1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJjo6YWZ0ZXIge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNiMmIyYjI7XG4gICAgY29udGVudDogJyc7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyICogI3skcGFkfSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogJHBhZDtcbiAgfVxufVxuXG4iLCIkcm9ib3RvQ29uZGVuc2VkOiBcIlJvYm90byBDb25kZW5zZWRcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG5cbiRtYXhXaWR0aDogMTIwMHB4O1xuXG4kcGFkOiAyNnB4O1xuXG4kYmx1ZUdyYXk6ICM2ZTg1OTE7XG4kZ3JheTogI2VlZTtcbiRvcmFuZ2U6ICNmNWFmMTM7XG5cbiRjb2xvcnM6XG4gICMzYjg4YWZcbiAgIzAyNDg4MFxuICAjNDc4NjYyXG4gICMwOTRmNThcbiAgJG9yYW5nZTtcblxuJGhvdmVyT3BhY2l0eTogMC44O1xuIl19 */"] });


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-markdown */ "lR5k");
/* harmony import */ var _modules_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/material.module */ "NA4g");
/* harmony import */ var _components_tool_tool_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/tool/tool.component */ "NLSS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["HammerModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            ngx_markdown__WEBPACK_IMPORTED_MODULE_5__["MarkdownModule"].forRoot({ loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }),
            _modules_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
        ], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["HammerModule"],
        ngx_markdown__WEBPACK_IMPORTED_MODULE_5__["MarkdownModule"],
        _modules_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_tool_tool_component__WEBPACK_IMPORTED_MODULE_7__["ToolComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["HammerModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], ngx_markdown__WEBPACK_IMPORTED_MODULE_5__["MarkdownModule"], _modules_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]], exports: [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["HammerModule"],
        ngx_markdown__WEBPACK_IMPORTED_MODULE_5__["MarkdownModule"],
        _modules_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
        _components_tool_tool_component__WEBPACK_IMPORTED_MODULE_7__["ToolComponent"]] }); })();


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_classes_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/classes/constants */ "yAoa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu/menu.component */ "TGkX");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");









class AppComponent {
    constructor(router, titleService) {
        this.router = router;
        this.titleService = titleService;
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]) {
                const prefix = event.urlAfterRedirects.replace(/^(\/.+?)(\/.*)/g, '$1');
                const title = _shared_classes_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].titles[prefix];
                if (title) {
                    titleService.setTitle(`${_shared_classes_constants__WEBPACK_IMPORTED_MODULE_1__["appTitle"]} | ${title}`);
                }
                else {
                    titleService.setTitle(_shared_classes_constants__WEBPACK_IMPORTED_MODULE_1__["appTitle"]);
                }
            }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [["fxFlex", "grow"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column !important;\n  max-width: 1200px;\n  min-height: 100%;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL3N0eWxlcy9fdGhlbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxpQ0FBQTtFQUNBLGlCQ0hTO0VESVQsZ0JBQUE7RUFDQSxjQUFBO0FBREYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInRoZW1lXCI7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6ICRtYXhXaWR0aDtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4iLCIkcm9ib3RvQ29uZGVuc2VkOiBcIlJvYm90byBDb25kZW5zZWRcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG5cbiRtYXhXaWR0aDogMTIwMHB4O1xuXG4kcGFkOiAyNnB4O1xuXG4kYmx1ZUdyYXk6ICM2ZTg1OTE7XG4kZ3JheTogI2VlZTtcbiRvcmFuZ2U6ICNmNWFmMTM7XG5cbiRjb2xvcnM6XG4gICMzYjg4YWZcbiAgIzAyNDg4MFxuICAjNDc4NjYyXG4gICMwOTRmNThcbiAgJG9yYW5nZTtcblxuJGhvdmVyT3BhY2l0eTogMC44O1xuIl19 */"] });


/***/ }),

/***/ "TGkX":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");





const _c0 = function (a0) { return { "active": a0 }; };
function MenuComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const navItem_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", navItem_r2.route)("fxFlex", ctx_r0.flexWidth)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r0.isParentActive(navItem_r2)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](navItem_r2.title);
} }
function MenuComponent_section_5_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const child_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", child_r5.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](child_r5.title);
} }
function MenuComponent_section_5_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const child_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", child_r5.route, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", child_r5.title, " ");
} }
function MenuComponent_section_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuComponent_section_5_ng_container_1_div_1_Template, 2, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MenuComponent_section_5_ng_container_1_div_2_Template, 4, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const child_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !child_r5.external);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", child_r5.external);
} }
function MenuComponent_section_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuComponent_section_5_ng_container_1_Template, 3, 2, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const navItem_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", ctx_r1.flexWidth);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", navItem_r3.children);
} }
const _c1 = function (a0) { return { "opened": a0 }; };
class MenuComponent {
    constructor(router) {
        this.router = router;
        this.opened = false;
        this.navItems = [{
                title: 'Data Collection & Reporting',
                route: '/collection-reporting',
                children: [{
                        title: 'ENERGY STAR Portfolio Manager',
                        route: 'https://www.energystar.gov/buildings/facility-owners-and-managers/existing-buildings/use-portfolio-manager',
                        external: true
                    }, {
                        title: 'Building Energy Audit Template',
                        route: '/audit-template'
                    }, {
                        title: 'Data Standardization',
                        route: '/data-standardization'
                    }]
            }, {
                title: 'Management & Compliance',
                route: '/management-compliance',
                children: [{
                        title: 'SEED Platform',
                        route: '/seed'
                    }]
            }, {
                title: 'Analysis & Evaluation',
                route: '/analysis-evaluation',
                children: [{
                        title: 'ComStock & ResStock',
                        route: '/comstock-resstock'
                    }, {
                        title: 'BETTER',
                        route: '/better'
                    }, {
                        title: 'Building Energy Asset Score',
                        route: '/asset-score'
                    }, {
                        title: 'Building Performance Database',
                        route: '/bpd'
                    }]
            }, {
                title: 'Goals & Outcomes',
                route: '/goals',
                children: [{
                        title: 'Analyze Building Stock',
                        route: '/goals/analyze'
                    }, {
                        title: 'Target Efficiency Upgrades',
                        route: '/goals/target'
                    }, {
                        title: 'Achieve Compliance',
                        route: '/goals/compliance'
                    }, {
                        title: 'Customize',
                        route: '/goals/customize'
                    }]
            }, {
                title: 'For Developers',
                route: '/developers',
                children: [{
                        title: 'BuildingSync',
                        route: '/building-sync'
                    }, {
                        title: 'UBID',
                        route: '/ubid'
                    }, {
                        title: 'BEDES',
                        route: '/bedes'
                    }, {
                        title: 'Open Efficiency Platform',
                        route: '/oep'
                    }, {
                        title: '3rd Party Tools',
                        route: '/third-party'
                    }]
            }];
        this.flexWidth = 100 / this.navItems.length;
    }
    onMouseEnter() {
        this.opened = true;
    }
    onMouseLeave() {
        this.opened = false;
    }
    isParentActive(navItem) {
        if (navItem.route === this.router.url) {
            return true;
        }
        // Special cases
        if (navItem.route === '/goals-outcomes' && this.router.url === '/goals') {
            return true;
        }
        if (navItem.children) {
            return navItem.children.map(child => child.route).some(url => this.router.url.startsWith(url));
        }
        return false;
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], hostBindings: function MenuComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function MenuComponent_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function MenuComponent_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, decls: 6, vars: 5, consts: [[3, "ngClass"], ["fxFlex", ""], ["fxLayout", "row", "fxLayoutGap", "32px", 1, "top-row"], [4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutGap", "32px", 1, "child-row"], [3, "fxFlex", 4, "ngFor", "ngForOf"], [1, "category", 3, "routerLink", "fxFlex", "ngClass"], [3, "fxFlex"], ["routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], [4, "ngIf"], ["routerLinkActive", "active", 3, "routerLink"], ["target", "_blank"], [1, "fas", "fa-external-link-alt"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MenuComponent_ng_container_3_Template, 3, 6, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MenuComponent_section_5_Template, 2, 2, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, ctx.opened));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultClassDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["[_nghost-%COMP%] {\n  font-family: \"Roboto Condensed\", Roboto, \"Helvetica Neue\", sans-serif;\n  -webkit-user-select: none;\n          user-select: none;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n}\n.category[_ngcontent-%COMP%]:nth-of-type(1):hover {\n  background-color: rgba(59, 136, 175, 0.2);\n}\n.category[_ngcontent-%COMP%]:nth-of-type(1)::before {\n  border-top: 4px solid #3b88af;\n}\n.child-row[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]:nth-of-type(1)    > div.active[_ngcontent-%COMP%] {\n  background: #3b88af;\n  color: #fff;\n  font-weight: bold;\n}\n.child-row[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]:nth-of-type(1)    > div[_ngcontent-%COMP%]:not(.active):hover {\n  background-color: rgba(59, 136, 175, 0.2);\n}\n.child-row[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]:nth-of-type(1)    > div[_ngcontent-%COMP%]::before {\n  border-top: 2px solid #3b88af;\n}\n.category[_ngcontent-%COMP%]:nth-of-type(2):hover {\n  background-color: rgba(2, 72, 128, 0.2);\n}\n.category[_ngcontent-%COMP%]:nth-of-type(2)::before {\n  border-top: 4px solid #024880;\n}\n.child-row[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]:nth-of-type(2)    > div.active[_ngcontent-%COMP%] {\n  background: #024880;\n  color: #fff;\n  font-weight: bold;\n}\n.child-row[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]:nth-of-type(2)    > div[_ngcontent-%COMP%]:not(.active):hover {\n  background-color: rgba(2, 72, 128, 0.2);\n}\n.child-row[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]:nth-of-type(2)    > div[_ngcontent-%COMP%]::before {\n  border-top: 2px solid #024880;\n}\n.category[_ngcontent-%COMP%]:nth-of-type(3):hover {\n  background-color: rgba(71, 134, 98, 0.2);\n}\n.category[_ngcontent-%COMP%]:nth-of-type(3)::before {\n  border-top: 4px solid #478662;\n}\n.child-row[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]:nth-of-type(3)    > div.active[_ngcontent-%COMP%] {\n  background: #478662;\n  color: #fff;\n  font-weight: bold;\n}\n.child-row[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]:nth-of-type(3)    > div[_ngcontent-%COMP%]:not(.active):hover {\n  background-color: rgba(71, 134, 98, 0.2);\n}\n.child-row[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]:nth-of-type(3)    > div[_ngcontent-%COMP%]::before {\n  border-top: 2px solid #478662;\n}\n.category[_ngcontent-%COMP%]:nth-of-type(4):hover {\n  background-color: rgba(9, 79, 88, 0.2);\n}\n.category[_ngcontent-%COMP%]:nth-of-type(4)::before {\n  border-top: 4px solid #094f58;\n}\n.child-row[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]:nth-of-type(4)    > div.active[_ngcontent-%COMP%] {\n  background: #094f58;\n  color: #fff;\n  font-weight: bold;\n}\n.child-row[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]:nth-of-type(4)    > div[_ngcontent-%COMP%]:not(.active):hover {\n  background-color: rgba(9, 79, 88, 0.2);\n}\n.child-row[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]:nth-of-type(4)    > div[_ngcontent-%COMP%]::before {\n  border-top: 2px solid #094f58;\n}\n.category[_ngcontent-%COMP%]:nth-of-type(5):hover {\n  background-color: rgba(245, 175, 19, 0.2);\n}\n.category[_ngcontent-%COMP%]:nth-of-type(5)::before {\n  border-top: 4px solid #f5af13;\n}\n.child-row[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]:nth-of-type(5)    > div.active[_ngcontent-%COMP%] {\n  background: #f5af13;\n  color: #fff;\n  font-weight: bold;\n}\n.child-row[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]:nth-of-type(5)    > div[_ngcontent-%COMP%]:not(.active):hover {\n  background-color: rgba(245, 175, 19, 0.2);\n}\n.child-row[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]:nth-of-type(5)    > div[_ngcontent-%COMP%]::before {\n  border-top: 2px solid #f5af13;\n}\n.top-row[_ngcontent-%COMP%] {\n  background-color: #eee;\n  min-height: 40px;\n  text-transform: uppercase;\n  font-size: 0.95rem;\n}\n.top-row[_ngcontent-%COMP%]    > .category[_ngcontent-%COMP%] {\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  padding-top: 4px;\n  position: relative;\n  text-align: center;\n}\n.top-row[_ngcontent-%COMP%]    > .category[_ngcontent-%COMP%]:first-child {\n  margin-left: 26px;\n}\n.top-row[_ngcontent-%COMP%]    > .category[_ngcontent-%COMP%]:last-child {\n  margin-right: 26px;\n}\n.top-row[_ngcontent-%COMP%]    > .category[_ngcontent-%COMP%]::before {\n  content: \"\";\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.top-row[_ngcontent-%COMP%]    > .category.active[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.top-row[_ngcontent-%COMP%]    > .category.active[_ngcontent-%COMP%]::before {\n  border-top-width: 8px;\n  top: -4px;\n}\n.child-row[_ngcontent-%COMP%] {\n  background-color: #eee;\n  font-size: 0.9rem;\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 250ms ease-out;\n}\n.child-row[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  color: #444;\n  cursor: pointer;\n  padding: 8px 8px 0;\n  position: relative;\n}\n.child-row[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .child-row[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited {\n  color: #444;\n}\n.child-row[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]::before {\n  content: \"\";\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.child-row[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]:first-child {\n  margin-left: 26px;\n}\n.child-row[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]:last-child {\n  margin-right: 26px;\n  padding-bottom: 10px;\n}\n.opened[_ngcontent-%COMP%]   .child-row[_ngcontent-%COMP%] {\n  max-height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21lbnUuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9zdHlsZXMvX3RoZW1lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxxRUNIZ0I7RURJaEIseUJBQUE7VUFBQSxpQkFBQTtBQURGO0FBR0U7RUFDRSxhQUFBO0FBREo7QUFRSTtFQUNFLHlDQUFBO0FBTE47QUFRSTtFQUNFLDZCQUFBO0FBTk47QUFXSTtFQUNFLG1CQ2RKO0VEZUksV0FBQTtFQUNBLGlCQUFBO0FBUk47QUFXSTtFQUNFLHlDQUFBO0FBVE47QUFZSTtFQUNFLDZCQUFBO0FBVk47QUFYSTtFQUNFLHVDQUFBO0FBY047QUFYSTtFQUNFLDZCQUFBO0FBYU47QUFSSTtFQUNFLG1CQ2RKO0VEZUksV0FBQTtFQUNBLGlCQUFBO0FBV047QUFSSTtFQUNFLHVDQUFBO0FBVU47QUFQSTtFQUNFLDZCQUFBO0FBU047QUE5Qkk7RUFDRSx3Q0FBQTtBQWlDTjtBQTlCSTtFQUNFLDZCQUFBO0FBZ0NOO0FBM0JJO0VBQ0UsbUJDZEo7RURlSSxXQUFBO0VBQ0EsaUJBQUE7QUE4Qk47QUEzQkk7RUFDRSx3Q0FBQTtBQTZCTjtBQTFCSTtFQUNFLDZCQUFBO0FBNEJOO0FBakRJO0VBQ0Usc0NBQUE7QUFvRE47QUFqREk7RUFDRSw2QkFBQTtBQW1ETjtBQTlDSTtFQUNFLG1CQ2RKO0VEZUksV0FBQTtFQUNBLGlCQUFBO0FBaUROO0FBOUNJO0VBQ0Usc0NBQUE7QUFnRE47QUE3Q0k7RUFDRSw2QkFBQTtBQStDTjtBQXBFSTtFQUNFLHlDQUFBO0FBdUVOO0FBcEVJO0VBQ0UsNkJBQUE7QUFzRU47QUFqRUk7RUFDRSxtQkNkSjtFRGVJLFdBQUE7RUFDQSxpQkFBQTtBQW9FTjtBQWpFSTtFQUNFLHlDQUFBO0FBbUVOO0FBaEVJO0VBQ0UsNkJBQUE7QUFrRU47QUE3REE7RUFDRSxzQkNsQ0s7RURtQ0wsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBZ0VGO0FBOURFO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBZ0VKO0FBOURJO0VBQ0UsaUJDcERBO0FEb0hOO0FBN0RJO0VBQ0Usa0JDeERBO0FEdUhOO0FBNURJO0VBQ0UsV0FBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FBOEROO0FBM0RJO0VBQ0UsaUJBQUE7QUE2RE47QUEzRE07RUFDRSxxQkFBQTtFQUNBLFNBQUE7QUE2RFI7QUF2REE7RUFDRSxzQkM1RUs7RUQ2RUwsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQ0FBQTtBQTBERjtBQXZESTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQXlETjtBQXZETTtFQUNFLFdBQUE7QUF5RFI7QUF0RE07RUFDRSxXQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7QUF3RFI7QUFwREk7RUFDRSxpQkMxR0E7QURnS047QUFuREk7RUFDRSxrQkM5R0E7RUQrR0Esb0JBQUE7QUFxRE47QUFoREE7RUFDRSxnQkFBQTtBQW1ERiIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInRoZW1lXCI7XG5cbjpob3N0IHtcbiAgZm9udC1mYW1pbHk6ICRyb2JvdG9Db25kZW5zZWQ7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuXG4gID4gZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG59XG5cbkBlYWNoICRjb2xvciBpbiAkY29sb3JzIHtcbiAgJGk6IGluZGV4KCRjb2xvcnMsICRjb2xvcik7XG4gIC5jYXRlZ29yeTpudGgtb2YtdHlwZSgjeyRpfSkge1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnRpemUoJGNvbG9yLCAkaG92ZXJPcGFjaXR5KTtcbiAgICB9XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICRjb2xvcjtcbiAgICB9XG4gIH1cblxuICAuY2hpbGQtcm93ID4gc2VjdGlvbjpudGgtb2YtdHlwZSgjeyRpfSkgPiBkaXYge1xuICAgICYuYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6ICRjb2xvcjtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgJjpub3QoLmFjdGl2ZSk6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnRpemUoJGNvbG9yLCAkaG92ZXJPcGFjaXR5KTtcbiAgICB9XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICRjb2xvcjtcbiAgICB9XG4gIH1cbn1cblxuLnRvcC1yb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JheTtcbiAgbWluLWhlaWdodDogNDBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xuXG4gID4gLmNhdGVnb3J5IHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiA0cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWxlZnQ6ICRwYWQ7XG4gICAgfVxuXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1yaWdodDogJHBhZDtcbiAgICB9XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgJi5hY3RpdmUge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGJvcmRlci10b3Atd2lkdGg6IDhweDtcbiAgICAgICAgdG9wOiAtNHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uY2hpbGQtcm93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyYXk7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBtYXgtaGVpZ2h0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDI1MG1zIGVhc2Utb3V0O1xuXG4gID4gc2VjdGlvbiB7XG4gICAgPiBkaXYge1xuICAgICAgY29sb3I6ICM0NDQ7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBwYWRkaW5nOiA4cHggOHB4IDA7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIGEsIGE6dmlzaXRlZCB7XG4gICAgICAgIGNvbG9yOiAjNDQ0O1xuICAgICAgfVxuXG4gICAgICAmOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWxlZnQ6ICRwYWQ7XG4gICAgfVxuXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1yaWdodDogJHBhZDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIH1cbiAgfVxufVxuXG4ub3BlbmVkIC5jaGlsZC1yb3cge1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuIiwiJHJvYm90b0NvbmRlbnNlZDogXCJSb2JvdG8gQ29uZGVuc2VkXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuXG4kbWF4V2lkdGg6IDEyMDBweDtcblxuJHBhZDogMjZweDtcblxuJGJsdWVHcmF5OiAjNmU4NTkxO1xuJGdyYXk6ICNlZWU7XG4kb3JhbmdlOiAjZjVhZjEzO1xuXG4kY29sb3JzOlxuICAjM2I4OGFmXG4gICMwMjQ4ODBcbiAgIzQ3ODY2MlxuICAjMDk0ZjU4XG4gICRvcmFuZ2U7XG5cbiRob3Zlck9wYWNpdHk6IDAuODtcbiJdfQ== */"] });


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ "PCNd");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu/menu.component */ "TGkX");
/* harmony import */ var _tools_overview_data_standardization_data_standardization_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tools-overview/data-standardization/data-standardization.component */ "1qPM");
/* harmony import */ var _tools_overview_analysis_evaluation_analysis_evaluation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tools-overview/analysis-evaluation/analysis-evaluation.component */ "aP66");
/* harmony import */ var _tools_overview_collection_reporting_collection_reporting_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tools-overview/collection-reporting/collection-reporting.component */ "pyga");
/* harmony import */ var _tools_overview_developers_developers_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tools-overview/developers/developers.component */ "6JCy");
/* harmony import */ var _tools_overview_goals_outcomes_goals_outcomes_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tools-overview/goals-outcomes/goals-outcomes.component */ "FLSU");
/* harmony import */ var _tools_overview_management_compliance_management_compliance_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tools-overview/management-compliance/management-compliance.component */ "p7J/");
/* harmony import */ var _tools_overview_tools_overview_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tools-overview/tools-overview.component */ "rX8i");
/* harmony import */ var _home_graphic_graphic_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/graphic/graphic.component */ "1Rfq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ "fXoL");


















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, imports: [[
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_tools_overview_analysis_evaluation_analysis_evaluation_component__WEBPACK_IMPORTED_MODULE_10__["AnalysisEvaluationComponent"],
        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _tools_overview_collection_reporting_collection_reporting_component__WEBPACK_IMPORTED_MODULE_11__["CollectionReportingComponent"],
        _tools_overview_data_standardization_data_standardization_component__WEBPACK_IMPORTED_MODULE_9__["DataStandardizationComponent"],
        _tools_overview_developers_developers_component__WEBPACK_IMPORTED_MODULE_12__["DevelopersComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _tools_overview_goals_outcomes_goals_outcomes_component__WEBPACK_IMPORTED_MODULE_13__["GoalsOutcomesComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _tools_overview_management_compliance_management_compliance_component__WEBPACK_IMPORTED_MODULE_14__["ManagementComplianceComponent"],
        _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"],
        _tools_overview_tools_overview_component__WEBPACK_IMPORTED_MODULE_15__["ToolsOverviewComponent"],
        _home_graphic_graphic_component__WEBPACK_IMPORTED_MODULE_16__["GraphicComponent"]], imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]] }); })();


/***/ }),

/***/ "aP66":
/*!*************************************************************************************!*\
  !*** ./src/app/tools-overview/analysis-evaluation/analysis-evaluation.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AnalysisEvaluationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalysisEvaluationComponent", function() { return AnalysisEvaluationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _tools_overview_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tools-overview.component */ "rX8i");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AnalysisEvaluationComponent {
    constructor() {
    }
}
AnalysisEvaluationComponent.ɵfac = function AnalysisEvaluationComponent_Factory(t) { return new (t || AnalysisEvaluationComponent)(); };
AnalysisEvaluationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnalysisEvaluationComponent, selectors: [["ng-component"]], decls: 39, vars: 0, consts: [["slot", "left"], ["slot", "right", "fxLayout", "column"], ["fxLayout", "row"], [1, "logo"], ["src", "assets/images/com-resstock-logos.svg", "alt", "ComStock & ResStock Logos", "routerLink", "/comstock-resstock"], [1, "description"], ["routerLink", "/comstock-resstock"], ["src", "assets/images/better-logo.svg", "alt", "BETTER Logo", "routerLink", "/better"], ["routerLink", "/better"], ["src", "assets/images/asset-score-logo.svg", "alt", "Asset Score Logo", "routerLink", "/asset-score"], ["routerLink", "/asset-score"], ["src", "assets/images/bpd-logo.svg", "alt", "Building Performance Database Logo", "routerLink", "/bpd"], ["routerLink", "/bpd"]], template: function AnalysisEvaluationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-tools-overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Analysis & Evaluation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Would you like to turn building data into actionable upgrade recommendations? Explore the tools at right to learn how they work together to deliver real-world results.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Use the ComStock and ResStock models to identify the most impactful upgrade measures for your local building stock. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Learn more.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Use BETTER to identify immediate, cost-saving energy efficiency measures in your portfolio and to pinpoint opportunities for further assessment. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Learn more.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Asset Score is a \u201Cmiles-per-gallon\u201D rating for buildings. Use it to quickly generate a report containing current and potential efficiency scores along with a prioritized list of cost-effective upgrade recommendations. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Learn more.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "The Building Performance Database (BPD) is the nation\u2019s largest source of commercial and residential building energy data. Use it to learn more about your buildings and how they perform against user-defined peer groups. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Learn more.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_tools_overview_component__WEBPACK_IMPORTED_MODULE_1__["ToolsOverviewComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited {\n  color: #478662;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FuYWx5c2lzLWV2YWx1YXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFBO0FBREYiLCJmaWxlIjoiYW5hbHlzaXMtZXZhbHVhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ0aGVtZVwiO1xuXG5hLCBhOnZpc2l0ZWQge1xuICBjb2xvcjogbnRoKCRjb2xvcnMsIDMpO1xufVxuIl19 */"] });


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class HeaderComponent {
    constructor() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 3, vars: 0, consts: [[1, "top-header"], ["routerLink", "/", 1, "title"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Building Performance Tools");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".top-header[_ngcontent-%COMP%] {\n  background-color: #094F58;\n  background-image: url('datatools_header.jpg');\n  font-family: \"Roboto\", sans-serif;\n  color: white;\n  padding: 4px 52px;\n  min-height: 100px;\n  display: flex;\n  text-transform: uppercase;\n  margin-bottom: 3px;\n}\n.top-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-bottom: 0px;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 300;\n  font-size: 2rem;\n  padding-left: 5rem;\n  padding-bottom: 5px;\n  align-self: flex-end;\n}\n.top-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 300;\n  font-size: 2.1rem;\n}\nh2[_ngcontent-%COMP%] {\n  color: #616161;\n  font-size: 22px;\n  font-weight: normal;\n  margin: 0;\n  padding: 4px 26px;\n  text-transform: uppercase;\n  font-family: \"Roboto Condensed\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHlCQUFBO0VBQ0EsNkNBQUE7RUFDQSxpQ0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFERjtBQUdFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFESjtBQUlFO0VBQ0UsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBRko7QUFNQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDJDQUFBO0FBSEYiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInRoZW1lXCI7XG5cbi50b3AtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA5NEY1ODtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9kYXRhdG9vbHNfaGVhZGVyLmpwZ1wiKTtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDRweCAkcGFkKjI7XG4gIG1pbi1oZWlnaHQ6MTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcblxuICBoMSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6MzAwO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6NXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICB9XG5cbiAgLnRpdGxlIHtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6MzAwO1xuICAgIGZvbnQtc2l6ZTogMi4xcmVtO1xuICB9XG59XG5cbmgyIHtcbiAgY29sb3I6ICM2MTYxNjE7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiA0cHggJHBhZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");


class FooterComponent {
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 27, vars: 0, consts: [["fxLayout", "column"], ["fxLayout", "row"], ["fxFlex", "25"], ["src", "assets/images/doe_eere_logo_footer.svg", "alt", "DOE EERE logo"], ["src", "assets/images/berkley_lab_logo_footer.svg", "alt", "LBNL logo"], ["fxFlex", "25", "fxLayout", "column", "fxLayoutAlign", "center"], ["src", "assets/images/nrel_logo_footer.svg", "alt", "NREL logo"], ["src", "assets/images/pnnl_logo_footer.svg", "alt", "PNNL logo"], ["fxLayout", "row", 1, "descriptions"], ["fxFlex", "25%"], ["fxLayoutAlign", " center", 1, "contact"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Driving Building Energy Performance with Data was developed to showcase tools and methods developed by Lawrence Berkeley National Laboratory, National Renewable Energy Laboratory, and Pacific Northwest National Laboratory with support from the U.S. Department of Energy's Building Technologies Office.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "U.S. Department of Energy's Office of Energy Efficiency and Renewable Energy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Lawrence Berkeley National Laboratory (LBNL) is a national laboratory of the U.S. Department of Energy, operated by the University of California.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "The National Renewable Energy Laboratory (NREL) is a national laboratory of the U.S. Department of Energy, Office of Energy Efficiency and Renewable Energy, operated by the Alliance for Sustainable Energy, LLC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Pacific Northwest National Laboratory (PNNL) is a national laboratory of the U.S. Department of Energy, operated by Battelle.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Contact us for more information on data tools");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"]], styles: ["[_nghost-%COMP%] {\n  background-color: #eee;\n}\n\nstrong[_ngcontent-%COMP%] {\n  font-weight: 500;\n  padding: 14px 26px;\n}\n\n.descriptions[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  font-size: 11px;\n  padding: 14px 26px 8px;\n}\n\n.descriptions[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:not(:last-child) {\n  border-right: 3px solid #fff;\n}\n\nsection[_ngcontent-%COMP%] {\n  padding: 0 26px;\n}\n\nsection[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding-bottom: 25%;\n  position: relative;\n}\n\nsection[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  height: 100%;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\nsection[_ngcontent-%COMP%]:not(:last-child) {\n  border-right: 3px solid #fff;\n}\n\n.contact[_ngcontent-%COMP%] {\n  background-color: #6e8591;\n  color: #fff;\n  height: 21px;\n  padding: 0 26px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdGhlbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHNCQ0lLO0FETFA7O0FBSUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0VBQ0Esc0JBQUE7QUFERjs7QUFHRTtFQUNFLDRCQUFBO0FBREo7O0FBS0E7RUFDRSxlQUFBO0FBRkY7O0FBSUU7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBRko7O0FBSUk7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtBQUZOOztBQU1FO0VBQ0UsNEJBQUE7QUFKSjs7QUFRQTtFQUNFLHlCQ25DUztFRG9DVCxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFMRiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwidGhlbWVcIjtcblxuOmhvc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JheTtcbn1cblxuc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogMTRweCAkcGFkO1xufVxuXG4uZGVzY3JpcHRpb25zID4gZGl2IHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBwYWRkaW5nOiAxNHB4ICRwYWQgOHB4O1xuXG4gICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgI2ZmZjtcbiAgfVxufVxuXG5zZWN0aW9uIHtcbiAgcGFkZGluZzogMCAkcGFkO1xuXG4gID4gZGl2IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjUlOyAvLyA0LzEgYXNwZWN0IHJhdGlvXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgPiBpbWcge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG5cbiAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAjZmZmO1xuICB9XG59XG5cbi5jb250YWN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWVHcmF5O1xuICBjb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiAyMXB4O1xuICBwYWRkaW5nOiAwICRwYWQ7XG59XG4iLCIkcm9ib3RvQ29uZGVuc2VkOiBcIlJvYm90byBDb25kZW5zZWRcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG5cbiRtYXhXaWR0aDogMTIwMHB4O1xuXG4kcGFkOiAyNnB4O1xuXG4kYmx1ZUdyYXk6ICM2ZTg1OTE7XG4kZ3JheTogI2VlZTtcbiRvcmFuZ2U6ICNmNWFmMTM7XG5cbiRjb2xvcnM6XG4gICMzYjg4YWZcbiAgIzAyNDg4MFxuICAjNDc4NjYyXG4gICMwOTRmNThcbiAgJG9yYW5nZTtcblxuJGhvdmVyT3BhY2l0eTogMC44O1xuIl19 */"] });


/***/ }),

/***/ "p7J/":
/*!*****************************************************************************************!*\
  !*** ./src/app/tools-overview/management-compliance/management-compliance.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ManagementComplianceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementComplianceComponent", function() { return ManagementComplianceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _tools_overview_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tools-overview.component */ "rX8i");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class ManagementComplianceComponent {
    constructor() {
    }
}
ManagementComplianceComponent.ɵfac = function ManagementComplianceComponent_Factory(t) { return new (t || ManagementComplianceComponent)(); };
ManagementComplianceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManagementComplianceComponent, selectors: [["app-management-compliance"]], decls: 15, vars: 0, consts: [["slot", "left"], ["slot", "right", "fxLayout", "column"], ["fxLayout", "row"], [1, "logo"], ["src", "assets/images/seed-logo-horizontal.svg", "alt", "SEED Logo", "routerLink", "/seed"], [1, "description"], ["routerLink", "/seed"]], template: function ManagementComplianceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-tools-overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Maintenance & Compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Would you like to easily store, share and analyze your building data without spreadsheets? The SEED Platform makes it possible.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "SEED is a central database for building energy data. It was developed as an enterprise-grade solution to the problems associated with manual, spreadsheet-based processes. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Learn more.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_tools_overview_component__WEBPACK_IMPORTED_MODULE_1__["ToolsOverviewComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited {\n  color: #024880;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21hbmFnZW1lbnQtY29tcGxpYW5jZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQUE7QUFERiIsImZpbGUiOiJtYW5hZ2VtZW50LWNvbXBsaWFuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwidGhlbWVcIjtcblxuYSwgYTp2aXNpdGVkIHtcbiAgY29sb3I6IG50aCgkY29sb3JzLCAyKTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "pyga":
/*!***************************************************************************************!*\
  !*** ./src/app/tools-overview/collection-reporting/collection-reporting.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CollectionReportingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionReportingComponent", function() { return CollectionReportingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _tools_overview_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tools-overview.component */ "rX8i");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class CollectionReportingComponent {
    constructor() {
    }
}
CollectionReportingComponent.ɵfac = function CollectionReportingComponent_Factory(t) { return new (t || CollectionReportingComponent)(); };
CollectionReportingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CollectionReportingComponent, selectors: [["ng-component"]], decls: 26, vars: 0, consts: [["slot", "left"], ["slot", "right", "fxLayout", "column"], ["fxLayout", "row"], ["fxFlex", "0 1 30", 1, "logo"], ["href", "https://www.energystar.gov/buildings/facility-owners-and-managers/existing-buildings/use-portfolio-manager", "target", "_blank"], ["src", "assets/images/pm-logo.svg", "alt", "EnergyStar Portfolio Manager Logo"], [1, "description"], [1, "fas", "fa-external-link-alt"], [1, "logo"], ["src", "assets/images/audit-template-logo.svg", "alt", "Building Energy Audit Template Logo", "routerLink", "/audit-template"], ["routerLink", "/audit-template"]], template: function CollectionReportingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-tools-overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Data Collection & Reporting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Would you like to easily capture building audit and energy use information? Explore the tools at right to learn how they work together to simplify data collection.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Use ENERGY STAR Portfolio Manager to measure and track energy and water consumption, as well as greenhouse gas emissions. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Learn more ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Use Audit Template to collect, store and report building energy audit data. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Learn more.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_tools_overview_component__WEBPACK_IMPORTED_MODULE_1__["ToolsOverviewComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited {\n  color: #3b88af;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvbGxlY3Rpb24tcmVwb3J0aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0FBQTtBQURGIiwiZmlsZSI6ImNvbGxlY3Rpb24tcmVwb3J0aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInRoZW1lXCI7XG5cbmEsIGE6dmlzaXRlZCB7XG4gIGNvbG9yOiBudGgoJGNvbG9ycywgMSk7XG59XG4iXX0= */"] });


/***/ }),

/***/ "rX8i":
/*!************************************************************!*\
  !*** ./src/app/tools-overview/tools-overview.component.ts ***!
  \************************************************************/
/*! exports provided: ToolsOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolsOverviewComponent", function() { return ToolsOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");


const _c0 = [[["", "slot", "left"]], [["", "slot", "right"]]];
const _c1 = ["[slot=left]", "[slot=right]"];
class ToolsOverviewComponent {
    constructor() {
    }
}
ToolsOverviewComponent.ɵfac = function ToolsOverviewComponent_Factory(t) { return new (t || ToolsOverviewComponent)(); };
ToolsOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToolsOverviewComponent, selectors: [["app-tools-overview"]], ngContentSelectors: _c1, decls: 5, vars: 2, consts: [["fxLayout", "row"], [1, "summary", 3, "fxFlex"], [1, "details", 3, "fxFlex"]], template: function ToolsOverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 200 / 3);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"]], styles: [".summary[_ngcontent-%COMP%], .details[_ngcontent-%COMP%] {\n  display: flex;\n  font-size: 16px;\n  line-height: 23px;\n  padding: 26px;\n  position: relative;\n}\n.summary[_ngcontent-%COMP%]  > div, .details[_ngcontent-%COMP%]  > div {\n  width: 100%;\n}\n.summary[_ngcontent-%COMP%]  > div a, .summary[_ngcontent-%COMP%]  > div a:visited, .details[_ngcontent-%COMP%]  > div a, .details[_ngcontent-%COMP%]  > div a:visited {\n  font-weight: bold;\n  white-space: nowrap;\n}\n.summary[_ngcontent-%COMP%]     h3 {\n  font-size: 18px;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n.summary[_ngcontent-%COMP%]     p {\n  color: #5b5b5b;\n}\n.summary[_ngcontent-%COMP%]     > div::after {\n  border-right: 1px solid #b2b2b2;\n  content: \"\";\n  height: calc(100% - 2 * 26px);\n  position: absolute;\n  right: 0;\n  top: 26px;\n}\n.details[_ngcontent-%COMP%]     > div > div {\n  border-bottom: 2px solid #eee;\n}\n.details[_ngcontent-%COMP%]     > div:last-child {\n  padding-bottom: 52px;\n}\n.details[_ngcontent-%COMP%]     .logo {\n  flex: 1 1 100%;\n  max-width: 30%;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-width: 126px;\n  padding: 26px 13px;\n}\n.details[_ngcontent-%COMP%]     .logo div {\n  color: #5b5b5b;\n  font-weight: bold;\n  padding-bottom: 13px;\n}\n.details[_ngcontent-%COMP%]     .logo div + img {\n  cursor: auto;\n  max-height: 120px;\n  max-width: 120px;\n}\n.details[_ngcontent-%COMP%]     .logo a {\n  width: 100%;\n}\n.details[_ngcontent-%COMP%]     .logo img {\n  cursor: pointer;\n  max-width: 100%;\n}\n.details[_ngcontent-%COMP%]     .description {\n  flex: 1 1 100%;\n  max-width: 70%;\n  color: #5b5b5b;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 13px 0 13px 26px;\n}\n.details[_ngcontent-%COMP%]     .description p:last-child {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Rvb2xzLW92ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vc3R5bGVzL190aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFDRkk7RURHSixrQkFBQTtBQURGO0FBR0U7RUFDRSxXQUFBO0FBREo7QUFHSTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFETjtBQU9FO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFKSjtBQU9FO0VBQ0UsY0FBQTtBQUxKO0FBUUU7RUFDRSwrQkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNDaENFO0FEMEJOO0FBWUk7RUFDRSw2QkFBQTtBQVROO0FBWUk7RUFDRSxvQkFBQTtBQVZOO0FBZ0JFO0VBQ0UsY0FBQTtFQUNBLGNBSlU7RUFNVixtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQWZKO0FBaUJJO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFmTjtBQWlCTTtFQUVFLFlBQUE7RUFDQSxpQkFGTztFQUdQLGdCQUhPO0FBYmY7QUFvQkk7RUFDRSxXQUFBO0FBbEJOO0FBcUJJO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUFuQk47QUF1QkU7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUVBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FBdEJKO0FBd0JJO0VBQ0UsU0FBQTtBQXRCTiIsImZpbGUiOiJ0b29scy1vdmVydmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ0aGVtZVwiO1xuXG4uc3VtbWFyeSwgLmRldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICBwYWRkaW5nOiAkcGFkO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgJjo6bmctZGVlcCA+IGRpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBhLCBhOnZpc2l0ZWQge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIH1cbiAgfVxufVxuXG4uc3VtbWFyeSA6Om5nLWRlZXAge1xuICBoMyB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuXG4gIHAge1xuICAgIGNvbG9yOiAjNWI1YjViO1xuICB9XG5cbiAgPiBkaXY6OmFmdGVyIHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYjJiMmIyO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMiAqICN7JHBhZH0pO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6ICRwYWQ7XG4gIH1cbn1cblxuLmRldGFpbHMgOjpuZy1kZWVwIHtcbiAgPiBkaXYge1xuICAgID4gZGl2IHtcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWVlO1xuICAgIH1cblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogJHBhZCAqIDI7XG4gICAgfVxuICB9XG5cbiAgJGxvZ29XaWR0aDogMzAlO1xuXG4gIC5sb2dvIHtcbiAgICBmbGV4OiAxIDEgMTAwJTtcbiAgICBtYXgtd2lkdGg6ICRsb2dvV2lkdGg7XG5cbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtaW4td2lkdGg6IDEwMHB4ICsgJHBhZDtcbiAgICBwYWRkaW5nOiAkcGFkICRwYWQgLyAyO1xuXG4gICAgZGl2IHtcbiAgICAgIGNvbG9yOiAjNWI1YjViO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogJHBhZCAvIDI7XG5cbiAgICAgICYgKyBpbWcge1xuICAgICAgICAkc2l6ZTogMTIwcHg7XG4gICAgICAgIGN1cnNvcjogYXV0bztcbiAgICAgICAgbWF4LWhlaWdodDogJHNpemU7XG4gICAgICAgIG1heC13aWR0aDogJHNpemU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuXG4gIC5kZXNjcmlwdGlvbiB7XG4gICAgZmxleDogMSAxIDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlIC0gJGxvZ29XaWR0aDtcblxuICAgIGNvbG9yOiAjNWI1YjViO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAkcGFkIC8gMiAwICRwYWQgLyAyICRwYWQ7XG5cbiAgICBwOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxufVxuIiwiJHJvYm90b0NvbmRlbnNlZDogXCJSb2JvdG8gQ29uZGVuc2VkXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuXG4kbWF4V2lkdGg6IDEyMDBweDtcblxuJHBhZDogMjZweDtcblxuJGJsdWVHcmF5OiAjNmU4NTkxO1xuJGdyYXk6ICNlZWU7XG4kb3JhbmdlOiAjZjVhZjEzO1xuXG4kY29sb3JzOlxuICAjM2I4OGFmXG4gICMwMjQ4ODBcbiAgIzQ3ODY2MlxuICAjMDk0ZjU4XG4gICRvcmFuZ2U7XG5cbiRob3Zlck9wYWNpdHk6IDAuODtcbiJdfQ== */"] });


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _tools_overview_data_standardization_data_standardization_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tools-overview/data-standardization/data-standardization.component */ "1qPM");
/* harmony import */ var _tools_overview_analysis_evaluation_analysis_evaluation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tools-overview/analysis-evaluation/analysis-evaluation.component */ "aP66");
/* harmony import */ var _tools_overview_collection_reporting_collection_reporting_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tools-overview/collection-reporting/collection-reporting.component */ "pyga");
/* harmony import */ var _tools_overview_developers_developers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tools-overview/developers/developers.component */ "6JCy");
/* harmony import */ var _tools_overview_goals_outcomes_goals_outcomes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tools-overview/goals-outcomes/goals-outcomes.component */ "FLSU");
/* harmony import */ var _tools_overview_management_compliance_management_compliance_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tools-overview/management-compliance/management-compliance.component */ "p7J/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










const routes = [{
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    }, {
        path: 'data-standardization',
        component: _tools_overview_data_standardization_data_standardization_component__WEBPACK_IMPORTED_MODULE_2__["DataStandardizationComponent"]
    }, {
        path: 'collection-reporting',
        component: _tools_overview_collection_reporting_collection_reporting_component__WEBPACK_IMPORTED_MODULE_4__["CollectionReportingComponent"]
    }, {
        path: 'audit-template',
        loadChildren: () => __webpack_require__.e(/*! import() | audit-template */ "audit-template").then(__webpack_require__.bind(null, /*! ./tool/audit-template/audit-template.module */ "VaLZ")).then(m => m.AuditTemplateModule)
    }, {
        path: 'management-compliance',
        component: _tools_overview_management_compliance_management_compliance_component__WEBPACK_IMPORTED_MODULE_7__["ManagementComplianceComponent"]
    }, {
        path: 'seed',
        loadChildren: () => __webpack_require__.e(/*! import() | seed */ "seed").then(__webpack_require__.bind(null, /*! ./tool/seed/seed.module */ "Dxw6")).then(m => m.SeedModule)
    }, {
        path: 'analysis-evaluation',
        component: _tools_overview_analysis_evaluation_analysis_evaluation_component__WEBPACK_IMPORTED_MODULE_3__["AnalysisEvaluationComponent"]
    }, {
        path: 'comstock-resstock',
        loadChildren: () => __webpack_require__.e(/*! import() | comstock-resstock */ "comstock-resstock").then(__webpack_require__.bind(null, /*! ./tool/comstock-resstock/comstock-resstock.module */ "eGGF")).then(m => m.ComstockResstockModule)
    }, {
        path: 'better',
        loadChildren: () => __webpack_require__.e(/*! import() | better */ "better").then(__webpack_require__.bind(null, /*! ./tool/better/better.module */ "B3JN")).then(m => m.BetterModule)
    }, {
        path: 'asset-score',
        loadChildren: () => __webpack_require__.e(/*! import() | asset-score */ "asset-score").then(__webpack_require__.bind(null, /*! ./tool/asset-score/asset-score.module */ "p6Ex")).then(m => m.AssetScoreModule)
    }, {
        path: 'bpd',
        loadChildren: () => __webpack_require__.e(/*! import() | bpd */ "bpd").then(__webpack_require__.bind(null, /*! ./tool/bpd/bpd.module */ "J0ZO")).then(m => m.BpdModule)
    }, {
        path: 'goals-outcomes',
        component: _tools_overview_goals_outcomes_goals_outcomes_component__WEBPACK_IMPORTED_MODULE_6__["GoalsOutcomesComponent"]
    }, {
        path: 'goals',
        loadChildren: () => __webpack_require__.e(/*! import() | goals */ "goals").then(__webpack_require__.bind(null, /*! ./tool/goals/goals.module */ "I3wF")).then(m => m.GoalsModule)
    }, {
        path: 'developers',
        component: _tools_overview_developers_developers_component__WEBPACK_IMPORTED_MODULE_5__["DevelopersComponent"]
    }, {
        path: 'building-sync',
        loadChildren: () => __webpack_require__.e(/*! import() | building-sync */ "building-sync").then(__webpack_require__.bind(null, /*! ./tool/building-sync/building-sync.module */ "aRr8")).then(m => m.BuildingSyncModule)
    }, {
        path: 'ubid',
        loadChildren: () => __webpack_require__.e(/*! import() | ubid */ "ubid").then(__webpack_require__.bind(null, /*! ./tool/ubid/ubid.module */ "xai7")).then(m => m.UbidModule)
    }, {
        path: 'bedes',
        loadChildren: () => __webpack_require__.e(/*! import() | bedes */ "bedes").then(__webpack_require__.bind(null, /*! ./tool/bedes/bedes.module */ "OseZ")).then(m => m.BedesModule)
    }, {
        path: 'oep',
        loadChildren: () => __webpack_require__.e(/*! import() | oep */ "oep").then(__webpack_require__.bind(null, /*! ./tool/oep/oep.module */ "imKj")).then(m => m.OepModule)
    }, {
        path: 'third-party',
        loadChildren: () => __webpack_require__.e(/*! import() | third-party */ "third-party").then(__webpack_require__.bind(null, /*! ./tool/third-party/third-party.module */ "GJMj")).then(m => m.ThirdPartyModule)
    }, {
        path: '**',
        redirectTo: ''
    }];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "wbvY":
/*!***************************************************!*\
  !*** ./src/app/shared/services/shared.service.ts ***!
  \***************************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SharedService {
    constructor() {
        this.colSize = [32.9, 32.9, 32.8];
    }
}
SharedService.ɵfac = function SharedService_Factory(t) { return new (t || SharedService)(); };
SharedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SharedService, factory: SharedService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "yAoa":
/*!*********************************************!*\
  !*** ./src/app/shared/classes/constants.ts ***!
  \*********************************************/
/*! exports provided: appTitle, Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appTitle", function() { return appTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
const appTitle = 'Building Performance Tools';
class Constants {
}
Constants.titles = {
    '/collection-reporting': 'Data Collection & Reporting',
    '/management-compliance': 'Maintenance & Compliance',
    '/analysis-evaluation': 'Analysis & Evaluation',
    '/goals-outcomes': 'Goals & Outcomes',
    '/goals': 'Goals & Outcomes',
    '/developers': 'For Developers',
    '/audit-template': 'Audit Template',
    '/seed': 'SEED Platform',
    '/comstock-resstock': 'ComStock & ResStock',
    '/better': 'BETTER',
    '/asset-score': 'Asset Score',
    '/bpd': 'Building Performance Database',
    '/analyze': 'Goals & Outcomes',
    '/target': 'Goals & Outcomes',
    '/compliance': 'Goals & Outcomes',
    '/customize': 'Goals & Outcomes',
    '/building-sync': 'BuildingSync',
    '/ubid': 'UBID',
    '/third-party': 'Third-Party Tools'
};


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map