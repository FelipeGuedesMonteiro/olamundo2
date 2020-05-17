function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["device-geolocation-geolocation-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/device/geolocation/geolocation.page.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/device/geolocation/geolocation.page.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDeviceGeolocationGeolocationPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Onde Estou</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/device/geolocation/geolocation-routing.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/device/geolocation/geolocation-routing.module.ts ***!
    \******************************************************************/

  /*! exports provided: GeolocationPageRoutingModule */

  /***/
  function srcAppDeviceGeolocationGeolocationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeolocationPageRoutingModule", function () {
      return GeolocationPageRoutingModule;
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


    var _geolocation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./geolocation.page */
    "./src/app/device/geolocation/geolocation.page.ts");

    var routes = [{
      path: '',
      component: _geolocation_page__WEBPACK_IMPORTED_MODULE_3__["GeolocationPage"]
    }];

    var GeolocationPageRoutingModule = function GeolocationPageRoutingModule() {
      _classCallCheck(this, GeolocationPageRoutingModule);
    };

    GeolocationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], GeolocationPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/device/geolocation/geolocation.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/device/geolocation/geolocation.module.ts ***!
    \**********************************************************/

  /*! exports provided: GeolocationPageModule */

  /***/
  function srcAppDeviceGeolocationGeolocationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeolocationPageModule", function () {
      return GeolocationPageModule;
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


    var _geolocation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./geolocation-routing.module */
    "./src/app/device/geolocation/geolocation-routing.module.ts");
    /* harmony import */


    var _geolocation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./geolocation.page */
    "./src/app/device/geolocation/geolocation.page.ts");

    var GeolocationPageModule = function GeolocationPageModule() {
      _classCallCheck(this, GeolocationPageModule);
    };

    GeolocationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _geolocation_routing_module__WEBPACK_IMPORTED_MODULE_5__["GeolocationPageRoutingModule"]],
      declarations: [_geolocation_page__WEBPACK_IMPORTED_MODULE_6__["GeolocationPage"]]
    })], GeolocationPageModule);
    /***/
  },

  /***/
  "./src/app/device/geolocation/geolocation.page.scss":
  /*!**********************************************************!*\
    !*** ./src/app/device/geolocation/geolocation.page.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDeviceGeolocationGeolocationPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldmljZS9nZW9sb2NhdGlvbi9nZW9sb2NhdGlvbi5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/device/geolocation/geolocation.page.ts":
  /*!********************************************************!*\
    !*** ./src/app/device/geolocation/geolocation.page.ts ***!
    \********************************************************/

  /*! exports provided: GeolocationPage */

  /***/
  function srcAppDeviceGeolocationGeolocationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeolocationPage", function () {
      return GeolocationPage;
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

    var Geolocation = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Geolocation;

    var GeolocationPage = /*#__PURE__*/function () {
      function GeolocationPage() {
        _classCallCheck(this, GeolocationPage);
      }

      _createClass(GeolocationPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var coordinates, wait;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return Geolocation.getCurrentPosition();

                  case 2:
                    coordinates = _context.sent;
                    console.log('Onde estou? ', coordinates.coords);
                    wait = Geolocation.watchPosition({}, function (position, err) {
                      console.log('Bússola: ', position);
                    });

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
        }
      }]);

      return GeolocationPage;
    }();

    GeolocationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-geolocation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./geolocation.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/device/geolocation/geolocation.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./geolocation.page.scss */
      "./src/app/device/geolocation/geolocation.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], GeolocationPage);
    /***/
  }
}]);
//# sourceMappingURL=device-geolocation-geolocation-module-es5.js.map