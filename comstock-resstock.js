(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comstock-resstock"],{

/***/ "Q2jj":
/*!*****************************************************************!*\
  !*** ./src/app/tool/comstock-resstock/goals/goals.component.ts ***!
  \*****************************************************************/
/*! exports provided: GoalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalsComponent", function() { return GoalsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class GoalsComponent {
    constructor() {
    }
}
GoalsComponent.ɵfac = function GoalsComponent_Factory(t) { return new (t || GoalsComponent)(); };
GoalsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GoalsComponent, selectors: [["ng-component"]], decls: 4, vars: 0, consts: [[1, "mat-h2", "mb-4"]], template: function GoalsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Goals & Outcomes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Use the ComStock and ResStock tools to gain high-level insights into energy use of the building stock in a particular geographic area (down to the county resolution). Understand your area\u2019s building stock performance and characteristics and analyze the scenarios of interest to you -- including the feasibility and savings potential of a building performance standard.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "SuGL":
/*!***********************************************************************!*\
  !*** ./src/app/tool/comstock-resstock/comstock-resstock.component.ts ***!
  \***********************************************************************/
/*! exports provided: ComstockResstockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComstockResstockComponent", function() { return ComstockResstockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_tool_tool_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/tool/tool.component */ "NLSS");


class ComstockResstockComponent {
    constructor() {
        this.navItems = [{
                title: 'ComStock & ResStock',
                icon: 'fa-info-circle',
                route: '/comstock-resstock'
            }, {
                title: 'Goals & Outcomes',
                icon: 'fa-bullseye',
                route: 'goals'
            }, {
                title: 'Resources',
                icon: 'fa-file-alt',
                route: 'resources'
            }, {
                title: 'Links for Developers',
                icon: 'fa-wrench',
                route: 'dev'
            }, {
                title: 'Get Help',
                icon: 'fa-comments',
                route: 'help'
            }];
    }
}
ComstockResstockComponent.ɵfac = function ComstockResstockComponent_Factory(t) { return new (t || ComstockResstockComponent)(); };
ComstockResstockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ComstockResstockComponent, selectors: [["ng-component"]], decls: 2, vars: 1, consts: [[3, "navItems"], ["slot", "logo", "src", "assets/images/com-resstock-logos.svg", "alt", "ComStock & ResStock logos"]], template: function ComstockResstockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-tool", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("navItems", ctx.navItems);
    } }, directives: [_shared_components_tool_tool_component__WEBPACK_IMPORTED_MODULE_1__["ToolComponent"]], encapsulation: 2 });


/***/ }),

/***/ "UmRS":
/*!***************************************************************!*\
  !*** ./src/app/tool/comstock-resstock/help/help.component.ts ***!
  \***************************************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HelpComponent {
    constructor() {
    }
}
HelpComponent.ɵfac = function HelpComponent_Factory(t) { return new (t || HelpComponent)(); };
HelpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HelpComponent, selectors: [["ng-component"]], decls: 4, vars: 0, consts: [[1, "mat-h2", "mb-4"]], template: function HelpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Get Help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Contact BTODataTools@ee.doe.gov for help getting started with or using ComStock & ResStock.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "eGGF":
/*!********************************************************************!*\
  !*** ./src/app/tool/comstock-resstock/comstock-resstock.module.ts ***!
  \********************************************************************/
