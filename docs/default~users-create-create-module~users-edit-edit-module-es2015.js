(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~users-create-create-module~users-edit-edit-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-form/user-form.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-form/user-form.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Se usuário não existe -->\r\n<ion-list *ngIf=\"noUser\">\r\n    <ion-item color=\"danger\">\r\n        <ion-label class=\"ion-text-center\">Usuário não foi encontrado!</ion-label>\r\n    </ion-item>\r\n    <ion-button expand=\"block\" class=\"ion-margin\" (click)=\"listUsers()\">Listar usuários</ion-button>\r\n</ion-list>\r\n\r\n<!-- Se usuário existe ou está criando um novo -->\r\n<div *ngIf=\"!noUser\">\r\n\r\n    <p class=\"ion-margin\" *ngIf=\"!userForm.controls.id.value\">\r\n        Preencha os campos abaixo com atenção para cadastrar um novo usuário.\r\n    </p>\r\n\r\n    <p class=\"ion-margin\" *ngIf=\"userForm.controls.id.value\">\r\n        Preencha os campos abaixo com atenção para editar o usuário.\r\n    </p>\r\n\r\n    <form [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit()\">\r\n        <input type=\"hidden\" id=\"id\" name=\"id\" formControlName=\"id\">\r\n\r\n        <ion-list lines=\"full\" class=\"ion-margin\">\r\n\r\n            <!-- Campo 'name' -->\r\n            <ion-item>\r\n                <ion-label for=\"name\" position=\"floating\" color=\"primary\">Nome:\r\n\r\n                    <!-- Se está em estado de erro -->\r\n                    <ion-text color=\"danger\" *ngIf=\"userForm.controls.name.errors\">\r\n\r\n                        <!-- Se ainda não preencheu... -->\r\n                        <small *ngIf=\"userForm.controls.name.errors.required\">* Obrigatório</small>\r\n\r\n                        <!-- Se não tem comprimento suficiente... -->\r\n                        <small *ngIf=\"userForm.controls.name.errors.minlength\">* Inválido</small>\r\n                    </ion-text>\r\n\r\n                </ion-label>\r\n                <ion-input type=\"text\" id=\"name\" name=\"name\" formControlName=\"name\"></ion-input>\r\n            </ion-item>\r\n\r\n            <!-- Campo 'email' -->\r\n            <ion-item>\r\n                <ion-label for=\"email\" position=\"floating\" color=\"primary\">E-mail:\r\n                    <ion-text color=\"danger\" *ngIf=\"userForm.controls.email.errors\">\r\n                        <small *ngIf=\"userForm.controls.email.errors.required\">* Obrigatório</small>\r\n                        <small *ngIf=\"userForm.controls.email.errors.pattern\">* Inválido</small>\r\n                    </ion-text>\r\n                </ion-label>\r\n                <ion-input type=\"email\" id=\"email\" name=\"email\" formControlName=\"email\"></ion-input>\r\n            </ion-item>\r\n\r\n            <!-- Campo 'avatar' -->\r\n            <ion-item>\r\n                <ion-label for=\"avatar\" position=\"floating\" color=\"primary\">URL do avatar:\r\n                    <ion-text color=\"danger\" *ngIf=\"userForm.controls.avatar.errors\">\r\n                        <small *ngIf=\"userForm.controls.avatar.errors.required\">* Obrigatório</small>\r\n                        <small *ngIf=\"userForm.controls.avatar.errors.pattern\">* Inválido</small>\r\n                    </ion-text>\r\n                </ion-label>\r\n                <ion-input type=\"url\" id=\"avatar\" name=\"avatar\" formControlName=\"avatar\"></ion-input>\r\n            </ion-item>\r\n\r\n            <!-- Campo 'status' -->\r\n            <ion-item>\r\n                <ion-label for=\"status\" color=\"primary\">Status:</ion-label>\r\n                <ion-toggle id=\"status\" name=\"status\" slot=\"end\" formControlName=\"status\"></ion-toggle>\r\n            </ion-item>\r\n\r\n        </ion-list>\r\n\r\n        <ion-button type=\"submit\" expand=\"block\" class=\"ion-margin\" [disabled]=\"!userForm.valid\">\r\n            <span *ngIf=\"userForm.controls.id.value\">Salvar usuário</span>\r\n            <span *ngIf=\"!userForm.controls.id.value\">Cadastrar usuário</span>\r\n        </ion-button>\r\n\r\n    </form>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/create/create.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/create/create.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n\r\n        <!-- Botão do menu -->\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n\r\n        <ion-title>Criar usuário</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n    <!-- Seletor fo formulário de ususários -->\r\n    <app-userform></app-userform>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/components/user-form/user-form.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/user-form/user-form.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1mb3JtL3VzZXItZm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/user-form/user-form.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/user-form/user-form.component.ts ***!
  \*************************************************************/
/*! exports provided: UserformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserformComponent", function() { return UserformComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");


// Importa bibliotecas do formulário

// Importa o service da API

// Importa roteamento


let UserformComponent = class UserformComponent {
    constructor(
    // Construtor do ReactiveForms
    formBuilder, 
    // Inicializa service da API
    usersService, 
    // Roteamento
    navCtrl, 
    // Configura route
    route) {
        this.formBuilder = formBuilder;
        this.usersService = usersService;
        this.navCtrl = navCtrl;
        this.route = route;
        // Variável que contém o Id do usuário editado
        this.id = this.route.snapshot.paramMap.get('id');
        // Variável que verifica se não tem usuário a exibir
        this.noUser = false;
        // Definindo campos do formulário
        this.userForm = this.formBuilder.group({
            // Campo 'id'
            id: [null],
            // Campo 'name'
            name: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3) // Cumprimento mínimo
                ])
            ],
            // Campo 'email'
            email: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    // Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')
                    // Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]+$')
                ])
            ],
            // Campo 'avatar'
            avatar: [
                null,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    // tslint:disable-next-line: max-line-length
                    // Validators.pattern(/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i)
                    // tslint:disable-next-line: max-line-length
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i)
                ])
            ],
            // Campo 'status'
            status: [1]
        });
    }
    ngOnInit() {
        // Se temos um Id na rota...
        if (this.id) {
            // Consulta a API para o Id informado
            this.usersService.getUser(this.id).subscribe(
            // Obtém dados
            (res) => {
                // Se usuário não existe
                if (res.result === 'No record found') {
                    // Feedback na página HTML
                    this.noUser = true;
                    // Sai sem fazer nada
                    return false;
                    // Se usuário existe
                }
                else {
                    // Preenche o formulário com os dados do usuário
                    this.userForm.controls.id.setValue(res.result.id);
                    this.userForm.controls.name.setValue(res.result.name);
                    this.userForm.controls.email.setValue(res.result.email);
                    this.userForm.controls.avatar.setValue(res.result.avatar);
                    // Converte status para number
                    this.userForm.controls.status.setValue(parseInt(res.result.status, 10));
                }
            });
        }
    }
    // Método de submit do formulário
    onSubmit() {
        // console.log(this.userForm.value);
        // Se o campo id está vazio, estamos cadastrando um novo usuário
        if (this.userForm.value.id === null) {
            // Cadastra usuário //
            // Remove o campo id
            delete this.userForm.value.id;
            // Ajusta o valor do campo 'status' para numérico
            if (!this.userForm.value.status) {
                this.userForm.value.status = 0;
            }
            else {
                this.userForm.value.status = 1;
            }
            // Salvar dados na API
            this.usersService.postUser(this.userForm.value).subscribe((res) => {
                // Se foi adicionado
                if (res.status === 'success') {
                    // Feedback
                    // tslint:disable-next-line: max-line-length
                    if (confirm(`"${this.userForm.value.name}" foi adicionado com sucesso!\n\n    • Clique em [Ok] para listar usuários.\n    • Clique em [Cancel] para cadastrar outro usuário.`)) {
                        // Retorna para a listagem
                        this.navCtrl.navigateForward('usuarios/todos');
                    }
                    else {
                        // Limpa o formulário para cadastrar outro ususário
                        this.userForm.reset();
                    }
                }
            });
            // Se tem um Id, atualiza usuário
        }
        else {
            // Atualizando dados do usuário da API
            this.usersService.updateUser(this.userForm.value).subscribe(
            // Dados enviados
            (res) => {
                // Se atualizou...
                if (res.status === 'success') {
                    // Feedback
                    alert(`"${this.userForm.value.name}" atualizado com sucesso!\nClique em [Ok] para continuar...`);
                    // Retornar para a listagem
                    this.navCtrl.navigateForward(`usuarios/usuario/${this.userForm.value.id}${this.makeId()}`);
                }
            });
        }
    }
    // Ação do botão "Listar ususários"
    listUsers() {
        this.navCtrl.navigateForward('usuarios/todos');
    }
    // Gerador de string aleatória para forçar "refresh" da página
    makeId() {
        let text = '';
        const characters = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
        for (let i = 0; i < 7; i++) {
            text += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return text;
    }
};
UserformComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
UserformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-userform',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-form/user-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-form.component.scss */ "./src/app/components/user-form/user-form.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
], UserformComponent);



