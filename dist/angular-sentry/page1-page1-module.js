(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page1-page1-module"],{

/***/ "5dPE":
/*!***********************************************!*\
  !*** ./src/app/page1/page1-routing.module.ts ***!
  \***********************************************/
/*! exports provided: Page1RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page1RoutingModule", function() { return Page1RoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _page1_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page1.component */ "w0JI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{ path: '', component: _page1_component__WEBPACK_IMPORTED_MODULE_1__["Page1Component"] }];
class Page1RoutingModule {
}
Page1RoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: Page1RoutingModule });
Page1RoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function Page1RoutingModule_Factory(t) { return new (t || Page1RoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](Page1RoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "Tul/":
/*!***************************************!*\
  !*** ./src/app/page1/page1.module.ts ***!
  \***************************************/
/*! exports provided: Page1Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page1Module", function() { return Page1Module; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _page1_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page1-routing.module */ "5dPE");
/* harmony import */ var _page1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page1.component */ "w0JI");
/* harmony import */ var _page1_error_page1_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page1-error/page1-error.component */ "abaw");
/* harmony import */ var _shared_shared_error_shared_error_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared-error/shared-error.module */ "g/Nw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class Page1Module {
}
Page1Module.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: Page1Module });
Page1Module.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function Page1Module_Factory(t) { return new (t || Page1Module)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _page1_routing_module__WEBPACK_IMPORTED_MODULE_1__["Page1RoutingModule"],
            _shared_shared_error_shared_error_module__WEBPACK_IMPORTED_MODULE_4__["SharedErrorModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](Page1Module, { declarations: [_page1_component__WEBPACK_IMPORTED_MODULE_2__["Page1Component"], _page1_error_page1_error_component__WEBPACK_IMPORTED_MODULE_3__["Page1ErrorComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _page1_routing_module__WEBPACK_IMPORTED_MODULE_1__["Page1RoutingModule"],
        _shared_shared_error_shared_error_module__WEBPACK_IMPORTED_MODULE_4__["SharedErrorModule"]] }); })();


/***/ }),

/***/ "abaw":
/*!************************************************************!*\
  !*** ./src/app/page1/page1-error/page1-error.component.ts ***!
  \************************************************************/
/*! exports provided: Page1ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page1ErrorComponent", function() { return Page1ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class Page1ErrorComponent {
    triggerError() {
        throw new Error('page 1 error');
    }
}
Page1ErrorComponent.ɵfac = function Page1ErrorComponent_Factory(t) { return new (t || Page1ErrorComponent)(); };
Page1ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Page1ErrorComponent, selectors: [["app-page1-error"]], decls: 3, vars: 0, consts: [[3, "click"]], template: function Page1ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Page 1 error component\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Page1ErrorComponent_Template_button_click_1_listener() { return ctx.triggerError(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Click to trigger error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlMS1lcnJvci5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "w0JI":
/*!******************************************!*\
  !*** ./src/app/page1/page1.component.ts ***!
  \******************************************/
/*! exports provided: Page1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page1Component", function() { return Page1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _page1_error_page1_error_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page1-error/page1-error.component */ "abaw");
/* harmony import */ var _shared_shared_error_shared_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared-error/shared-error.component */ "LbsW");



class Page1Component {
}
Page1Component.ɵfac = function Page1Component_Factory(t) { return new (t || Page1Component)(); };
Page1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Page1Component, selectors: [["app-page1"]], decls: 5, vars: 0, template: function Page1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Page 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-page1-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-shared-error");
    } }, directives: [_page1_error_page1_error_component__WEBPACK_IMPORTED_MODULE_1__["Page1ErrorComponent"], _shared_shared_error_shared_error_component__WEBPACK_IMPORTED_MODULE_2__["SharedErrorComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlMS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=page1-page1-module.js.map