/*! exports provided: ComstockResstockModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComstockResstockModule", function() { return ComstockResstockModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/shared.module */ "PCNd");
/* harmony import */ var _comstock_resstock_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comstock-resstock-routing.module */ "hFKf");
/* harmony import */ var _comstock_resstock_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comstock-resstock.component */ "SuGL");
/* harmony import */ var _dev_dev_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dev/dev.component */ "xeqQ");
/* harmony import */ var _goals_goals_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./goals/goals.component */ "Q2jj");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./help/help.component */ "UmRS");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "p+ID");
/* harmony import */ var _resources_resources_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resources/resources.component */ "eJQM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class ComstockResstockModule {
}
ComstockResstockModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: ComstockResstockModule });
ComstockResstockModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ factory: function ComstockResstockModule_Factory(t) { return new (t || ComstockResstockModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _comstock_resstock_routing_module__WEBPACK_IMPORTED_MODULE_2__["ComstockResstockRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](ComstockResstockModule, { declarations: [_comstock_resstock_component__WEBPACK_IMPORTED_MODULE_3__["ComstockResstockComponent"],
        _dev_dev_component__WEBPACK_IMPORTED_MODULE_4__["DevComponent"],
        _goals_goals_component__WEBPACK_IMPORTED_MODULE_5__["GoalsComponent"],
        _help_help_component__WEBPACK_IMPORTED_MODULE_6__["HelpComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _resources_resources_component__WEBPACK_IMPORTED_MODULE_8__["ResourcesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _comstock_resstock_routing_module__WEBPACK_IMPORTED_MODULE_2__["ComstockResstockRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]] }); })();


/***/ }),

/***/ "eJQM":
/*!*************************************************************************!*\
  !*** ./src/app/tool/comstock-resstock/resources/resources.component.ts ***!
  \*************************************************************************/
/*! exports provided: ResourcesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesComponent", function() { return ResourcesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");


class ResourcesComponent {
    constructor() {
    }
}
ResourcesComponent.ɵfac = function ResourcesComponent_Factory(t) { return new (t || ResourcesComponent)(); };
ResourcesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResourcesComponent, selectors: [["ng-component"]], decls: 147, vars: 0, consts: [[1, "mat-h2", "mb-4"], [1, "mb-1"], [1, "color-3"], [1, "mat-h4"], ["href", "https://resstock.nrel.gov/dataviewer", "target", "_blank", 1, "color-3"], ["href", "https://resstock.nrel.gov/factsheets/", "target", "_blank", 1, "color-3"], [1, "mat-h5"], ["href", "https://doi.org/10.1016/j.enbuild.2020.110611", "target", "_blank", 1, "color-3"], ["href", "https://www.mdpi.com/1996-1073/13/19/5192", "target", "_blank", 1, "color-3"], ["href", "https://doi.org/10.1016/j.apenergy.2020.115533", "target", "_blank", 1, "color-3"], ["href", "https://doi.org/10.2172/1414819", "target", "_blank", 1, "color-3"], ["href", "http://ibpsa-usa.org/index.php/ibpusa/article/view/385", "target", "_blank", 1, "color-3"], ["href", "https://www.ashrae.org/File%20Library/Conferences/Specialty%20Conferences/2018%20Building%20Performance%20Analysis%20Conference%20and%20SimBuild/Papers/C047.pdf", "target", "_blank", 1, "color-3"], ["href", "https://doi.org/10.1016/j.enpol.2019.01.054", 1, "color-3"], ["href", "https://www.nrel.gov/docs/fy19osti/71727.pdf", "target", "_blank", 1, "color-3"], ["href", "https://www.osti.gov/servlets/purl/1398250", "target", "_blank", 1, "color-3"], ["href", "https://www.osti.gov/servlets/purl/1436972", "target", "_blank", 1, "color-3"], ["href", "https://www.energy.gov/eere/buildings/downloads/resstock-building-america-webinar", "target", "_blank", 1, "color-3"], [1, "mat-h6"], ["href", "https://www.osti.gov/biblio/1668858", "target", "_blank", 1, "color-3"], ["href", "https://scholarworks.rit.edu/theses/10389", "target", "_blank", 1, "color-3"], ["href", "https://www.osti.gov/biblio/1602705", "target", "_blank", 1, "color-3"], ["href", "https://doi.org/10.2172/1576489", "target", "_blank", 1, "color-3"], ["href", "https://www.osti.gov/servlets/purl/1573781", "target", "_blank", 1, "color-3"], ["href", "https://doi.org/10.2172/1465659", "target", "_blank", 1, "color-3"], ["href", "https://doi.org/10.2172/1471555", 1, "color-3"], ["href", "https://www.osti.gov/biblio/1524757", "target", "_blank", 1, "color-3"], ["href", "https://www.osti.gov/servlets/purl/1479631", "target", "_blank", 1, "color-3"], ["href", "https://public.tableau.com/shared/SM9R5YT4N?:display_count=yes&:showVizHome=no", 1, "color-3"], ["href", "https://comstock.nrel.gov/page/measures", "target", "_blank", 1, "color-3"], ["href", "https://comstock.nrel.gov/page/faqs", "target", "_blank", 1, "color-3"]], template: function ResourcesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "The following documents are available to help you understand and use ResStock and ComStock:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-panel-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " ResStock Resources ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Data Viewer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Explore existing analysis results on ResStock\u2019s interactive website. State-level results can be filtered to identify the savings potential in various segments of the housing stock, whether that is homes of a certain vintage, homes with a specific heating fuel type, or homes with a certain type of wall construction type.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "State Fact Sheets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "State audiences can benefit from the series of fact sheets developed for the 48 contiguous U.S. states. Each fact sheet presents the potential for economic energy and utility bill savings for the state. The top ten energy savings home improvements are highlighted. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Publications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Latest publications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Das, S., Wilson, E., Williams, E. (2020) The impact of behavioral and geographic heterogeneity on residential-sector carbon abatement costs. Energy and Buildings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "https://doi.org/10.1016/j.enbuild.2020.110611");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Speake, A.; Donohoo-Vallett, P.; Wilson, E.; Chen, E.; Christensen, C. Residential Natural Gas Demand Response Potential during Extreme Cold Events in Electricity-Gas Coupled Energy Systems. Energies 2020, 13, 5192. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "https://doi.org/10.3390/en13195192");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Winkler, J., Das, S., Earle, L., Burkett, L., Robertson, J., Roberts, D., & Booten, C. (2020). Impact of installation faults in air conditioners and heat pumps in single-family homes on U.S. energy usage. Applied Energy, 278, 115533. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "https://doi.org/10.1016/j.apenergy.2020.115533");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Primary ResStock publications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Wilson, E. J. H., Christensen, C. B., Horowitz, S. G., Robertson, J. J., & Maguire, J. B. (2017). Energy Efficiency Potential in the US Single-Family Housing Stock (No. NREL/TP-5500-68670). National Renewable Energy Lab.(NREL), Golden, CO (United States). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "DOI: 10.2172/1414819");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Wilson, E., Christensen, C., Horowitz, S., & Horsey, H. (2016). \"A high-granularity approach to modeling energy consumption and savings potential in the US residential building stock.\" Proceedings of SimBuild, 6(1). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "http://ibpsa-usa.org/index.php/ibpusa/article/view/385");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Wilson, E., & Merket, N. (2018) \"An Interactive Visualization Tool for Large-Scale Building Stock Modeling.\" Proceedings of 2018 Building Performance Modeling Conference and SimBuild (338). ASHRAE and IBPSA-USA. Chicago, IL (United States). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Wilson, E. J. H., Harris, C. B., Robertson, J. J., & Agan, J. (2019). Evaluating energy efficiency potential in low-income households: A flexible and granular approach. Energy Policy, 129, 710-737. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "DOI: 10.1016/j.enpol.2019.01.054");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Preparing for a City-Scale Building Energy Upgrade Analysis: A Case Study for New York City (July 2019). National Renewable Energy Laboratory. NREL/MK-5500-71727. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "https://www.nrel.gov/docs/fy19osti/71727.pdf");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Fact Sheets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Wilson, E. J. H. (2017) ResStock - Targeting Energy and Cost Savings for U.S. Homes. (Fact Sheet) (No. NREL/FS-5500-68653). National Renewable Energy Lab.(NREL), Golden, CO (United States). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "https://www.osti.gov/biblio/1398250");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Wilson, E. J. H., Harris, C., & Robertson, J. J. (2018) Evaluating Energy Efficiency Potential in Low-Income Households. (Fact Sheet) (No. NREL/FS-5500-70659). National Renewable Energy Lab.(NREL), Golden, CO (United States). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "https://www.osti.gov/biblio/1436972");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Recorded webinars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "March 29, 2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Building America webinar: ResStock \u2013 Evaluating Home Performance Upgrades Across the U.S. Residential Building Stock ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "https://www.energy.gov/eere/buildings/downloads/resstock-building-america-webinar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Other related publications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Gerke, B.F., Zhang, C., Satchwell, A., Murthy, S., Piette, M.A., Present, E., Wilson, E., Speake, A. and Adhikari, R., 2020. Modeling the Interaction Between Energy Efficiency and Demand Response on Regional Grid Scales. Presented at the 2020 ACEEE Summer Study on Energy Efficiency in Buildings, 17-21 August 2020. (No. NREL/CP-5500-77423). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "https://www.osti.gov/biblio/1668858");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Das, Saptarshi, \"Effects of heterogeneity, technological progress and interaction on carbon mitigation costs\" (2020). Thesis. Rochester Institute of Technology. Accessed from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "https://scholarworks.rit.edu/theses/10389");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Murphy, C., Hotchkiss, E. L., Anderson, K. H., Barrows, C. P., Cohen, S. M., Dalvi, S., ... & Wilson, E. J. (2020). Adapting Existing Energy Planning, Simulation, and Operational Models for Resilience Analysis (No. NREL/TP-6A20-74241). National Renewable Energy Lab.(NREL), Golden, CO (United States). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "10.2172/1602705");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Mims Frick, N., Wilson, E. J., Reyna, J., Parker, A. S., Present, E. K., Kim, J., ... & Eckman, T. (2019). End-Use Load Profiles for the US Building Stock: Market Needs, Use Cases, and Data Gaps (No. NREL/TP-5500-75215; DOE/GO-102019-5217). National Renewable Energy Lab.(NREL), Golden, CO (United States). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "10.2172/1576489");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Christensen, Dane T, Becker, William L, Speake, Andrew, McCabe, Kevin, Bench Reese, Samantha R, Maguire, Jeffrey B, Cutler, Dylan S, and Dorsey, Caitlin. (2019) \"Geothermal-Enabled Zero Energy Electric Community\u2014An Integrated System Design Study: Preprint\". Presented at the Geothermal Resources Council (GRC) Annual Meeting & Expo, 15-18 September 2019, Palm Springs, California, United States. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "https://www.osti.gov/servlets/purl/1573781");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Hale, E. T., Horsey, H. R., Muratori, M., Wilson, E. J., Borlaug, B. A., Christensen, C. B., ... & Rossol, M. N. (2018). The Demand-Side Grid (dsgrid) Model Documentation (No. NREL/TP-6A20-71492). National Renewable Energy Lab.(NREL), Golden, CO (United States). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "DOI: 10.2172/1465659");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "DOI: 10.2172/1471555");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Podkaminer, Kara, Valerie Nubbe, Ben King, Ookie Ma, Jared Langevin, John R. Mayernik, Chioke Harris, and Eric J. Wilson. \"Is Every kWh the Same? How Do Energy Efficiency Measures Stack Up Across Regions?\" Presented at the 2018 ACEEE Summer Study on Energy Efficiency in Buildings, 12-17 August 2018, Pacific Grove, California (No. NREL/CP-5500-72080). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "https://www.osti.gov/biblio/1524757");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Saxena, M., Coffey, B., May-Ostendorp, P., Rasin, J., Wilson, E. J., Horowitz, S. G. (2018). \"Simplifying Energy Efficiency for Homeowners-Results from a California Utility's Pilot Study of a Scalable Solution to Assess Retrofit and Solar Opportunities: Preprint\" Presented at the 2018 ACEEE Summer Study on Energy Efficiency in Buildings, 12-17 August 2018, Pacific Grove, California (No. NREL/CP-5500-72176). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "https://www.osti.gov/biblio/1479631");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Data Dashboards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Tabular dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " with state-by-state technical and economic savings results for all measures and packages from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "DOI: 10.2172/1414819");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "mat-panel-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " ComStock Resources ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Data Viewer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Explore existing analysis results on ComStock\u2019s interactive website. State-level results can be filtered to identify the savings potential in various segments of the commercial building stock, whether that is buildings of a certain vintage, specific heating fuel type, or in a specific state and climate zone.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Energy Conservation Measure Glossary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Review the measures currently supported in the current (V1) national scale ComStock release and the conditions determining applicability of the measure. Links are included to the source code for deep dives on the modeling assumptions and implementations. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "FAQs, Known Bugs, and Planned Improvements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Learn the answers to frequently asked questions, find out about known bugs in the user interface or data set, and learn about improvements and bug fixes that are in the works or planned for the future. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Publications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Coming Soon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelTitle"]], encapsulation: 2 });


/***/ }),

/***/ "hFKf":
/*!****************************************************************************!*\
  !*** ./src/app/tool/comstock-resstock/comstock-resstock-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: ComstockResstockRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComstockResstockRoutingModule", function() { return ComstockResstockRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _comstock_resstock_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comstock-resstock.component */ "SuGL");
