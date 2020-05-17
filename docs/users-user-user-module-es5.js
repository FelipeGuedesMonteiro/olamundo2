function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-user-user-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/users/user/user.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/user/user.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUsersUserUserPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <!-- Botão do menu -->\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Dados do Usuário</ion-title>\r\n\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <!-- Se usuário não existe -->\r\n    <ion-list *ngIf=\"noUser\">\r\n        <ion-item color=\"danger\">\r\n            <ion-label class=\"ion-text-center\">Usuário não foi encontrado!</ion-label>\r\n        </ion-item>\r\n        <ion-button expand=\"block\" class=\"ion-margin\" (click)=\"listUsers()\">Listar usuários</ion-button>\r\n    </ion-list>\r\n\r\n    <!-- Spinner -> Carregando dados. Aguarde... -->\r\n    <div class=\"ion-text-center ion-margin ion-padding\" *ngIf=\"!data && !noUser\">\r\n        <ion-spinner name=\"lines\"></ion-spinner>\r\n    </div>\r\n\r\n    <!-- Usuário encontrado -->\r\n    <div *ngIf=\"data\">\r\n\r\n        <ion-card class=\"ion-margin\">\r\n\r\n            <ion-img [src]=\"data.avatar\" [alt]=\"data.name\"></ion-img>\r\n\r\n            <ion-card-header>\r\n                <ion-card-title>{{data.name}}</ion-card-title>\r\n                <ion-card-subtitle>{{data.email}}</ion-card-subtitle>\r\n            </ion-card-header>\r\n\r\n            <ion-card-content>\r\n\r\n                <!-- Formatando a data -->\r\n                <p>Cadastrado em: {{data.date | date: 'dd/MM/yyyy, HH:mm'}}.</p>\r\n                <p>\r\n                    Status:\r\n                    <ion-note *ngIf=\"data.status == 1\" color=\"secondary\">Ativo</ion-note>\r\n                    <ion-note *ngIf=\"data.status == 0\" color=\"danger\">Inativo</ion-note>\r\n                </p>\r\n\r\n                <ion-grid class=\"ion-margin-top ion-no-padding\">\r\n\r\n                    <ion-row>\r\n\r\n                        <ion-col>\r\n                            <ion-button color=\"success\" (click)=\"editUser(data.id)\">\r\n                                <ion-icon name=\"create\" slot=\"start\"></ion-icon> Editar\r\n                            </ion-button>\r\n                        </ion-col>\r\n\r\n                        <ion-col class=\"ion-text-right\">\r\n                            <ion-button color=\"warning\" (click)=\"delUser(data.id, data.name)\">\r\n                                <ion-icon name=\"trash\" slot=\"start\"></ion-icon> Apagar\r\n                            </ion-button>\r\n                        </ion-col>\r\n\r\n                    </ion-row>\r\n\r\n                </ion-grid>\r\n\r\n            </ion-card-content>\r\n\r\n        </ion-card>\r\n\r\n        <ion-button expand=\"block\" class=\"ion-margin\" (click)=\"listUsers()\">Listar usuários</ion-button>\r\n\r\n    </div>\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/users/user/user-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/users/user/user-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: UserPageRoutingModule */

  /***/
  function srcAppUsersUserUserRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserPageRoutingModule", function () {
      return UserPageRoutingModule;
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


    var _user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user.page */
    "./src/app/users/user/user.page.ts");

    var routes = [{
      path: '',
      component: _user_page__WEBPACK_IMPORTED_MODULE_3__["UserPage"]
    }];

    var UserPageRoutingModule = function UserPageRoutingModule() {
      _classCallCheck(this, UserPageRoutingModule);
    };

    UserPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UserPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/users/user/user.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/users/user/user.module.ts ***!
    \*******************************************/

  /*! exports provided: UserPageModule */

  /***/
  function srcAppUsersUserUserModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserPageModule", function () {
      return UserPageModule;
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


    var _user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user-routing.module */
    "./src/app/users/user/user-routing.module.ts");
    /* harmony import */


    var _user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user.page */
    "./src/app/users/user/user.page.ts");

    var UserPageModule = function UserPageModule() {
      _classCallCheck(this, UserPageModule);
    };

    UserPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserPageRoutingModule"]],
      declarations: [_user_page__WEBPACK_IMPORTED_MODULE_6__["UserPage"]]
    })], UserPageModule);
    /***/
  },

  /***/
  "./src/app/users/user/user.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/users/user/user.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppUsersUserUserPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXIvdXNlci5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/users/user/user.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/users/user/user.page.ts ***!
    \*****************************************/

  /*! exports provided: UserPage */

  /***/
  function srcAppUsersUserUserPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserPage", function () {
      return UserPage;
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


    var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/users.service */
    "./src/app/services/users.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js"); // Rotas dinâmicas
    // Importa o service dos usuários
    // Importa classe de navegação


    var UserPage = /*#__PURE__*/function () {
      function UserPage( // Inicializa rotas dinâmicas para obter o Id
      route, // Inicializa o service dos usuários
      usersService, // Navegação
      navCtrl) {
        _classCallCheck(this, UserPage);

        this.route = route;
        this.usersService = usersService;
        this.navCtrl = navCtrl; // Obtém o Id do usuário da URL da rota

        this.id = parseInt(this.route.snapshot.paramMap.get('id'), 10); // Variável que indentifica se temos usuários

        this.noUser = false;
        console.log(this.id);
      }

      _createClass(UserPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // Temos o Id do usuário
          // console.log('ID: ', this.id);
          // Consultar a API para o Id informado usando o service getUser
          this.usersService.getUser(this.id.toString()).subscribe(function (res) {
            // Recebemos dados da API
            // console.log(res);
            // Caso a consulta à API falhe...
            if (res.status !== 'success') {
              console.error("Erro: ".concat(res.result));
              return false;
            } // Se não retornou ninguém


            if (res.result === 'No record found') {
              // Informa ao HTML que ususário não existe
              _this.noUser = true; // Sai sem fazer mais nada

              return false; // Se usuário existe
            } else {
              // Mostra no HTML os dados do ususário
              _this.data = res.result; // Variável lida pelo HTML
              // console.log(this.data);
            }
          });
        } // Ação do botão Editar

      }, {
        key: "editUser",
        value: function editUser(id) {
          this.navCtrl.navigateForward("usuarios/editar/".concat(id));
        } // Ação do botão Apagar

      }, {
        key: "delUser",
        value: function delUser(id, name) {
          var _this2 = this;

          // Confirmação
          if (!confirm("Tem certeza que deseja apagar \"".concat(name, "\"?\n\n    Esta a\xE7\xE3o \xE9 irrevers\xEDvel!\n\nClique em [Ok] para apagar e [Cancelar] para n\xE3o apagar..."))) {
            // Sai sem fazer nada
            return false;
          } // Apaga o retgistro com o Id informado


          this.usersService.deleteUser(this.id.toString()).subscribe(function (res) {
            // Se apagou
            if (res.status === 'success' && res.result === 'Record deleted successfully') {
              // Feedback
              alert("Usu\xE1rio apagado com sucesso!\n\nClique em [Ok] para continuar..."); // Retorna para a listagem de ususários

              _this2.navCtrl.navigateForward('usuarios/todos'); // SE não conseguiu apagar

            } else {
              // Erro
              console.error('Falha ao apagar usuário: ', res.result);
            }
          });
        } // Ação do botão listar usuários

      }, {
        key: "listUsers",
        value: function listUsers() {
          this.navCtrl.navigateForward('usuarios/todos');
        }
      }]);

      return UserPage;
    }();

    UserPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }];
    };

    UserPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/users/user/user.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user.page.scss */
      "./src/app/users/user/user.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])], UserPage);
    /***/
  }
}]);
//# sourceMappingURL=users-user-user-module-es5.js.map