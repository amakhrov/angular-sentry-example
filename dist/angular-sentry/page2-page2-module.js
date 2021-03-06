(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page2-page2-module"],{

/***/ "/19t":
/*!******************************************!*\
  !*** ./src/app/page2/page2.component.ts ***!
  \******************************************/
/*! exports provided: Page2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page2Component", function() { return Page2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _page2_error_page2_error_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page2-error/page2-error.component */ "F5s7");
/* harmony import */ var _shared_shared_error_shared_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared-error/shared-error.component */ "LbsW");



class Page2Component {
}
Page2Component.ɵfac = function Page2Component_Factory(t) { return new (t || Page2Component)(); };
Page2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Page2Component, selectors: [["app-page2"]], decls: 5, vars: 0, template: function Page2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Page 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-page2-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-shared-error");
    } }, directives: [_page2_error_page2_error_component__WEBPACK_IMPORTED_MODULE_1__["Page2ErrorComponent"], _shared_shared_error_shared_error_component__WEBPACK_IMPORTED_MODULE_2__["SharedErrorComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlMi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "F5s7":
/*!************************************************************!*\
  !*** ./src/app/page2/page2-error/page2-error.component.ts ***!
  \************************************************************/
/*! exports provided: Page2ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page2ErrorComponent", function() { return Page2ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class Page2ErrorComponent {
    triggerError() {
        throw new Error('page 2 error');
    }
}
Page2ErrorComponent.ɵfac = function Page2ErrorComponent_Factory(t) { return new (t || Page2ErrorComponent)(); };
Page2ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Page2ErrorComponent, selectors: [["app-page2-error"]], decls: 3, vars: 0, consts: [[3, "click"]], template: function Page2ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Page 2 error component\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Page2ErrorComponent_Template_button_click_1_listener() { return ctx.triggerError(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Click to trigger error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlMi1lcnJvci5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "elET":
/*!***********************************************!*\
  !*** ./src/app/page2/page2-routing.module.ts ***!
  \***********************************************/
/*! exports provided: Page2RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page2RoutingModule", function() { return Page2RoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _page2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page2.component */ "/19t");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{ path: '', component: _page2_component__WEBPACK_IMPORTED_MODULE_1__["Page2Component"] }];
class Page2RoutingModule {
}
Page2RoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: Page2RoutingModule });
Page2RoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function Page2RoutingModule_Factory(t) { return new (t || Page2RoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](Page2RoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "tyfE":
/*!***************************************!*\
  !*** ./src/app/page2/page2.module.ts ***!
  \***************************************/
/*! exports provided: Page2Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page2Module", function() { return Page2Module; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _page2_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page2-routing.module */ "elET");
/* harmony import */ var _page2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page2.component */ "/19t");
/* harmony import */ var _page2_error_page2_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page2-error/page2-error.component */ "F5s7");
/* harmony import */ var _shared_shared_error_shared_error_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared-error/shared-error.module */ "g/Nw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class Page2Module {
}
Page2Module.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: Page2Module });
Page2Module.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function Page2Module_Factory(t) { return new (t || Page2Module)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _page2_routing_module__WEBPACK_IMPORTED_MODULE_1__["Page2RoutingModule"],
            _shared_shared_error_shared_error_module__WEBPACK_IMPORTED_MODULE_4__["SharedErrorModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](Page2Module, { declarations: [_page2_component__WEBPACK_IMPORTED_MODULE_2__["Page2Component"], _page2_error_page2_error_component__WEBPACK_IMPORTED_MODULE_3__["Page2ErrorComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _page2_routing_module__WEBPACK_IMPORTED_MODULE_1__["Page2RoutingModule"],
        _shared_shared_error_shared_error_module__WEBPACK_IMPORTED_MODULE_4__["SharedErrorModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=page2-page2-module.js.map