/* harmony import */ var _dev_dev_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dev/dev.component */ "xeqQ");
/* harmony import */ var _goals_goals_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./goals/goals.component */ "Q2jj");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./help/help.component */ "UmRS");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "p+ID");
/* harmony import */ var _resources_resources_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./resources/resources.component */ "eJQM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









const routes = [{
        path: '',
        component: _comstock_resstock_component__WEBPACK_IMPORTED_MODULE_1__["ComstockResstockComponent"],
        children: [{
                path: '',
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
            }, {
                path: 'goals',
                component: _goals_goals_component__WEBPACK_IMPORTED_MODULE_3__["GoalsComponent"]
            }, {
                path: 'resources',
                component: _resources_resources_component__WEBPACK_IMPORTED_MODULE_6__["ResourcesComponent"]
            }, {
                path: 'dev',
                component: _dev_dev_component__WEBPACK_IMPORTED_MODULE_2__["DevComponent"]
            }, {
                path: 'help',
                component: _help_help_component__WEBPACK_IMPORTED_MODULE_4__["HelpComponent"]
            }]
    }];
class ComstockResstockRoutingModule {
}
ComstockResstockRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: ComstockResstockRoutingModule });
ComstockResstockRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ factory: function ComstockResstockRoutingModule_Factory(t) { return new (t || ComstockResstockRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ComstockResstockRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "p+ID":
/*!***************************************************************!*\
  !*** ./src/app/tool/comstock-resstock/home/home.component.ts ***!
  \***************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");


class HomeComponent {
    constructor() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["ng-component"]], decls: 31, vars: 0, consts: [["fxLayout", "row"], ["fxFlex", "60"], [1, "bold"], ["href", "https://resstock.nrel.gov/", "target", "_blank", 1, "color-3"], ["href", "https://comstock.nrel.gov/", "target", "_blank", 1, "color-3"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ComStock and ResStock are building stock-level diagnostic tools. States, municipalities, utilities and manufacturers can use them to identify high-impact improvements and make better program decisions.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "With ComStock and ResStock, you can easily:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Discover how buildings can contribute to emissions targets.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Identify cost-effective upgrades for buildings in your area.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "See the potential savings from individual segments, like buildings of a certain age or with certain heating fuels.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "View state-specific fact sheets with potential savings and top upgrade measures.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Analyze custom scenarios \u2014 evaluate the potential of specific technologies, define your own cost-effectiveness euations, or get a high-granularity picture of your area's potential.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Visualize data and results.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Leverage expert support from DOE and Lawrence Berkeley National Laboratory.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Get started by signing up for a free ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "ResStock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "ComStock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " account.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "To learn more, view the additional resources on this page or contact BTODataTools@ee.doe.gov.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"]], encapsulation: 2 });


/***/ }),

