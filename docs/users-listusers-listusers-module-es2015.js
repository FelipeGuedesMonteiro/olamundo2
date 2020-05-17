(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-listusers-listusers-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/listusers/listusers.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/listusers/listusers.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n\n        <!-- Botão do menu -->\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n\n        <ion-title>Lista de Usuários</ion-title>\n        <ion-icon name=\"add-circle\" slot=\"end\" class=\"ion-margin-end\" (click)=\"createUsers()\"></ion-icon>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <!-- Mostre enquando carrega usuários -->\n    <div class=\"ion-text-center ion-margin ion-padding\" *ngIf=\"!data\">\n        <ion-spinner name=\"lines\"></ion-spinner>\n    </div>\n\n    <!-- Se existem dados para mostrar -->\n    <ion-list *ngIf=\"data\" class=\"ion-margin-bottom\">\n\n        <!-- Loop dos dados -->\n        <div *ngFor=\"let user of itemsPage\">\n\n            <ion-item routerDirection=\"root\" [routerLink]=\"['/usuarios/usuario/', user.id]\">\n                <ion-avatar slot=\"start\">\n                    <img src=\"{{user.avatar}}\" alt=\"{{user.name}}\">\n                </ion-avatar>\n                <ion-label>\n                    <h2>{{user.name}}</h2>\n                    <h3>{{user.email}}</h3>\n                </ion-label>\n            </ion-item>\n\n        </div>\n\n    </ion-list>\n\n    <!-- Infinite Scrool -->\n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n        <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Carregando mais dados...\">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n\n    &nbsp;\n\n    <!-- Se não existem usuários -->\n    <ion-list *ngIf=\"noUsers\">\n        <ion-item color=\"danger\">\n            <ion-label class=\"ion-text-center\">Nenhum usuário foi encontrado!</ion-label>\n        </ion-item>\n    </ion-list>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/users/listusers/listusers-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/users/listusers/listusers-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ListusersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListusersPageRoutingModule", function() { return ListusersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _listusers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listusers.page */ "./src/app/users/listusers/listusers.page.ts");




const routes = [
    {
        path: '',
        component: _listusers_page__WEBPACK_IMPORTED_MODULE_3__["ListusersPage"]
    }
];
let ListusersPageRoutingModule = class ListusersPageRoutingModule {
};
ListusersPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListusersPageRoutingModule);



/***/ }),

/***/ "./src/app/users/listusers/listusers.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/users/listusers/listusers.module.ts ***!
  \*****************************************************/
/*! exports provided: ListusersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListusersPageModule", function() { return ListusersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _listusers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./listusers-routing.module */ "./src/app/users/listusers/listusers-routing.module.ts");
/* harmony import */ var _listusers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listusers.page */ "./src/app/users/listusers/listusers.page.ts");







let ListusersPageModule = class ListusersPageModule {
};
ListusersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _listusers_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListusersPageRoutingModule"]
        ],
        declarations: [_listusers_page__WEBPACK_IMPORTED_MODULE_6__["ListusersPage"]]
    })
], ListusersPageModule);



/***/ }),

/***/ "./src/app/users/listusers/listusers.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/users/listusers/listusers.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2xpc3R1c2Vycy9saXN0dXNlcnMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/users/listusers/listusers.page.ts":
/*!***************************************************!*\
  !*** ./src/app/users/listusers/listusers.page.ts ***!
  \***************************************************/
/*! exports provided: ListusersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListusersPage", function() { return ListusersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");


// Serviço de acesso à API


let ListusersPage = class ListusersPage {
    constructor(
    // Instância do service de acesso à API
    usersService, navCtrl) {
        this.usersService = usersService;
        this.navCtrl = navCtrl;
        // "Infinite Scrool") Variáveis
        this.itemsPage = [];
        this.offset = 10;
        this.index = 0;
        // Variável que indentifica se temos usuários
        this.noUsers = false;
        // Variável com a array de usuários obtidos
        this.data = [];
    }
    ngOnInit() {
        // Obtendo os dados da API usando o service getUsers
        this.usersService.getUsers().subscribe((res) => {
            // Se falhou ao obter os dados
            if (res.status !== 'success') {
                console.log(`Falha: ${res.result}`);
                return false;
            }
            // Loop para descartar usuários removidos (result = null) da listagem
            res.result.forEach((value) => {
                if (value !== null) {
                    this.data.push(value);
                }
            });
            // Se não existem usuários
            if (this.data.length === 0) {
                this.noUsers = true;
                // Se existem usuários
            }
            else {
                // "Infinite Scrool") Página atual da listagem
                this.itemsPage = this.data.slice(this.index, this.offset + this.index);
                // "Infinite Scrool") Próxima página
                this.index += this.offset;
            }
        });
    }
    // Infinite Scrool
    loadData(event) {
        setTimeout(() => {
            // Paginação a cada rolagem
            const news = this.data.slice(this.index, this.offset + this.index);
            this.index += this.offset;
            // Ao rolar, adiciona próximos ítens aos itens existentes
            // tslint:disable-next-line: prefer-for-of
            for (let i = 0; i < news.length; i++) {
                this.itemsPage.push(news[i]);
            }
            // Concluir o tratamento do evento "rolagem"
            event.target.complete();
            // Encerra a rolagem se atingiu o total de elementos
            if (this.itemsPage.length === this.data.length) {
                event.target.disabled = true;
            }
            // Atraso em milissegundos para exibir o spinner e rolagem mais suave
        }, 800);
    }
    createUsers() {
        this.navCtrl.navigateForward('usuarios/criar');
    }
};
ListusersPage.ctorParameters = () => [
    { type: _services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
ListusersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listusers',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./listusers.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/listusers/listusers.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./listusers.page.scss */ "./src/app/users/listusers/listusers.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
], ListusersPage);



/***/ })

}]);
//# sourceMappingURL=users-listusers-listusers-module-es2015.js.map