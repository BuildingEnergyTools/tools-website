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
GraphicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GraphicComponent, selectors: [["app-graphic"]], decls: 203, vars: 63, consts: [["fxLayout", "row wrap", "fxFlex", "100%", "fxFlexOffset", "0%"], ["fxLayout", "column", "fxFlex", "100%", 1, "col-type-4"], [1, "col-bkgnd-4"], [1, "header4"], [1, "header"], ["fxLayout", "row", "fxLayout.xs", "column", 1, "mb-2"], ["fxFlex", "25%", "fxFlex.xs", "100%", "fxLayoutAlign.xs", "space-evenly stretch"], ["fxLayoutAlign", "space-around", "fxLayoutAlign.xs", "space-evenly stretch"], ["id", "g1", "routerLink", "goals/analyze", 1, "goals-card-pad", 3, "ngStyle", "mouseenter", "mouseleave"], ["fxLayout", "row"], [1, "my-auto", "pr-4", "card-img-g1", 3, "fxFlex", "fxHide.xs", "fxHide.sm", "fxHide.md"], ["src", "assets/images/com-resstock-outcomes-icon.svg", "alt", "ComStock & ResStock outcomes icon"], [1, "my-auto"], [1, "card-text", "pr-vp-3"], ["id", "g2", "routerLink", "goals/target", 1, "goals-card-pad", 3, "ngStyle", "mouseenter", "mouseleave"], ["fxLayout", "row", 1, "no-gutters"], [1, "my-auto", "pr-4", "card-img-g2", 3, "fxFlex", "fxHide.xs", "fxHide.sm", "fxHide.md"], ["src", "assets/images/better-outcomes-icon.svg", "alt", "BETTER outcomes icon"], [1, "card-text", "m-auto"], ["id", "g3", "routerLink", "goals/compliance", 1, "goals-card-pad", 3, "ngStyle", "mouseenter", "mouseleave"], [1, "card-img-g3", "my-auto", "pr-1", 3, "fxFlex", "fxHide.xs", "fxHide.sm", "fxHide.md"], ["src", "assets/images/assetscore-outcomes-icon.svg", "alt", "Asset Score Outcomes icon"], ["id", "g4", "routerLink", "goals/customize", 1, "goals-card-pad", 3, "ngStyle", "mouseenter", "mouseleave"], [1, "my-auto", "pr-3", "card-img-g4", 3, "fxFlex", "fxHide.xs", "fxHide.sm", "fxHide.md"], ["src", "assets/images/thirdparty-outcomes-icon.svg", "alt", "third-party outcomes icon"], ["fxFlex.xs", "100%", "fxFlex.sm", "32%", "fxLayout", "column", 1, "col-styles", "col-type-1", 3, "fxFlex"], [1, "col-bkgnd-1"], [1, "header1"], ["fxLayoutAlign", "space-around", 1, "pt-2"], ["id", "pm", 1, "pm-card", 3, "ngStyle", "click"], [3, "hidden"], [1, "p-4"], ["src", "assets/images/pm-logo.svg", "alt", "EnergyStar Portfolio Manager Logo", 1, "card-img-2"], [1, "card-text"], ["fxLayoutAlign", "center center"], ["href", "https://www.energystar.gov/buildings/facility-owners-and-managers/existing-buildings/use-portfolio-manager", "mat-raised-button", "", "target", "_blank", "role", "button", 1, "btn-type-1", 3, "click"], [1, "ml-2", "align-center"], [1, "fas", "fa-external-link-alt"], ["fxLayoutAlign", "space-around", 1, "at-pad"], ["id", "at", 1, "card-zindex", 3, "ngStyle", "click"], [1, "img-ctr"], ["src", "assets/images/audit-template-logo.svg", "alt", "Audit Template Logo", 1, "card-img-at"], ["routerLink", "audit-template", "mat-raised-button", "", "role", "button", 1, "btn", "btn-type-1", 3, "click"], ["fxFlex.xs", "100%", "fxLayout", "column", 1, "col-styles", "col-type-2", 3, "fxFlex"], [1, "col-bkgnd-2"], [1, "header2"], ["fxLayoutAlign", "space-around", 1, "seed-pad"], ["id", "seed", 1, "card-zindex", "pt-5", 3, "click"], [1, "card-img-sm"], ["src", "assets/images/seed-logo.svg", "alt", "SEED Logo"], [1, "card-tex"], ["routerLink", "seed", "mat-raised-button", "", "role", "button", 1, "btn", "btn-type-2", 3, "click"], ["fxFlex.xs", "100%", "fxLayout", "column", 1, "mt-2", "col-pad", "col-type-3", 3, "fxFlex"], [1, "col-bkgnd-3"], [1, "header3"], ["id", "csrs", 1, "sm-spc", 3, "ngStyle", "click"], [1, "pl-6", "pt-1"], ["src", "assets/images/com-resstock-logos.svg", "alt", "ComStock & ResStock Logos", 1, "card-img-csrs"], ["routerLink", "comstock-resstock", "role", "button", "mat-raised-button", "", 1, "btn", "btn-type-3", 3, "click"], ["fxLayoutAlign", "space-around"], ["id", "better", 1, "sm-spc", 3, "ngStyle", "click"], [1, "pl-6"], ["src", "assets/images/better-logo.svg", "alt", "BETTER Logo", 1, "card-img-better"], ["routerLink", "better", "mat-raised-button", "", "role", "button", 1, "btn", "btn-type-3", 3, "click"], ["id", "as", 1, "sm-spc", 3, "ngStyle", "click"], ["src", "assets/images/asset-score-logo.svg", "alt", "Asset Score Logo", 1, "card-img-as"], ["routerLink", "asset-score", "mat-raised-button", "", "role", "button", 1, "btn", "btn-type-3", 3, "click"], ["id", "3p", 1, "sm-spc", 3, "ngStyle", "click"], ["fxFlex", "15%", 1, "mt-1"], ["src", "assets/images/third-party-icon-only.svg", "alt", "3rd party tools Logos", 1, "card-img-3p"], ["fxFlex", "70%", 1, "text-3p", "my-auto"], ["routerLink", "developers", "role", "button", "mat-raised-button", "", 1, "btn", "btn-type-5"]], template: function GraphicComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "mat-card", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GraphicComponent_Template_mat_card_click_91_listener() { return ctx.toggleCard("seed"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "mat-card-content", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](94, "img", 49);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Track the progress for BEPS compliance");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "Leverage DOE's analysis & evaluation tools to identify upgrade opportunities within buildings and across the city's building stock, assess the performance of the BEPS program, and set program cycle goals.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "Share data with CRM systems & dashboards");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "p", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "Because SEED automates so many manual, time-intensive processes, even cities with severely limited resources and staff and use SEED to achieve their program goals.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GraphicComponent_Template_a_click_122_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "Learn more");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "ANALYSIS & EVALUATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "mat-card", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GraphicComponent_Template_mat_card_click_130_listener() { return ctx.toggleCard("csrs"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "mat-card-content", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](133, "img", 57);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GraphicComponent_Template_a_click_148_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "Learn more");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "mat-card", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GraphicComponent_Template_mat_card_click_151_listener() { return ctx.toggleCard("better"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "mat-card-content", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](154, "img", 62);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GraphicComponent_Template_a_click_165_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "Learn more");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "mat-card", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GraphicComponent_Template_mat_card_click_168_listener() { return ctx.toggleCard("as"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "mat-card-content", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](171, "img", 65);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GraphicComponent_Template_a_click_183_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](184, "Learn more");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "mat-card", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GraphicComponent_Template_mat_card_click_186_listener() { return ctx.toggleCard("3p"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "mat-card-content", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](190, "img", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "div", 70);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "a", 71);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](43, _c0, ctx.hovers["g2"] == true || ctx.hovers["g3"] == true || ctx.hovers["g4"] == true ? "#a7afb2;" : "white"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fxFlex", 35)("fxHide.xs", true)("fxHide.sm", true)("fxHide.md", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](45, _c0, ctx.hovers["g1"] == true || ctx.hovers["g3"] == true || ctx.hovers["g4"] == true ? "#a7afb2;" : "white"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fxFlex", 35)("fxHide.xs", true)("fxHide.sm", true)("fxHide.md", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](47, _c0, ctx.hovers["g1"] == true || ctx.hovers["g2"] == true || ctx.hovers["g4"] == true ? "#a7afb2;" : "white"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fxFlex", 30)("fxHide.xs", true)("fxHide.sm", true)("fxHide.md", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](49, _c0, ctx.hovers["g1"] == true || ctx.hovers["g2"] == true || ctx.hovers["g3"] == true ? "#a7afb2;" : "white"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fxFlex", 30)("fxHide.xs", true)("fxHide.sm", true)("fxHide.md", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fxFlex", ctx.sharedService.colSize[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](51, _c0, ctx.hovers["g3"] == true || ctx.hovers["g4"] == true ? "#a7afb2;" : "#fff;"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.cardStatus.pm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.cardStatus.pm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](53, _c0, ctx.hovers["g1"] == true || ctx.hovers["g2"] == true ? "#a7afb2;" : "white"));
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](55, _c0, ctx.hovers["g2"] == true || ctx.hovers["g3"] == true || ctx.hovers["g4"] == true ? "#a7afb2;" : "white"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.cardStatus.csrs);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.cardStatus.csrs);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](57, _c0, ctx.hovers["g1"] == true || ctx.hovers["g3"] == true || ctx.hovers["g4"] == true ? "#a7afb2;" : "white"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.cardStatus.better);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.cardStatus.better);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](59, _c0, ctx.hovers["g1"] == true || ctx.hovers["g2"] == true || ctx.hovers["g4"] == true ? "#a7afb2;" : "white"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.cardStatus.as);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.cardStatus.as);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](61, _c0, ctx.hovers["g1"] == true || ctx.hovers["g2"] == true || ctx.hovers["g3"] == true ? "#a7afb2;" : "white"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.cardStatus["3p"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.cardStatus["3p"]);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexOffsetDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__["DefaultStyleDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__["DefaultShowHideDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardSubtitle"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n}\n[_nghost-%COMP%]  [hidden] {\n  display: none;\n}\n.break[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n  height: 0;\n}\n.mat-card-content[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-bottom: 0;\n}\n.mat-card-footer[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.color-1[_ngcontent-%COMP%] {\n  color: #0174a1;\n}\n.color-2[_ngcontent-%COMP%] {\n  color: #024880;\n}\n.color-3[_ngcontent-%COMP%] {\n  color: #355F46;\n}\n.color-4[_ngcontent-%COMP%] {\n  color: #094f58;\n}\n.color-5[_ngcontent-%COMP%] {\n  color: #f5af13;\n}\n.white[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.header[_ngcontent-%COMP%] {\n  padding: 5px 10px 5px 10px;\n  align-self: flex-center;\n  font-weight: 500;\n  color: white;\n  height: 60px;\n  text-transform: uppercase;\n  text-align: center;\n  opacity: 1;\n  padding-top: 1.7rem;\n  vertical-align: middle;\n}\n.header1[_ngcontent-%COMP%], .header2[_ngcontent-%COMP%], .header3[_ngcontent-%COMP%], .header4[_ngcontent-%COMP%] {\n  position: relative;\n}\n.col-heading[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  text-align: center;\n  color: white;\n  font-size: 1rem;\n  font-weight: 400;\n}\n.arrow[_ngcontent-%COMP%] {\n  width: 3.5rem;\n  position: absolute;\n}\n.arrow1[_ngcontent-%COMP%] {\n  left: 17rem;\n  top: 3.7rem;\n}\n.arrow2[_ngcontent-%COMP%], .arrow3[_ngcontent-%COMP%] {\n  top: 2.8rem;\n  left: 17rem;\n}\n.col-bkgnd-1[_ngcontent-%COMP%] {\n  margin: 0px 0px 5px 0px;\n  background-color: black;\n  position: relative;\n  height: 5vh;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.col-bkgnd-1[_ngcontent-%COMP%]::before {\n  content: \"\";\n  background-image: url('diagram-images-data-collection.jpg');\n  background-size: cover;\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  opacity: 0.8;\n}\n.col-bkgnd-2[_ngcontent-%COMP%] {\n  margin: 0px 0px 5px 0px;\n  position: relative;\n  height: 5vh;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.col-bkgnd-2[_ngcontent-%COMP%]::before {\n  content: \"\";\n  background-image: url('diagram-header-manag-compli.jpg');\n  background-size: cover;\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  opacity: 0.75;\n}\n.col-bkgnd-3[_ngcontent-%COMP%] {\n  margin: 0px 0px 5px 0px;\n  position: relative;\n  background-color: black;\n  height: 5vh;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.col-bkgnd-3[_ngcontent-%COMP%]::before {\n  content: \"\";\n  background-image: url('diagram-header-analysis.jpg');\n  background-size: cover;\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  opacity: 0.75;\n}\n.col-bkgnd-4[_ngcontent-%COMP%] {\n  margin: 0px 0px 5px 0px;\n  position: relative;\n  height: 5vh;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.col-bkgnd-4[_ngcontent-%COMP%]::before {\n  content: \"\";\n  background-image: url('outcomes-header-background.jpg');\n  background-size: cover;\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  opacity: 0.75;\n}\n.sm-spc[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem !important;\n  padding-bottom: 0.25rem;\n  padding-top: 0.25rem;\n}\n.col-line-1[_ngcontent-%COMP%] {\n  border-top: 4px solid #3B88AF;\n  width: calc(100% - 70px);\n  margin: auto;\n}\n.col-pad[_ngcontent-%COMP%] {\n  padding-bottom: 10px;\n}\n.col-line-white[_ngcontent-%COMP%] {\n  border-top: 4px solid #Fff;\n}\n.col-title[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: normal;\n  font-size: 16px;\n  color: #ffffff;\n  text-align: center;\n}\n.col-type-1[_ngcontent-%COMP%] {\n  background-color: #0174a1;\n}\n.col-type-1[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\n  margin-left: 40px;\n  margin-right: 40px;\n  width: 100%;\n}\n.btn-type-1[_ngcontent-%COMP%] {\n  background: #0174a1;\n  color: #fff;\n}\n.btn-type-2[_ngcontent-%COMP%] {\n  background-color: #024880;\n  color: #fff;\n}\n.btn-type-3[_ngcontent-%COMP%] {\n  background-color: #478662;\n  color: #fff;\n}\n.btn-type-5[_ngcontent-%COMP%] {\n  background-color: #f5af13;\n  color: #fff;\n}\n.col-line-2[_ngcontent-%COMP%] {\n  border-top: 4px solid #024880;\n  width: calc(100% - 70px);\n  margin: auto;\n}\n.col-type-2[_ngcontent-%COMP%] {\n  background-color: #024880;\n}\n.col-type-2[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\n  margin-left: 40px;\n  margin-right: 40px;\n  width: 80%;\n}\n.col-type-2[_ngcontent-%COMP%]   #under-seed[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  text-align: center;\n}\n.col-line-3[_ngcontent-%COMP%] {\n  border-top: 4px solid #478662;\n  width: calc(100% - 70px);\n  margin: auto;\n}\n.col-type-3[_ngcontent-%COMP%] {\n  background-color: #478662;\n}\n.col-type-3[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\n  margin-left: 40px;\n  margin-right: 40px;\n  width: 80%;\n}\n.col-line-4[_ngcontent-%COMP%] {\n  border-top: 4px solid #094F58;\n  width: calc(100% - 70px);\n  margin: auto;\n}\n.col-type-4[_ngcontent-%COMP%] {\n  background-color: #094F58;\n}\n.col-type-4[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\n  \n  margin-left: 15px;\n  margin-right: 14px;\n  \n}\n.col-line-5[_ngcontent-%COMP%] {\n  border-top: 4px solid #f5af13;\n  width: calc(100% - 70px);\n  margin: auto;\n}\n.home-nav[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: bold;\n  text-decoration: none;\n}\n.home-nav[_ngcontent-%COMP%]:hover {\n  color: #EEE;\n  text-decoration: none;\n}\n.card-img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.card-img-3p[_ngcontent-%COMP%] {\n  width: 70%;\n}\n.text-3p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  vertical-align: center;\n  color: #454444;\n}\n.card-img-2[_ngcontent-%COMP%] {\n  width: 110%;\n}\n.card-margin[_ngcontent-%COMP%] {\n  margin-bottom: 3.5rem;\n}\n.card-text[_ngcontent-%COMP%] {\n  \n}\n.col-styles[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  margin-right: 0.5rem;\n  padding-bottom: 10px;\n}\n.img-ctr[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.card-img-csrs[_ngcontent-%COMP%] {\n  width: 65%;\n}\n.card-img-as[_ngcontent-%COMP%] {\n  width: 70%;\n}\n.card-img-at[_ngcontent-%COMP%] {\n  width: 80%;\n}\n.card-img-better[_ngcontent-%COMP%] {\n  width: 75%;\n  padding-bottom: 5px;\n}\n.card-img-sm[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.card-img-sm[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 65%;\n}\n.card-img-g1[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.card-img-g1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 55%;\n}\n.card-img-g2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.card-img-g2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 65%;\n}\n.card-img-g3[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.card-img-g3[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40%;\n}\n.card-img-g4[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.card-img-g4[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  width: 80%;\n}\n.card-zindex[_ngcontent-%COMP%] {\n  z-index: 5;\n}\n#g1[_ngcontent-%COMP%], #g2[_ngcontent-%COMP%], #g3[_ngcontent-%COMP%], #g4[_ngcontent-%COMP%] {\n  height: 12vh;\n}\n.card-footer[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.25rem;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-top: 1px solid rgba(0, 0, 0, 0.125);\n}\n.card-footer[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);\n}\n.text-muted[_ngcontent-%COMP%] {\n  color: #6c757d !important;\n}\n.bsync1[_ngcontent-%COMP%], .bsync2[_ngcontent-%COMP%] {\n  position: relative;\n  left: 50%;\n  border-radius: 18px;\n  border: 4px solid #f5af13;\n  margin: 0 auto !important;\n  width: auto !important;\n  z-index: 6;\n}\n.bsync1.bsync1[_ngcontent-%COMP%], .bsync2.bsync1[_ngcontent-%COMP%] {\n  top: -200px;\n}\n.bsync1.bsync2[_ngcontent-%COMP%], .bsync2.bsync2[_ngcontent-%COMP%] {\n  top: -175px;\n}\n.bsync1[_ngcontent-%COMP%]   .mat-card-content[_ngcontent-%COMP%], .bsync2[_ngcontent-%COMP%]   .mat-card-content[_ngcontent-%COMP%] {\n  line-height: 0;\n  max-width: 100px;\n}\n.bsync1-flip[_ngcontent-%COMP%]   .mat-card-content[_ngcontent-%COMP%], .bsync2-flip[_ngcontent-%COMP%]   .mat-card-content[_ngcontent-%COMP%] {\n  line-height: normal;\n  max-width: 160px;\n}\n.yellow-border[_ngcontent-%COMP%] {\n  border: 4px solid #f5af13;\n}\n#bsync1.mat-card[_ngcontent-%COMP%], #bsync2.mat-card[_ngcontent-%COMP%] {\n  padding: 4px;\n}\n.bsync-img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.py-big[_ngcontent-%COMP%] {\n  padding-top: 4rem;\n  padding-bottom: 4rem;\n}\n.goals-card-pad[_ngcontent-%COMP%] {\n  margin-bottom: 1vw;\n  \n}\n.pm-card[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.at-pad[_ngcontent-%COMP%] {\n  padding-top: 3rem;\n}\nseed-pad[_ngcontent-%COMP%] {\n  padding-bottom: 10px;\n}\n.pr-vp-4[_ngcontent-%COMP%] {\n  padding-right: calc(1vw + 0.5rem) !important;\n}\n.pr-vp-3[_ngcontent-%COMP%] {\n  padding-right: calc(1vw + 0.25rem) !important;\n}\n@media screen and (max-width: 599px) {\n  .card-text[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n\n  .mat-card[_ngcontent-%COMP%] {\n    padding: 5px;\n  }\n\n  .mat-card-content[_ngcontent-%COMP%] {\n    padding: 5px;\n  }\n\n  .col-styles[_ngcontent-%COMP%] {\n    margin-top: 0.5rem;\n    margin-right: 0;\n    padding-bottom: 5px;\n  }\n\n  .pm-card[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n\n  .at-pad[_ngcontent-%COMP%] {\n    padding-top: 10px !important;\n  }\n\n  seed-pad[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n\n  #g1[_ngcontent-%COMP%], #g2[_ngcontent-%COMP%], #g3[_ngcontent-%COMP%], #g4[_ngcontent-%COMP%] {\n    height: unset;\n    max-width: 80vw;\n    min-width: 80vw;\n  }\n\n  .card-text[_ngcontent-%COMP%] {\n    \n  }\n}\n@media screen and (min-width: 599px) and (max-width: 799px) {\n  #g1[_ngcontent-%COMP%], #g2[_ngcontent-%COMP%], #g3[_ngcontent-%COMP%], #g4[_ngcontent-%COMP%] {\n    height: 20vh;\n  }\n}\n@media screen and (min-width: 800px) and (max-width: 1600px) {\n  #g1[_ngcontent-%COMP%], #g2[_ngcontent-%COMP%], #g3[_ngcontent-%COMP%], #g4[_ngcontent-%COMP%] {\n    \n    height: 12vh;\n  }\n\n  .mat-card[_ngcontent-%COMP%] {\n    padding: 5px;\n  }\n}\n@media screen and (min-width: 800px) and (max-width: 1600px) and (max-height: 630px) {\n  #g1[_ngcontent-%COMP%], #g2[_ngcontent-%COMP%], #g3[_ngcontent-%COMP%], #g4[_ngcontent-%COMP%] {\n    height: 20vh;\n  }\n}\n@media screen and (max-width: 800px) {\n  .pm-card[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    margin-bottom: 10px;\n  }\n\n  .at-pad[_ngcontent-%COMP%] {\n    padding-top: 10px !important;\n  }\n}\n@media screen and (min-width: 1600px) {\n  #g1[_ngcontent-%COMP%], #g2[_ngcontent-%COMP%], #g3[_ngcontent-%COMP%], #g4[_ngcontent-%COMP%] {\n    padding-top: 20px;\n  }\n\n  .mat-card-content[_ngcontent-%COMP%] {\n    padding-top: 1vh;\n  }\n}\n@media screen and (min-width: 1600px) and (max-height: 630px) {\n  #g1[_ngcontent-%COMP%], #g2[_ngcontent-%COMP%], #g3[_ngcontent-%COMP%], #g4[_ngcontent-%COMP%] {\n    height: 18vh;\n  }\n}\n\n.mt-0[_ngcontent-%COMP%], .my-0[_ngcontent-%COMP%] {\n  margin-top: 0 !important;\n}\n.mr-0[_ngcontent-%COMP%], .mx-0[_ngcontent-%COMP%] {\n  margin-right: 0 !important;\n}\n.mb-0[_ngcontent-%COMP%], .my-0[_ngcontent-%COMP%] {\n  margin-bottom: 0 !important;\n}\n.ml-0[_ngcontent-%COMP%], .mx-0[_ngcontent-%COMP%] {\n  margin-left: 0 !important;\n}\n.m-1[_ngcontent-%COMP%] {\n  margin: 0.25rem !important;\n}\n.mt-1[_ngcontent-%COMP%], .my-1[_ngcontent-%COMP%] {\n  margin-top: 0.25rem !important;\n}\n.mr-1[_ngcontent-%COMP%], .mx-1[_ngcontent-%COMP%] {\n  margin-right: 0.25rem !important;\n}\n.mb-1[_ngcontent-%COMP%], .my-1[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem !important;\n}\n.ml-1[_ngcontent-%COMP%], .mx-1[_ngcontent-%COMP%] {\n  margin-left: 0.25rem !important;\n}\n.m-2[_ngcontent-%COMP%] {\n  margin: 0.5rem !important;\n}\n.mt-2[_ngcontent-%COMP%], .my-2[_ngcontent-%COMP%] {\n  margin-top: 0.5rem !important;\n}\n.mr-2[_ngcontent-%COMP%], .mx-2[_ngcontent-%COMP%] {\n  margin-right: 0.5rem !important;\n}\n.mb-2[_ngcontent-%COMP%], .my-2[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem !important;\n}\n.ml-2[_ngcontent-%COMP%], .mx-2[_ngcontent-%COMP%] {\n  margin-left: 0.5rem !important;\n}\n.m-3[_ngcontent-%COMP%] {\n  margin: 1rem !important;\n}\n.mt-3[_ngcontent-%COMP%], .my-3[_ngcontent-%COMP%] {\n  margin-top: 1rem !important;\n}\n.mr-3[_ngcontent-%COMP%], .mx-3[_ngcontent-%COMP%] {\n  margin-right: 1rem !important;\n}\n.mb-3[_ngcontent-%COMP%], .my-3[_ngcontent-%COMP%] {\n  margin-bottom: 1rem !important;\n}\n.ml-3[_ngcontent-%COMP%], .mx-3[_ngcontent-%COMP%] {\n  margin-left: 1rem !important;\n}\n.m-4[_ngcontent-%COMP%] {\n  margin: 1.5rem !important;\n}\n.mt-4[_ngcontent-%COMP%], .my-4[_ngcontent-%COMP%] {\n  margin-top: 1.5rem !important;\n}\n.mr-4[_ngcontent-%COMP%], .mx-4[_ngcontent-%COMP%] {\n  margin-right: 1.5rem !important;\n}\n.mb-4[_ngcontent-%COMP%], .my-4[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem !important;\n}\n.ml-4[_ngcontent-%COMP%], .mx-4[_ngcontent-%COMP%] {\n  margin-left: 1.5rem !important;\n}\n.m-5[_ngcontent-%COMP%] {\n  margin: 3rem !important;\n}\n.mt-5[_ngcontent-%COMP%], .my-5[_ngcontent-%COMP%] {\n  margin-top: 3rem !important;\n}\n.mr-5[_ngcontent-%COMP%], .mx-5[_ngcontent-%COMP%] {\n  margin-right: 3rem !important;\n}\n.mb-5[_ngcontent-%COMP%], .my-5[_ngcontent-%COMP%] {\n  margin-bottom: 3rem !important;\n}\n.ml-5[_ngcontent-%COMP%], .mx-5[_ngcontent-%COMP%] {\n  margin-left: 3rem !important;\n}\n.p-0[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n.pt-0[_ngcontent-%COMP%], .py-0[_ngcontent-%COMP%] {\n  padding-top: 0 !important;\n}\n.pr-0[_ngcontent-%COMP%], .px-0[_ngcontent-%COMP%] {\n  padding-right: 0 !important;\n}\n.pb-0[_ngcontent-%COMP%], .py-0[_ngcontent-%COMP%] {\n  padding-bottom: 0 !important;\n}\n.pl-0[_ngcontent-%COMP%], .px-0[_ngcontent-%COMP%] {\n  padding-left: 0 !important;\n}\n.p-1[_ngcontent-%COMP%] {\n  padding: 0.25rem !important;\n}\n.pt-1[_ngcontent-%COMP%], .py-1[_ngcontent-%COMP%] {\n  padding-top: 0.25rem !important;\n}\n.pr-1[_ngcontent-%COMP%], .px-1[_ngcontent-%COMP%] {\n  padding-right: 0.25rem !important;\n}\n.pb-1[_ngcontent-%COMP%], .py-1[_ngcontent-%COMP%] {\n  padding-bottom: 0.25rem !important;\n}\n.pl-1[_ngcontent-%COMP%], .px-1[_ngcontent-%COMP%] {\n  padding-left: 0.25rem !important;\n}\n.p-2[_ngcontent-%COMP%] {\n  padding: 0.5rem !important;\n}\n.pt-2[_ngcontent-%COMP%], .py-2[_ngcontent-%COMP%] {\n  padding-top: 0.5rem !important;\n}\n.pr-2[_ngcontent-%COMP%], .px-2[_ngcontent-%COMP%] {\n  padding-right: 0.5rem !important;\n}\n.pb-2[_ngcontent-%COMP%], .py-2[_ngcontent-%COMP%] {\n  padding-bottom: 0.5rem !important;\n}\n.pl-2[_ngcontent-%COMP%], .px-2[_ngcontent-%COMP%] {\n  padding-left: 0.5rem !important;\n}\n.p-3[_ngcontent-%COMP%] {\n  padding: 1rem !important;\n}\n.pt-3[_ngcontent-%COMP%], .py-3[_ngcontent-%COMP%] {\n  padding-top: 1rem !important;\n}\n.pr-3[_ngcontent-%COMP%], .px-3[_ngcontent-%COMP%] {\n  padding-right: 1rem !important;\n}\n.pb-3[_ngcontent-%COMP%], .py-3[_ngcontent-%COMP%] {\n  padding-bottom: 1rem !important;\n}\n.pl-3[_ngcontent-%COMP%], .px-3[_ngcontent-%COMP%] {\n  padding-left: 1rem !important;\n}\n.p-4[_ngcontent-%COMP%] {\n  padding: 1.5rem !important;\n}\n.pt-4[_ngcontent-%COMP%], .py-4[_ngcontent-%COMP%] {\n  padding-top: 1.5rem !important;\n}\n.pr-4[_ngcontent-%COMP%], .px-4[_ngcontent-%COMP%] {\n  padding-right: 1.5rem !important;\n}\n.pb-4[_ngcontent-%COMP%], .py-4[_ngcontent-%COMP%] {\n  padding-bottom: 1.5rem !important;\n}\n.pl-4[_ngcontent-%COMP%], .px-4[_ngcontent-%COMP%] {\n  padding-left: 1.5rem !important;\n}\n.p-5[_ngcontent-%COMP%] {\n  padding: 3rem !important;\n}\n.pt-5[_ngcontent-%COMP%], .py-5[_ngcontent-%COMP%] {\n  padding-top: 3rem !important;\n}\n.pr-5[_ngcontent-%COMP%], .px-5[_ngcontent-%COMP%] {\n  padding-right: 3rem !important;\n}\n.pb-5[_ngcontent-%COMP%], .py-5[_ngcontent-%COMP%] {\n  padding-bottom: 3rem !important;\n}\n.pl-5[_ngcontent-%COMP%], .px-5[_ngcontent-%COMP%] {\n  padding-left: 3rem !important;\n}\n.pl-6[_ngcontent-%COMP%], .px-6[_ngcontent-%COMP%] {\n  padding-left: 3.5rem !important;\n}\n.m-n1[_ngcontent-%COMP%] {\n  margin: -0.25rem !important;\n}\n.mt-n1[_ngcontent-%COMP%], .my-n1[_ngcontent-%COMP%] {\n  margin-top: -0.25rem !important;\n}\n.mr-n1[_ngcontent-%COMP%], .mx-n1[_ngcontent-%COMP%] {\n  margin-right: -0.25rem !important;\n}\n.mb-n1[_ngcontent-%COMP%], .my-n1[_ngcontent-%COMP%] {\n  margin-bottom: -0.25rem !important;\n}\n.ml-n1[_ngcontent-%COMP%], .mx-n1[_ngcontent-%COMP%] {\n  margin-left: -0.25rem !important;\n}\n.m-n2[_ngcontent-%COMP%] {\n  margin: -0.5rem !important;\n}\n.mt-n2[_ngcontent-%COMP%], .my-n2[_ngcontent-%COMP%] {\n  margin-top: -0.5rem !important;\n}\n.mr-n2[_ngcontent-%COMP%], .mx-n2[_ngcontent-%COMP%] {\n  margin-right: -0.5rem !important;\n}\n.mb-n2[_ngcontent-%COMP%], .my-n2[_ngcontent-%COMP%] {\n  margin-bottom: -0.5rem !important;\n}\n.ml-n2[_ngcontent-%COMP%], .mx-n2[_ngcontent-%COMP%] {\n  margin-left: -0.5rem !important;\n}\n.m-n3[_ngcontent-%COMP%] {\n  margin: -1rem !important;\n}\n.mt-n3[_ngcontent-%COMP%], .my-n3[_ngcontent-%COMP%] {\n  margin-top: -1rem !important;\n}\n.mr-n3[_ngcontent-%COMP%], .mx-n3[_ngcontent-%COMP%] {\n  margin-right: -1rem !important;\n}\n.mb-n3[_ngcontent-%COMP%], .my-n3[_ngcontent-%COMP%] {\n  margin-bottom: -1rem !important;\n}\n.ml-n3[_ngcontent-%COMP%], .mx-n3[_ngcontent-%COMP%] {\n  margin-left: -1rem !important;\n}\n.m-n4[_ngcontent-%COMP%] {\n  margin: -1.5rem !important;\n}\n.mt-n4[_ngcontent-%COMP%], .my-n4[_ngcontent-%COMP%] {\n  margin-top: -1.5rem !important;\n}\n.mr-n4[_ngcontent-%COMP%], .mx-n4[_ngcontent-%COMP%] {\n  margin-right: -1.5rem !important;\n}\n.mb-n4[_ngcontent-%COMP%], .my-n4[_ngcontent-%COMP%] {\n  margin-bottom: -1.5rem !important;\n}\n.ml-n4[_ngcontent-%COMP%], .mx-n4[_ngcontent-%COMP%] {\n  margin-left: -1.5rem !important;\n}\n.m-n5[_ngcontent-%COMP%] {\n  margin: -3rem !important;\n}\n.mt-n5[_ngcontent-%COMP%], .my-n5[_ngcontent-%COMP%] {\n  margin-top: -3rem !important;\n}\n.mr-n5[_ngcontent-%COMP%], .mx-n5[_ngcontent-%COMP%] {\n  margin-right: -3rem !important;\n}\n.mb-n5[_ngcontent-%COMP%], .my-n5[_ngcontent-%COMP%] {\n  margin-bottom: -3rem !important;\n}\n.ml-n5[_ngcontent-%COMP%], .mx-n5[_ngcontent-%COMP%] {\n  margin-left: -3rem !important;\n}\n.m-auto[_ngcontent-%COMP%] {\n  margin: auto !important;\n}\n.mt-auto[_ngcontent-%COMP%], .my-auto[_ngcontent-%COMP%] {\n  margin-top: auto !important;\n}\n.mr-auto[_ngcontent-%COMP%], .mx-auto[_ngcontent-%COMP%] {\n  margin-right: auto !important;\n}\n.mb-auto[_ngcontent-%COMP%], .my-auto[_ngcontent-%COMP%] {\n  margin-bottom: auto !important;\n}\n.ml-auto[_ngcontent-%COMP%], .mx-auto[_ngcontent-%COMP%] {\n  margin-left: auto !important;\n}\n.pt-10[_ngcontent-%COMP%] {\n  padding-top: 6rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdGhlbWUuc2NzcyIsIi4uLy4uLy4uLy4uL2dyYXBoaWMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JBLHVCQUFBO0FBQ0EsWUFBQTtBQ25CQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0FBQ0o7QUFHQTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtBQUFGO0FBR0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFBRjtBQUdBO0VBQ0UsZ0JBQUE7QUFBRjtBQUdBO0VBQ0UsY0FBQTtBQUFGO0FBR0E7RUFDRSxjQUFBO0FBQUY7QUFHQTtFQUNFLGNBQUE7QUFBRjtBQUdBO0VBQ0UsY0FBQTtBQUFGO0FBR0E7RUFDRSxjQUFBO0FBQUY7QUFHQTtFQUNFLFdBQUE7QUFBRjtBQUdBO0VBQ0UsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFBRjtBQUlBO0VBQ0Usa0JBQUE7QUFERjtBQUlBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFERjtBQUlBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FBREY7QUFJQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FBREY7QUFJQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FBREY7QUFJQTtFQUNFLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFERjtBQUdBO0VBQ0UsV0FBQTtFQUNBLDJEQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBQUY7QUFHQTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQUY7QUFHQTtFQUNFLFdBQUE7RUFDQSx3REFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQUFGO0FBR0E7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQUY7QUFHQTtFQUNFLFdBQUE7RUFDQSxvREFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQUFGO0FBR0E7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUFGO0FBR0E7RUFDRSxXQUFBO0VBQ0EsdURBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUFBRjtBQUdBO0VBQ0UsZ0NBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0FBQUY7QUFHQTtFQUNFLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0FBQUY7QUFHQTtFQUNFLG9CQUFBO0FBQUY7QUFHQTtFQUNFLDBCQUFBO0FBQUY7QUFHQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQUY7QUFPQTtFQUNFLHlCQUFBO0FBSkY7QUFNRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBSko7QUFRQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQUxGO0FBUUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUFMRjtBQVFBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FBTEY7QUFRQTtFQUNFLHlCRHJPTztFQ3NPUCxXQUFBO0FBTEY7QUFRQTtFQUNFLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0FBTEY7QUFRQTtFQUNFLHlCQUFBO0FBTEY7QUFRRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBTko7QUFTRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQVBKO0FBWUE7RUFDRSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtBQVRGO0FBWUE7RUFDRSx5QkFBQTtBQVRGO0FBWUU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQVZKO0FBZUE7RUFDRSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtBQVpGO0FBZUE7RUFDRSx5QkFBQTtBQVpGO0FBY0U7RUFDRSxpQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBWko7QUFnQkE7RUFDRSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtBQWJGO0FBZ0JBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUFiRjtBQWdCQTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtBQWJGO0FBZ0JBO0VBQ0UsV0FBQTtBQWJGO0FBZ0JBO0VBQ0UsVUFBQTtBQWJGO0FBZ0JBO0VBQ0UsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFiRjtBQWdCQTtFQUNFLFdBQUE7QUFiRjtBQWdCQTtFQUNFLHFCQUFBO0FBYkY7QUFnQkE7RUFDRSxvQkFBQTtBQWJGO0FBZ0JBO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0FBYkY7QUFpQkE7RUFDRSxrQkFBQTtBQWRGO0FBaUJBO0VBQ0UsVUFBQTtBQWRGO0FBaUJBO0VBQ0UsVUFBQTtBQWRGO0FBaUJBO0VBQ0UsVUFBQTtBQWRGO0FBaUJBO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0FBZEY7QUFpQkE7RUFDRSxrQkFBQTtBQWRGO0FBZ0JFO0VBQ0UsVUFBQTtBQWRKO0FBa0JBO0VBQ0Usa0JBQUE7QUFmRjtBQWlCRTtFQUNFLFVBQUE7QUFmSjtBQW1CQTtFQUNFLGtCQUFBO0FBaEJGO0FBa0JFO0VBQ0UsVUFBQTtBQWhCSjtBQW9CQTtFQUNFLGtCQUFBO0FBakJGO0FBbUJFO0VBQ0UsVUFBQTtBQWpCSjtBQXFCQTtFQUNFLGtCQUFBO0FBbEJGO0FBb0JFO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0FBbEJKO0FBc0JBO0VBQ0UsVUFBQTtBQW5CRjtBQXNCQTtFQUNFLFlBQUE7QUFuQkY7QUFzQkE7RUFDRSx3QkFBQTtFQUNBLHFDQUFBO0VBQ0EsMENBQUE7QUFuQkY7QUFzQkE7RUFDRSwwREFBQTtBQW5CRjtBQXNCQTtFQUNFLHlCQUFBO0FBbkJGO0FBeUJBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FBdEJGO0FBd0JFO0VBQ0UsV0FBQTtBQXRCSjtBQXdCRTtFQUNFLFdBQUE7QUF0Qko7QUF5QkU7RUFDRSxjQUFBO0VBQ0EsZ0JBckJTO0FBRmI7QUE0QkU7RUFDRSxtQkFBQTtFQUNBLGdCQTNCaUI7QUFFckI7QUE2QkE7RUFDRSx5QkFBQTtBQTFCRjtBQStCRTtFQUNFLFlBQUE7QUE1Qko7QUFnQ0E7RUFDRSxXQUFBO0FBN0JGO0FBZ0NBO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQTdCRjtBQWdDQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7QUE3QkY7QUFnQ0E7RUFDRSxxQkFBQTtBQTdCRjtBQWdDQTtFQUNFLGlCQUFBO0FBN0JGO0FBZ0NBO0VBQ0Usb0JBQUE7QUE3QkY7QUFnQ0E7RUFFRSw0Q0FBQTtBQTlCRjtBQWlDQTtFQUVFLDZDQUFBO0FBL0JGO0FBa0NBO0VBQ0U7SUFDRSxpQkFBQTtFQS9CRjs7RUFrQ0E7SUFDRSxZQUFBO0VBL0JGOztFQWtDQTtJQUNFLFlBQUE7RUEvQkY7O0VBa0NBO0lBQ0Usa0JBQUE7SUFDQSxlQUFBO0lBQ0EsbUJBQUE7RUEvQkY7O0VBa0NBO0lBQ0UsbUJBQUE7RUEvQkY7O0VBa0NBO0lBQ0UsNEJBQUE7RUEvQkY7O0VBaUNBO0lBQ0UsbUJBQUE7RUE5QkY7O0VBZ0NBO0lBQ0UsYUFBQTtJQUNBLGVBQUE7SUFDQSxlQUFBO0VBN0JGOztFQStCQTtJQUNFLHNCQUFBO0VBNUJGO0FBQ0Y7QUErQkE7RUFDRTtJQUNFLFlBQUE7RUE3QkY7QUFDRjtBQWlDQTtFQUNFO0lBQ0UscUJBQUE7SUFDQSxZQUFBO0VBL0JGOztFQWtDQTtJQUNFLFlBQUE7RUEvQkY7QUFDRjtBQWdDRTtFQUNFO0lBQ0UsWUFBQTtFQTlCSjtBQUNGO0FBa0NBO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLG1CQUFBO0VBaENGOztFQW1DQTtJQUNFLDRCQUFBO0VBaENGO0FBQ0Y7QUFtQ0E7RUFFRTtJQUNFLGlCQUFBO0VBbENGOztFQXFDQztJQUNDLGdCQUFBO0VBbENGO0FBQ0Y7QUFvQ0U7RUFDRTtJQUNFLFlBQUE7RUFsQ0o7QUFDRjtBQXNDQSwwQ0FBQTtBQUNBOztFQUVFLHdCQUFBO0FBcENGO0FBdUNBOztFQUVFLDBCQUFBO0FBcENGO0FBdUNBOztFQUVFLDJCQUFBO0FBcENGO0FBdUNBOztFQUVFLHlCQUFBO0FBcENGO0FBdUNBO0VBQ0UsMEJBQUE7QUFwQ0Y7QUF1Q0E7O0VBRUUsOEJBQUE7QUFwQ0Y7QUF1Q0E7O0VBRUUsZ0NBQUE7QUFwQ0Y7QUF1Q0E7O0VBRUUsaUNBQUE7QUFwQ0Y7QUF1Q0E7O0VBRUUsK0JBQUE7QUFwQ0Y7QUF1Q0E7RUFDRSx5QkFBQTtBQXBDRjtBQXVDQTs7RUFFRSw2QkFBQTtBQXBDRjtBQXVDQTs7RUFFRSwrQkFBQTtBQXBDRjtBQXVDQTs7RUFFRSxnQ0FBQTtBQXBDRjtBQXVDQTs7RUFFRSw4QkFBQTtBQXBDRjtBQXVDQTtFQUNFLHVCQUFBO0FBcENGO0FBdUNBOztFQUVFLDJCQUFBO0FBcENGO0FBdUNBOztFQUVFLDZCQUFBO0FBcENGO0FBdUNBOztFQUVFLDhCQUFBO0FBcENGO0FBdUNBOztFQUVFLDRCQUFBO0FBcENGO0FBdUNBO0VBQ0UseUJBQUE7QUFwQ0Y7QUF1Q0E7O0VBRUUsNkJBQUE7QUFwQ0Y7QUF1Q0E7O0VBRUUsK0JBQUE7QUFwQ0Y7QUF1Q0E7O0VBRUUsZ0NBQUE7QUFwQ0Y7QUF1Q0E7O0VBRUUsOEJBQUE7QUFwQ0Y7QUF1Q0E7RUFDRSx1QkFBQTtBQXBDRjtBQXVDQTs7RUFFRSwyQkFBQTtBQXBDRjtBQXVDQTs7RUFFRSw2QkFBQTtBQXBDRjtBQXVDQTs7RUFFRSw4QkFBQTtBQXBDRjtBQXVDQTs7RUFFRSw0QkFBQTtBQXBDRjtBQXVDQTtFQUNFLHFCQUFBO0FBcENGO0FBdUNBOztFQUVFLHlCQUFBO0FBcENGO0FBdUNBOztFQUVFLDJCQUFBO0FBcENGO0FBdUNBOztFQUVFLDRCQUFBO0FBcENGO0FBdUNBOztFQUVFLDBCQUFBO0FBcENGO0FBdUNBO0VBQ0UsMkJBQUE7QUFwQ0Y7QUF1Q0E7O0VBRUUsK0JBQUE7QUFwQ0Y7QUF1Q0E7O0VBRUUsaUNBQUE7QUFwQ0Y7QUF1Q0E7O0VBRUUsa0NBQUE7QUFwQ0Y7QUF1Q0E7O0VBRUUsZ0NBQUE7QUFwQ0Y7QUF1Q0E7RUFDRSwwQkFBQTtBQXBDRjtBQXVDQTs7RUFFRSw4QkFBQTtBQXBDRjtBQXVDQTs7RUFFRSxnQ0FBQTtBQXBDRjtBQXVDQTs7RUFFRSxpQ0FBQTtBQXBDRjtBQXVDQTs7RUFFRSwrQkFBQTtBQXBDRjtBQXVDQTtFQUNFLHdCQUFBO0FBcENGO0FBdUNBOztFQUVFLDRCQUFBO0FBcENGO0FBdUNBOztFQUVFLDhCQUFBO0FBcENGO0FBdUNBOztFQUVFLCtCQUFBO0FBcENGO0FBdUNBOztFQUVFLDZCQUFBO0FBcENGO0FBdUNBO0VBQ0UsMEJBQUE7QUFwQ0Y7QUF1Q0E7O0VBRUUsOEJBQUE7QUFwQ0Y7QUF1Q0E7O0VBRUUsZ0NBQUE7QUFwQ0Y7QUF1Q0E7O0VBRUUsaUNBQUE7QUFwQ0Y7QUF1Q0E7O0VBRUUsK0JBQUE7QUFwQ0Y7QUF1Q0E7RUFDRSx3QkFBQTtBQXBDRjtBQXVDQTs7RUFFRSw0QkFBQTtBQXBDRjtBQXVDQTs7RUFFRSw4QkFBQTtBQXBDRjtBQXVDQTs7RUFFRSwrQkFBQTtBQXBDRjtBQXVDQTs7RUFFRSw2QkFBQTtBQXBDRjtBQXdDQTs7RUFFRSwrQkFBQTtBQXJDRjtBQXdDQTtFQUNFLDJCQUFBO0FBckNGO0FBd0NBOztFQUVFLCtCQUFBO0FBckNGO0FBd0NBOztFQUVFLGlDQUFBO0FBckNGO0FBd0NBOztFQUVFLGtDQUFBO0FBckNGO0FBd0NBOztFQUVFLGdDQUFBO0FBckNGO0FBd0NBO0VBQ0UsMEJBQUE7QUFyQ0Y7QUF3Q0E7O0VBRUUsOEJBQUE7QUFyQ0Y7QUF3Q0E7O0VBRUUsZ0NBQUE7QUFyQ0Y7QUF3Q0E7O0VBRUUsaUNBQUE7QUFyQ0Y7QUF3Q0E7O0VBRUUsK0JBQUE7QUFyQ0Y7QUF3Q0E7RUFDRSx3QkFBQTtBQXJDRjtBQXdDQTs7RUFFRSw0QkFBQTtBQXJDRjtBQXdDQTs7RUFFRSw4QkFBQTtBQXJDRjtBQXdDQTs7RUFFRSwrQkFBQTtBQXJDRjtBQXdDQTs7RUFFRSw2QkFBQTtBQXJDRjtBQXdDQTtFQUNFLDBCQUFBO0FBckNGO0FBd0NBOztFQUVFLDhCQUFBO0FBckNGO0FBd0NBOztFQUVFLGdDQUFBO0FBckNGO0FBd0NBOztFQUVFLGlDQUFBO0FBckNGO0FBd0NBOztFQUVFLCtCQUFBO0FBckNGO0FBd0NBO0VBQ0Usd0JBQUE7QUFyQ0Y7QUF3Q0E7O0VBRUUsNEJBQUE7QUFyQ0Y7QUF3Q0E7O0VBRUUsOEJBQUE7QUFyQ0Y7QUF3Q0E7O0VBRUUsK0JBQUE7QUFyQ0Y7QUF3Q0E7O0VBRUUsNkJBQUE7QUFyQ0Y7QUF3Q0E7RUFDRSx1QkFBQTtBQXJDRjtBQXdDQTs7RUFFRSwyQkFBQTtBQXJDRjtBQXdDQTs7RUFFRSw2QkFBQTtBQXJDRjtBQXdDQTs7RUFFRSw4QkFBQTtBQXJDRjtBQXdDQTs7RUFFRSw0QkFBQTtBQXJDRjtBQXdDQTtFQUNFLDRCQUFBO0FBckNGIiwiZmlsZSI6ImdyYXBoaWMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcm9ib3RvQ29uZGVuc2VkOiBcIlJvYm90byBDb25kZW5zZWRcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG5cbiRtYXhXaWR0aDogMTIwMHB4O1xuXG4kcGFkOiAyNnB4O1xuXG4kYmx1ZUdyYXk6ICM2ZTg1OTE7XG4kZ3JheTogI2VlZTtcbiRvcmFuZ2U6ICNmNWFmMTM7XG5cbiRjb2xvcnM6XG4gICMwMTc0YTFcbiAgIzAyNDg4MFxuICAjMzU1RjQ2XG4gICMwOTRmNThcbiAgJG9yYW5nZTtcblxuJGhvdmVyT3BhY2l0eTogMC44O1xuXG5cbi8qIG9sZCBhbmFseXNpcyBjb2xvciAqL1xuLyogIzQ3ODY2MiAqLyIsIkBpbXBvcnQgXCJ0aGVtZVwiO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgJjo6bmctZGVlcCBbaGlkZGVuXSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4uYnJlYWsge1xuICBmbGV4LWJhc2lzOiAxMDAlO1xuICBoZWlnaHQ6IDA7XG59XG5cbi5tYXQtY2FyZC1jb250ZW50IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4ubWF0LWNhcmQtZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLmNvbG9yLTEge1xuICBjb2xvcjogbnRoKCRjb2xvcnMsIDEpO1xufVxuXG4uY29sb3ItMiB7XG4gIGNvbG9yOiBudGgoJGNvbG9ycywgMik7XG59XG5cbi5jb2xvci0zIHtcbiAgY29sb3I6IG50aCgkY29sb3JzLCAzKTtcbn1cblxuLmNvbG9yLTQge1xuICBjb2xvcjogbnRoKCRjb2xvcnMsIDQpO1xufVxuXG4uY29sb3ItNSB7XG4gIGNvbG9yOiBudGgoJGNvbG9ycywgNSk7XG59XG5cbi53aGl0ZSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uaGVhZGVyIHtcbiAgcGFkZGluZzo1cHggMTBweCA1cHggMTBweDtcbiAgYWxpZ24tc2VsZjogZmxleC1jZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiA2MHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG9wYWNpdHk6IDE7XG4gIHBhZGRpbmctdG9wOiAxLjdyZW07XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cbn1cblxuLmhlYWRlcjEsIC5oZWFkZXIyLCAuaGVhZGVyMywgLmhlYWRlcjQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jb2wtaGVhZGluZyB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5hcnJvdyB7XG4gIHdpZHRoOiAzLjVyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmFycm93MSB7XG4gIGxlZnQ6IDE3cmVtO1xuICB0b3A6IDMuN3JlbTtcbn1cblxuLmFycm93MiwgLmFycm93MyB7XG4gIHRvcDogMi44cmVtO1xuICBsZWZ0OiAxN3JlbTtcbn1cblxuLmNvbC1ia2duZC0xIHtcbiAgbWFyZ2luOiAwcHggMHB4IDVweCAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IFxuICBoZWlnaHQ6IDV2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmNvbC1ia2duZC0xOjpiZWZvcmUgeyAgICBcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9kaWFncmFtLWltYWdlcy1kYXRhLWNvbGxlY3Rpb24uanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICByaWdodDogMHB4O1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMHB4O1xuICBvcGFjaXR5OiAwLjgwO1xufVxuXG4uY29sLWJrZ25kLTIge1xuICBtYXJnaW46IDBweCAwcHggNXB4IDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyBcbiAgaGVpZ2h0OjV2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29sLWJrZ25kLTI6OmJlZm9yZSB7ICAgIFxuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2RpYWdyYW0taGVhZGVyLW1hbmFnLWNvbXBsaS5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIG9wYWNpdHk6IDAuNzU7XG59XG5cbi5jb2wtYmtnbmQtMyB7XG4gIG1hcmdpbjogMHB4IDBweCA1cHggMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgaGVpZ2h0OiA1dmg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbC1ia2duZC0zOjpiZWZvcmUgeyAgICBcbiAgY29udGVudDogXCJcIjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9kaWFncmFtLWhlYWRlci1hbmFseXNpcy5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIG9wYWNpdHk6IDAuNzU7XG59XG5cbi5jb2wtYmtnbmQtNCB7XG4gIG1hcmdpbjogMHB4IDBweCA1cHggMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IFxuICBoZWlnaHQ6IDV2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY29sLWJrZ25kLTQ6OmJlZm9yZSB7ICAgIFxuICBjb250ZW50OiBcIlwiO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL291dGNvbWVzLWhlYWRlci1iYWNrZ3JvdW5kLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgb3BhY2l0eTogMC43NTtcbn1cblxuLnNtLXNwYyB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbTtcbiAgcGFkZGluZy10b3A6IDAuMjVyZW07XG59XG5cbi5jb2wtbGluZS0xIHtcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICMzQjg4QUY7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA3MHB4KTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY29sLXBhZCB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4uY29sLWxpbmUtd2hpdGUge1xuICBib3JkZXItdG9wOiA0cHggc29saWQgI0ZmZjtcbn1cblxuLmNvbC10aXRsZSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuJGNvbFBhZDogNDA7XG4kY29sQnN5bmNQYWQ6IDExMDtcbiRob3ZlckNvbG9yOiAjN2FiMGNjO1xuXG4uY29sLXR5cGUtMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMTc0YTE7XG5cbiAgLm1hdC1jYXJkIHtcbiAgICBtYXJnaW4tbGVmdDogJGNvbFBhZCArIHB4O1xuICAgIG1hcmdpbi1yaWdodDogJGNvbFBhZCArIHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5idG4tdHlwZS0xIHtcbiAgYmFja2dyb3VuZDogIzAxNzRhMTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5idG4tdHlwZS0yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyNDg4MDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5idG4tdHlwZS0zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ3ODY2MjtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5idG4tdHlwZS01IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5jb2wtbGluZS0yIHtcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICMwMjQ4ODA7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA3MHB4KTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY29sLXR5cGUtMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjQ4ODA7XG5cbiAgXG4gIC5tYXQtY2FyZCB7XG4gICAgbWFyZ2luLWxlZnQ6ICRjb2xQYWQgKyBweDtcbiAgICBtYXJnaW4tcmlnaHQ6ICRjb2xQYWQgKyBweDtcbiAgICB3aWR0aDogODAlO1xuICB9XG5cbiAgI3VuZGVyLXNlZWQge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuIFxufVxuXG4uY29sLWxpbmUtMyB7XG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCAjNDc4NjYyO1xuICB3aWR0aDogY2FsYygxMDAlIC0gNzBweCk7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmNvbC10eXBlLTMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDc4NjYyO1xuXG4gIFxuICAubWF0LWNhcmQge1xuICAgIG1hcmdpbi1sZWZ0OiAkY29sUGFkICsgcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAkY29sUGFkICsgcHg7IFxuICAgIHdpZHRoOjgwJTtcbiAgfVxuXG59XG5cbi5jb2wtbGluZS00IHtcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICMwOTRGNTg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA3MHB4KTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY29sLXR5cGUtNCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwOTRGNTg7XG5cbiAgLm1hdC1jYXJkIHtcbiAgICAvKmZvbnQtZmFtaWx5OiAkcm9ib3RvQ29uZGVuc2VkOyovXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNHB4OyBcbiAgICAvKndpZHRoOiAxMDAlOyovXG4gIH1cbn1cblxuLmNvbC1saW5lLTUge1xuICBib3JkZXItdG9wOiA0cHggc29saWQgJG9yYW5nZTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDcwcHgpO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5ob21lLW5hdiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmhvbWUtbmF2OmhvdmVyIHtcbiAgY29sb3I6ICNFRUU7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNhcmQtaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYXJkLWltZy0zcCB7XG4gIHdpZHRoOiA3MCU7XG59XG5cbi50ZXh0LTNwIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNDU0NDQ0O1xufVxuXG4uY2FyZC1pbWctMiB7XG4gIHdpZHRoOiAxMTAlO1xufVxuXG4uY2FyZC1tYXJnaW4ge1xuICBtYXJnaW4tYm90dG9tOiAzLjVyZW07XG59XG5cbi5jYXJkLXRleHQge1xuICAvKmZvbnQtc2l6ZToxLjNyZW07Ki9cbn1cblxuLmNvbC1zdHlsZXMge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuXG4uaW1nLWN0ciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNhcmQtaW1nLWNzcnMge1xuICB3aWR0aDogNjUlO1xufVxuXG4uY2FyZC1pbWctYXMge1xuICB3aWR0aDogNzAlO1xufVxuXG4uY2FyZC1pbWctYXQge1xuICB3aWR0aDogODAlO1xufVxuXG4uY2FyZC1pbWctYmV0dGVyIHtcbiAgd2lkdGg6IDc1JTtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLmNhcmQtaW1nLXNtIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIGltZyB7XG4gICAgd2lkdGg6IDY1JTtcbiAgfVxufVxuXG4uY2FyZC1pbWctZzEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogNTUlO1xuICB9XG59XG5cbi5jYXJkLWltZy1nMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBpbWcge1xuICAgIHdpZHRoOjY1JTtcbiAgfVxufVxuXG4uY2FyZC1pbWctZzMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogNDAlO1xuICB9XG59XG5cbi5jYXJkLWltZy1nNCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBpbWcge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbn1cblxuLmNhcmQtemluZGV4IHtcbiAgei1pbmRleDogNTtcbn1cblxuI2cxLCAjZzIsICNnMywgI2c0IHtcbiAgaGVpZ2h0OiAxMnZoO1xufVxuXG4uY2FyZC1mb290ZXIge1xuICBwYWRkaW5nOiAwLjc1cmVtIDEuMjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbn1cblxuLmNhcmQtZm9vdGVyOmxhc3QtY2hpbGQge1xuICBib3JkZXItcmFkaXVzOiAwIDAgY2FsYygwLjI1cmVtIC0gMXB4KSBjYWxjKDAuMjVyZW0gLSAxcHgpO1xufVxuXG4udGV4dC1tdXRlZCB7XG4gIGNvbG9yOiAjNmM3NTdkICFpbXBvcnRhbnQ7XG59XG5cbiRic3luY1dpZHRoOiAxMDBweDtcbiRic3luY0V4cGFuZGVkV2lkdGg6IDE2MHB4O1xuXG4uYnN5bmMxLCAuYnN5bmMyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIGJvcmRlcjogNHB4IHNvbGlkICRvcmFuZ2U7XG4gIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDY7XG5cbiAgJi5ic3luYzEge1xuICAgIHRvcDogLTIwMHB4O1xuICB9XG4gICYuYnN5bmMyIHtcbiAgICB0b3A6IC0xNzVweDtcbiAgfVxuXG4gIC5tYXQtY2FyZC1jb250ZW50IHtcbiAgICBsaW5lLWhlaWdodDogMDtcbiAgICBtYXgtd2lkdGg6ICRic3luY1dpZHRoO1xuICB9XG59XG5cbi5ic3luYzEtZmxpcCwgLmJzeW5jMi1mbGlwIHtcbiAgLm1hdC1jYXJkLWNvbnRlbnQge1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgbWF4LXdpZHRoOiAkYnN5bmNFeHBhbmRlZFdpZHRoO1xuICB9XG59XG5cbi55ZWxsb3ctYm9yZGVyIHtcbiAgYm9yZGVyOiA0cHggc29saWQgJG9yYW5nZTtcbn1cblxuXG4jYnN5bmMxLCAjYnN5bmMyIHtcbiAgJi5tYXQtY2FyZCB7XG4gICAgcGFkZGluZzogNHB4O1xuICB9XG59XG5cbi5ic3luYy1pbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnB5LWJpZyB7XG4gIHBhZGRpbmctdG9wOiAgNHJlbTtcbiAgcGFkZGluZy1ib3R0b206IDRyZW07XG59XG5cbi5nb2Fscy1jYXJkLXBhZCB7XG4gIG1hcmdpbi1ib3R0b206IDF2dztcbiAgLypwYWRkaW5nOiAxdncgMXZ3OyovXG59XG5cbi5wbS1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuXG4uYXQtcGFkIHtcbiAgcGFkZGluZy10b3A6IDNyZW07XG59XG5cbnNlZWQtcGFkIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5wci12cC00LFxue1xuICBwYWRkaW5nLXJpZ2h0OiBjYWxjKDF2dyArIDAuNXJlbSkgIWltcG9ydGFudDtcbn1cblxuLnByLXZwLTMsXG57XG4gIHBhZGRpbmctcmlnaHQ6IGNhbGMoMXZ3ICsgMC4yNXJlbSkgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgLmNhcmQtdGV4dCB7XG4gICAgZm9udC1zaXplOjEuNHJlbTsgXG4gIH1cblxuICAubWF0LWNhcmQge1xuICAgIHBhZGRpbmc6NXB4O1xuICB9XG5cbiAgLm1hdC1jYXJkLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6NXB4O1xuICB9XG5cbiAgLmNvbC1zdHlsZXMge1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgfVxuXG4gIC5wbS1jYXJkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5cbiAgLmF0LXBhZCB7XG4gICAgcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgfVxuICBzZWVkLXBhZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuICAjZzEsICNnMiwgI2czLCAjZzQge1xuICAgIGhlaWdodDogdW5zZXQ7XG4gICAgbWF4LXdpZHRoOiA4MHZ3O1xuICAgIG1pbi13aWR0aDogODB2dztcbiAgfVxuICAuY2FyZC10ZXh0IHtcbiAgICAvKmZvbnQtc2l6ZTogMC45NXJlbTsqL1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU5OXB4KSBhbmQgKG1heC13aWR0aDogNzk5cHgpIHtcbiAgI2cxLCAjZzIsICNnMywgI2c0IHtcbiAgICBoZWlnaHQ6IDIwdmg7XG4gIH1cbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MDBweCkgYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xuICAjZzEsICNnMiwgI2czLCAjZzQge1xuICAgIC8qcGFkZGluZy10b3A6IDFyZW07Ki9cbiAgICBoZWlnaHQ6IDEydmg7XG4gIH1cblxuICAubWF0LWNhcmQge1xuICAgIHBhZGRpbmc6NXB4O1xuICB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA2MzBweCl7XG4gICAgI2cxLCAjZzIsICNnMywgI2c0IHtcbiAgICAgIGhlaWdodDogMjB2aDtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLnBtLWNhcmQge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuXG4gIC5hdC1wYWQge1xuICAgIHBhZGRpbmctdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTYwMHB4KSB7XG5cbiAgI2cxLCAjZzIsICNnMywgI2c0IHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgfVxuXG4gICAubWF0LWNhcmQtY29udGVudCB7XG4gICAgcGFkZGluZy10b3A6MXZoO1xuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDYzMHB4KXtcbiAgICAjZzEsICNnMiwgI2czLCAjZzQge1xuICAgICAgaGVpZ2h0OiAxOHZoO1xuICAgIH1cbiAgfVxufVxuXG4vKiBCT09UU1RSQVA1IG1hcmdpbiBhbmQgcGFkZGluZyBjbGFzc2VzICovXG4ubXQtMCxcbi5teS0wIHtcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xufVxuXG4ubXItMCxcbi5teC0wIHtcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG59XG5cbi5tYi0wLFxuLm15LTAge1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5tbC0wLFxuLm14LTAge1xuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xufVxuXG4ubS0xIHtcbiAgbWFyZ2luOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tdC0xLFxuLm15LTEge1xuICBtYXJnaW4tdG9wOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tci0xLFxuLm14LTEge1xuICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm1iLTEsXG4ubXktMSB7XG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm1sLTEsXG4ubXgtMSB7XG4gIG1hcmdpbi1sZWZ0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tLTIge1xuICBtYXJnaW46IDAuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubXQtMixcbi5teS0yIHtcbiAgbWFyZ2luLXRvcDogMC41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tci0yLFxuLm14LTIge1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubWItMixcbi5teS0yIHtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tbC0yLFxuLm14LTIge1xuICBtYXJnaW4tbGVmdDogMC41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tLTMge1xuICBtYXJnaW46IDFyZW0gIWltcG9ydGFudDtcbn1cblxuLm10LTMsXG4ubXktMyB7XG4gIG1hcmdpbi10b3A6IDFyZW0gIWltcG9ydGFudDtcbn1cblxuLm1yLTMsXG4ubXgtMyB7XG4gIG1hcmdpbi1yaWdodDogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubWItMyxcbi5teS0zIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubWwtMyxcbi5teC0zIHtcbiAgbWFyZ2luLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcbn1cblxuLm0tNCB7XG4gIG1hcmdpbjogMS41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tdC00LFxuLm15LTQge1xuICBtYXJnaW4tdG9wOiAxLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm1yLTQsXG4ubXgtNCB7XG4gIG1hcmdpbi1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tYi00LFxuLm15LTQge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm1sLTQsXG4ubXgtNCB7XG4gIG1hcmdpbi1sZWZ0OiAxLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLm0tNSB7XG4gIG1hcmdpbjogM3JlbSAhaW1wb3J0YW50O1xufVxuXG4ubXQtNSxcbi5teS01IHtcbiAgbWFyZ2luLXRvcDogM3JlbSAhaW1wb3J0YW50O1xufVxuXG4ubXItNSxcbi5teC01IHtcbiAgbWFyZ2luLXJpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tYi01LFxuLm15LTUge1xuICBtYXJnaW4tYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tbC01LFxuLm14LTUge1xuICBtYXJnaW4tbGVmdDogM3JlbSAhaW1wb3J0YW50O1xufVxuXG4ucC0wIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG4ucHQtMCxcbi5weS0wIHtcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbn1cblxuLnByLTAsXG4ucHgtMCB7XG4gIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcbn1cblxuLnBiLTAsXG4ucHktMCB7XG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5wbC0wLFxuLnB4LTAge1xuICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbn1cblxuLnAtMSB7XG4gIHBhZGRpbmc6IDAuMjVyZW0gIWltcG9ydGFudDtcbn1cblxuLnB0LTEsXG4ucHktMSB7XG4gIHBhZGRpbmctdG9wOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wci0xLFxuLnB4LTEge1xuICBwYWRkaW5nLXJpZ2h0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wYi0xLFxuLnB5LTEge1xuICBwYWRkaW5nLWJvdHRvbTogMC4yNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucGwtMSxcbi5weC0xIHtcbiAgcGFkZGluZy1sZWZ0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wLTIge1xuICBwYWRkaW5nOiAwLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLnB0LTIsXG4ucHktMiB7XG4gIHBhZGRpbmctdG9wOiAwLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLnByLTIsXG4ucHgtMiB7XG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucGItMixcbi5weS0yIHtcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucGwtMixcbi5weC0yIHtcbiAgcGFkZGluZy1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLnAtMyB7XG4gIHBhZGRpbmc6IDFyZW0gIWltcG9ydGFudDtcbn1cblxuLnB0LTMsXG4ucHktMyB7XG4gIHBhZGRpbmctdG9wOiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wci0zLFxuLnB4LTMge1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wYi0zLFxuLnB5LTMge1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucGwtMyxcbi5weC0zIHtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wLTQge1xuICBwYWRkaW5nOiAxLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLnB0LTQsXG4ucHktNCB7XG4gIHBhZGRpbmctdG9wOiAxLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLnByLTQsXG4ucHgtNCB7XG4gIHBhZGRpbmctcmlnaHQ6IDEuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucGItNCxcbi5weS00IHtcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ucGwtNCxcbi5weC00IHtcbiAgcGFkZGluZy1sZWZ0OiAxLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLnAtNSB7XG4gIHBhZGRpbmc6IDNyZW0gIWltcG9ydGFudDtcbn1cblxuLnB0LTUsXG4ucHktNSB7XG4gIHBhZGRpbmctdG9wOiAzcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wci01LFxuLnB4LTUge1xuICBwYWRkaW5nLXJpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wYi01LFxuLnB5LTUge1xuICBwYWRkaW5nLWJvdHRvbTogM3JlbSAhaW1wb3J0YW50O1xufVxuXG4ucGwtNSxcbi5weC01IHtcbiAgcGFkZGluZy1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7XG59XG5cblxuLnBsLTYsXG4ucHgtNiB7XG4gIHBhZGRpbmctbGVmdDogMy41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tLW4xIHtcbiAgbWFyZ2luOiAtMC4yNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubXQtbjEsXG4ubXktbjEge1xuICBtYXJnaW4tdG9wOiAtMC4yNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubXItbjEsXG4ubXgtbjEge1xuICBtYXJnaW4tcmlnaHQ6IC0wLjI1cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tYi1uMSxcbi5teS1uMSB7XG4gIG1hcmdpbi1ib3R0b206IC0wLjI1cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tbC1uMSxcbi5teC1uMSB7XG4gIG1hcmdpbi1sZWZ0OiAtMC4yNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubS1uMiB7XG4gIG1hcmdpbjogLTAuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubXQtbjIsXG4ubXktbjIge1xuICBtYXJnaW4tdG9wOiAtMC41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tci1uMixcbi5teC1uMiB7XG4gIG1hcmdpbi1yaWdodDogLTAuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubWItbjIsXG4ubXktbjIge1xuICBtYXJnaW4tYm90dG9tOiAtMC41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tbC1uMixcbi5teC1uMiB7XG4gIG1hcmdpbi1sZWZ0OiAtMC41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tLW4zIHtcbiAgbWFyZ2luOiAtMXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubXQtbjMsXG4ubXktbjMge1xuICBtYXJnaW4tdG9wOiAtMXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubXItbjMsXG4ubXgtbjMge1xuICBtYXJnaW4tcmlnaHQ6IC0xcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tYi1uMyxcbi5teS1uMyB7XG4gIG1hcmdpbi1ib3R0b206IC0xcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tbC1uMyxcbi5teC1uMyB7XG4gIG1hcmdpbi1sZWZ0OiAtMXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubS1uNCB7XG4gIG1hcmdpbjogLTEuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubXQtbjQsXG4ubXktbjQge1xuICBtYXJnaW4tdG9wOiAtMS41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tci1uNCxcbi5teC1uNCB7XG4gIG1hcmdpbi1yaWdodDogLTEuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubWItbjQsXG4ubXktbjQge1xuICBtYXJnaW4tYm90dG9tOiAtMS41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tbC1uNCxcbi5teC1uNCB7XG4gIG1hcmdpbi1sZWZ0OiAtMS41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tLW41IHtcbiAgbWFyZ2luOiAtM3JlbSAhaW1wb3J0YW50O1xufVxuXG4ubXQtbjUsXG4ubXktbjUge1xuICBtYXJnaW4tdG9wOiAtM3JlbSAhaW1wb3J0YW50O1xufVxuXG4ubXItbjUsXG4ubXgtbjUge1xuICBtYXJnaW4tcmlnaHQ6IC0zcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tYi1uNSxcbi5teS1uNSB7XG4gIG1hcmdpbi1ib3R0b206IC0zcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tbC1uNSxcbi5teC1uNSB7XG4gIG1hcmdpbi1sZWZ0OiAtM3JlbSAhaW1wb3J0YW50O1xufVxuXG4ubS1hdXRvIHtcbiAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5tdC1hdXRvLFxuLm15LWF1dG8ge1xuICBtYXJnaW4tdG9wOiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5tci1hdXRvLFxuLm14LWF1dG8ge1xuICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLm1iLWF1dG8sXG4ubXktYXV0byB7XG4gIG1hcmdpbi1ib3R0b206IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLm1sLWF1dG8sXG4ubXgtYXV0byB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5wdC0xMCB7XG4gIHBhZGRpbmctdG9wOiA2cmVtICFpbXBvcnRhbnQ7XG59XG4iXX0= */"] });


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
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");







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
DataStandardizationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataStandardizationComponent, selectors: [["ng-component"]], decls: 69, vars: 8, consts: [[1, "bpt"], [1, "mt-3", "mx-5"], [1, "mat-h2", "mb-4"], [1, "bold"], ["src", "assets/images/arrow-good-better.png", "alt", "arrow left to right from good to best", 3, "ngClass.xs", "ngClass.sm"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutAlign", "space-between stretch", 1, "mt-2"], ["fxFlex", "33%"], ["id", "good", 1, "card-good", "mr-2", 3, "click"], [3, "hidden"], ["fxLayoutAlign", "center center"], ["src", "assets/images/bedes_logo-white.png", "alt", "BEDES Logo", 1, "data-card"], [1, "py-5", "align-center", "bold", "white-text"], [1, "align-center", "bold"], [1, "card-text"], ["routerLink", "../bedes", "mat-raised-button", "", "role", "button", 1, "btn", 3, "click"], ["id", "better", 1, "card-better", "mr-2", 3, "click"], ["src", "assets/images/bldgsync-logo-white.png", "alt", "BuildingSync Logo", 1, "data-card"], ["routerLink", "../building-sync", "mat-raised-button", "", "role", "button", 1, "btn", 3, "click"], ["id", "best", 1, "card-best", 3, "click"], ["src", "assets/images/audit-template-logo-white.png", "alt", "Audit Template Logo", 1, "data-card"], [1, "bold", "align-center"], ["routerLink", "../audit-template", "mat-raised-button", "", "role", "button", 1, "btn", 3, "click"]], template: function DataStandardizationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Data Standardization: The Foundation of a Building Performance Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\"Standardization\" is the process of bringing building energy efficiency data into a common format, making it much easier to collect, store, analyze, and share. Use the navigator below to learn more about the tiers of data standardization.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Why standardize your data?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Keeping your building data with common terms or in a common format makes it much easier to collect, store, analyze, visualize, and share with partners to reach your programmatic goals. Start with BEDES to standardize your terms or field names, BuildingSync to give some structure to your data, or consider using Audit Template for full end-to-end standardization of your building asset and performance data. Standardizing your data saves time, money, and headache over the lifetime of your program. Use the navigator below to learn more about each tier of data standardization.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataStandardizationComponent_Template_mat_card_click_13_listener() { return ctx.toggleCard("good"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-content", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Use Standard Data Terms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card-content", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Standardize Data Terms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "If you\u2019re not ready to adopt a standard audit reporting tool or file format, we recommend that jurisdictions and auditors use common data terms in their systems. This is the most basic level of standardization.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "The Building Energy Data Exchange Specification (BEDES) contains over 600 building energy terms developed by DOE and the Lawrence Berkeley National Laboratory (LBNL). Using BEDES terms is a very simple way to improve data quality, enabling you to do more in less time.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataStandardizationComponent_Template_a_click_27_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Learn more about BEDES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-card", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataStandardizationComponent_Template_mat_card_click_30_listener() { return ctx.toggleCard("better"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-card-content", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Use a Standard File Format");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-card-content", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Standardize File Formats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "If you\u2019re not ready to adopt a single reporting tool like Audit Template, we recommend that jurisdictions and auditors use tools that can export data in a standard format like BuildingSync. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "BuildingSync is a language built on top of the BEDES dictionary used to describe buildings in a way that computers can understand. It provides a way to share building and audit information so that it\u2019s easier to give to other people and ensures that information will be just as usable ten years from now as it is today.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "BuildingSync is what enables Audit Template, Asset Score, SEED, and many other applications to work with BPS-related data so well.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataStandardizationComponent_Template_a_click_46_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Learn more about BuildingSync");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-card", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataStandardizationComponent_Template_mat_card_click_49_listener() { return ctx.toggleCard("best"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-card-content", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Use a Standard Tool");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-card-content", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h3", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Standardize Data Collection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Using a single tool like Audit Template to collect data is the easiest and most effective way to standardize data. This approach maximizes the value, persistence, usability and portability of audit data.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Auditors can use a mobile app to submit data using one of several ASHRAE-standard or custom reporting templates. Program administrators access a City Dashboard to monitor submissions, verify data, and download reports. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Because Audit Template uses the BuildingSync file format, audit data is future-proof and easily shared with those who need it. You can even generate an Asset Score report with cost-effective upgrade recommendations and a 1-10 overall efficiency rating. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "We recommend this path for organizations committed to the most ambitious goals, or those in the early stages of launching a building performance standard who don\u2019t have pre-existing commitments to other audit tools.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataStandardizationComponent_Template_a_click_67_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Learn more about Audit Template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.xs", "small-fit")("ngClass.sm", "small-fit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
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
    } }, directives: [_angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__["DefaultClassDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatAnchor"]], styles: ["[_nghost-%COMP%]  [hidden] {\n  display: none;\n}\n.white-text[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.bpt[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.mt-5[_ngcontent-%COMP%], .my-5[_ngcontent-%COMP%] {\n  margin-top: 3rem !important;\n}\n.mt-3[_ngcontent-%COMP%], .my-3[_ngcontent-%COMP%] {\n  margin-top: 1rem !important;\n}\n.mt-2[_ngcontent-%COMP%], .my-2[_ngcontent-%COMP%] {\n  margin-top: 0.5rem !important;\n}\n.mr-3[_ngcontent-%COMP%], .mx-3[_ngcontent-%COMP%] {\n  margin-right: 1rem !important;\n}\n.mr-2[_ngcontent-%COMP%], .mx-2[_ngcontent-%COMP%] {\n  margin-right: 0.5rem !important;\n}\n.ml-3[_ngcontent-%COMP%], .mx-3[_ngcontent-%COMP%] {\n  margin-left: 1rem !important;\n}\n.mr-5[_ngcontent-%COMP%], .mx-5[_ngcontent-%COMP%] {\n  margin-right: 3rem !important;\n}\n.ml-5[_ngcontent-%COMP%], .mx-5[_ngcontent-%COMP%] {\n  margin-left: 3rem !important;\n}\n.mb-4[_ngcontent-%COMP%], .my-4[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem !important;\n}\n.mb-2[_ngcontent-%COMP%], .my-2[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem !important;\n}\n.pt-5[_ngcontent-%COMP%], .py-5[_ngcontent-%COMP%] {\n  padding-top: 3rem !important;\n}\n.bold[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.align-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.data-card[_ngcontent-%COMP%] {\n  min-height: 150px;\n}\n.card-good[_ngcontent-%COMP%] {\n  background-color: #1473cc;\n  color: white;\n}\n.card-better[_ngcontent-%COMP%] {\n  background-color: #125d9b;\n  color: white;\n}\n.card-best[_ngcontent-%COMP%] {\n  background-color: #092357;\n  color: white;\n}\n.card-white[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n}\n.btn-type-1[_ngcontent-%COMP%] {\n  background: #3B88AF;\n  color: #fff;\n}\n.btn-type-2[_ngcontent-%COMP%] {\n  background-color: #024880;\n  color: #fff;\n}\n.small-fit[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdGhlbWUuc2NzcyIsIi4uLy4uLy4uLy4uL2RhdGEtc3RhbmRhcmRpemF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CQSx1QkFBQTtBQUNBLFlBQUE7QUNqQkU7RUFDRSxhQUFBO0FBREo7QUFLQTtFQUNFLFdBQUE7QUFGRjtBQUtBO0VBQ0UsaUJEWlM7RUNhVCxjQUFBO0FBRkY7QUFLQTs7RUFFRSwyQkFBQTtBQUZGO0FBS0E7O0VBRUUsMkJBQUE7QUFGRjtBQUtBOztFQUVFLDZCQUFBO0FBRkY7QUFLQTs7RUFFRSw2QkFBQTtBQUZGO0FBS0E7O0VBRUUsK0JBQUE7QUFGRjtBQUtBOztFQUVFLDRCQUFBO0FBRkY7QUFLQTs7RUFFRSw2QkFBQTtBQUZGO0FBS0E7O0VBRUUsNEJBQUE7QUFGRjtBQUtBOztFQUVFLGdDQUFBO0FBRkY7QUFLQTs7RUFFRSxnQ0FBQTtBQUZGO0FBS0E7O0VBRUUsNEJBQUE7QUFGRjtBQUtBO0VBQ0MsaUJBQUE7QUFGRDtBQUtBO0VBQ0Msa0JBQUE7QUFGRDtBQUtBO0VBQ0MsaUJBQUE7QUFGRDtBQUtBO0VBQ0MseUJBQUE7RUFDQSxZQUFBO0FBRkQ7QUFLQTtFQUNDLHlCQUFBO0VBQ0EsWUFBQTtBQUZEO0FBS0E7RUFDQyx5QkFBQTtFQUNBLFlBQUE7QUFGRDtBQUtBO0VBQ0MsdUJBQUE7RUFDQSxZQUFBO0FBRkQ7QUFLQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQUZGO0FBS0E7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUFGRjtBQUtBO0VBQ0UsV0FBQTtBQUZGIiwiZmlsZSI6ImRhdGEtc3RhbmRhcmRpemF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHJvYm90b0NvbmRlbnNlZDogXCJSb2JvdG8gQ29uZGVuc2VkXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuXG4kbWF4V2lkdGg6IDEyMDBweDtcblxuJHBhZDogMjZweDtcblxuJGJsdWVHcmF5OiAjNmU4NTkxO1xuJGdyYXk6ICNlZWU7XG4kb3JhbmdlOiAjZjVhZjEzO1xuXG4kY29sb3JzOlxuICAjMDE3NGExXG4gICMwMjQ4ODBcbiAgIzM1NUY0NlxuICAjMDk0ZjU4XG4gICRvcmFuZ2U7XG5cbiRob3Zlck9wYWNpdHk6IDAuODtcblxuXG4vKiBvbGQgYW5hbHlzaXMgY29sb3IgKi9cbi8qICM0Nzg2NjIgKi8iLCJAaW1wb3J0IFwidGhlbWVcIjtcblxuOmhvc3Qge1xuXG4gICY6Om5nLWRlZXAgW2hpZGRlbl0ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLndoaXRlLXRleHQge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJwdCB7XG4gIG1heC13aWR0aDogJG1heFdpZHRoO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLm10LTUsXG4ubXktNSB7XG4gIG1hcmdpbi10b3A6IDNyZW0gIWltcG9ydGFudDtcbn1cblxuLm10LTMsXG4ubXktMyB7XG4gIG1hcmdpbi10b3A6IDFyZW0gIWltcG9ydGFudDtcbn1cblxuLm10LTIsXG4ubXktMiB7XG4gIG1hcmdpbi10b3A6IDAuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubXItMyxcbi5teC0zIHtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5tci0yLFxuLm14LTIge1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubWwtMyxcbi5teC0zIHtcbiAgbWFyZ2luLWxlZnQ6IDFyZW0gIWltcG9ydGFudDtcbn1cblxuLm1yLTUsXG4ubXgtNSB7XG4gIG1hcmdpbi1yaWdodDogM3JlbSAhaW1wb3J0YW50O1xufVxuXG4ubWwtNSxcbi5teC01IHtcbiAgbWFyZ2luLWxlZnQ6IDNyZW0gIWltcG9ydGFudDtcbn1cblxuLm1iLTQsXG4ubXktNCB7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbSAhaW1wb3J0YW50O1xufVxuXG4ubWItMixcbi5teS0yIHtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5wdC01LFxuLnB5LTUge1xuICBwYWRkaW5nLXRvcDogM3JlbSAhaW1wb3J0YW50O1xufVxuXG4uYm9sZCB7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYWxpZ24tY2VudGVyIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGF0YS1jYXJkIHtcblx0bWluLWhlaWdodDogMTUwcHg7XG59XG5cbi5jYXJkLWdvb2Qge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiMxNDczY2M7XG5cdGNvbG9yOndoaXRlO1xufVxuXG4uY2FyZC1iZXR0ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiMxMjVkOWI7XG5cdGNvbG9yOndoaXRlO1xufVxuXG4uY2FyZC1iZXN0IHtcblx0YmFja2dyb3VuZC1jb2xvcjojMDkyMzU3O1xuXHRjb2xvcjp3aGl0ZTtcbn1cblxuLmNhcmQtd2hpdGUge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuXHRjb2xvcjpibGFjaztcbn1cblxuLmJ0bi10eXBlLTEge1xuICBiYWNrZ3JvdW5kOiAjM0I4OEFGO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJ0bi10eXBlLTIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI0ODgwO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnNtYWxsLWZpdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"] });


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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Learn more about BuildingSync.");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Learn more about UBID.");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Learn more about BEDES.");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Learn more about OEP.");
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
    } }, directives: [_tools_overview_component__WEBPACK_IMPORTED_MODULE_1__["ToolsOverviewComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited {\n  color: #024880;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdGhlbWUuc2NzcyIsIi4uLy4uLy4uLy4uL2RldmVsb3BlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JBLHVCQUFBO0FBQ0EsWUFBQTtBQ25CQTtFQUNFLGNBQUE7QUFDRiIsImZpbGUiOiJkZXZlbG9wZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHJvYm90b0NvbmRlbnNlZDogXCJSb2JvdG8gQ29uZGVuc2VkXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuXG4kbWF4V2lkdGg6IDEyMDBweDtcblxuJHBhZDogMjZweDtcblxuJGJsdWVHcmF5OiAjNmU4NTkxO1xuJGdyYXk6ICNlZWU7XG4kb3JhbmdlOiAjZjVhZjEzO1xuXG4kY29sb3JzOlxuICAjMDE3NGExXG4gICMwMjQ4ODBcbiAgIzM1NUY0NlxuICAjMDk0ZjU4XG4gICRvcmFuZ2U7XG5cbiRob3Zlck9wYWNpdHk6IDAuODtcblxuXG4vKiBvbGQgYW5hbHlzaXMgY29sb3IgKi9cbi8qICM0Nzg2NjIgKi8iLCJAaW1wb3J0IFwidGhlbWVcIjtcblxuYSwgYTp2aXNpdGVkIHtcbiAgY29sb3I6IG50aCgkY29sb3JzLCAyKTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "9uLu":
/*!*****************************************************************!*\
  !*** ./src/app/tools-overview/help-desk/help-desk.component.ts ***!
  \*****************************************************************/
/*! exports provided: HelpDeskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpDeskComponent", function() { return HelpDeskComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-recaptcha */ "jCJ1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");













function HelpDeskComponent_div_1_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " First Name is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HelpDeskComponent_div_1_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Last Name is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HelpDeskComponent_div_1_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Please enter a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HelpDeskComponent_div_1_mat_error_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Email is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HelpDeskComponent_div_1_mat_error_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Tool is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HelpDeskComponent_div_1_mat_option_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tool_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", tool_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", tool_r11, " ");
} }
function HelpDeskComponent_div_1_mat_error_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Question is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HelpDeskComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Help Desk");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Submit technical questions about building energy codes, REScheck or COMcheck projects, or BECP website content. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Your Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, HelpDeskComponent_div_1_mat_error_15_Template, 4, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, HelpDeskComponent_div_1_mat_error_20_Template, 4, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, HelpDeskComponent_div_1_mat_error_25_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, HelpDeskComponent_div_1_mat_error_26_Template, 4, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Your Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Select the relevant tool");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, HelpDeskComponent_div_1_mat_error_33_Template, 4, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "mat-select", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, HelpDeskComponent_div_1_mat_option_35_Template, 2, 2, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "textarea", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, HelpDeskComponent_div_1_mat_error_41_Template, 4, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "re-captcha", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HelpDeskComponent_div_1_Template_button_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.helpForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.helpForm.get("firstName").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.helpForm.get("lastName").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.helpForm.get("email").hasError("email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.helpForm.get("email").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.helpForm.get("tool").touched && ctx_r0.helpForm.get("tool").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.tools);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.helpForm.get("question").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.helpForm.invalid);
} }
function HelpDeskComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HelpDeskComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Your Question has been submitted.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HelpDeskComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "There has been an error. Please try again.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class HelpDeskComponent {
    constructor(http) {
        this.http = http;
        this.status = 'UNSUBMITTED';
        this.helpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]),
            question: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            tool: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required),
            recaptcha: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required)
        });
        this.tools = [
            'Asset Score',
            'Audit Template',
            'BEDES',
            'BETTER',
            'Building Performance Database (BPD)',
            'BuildingSync',
            'ComStock',
            'General',
            'Multiple Tools',
            'ResStock',
            'SEED',
            'UBID',
        ];
    }
    submit() {
        this.helpForm.markAllAsTouched();
        if (!this.helpForm.valid) {
            return;
        }
        this.status = 'PROCESSING';
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].help_desk_uri, {
            first_name: this.helpForm.get('firstName').value,
            last_name: this.helpForm.get('lastName').value,
            email: this.helpForm.get('email').value,
            questions: this.helpForm.get('question').value,
            tool: this.helpForm.get('tool').value
        }).toPromise()
            .then(() => this.status = 'SENT')
            .catch(() => this.status = 'ERRORED');
    }
}
HelpDeskComponent.ɵfac = function HelpDeskComponent_Factory(t) { return new (t || HelpDeskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
HelpDeskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HelpDeskComponent, selectors: [["ng-component"]], decls: 5, vars: 4, consts: [[1, "bpt"], ["class", "m-3", 4, "ngIf"], [1, "m-3"], ["id", "header"], [3, "formGroup"], ["id", "Your Info"], [1, "bold"], [1, "name"], ["type", "text", "id", "first_name", "matInput", "", "formControlName", "firstName"], [4, "ngIf"], ["type", "text", "id", "last_name", "matInput", "", "formControlName", "lastName"], ["type", "email", "id", "email", "matInput", "", "formControlName", "email"], ["id", "Your Question"], ["formControlName", "tool", "id", "tool", 1, "tools"], [3, "value", 4, "ngFor", "ngForOf"], [1, "question"], ["type", "text", "id", "questions", "matInput", "", "formControlName", "question"], ["formControlName", "recaptcha", "siteKey", "6Lcub80fAAAAAGtDrxldrdrlanCQ0m5kOMmsAt5f"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "submit", 3, "disabled", "click"], ["id", "form-response"], [3, "value"]], template: function HelpDeskComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HelpDeskComponent_div_1_Template, 46, 9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, HelpDeskComponent_div_2_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, HelpDeskComponent_div_3_Template, 3, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, HelpDeskComponent_div_4_Template, 3, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.status === "UNSUBMITTED");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.status === "PROCESSING");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.status === "SENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.status === "ERRORED");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_8__["RecaptchaComponent"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_8__["RecaptchaValueAccessorDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatSpinner"]], styles: ["[_nghost-%COMP%]  [hidden] {\n  display: none;\n}\n.bpt[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.m-3[_ngcontent-%COMP%] {\n  margin: 3rem;\n}\n.question[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.name[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.submit[_ngcontent-%COMP%] {\n  margin: 2rem 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdGhlbWUuc2NzcyIsIi4uLy4uLy4uLy4uL2hlbHAtZGVzay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQkEsdUJBQUE7QUFDQSxZQUFBO0FDakJFO0VBQ0UsYUFBQTtBQURKO0FBS0E7RUFDRSxpQkRSUztFQ1NULGNBQUE7QUFGRjtBQUtBO0VBQ0UsWUFBQTtBQUZGO0FBS0E7RUFDRSxXQUFBO0FBRkY7QUFLQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FBRkY7QUFLQTtFQUNFLGNBQUE7QUFGRiIsImZpbGUiOiJoZWxwLWRlc2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcm9ib3RvQ29uZGVuc2VkOiBcIlJvYm90byBDb25kZW5zZWRcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG5cbiRtYXhXaWR0aDogMTIwMHB4O1xuXG4kcGFkOiAyNnB4O1xuXG4kYmx1ZUdyYXk6ICM2ZTg1OTE7XG4kZ3JheTogI2VlZTtcbiRvcmFuZ2U6ICNmNWFmMTM7XG5cbiRjb2xvcnM6XG4gICMwMTc0YTFcbiAgIzAyNDg4MFxuICAjMzU1RjQ2XG4gICMwOTRmNThcbiAgJG9yYW5nZTtcblxuJGhvdmVyT3BhY2l0eTogMC44O1xuXG5cbi8qIG9sZCBhbmFseXNpcyBjb2xvciAqL1xuLyogIzQ3ODY2MiAqLyIsIkBpbXBvcnQgXCJ0aGVtZVwiO1xuXG46aG9zdCB7XG5cbiAgJjo6bmctZGVlcCBbaGlkZGVuXSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4uYnB0IHtcbiAgbWF4LXdpZHRoOiAkbWF4V2lkdGg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ubS0zIHtcbiAgbWFyZ2luOiAzcmVtO1xufVxuXG4ucXVlc3Rpb24ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm5hbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG59XG5cbi5zdWJtaXQge1xuICBtYXJnaW46IDJyZW0gMDtcbn1cbiJdfQ== */"] });


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
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 53, vars: 0, consts: [[1, "bpt"], [1, "home-intro-text2", "my-2"], ["fxLayout", "row", "fxLayoutAlign", "space-around", "fxFlex", "90%", "fxFlexOffset", "5%", 1, "top-side"], ["href", "https://www.epa.gov/statelocalenergy/benchmarking-and-building-performance-standards-policy-toolkit", "target", "_blank"], [1, "ml-1", "align-center"], [1, "fas", "fa-external-link-alt"], ["fxLayout", "row", 1, "interactive-map-div"], ["fxLayoutAlign", "space-around", "fxFlex", "35%", "fxFlex.xs", "30%"], ["fxLayoutAlign", "space-around my-auto", "fxFlex", "65%"], ["fxLayout", "row", "fxLayout.xs", "column", 1, "bottom-boxes"], ["fxFlex", "25%"], ["routerLink", "data-standardization", 1, "standardize"], ["routerLink", "data-standardization"], [1, "box-arrow"], ["src", "assets/images/box-arrow.svg", "alt", ""], ["routerLink", "help-desk", 1, "help"], ["routerLink", "help-desk"], ["routerLink", "analysis-evaluation", 1, "explore-tools"], ["routerLink", "/analysis-evaluation"], ["routerLink", "developers", 1, "dev"], ["routerLink", "developers"], [1, "mb-5", "mt-5"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "The U.S. Department of Energy developed a comprehensive suite of tools for accessing, managing, analyzing and sharing building energy data. This website describes how they can be used to support ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "building performance standards (BPS) policies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ", one of many possible use cases.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Find Your Tool or Workflow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Mouse over and click on the tools below to get more information. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "When you\u2019re ready, follow the 'Learn More' button to see just how easy data can be.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-graphic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Get started with");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "data standardization");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Help Desk");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Explore the analysis tools");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Find information for developers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexOffsetDirective"], _graphic_graphic_component__WEBPACK_IMPORTED_MODULE_3__["GraphicComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: [".bpt[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.developer-banner[_ngcontent-%COMP%] {\n  background-color: #f5af13;\n  \n  font-family: \"Karla\", sans-serif;\n  font-size: 16px;\n  font-weight: bold;\n  height: 22px;\n  position: relative;\n  text-transform: uppercase;\n  \n}\n.developer-banner[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 100%;\n}\na[_ngcontent-%COMP%] {\n  color: #024880;\n}\n.developer[_ngcontent-%COMP%] {\n  padding: 20px 0;\n}\n.developer[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 12px 26px 0;\n}\n.developer[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  font-size: 18px;\n  line-height: 22px;\n}\n.dev-link[_ngcontent-%COMP%] {\n  color: black;\n}\n.home-intro-text[_ngcontent-%COMP%] {\n  margin: 1rem 0 0.5rem 0;\n  background: url('text-background.jpg');\n  background-size: cover;\n}\n.home-intro-text2[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0.25rem 0;\n}\n.interactive-map[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n  \n}\n.interactive-map-div[_ngcontent-%COMP%] {\n  \n  background-color: #4D4D4D;\n  padding: 8px 10px 0px 10px;\n  color: white;\n  margin-bottom: 10px;\n  display: flex;\n  width: 100%;\n  margin-left: 0%;\n}\n.interactive-map-div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 400;\n  \n  margin-top: 5px;\n  color: white;\n}\n.interactive-map-div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  \n  font-weight: normal;\n  padding-bottom: 0px;\n  margin: 0px;\n}\n.bottom-boxes[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-left: 0%;\n  padding-right: 0%;\n  margin: 10px 0px 0px;\n  min-height: 200px;\n}\n.standardize[_ngcontent-%COMP%] {\n  background: url('get-started-box.jpg');\n  background-color: black;\n  padding: 1rem 1rem;\n  background-size: 100% 100%;\n  cursor: pointer;\n  height: 200px;\n}\n.standardize[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.8rem;\n  padding-top: 10px;\n  padding-left: 4rem;\n  font-family: \"Roboto\", sans-serif;\n  line-height: 3rem;\n}\n.standardize[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n}\n.help[_ngcontent-%COMP%] {\n  background: #478662;\n  padding: 1rem 1rem;\n  margin-left: 10px;\n  background-size: 100% 100%;\n  cursor: pointer;\n  height: 200px;\n}\n.help[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.8rem;\n  padding-top: 10px;\n  padding-left: 4rem;\n  font-family: \"Roboto\", sans-serif;\n  line-height: 3rem;\n}\n.help[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n}\n.explore-tools[_ngcontent-%COMP%] {\n  background: url('analysis-box.jpg');\n  background-color: black;\n  padding: 1rem 1rem;\n  margin-left: 10px;\n  background-size: auto;\n  cursor: pointer;\n  height: 200px;\n}\n.explore-tools[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.8rem;\n  padding-top: 10px;\n  padding-left: 4rem;\n  font-family: \"Roboto\", sans-serif;\n  line-height: 3rem;\n}\n.explore-tools[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n}\n.dev[_ngcontent-%COMP%] {\n  background: #054980;\n  padding: 1rem 1rem;\n  margin-left: 10px;\n  background-size: auto;\n  cursor: pointer;\n  height: 200px;\n}\n.dev[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.8rem;\n  padding-top: 10px;\n  padding-left: 2rem;\n  font-family: \"Roboto\", sans-serif;\n  line-height: 3rem;\n}\n.dev[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n}\n.box-arrow[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  width: 5rem;\n}\n.explore[_ngcontent-%COMP%] {\n  background-color: #EEEEEE;\n  padding: 10px 0px 5px 0px;\n  text-align: center;\n}\n.left-side[_ngcontent-%COMP%] {\n  border-right: 2px solid #ccc;\n  padding-right: 20px;\n  margin-bottom: 10px;\n}\n.top-side[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n@media screen and (max-width: 599px) {\n  .explore-tools[_ngcontent-%COMP%] {\n    margin: 10px 0;\n  }\n\n  .dev[_ngcontent-%COMP%] {\n    margin-left: 0px;\n  }\n  .dev[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n\n  .explore-tools[_ngcontent-%COMP%] {\n    background-size: cover;\n  }\n  .explore-tools[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n}\n@media screen and (min-width: 600px) and (max-width: 800px) {\n  .standardize[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    line-height: 2.1rem;\n  }\n\n  .dev[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n    line-height: 1.5rem;\n  }\n\n  .explore-tools[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdGhlbWUuc2NzcyIsIi4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JBLHVCQUFBO0FBQ0EsWUFBQTtBQ2pCQTtFQUNFLGlCREhTO0VDSVQsY0FBQTtBQURGO0FBSUE7RUFDRSx5QkRGTztFQ0dQLGlDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQU1BOzs7Ozs7Ozs7R0FBQTtBQUdGO0FBUEU7RUFDRSxXQUFBO0FBU0o7QUFNQTtFQUNFLGNBQUE7QUFIRjtBQU1BO0VBQ0UsZUFBQTtBQUhGO0FBS0U7RUFDRSxvQkFBQTtBQUhKO0FBS0k7RUFFRSxlQUFBO0VBQ0EsaUJBQUE7QUFKTjtBQVVBO0VBQ0UsWUFBQTtBQVBGO0FBVUE7RUFDRSx1QkFBQTtFQUNBLHNDQUFBO0VBQ0Esc0JBQUE7QUFQRjtBQVdBO0VBQ0UsMkJBQUE7QUFSRjtBQVdBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQVJGO0FBV0E7RUFDRSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFSRjtBQVVFO0VBQ0UsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBUko7QUFXRTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFUSjtBQWFBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBVkY7QUFhQTtFQUNFLHNDQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFWRjtBQVlFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsaUJBQUE7QUFWSjtBQVlJO0VBQ0UsWUFBQTtBQVZOO0FBZUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBWkY7QUFjRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGlCQUFBO0FBWko7QUFjSTtFQUNFLFlBQUE7QUFaTjtBQWlCQTtFQUNFLG1DQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQWRGO0FBZ0JFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsaUJBQUE7QUFkSjtBQWdCSTtFQUNFLFlBQUE7QUFkTjtBQW1CQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFoQkY7QUFrQkU7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQkFBQTtBQWhCSjtBQWtCSTtFQUNFLFlBQUE7QUFoQk47QUFxQkE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7QUFsQkY7QUFxQkE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFsQkY7QUFxQkE7RUFDRSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFsQkY7QUFxQkE7RUFDRSxnQkFBQTtBQWxCRjtBQXFCQTtFQUNFO0lBQ0UsY0FBQTtFQWxCRjs7RUFvQkE7SUFDRSxnQkFBQTtFQWpCRjtFQWtCRTtJQUNFLGlCQUFBO0VBaEJKOztFQW1CQTtJQUNFLHNCQUFBO0VBaEJGO0VBaUJFO0lBQ0UsaUJBQUE7RUFmSjtBQUNGO0FBbUJBO0VBRUk7SUFDRSxpQkFBQTtJQUNBLG1CQUFBO0VBbEJKOztFQXNCRTtJQUNFLGlCQUFBO0lBQ0EsbUJBQUE7RUFuQko7O0VBdUJFO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0VBcEJKO0FBQ0YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRyb2JvdG9Db25kZW5zZWQ6IFwiUm9ib3RvIENvbmRlbnNlZFwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcblxuJG1heFdpZHRoOiAxMjAwcHg7XG5cbiRwYWQ6IDI2cHg7XG5cbiRibHVlR3JheTogIzZlODU5MTtcbiRncmF5OiAjZWVlO1xuJG9yYW5nZTogI2Y1YWYxMztcblxuJGNvbG9yczpcbiAgIzAxNzRhMVxuICAjMDI0ODgwXG4gICMzNTVGNDZcbiAgIzA5NGY1OFxuICAkb3JhbmdlO1xuXG4kaG92ZXJPcGFjaXR5OiAwLjg7XG5cblxuLyogb2xkIGFuYWx5c2lzIGNvbG9yICovXG4vKiAjNDc4NjYyICovIiwiQGltcG9ydCBcInRoZW1lXCI7XG5cbiRjb2xQYWQ6IDQwO1xuXG4uYnB0IHtcbiAgbWF4LXdpZHRoOiAkbWF4V2lkdGg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uZGV2ZWxvcGVyLWJhbm5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XG4gIC8qZm9udC1mYW1pbHk6ICRyb2JvdG9Db25kZW5zZWQ7Ki9cbiAgZm9udC1mYW1pbHk6ICdLYXJsYScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGhlaWdodDogMjJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gID4gZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC8qXG4gICY6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGhlaWdodDogNHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IC03cHg7XG4gICAgd2lkdGg6IDE4NHB4O1xuICB9XG4gICovXG59XG5cbmEge1xuICBjb2xvcjogIzAyNDg4MDtcbn1cblxuLmRldmVsb3BlciB7XG4gIHBhZGRpbmc6IDIwcHggMDtcblxuICA+IGRpdiB7XG4gICAgcGFkZGluZzogMTJweCAkcGFkIDA7XG5cbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgIC8vIGJvcmRlci1yaWdodDogMXB4IHNvbGlkO1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgfVxuICB9XG5cbn1cblxuLmRldi1saW5rIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uaG9tZS1pbnRyby10ZXh0IHtcbiAgbWFyZ2luOiAxcmVtIDAgMC41cmVtIDA7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvdGV4dC1iYWNrZ3JvdW5kLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxufVxuXG4uaG9tZS1pbnRyby10ZXh0MiB7XG4gIG1hcmdpbjogMC4yNXJlbSAwIDAuMjVyZW0gMDtcbn1cblxuLmludGVyYWN0aXZlLW1hcCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgLypmb250LXNpemU6IDE4cHg7Ki9cbn1cblxuLmludGVyYWN0aXZlLW1hcC1kaXYge1xuICAvKmJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMHB4OyovXG4gIGJhY2tncm91bmQtY29sb3I6ICM0RDRENEQ7XG4gIHBhZGRpbmc6IDhweCAxMHB4IDBweCAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1ib3R0b206MTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAwJTtcblxuICBoMiB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAvKmZvbnQtZmFtaWx5OiAkcm9ib3RvQ29uZGVuc2VkOyovXG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIHAge1xuICAgIC8qZm9udC1zaXplOiAxcmVtOyovXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG59XG5cbi5ib3R0b20tYm94ZXMge1xuICB3aWR0aDoxMDAlOyBcbiAgcGFkZGluZy1sZWZ0OiAwJTtcbiAgcGFkZGluZy1yaWdodDogMCU7XG4gIG1hcmdpbjogMTBweCAwcHggMHB4O1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbn1cblxuLnN0YW5kYXJkaXplIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9nZXQtc3RhcnRlZC1ib3guanBnXCIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xuICBwYWRkaW5nOiAxcmVtIDFyZW07XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBjdXJzb3I6cG9pbnRlcjtcbiAgaGVpZ2h0OiAyMDBweDtcblxuICBoMyB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogNHJlbTtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XG5cbiAgICBhIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gIH1cbn1cblxuLmhlbHAge1xuICBiYWNrZ3JvdW5kOiByZ2IoNzEsIDEzNCwgOTgpO1xuICBwYWRkaW5nOiAxcmVtIDFyZW07XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgY3Vyc29yOnBvaW50ZXI7XG4gIGhlaWdodDogMjAwcHg7XG5cbiAgaDMge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDRyZW07XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xuXG4gICAgYSB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICB9XG59XG5cbi5leHBsb3JlLXRvb2xzIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9hbmFseXNpcy1ib3guanBnXCIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMXJlbSAxcmVtO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xuICBjdXJzb3I6cG9pbnRlcjtcbiAgaGVpZ2h0OiAyMDBweDtcblxuICBoMyB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogNHJlbTtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XG5cbiAgICBhIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gIH1cbn1cblxuLmRldiB7XG4gIGJhY2tncm91bmQ6ICMwNTQ5ODA7XG4gIHBhZGRpbmc6IDFyZW0gMXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogYXV0bztcbiAgY3Vyc29yOnBvaW50ZXI7XG4gIGhlaWdodDogMjAwcHg7XG5cbiAgaDMge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xuXG4gICAgYSB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICB9XG59XG5cbi5ib3gtYXJyb3cge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgd2lkdGg6IDVyZW07XG59XG5cbi5leHBsb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcbiAgcGFkZGluZzogMTBweCAwcHggNXB4IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubGVmdC1zaWRlIHtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI2NjYztcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnRvcC1zaWRlIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgLmV4cGxvcmUtdG9vbHMge1xuICAgIG1hcmdpbjogMTBweCAwO1xuICB9XG4gIC5kZXYge1xuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgaDMge1xuICAgICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgfVxuICB9XG4gIC5leHBsb3JlLXRvb2xzIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGgzIHtcbiAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjYwMHB4KSBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLnN0YW5kYXJkaXplIHtcbiAgICBoMyB7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyLjFyZW07XG4gICAgfVxuICB9XG4gIC5kZXYge1xuICAgIGgzIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgICB9XG4gIH1cbiAgLmV4cGxvcmUtdG9vbHMge1xuICAgIGgzIHtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gICAgfVxuICB9XG59XG5cbiJdfQ== */"] });


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
    production: false,
    help_desk_uri: 'https://uyq1jkey4k.execute-api.us-west-2.amazonaws.com/stage',
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
GoalsOutcomesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GoalsOutcomesComponent, selectors: [["ng-component"]], decls: 45, vars: 0, consts: [["slot", "left"], ["slot", "right", "fxLayout", "column"], ["fxLayout", "row"], [1, "logo"], ["src", "assets/images/com-resstock-outcomes-icon.svg", "alt", ""], [1, "description"], ["src", "assets/images/comstock_outcome_pathway-01.png"], ["src", "assets/images/better-outcomes-icon.svg", "alt", ""], ["src", "assets/images/better_outcome_pathway-01.png", "alt", ""], ["src", "assets/images/assetscore-outcomes-icon.svg", "alt", ""], ["src", "assets/images/asset-score-outcome_pathway-01.png"], ["src", "assets/images/thirdparty-outcomes-icon.svg", "alt", ""], ["routerLink", "/developers"]], template: function GoalsOutcomesComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_tools_overview_component__WEBPACK_IMPORTED_MODULE_1__["ToolsOverviewComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited {\n  color: #094f58;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdGhlbWUuc2NzcyIsIi4uLy4uLy4uLy4uL2dvYWxzLW91dGNvbWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CQSx1QkFBQTtBQUNBLFlBQUE7QUNuQkE7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoiZ29hbHMtb3V0Y29tZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcm9ib3RvQ29uZGVuc2VkOiBcIlJvYm90byBDb25kZW5zZWRcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG5cbiRtYXhXaWR0aDogMTIwMHB4O1xuXG4kcGFkOiAyNnB4O1xuXG4kYmx1ZUdyYXk6ICM2ZTg1OTE7XG4kZ3JheTogI2VlZTtcbiRvcmFuZ2U6ICNmNWFmMTM7XG5cbiRjb2xvcnM6XG4gICMwMTc0YTFcbiAgIzAyNDg4MFxuICAjMzU1RjQ2XG4gICMwOTRmNThcbiAgJG9yYW5nZTtcblxuJGhvdmVyT3BhY2l0eTogMC44O1xuXG5cbi8qIG9sZCBhbmFseXNpcyBjb2xvciAqL1xuLyogIzQ3ODY2MiAqLyIsIkBpbXBvcnQgXCJ0aGVtZVwiO1xuXG5hLCBhOnZpc2l0ZWQge1xuICBjb2xvcjogbnRoKCRjb2xvcnMsIDQpO1xufVxuIl19 */"] });


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
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");
















class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [
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
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        // MatCheckboxModule,
        // MatChipsModule,
        // MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
        // MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
        // MatListModule,
        // MatMenuModule,
        // MatNativeDateModule,
        // MatPaginatorModule,
        // MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
        // MatSidenavModule,
        // MatSliderModule,
        // MatSlideToggleModule,
        // MatSnackBarModule,
        // MatSortModule,
        // MatStepperModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
        // MatTabsModule,
        // MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"]
        // MatTreeModule,
        // OverlayModule,
        // PortalModule,
        // ScrollingModule
    ] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [
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
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        // MatCheckboxModule,
        // MatChipsModule,
        // MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
        // MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
        // MatListModule,
        // MatMenuModule,
        // MatNativeDateModule,
        // MatPaginatorModule,
        // MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
        // MatSidenavModule,
        // MatSliderModule,
        // MatSlideToggleModule,
        // MatSnackBarModule,
        // MatSortModule,
        // MatStepperModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
        // MatTabsModule,
        // MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"]
        // MatTreeModule,
        // OverlayModule,
        // PortalModule,
        // ScrollingModule
    ] }); })();


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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", navItem_r1.alt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", navItem_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c1 = function () { return { exact: true }; };
function ToolComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ToolComponent_div_5_i_1_Template, 1, 4, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ToolComponent_div_5_div_2_Template, 2, 2, "div", 7);
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
    } }, inputs: { navItems: "navItems" }, ngContentSelectors: _c3, decls: 8, vars: 5, consts: [["fxLayout.gt-xs", "row", "fxLayout.xs", "column", 1, "bpt"], [1, "nav", 3, "fxFlex.gt-xs", "fxFlex.xs"], [1, "logo"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions", 4, "ngFor", "ngForOf"], [1, "body", 3, "fxFlex.gt-xs", "fxFlex.xs"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions"], [3, "ngClass", 4, "ngIf"], [4, "ngIf"], [3, "ngClass"], [3, "src", "alt"]], template: function ToolComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex.gt-xs", 25)("fxFlex.xs", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex.gt-xs", 75)("fxFlex.xs", 100);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["DefaultClassDirective"]], styles: ["[data-color=\"1\"][_nghost-%COMP%]   nav[_ngcontent-%COMP%]   div.active[_ngcontent-%COMP%] {\n  background-color: #0174a1;\n}\n[data-color=\"2\"][_nghost-%COMP%]   nav[_ngcontent-%COMP%]   div.active[_ngcontent-%COMP%] {\n  background-color: #024880;\n}\n[data-color=\"3\"][_nghost-%COMP%]   nav[_ngcontent-%COMP%]   div.active[_ngcontent-%COMP%] {\n  background-color: #355F46;\n}\n[data-color=\"4\"][_nghost-%COMP%]   nav[_ngcontent-%COMP%]   div.active[_ngcontent-%COMP%] {\n  background-color: #094f58;\n}\n[data-color=\"5\"][_nghost-%COMP%]   nav[_ngcontent-%COMP%]   div.active[_ngcontent-%COMP%] {\n  background-color: #f5af13;\n}\n.bpt[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.nav[_ngcontent-%COMP%], .body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  line-height: 23px;\n  padding: 26px;\n  position: relative;\n  \n}\n.nav[_ngcontent-%COMP%]  > div, .body[_ngcontent-%COMP%]  > div {\n  width: 100%;\n}\n.nav[_ngcontent-%COMP%] , .body[_ngcontent-%COMP%]  {\n  \n}\n.nav[_ngcontent-%COMP%]  .mat-h3, .body[_ngcontent-%COMP%]  .mat-h3 {\n  font-size: 1.25em;\n}\n.nav[_ngcontent-%COMP%]  .mat-h5, .body[_ngcontent-%COMP%]  .mat-h5 {\n  font-size: 1.1em;\n}\n.nav[_ngcontent-%COMP%]  .mat-h6, .body[_ngcontent-%COMP%]  .mat-h6 {\n  font-size: 1em;\n}\n.nav[_ngcontent-%COMP%]  .logoimg-3p, .body[_ngcontent-%COMP%]  .logoimg-3p {\n  width: 80%;\n}\n.nav[_ngcontent-%COMP%]  .logoimg-3p2, .body[_ngcontent-%COMP%]  .logoimg-3p2 {\n  width: 60%;\n}\n.nav[_ngcontent-%COMP%]  .as-img, .body[_ngcontent-%COMP%]  .as-img {\n  width: 100%;\n}\n.nav[_ngcontent-%COMP%]  .mat-expansion-panel-header-title, .body[_ngcontent-%COMP%]  .mat-expansion-panel-header-title {\n  font-weight: bold;\n}\n.nav[_ngcontent-%COMP%]  a, .body[_ngcontent-%COMP%]  a {\n  color: #024880;\n  font-weight: bold;\n}\n.nav[_ngcontent-%COMP%]  a.not-bold, .body[_ngcontent-%COMP%]  a.not-bold {\n  font-weight: normal;\n}\n.nav[_ngcontent-%COMP%]  .color-1, .body[_ngcontent-%COMP%]  .color-1 {\n  color: #0174a1;\n}\n.nav[_ngcontent-%COMP%]  .color-2, .body[_ngcontent-%COMP%]  .color-2 {\n  color: #024880;\n}\n.nav[_ngcontent-%COMP%]  .color-3, .body[_ngcontent-%COMP%]  .color-3 {\n  color: #355F46;\n}\n.nav[_ngcontent-%COMP%]  .color-4, .body[_ngcontent-%COMP%]  .color-4 {\n  color: #094F58;\n}\n.nav[_ngcontent-%COMP%]  .color-5, .body[_ngcontent-%COMP%]  .color-5 {\n  color: #F5AF13;\n}\n.nav[_ngcontent-%COMP%]  .btn-type-1, .body[_ngcontent-%COMP%]  .btn-type-1 {\n  background-color: #0174a1;\n  color: #fff;\n}\n.nav[_ngcontent-%COMP%]  .btn-type-2, .body[_ngcontent-%COMP%]  .btn-type-2 {\n  background-color: #024880;\n  color: #fff;\n}\n.nav[_ngcontent-%COMP%]  .btn-type-3, .body[_ngcontent-%COMP%]  .btn-type-3 {\n  background-color: #355F46;\n  color: #fff;\n}\n.nav[_ngcontent-%COMP%]  .btn-type-5, .body[_ngcontent-%COMP%]  .btn-type-5 {\n  background-color: #f5af13;\n  color: #fff;\n}\n.nav[_ngcontent-%COMP%]  .mat-h2, .nav[_ngcontent-%COMP%]  .mat-h3, .nav[_ngcontent-%COMP%]  .mat-h4, .nav[_ngcontent-%COMP%]  .mat-h5, .nav[_ngcontent-%COMP%]  .mat-h6, .body[_ngcontent-%COMP%]  .mat-h2, .body[_ngcontent-%COMP%]  .mat-h3, .body[_ngcontent-%COMP%]  .mat-h4, .body[_ngcontent-%COMP%]  .mat-h5, .body[_ngcontent-%COMP%]  .mat-h6 {\n  font-weight: bold !important;\n}\n.nav[_ngcontent-%COMP%]  .center, .body[_ngcontent-%COMP%]  .center {\n  text-align: center;\n}\n.nav[_ngcontent-%COMP%]  .bold, .body[_ngcontent-%COMP%]  .bold {\n  font-weight: bold;\n  color: #2E2D2D;\n}\n.nav[_ngcontent-%COMP%]  .smaller-text, .body[_ngcontent-%COMP%]  .smaller-text {\n  font-size: 0.8em;\n}\n.nav[_ngcontent-%COMP%]  .blue-callout, .body[_ngcontent-%COMP%]  .blue-callout {\n  background-color: #024880;\n  color: white;\n  padding: 20px;\n  margin-left: 100px;\n}\n.nav[_ngcontent-%COMP%]  .callout, .body[_ngcontent-%COMP%]  .callout {\n  width: 40%;\n  margin: 20px auto;\n}\n@media screen and (max-width: 599px) {\n  .nav[_ngcontent-%COMP%]  .callout, .body[_ngcontent-%COMP%]  .callout {\n    width: 90%;\n  }\n}\n.nav[_ngcontent-%COMP%]  .bold-link, .body[_ngcontent-%COMP%]  .bold-link {\n  font-weight: bold;\n}\n.nav[_ngcontent-%COMP%]  .card-img, .body[_ngcontent-%COMP%]  .card-img {\n  width: 100%;\n}\n.nav[_ngcontent-%COMP%]  .img-g1, .body[_ngcontent-%COMP%]  .img-g1 {\n  width: 55%;\n  padding-left: 20px;\n}\n.nav[_ngcontent-%COMP%]  .img-g2, .body[_ngcontent-%COMP%]  .img-g2 {\n  width: 50%;\n}\n.nav[_ngcontent-%COMP%]  .img-g3, .body[_ngcontent-%COMP%]  .img-g3 {\n  width: 45%;\n  padding-left: 30px;\n}\n.nav[_ngcontent-%COMP%]  .img-g4, .body[_ngcontent-%COMP%]  .img-g4 {\n  width: 50%;\n  padding-left: 20px;\n}\n.nav[_ngcontent-%COMP%]  table, .body[_ngcontent-%COMP%]  table {\n  border-collapse: collapse;\n}\n.nav[_ngcontent-%COMP%]  th, .body[_ngcontent-%COMP%]  th {\n  text-align: inherit;\n  text-align: -webkit-match-parent;\n}\n.nav[_ngcontent-%COMP%]  table, .body[_ngcontent-%COMP%]  table {\n  width: 100%;\n  margin-bottom: 1rem;\n  color: #212529;\n}\n.nav[_ngcontent-%COMP%]  .table th, .nav[_ngcontent-%COMP%]  .table td, .body[_ngcontent-%COMP%]  .table th, .body[_ngcontent-%COMP%]  .table td {\n  padding: 0.75rem;\n  vertical-align: top;\n  border-top: 1px solid #dee2e6;\n}\n.nav[_ngcontent-%COMP%]  .table thead th, .body[_ngcontent-%COMP%]  .table thead th {\n  vertical-align: bottom;\n  border-bottom: 2px solid #dee2e6;\n}\n.nav[_ngcontent-%COMP%]  .table tbody + tbody, .body[_ngcontent-%COMP%]  .table tbody + tbody {\n  border-top: 2px solid #dee2e6;\n}\n.nav[_ngcontent-%COMP%]  .table-sm th, .nav[_ngcontent-%COMP%]  .table-sm td, .body[_ngcontent-%COMP%]  .table-sm th, .body[_ngcontent-%COMP%]  .table-sm td {\n  padding: 0.3rem;\n}\n.nav[_ngcontent-%COMP%]  .table-bordered, .body[_ngcontent-%COMP%]  .table-bordered {\n  border: 1px solid #dee2e6;\n}\n.nav[_ngcontent-%COMP%]  .table-bordered th, .nav[_ngcontent-%COMP%]  .table-bordered td, .body[_ngcontent-%COMP%]  .table-bordered th, .body[_ngcontent-%COMP%]  .table-bordered td {\n  border: 1px solid #dee2e6;\n}\n.nav[_ngcontent-%COMP%]  .table-bordered thead th, .nav[_ngcontent-%COMP%]  .table-bordered thead td, .body[_ngcontent-%COMP%]  .table-bordered thead th, .body[_ngcontent-%COMP%]  .table-bordered thead td {\n  border-bottom-width: 2px;\n}\n.nav[_ngcontent-%COMP%]  .table-borderless th, .nav[_ngcontent-%COMP%]  .table-borderless td, .nav[_ngcontent-%COMP%]  .table-borderless thead th, .nav[_ngcontent-%COMP%]  .table-borderless tbody + tbody, .body[_ngcontent-%COMP%]  .table-borderless th, .body[_ngcontent-%COMP%]  .table-borderless td, .body[_ngcontent-%COMP%]  .table-borderless thead th, .body[_ngcontent-%COMP%]  .table-borderless tbody + tbody {\n  border: 0;\n}\n.nav[_ngcontent-%COMP%]  .table-striped tbody tr:nth-of-type(odd), .body[_ngcontent-%COMP%]  .table-striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.nav[_ngcontent-%COMP%]  .table-hover tbody tr:hover, .body[_ngcontent-%COMP%]  .table-hover tbody tr:hover {\n  color: #212529;\n  background-color: rgba(0, 0, 0, 0.075);\n}\n.nav[_ngcontent-%COMP%]  .table-primary, .nav[_ngcontent-%COMP%]  .table-primary > th, .nav[_ngcontent-%COMP%]  .table-primary > td, .body[_ngcontent-%COMP%]  .table-primary, .body[_ngcontent-%COMP%]  .table-primary > th, .body[_ngcontent-%COMP%]  .table-primary > td {\n  background-color: #b8daff;\n}\n.nav[_ngcontent-%COMP%]  .table-primary th, .nav[_ngcontent-%COMP%]  .table-primary td, .nav[_ngcontent-%COMP%]  .table-primary thead th, .nav[_ngcontent-%COMP%]  .table-primary tbody + tbody, .body[_ngcontent-%COMP%]  .table-primary th, .body[_ngcontent-%COMP%]  .table-primary td, .body[_ngcontent-%COMP%]  .table-primary thead th, .body[_ngcontent-%COMP%]  .table-primary tbody + tbody {\n  border-color: #7abaff;\n}\n.nav[_ngcontent-%COMP%]  .table-hover .table-primary:hover, .body[_ngcontent-%COMP%]  .table-hover .table-primary:hover {\n  background-color: #9fcdff;\n}\n.nav[_ngcontent-%COMP%]  .table-hover .table-primary:hover > td, .nav[_ngcontent-%COMP%]  .table-hover .table-primary:hover > th, .body[_ngcontent-%COMP%]  .table-hover .table-primary:hover > td, .body[_ngcontent-%COMP%]  .table-hover .table-primary:hover > th {\n  background-color: #9fcdff;\n}\n.nav[_ngcontent-%COMP%]  .table-light, .nav[_ngcontent-%COMP%]  .table-light > th, .nav[_ngcontent-%COMP%]  .table-light > td, .body[_ngcontent-%COMP%]  .table-light, .body[_ngcontent-%COMP%]  .table-light > th, .body[_ngcontent-%COMP%]  .table-light > td {\n  background-color: #fdfdfe;\n}\n.nav[_ngcontent-%COMP%]  .table-light th, .nav[_ngcontent-%COMP%]  .table-light td, .nav[_ngcontent-%COMP%]  .table-light thead th, .nav[_ngcontent-%COMP%]  .table-light tbody + tbody, .body[_ngcontent-%COMP%]  .table-light th, .body[_ngcontent-%COMP%]  .table-light td, .body[_ngcontent-%COMP%]  .table-light thead th, .body[_ngcontent-%COMP%]  .table-light tbody + tbody {\n  border-color: #fbfcfc;\n}\n.nav[_ngcontent-%COMP%]  .table-hover .table-light:hover, .body[_ngcontent-%COMP%]  .table-hover .table-light:hover {\n  background-color: #ececf6;\n}\n.nav[_ngcontent-%COMP%]  .table-hover .table-light:hover > td, .nav[_ngcontent-%COMP%]  .table-hover .table-light:hover > th, .body[_ngcontent-%COMP%]  .table-hover .table-light:hover > td, .body[_ngcontent-%COMP%]  .table-hover .table-light:hover > th {\n  background-color: #ececf6;\n}\n.nav[_ngcontent-%COMP%]  .table-active, .nav[_ngcontent-%COMP%]  .table-active > th, .nav[_ngcontent-%COMP%]  .table-active > td, .body[_ngcontent-%COMP%]  .table-active, .body[_ngcontent-%COMP%]  .table-active > th, .body[_ngcontent-%COMP%]  .table-active > td {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n.nav[_ngcontent-%COMP%]  .table-hover .table-active:hover, .body[_ngcontent-%COMP%]  .table-hover .table-active:hover {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n.nav[_ngcontent-%COMP%]  .table-hover .table-active:hover > td, .nav[_ngcontent-%COMP%]  .table-hover .table-active:hover > th, .body[_ngcontent-%COMP%]  .table-hover .table-active:hover > td, .body[_ngcontent-%COMP%]  .table-hover .table-active:hover > th {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n.nav[_ngcontent-%COMP%]  .table .thead-dark th, .body[_ngcontent-%COMP%]  .table .thead-dark th {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #454d55;\n}\n.nav[_ngcontent-%COMP%]  .table .thead-light th, .body[_ngcontent-%COMP%]  .table .thead-light th {\n  color: #495057;\n  background-color: #e9ecef;\n  border-color: #dee2e6;\n}\n@media (max-width: 575.98px) {\n  .nav[_ngcontent-%COMP%]  .table-responsive-sm, .body[_ngcontent-%COMP%]  .table-responsive-sm {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .nav[_ngcontent-%COMP%]  .table-responsive-sm > .table-bordered, .body[_ngcontent-%COMP%]  .table-responsive-sm > .table-bordered {\n    border: 0;\n  }\n}\n@media (max-width: 767.98px) {\n  .nav[_ngcontent-%COMP%]  .table-responsive-md, .body[_ngcontent-%COMP%]  .table-responsive-md {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .nav[_ngcontent-%COMP%]  .table-responsive-md > .table-bordered, .body[_ngcontent-%COMP%]  .table-responsive-md > .table-bordered {\n    border: 0;\n  }\n}\n@media (max-width: 991.98px) {\n  .nav[_ngcontent-%COMP%]  .table-responsive-lg, .body[_ngcontent-%COMP%]  .table-responsive-lg {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .nav[_ngcontent-%COMP%]  .table-responsive-lg > .table-bordered, .body[_ngcontent-%COMP%]  .table-responsive-lg > .table-bordered {\n    border: 0;\n  }\n}\n@media (max-width: 1199.98px) {\n  .nav[_ngcontent-%COMP%]  .table-responsive-xl, .body[_ngcontent-%COMP%]  .table-responsive-xl {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .nav[_ngcontent-%COMP%]  .table-responsive-xl > .table-bordered, .body[_ngcontent-%COMP%]  .table-responsive-xl > .table-bordered {\n    border: 0;\n  }\n}\n.nav[_ngcontent-%COMP%]  .table-responsive, .body[_ngcontent-%COMP%]  .table-responsive {\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.nav[_ngcontent-%COMP%]  .table-responsive > .table-bordered, .body[_ngcontent-%COMP%]  .table-responsive > .table-bordered {\n  border: 0;\n}\n.nav[_ngcontent-%COMP%]  a.bold-link:hover, .body[_ngcontent-%COMP%]  a.bold-link:hover {\n  text-decoration: none;\n  color: inherit;\n}\n.nav[_ngcontent-%COMP%]  .collab-image, .body[_ngcontent-%COMP%]  .collab-image {\n  width: 100%;\n  height: auto;\n}\n.nav[_ngcontent-%COMP%]  .mt-0, .nav[_ngcontent-%COMP%]  .my-0, .body[_ngcontent-%COMP%]  .mt-0, .body[_ngcontent-%COMP%]  .my-0 {\n  margin-top: 0 !important;\n}\n.nav[_ngcontent-%COMP%]  .mr-0, .nav[_ngcontent-%COMP%]  .mx-0, .body[_ngcontent-%COMP%]  .mr-0, .body[_ngcontent-%COMP%]  .mx-0 {\n  margin-right: 0 !important;\n}\n.nav[_ngcontent-%COMP%]  .mb-0, .nav[_ngcontent-%COMP%]  .my-0, .body[_ngcontent-%COMP%]  .mb-0, .body[_ngcontent-%COMP%]  .my-0 {\n  margin-bottom: 0 !important;\n}\n.nav[_ngcontent-%COMP%]  .ml-0, .nav[_ngcontent-%COMP%]  .mx-0, .body[_ngcontent-%COMP%]  .ml-0, .body[_ngcontent-%COMP%]  .mx-0 {\n  margin-left: 0 !important;\n}\n.nav[_ngcontent-%COMP%]  .m-1, .body[_ngcontent-%COMP%]  .m-1 {\n  margin: 0.25rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mt-1, .nav[_ngcontent-%COMP%]  .my-1, .body[_ngcontent-%COMP%]  .mt-1, .body[_ngcontent-%COMP%]  .my-1 {\n  margin-top: 0.25rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mr-1, .nav[_ngcontent-%COMP%]  .mx-1, .body[_ngcontent-%COMP%]  .mr-1, .body[_ngcontent-%COMP%]  .mx-1 {\n  margin-right: 0.25rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mb-1, .nav[_ngcontent-%COMP%]  .my-1, .body[_ngcontent-%COMP%]  .mb-1, .body[_ngcontent-%COMP%]  .my-1 {\n  margin-bottom: 0.25rem !important;\n}\n.nav[_ngcontent-%COMP%]  .ml-1, .nav[_ngcontent-%COMP%]  .mx-1, .body[_ngcontent-%COMP%]  .ml-1, .body[_ngcontent-%COMP%]  .mx-1 {\n  margin-left: 0.25rem !important;\n}\n.nav[_ngcontent-%COMP%]  .m-2, .body[_ngcontent-%COMP%]  .m-2 {\n  margin: 0.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mt-2, .nav[_ngcontent-%COMP%]  .my-2, .body[_ngcontent-%COMP%]  .mt-2, .body[_ngcontent-%COMP%]  .my-2 {\n  margin-top: 0.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mr-2, .nav[_ngcontent-%COMP%]  .mx-2, .body[_ngcontent-%COMP%]  .mr-2, .body[_ngcontent-%COMP%]  .mx-2 {\n  margin-right: 0.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mb-2, .nav[_ngcontent-%COMP%]  .my-2, .body[_ngcontent-%COMP%]  .mb-2, .body[_ngcontent-%COMP%]  .my-2 {\n  margin-bottom: 0.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .ml-2, .nav[_ngcontent-%COMP%]  .mx-2, .body[_ngcontent-%COMP%]  .ml-2, .body[_ngcontent-%COMP%]  .mx-2 {\n  margin-left: 0.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .m-3, .body[_ngcontent-%COMP%]  .m-3 {\n  margin: 1rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mt-3, .nav[_ngcontent-%COMP%]  .my-3, .body[_ngcontent-%COMP%]  .mt-3, .body[_ngcontent-%COMP%]  .my-3 {\n  margin-top: 1rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mr-3, .nav[_ngcontent-%COMP%]  .mx-3, .body[_ngcontent-%COMP%]  .mr-3, .body[_ngcontent-%COMP%]  .mx-3 {\n  margin-right: 1rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mb-3, .nav[_ngcontent-%COMP%]  .my-3, .body[_ngcontent-%COMP%]  .mb-3, .body[_ngcontent-%COMP%]  .my-3 {\n  margin-bottom: 1rem !important;\n}\n.nav[_ngcontent-%COMP%]  .ml-3, .nav[_ngcontent-%COMP%]  .mx-3, .body[_ngcontent-%COMP%]  .ml-3, .body[_ngcontent-%COMP%]  .mx-3 {\n  margin-left: 1rem !important;\n}\n.nav[_ngcontent-%COMP%]  .m-4, .body[_ngcontent-%COMP%]  .m-4 {\n  margin: 1.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mt-4, .nav[_ngcontent-%COMP%]  .my-4, .body[_ngcontent-%COMP%]  .mt-4, .body[_ngcontent-%COMP%]  .my-4 {\n  margin-top: 1.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mr-4, .nav[_ngcontent-%COMP%]  .mx-4, .body[_ngcontent-%COMP%]  .mr-4, .body[_ngcontent-%COMP%]  .mx-4 {\n  margin-right: 1.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mb-4, .nav[_ngcontent-%COMP%]  .my-4, .body[_ngcontent-%COMP%]  .mb-4, .body[_ngcontent-%COMP%]  .my-4 {\n  margin-bottom: 1.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .ml-4, .nav[_ngcontent-%COMP%]  .mx-4, .body[_ngcontent-%COMP%]  .ml-4, .body[_ngcontent-%COMP%]  .mx-4 {\n  margin-left: 1.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .m-5, .body[_ngcontent-%COMP%]  .m-5 {\n  margin: 3rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mt-5, .nav[_ngcontent-%COMP%]  .my-5, .body[_ngcontent-%COMP%]  .mt-5, .body[_ngcontent-%COMP%]  .my-5 {\n  margin-top: 3rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mr-5, .nav[_ngcontent-%COMP%]  .mx-5, .body[_ngcontent-%COMP%]  .mr-5, .body[_ngcontent-%COMP%]  .mx-5 {\n  margin-right: 3rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mb-5, .nav[_ngcontent-%COMP%]  .my-5, .body[_ngcontent-%COMP%]  .mb-5, .body[_ngcontent-%COMP%]  .my-5 {\n  margin-bottom: 3rem !important;\n}\n.nav[_ngcontent-%COMP%]  .ml-5, .nav[_ngcontent-%COMP%]  .mx-5, .body[_ngcontent-%COMP%]  .ml-5, .body[_ngcontent-%COMP%]  .mx-5 {\n  margin-left: 3rem !important;\n}\n.nav[_ngcontent-%COMP%]  .p-0, .body[_ngcontent-%COMP%]  .p-0 {\n  padding: 0 !important;\n}\n.nav[_ngcontent-%COMP%]  .pt-0, .nav[_ngcontent-%COMP%]  .py-0, .body[_ngcontent-%COMP%]  .pt-0, .body[_ngcontent-%COMP%]  .py-0 {\n  padding-top: 0 !important;\n}\n.nav[_ngcontent-%COMP%]  .pr-0, .nav[_ngcontent-%COMP%]  .px-0, .body[_ngcontent-%COMP%]  .pr-0, .body[_ngcontent-%COMP%]  .px-0 {\n  padding-right: 0 !important;\n}\n.nav[_ngcontent-%COMP%]  .pb-0, .nav[_ngcontent-%COMP%]  .py-0, .body[_ngcontent-%COMP%]  .pb-0, .body[_ngcontent-%COMP%]  .py-0 {\n  padding-bottom: 0 !important;\n}\n.nav[_ngcontent-%COMP%]  .pl-0, .nav[_ngcontent-%COMP%]  .px-0, .body[_ngcontent-%COMP%]  .pl-0, .body[_ngcontent-%COMP%]  .px-0 {\n  padding-left: 0 !important;\n}\n.nav[_ngcontent-%COMP%]  .p-1, .body[_ngcontent-%COMP%]  .p-1 {\n  padding: 0.25rem !important;\n}\n.nav[_ngcontent-%COMP%]  .pt-1, .nav[_ngcontent-%COMP%]  .py-1, .body[_ngcontent-%COMP%]  .pt-1, .body[_ngcontent-%COMP%]  .py-1 {\n  padding-top: 0.25rem !important;\n}\n.nav[_ngcontent-%COMP%]  .pr-1, .nav[_ngcontent-%COMP%]  .px-1, .body[_ngcontent-%COMP%]  .pr-1, .body[_ngcontent-%COMP%]  .px-1 {\n  padding-right: 0.25rem !important;\n}\n.nav[_ngcontent-%COMP%]  .pb-1, .nav[_ngcontent-%COMP%]  .py-1, .body[_ngcontent-%COMP%]  .pb-1, .body[_ngcontent-%COMP%]  .py-1 {\n  padding-bottom: 0.25rem !important;\n}\n.nav[_ngcontent-%COMP%]  .pl-1, .nav[_ngcontent-%COMP%]  .px-1, .body[_ngcontent-%COMP%]  .pl-1, .body[_ngcontent-%COMP%]  .px-1 {\n  padding-left: 0.25rem !important;\n}\n.nav[_ngcontent-%COMP%]  .p-2, .body[_ngcontent-%COMP%]  .p-2 {\n  padding: 0.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .pt-2, .nav[_ngcontent-%COMP%]  .py-2, .body[_ngcontent-%COMP%]  .pt-2, .body[_ngcontent-%COMP%]  .py-2 {\n  padding-top: 0.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .pr-2, .nav[_ngcontent-%COMP%]  .px-2, .body[_ngcontent-%COMP%]  .pr-2, .body[_ngcontent-%COMP%]  .px-2 {\n  padding-right: 0.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .pb-2, .nav[_ngcontent-%COMP%]  .py-2, .body[_ngcontent-%COMP%]  .pb-2, .body[_ngcontent-%COMP%]  .py-2 {\n  padding-bottom: 0.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .pl-2, .nav[_ngcontent-%COMP%]  .px-2, .body[_ngcontent-%COMP%]  .pl-2, .body[_ngcontent-%COMP%]  .px-2 {\n  padding-left: 0.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .p-3, .body[_ngcontent-%COMP%]  .p-3 {\n  padding: 1rem !important;\n}\n.nav[_ngcontent-%COMP%]  .pt-3, .nav[_ngcontent-%COMP%]  .py-3, .body[_ngcontent-%COMP%]  .pt-3, .body[_ngcontent-%COMP%]  .py-3 {\n  padding-top: 1rem !important;\n}\n.nav[_ngcontent-%COMP%]  .pr-3, .nav[_ngcontent-%COMP%]  .px-3, .body[_ngcontent-%COMP%]  .pr-3, .body[_ngcontent-%COMP%]  .px-3 {\n  padding-right: 1rem !important;\n}\n.nav[_ngcontent-%COMP%]  .pb-3, .nav[_ngcontent-%COMP%]  .py-3, .body[_ngcontent-%COMP%]  .pb-3, .body[_ngcontent-%COMP%]  .py-3 {\n  padding-bottom: 1rem !important;\n}\n.nav[_ngcontent-%COMP%]  .pl-3, .nav[_ngcontent-%COMP%]  .px-3, .body[_ngcontent-%COMP%]  .pl-3, .body[_ngcontent-%COMP%]  .px-3 {\n  padding-left: 1rem !important;\n}\n.nav[_ngcontent-%COMP%]  .p-4, .body[_ngcontent-%COMP%]  .p-4 {\n  padding: 1.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .pt-4, .nav[_ngcontent-%COMP%]  .py-4, .body[_ngcontent-%COMP%]  .pt-4, .body[_ngcontent-%COMP%]  .py-4 {\n  padding-top: 1.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .pr-4, .nav[_ngcontent-%COMP%]  .px-4, .body[_ngcontent-%COMP%]  .pr-4, .body[_ngcontent-%COMP%]  .px-4 {\n  padding-right: 1.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .pb-4, .nav[_ngcontent-%COMP%]  .py-4, .body[_ngcontent-%COMP%]  .pb-4, .body[_ngcontent-%COMP%]  .py-4 {\n  padding-bottom: 1.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .pl-4, .nav[_ngcontent-%COMP%]  .px-4, .body[_ngcontent-%COMP%]  .pl-4, .body[_ngcontent-%COMP%]  .px-4 {\n  padding-left: 1.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .p-5, .body[_ngcontent-%COMP%]  .p-5 {\n  padding: 3rem !important;\n}\n.nav[_ngcontent-%COMP%]  .pt-5, .nav[_ngcontent-%COMP%]  .py-5, .body[_ngcontent-%COMP%]  .pt-5, .body[_ngcontent-%COMP%]  .py-5 {\n  padding-top: 3rem !important;\n}\n.nav[_ngcontent-%COMP%]  .pr-5, .nav[_ngcontent-%COMP%]  .px-5, .body[_ngcontent-%COMP%]  .pr-5, .body[_ngcontent-%COMP%]  .px-5 {\n  padding-right: 3rem !important;\n}\n.nav[_ngcontent-%COMP%]  .pb-5, .nav[_ngcontent-%COMP%]  .py-5, .body[_ngcontent-%COMP%]  .pb-5, .body[_ngcontent-%COMP%]  .py-5 {\n  padding-bottom: 3rem !important;\n}\n.nav[_ngcontent-%COMP%]  .pl-5, .nav[_ngcontent-%COMP%]  .px-5, .body[_ngcontent-%COMP%]  .pl-5, .body[_ngcontent-%COMP%]  .px-5 {\n  padding-left: 3rem !important;\n}\n.nav[_ngcontent-%COMP%]  .m-n1, .body[_ngcontent-%COMP%]  .m-n1 {\n  margin: -0.25rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mt-n1, .nav[_ngcontent-%COMP%]  .my-n1, .body[_ngcontent-%COMP%]  .mt-n1, .body[_ngcontent-%COMP%]  .my-n1 {\n  margin-top: -0.25rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mr-n1, .nav[_ngcontent-%COMP%]  .mx-n1, .body[_ngcontent-%COMP%]  .mr-n1, .body[_ngcontent-%COMP%]  .mx-n1 {\n  margin-right: -0.25rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mb-n1, .nav[_ngcontent-%COMP%]  .my-n1, .body[_ngcontent-%COMP%]  .mb-n1, .body[_ngcontent-%COMP%]  .my-n1 {\n  margin-bottom: -0.25rem !important;\n}\n.nav[_ngcontent-%COMP%]  .ml-n1, .nav[_ngcontent-%COMP%]  .mx-n1, .body[_ngcontent-%COMP%]  .ml-n1, .body[_ngcontent-%COMP%]  .mx-n1 {\n  margin-left: -0.25rem !important;\n}\n.nav[_ngcontent-%COMP%]  .m-n2, .body[_ngcontent-%COMP%]  .m-n2 {\n  margin: -0.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mt-n2, .nav[_ngcontent-%COMP%]  .my-n2, .body[_ngcontent-%COMP%]  .mt-n2, .body[_ngcontent-%COMP%]  .my-n2 {\n  margin-top: -0.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mr-n2, .nav[_ngcontent-%COMP%]  .mx-n2, .body[_ngcontent-%COMP%]  .mr-n2, .body[_ngcontent-%COMP%]  .mx-n2 {\n  margin-right: -0.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mb-n2, .nav[_ngcontent-%COMP%]  .my-n2, .body[_ngcontent-%COMP%]  .mb-n2, .body[_ngcontent-%COMP%]  .my-n2 {\n  margin-bottom: -0.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .ml-n2, .nav[_ngcontent-%COMP%]  .mx-n2, .body[_ngcontent-%COMP%]  .ml-n2, .body[_ngcontent-%COMP%]  .mx-n2 {\n  margin-left: -0.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .m-n3, .body[_ngcontent-%COMP%]  .m-n3 {\n  margin: -1rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mt-n3, .nav[_ngcontent-%COMP%]  .my-n3, .body[_ngcontent-%COMP%]  .mt-n3, .body[_ngcontent-%COMP%]  .my-n3 {\n  margin-top: -1rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mr-n3, .nav[_ngcontent-%COMP%]  .mx-n3, .body[_ngcontent-%COMP%]  .mr-n3, .body[_ngcontent-%COMP%]  .mx-n3 {\n  margin-right: -1rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mb-n3, .nav[_ngcontent-%COMP%]  .my-n3, .body[_ngcontent-%COMP%]  .mb-n3, .body[_ngcontent-%COMP%]  .my-n3 {\n  margin-bottom: -1rem !important;\n}\n.nav[_ngcontent-%COMP%]  .ml-n3, .nav[_ngcontent-%COMP%]  .mx-n3, .body[_ngcontent-%COMP%]  .ml-n3, .body[_ngcontent-%COMP%]  .mx-n3 {\n  margin-left: -1rem !important;\n}\n.nav[_ngcontent-%COMP%]  .m-n4, .body[_ngcontent-%COMP%]  .m-n4 {\n  margin: -1.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mt-n4, .nav[_ngcontent-%COMP%]  .my-n4, .body[_ngcontent-%COMP%]  .mt-n4, .body[_ngcontent-%COMP%]  .my-n4 {\n  margin-top: -1.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mr-n4, .nav[_ngcontent-%COMP%]  .mx-n4, .body[_ngcontent-%COMP%]  .mr-n4, .body[_ngcontent-%COMP%]  .mx-n4 {\n  margin-right: -1.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mb-n4, .nav[_ngcontent-%COMP%]  .my-n4, .body[_ngcontent-%COMP%]  .mb-n4, .body[_ngcontent-%COMP%]  .my-n4 {\n  margin-bottom: -1.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .ml-n4, .nav[_ngcontent-%COMP%]  .mx-n4, .body[_ngcontent-%COMP%]  .ml-n4, .body[_ngcontent-%COMP%]  .mx-n4 {\n  margin-left: -1.5rem !important;\n}\n.nav[_ngcontent-%COMP%]  .m-n5, .body[_ngcontent-%COMP%]  .m-n5 {\n  margin: -3rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mt-n5, .nav[_ngcontent-%COMP%]  .my-n5, .body[_ngcontent-%COMP%]  .mt-n5, .body[_ngcontent-%COMP%]  .my-n5 {\n  margin-top: -3rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mr-n5, .nav[_ngcontent-%COMP%]  .mx-n5, .body[_ngcontent-%COMP%]  .mr-n5, .body[_ngcontent-%COMP%]  .mx-n5 {\n  margin-right: -3rem !important;\n}\n.nav[_ngcontent-%COMP%]  .mb-n5, .nav[_ngcontent-%COMP%]  .my-n5, .body[_ngcontent-%COMP%]  .mb-n5, .body[_ngcontent-%COMP%]  .my-n5 {\n  margin-bottom: -3rem !important;\n}\n.nav[_ngcontent-%COMP%]  .ml-n5, .nav[_ngcontent-%COMP%]  .mx-n5, .body[_ngcontent-%COMP%]  .ml-n5, .body[_ngcontent-%COMP%]  .mx-n5 {\n  margin-left: -3rem !important;\n}\n.nav[_ngcontent-%COMP%]  .m-auto, .body[_ngcontent-%COMP%]  .m-auto {\n  margin: auto !important;\n}\n.nav[_ngcontent-%COMP%]  .mt-auto, .nav[_ngcontent-%COMP%]  .my-auto, .body[_ngcontent-%COMP%]  .mt-auto, .body[_ngcontent-%COMP%]  .my-auto {\n  margin-top: auto !important;\n}\n.nav[_ngcontent-%COMP%]  .mr-auto, .nav[_ngcontent-%COMP%]  .mx-auto, .body[_ngcontent-%COMP%]  .mr-auto, .body[_ngcontent-%COMP%]  .mx-auto {\n  margin-right: auto !important;\n}\n.nav[_ngcontent-%COMP%]  .mb-auto, .nav[_ngcontent-%COMP%]  .my-auto, .body[_ngcontent-%COMP%]  .mb-auto, .body[_ngcontent-%COMP%]  .my-auto {\n  margin-bottom: auto !important;\n}\n.nav[_ngcontent-%COMP%]  .ml-auto, .nav[_ngcontent-%COMP%]  .mx-auto, .body[_ngcontent-%COMP%]  .ml-auto, .body[_ngcontent-%COMP%]  .mx-auto {\n  margin-left: auto !important;\n}\n.nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  margin-bottom: 26px;\n  padding-bottom: 66.66667%;\n  position: relative;\n}\n.nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]     > img, .nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]     > div {\n  align-items: center;\n  bottom: 0;\n  display: flex;\n  \n  font-size: 32px;\n  justify-content: center;\n  left: 0;\n  line-height: 40px;\n  margin: auto;\n  max-height: 100%;\n  max-width: 100%;\n  position: absolute;\n  right: 0;\n  text-align: center;\n  top: 0;\n}\n.nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]     h3 {\n  font-size: 18px;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n.nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  \n  min-height: 32px;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #6e8591;\n  font-size: 24px;\n  text-align: center;\n  min-width: 48px;\n}\n.nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  min-width: 48px;\n  position: relative;\n}\n.nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 16px;\n  margin: 0 auto;\n  max-width: 20px;\n  z-index: 1;\n}\n.nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]::before {\n  background-color: #fff;\n  border-radius: 25%;\n  content: \"\";\n  height: 24px;\n  left: calc(24px - 24px / 2);\n  position: absolute;\n  width: 24px;\n}\n.nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   div.active[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.nav[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   div.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.nav[_ngcontent-%COMP%]::after {\n  border-right: 1px solid #b2b2b2;\n  content: \"\";\n  height: calc(100% - 2 * 26px);\n  position: absolute;\n  right: 0;\n  top: 26px;\n}\n@media screen and (max-width: 599px) {\n  .nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n    padding-bottom: 20px;\n  }\n  .nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]     > img, .nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]     > div {\n    position: unset;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdGhlbWUuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL3Rvb2wuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JBLHVCQUFBO0FBQ0EsWUFBQTtBQ2ZNO0VBQ0UseUJESU47QUNQRjtBQUVNO0VBQ0UseUJESU47QUNKRjtBQURNO0VBQ0UseUJESU47QUNERjtBQUpNO0VBQ0UseUJESU47QUNFRjtBQVBNO0VBQ0UseUJESU47QUNLRjtBQUhBO0VBQ0UsaUJEWlM7RUNhVCxjQUFBO0FBTUY7QUFIQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYURsQkk7RUNtQkosa0JBQUE7RUFDQSxtQkFBQTtBQU1GO0FBSkU7RUFDRSxXQUFBO0FBTUo7QUFIRTtFQTBWRSx5Q0FBQTtBQXBWSjtBQUxJO0VBQ0UsaUJBQUE7QUFPTjtBQUpJO0VBQ0UsZ0JBQUE7QUFNTjtBQUhJO0VBQ0UsY0FBQTtBQUtOO0FBRkk7RUFDRSxVQUFBO0FBSU47QUFESTtFQUNFLFVBQUE7QUFHTjtBQUFJO0VBQ0UsV0FBQTtBQUVOO0FBQ0k7RUFDRSxpQkFBQTtBQUNOO0FBRUk7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUFBTjtBQUdJO0VBQ0UsbUJBQUE7QUFETjtBQUlJO0VBQ0UsY0FBQTtBQUZOO0FBS0k7RUFDRSxjQUFBO0FBSE47QUFNSTtFQUNFLGNBQUE7QUFKTjtBQU9JO0VBQ0UsY0FBQTtBQUxOO0FBUUk7RUFDRSxjQUFBO0FBTk47QUFTSTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQVBOO0FBVUk7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUFSTjtBQVdJO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FBVE47QUFZSTtFQUNFLHlCRGhHRztFQ2lHSCxXQUFBO0FBVk47QUFhSTtFQUNFLDRCQUFBO0FBWE47QUFjSTtFQUNFLGtCQUFBO0FBWk47QUFlSTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQWJOO0FBZ0JJO0VBQ0UsZ0JBQUE7QUFkTjtBQWlCSTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQWZOO0FBa0JJO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0FBaEJOO0FBa0JJO0VBQ0U7SUFDRSxVQUFBO0VBaEJOO0FBQ0Y7QUFtQkk7RUFDRSxpQkFBQTtBQWpCTjtBQW9CSTtFQUNFLFdBQUE7QUFsQk47QUFxQkk7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUFuQk47QUFzQkk7RUFDRSxVQUFBO0FBcEJOO0FBd0JJO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FBdEJOO0FBeUJJO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FBdkJOO0FBMEJJO0VBQ0UseUJBQUE7QUF4Qk47QUEyQkk7RUFDRSxtQkFBQTtFQUNBLGdDQUFBO0FBekJOO0FBNEJJO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQTFCTjtBQTZCSTs7O0VBRUUsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBMUJOO0FBNkJJO0VBQ0Usc0JBQUE7RUFDQSxnQ0FBQTtBQTNCTjtBQThCSTtFQUNFLDZCQUFBO0FBNUJOO0FBK0JJOzs7RUFFRSxlQUFBO0FBNUJOO0FBK0JJO0VBQ0UseUJBQUE7QUE3Qk47QUFnQ0k7OztFQUVFLHlCQUFBO0FBN0JOO0FBZ0NJOzs7RUFFRSx3QkFBQTtBQTdCTjtBQWdDSTs7Ozs7OztFQUlFLFNBQUE7QUEzQk47QUE4Qkk7RUFDRSxxQ0FBQTtBQTVCTjtBQStCSTtFQUNFLGNBQUE7RUFDQSxzQ0FBQTtBQTdCTjtBQWdDSTs7Ozs7RUFHRSx5QkFBQTtBQTVCTjtBQStCSTs7Ozs7OztFQUlFLHFCQUFBO0FBMUJOO0FBNkJJO0VBQ0UseUJBQUE7QUEzQk47QUE4Qkk7OztFQUVFLHlCQUFBO0FBM0JOO0FBOEJJOzs7OztFQUdFLHlCQUFBO0FBMUJOO0FBNkJJOzs7Ozs7O0VBSUUscUJBQUE7QUF4Qk47QUEyQkk7RUFDRSx5QkFBQTtBQXpCTjtBQTRCSTs7O0VBRUUseUJBQUE7QUF6Qk47QUE0Qkk7Ozs7O0VBR0Usc0NBQUE7QUF4Qk47QUEyQkk7RUFDRSxzQ0FBQTtBQXpCTjtBQTRCSTs7O0VBRUUsc0NBQUE7QUF6Qk47QUE0Qkk7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQTFCTjtBQTZCSTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBM0JOO0FBOEJJO0VBQ0U7SUFDRSxjQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0lBQ0EsaUNBQUE7RUE1Qk47RUE4Qkk7SUFDRSxTQUFBO0VBNUJOO0FBQ0Y7QUErQkk7RUFDRTtJQUNFLGNBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQ0FBQTtFQTdCTjtFQStCSTtJQUNFLFNBQUE7RUE3Qk47QUFDRjtBQWdDSTtFQUNFO0lBQ0UsY0FBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtJQUNBLGlDQUFBO0VBOUJOO0VBZ0NJO0lBQ0UsU0FBQTtFQTlCTjtBQUNGO0FBaUNJO0VBQ0U7SUFDRSxjQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0lBQ0EsaUNBQUE7RUEvQk47RUFpQ0k7SUFDRSxTQUFBO0VBL0JOO0FBQ0Y7QUFrQ0k7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7QUFoQ047QUFtQ0k7RUFDRSxTQUFBO0FBakNOO0FBb0NJO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBbENOO0FBcUNJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFuQ047QUF1Q0k7OztFQUVFLHdCQUFBO0FBcENOO0FBdUNJOzs7RUFFRSwwQkFBQTtBQXBDTjtBQXVDSTs7O0VBRUUsMkJBQUE7QUFwQ047QUF1Q0k7OztFQUVFLHlCQUFBO0FBcENOO0FBdUNJO0VBQ0UsMEJBQUE7QUFyQ047QUF3Q0k7OztFQUVFLDhCQUFBO0FBckNOO0FBd0NJOzs7RUFFRSxnQ0FBQTtBQXJDTjtBQXdDSTs7O0VBRUUsaUNBQUE7QUFyQ047QUF3Q0k7OztFQUVFLCtCQUFBO0FBckNOO0FBd0NJO0VBQ0UseUJBQUE7QUF0Q047QUF5Q0k7OztFQUVFLDZCQUFBO0FBdENOO0FBeUNJOzs7RUFFRSwrQkFBQTtBQXRDTjtBQXlDSTs7O0VBRUUsZ0NBQUE7QUF0Q047QUF5Q0k7OztFQUVFLDhCQUFBO0FBdENOO0FBeUNJO0VBQ0UsdUJBQUE7QUF2Q047QUEwQ0k7OztFQUVFLDJCQUFBO0FBdkNOO0FBMENJOzs7RUFFRSw2QkFBQTtBQXZDTjtBQTBDSTs7O0VBRUUsOEJBQUE7QUF2Q047QUEwQ0k7OztFQUVFLDRCQUFBO0FBdkNOO0FBMENJO0VBQ0UseUJBQUE7QUF4Q047QUEyQ0k7OztFQUVFLDZCQUFBO0FBeENOO0FBMkNJOzs7RUFFRSwrQkFBQTtBQXhDTjtBQTJDSTs7O0VBRUUsZ0NBQUE7QUF4Q047QUEyQ0k7OztFQUVFLDhCQUFBO0FBeENOO0FBMkNJO0VBQ0UsdUJBQUE7QUF6Q047QUE0Q0k7OztFQUVFLDJCQUFBO0FBekNOO0FBNENJOzs7RUFFRSw2QkFBQTtBQXpDTjtBQTRDSTs7O0VBRUUsOEJBQUE7QUF6Q047QUE0Q0k7OztFQUVFLDRCQUFBO0FBekNOO0FBNENJO0VBQ0UscUJBQUE7QUExQ047QUE2Q0k7OztFQUVFLHlCQUFBO0FBMUNOO0FBNkNJOzs7RUFFRSwyQkFBQTtBQTFDTjtBQTZDSTs7O0VBRUUsNEJBQUE7QUExQ047QUE2Q0k7OztFQUVFLDBCQUFBO0FBMUNOO0FBNkNJO0VBQ0UsMkJBQUE7QUEzQ047QUE4Q0k7OztFQUVFLCtCQUFBO0FBM0NOO0FBOENJOzs7RUFFRSxpQ0FBQTtBQTNDTjtBQThDSTs7O0VBRUUsa0NBQUE7QUEzQ047QUE4Q0k7OztFQUVFLGdDQUFBO0FBM0NOO0FBOENJO0VBQ0UsMEJBQUE7QUE1Q047QUErQ0k7OztFQUVFLDhCQUFBO0FBNUNOO0FBK0NJOzs7RUFFRSxnQ0FBQTtBQTVDTjtBQStDSTs7O0VBRUUsaUNBQUE7QUE1Q047QUErQ0k7OztFQUVFLCtCQUFBO0FBNUNOO0FBK0NJO0VBQ0Usd0JBQUE7QUE3Q047QUFnREk7OztFQUVFLDRCQUFBO0FBN0NOO0FBZ0RJOzs7RUFFRSw4QkFBQTtBQTdDTjtBQWdESTs7O0VBRUUsK0JBQUE7QUE3Q047QUFnREk7OztFQUVFLDZCQUFBO0FBN0NOO0FBZ0RJO0VBQ0UsMEJBQUE7QUE5Q047QUFpREk7OztFQUVFLDhCQUFBO0FBOUNOO0FBaURJOzs7RUFFRSxnQ0FBQTtBQTlDTjtBQWlESTs7O0VBRUUsaUNBQUE7QUE5Q047QUFpREk7OztFQUVFLCtCQUFBO0FBOUNOO0FBaURJO0VBQ0Usd0JBQUE7QUEvQ047QUFrREk7OztFQUVFLDRCQUFBO0FBL0NOO0FBa0RJOzs7RUFFRSw4QkFBQTtBQS9DTjtBQWtESTs7O0VBRUUsK0JBQUE7QUEvQ047QUFrREk7OztFQUVFLDZCQUFBO0FBL0NOO0FBa0RJO0VBQ0UsMkJBQUE7QUFoRE47QUFtREk7OztFQUVFLCtCQUFBO0FBaEROO0FBbURJOzs7RUFFRSxpQ0FBQTtBQWhETjtBQW1ESTs7O0VBRUUsa0NBQUE7QUFoRE47QUFtREk7OztFQUVFLGdDQUFBO0FBaEROO0FBbURJO0VBQ0UsMEJBQUE7QUFqRE47QUFvREk7OztFQUVFLDhCQUFBO0FBakROO0FBb0RJOzs7RUFFRSxnQ0FBQTtBQWpETjtBQW9ESTs7O0VBRUUsaUNBQUE7QUFqRE47QUFvREk7OztFQUVFLCtCQUFBO0FBakROO0FBb0RJO0VBQ0Usd0JBQUE7QUFsRE47QUFxREk7OztFQUVFLDRCQUFBO0FBbEROO0FBcURJOzs7RUFFRSw4QkFBQTtBQWxETjtBQXFESTs7O0VBRUUsK0JBQUE7QUFsRE47QUFxREk7OztFQUVFLDZCQUFBO0FBbEROO0FBcURJO0VBQ0UsMEJBQUE7QUFuRE47QUFzREk7OztFQUVFLDhCQUFBO0FBbkROO0FBc0RJOzs7RUFFRSxnQ0FBQTtBQW5ETjtBQXNESTs7O0VBRUUsaUNBQUE7QUFuRE47QUFzREk7OztFQUVFLCtCQUFBO0FBbkROO0FBc0RJO0VBQ0Usd0JBQUE7QUFwRE47QUF1REk7OztFQUVFLDRCQUFBO0FBcEROO0FBdURJOzs7RUFFRSw4QkFBQTtBQXBETjtBQXVESTs7O0VBRUUsK0JBQUE7QUFwRE47QUF1REk7OztFQUVFLDZCQUFBO0FBcEROO0FBdURJO0VBQ0UsdUJBQUE7QUFyRE47QUF3REk7OztFQUVFLDJCQUFBO0FBckROO0FBd0RJOzs7RUFFRSw2QkFBQTtBQXJETjtBQXdESTs7O0VBRUUsOEJBQUE7QUFyRE47QUF3REk7OztFQUVFLDRCQUFBO0FBckROO0FBMkRFO0VBQ0UsbUJEcnlCRTtFQ3N5QkYseUJBQUE7RUFDQSxrQkFBQTtBQXhESjtBQTJETTtFQUNFLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7QUF6RFI7QUEyRE07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQXpEUjtBQThERTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQTVESjtBQThESTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQTVETjtBQThETTtFQUNFLGNEOTBCRztFQyswQkgsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQTVEUjtBQStETTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQTdEUjtBQStEUTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUE3RFY7QUFnRVE7RUFFRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBSk87RUFLUCwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FQTztBQXhEakI7QUFtRU07RUFDRSxXQUFBO0FBakVSO0FBbUVRO0VBQ0UsV0FBQTtBQWpFVjtBQXVFRTtFQUNFLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0Q3M0JFO0FDd3pCTjtBQXlFQTtFQUVJO0lBQ0UsbUJBQUE7SUFDQSxvQkFBQTtFQXZFSjtFQTBFTTtJQUNBLGVBQUE7RUF4RU47QUFDRiIsImZpbGUiOiJ0b29sLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHJvYm90b0NvbmRlbnNlZDogXCJSb2JvdG8gQ29uZGVuc2VkXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuXG4kbWF4V2lkdGg6IDEyMDBweDtcblxuJHBhZDogMjZweDtcblxuJGJsdWVHcmF5OiAjNmU4NTkxO1xuJGdyYXk6ICNlZWU7XG4kb3JhbmdlOiAjZjVhZjEzO1xuXG4kY29sb3JzOlxuICAjMDE3NGExXG4gICMwMjQ4ODBcbiAgIzM1NUY0NlxuICAjMDk0ZjU4XG4gICRvcmFuZ2U7XG5cbiRob3Zlck9wYWNpdHk6IDAuODtcblxuXG4vKiBvbGQgYW5hbHlzaXMgY29sb3IgKi9cbi8qICM0Nzg2NjIgKi8iLCJAaW1wb3J0IFwidGhlbWVcIjtcblxuOmhvc3Qge1xuICBAZWFjaCAkY29sb3IgaW4gJGNvbG9ycyB7XG4gICAgJGk6IGluZGV4KCRjb2xvcnMsICRjb2xvcik7XG4gICAgJltkYXRhLWNvbG9yPVwiI3skaX1cIl0ge1xuICAgICAgbmF2IGRpdi5hY3RpdmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5icHQge1xuICBtYXgtd2lkdGg6ICRtYXhXaWR0aDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5uYXYsIC5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gIHBhZGRpbmc6ICRwYWQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLypmb250LXNpemU6IDFyZW07Ki9cblxuICAmOjpuZy1kZWVwID4gZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gICY6Om5nLWRlZXAge1xuICAgIC5tYXQtaDMge1xuICAgICAgZm9udC1zaXplOjEuMjVlbTtcbiAgICB9XG4gICAgXG4gICAgLm1hdC1oNSB7XG4gICAgICBmb250LXNpemU6IDEuMWVtO1xuICAgIH1cblxuICAgIC5tYXQtaDYge1xuICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgfVxuXG4gICAgLmxvZ29pbWctM3Age1xuICAgICAgd2lkdGg6ODAlO1xuICAgIH1cblxuICAgIC5sb2dvaW1nLTNwMiB7XG4gICAgICB3aWR0aDo2MCU7XG4gICAgfVxuXG4gICAgLmFzLWltZyB7XG4gICAgICB3aWR0aDoxMDAlO1xuICAgIH1cblxuICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICBhIHtcbiAgICAgIGNvbG9yOiAjMDI0ODgwO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgYS5ub3QtYm9sZCB7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIH1cblxuICAgIC5jb2xvci0xIHtcbiAgICAgIGNvbG9yOiAjMDE3NGExO1xuICAgIH1cbiAgICBcbiAgICAuY29sb3ItMiB7XG4gICAgICBjb2xvcjogIzAyNDg4MDtcbiAgICB9XG4gICAgXG4gICAgLmNvbG9yLTMge1xuICAgICAgY29sb3I6ICMzNTVGNDY7XG4gICAgfVxuICAgIFxuICAgIC5jb2xvci00IHtcbiAgICAgIGNvbG9yOiAjMDk0RjU4O1xuICAgIH1cbiAgICBcbiAgICAuY29sb3ItNSB7XG4gICAgICBjb2xvcjogI0Y1QUYxMztcbiAgICB9IFxuXG4gICAgLmJ0bi10eXBlLTEge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAxNzRhMTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cblxuICAgIC5idG4tdHlwZS0yIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjQ4ODA7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG5cbiAgICAuYnRuLXR5cGUtMyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzU1RjQ2O1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gICAgLmJ0bi10eXBlLTUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cblxuICAgIC5tYXQtaDIsIC5tYXQtaDMsIC5tYXQtaDQsIC5tYXQtaDUsIC5tYXQtaDYge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuY2VudGVyIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuYm9sZCB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGNvbG9yOiAjMkUyRDJEO1xuICAgIH1cblxuICAgIC5zbWFsbGVyLXRleHQge1xuICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICB9XG5cbiAgICAuYmx1ZS1jYWxsb3V0IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMjQ4ODA7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICAgIH1cblxuICAgIC5jYWxsb3V0IHtcbiAgICAgIHdpZHRoOjQwJTtcbiAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICAgICAgLmNhbGxvdXQge1xuICAgICAgICB3aWR0aDo5MCU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJvbGQtbGluayB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICAuY2FyZC1pbWcge1xuICAgICAgd2lkdGg6MTAwJTtcbiAgICB9XG5cbiAgICAuaW1nLWcxIHtcbiAgICAgIHdpZHRoOjU1JTtcbiAgICAgIHBhZGRpbmctbGVmdDoyMHB4O1xuICAgIH1cbiAgICBcbiAgICAuaW1nLWcyIHtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgXG4gICAgfVxuICAgIFxuICAgIC5pbWctZzMge1xuICAgICAgd2lkdGg6IDQ1JTtcbiAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICB9XG4gICAgXG4gICAgLmltZy1nNCB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIH1cblxuICAgIHRhYmxlIHtcbiAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgfVxuICAgIFxuICAgIHRoIHtcbiAgICAgIHRleHQtYWxpZ246IGluaGVyaXQ7XG4gICAgICB0ZXh0LWFsaWduOiAtd2Via2l0LW1hdGNoLXBhcmVudDtcbiAgICB9XG4gICAgXG4gICAgdGFibGUge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgY29sb3I6ICMyMTI1Mjk7XG4gICAgfVxuICAgIFxuICAgIC50YWJsZSB0aCxcbiAgICAudGFibGUgdGQge1xuICAgICAgcGFkZGluZzogMC43NXJlbTtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcbiAgICB9XG4gICAgXG4gICAgLnRhYmxlIHRoZWFkIHRoIHtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RlZTJlNjtcbiAgICB9XG4gICAgXG4gICAgLnRhYmxlIHRib2R5ICsgdGJvZHkge1xuICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNkZWUyZTY7XG4gICAgfVxuICAgIFxuICAgIC50YWJsZS1zbSB0aCxcbiAgICAudGFibGUtc20gdGQge1xuICAgICAgcGFkZGluZzogMC4zcmVtO1xuICAgIH1cbiAgICBcbiAgICAudGFibGUtYm9yZGVyZWQge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcbiAgICB9XG4gICAgXG4gICAgLnRhYmxlLWJvcmRlcmVkIHRoLFxuICAgIC50YWJsZS1ib3JkZXJlZCB0ZCB7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xuICAgIH1cbiAgICBcbiAgICAudGFibGUtYm9yZGVyZWQgdGhlYWQgdGgsXG4gICAgLnRhYmxlLWJvcmRlcmVkIHRoZWFkIHRkIHtcbiAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDJweDtcbiAgICB9XG4gICAgXG4gICAgLnRhYmxlLWJvcmRlcmxlc3MgdGgsXG4gICAgLnRhYmxlLWJvcmRlcmxlc3MgdGQsXG4gICAgLnRhYmxlLWJvcmRlcmxlc3MgdGhlYWQgdGgsXG4gICAgLnRhYmxlLWJvcmRlcmxlc3MgdGJvZHkgKyB0Ym9keSB7XG4gICAgICBib3JkZXI6IDA7XG4gICAgfVxuICAgIFxuICAgIC50YWJsZS1zdHJpcGVkIHRib2R5IHRyOm50aC1vZi10eXBlKG9kZCkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICB9XG4gICAgXG4gICAgLnRhYmxlLWhvdmVyIHRib2R5IHRyOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjMjEyNTI5O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA3NSk7XG4gICAgfVxuICAgIFxuICAgIC50YWJsZS1wcmltYXJ5LFxuICAgIC50YWJsZS1wcmltYXJ5ID4gdGgsXG4gICAgLnRhYmxlLXByaW1hcnkgPiB0ZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjhkYWZmO1xuICAgIH1cbiAgICBcbiAgICAudGFibGUtcHJpbWFyeSB0aCxcbiAgICAudGFibGUtcHJpbWFyeSB0ZCxcbiAgICAudGFibGUtcHJpbWFyeSB0aGVhZCB0aCxcbiAgICAudGFibGUtcHJpbWFyeSB0Ym9keSArIHRib2R5IHtcbiAgICAgIGJvcmRlci1jb2xvcjogIzdhYmFmZjtcbiAgICB9XG4gICAgXG4gICAgLnRhYmxlLWhvdmVyIC50YWJsZS1wcmltYXJ5OmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5ZmNkZmY7XG4gICAgfVxuICAgIFxuICAgIC50YWJsZS1ob3ZlciAudGFibGUtcHJpbWFyeTpob3ZlciA+IHRkLFxuICAgIC50YWJsZS1ob3ZlciAudGFibGUtcHJpbWFyeTpob3ZlciA+IHRoIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5ZmNkZmY7XG4gICAgfVxuICAgIFxuICAgIC50YWJsZS1saWdodCxcbiAgICAudGFibGUtbGlnaHQgPiB0aCxcbiAgICAudGFibGUtbGlnaHQgPiB0ZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZGZlO1xuICAgIH1cbiAgICBcbiAgICAudGFibGUtbGlnaHQgdGgsXG4gICAgLnRhYmxlLWxpZ2h0IHRkLFxuICAgIC50YWJsZS1saWdodCB0aGVhZCB0aCxcbiAgICAudGFibGUtbGlnaHQgdGJvZHkgKyB0Ym9keSB7XG4gICAgICBib3JkZXItY29sb3I6ICNmYmZjZmM7XG4gICAgfVxuICAgIFxuICAgIC50YWJsZS1ob3ZlciAudGFibGUtbGlnaHQ6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNmNjtcbiAgICB9XG4gICAgXG4gICAgLnRhYmxlLWhvdmVyIC50YWJsZS1saWdodDpob3ZlciA+IHRkLFxuICAgIC50YWJsZS1ob3ZlciAudGFibGUtbGlnaHQ6aG92ZXIgPiB0aCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2Y2O1xuICAgIH1cbiAgICBcbiAgICAudGFibGUtYWN0aXZlLFxuICAgIC50YWJsZS1hY3RpdmUgPiB0aCxcbiAgICAudGFibGUtYWN0aXZlID4gdGQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA3NSk7XG4gICAgfVxuICAgIFxuICAgIC50YWJsZS1ob3ZlciAudGFibGUtYWN0aXZlOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xuICAgIH1cbiAgICBcbiAgICAudGFibGUtaG92ZXIgLnRhYmxlLWFjdGl2ZTpob3ZlciA+IHRkLFxuICAgIC50YWJsZS1ob3ZlciAudGFibGUtYWN0aXZlOmhvdmVyID4gdGgge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA3NSk7XG4gICAgfVxuICAgIFxuICAgIC50YWJsZSAudGhlYWQtZGFyayB0aCB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDA7XG4gICAgICBib3JkZXItY29sb3I6ICM0NTRkNTU7XG4gICAgfVxuICAgIFxuICAgIC50YWJsZSAudGhlYWQtbGlnaHQgdGgge1xuICAgICAgY29sb3I6ICM0OTUwNTc7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xuICAgICAgYm9yZGVyLWNvbG9yOiAjZGVlMmU2O1xuICAgIH1cbiAgICBcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcbiAgICAgIC50YWJsZS1yZXNwb25zaXZlLXNtIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgICAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgICB9XG4gICAgICAudGFibGUtcmVzcG9uc2l2ZS1zbSA+IC50YWJsZS1ib3JkZXJlZCB7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4gICAgICAudGFibGUtcmVzcG9uc2l2ZS1tZCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgICAgfVxuICAgICAgLnRhYmxlLXJlc3BvbnNpdmUtbWQgPiAudGFibGUtYm9yZGVyZWQge1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xuICAgICAgLnRhYmxlLXJlc3BvbnNpdmUtbGcge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgICAgIH1cbiAgICAgIC50YWJsZS1yZXNwb25zaXZlLWxnID4gLnRhYmxlLWJvcmRlcmVkIHtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSB7XG4gICAgICAudGFibGUtcmVzcG9uc2l2ZS14bCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgICAgfVxuICAgICAgLnRhYmxlLXJlc3BvbnNpdmUteGwgPiAudGFibGUtYm9yZGVyZWQge1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIC50YWJsZS1yZXNwb25zaXZlIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgIH1cbiAgICBcbiAgICAudGFibGUtcmVzcG9uc2l2ZSA+IC50YWJsZS1ib3JkZXJlZCB7XG4gICAgICBib3JkZXI6IDA7XG4gICAgfVxuICAgIFxuICAgIGEuYm9sZC1saW5rOmhvdmVyIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIH1cblxuICAgIC5jb2xsYWItaW1hZ2Uge1xuICAgICAgd2lkdGg6IDEwMCU7IFxuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cblxuICAgIC8qIGJvb3RzdHJhcCBtYXJnaW4gYW5kIHBhZGRpbmcgY2xhc3NlcyAqL1xuICAgIC5tdC0wLFxuICAgIC5teS0wIHtcbiAgICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubXItMCxcbiAgICAubXgtMCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubWItMCxcbiAgICAubXktMCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm1sLTAsXG4gICAgLm14LTAge1xuICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubS0xIHtcbiAgICAgIG1hcmdpbjogMC4yNXJlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5tdC0xLFxuICAgIC5teS0xIHtcbiAgICAgIG1hcmdpbi10b3A6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubXItMSxcbiAgICAubXgtMSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubWItMSxcbiAgICAubXktMSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm1sLTEsXG4gICAgLm14LTEge1xuICAgICAgbWFyZ2luLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubS0yIHtcbiAgICAgIG1hcmdpbjogMC41cmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm10LTIsXG4gICAgLm15LTIge1xuICAgICAgbWFyZ2luLXRvcDogMC41cmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm1yLTIsXG4gICAgLm14LTIge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubWItMixcbiAgICAubXktMiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubWwtMixcbiAgICAubXgtMiB7XG4gICAgICBtYXJnaW4tbGVmdDogMC41cmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm0tMyB7XG4gICAgICBtYXJnaW46IDFyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubXQtMyxcbiAgICAubXktMyB7XG4gICAgICBtYXJnaW4tdG9wOiAxcmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm1yLTMsXG4gICAgLm14LTMge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm1iLTMsXG4gICAgLm15LTMge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5tbC0zLFxuICAgIC5teC0zIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm0tNCB7XG4gICAgICBtYXJnaW46IDEuNXJlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5tdC00LFxuICAgIC5teS00IHtcbiAgICAgIG1hcmdpbi10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5tci00LFxuICAgIC5teC00IHtcbiAgICAgIG1hcmdpbi1yaWdodDogMS41cmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm1iLTQsXG4gICAgLm15LTQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm1sLTQsXG4gICAgLm14LTQge1xuICAgICAgbWFyZ2luLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5tLTUge1xuICAgICAgbWFyZ2luOiAzcmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm10LTUsXG4gICAgLm15LTUge1xuICAgICAgbWFyZ2luLXRvcDogM3JlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5tci01LFxuICAgIC5teC01IHtcbiAgICAgIG1hcmdpbi1yaWdodDogM3JlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5tYi01LFxuICAgIC5teS01IHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDNyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubWwtNSxcbiAgICAubXgtNSB7XG4gICAgICBtYXJnaW4tbGVmdDogM3JlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5wLTAge1xuICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5wdC0wLFxuICAgIC5weS0wIHtcbiAgICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnByLTAsXG4gICAgLnB4LTAge1xuICAgICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5wYi0wLFxuICAgIC5weS0wIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnBsLTAsXG4gICAgLnB4LTAge1xuICAgICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnAtMSB7XG4gICAgICBwYWRkaW5nOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnB0LTEsXG4gICAgLnB5LTEge1xuICAgICAgcGFkZGluZy10b3A6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAucHItMSxcbiAgICAucHgtMSB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnBiLTEsXG4gICAgLnB5LTEge1xuICAgICAgcGFkZGluZy1ib3R0b206IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAucGwtMSxcbiAgICAucHgtMSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDAuMjVyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAucC0yIHtcbiAgICAgIHBhZGRpbmc6IDAuNXJlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5wdC0yLFxuICAgIC5weS0yIHtcbiAgICAgIHBhZGRpbmctdG9wOiAwLjVyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAucHItMixcbiAgICAucHgtMiB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAucGItMixcbiAgICAucHktMiB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnBsLTIsXG4gICAgLnB4LTIge1xuICAgICAgcGFkZGluZy1sZWZ0OiAwLjVyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAucC0zIHtcbiAgICAgIHBhZGRpbmc6IDFyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAucHQtMyxcbiAgICAucHktMyB7XG4gICAgICBwYWRkaW5nLXRvcDogMXJlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5wci0zLFxuICAgIC5weC0zIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDFyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAucGItMyxcbiAgICAucHktMyB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5wbC0zLFxuICAgIC5weC0zIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMXJlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5wLTQge1xuICAgICAgcGFkZGluZzogMS41cmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnB0LTQsXG4gICAgLnB5LTQge1xuICAgICAgcGFkZGluZy10b3A6IDEuNXJlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5wci00LFxuICAgIC5weC00IHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEuNXJlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5wYi00LFxuICAgIC5weS00IHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAucGwtNCxcbiAgICAucHgtNCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5wLTUge1xuICAgICAgcGFkZGluZzogM3JlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5wdC01LFxuICAgIC5weS01IHtcbiAgICAgIHBhZGRpbmctdG9wOiAzcmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnByLTUsXG4gICAgLnB4LTUge1xuICAgICAgcGFkZGluZy1yaWdodDogM3JlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5wYi01LFxuICAgIC5weS01IHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAzcmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLnBsLTUsXG4gICAgLnB4LTUge1xuICAgICAgcGFkZGluZy1sZWZ0OiAzcmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm0tbjEge1xuICAgICAgbWFyZ2luOiAtMC4yNXJlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5tdC1uMSxcbiAgICAubXktbjEge1xuICAgICAgbWFyZ2luLXRvcDogLTAuMjVyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubXItbjEsXG4gICAgLm14LW4xIHtcbiAgICAgIG1hcmdpbi1yaWdodDogLTAuMjVyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubWItbjEsXG4gICAgLm15LW4xIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IC0wLjI1cmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm1sLW4xLFxuICAgIC5teC1uMSB7XG4gICAgICBtYXJnaW4tbGVmdDogLTAuMjVyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubS1uMiB7XG4gICAgICBtYXJnaW46IC0wLjVyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubXQtbjIsXG4gICAgLm15LW4yIHtcbiAgICAgIG1hcmdpbi10b3A6IC0wLjVyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubXItbjIsXG4gICAgLm14LW4yIHtcbiAgICAgIG1hcmdpbi1yaWdodDogLTAuNXJlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5tYi1uMixcbiAgICAubXktbjIge1xuICAgICAgbWFyZ2luLWJvdHRvbTogLTAuNXJlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5tbC1uMixcbiAgICAubXgtbjIge1xuICAgICAgbWFyZ2luLWxlZnQ6IC0wLjVyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubS1uMyB7XG4gICAgICBtYXJnaW46IC0xcmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm10LW4zLFxuICAgIC5teS1uMyB7XG4gICAgICBtYXJnaW4tdG9wOiAtMXJlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5tci1uMyxcbiAgICAubXgtbjMge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAtMXJlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5tYi1uMyxcbiAgICAubXktbjMge1xuICAgICAgbWFyZ2luLWJvdHRvbTogLTFyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubWwtbjMsXG4gICAgLm14LW4zIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMXJlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5tLW40IHtcbiAgICAgIG1hcmdpbjogLTEuNXJlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5tdC1uNCxcbiAgICAubXktbjQge1xuICAgICAgbWFyZ2luLXRvcDogLTEuNXJlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5tci1uNCxcbiAgICAubXgtbjQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAtMS41cmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm1iLW40LFxuICAgIC5teS1uNCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAtMS41cmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm1sLW40LFxuICAgIC5teC1uNCB7XG4gICAgICBtYXJnaW4tbGVmdDogLTEuNXJlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5tLW41IHtcbiAgICAgIG1hcmdpbjogLTNyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubXQtbjUsXG4gICAgLm15LW41IHtcbiAgICAgIG1hcmdpbi10b3A6IC0zcmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm1yLW41LFxuICAgIC5teC1uNSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IC0zcmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm1iLW41LFxuICAgIC5teS1uNSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAtM3JlbSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5tbC1uNSxcbiAgICAubXgtbjUge1xuICAgICAgbWFyZ2luLWxlZnQ6IC0zcmVtICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm0tYXV0byB7XG4gICAgICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubXQtYXV0byxcbiAgICAubXktYXV0byB7XG4gICAgICBtYXJnaW4tdG9wOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm1yLWF1dG8sXG4gICAgLm14LWF1dG8ge1xuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm1iLWF1dG8sXG4gICAgLm15LWF1dG8ge1xuICAgICAgbWFyZ2luLWJvdHRvbTogYXV0byAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5tbC1hdXRvLFxuICAgIC5teC1hdXRvIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cbi5uYXYge1xuICAubG9nbyB7XG4gICAgbWFyZ2luLWJvdHRvbTogJHBhZDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNjYuNjY2NjclOyAvLyAzLzIgYXNwZWN0IHJhdGlvXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgOjpuZy1kZWVwIHtcbiAgICAgID4gaW1nLCA+IGRpdiB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLypmb250LWZhbWlseTogJHJvYm90b0NvbmRlbnNlZDsqL1xuICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgfVxuICAgICAgaDMge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmF2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICBkaXYge1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAvKmZvbnQtZmFtaWx5OiAkcm9ib3RvQ29uZGVuc2VkOyovXG4gICAgICBtaW4taGVpZ2h0OiAzMnB4O1xuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgICAgIGkge1xuICAgICAgICBjb2xvcjogJGJsdWVHcmF5O1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWluLXdpZHRoOiA0OHB4O1xuICAgICAgfVxuXG4gICAgICBkaXYge1xuICAgICAgICBtaW4td2lkdGg6IDQ4cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBtYXgtd2lkdGg6IDIwcHg7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgJHNpemU6IDI0cHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNSU7XG4gICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgaGVpZ2h0OiAkc2l6ZTtcbiAgICAgICAgICBsZWZ0OiBjYWxjKDI0cHggLSAjeyRzaXplfSAvIDIpO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB3aWR0aDogJHNpemU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5hY3RpdmUge1xuICAgICAgICBjb2xvcjogI2ZmZjtcblxuICAgICAgICBpIHtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICY6OmFmdGVyIHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYjJiMmIyO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMiAqICN7JHBhZH0pO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6ICRwYWQ7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgLm5hdiB7XG4gICAgLmxvZ28ge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuXG4gICAgICA6Om5nLWRlZXAge1xuICAgICAgICA+IGltZywgPiBkaXYge1xuICAgICAgICBwb3NpdGlvbjogdW5zZXQ7XG5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4iXX0= */"] });


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
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [["fxFlex", "grow", "id", "maincontent"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column !important;\n  \n  min-height: 100%;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0eWxlcy9fdGhlbWUuc2NzcyIsIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQkEsdUJBQUE7QUFDQSxZQUFBO0FDbkJBO0VBQ0UsYUFBQTtFQUNBLGlDQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcm9ib3RvQ29uZGVuc2VkOiBcIlJvYm90byBDb25kZW5zZWRcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG5cbiRtYXhXaWR0aDogMTIwMHB4O1xuXG4kcGFkOiAyNnB4O1xuXG4kYmx1ZUdyYXk6ICM2ZTg1OTE7XG4kZ3JheTogI2VlZTtcbiRvcmFuZ2U6ICNmNWFmMTM7XG5cbiRjb2xvcnM6XG4gICMwMTc0YTFcbiAgIzAyNDg4MFxuICAjMzU1RjQ2XG4gICMwOTRmNThcbiAgJG9yYW5nZTtcblxuJGhvdmVyT3BhY2l0eTogMC44O1xuXG5cbi8qIG9sZCBhbmFseXNpcyBjb2xvciAqL1xuLyogIzQ3ODY2MiAqLyIsIkBpbXBvcnQgXCJ0aGVtZVwiO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcbiAgLyptYXgtd2lkdGg6ICRtYXhXaWR0aDsqL1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbiJdfQ== */"] });


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
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function MenuComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const navItem_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", navItem_r3.route)("fxFlex", ctx_r0.flexWidth);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](navItem_r3.title);
} }
const _c0 = function (a0) { return { "active": a0 }; };
function MenuComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const navItem_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", navItem_r4.route)("fxFlex", ctx_r1.flexWidth)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r1.isParentActive(navItem_r4)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](navItem_r4.title);
} }
function MenuComponent_section_13_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const child_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", child_r7.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](child_r7.title);
} }
function MenuComponent_section_13_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const child_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("href", child_r7.route, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", child_r7.title, " ");
} }
function MenuComponent_section_13_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuComponent_section_13_ng_container_1_div_1_Template, 2, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MenuComponent_section_13_ng_container_1_div_2_Template, 4, 2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const child_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !child_r7.external);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", child_r7.external);
} }
function MenuComponent_section_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuComponent_section_13_ng_container_1_Template, 3, 2, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const navItem_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", ctx_r2.flexWidth);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", navItem_r5.children);
} }
const _c1 = function (a0) { return { "opened": a0 }; };
class MenuComponent {
    constructor(router) {
        this.router = router;
        this.opened = false;
        this.show_small_menu = false;
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
    toggle() {
        this.show_small_menu = !this.show_small_menu;
    }
    getMenuStatus() {
        return this.show_small_menu;
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
    } }, decls: 14, vars: 7, consts: [["fxHide", "", "fxShow.xs", "true", 1, "bpt"], ["fxFlex", "100%", 1, "small-menu-div"], ["fxLayout", "row", "fxFlex", "100%", 1, "small-menu"], ["mat-raised-button", "", "role", "button", "fxFlex", "100%", 1, "small-menu", 3, "click"], ["fxHide", "", 3, "fxShow.xs"], ["fxFlex", "100%", "fxLayout", "column"], [4, "ngFor", "ngForOf"], [1, "bpt", 3, "ngClass"], ["fxFlex", "", "fxShow", "true", "fxHide.xs", ""], ["fxLayout", "row", "fxLayoutGap", "32px", 1, "top-row"], ["fxLayout", "row", "fxLayoutGap", "32px", 1, "child-row"], [3, "fxFlex", 4, "ngFor", "ngForOf"], ["fxLayoutAlign", "space-evenly stretch", 1, "category-item-small", 3, "routerLink", "fxFlex"], [1, "category", 3, "routerLink", "fxFlex", "ngClass"], [3, "fxFlex"], ["routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], [4, "ngIf"], ["routerLinkActive", "active", 3, "routerLink"], ["target", "_blank"], [1, "fas", "fa-external-link-alt"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_a_click_3_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MenuComponent_ng_container_7_Template, 3, 3, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MenuComponent_ng_container_11_Template, 3, 6, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MenuComponent_section_13_Template, 2, 2, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("fxShow.xs", ctx.show_small_menu ? "true" : "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx.opened));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navItems);
    } }, directives: [_angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__["DefaultShowHideDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatAnchor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__["DefaultClassDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".bpt[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n[_nghost-%COMP%] {\n  \n  font-family: \"Karla\", sans-serif;\n  -webkit-user-select: none;\n          user-select: none;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n}\n.category[_ngcontent-%COMP%]:nth-of-type(1):hover {\n  background-color: rgba(1, 116, 161, 0.2);\n}\n.category[_ngcontent-%COMP%]:nth-of-type(1)::before {\n  border-top: 4px solid #0174a1;\n}\n.child-row[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]:nth-of-type(1)    > div.active[_ngcontent-%COMP%] {\n  background: #0174a1;\n  color: #fff;\n  font-weight: bold;\n}\n.child-row[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]:nth-of-type(1)    > div[_ngcontent-%COMP%]:not(.active):hover {\n  background-color: rgba(1, 116, 161, 0.2);\n}\n.child-row[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]:nth-of-type(1)    > div[_ngcontent-%COMP%]::before {\n  border-top: 2px solid #0174a1;\n}\n.category[_ngcontent-%COMP%]:nth-of-type(2):hover {\n  background-color: rgba(2, 72, 128, 0.2);\n}\n.category[_ngcontent-%COMP%]:nth-of-type(2)::before {\n  border-top: 4px solid #024880;\n}\n.child-row[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]:nth-of-type(2)    > div.active[_ngcontent-%COMP%] {\n  background: #024880;\n  color: #fff;\n  font-weight: bold;\n}\n.child-row[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]:nth-of-type(2)    > div[_ngcontent-%COMP%]:not(.active):hover {\n  background-color: rgba(2, 72, 128, 0.2);\n}\n.child-row[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]:nth-of-type(2)    > div[_ngcontent-%COMP%]::before {\n  border-top: 2px solid #024880;\n}\n.category[_ngcontent-%COMP%]:nth-of-type(3):hover {\n  background-color: rgba(53, 95, 70, 0.2);\n}\n.category[_ngcontent-%COMP%]:nth-of-type(3)::before {\n  border-top: 4px solid #355F46;\n}\n.child-row[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]:nth-of-type(3)    > div.active[_ngcontent-%COMP%] {\n  background: #355F46;\n  color: #fff;\n  font-weight: bold;\n}\n.child-row[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]:nth-of-type(3)    > div[_ngcontent-%COMP%]:not(.active):hover {\n  background-color: rgba(53, 95, 70, 0.2);\n}\n.child-row[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]:nth-of-type(3)    > div[_ngcontent-%COMP%]::before {\n  border-top: 2px solid #355F46;\n}\n.category[_ngcontent-%COMP%]:nth-of-type(4):hover {\n  background-color: rgba(9, 79, 88, 0.2);\n}\n.category[_ngcontent-%COMP%]:nth-of-type(4)::before {\n  border-top: 4px solid #094f58;\n}\n.child-row[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]:nth-of-type(4)    > div.active[_ngcontent-%COMP%] {\n  background: #094f58;\n  color: #fff;\n  font-weight: bold;\n}\n.child-row[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]:nth-of-type(4)    > div[_ngcontent-%COMP%]:not(.active):hover {\n  background-color: rgba(9, 79, 88, 0.2);\n}\n.child-row[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]:nth-of-type(4)    > div[_ngcontent-%COMP%]::before {\n  border-top: 2px solid #094f58;\n}\n.category[_ngcontent-%COMP%]:nth-of-type(5):hover {\n  background-color: rgba(245, 175, 19, 0.2);\n}\n.category[_ngcontent-%COMP%]:nth-of-type(5)::before {\n  border-top: 4px solid #f5af13;\n}\n.child-row[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]:nth-of-type(5)    > div.active[_ngcontent-%COMP%] {\n  background: #f5af13;\n  color: #fff;\n  font-weight: bold;\n}\n.child-row[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]:nth-of-type(5)    > div[_ngcontent-%COMP%]:not(.active):hover {\n  background-color: rgba(245, 175, 19, 0.2);\n}\n.child-row[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]:nth-of-type(5)    > div[_ngcontent-%COMP%]::before {\n  border-top: 2px solid #f5af13;\n}\n.small-menu-div[_ngcontent-%COMP%] {\n  background-color: #3b88af;\n  width: 100%;\n  display: flex;\n}\n.small-menu[_ngcontent-%COMP%] {\n  background-color: #3b88af;\n  color: white;\n}\n\n.category-item-small[_ngcontent-%COMP%] {\n  padding: 10px;\n  background-color: #3b88af;\n  color: white;\n}\n.top-row[_ngcontent-%COMP%] {\n  background-color: #eee;\n  min-height: 40px;\n  text-transform: uppercase;\n}\n.top-row[_ngcontent-%COMP%]    > .category[_ngcontent-%COMP%] {\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  padding-top: 4px;\n  position: relative;\n  text-align: center;\n}\n.top-row[_ngcontent-%COMP%]    > .category[_ngcontent-%COMP%]:first-child {\n  margin-left: 26px;\n}\n.top-row[_ngcontent-%COMP%]    > .category[_ngcontent-%COMP%]:last-child {\n  margin-right: 26px;\n}\n.top-row[_ngcontent-%COMP%]    > .category[_ngcontent-%COMP%]::before {\n  content: \"\";\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.top-row[_ngcontent-%COMP%]    > .category.active[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.top-row[_ngcontent-%COMP%]    > .category.active[_ngcontent-%COMP%]::before {\n  border-top-width: 8px;\n  top: -4px;\n}\n.child-row[_ngcontent-%COMP%] {\n  background-color: #eee;\n  font-size: 1.3rem;\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 250ms ease-out;\n}\n.child-row[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  color: #444;\n  cursor: pointer;\n  padding: 8px 8px 0;\n  position: relative;\n}\n.child-row[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .child-row[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited {\n  color: #444;\n}\n.child-row[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]::before {\n  content: \"\";\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.child-row[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]:first-child {\n  margin-left: 26px;\n}\n.child-row[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]:last-child {\n  margin-right: 26px;\n  padding-bottom: 10px;\n}\n.opened[_ngcontent-%COMP%]   .child-row[_ngcontent-%COMP%] {\n  max-height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdGhlbWUuc2NzcyIsIi4uLy4uLy4uL21lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JBLHVCQUFBO0FBQ0EsWUFBQTtBQ25CQTtFQUNFLGlCRERTO0VDRVQsY0FBQTtBQUNGO0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0FBQ0o7QUFNSTtFQUNFLHdDQUFBO0FBSE47QUFNSTtFQUNFLDZCQUFBO0FBSk47QUFTSTtFQUNFLG1CRHBCSjtFQ3FCSSxXQUFBO0VBQ0EsaUJBQUE7QUFOTjtBQVNJO0VBQ0Usd0NBQUE7QUFQTjtBQVVJO0VBQ0UsNkJBQUE7QUFSTjtBQWJJO0VBQ0UsdUNBQUE7QUFnQk47QUFiSTtFQUNFLDZCQUFBO0FBZU47QUFWSTtFQUNFLG1CRHBCSjtFQ3FCSSxXQUFBO0VBQ0EsaUJBQUE7QUFhTjtBQVZJO0VBQ0UsdUNBQUE7QUFZTjtBQVRJO0VBQ0UsNkJBQUE7QUFXTjtBQWhDSTtFQUNFLHVDQUFBO0FBbUNOO0FBaENJO0VBQ0UsNkJBQUE7QUFrQ047QUE3Qkk7RUFDRSxtQkRwQko7RUNxQkksV0FBQTtFQUNBLGlCQUFBO0FBZ0NOO0FBN0JJO0VBQ0UsdUNBQUE7QUErQk47QUE1Qkk7RUFDRSw2QkFBQTtBQThCTjtBQW5ESTtFQUNFLHNDQUFBO0FBc0ROO0FBbkRJO0VBQ0UsNkJBQUE7QUFxRE47QUFoREk7RUFDRSxtQkRwQko7RUNxQkksV0FBQTtFQUNBLGlCQUFBO0FBbUROO0FBaERJO0VBQ0Usc0NBQUE7QUFrRE47QUEvQ0k7RUFDRSw2QkFBQTtBQWlETjtBQXRFSTtFQUNFLHlDQUFBO0FBeUVOO0FBdEVJO0VBQ0UsNkJBQUE7QUF3RU47QUFuRUk7RUFDRSxtQkRwQko7RUNxQkksV0FBQTtFQUNBLGlCQUFBO0FBc0VOO0FBbkVJO0VBQ0UseUNBQUE7QUFxRU47QUFsRUk7RUFDRSw2QkFBQTtBQW9FTjtBQS9EQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFrRUY7QUEvREE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFrRUY7QUEvREE7Ozs7RUFBQTtBQU1BO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQWlFRjtBQTlEQTtFQUNFLHNCRC9ESztFQ2dFTCxnQkFBQTtFQUNBLHlCQUFBO0FBaUVGO0FBL0RFO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBaUVKO0FBL0RJO0VBQ0UsaUJEaEZBO0FDaUpOO0FBOURJO0VBQ0Usa0JEcEZBO0FDb0pOO0FBN0RJO0VBQ0UsV0FBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FBK0ROO0FBNURJO0VBQ0UsaUJBQUE7QUE4RE47QUE1RE07RUFDRSxxQkFBQTtFQUNBLFNBQUE7QUE4RFI7QUF4REE7RUFDRSxzQkR4R0s7RUN5R0wsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQ0FBQTtBQTJERjtBQXhESTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQTBETjtBQXhETTtFQUNFLFdBQUE7QUEwRFI7QUF2RE07RUFDRSxXQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7QUF5RFI7QUFyREk7RUFDRSxpQkR0SUE7QUM2TE47QUFwREk7RUFDRSxrQkQxSUE7RUMySUEsb0JBQUE7QUFzRE47QUFqREE7RUFDRSxnQkFBQTtBQW9ERiIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHJvYm90b0NvbmRlbnNlZDogXCJSb2JvdG8gQ29uZGVuc2VkXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuXG4kbWF4V2lkdGg6IDEyMDBweDtcblxuJHBhZDogMjZweDtcblxuJGJsdWVHcmF5OiAjNmU4NTkxO1xuJGdyYXk6ICNlZWU7XG4kb3JhbmdlOiAjZjVhZjEzO1xuXG4kY29sb3JzOlxuICAjMDE3NGExXG4gICMwMjQ4ODBcbiAgIzM1NUY0NlxuICAjMDk0ZjU4XG4gICRvcmFuZ2U7XG5cbiRob3Zlck9wYWNpdHk6IDAuODtcblxuXG4vKiBvbGQgYW5hbHlzaXMgY29sb3IgKi9cbi8qICM0Nzg2NjIgKi8iLCJAaW1wb3J0IFwidGhlbWVcIjtcblxuLmJwdCB7XG4gIG1heC13aWR0aDogJG1heFdpZHRoO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuOmhvc3Qge1xuICAvKmZvbnQtZmFtaWx5OiAkcm9ib3RvQ29uZGVuc2VkOyovXG4gIGZvbnQtZmFtaWx5OiAnS2FybGEnLCBzYW5zLXNlcmlmO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcblxuICA+IGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxufVxuXG5AZWFjaCAkY29sb3IgaW4gJGNvbG9ycyB7XG4gICRpOiBpbmRleCgkY29sb3JzLCAkY29sb3IpO1xuICAuY2F0ZWdvcnk6bnRoLW9mLXR5cGUoI3skaX0pIHtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50aXplKCRjb2xvciwgJGhvdmVyT3BhY2l0eSk7XG4gICAgfVxuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCAkY29sb3I7XG4gICAgfVxuICB9XG5cbiAgLmNoaWxkLXJvdyA+IHNlY3Rpb246bnRoLW9mLXR5cGUoI3skaX0pID4gZGl2IHtcbiAgICAmLmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiAkY29sb3I7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgICY6bm90KC5hY3RpdmUpOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50aXplKCRjb2xvciwgJGhvdmVyT3BhY2l0eSk7XG4gICAgfVxuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAkY29sb3I7XG4gICAgfVxuICB9XG59XG5cbi5zbWFsbC1tZW51LWRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjg4YWY7XG4gIHdpZHRoOjEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5zbWFsbC1tZW51IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiODhhZjsgXG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLyouY2F0ZWdvcnktc21hbGwge1xuICBtYXJnaW46MTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiODhhZjsgXG4gIGNvbG9yOiB3aGl0ZTtcbn0qL1xuXG4uY2F0ZWdvcnktaXRlbS1zbWFsbCB7XG4gIHBhZGRpbmc6MTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiODhhZjsgXG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRvcC1yb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JheTtcbiAgbWluLWhlaWdodDogNDBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICA+IC5jYXRlZ29yeSB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAkcGFkO1xuICAgIH1cblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6ICRwYWQ7XG4gICAgfVxuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgICYuYWN0aXZlIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgICAmOjpiZWZvcmUge1xuICAgICAgICBib3JkZXItdG9wLXdpZHRoOiA4cHg7XG4gICAgICAgIHRvcDogLTRweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmNoaWxkLXJvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRncmF5O1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgbWF4LWhlaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAyNTBtcyBlYXNlLW91dDtcblxuICA+IHNlY3Rpb24ge1xuICAgID4gZGl2IHtcbiAgICAgIGNvbG9yOiAjNDQ0O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgcGFkZGluZzogOHB4IDhweCAwO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICBhLCBhOnZpc2l0ZWQge1xuICAgICAgICBjb2xvcjogIzQ0NDtcbiAgICAgIH1cblxuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAkcGFkO1xuICAgIH1cblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6ICRwYWQ7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICB9XG4gIH1cbn1cblxuLm9wZW5lZCAuY2hpbGQtcm93IHtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cbiJdfQ== */"] });


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/shared.module */ "PCNd");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-recaptcha */ "jCJ1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _home_graphic_graphic_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/graphic/graphic.component */ "1Rfq");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./menu/menu.component */ "TGkX");
/* harmony import */ var _tools_overview_analysis_evaluation_analysis_evaluation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tools-overview/analysis-evaluation/analysis-evaluation.component */ "aP66");
/* harmony import */ var _tools_overview_collection_reporting_collection_reporting_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tools-overview/collection-reporting/collection-reporting.component */ "pyga");
/* harmony import */ var _tools_overview_data_standardization_data_standardization_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tools-overview/data-standardization/data-standardization.component */ "1qPM");
/* harmony import */ var _tools_overview_developers_developers_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tools-overview/developers/developers.component */ "6JCy");
/* harmony import */ var _tools_overview_goals_outcomes_goals_outcomes_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tools-overview/goals-outcomes/goals-outcomes.component */ "FLSU");
/* harmony import */ var _tools_overview_help_desk_help_desk_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./tools-overview/help-desk/help-desk.component */ "9uLu");
/* harmony import */ var _tools_overview_management_compliance_management_compliance_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./tools-overview/management-compliance/management-compliance.component */ "p7J/");
/* harmony import */ var _tools_overview_tools_overview_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./tools-overview/tools-overview.component */ "rX8i");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ "fXoL");






















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MAT_FORM_FIELD_DEFAULT_OPTIONS"], useValue: { appearance: 'outline' } }
    ], imports: [[
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
            ng_recaptcha__WEBPACK_IMPORTED_MODULE_5__["RecaptchaFormsModule"],
            ng_recaptcha__WEBPACK_IMPORTED_MODULE_5__["RecaptchaModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_tools_overview_analysis_evaluation_analysis_evaluation_component__WEBPACK_IMPORTED_MODULE_13__["AnalysisEvaluationComponent"],
        _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _tools_overview_collection_reporting_collection_reporting_component__WEBPACK_IMPORTED_MODULE_14__["CollectionReportingComponent"],
        _tools_overview_data_standardization_data_standardization_component__WEBPACK_IMPORTED_MODULE_15__["DataStandardizationComponent"],
        _tools_overview_developers_developers_component__WEBPACK_IMPORTED_MODULE_16__["DevelopersComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
        _tools_overview_goals_outcomes_goals_outcomes_component__WEBPACK_IMPORTED_MODULE_17__["GoalsOutcomesComponent"],
        _home_graphic_graphic_component__WEBPACK_IMPORTED_MODULE_10__["GraphicComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
        _tools_overview_help_desk_help_desk_component__WEBPACK_IMPORTED_MODULE_18__["HelpDeskComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
        _tools_overview_management_compliance_management_compliance_component__WEBPACK_IMPORTED_MODULE_19__["ManagementComplianceComponent"],
        _menu_menu_component__WEBPACK_IMPORTED_MODULE_12__["MenuComponent"],
        _tools_overview_tools_overview_component__WEBPACK_IMPORTED_MODULE_20__["ToolsOverviewComponent"]], imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
        ng_recaptcha__WEBPACK_IMPORTED_MODULE_5__["RecaptchaFormsModule"],
        ng_recaptcha__WEBPACK_IMPORTED_MODULE_5__["RecaptchaModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();


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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Learn more about ComStock and ResStock.");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Learn more about BETTER.");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Learn more about Asset Score.");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Learn more about BPD.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_tools_overview_component__WEBPACK_IMPORTED_MODULE_1__["ToolsOverviewComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited {\n  color: #355F46;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdGhlbWUuc2NzcyIsIi4uLy4uLy4uLy4uL2FuYWx5c2lzLWV2YWx1YXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JBLHVCQUFBO0FBQ0EsWUFBQTtBQ25CQTtFQUNFLGNBQUE7RUFBaUIsc0JBQUE7QUFFbkIiLCJmaWxlIjoiYW5hbHlzaXMtZXZhbHVhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRyb2JvdG9Db25kZW5zZWQ6IFwiUm9ib3RvIENvbmRlbnNlZFwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcblxuJG1heFdpZHRoOiAxMjAwcHg7XG5cbiRwYWQ6IDI2cHg7XG5cbiRibHVlR3JheTogIzZlODU5MTtcbiRncmF5OiAjZWVlO1xuJG9yYW5nZTogI2Y1YWYxMztcblxuJGNvbG9yczpcbiAgIzAxNzRhMVxuICAjMDI0ODgwXG4gICMzNTVGNDZcbiAgIzA5NGY1OFxuICAkb3JhbmdlO1xuXG4kaG92ZXJPcGFjaXR5OiAwLjg7XG5cblxuLyogb2xkIGFuYWx5c2lzIGNvbG9yICovXG4vKiAjNDc4NjYyICovIiwiQGltcG9ydCBcInRoZW1lXCI7XG5cbmEsIGE6dmlzaXRlZCB7XG4gIGNvbG9yOiAjMzU1RjQ2OyAgLyogZm9yIGFjY2Vzc2liaWxpdHkgKi9cbn1cbiJdfQ== */"] });


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
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 15, vars: 0, consts: [[1, "container-fluid"], [1, "row"], [1, "navbar", "navbar-inverse"], [1, "container"], [1, "navbar-header"], [1, "navbar-brand"], ["src", "assets/images/doe-eere-logo.png", "alt", "", "usemap", "#logo", 1, "banner-logo"], ["name", "logo"], ["shape", "rect", "coords", "1,1,198,20", "href", "https://www.energy.gov", "alt", "Energy.gov"], ["shape", "rect", "coords", "2,22,198,75", "href", "https://www.energy.gov/eere/office-energy-efficiency-renewable-energy", "alt", "Office of Energy Efficiency and Renewable Energy"], [1, "banner-title"], ["routerLink", "/"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "map", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "area", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "area", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Building Data Tools");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".top-header[_ngcontent-%COMP%] {\n  background-color: #094F58;\n  background-image: url('datatools_header.jpg');\n  font-family: \"Roboto\", sans-serif;\n  color: white;\n  padding: 4px 52px;\n  min-height: 100px;\n  display: flex;\n  text-transform: uppercase;\n  margin-bottom: 3px;\n}\n.top-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-bottom: 0px;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 300;\n  font-size: 2rem;\n  padding-left: 5rem;\n  padding-bottom: 5px;\n  align-self: flex-end;\n}\n.top-header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 300;\n  font-size: 2.1rem;\n}\nh2[_ngcontent-%COMP%] {\n  color: #616161;\n  font-size: 22px;\n  font-weight: normal;\n  margin: 0;\n  padding: 4px 26px;\n  text-transform: uppercase;\n  font-family: \"Roboto Condensed\", sans-serif;\n}\n@media screen and (max-width: 599px) {\n  .top-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    padding-left: 4rem;\n    margin-top: 15px;\n  }\n}\n@media screen and (min-width: 600px) and (max-width: 800px) {\n  .top-header[_ngcontent-%COMP%] {\n    background-size: cover;\n    background-repeat: no-repeat;\n  }\n  .top-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    padding-left: 3rem;\n    padding-top: 3px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdGhlbWUuc2NzcyIsIi4uLy4uLy4uL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQkEsdUJBQUE7QUFDQSxZQUFBO0FDbkJBO0VBQ0UseUJBQUE7RUFDQSw2Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQ0U7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQUNKO0FBRUU7RUFDRSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFBSjtBQUlBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkNBQUE7QUFERjtBQUlBO0VBRUk7SUFDRSxrQkFBQTtJQUNBLGdCQUFBO0VBRko7QUFDRjtBQU9BO0VBQ0U7SUFDRSxzQkFBQTtJQUNBLDRCQUFBO0VBTEY7RUFPRTtJQUNFLGtCQUFBO0lBQ0EsZ0JBQUE7RUFMSjtBQUNGIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRyb2JvdG9Db25kZW5zZWQ6IFwiUm9ib3RvIENvbmRlbnNlZFwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcblxuJG1heFdpZHRoOiAxMjAwcHg7XG5cbiRwYWQ6IDI2cHg7XG5cbiRibHVlR3JheTogIzZlODU5MTtcbiRncmF5OiAjZWVlO1xuJG9yYW5nZTogI2Y1YWYxMztcblxuJGNvbG9yczpcbiAgIzAxNzRhMVxuICAjMDI0ODgwXG4gICMzNTVGNDZcbiAgIzA5NGY1OFxuICAkb3JhbmdlO1xuXG4kaG92ZXJPcGFjaXR5OiAwLjg7XG5cblxuLyogb2xkIGFuYWx5c2lzIGNvbG9yICovXG4vKiAjNDc4NjYyICovIiwiQGltcG9ydCBcInRoZW1lXCI7XG5cbi50b3AtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA5NEY1ODtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9kYXRhdG9vbHNfaGVhZGVyLmpwZ1wiKTtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDRweCAkcGFkKjI7XG4gIG1pbi1oZWlnaHQ6MTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcblxuICBoMSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6MzAwO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6NXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICB9XG5cbiAgLnRpdGxlIHtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6MzAwO1xuICAgIGZvbnQtc2l6ZTogMi4xcmVtO1xuICB9XG59XG5cbmgyIHtcbiAgY29sb3I6ICM2MTYxNjE7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiA0cHggJHBhZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgLnRvcC1oZWFkZXIge1xuICAgIGgxIHtcbiAgICAgIHBhZGRpbmctbGVmdDogNHJlbTtcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgfVxuICB9XG4gIFxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC50b3AtaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cbiAgICBoMSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gICAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgIH1cbiAgfVxufSJdfQ== */"] });


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
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");



class FooterComponent {
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 175, vars: 0, consts: [[1, "bpt"], ["fxLayout", "column", "fxHide.xs", ""], ["fxLayout", "row"], ["fxFlex", "25"], ["src", "assets/images/doe_eere_logo_footer.svg", "alt", "DOE EERE logo"], ["src", "assets/images/berkley_lab_logo_footer.svg", "alt", "LBNL logo"], ["fxFlex", "25", "fxLayout", "column", "fxLayoutAlign", "center"], ["src", "assets/images/nrel_logo_footer.svg", "alt", "NREL logo"], ["src", "assets/images/pnnl_logo_footer.svg", "alt", "PNNL logo"], ["fxLayout", "row", 1, "descriptions"], ["fxFlex", "25%"], ["fxLayout", "column", "fxHide.gt-xs", ""], ["fxFlex", "20%", 1, "small-footer-img"], [1, "footer-site"], [1, "programbar", 2, "background-color", "#666", "color", "#fff"], ["href", "mailto:BTODataTools@ee.doe.gov"], ["href", "https://www.energy.gov/eere/buildings/building-technologies-office"], [1, "footer-top"], [1, "container"], [1, "row"], [1, "col-md-3"], [1, "office"], [1, "energy-social-widget"], ["href", "https://www.facebook.com/eeregov", "aria-label", "Link to Facebook", "title", "Link to Facebook"], [1, "fab", "fa-facebook-f", "fa-lg", "circle-icon"], [1, "sr-only"], ["href", "https://twitter.com/eeregov", "aria-label", "Link to Twitter", "title", "Link to Twitter"], [1, "fab", "fa-twitter", "fa-lg", "circle-icon"], ["href", "https://www.youtube.com/user/USdepartmentofenergy", "aria-label", "Link to Youtube", "title", "Link to Youtube"], [1, "fab", "fa-youtube", "fa-lg", "circle-icon"], ["href", " https://www.linkedin.com/showcase/10310263/", "aria-label", "Link to Linkedin", "title", "Link to Linkedin"], [1, "fab", "fa-linkedin-in", "fa-lg", "circle-icon"], [1, "small"], ["href", "https://www.energy.gov"], ["src", "https://www.energy.gov/themes/particle/dist/app-drupal/assets/energy_white.png", "alt", "Energy.Gov", 1, "site-name"], [1, "footer-header"], ["href", "https://www.energy.gov/eere/about-office-energy-efficiency-and-renewable-energy"], ["href", "https://www.energy.gov/jobs/jobs"], ["href", "https://www.energy.gov/eere/office-energy-efficiency-renewable-energy"], ["href", "https://www1.eere.energy.gov/library/default.aspx"], ["href", "https://www.energy.gov/eere/about-us/office-energy-efficiency-and-renewable-energy-contacts"], ["href", "https://www.energy.gov/"], ["href", "https://www.energy.gov/budget-performance"], ["href", "https://www.directives.doe.gov"], ["href", "https://www.energy.gov/management/office-management/operational-management/freedom-information-act"], ["href", "https://www.energy.gov/ig/office-inspector-general"], ["href", "https://www.energy.gov/cio/office-chief-information-officer/services/guidance/privacy-program"], ["href", "https://www.energy.gov/osdbu/office-small-and-disadvantaged-business-utilization"], ["href", "https://www.energy.gov/about-us/staff-and-contractors"], ["href", "http://www.whitehouse.gov"], ["href", "http://www.usa.gov"], [1, "footer-bottom"], [1, "menu"], ["href", "https://www.energy.gov/about-us/web-policies"], ["href", "https://www.energy.gov/about-us/web-policies/privacy"], ["href", "https://www.energy.gov/diversity/services/protecting-civil-rights/no-fear-act"], ["href", "https://www.energy.gov/whistleblower-protection-and-nondisclosure-agreements"], ["href", "https://www.energy.gov/cio/department-energy-information-quality-guidelines"], ["href", "https://www.energy.gov/open-government"], ["href", "https://www.energy.gov/cio/office-chief-information-officer/services/assistive-technology/accessibility-standard-statement"], ["href", "https://doe.responsibledisclosure.com/hc/en-us"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "footer2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Driving Building Energy Performance with Data was developed to showcase tools and methods developed by Lawrence Berkeley National Laboratory, National Renewable Energy Laboratory, and Pacific Northwest National Laboratory with support from the U.S. Department of Energy's Building Technologies Office.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "U.S. Department of Energy's Office of Energy Efficiency and Renewable Energy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Lawrence Berkeley National Laboratory (LBNL) is a national laboratory of the U.S. Department of Energy, operated by the University of California.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "The National Renewable Energy Laboratory (NREL) is a national laboratory of the U.S. Department of Energy, Office of Energy Efficiency and Renewable Energy, operated by the Alliance for Sustainable Energy, LLC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Pacific Northwest National Laboratory (PNNL) is a national laboratory of the U.S. Department of Energy, operated by Battelle.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "footer2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Driving Building Energy Performance with Data was developed to showcase tools and methods developed by Lawrence Berkeley National Laboratory, National Renewable Energy Laboratory, and Pacific Northwest National Laboratory with support from the U.S. Department of Energy's Building Technologies Office.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " U.S. Department of Energy's Office of Energy Efficiency and Renewable Energy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Lawrence Berkeley National Laboratory (LBNL) is a national laboratory of the U.S. Department of Energy, operated by the University of California.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "The National Renewable Energy Laboratory (NREL) is a national laboratory of the U.S. Department of Energy, Office of Energy Efficiency and Renewable Energy, operated by the Alliance for Sustainable Energy, LLC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Pacific Northwest National Laboratory (PNNL) is a national laboratory of the U.S. Department of Energy, operated by Battelle.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "footer", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " \"Building Data Tools is a resource of the U.S. Department of Energy's Building Technologies Office.\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Building Technologies Office");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "OFFICE of");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " ENERGY EFFICIENCY AND RENEWABLE ENERGY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Forrestal Building");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " 1000 Independence Ave. SW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Washington DC 20585");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Link to Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Link to Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Link to Youtube");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Link to Linkedin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "An office of");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "About EERE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Careers and Internships");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "EERE Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Publications Library");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Contact EERE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Energy.gov Resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Budget & Performance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Directives, Delegations & Requirements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "FOIA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Inspector General");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Privacy Program");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Small Business");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Staff & Contractor Resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Federal Government");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "The White House");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "USA.gov");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "ul", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Web Policies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Privacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "No Fear Act");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Whistleblower Protection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Information Quality");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Open Gov");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Accessibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "a", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Vulnerability Disclosure Program");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__["DefaultShowHideDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"]], styles: ["footer2[_ngcontent-%COMP%] {\n  background-color: #eee;\n}\nstrong[_ngcontent-%COMP%] {\n  font-weight: 500;\n  padding: 14px 26px;\n}\n.descriptions[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  font-size: 11px;\n  padding: 14px 26px 8px;\n}\n.descriptions[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:not(:last-child) {\n  border-right: 3px solid #fff;\n}\n.bpt[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.fa-lg[_ngcontent-%COMP%] {\n  padding-top: 8px;\n}\nsection[_ngcontent-%COMP%] {\n  padding: 0 26px;\n}\nsection[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding-bottom: 25%;\n  position: relative;\n}\nsection[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  height: 100%;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\nsection[_ngcontent-%COMP%]:not(:last-child) {\n  border-right: 3px solid #fff;\n}\n.contact[_ngcontent-%COMP%] {\n  background-color: #6e8591;\n  color: #fff;\n  height: 21px;\n  padding: 0 26px;\n}\n.small-footer-img[_ngcontent-%COMP%] {\n  margin: 10px;\n  margin-top: 2rem;\n}\n@media screen and (max-width: 599px) {\n  section[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    padding: 10px;\n    border-bottom: 1px solid #fff;\n  }\n}\nfooter[_ngcontent-%COMP%] {\n  padding-top: 30px;\n  background-color: white;\n  font-family: \"Karla\", sans-serif;\n}\n.footer-top[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  font-family: \"Karla\", sans-serif;\n  font-size: 16px;\n  line-height: 1.65;\n}\n.footer-top[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\nul[_ngcontent-%COMP%] {\n  padding-left: 2rem;\n}\nul.menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: \"Karla\", sans-serif;\n  font-size: 12px;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.footer-bottom[_ngcontent-%COMP%] {\n  padding: 4rem 8rem;\n}\n.footer-bottom[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  padding-left: 25px;\n}\n.footer-top[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]   p.office[_ngcontent-%COMP%] {\n  line-height: 1.2em;\n  margin-bottom: 1.5rem;\n}\n.footer-top[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%]   p.footer-header[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdGhlbWUuc2NzcyIsIi4uLy4uLy4uL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQkEsdUJBQUE7QUFDQSxZQUFBO0FDbkJBO0VBQ0Usc0JESUs7QUNIUDtBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQUNGO0FBRUE7RUFDRSxlQUFBO0VBQ0Esc0JBQUE7QUFDRjtBQUNFO0VBQ0UsNEJBQUE7QUFDSjtBQUdBO0VBQ0UsaUJEbkJTO0VDb0JULGNBQUE7QUFBRjtBQUdBO0VBQ0UsZ0JBQUE7QUFBRjtBQUdBO0VBQ0UsZUFBQTtBQUFGO0FBRUU7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBQUo7QUFFSTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FBQU47QUFJRTtFQUNFLDRCQUFBO0FBRko7QUFNQTtFQUNFLHlCRDVDUztFQzZDVCxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFIRjtBQU1BO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBSEY7QUFNQTtFQUVJO0lBQ0UsYUFBQTtJQUNBLDZCQUFBO0VBSko7QUFDRjtBQVFBO0VBQ0UsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0FBTkY7QUFTQTtFQUNFLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBTkY7QUFTQTtFQUNFLFNBQUE7QUFORjtBQVNBO0VBQ0Usa0JBQUE7QUFORjtBQVNBO0VBQ0UsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQU5GO0FBU0E7RUFDRSxrQkFBQTtBQU5GO0FBU0E7RUFDRSxrQkFBQTtBQU5GO0FBU0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FBTkY7QUFTQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUFORiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcm9ib3RvQ29uZGVuc2VkOiBcIlJvYm90byBDb25kZW5zZWRcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG5cbiRtYXhXaWR0aDogMTIwMHB4O1xuXG4kcGFkOiAyNnB4O1xuXG4kYmx1ZUdyYXk6ICM2ZTg1OTE7XG4kZ3JheTogI2VlZTtcbiRvcmFuZ2U6ICNmNWFmMTM7XG5cbiRjb2xvcnM6XG4gICMwMTc0YTFcbiAgIzAyNDg4MFxuICAjMzU1RjQ2XG4gICMwOTRmNThcbiAgJG9yYW5nZTtcblxuJGhvdmVyT3BhY2l0eTogMC44O1xuXG5cbi8qIG9sZCBhbmFseXNpcyBjb2xvciAqL1xuLyogIzQ3ODY2MiAqLyIsIkBpbXBvcnQgXCJ0aGVtZVwiO1xuXG5mb290ZXIyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyYXk7XG59XG5cbnN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmc6IDE0cHggJHBhZDtcbn1cblxuLmRlc2NyaXB0aW9ucyA+IGRpdiB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcGFkZGluZzogMTRweCAkcGFkIDhweDtcblxuICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICNmZmY7XG4gIH1cbn1cblxuLmJwdCB7XG4gIG1heC13aWR0aDogJG1heFdpZHRoO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmZhLWxnIHtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cblxuc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDAgJHBhZDtcblxuICA+IGRpdiB7XG4gICAgcGFkZGluZy1ib3R0b206IDI1JTsgLy8gNC8xIGFzcGVjdCByYXRpb1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgID4gaW1nIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuXG4gICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgI2ZmZjtcbiAgfVxufVxuXG4uY29udGFjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRibHVlR3JheTtcbiAgY29sb3I6ICNmZmY7XG4gIGhlaWdodDogMjFweDtcbiAgcGFkZGluZzogMCAkcGFkO1xufVxuXG4uc21hbGwtZm9vdGVyLWltZyB7XG4gIG1hcmdpbjogMTBweDtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgc2VjdGlvbiB7XG4gICAgPiBkaXYge1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xuICAgIH1cbiAgfVxufVxuXG5mb290ZXIge1xuICBwYWRkaW5nLXRvcDozMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICBmb250LWZhbWlseTogJ0thcmxhJywgc2Fucy1zZXJpZjtcbn1cblxuLmZvb3Rlci10b3AgLmNvbnRhaW5lciAucm93IHtcbiAgZm9udC1mYW1pbHk6ICdLYXJsYScsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNjU7XG59XG5cbi5mb290ZXItdG9wIC5jb250YWluZXIgLnJvdyAuY29sLW1kLTMgcCB7XG4gIG1hcmdpbjogMDtcbn1cblxudWwge1xuICBwYWRkaW5nLWxlZnQ6IDJyZW07XG59XG5cbnVsLm1lbnUgbGkgYSB7XG4gIGZvbnQtZmFtaWx5OiAnS2FybGEnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5mb290ZXItYm90dG9tIHtcbiAgcGFkZGluZzogNHJlbSA4cmVtO1xufVxuXG4uZm9vdGVyLWJvdHRvbSAuY29udGFpbmVyIHtcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xufVxuXG4uZm9vdGVyLXRvcCAuY29udGFpbmVyIC5yb3cgLmNvbC1tZC0zIHAub2ZmaWNlIHtcbiAgbGluZS1oZWlnaHQ6IDEuMmVtO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbi5mb290ZXItdG9wIC5jb250YWluZXIgLnJvdyAuY29sLW1kLTMgcC5mb290ZXItaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */"] });


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
    } }, directives: [_tools_overview_component__WEBPACK_IMPORTED_MODULE_1__["ToolsOverviewComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited {\n  color: #024880;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdGhlbWUuc2NzcyIsIi4uLy4uLy4uLy4uL21hbmFnZW1lbnQtY29tcGxpYW5jZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQkEsdUJBQUE7QUFDQSxZQUFBO0FDbkJBO0VBQ0UsY0FBQTtBQUNGIiwiZmlsZSI6Im1hbmFnZW1lbnQtY29tcGxpYW5jZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRyb2JvdG9Db25kZW5zZWQ6IFwiUm9ib3RvIENvbmRlbnNlZFwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcblxuJG1heFdpZHRoOiAxMjAwcHg7XG5cbiRwYWQ6IDI2cHg7XG5cbiRibHVlR3JheTogIzZlODU5MTtcbiRncmF5OiAjZWVlO1xuJG9yYW5nZTogI2Y1YWYxMztcblxuJGNvbG9yczpcbiAgIzAxNzRhMVxuICAjMDI0ODgwXG4gICMzNTVGNDZcbiAgIzA5NGY1OFxuICAkb3JhbmdlO1xuXG4kaG92ZXJPcGFjaXR5OiAwLjg7XG5cblxuLyogb2xkIGFuYWx5c2lzIGNvbG9yICovXG4vKiAjNDc4NjYyICovIiwiQGltcG9ydCBcInRoZW1lXCI7XG5cbmEsIGE6dmlzaXRlZCB7XG4gIGNvbG9yOiBudGgoJGNvbG9ycywgMik7XG59XG4iXX0= */"] });


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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Learn more about ENERGY STAR Portfolio Manager ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Learn more about Audit Template.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_tools_overview_component__WEBPACK_IMPORTED_MODULE_1__["ToolsOverviewComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited {\n  color: #0174a1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdGhlbWUuc2NzcyIsIi4uLy4uLy4uLy4uL2NvbGxlY3Rpb24tcmVwb3J0aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CQSx1QkFBQTtBQUNBLFlBQUE7QUNuQkE7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoiY29sbGVjdGlvbi1yZXBvcnRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkcm9ib3RvQ29uZGVuc2VkOiBcIlJvYm90byBDb25kZW5zZWRcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG5cbiRtYXhXaWR0aDogMTIwMHB4O1xuXG4kcGFkOiAyNnB4O1xuXG4kYmx1ZUdyYXk6ICM2ZTg1OTE7XG4kZ3JheTogI2VlZTtcbiRvcmFuZ2U6ICNmNWFmMTM7XG5cbiRjb2xvcnM6XG4gICMwMTc0YTFcbiAgIzAyNDg4MFxuICAjMzU1RjQ2XG4gICMwOTRmNThcbiAgJG9yYW5nZTtcblxuJGhvdmVyT3BhY2l0eTogMC44O1xuXG5cbi8qIG9sZCBhbmFseXNpcyBjb2xvciAqL1xuLyogIzQ3ODY2MiAqLyIsIkBpbXBvcnQgXCJ0aGVtZVwiO1xuXG5hLCBhOnZpc2l0ZWQge1xuICBjb2xvcjogbnRoKCRjb2xvcnMsIDEpO1xufVxuIl19 */"] });


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
ToolsOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToolsOverviewComponent, selectors: [["app-tools-overview"]], ngContentSelectors: _c1, decls: 5, vars: 4, consts: [["fxLayout.gt-xs", "row", "fxLayout.xs", "column", 1, "bpt"], [1, "summary", 3, "fxFlex", "fxFlex.xs"], [1, "details", 3, "fxFlex", "fxFlex.xs"]], template: function ToolsOverviewComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / 3)("fxFlex.xs", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 200 / 3)("fxFlex.xs", 100);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"]], styles: [".bpt[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.summary[_ngcontent-%COMP%], .details[_ngcontent-%COMP%] {\n  display: flex;\n  font-size: 16px;\n  line-height: 23px;\n  padding: 26px;\n  position: relative;\n}\n.summary[_ngcontent-%COMP%]  > div, .details[_ngcontent-%COMP%]  > div {\n  width: 100%;\n}\n.summary[_ngcontent-%COMP%]  > div a, .summary[_ngcontent-%COMP%]  > div a:visited, .details[_ngcontent-%COMP%]  > div a, .details[_ngcontent-%COMP%]  > div a:visited {\n  font-weight: bold;\n  white-space: nowrap;\n}\n.summary[_ngcontent-%COMP%]     h3 {\n  font-size: 18px;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n.summary[_ngcontent-%COMP%]     p {\n  color: #5b5b5b;\n}\n.summary[_ngcontent-%COMP%]     > div::after {\n  border-right: 1px solid #b2b2b2;\n  content: \"\";\n  height: calc(100% - 2 * 26px);\n  position: absolute;\n  right: 0;\n  top: 26px;\n}\n.details[_ngcontent-%COMP%]     > div > div {\n  border-bottom: 2px solid #eee;\n}\n.details[_ngcontent-%COMP%]     > div:last-child {\n  padding-bottom: 52px;\n}\n.details[_ngcontent-%COMP%]     .logo {\n  flex: 1 1 100%;\n  max-width: 30%;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-width: 126px;\n  padding: 26px 13px;\n}\n.details[_ngcontent-%COMP%]     .logo div {\n  color: #5b5b5b;\n  font-weight: bold;\n  padding-bottom: 13px;\n}\n.details[_ngcontent-%COMP%]     .logo div + img {\n  cursor: auto;\n  max-height: 120px;\n  max-width: 120px;\n}\n.details[_ngcontent-%COMP%]     .logo a {\n  width: 100%;\n}\n.details[_ngcontent-%COMP%]     .logo img {\n  cursor: pointer;\n  max-width: 100%;\n}\n.details[_ngcontent-%COMP%]     .description {\n  flex: 1 1 100%;\n  max-width: 70%;\n  color: #5b5b5b;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 13px 0 13px 26px;\n}\n.details[_ngcontent-%COMP%]     .description p:last-child {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3N0eWxlcy9fdGhlbWUuc2NzcyIsIi4uLy4uLy4uL3Rvb2xzLW92ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CQSx1QkFBQTtBQUNBLFlBQUE7QUNuQkE7RUFDRSxpQkREUztFQ0VULGNBQUE7QUFDRjtBQUVBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFEUEk7RUNRSixrQkFBQTtBQUNGO0FBQ0U7RUFDRSxXQUFBO0FBQ0o7QUFDSTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFDTjtBQUtFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFGSjtBQUtFO0VBQ0UsY0FBQTtBQUhKO0FBTUU7RUFDRSwrQkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNEckNFO0FDaUNOO0FBVUk7RUFDRSw2QkFBQTtBQVBOO0FBVUk7RUFDRSxvQkFBQTtBQVJOO0FBY0U7RUFDRSxjQUFBO0VBQ0EsY0FKVTtFQU1WLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBYko7QUFlSTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBYk47QUFlTTtFQUVFLFlBQUE7RUFDQSxpQkFGTztFQUdQLGdCQUhPO0FBWGY7QUFrQkk7RUFDRSxXQUFBO0FBaEJOO0FBbUJJO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUFqQk47QUFxQkU7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUVBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FBcEJKO0FBc0JJO0VBQ0UsU0FBQTtBQXBCTiIsImZpbGUiOiJ0b29scy1vdmVydmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRyb2JvdG9Db25kZW5zZWQ6IFwiUm9ib3RvIENvbmRlbnNlZFwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcblxuJG1heFdpZHRoOiAxMjAwcHg7XG5cbiRwYWQ6IDI2cHg7XG5cbiRibHVlR3JheTogIzZlODU5MTtcbiRncmF5OiAjZWVlO1xuJG9yYW5nZTogI2Y1YWYxMztcblxuJGNvbG9yczpcbiAgIzAxNzRhMVxuICAjMDI0ODgwXG4gICMzNTVGNDZcbiAgIzA5NGY1OFxuICAkb3JhbmdlO1xuXG4kaG92ZXJPcGFjaXR5OiAwLjg7XG5cblxuLyogb2xkIGFuYWx5c2lzIGNvbG9yICovXG4vKiAjNDc4NjYyICovIiwiQGltcG9ydCBcInRoZW1lXCI7XG5cbi5icHQge1xuICBtYXgtd2lkdGg6ICRtYXhXaWR0aDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5zdW1tYXJ5LCAuZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gIHBhZGRpbmc6ICRwYWQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAmOjpuZy1kZWVwID4gZGl2IHtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIGEsIGE6dmlzaXRlZCB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgfVxuICB9XG59XG5cbi5zdW1tYXJ5IDo6bmctZGVlcCB7XG4gIGgzIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG5cbiAgcCB7XG4gICAgY29sb3I6ICM1YjViNWI7XG4gIH1cblxuICA+IGRpdjo6YWZ0ZXIge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNiMmIyYjI7XG4gICAgY29udGVudDogJyc7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyICogI3skcGFkfSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogJHBhZDtcbiAgfVxufVxuXG4uZGV0YWlscyA6Om5nLWRlZXAge1xuICA+IGRpdiB7XG4gICAgPiBkaXYge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlZWU7XG4gICAgfVxuXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAkcGFkICogMjtcbiAgICB9XG4gIH1cblxuICAkbG9nb1dpZHRoOiAzMCU7XG5cbiAgLmxvZ28ge1xuICAgIGZsZXg6IDEgMSAxMDAlO1xuICAgIG1heC13aWR0aDogJGxvZ29XaWR0aDtcblxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1pbi13aWR0aDogMTAwcHggKyAkcGFkO1xuICAgIHBhZGRpbmc6ICRwYWQgJHBhZCAvIDI7XG5cbiAgICBkaXYge1xuICAgICAgY29sb3I6ICM1YjViNWI7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAkcGFkIC8gMjtcblxuICAgICAgJiArIGltZyB7XG4gICAgICAgICRzaXplOiAxMjBweDtcbiAgICAgICAgY3Vyc29yOiBhdXRvO1xuICAgICAgICBtYXgtaGVpZ2h0OiAkc2l6ZTtcbiAgICAgICAgbWF4LXdpZHRoOiAkc2l6ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG5cbiAgLmRlc2NyaXB0aW9uIHtcbiAgICBmbGV4OiAxIDEgMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCUgLSAkbG9nb1dpZHRoO1xuXG4gICAgY29sb3I6ICM1YjViNWI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6ICRwYWQgLyAyIDAgJHBhZCAvIDIgJHBhZDtcblxuICAgIHA6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


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
/* harmony import */ var _tools_overview_analysis_evaluation_analysis_evaluation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tools-overview/analysis-evaluation/analysis-evaluation.component */ "aP66");
/* harmony import */ var _tools_overview_collection_reporting_collection_reporting_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tools-overview/collection-reporting/collection-reporting.component */ "pyga");
/* harmony import */ var _tools_overview_data_standardization_data_standardization_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tools-overview/data-standardization/data-standardization.component */ "1qPM");
/* harmony import */ var _tools_overview_developers_developers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tools-overview/developers/developers.component */ "6JCy");
/* harmony import */ var _tools_overview_goals_outcomes_goals_outcomes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tools-overview/goals-outcomes/goals-outcomes.component */ "FLSU");
/* harmony import */ var _tools_overview_help_desk_help_desk_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tools-overview/help-desk/help-desk.component */ "9uLu");
/* harmony import */ var _tools_overview_management_compliance_management_compliance_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tools-overview/management-compliance/management-compliance.component */ "p7J/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");