/***/ "xeqQ":
/*!*************************************************************!*\
  !*** ./src/app/tool/comstock-resstock/dev/dev.component.ts ***!
  \*************************************************************/
/*! exports provided: DevComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevComponent", function() { return DevComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");


class DevComponent {
    constructor() {
    }
}
DevComponent.ɵfac = function DevComponent_Factory(t) { return new (t || DevComponent)(); };
DevComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DevComponent, selectors: [["ng-component"]], decls: 17, vars: 0, consts: [[1, "mat-h2", "mb-4"], [1, "mb-1"], [1, "color-3"], ["href", "https://github.com/nrel/comstock", "target", "_blank", 1, "color-3"]], template: function DevComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Links for Developers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-panel-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " ResStock ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Use the free and open-source software yourself (or partner with the National Renewable Energy Laboratory or a third-party consultant). Analyze the scenarios of interest to you, whether you wish to evaluate the potential of a specific technology, define your own cost-effectiveness equations, or plug in hyperlocal data to get a high-granularity picture of the potential in a city or utility service area. Analysis results can be privately uploaded to the ResStock website for visualization.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-expansion-panel", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-panel-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " ComStock ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Gain insights on the methodology and review the code and resource files used to generate the national scale analysis from the public ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "ComStock GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " repository.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelTitle"]], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=comstock-resstock.js.map