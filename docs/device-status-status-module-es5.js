function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["device-status-status-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/device/status/status.page.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/device/status/status.page.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDeviceStatusStatusPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Status do Dispositivo</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <div class=\"ion-margin\">\n\n        <h3>Status da Bateria:</h3>\n        <small>Carga: {{outBat * 100}}% - <span *ngIf=\"outBatCharge\">Carregando...</span></small>\n        <ion-progress-bar [value]=\"outBat\"></ion-progress-bar>\n\n        <h3>Sistema:</h3>\n        <ul>\n            <li>Sistema: {{outSystemOp}}</li>\n        </ul>\n\n    </div>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/device/status/status-routing.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/device/status/status-routing.module.ts ***!
    \********************************************************/

  /*! exports provided: StatusPageRoutingModule */

  /***/
  function srcAppDeviceStatusStatusRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatusPageRoutingModule", function () {
      return StatusPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _status_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./status.page */
    "./src/app/device/status/status.page.ts");

    var routes = [{
      path: '',
      component: _status_page__WEBPACK_IMPORTED_MODULE_3__["StatusPage"]
    }];

    var StatusPageRoutingModule = function StatusPageRoutingModule() {
      _classCallCheck(this, StatusPageRoutingModule);
    };

    StatusPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], StatusPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/device/status/status.module.ts":
  /*!************************************************!*\
    !*** ./src/app/device/status/status.module.ts ***!
    \************************************************/

  /*! exports provided: StatusPageModule */

  /***/
  function srcAppDeviceStatusStatusModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatusPageModule", function () {
      return StatusPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _status_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./status-routing.module */
    "./src/app/device/status/status-routing.module.ts");
    /* harmony import */


    var _status_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./status.page */
    "./src/app/device/status/status.page.ts");

    var StatusPageModule = function StatusPageModule() {
      _classCallCheck(this, StatusPageModule);
    };

    StatusPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _status_routing_module__WEBPACK_IMPORTED_MODULE_5__["StatusPageRoutingModule"]],
      declarations: [_status_page__WEBPACK_IMPORTED_MODULE_6__["StatusPage"]]
    })], StatusPageModule);
    /***/
  },

  /***/
  "./src/app/device/status/status.page.scss":
  /*!************************************************!*\
    !*** ./src/app/device/status/status.page.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDeviceStatusStatusPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldmljZS9zdGF0dXMvc3RhdHVzLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/device/status/status.page.ts":
  /*!**********************************************!*\
    !*** ./src/app/device/status/status.page.ts ***!
    \**********************************************/

  /*! exports provided: StatusPage */

  /***/
  function srcAppDeviceStatusStatusPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatusPage", function () {
      return StatusPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");

    var Device = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Device;

    var StatusPage = /*#__PURE__*/function () {
      function StatusPage() {
        _classCallCheck(this, StatusPage);
      }

      _createClass(StatusPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return Device.getInfo();

                  case 2:
                    this.info = _context.sent;
                    console.log(this.info);
                    this.outSystemOp = this.info.operatingSystem; // Acesso ao status da bateria

                    _context.next = 7;
                    return Device.getBatteryInfo();

                  case 7:
                    this.batinfo = _context.sent;
                    console.log(this.batinfo);
                    this.outBat = this.batinfo.batteryLevel;
                    this.outBatCharge = this.batinfo.isCharging; // Qual o idioma do dispositivo

                    _context.next = 13;
                    return Device.getLanguageCode();

                  case 13:
                    this.lang = _context.sent;
                    console.log(this.lang);

                  case 15:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return StatusPage;
    }();

    StatusPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-status',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./status.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/device/status/status.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./status.page.scss */
      "./src/app/device/status/status.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], StatusPage);
    /***/
  }
}]);
//# sourceMappingURL=device-status-status-module-es5.js.map