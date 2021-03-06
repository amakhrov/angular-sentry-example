(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "LbsW":
/*!***************************************************************!*\
  !*** ./src/app/shared/shared-error/shared-error.component.ts ***!
  \***************************************************************/
/*! exports provided: SharedErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedErrorComponent", function() { return SharedErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SharedErrorComponent {
    triggerError() {
        throw new Error('shared error');
    }
}
SharedErrorComponent.ɵfac = function SharedErrorComponent_Factory(t) { return new (t || SharedErrorComponent)(); };
SharedErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SharedErrorComponent, selectors: [["app-shared-error"]], decls: 3, vars: 0, consts: [[3, "click"]], template: function SharedErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Shared component\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SharedErrorComponent_Template_button_click_1_listener() { return ctx.triggerError(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Click to trigger error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGFyZWQtZXJyb3IuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "g/Nw":
/*!************************************************************!*\
  !*** ./src/app/shared/shared-error/shared-error.module.ts ***!
  \************************************************************/
/*! exports provided: SharedErrorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedErrorModule", function() { return SharedErrorModule; });
/* harmony import */ var _shared_error_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared-error.component */ "LbsW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SharedErrorModule {
}
SharedErrorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedErrorModule });
SharedErrorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SharedErrorModule_Factory(t) { return new (t || SharedErrorModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedErrorModule, { declarations: [_shared_error_component__WEBPACK_IMPORTED_MODULE_0__["SharedErrorComponent"]], exports: [_shared_error_component__WEBPACK_IMPORTED_MODULE_0__["SharedErrorComponent"]] }); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map