const routes = [{
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    }, {
        path: 'data-standardization',
        component: _tools_overview_data_standardization_data_standardization_component__WEBPACK_IMPORTED_MODULE_4__["DataStandardizationComponent"]
    }, {
        path: 'help-desk',
        component: _tools_overview_help_desk_help_desk_component__WEBPACK_IMPORTED_MODULE_7__["HelpDeskComponent"]
    }, {
        path: 'collection-reporting',
        component: _tools_overview_collection_reporting_collection_reporting_component__WEBPACK_IMPORTED_MODULE_3__["CollectionReportingComponent"]
    }, {
        path: 'audit-template',
        loadChildren: () => __webpack_require__.e(/*! import() | audit-template */ "audit-template").then(__webpack_require__.bind(null, /*! ./tool/audit-template/audit-template.module */ "VaLZ")).then(m => m.AuditTemplateModule)
    }, {
        path: 'management-compliance',
        component: _tools_overview_management_compliance_management_compliance_component__WEBPACK_IMPORTED_MODULE_8__["ManagementComplianceComponent"]
    }, {
        path: 'seed',
        loadChildren: () => __webpack_require__.e(/*! import() | seed */ "seed").then(__webpack_require__.bind(null, /*! ./tool/seed/seed.module */ "Dxw6")).then(m => m.SeedModule)
    }, {
        path: 'analysis-evaluation',
        component: _tools_overview_analysis_evaluation_analysis_evaluation_component__WEBPACK_IMPORTED_MODULE_2__["AnalysisEvaluationComponent"]
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
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


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
        this.colSize = [33, 32.9, 33];
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
const appTitle = 'Building Data Tools';
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