/***/ }),

/***/ "./src/app/users/create/create-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/users/create/create-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: CreatePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePageRoutingModule", function() { return CreatePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _create_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create.page */ "./src/app/users/create/create.page.ts");




const routes = [
    {
        path: '',
        component: _create_page__WEBPACK_IMPORTED_MODULE_3__["CreatePage"]
    }
];
let CreatePageRoutingModule = class CreatePageRoutingModule {
};
CreatePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CreatePageRoutingModule);



/***/ }),

/***/ "./src/app/users/create/create.module.ts":
/*!***********************************************!*\
  !*** ./src/app/users/create/create.module.ts ***!
  \***********************************************/
/*! exports provided: CreatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePageModule", function() { return CreatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _create_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-routing.module */ "./src/app/users/create/create-routing.module.ts");
/* harmony import */ var _create_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create.page */ "./src/app/users/create/create.page.ts");
/* harmony import */ var _components_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/user-form/user-form.component */ "./src/app/components/user-form/user-form.component.ts");







// Importa formulário do usuário

// Importa ReactiveForms

let CreatePageModule = class CreatePageModule {
};
CreatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _create_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreatePageRoutingModule"],
            // Inicializa ReactiveForms
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [
            _create_page__WEBPACK_IMPORTED_MODULE_6__["CreatePage"],
            // Declara componente do formulário do usuário
            _components_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_7__["UserformComponent"]
        ],
        exports: [
            // Exporta componente do formulário do usuário para uso em outras páginas
            _components_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_7__["UserformComponent"]
        ]
    })
], CreatePageModule);



/***/ }),

/***/ "./src/app/users/create/create.page.scss":
/*!***********************************************!*\
  !*** ./src/app/users/create/create.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2NyZWF0ZS9jcmVhdGUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/users/create/create.page.ts":
/*!*********************************************!*\
  !*** ./src/app/users/create/create.page.ts ***!
  \*********************************************/
/*! exports provided: CreatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePage", function() { return CreatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CreatePage = class CreatePage {
    constructor() { }
    ngOnInit() {
    }
};
CreatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/create/create.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create.page.scss */ "./src/app/users/create/create.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CreatePage);



/***/ })

}]);
//# sourceMappingURL=default~users-create-create-module~users-edit-edit-module-es2015.js.map