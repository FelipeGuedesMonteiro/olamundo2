function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gallery-gallery-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGalleryGalleryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Galeria de Fotos</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-grid>\n        <ion-row>\n            <ion-col size=\"6\" *ngFor=\"let photo of photoService.photos; index as position\">\n                <ion-img src=\"{{ photo.base64 ? photo.base64 : photo.webviewPath }}\" (click)=\"showActionSheet(photo, position)\"></ion-img>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n    <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\n        <ion-fab-button>\n            <ion-icon name=\"camera\" (click)=\"photoService.addNewToGallery()\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/gallery/gallery-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/gallery/gallery-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: GalleryPageRoutingModule */

  /***/
  function srcAppGalleryGalleryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleryPageRoutingModule", function () {
      return GalleryPageRoutingModule;
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


    var _gallery_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./gallery.page */
    "./src/app/gallery/gallery.page.ts");

    var routes = [{
      path: '',
      component: _gallery_page__WEBPACK_IMPORTED_MODULE_3__["GalleryPage"]
    }];

    var GalleryPageRoutingModule = function GalleryPageRoutingModule() {
      _classCallCheck(this, GalleryPageRoutingModule);
    };

    GalleryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], GalleryPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/gallery/gallery.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/gallery/gallery.module.ts ***!
    \*******************************************/

  /*! exports provided: GalleryPageModule */

  /***/
  function srcAppGalleryGalleryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleryPageModule", function () {
      return GalleryPageModule;
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


    var _gallery_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./gallery-routing.module */
    "./src/app/gallery/gallery-routing.module.ts");
    /* harmony import */


    var _gallery_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./gallery.page */
    "./src/app/gallery/gallery.page.ts");

    var GalleryPageModule = function GalleryPageModule() {
      _classCallCheck(this, GalleryPageModule);
    };

    GalleryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _gallery_routing_module__WEBPACK_IMPORTED_MODULE_5__["GalleryPageRoutingModule"]],
      declarations: [_gallery_page__WEBPACK_IMPORTED_MODULE_6__["GalleryPage"]]
    })], GalleryPageModule);
    /***/
  },

  /***/
  "./src/app/gallery/gallery.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/gallery/gallery.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppGalleryGalleryPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/gallery/gallery.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/gallery/gallery.page.ts ***!
    \*****************************************/

  /*! exports provided: GalleryPage */

  /***/
  function srcAppGalleryGalleryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleryPage", function () {
      return GalleryPage;
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


    var _services_photo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/photo.service */
    "./src/app/services/photo.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var GalleryPage = /*#__PURE__*/function () {
      function GalleryPage(photoService, actionSheetController) {
        _classCallCheck(this, GalleryPage);

        this.photoService = photoService;
        this.actionSheetController = actionSheetController;
      }

      _createClass(GalleryPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.photoService.loadSaved();
        }
      }, {
        key: "showActionSheet",
        value: function showActionSheet(photo, position) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.actionSheetController.create({
                      header: 'Photos',
                      buttons: [{
                        text: 'Apagar',
                        role: 'destructive',
                        icon: 'trash',
                        handler: function handler() {
                          _this.photoService.deletePicture(photo, position);
                        }
                      }, {
                        text: 'Cancelar',
                        icon: 'close',
                        role: 'cancel',
                        handler: function handler() {// Nothing to do, action sheet is automatically closed
                        }
                      }]
                    });

                  case 2:
                    actionSheet = _context.sent;
                    _context.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return GalleryPage;
    }();

    GalleryPage.ctorParameters = function () {
      return [{
        type: _services_photo_service__WEBPACK_IMPORTED_MODULE_2__["PhotoService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]
      }];
    };

    GalleryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-gallery',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./gallery.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/gallery/gallery.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./gallery.page.scss */
      "./src/app/gallery/gallery.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_photo_service__WEBPACK_IMPORTED_MODULE_2__["PhotoService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]])], GalleryPage);
    /***/
  },

  /***/
  "./src/app/services/photo.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/photo.service.ts ***!
    \*******************************************/

  /*! exports provided: PhotoService */

  /***/
  function srcAppServicesPhotoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhotoService", function () {
      return PhotoService;
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
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var _capacitor_core__WEBP = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"],
        Camera = _capacitor_core__WEBP.Camera,
        Filesystem = _capacitor_core__WEBP.Filesystem,
        Storage = _capacitor_core__WEBP.Storage;

    var PhotoService = /*#__PURE__*/function () {
      function PhotoService(platform) {
        _classCallCheck(this, PhotoService);

        this.photos = [];
        this.PHOTO_STORAGE = 'photos'; // Obtém a foto gravada no diretório

        this.convertBlobToBase64 = function (blob) {
          return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.onerror = reject;

            reader.onload = function () {
              resolve(reader.result);
            };

            reader.readAsDataURL(blob);
          });
        };

        this.platform = platform;
      } // Método para obter a foto


      _createClass(PhotoService, [{
        key: "addNewToGallery",
        value: function addNewToGallery() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var capturedPhoto, savedImageFile;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return Camera.getPhoto({
                      resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Uri,
                      source: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Camera,
                      quality: 100
                    });

                  case 2:
                    capturedPhoto = _context2.sent;
                    _context2.next = 5;
                    return this.savePicture(capturedPhoto);

                  case 5:
                    savedImageFile = _context2.sent;
                    // Exibe a foto
                    this.photos.unshift(savedImageFile);
                    Storage.set({
                      key: this.PHOTO_STORAGE,
                      value: this.platform.is('hybrid') ? JSON.stringify(this.photos) : JSON.stringify(this.photos.map(function (p) {
                        // Não salve a representação base64 dos dados da foto,
                        // já que ele já foi salvo no sistema de arquivos
                        var photoCopy = Object.assign({}, p);
                        delete photoCopy.base64;
                        return photoCopy;
                      }))
                    });

                  case 8:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        } // Método para salvar a foto

      }, {
        key: "savePicture",
        value: function savePicture(cameraPhoto) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var base64Data, fileName, savedFile;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.readAsBase64(cameraPhoto);

                  case 2:
                    base64Data = _context3.sent;
                    // Escreva o arquivo no diretório de dados
                    fileName = new Date().getTime() + '.jpeg';
                    _context3.next = 6;
                    return Filesystem.writeFile({
                      path: fileName,
                      data: base64Data,
                      directory: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["FilesystemDirectory"].Data
                    });

                  case 6:
                    savedFile = _context3.sent;

                    if (!this.platform.is('hybrid')) {
                      _context3.next = 11;
                      break;
                    }

                    return _context3.abrupt("return", {
                      filepath: savedFile.uri,
                      webviewPath: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Capacitor"].convertFileSrc(savedFile.uri)
                    });

                  case 11:
                    return _context3.abrupt("return", {
                      filepath: fileName,
                      webviewPath: cameraPhoto.webPath
                    });

                  case 12:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        } // Busque a foto, leia como um binário e converta para o formato base64

      }, {
        key: "readAsBase64",
        value: function readAsBase64(cameraPhoto) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var file, response, blob;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (!this.platform.is('hybrid')) {
                      _context4.next = 7;
                      break;
                    }

                    _context4.next = 3;
                    return Filesystem.readFile({
                      path: cameraPhoto.path
                    });

                  case 3:
                    file = _context4.sent;
                    return _context4.abrupt("return", file.data);

                  case 7:
                    _context4.next = 9;
                    return fetch(cameraPhoto.webPath);

                  case 9:
                    response = _context4.sent;
                    _context4.next = 12;
                    return response.blob();

                  case 12:
                    blob = _context4.sent;
                    _context4.next = 15;
                    return this.convertBlobToBase64(blob);

                  case 15:
                    return _context4.abrupt("return", _context4.sent);

                  case 16:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        } // Recuperar dados da matriz de fotos em cache

      }, {
        key: "loadSaved",
        value: function loadSaved() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var photos, _iterator, _step, photo, readFile;

            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return Storage.get({
                      key: this.PHOTO_STORAGE
                    });

                  case 2:
                    photos = _context5.sent;
                    this.photos = JSON.parse(photos.value) || []; // Maneira mais fácil de detectar ao executar na web:
                    // "quando a plataforma NÃO for híbrida, faça isso"

                    if (this.platform.is('hybrid')) {
                      _context5.next = 24;
                      break;
                    }

                    // Exiba a foto lendo no formato base64
                    // tslint:disable-next-line: prefer-const
                    _iterator = _createForOfIteratorHelper(this.photos);
                    _context5.prev = 6;

                    _iterator.s();

                  case 8:
                    if ((_step = _iterator.n()).done) {
                      _context5.next = 16;
                      break;
                    }

                    photo = _step.value;
                    _context5.next = 12;
                    return Filesystem.readFile({
                      path: photo.filepath,
                      directory: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["FilesystemDirectory"].Data
                    });

                  case 12:
                    readFile = _context5.sent;
                    // Apenas plataforma da Web: salve a foto no campo base64
                    photo.base64 = "data:image/jpeg;base64,".concat(readFile.data);

                  case 14:
                    _context5.next = 8;
                    break;

                  case 16:
                    _context5.next = 21;
                    break;

                  case 18:
                    _context5.prev = 18;
                    _context5.t0 = _context5["catch"](6);

                    _iterator.e(_context5.t0);

                  case 21:
                    _context5.prev = 21;

                    _iterator.f();

                    return _context5.finish(21);

                  case 24:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this, [[6, 18, 21, 24]]);
          }));
        }
      }, {
        key: "deletePicture",
        value: function deletePicture(photo, position) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var filename;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    // Remova esta foto da matriz de dados de referência Fotos
                    this.photos.splice(position, 1); // Atualize o cache da matriz de fotos substituindo a matriz de fotos existente

                    Storage.set({
                      key: this.PHOTO_STORAGE,
                      value: JSON.stringify(this.photos)
                    }); // Excluir arquivo de foto do sistema de arquivos

                    filename = photo.filepath.substr(photo.filepath.lastIndexOf('/') + 1);
                    _context6.next = 5;
                    return Filesystem.deleteFile({
                      path: filename,
                      directory: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["FilesystemDirectory"].Data
                    });

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }]);

      return PhotoService;
    }();

    PhotoService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }];
    };

    PhotoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])], PhotoService);
    /***/
  }
}]);
//# sourceMappingURL=gallery-gallery-module-es5.js.map