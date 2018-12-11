(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<fieldset>\n  <form (submit) = \"onSubmit()\" class=\"postForm\">\n    <p>{{newCake | json}}</p>\n    <label>Cake name:\n      <input type=\"text\" name=\"name\" [(ngModel)]=\"newCake.name\"  />\n    </label>\n    <label>Cake url:\n      <input type=\"text\" name=\"url\"[(ngModel)]=\"newCake.url\"  />\n    </label>\n    <label>Cake stars:\n      <input type=\"text\" name=\"stars\"[(ngModel)]=\"newCake.stars\" />\n    </label>\n    <input type=\"submit\" value=\"Create cake\" />\n  </form>\n</fieldset>\n<h1><button (click)=\"tasksOnClick()\">click me to get some tasks</button></h1>\n<h2>The Cake: </h2>\n<p>{{tasks['data']}}</p>\n<input (keyup)=\"taskOnClick($event)\">\n\n<div *ngFor=\"let x of tasks['data']\">\n <p><a href=\"/cake/{{x['_id']}}\">{{x['_id']}}:</a> {{x['name']}} </p>\n <img src=\"{{x['url']}}\" alt=\"{{x['name']}}\">\n <form (submit) = \"onDelete(x._id)\" class=\"postForm\">\n    <input type=\"submit\" value=\"DELETE\" />\n</form>\n<button (click)='showOne(x._id)'>show</button>\n<div *ngIf=\"x._comment\">\n    <p *ngFor='let y of x._comment'>{{y.content}}</p>\n  </div>\n<form (submit) = \"editOnClick(x)\" class=\"postForm\">\n  <input type=\"submit\" value=\"EDIT\" />\n</form>\n<div *ngIf=\"x.showEditForm\">\n  <form (submit) = \"postComment(x._id)\" class=\"postForm\">\n      <p>{{newComment | json}}</p>\n      <label>content:\n        <input type=\"text\" name=\"content\" [(ngModel)]=\"newComment.content\"  />\n      </label>\n      <input type=\"submit\" value=\"comment\" />\n    </form>\n  <form (submit) = \"onEdit(x)\" class=\"postForm\">\n    {{x.name}}\n    <label>Title:\n      <input type=\"text\" name=\"editTask.name\" [(ngModel)] = \"x.name\" />\n    </label>\n    <label>Description:\n      <input type=\"text\" name=\"editTask.url\" [(ngModel)] = \"x.url\" />\n    </label>\n    <input type=\"submit\" value=\"EDIT\" />\n  </form>\n</div>\n</div>\n<app-task [showOne]='task'></app-task>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
        this.title = 'app';
        this.tasks = {};
        this.task = {};
        this.id = '';
        this.editTask = [];
        this.showEditForm = false;
        this.self = this;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.newCake = { name: "", url: "", stars: 0 };
        this.newComment = { content: '' };
        this.tasksOnClick();
    };
    AppComponent.prototype.postComment = function (id) {
        var _this = this;
        var observable = this._httpService.AddComment(this.newComment, id);
        observable.subscribe(function (data) {
            _this.newComment = { content: '' };
            _this.tasksOnClick();
        });
    };
    AppComponent.prototype.showOne = function (id) {
        var _this = this;
        // get one planet
        this._httpService.getTask(id).subscribe(function (response) {
            console.log(response);
            _this.task = response;
        });
        // set the planet to the child component using Inputs
    };
    AppComponent.prototype.tasksOnClick = function () {
        var _this = this;
        this._httpService.getTasks().subscribe(function (data) {
            console.log("Got our data!", data);
            _this.tasks = data;
            console.log("Got our tasks!", _this.tasks);
        });
    };
    AppComponent.prototype.taskOnClick = function (event) {
        var _this = this;
        this.task = [];
        this.id = event.target.value;
        var observable = this._httpService.getTask(this.id);
        observable.subscribe(function (data) {
            console.log("Clicked the button!", _this.id);
            _this.task = data;
            console.log("Got our task!", _this.task);
        });
    };
    AppComponent.prototype.onDelete = function (id) {
        var _this = this;
        var observable = this._httpService.Delete(id);
        observable.subscribe(function (data) {
            console.log("Got data from post back", data);
            _this.tasksOnClick();
        });
    };
    AppComponent.prototype.onSubmit = function () {
        var _this = this;
        var observable = this._httpService.addTask(this.newCake);
        observable.subscribe(function (data) {
            console.log("Got data from post back", data);
            _this.newCake = { name: "", url: "", stars: 0 };
            _this.tasksOnClick();
        });
    };
    AppComponent.prototype.editOnClick = function (task) {
        console.log("Task we need to edit", task._id);
        console.log("Task to edit", task, "Task title", task.title);
        task.showEditForm = true;
    };
    AppComponent.prototype.onEdit = function (editTask) {
        editTask.showEditForm = false;
        console.log("Edit the task", editTask._id);
        var observable = this._httpService.editTask(editTask);
        observable.subscribe(function (data) {
            console.log("Got data from post back", data);
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _task_task_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./task/task.component */ "./src/app/task/task.component.ts");







 // <-- import FormsModule.
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _task_task_component__WEBPACK_IMPORTED_MODULE_7__["TaskComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
        //   this.getTasks();
    }
    HttpService.prototype.getTasks = function () {
        // our http response is an Observable, store it in a variable
        return this._http.get('/cake');
        // subscribe to the Observable and provide the code we would like to do with our data from the response
    };
    HttpService.prototype.getTask = function (task_id) {
        console.log('ID is', task_id);
        console.log(task_id);
        // let tempObservable = this._http.get('/tasks/5a84f4c3d7dee2b8012d96ae');
        // tempObservable.subscribe(data => console.log("Got the task!", data));
        return this._http.get('/cake/' + task_id);
    };
    HttpService.prototype.Delete = function (id) {
        return this._http.delete('/cake/' + id);
    };
    HttpService.prototype.AddComment = function (comment, id) {
        return this._http.post('/newComment/' + id, comment);
    };
    HttpService.prototype.addTask = function (newtask) {
        return this._http.post('/cake', newtask);
    };
    HttpService.prototype.editTask = function (editTask) {
        console.log('request to edit', editTask._id);
        return this._http.patch('/cake/' + editTask._id, editTask);
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/task/task.component.css":
/*!*****************************************!*\
  !*** ./src/app/task/task.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2svdGFzay5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/task/task.component.html":
/*!******************************************!*\
  !*** ./src/app/task/task.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <p>\n      {{ showOne | json}}\n    </p>\n  </div>"

/***/ }),

/***/ "./src/app/task/task.component.ts":
/*!****************************************!*\
  !*** ./src/app/task/task.component.ts ***!
  \****************************************/
/*! exports provided: TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return TaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TaskComponent = /** @class */ (function () {
    function TaskComponent() {
    }
    TaskComponent.prototype.ngOnInit = function () {
        console.log('in showone component', this.showOne);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TaskComponent.prototype, "showOne", void 0);
    TaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task',
            template: __webpack_require__(/*! ./task.component.html */ "./src/app/task/task.component.html"),
            styles: [__webpack_require__(/*! ./task.component.css */ "./src/app/task/task.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TaskComponent);
    return TaskComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\zach\Desktop\MEAN\RateMyCakes\public\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map