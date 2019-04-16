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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-user/create-user.component */ "./src/app/create-user/create-user.component.ts");
/* harmony import */ var _chat_room_chat_room_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chat-room/chat-room.component */ "./src/app/chat-room/chat-room.component.ts");






var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'createUser', component: _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_4__["CreateUserComponent"] },
    { path: 'chatRoom', component: _chat_room_chat_room_component__WEBPACK_IMPORTED_MODULE_5__["ChatRoomComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>   \n"

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
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/chat.service */ "./src/services/chat.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            providers: [_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./create-user/create-user.component */ "./src/app/create-user/create-user.component.ts");
/* harmony import */ var _chat_room_chat_room_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./chat-room/chat-room.component */ "./src/app/chat-room/chat-room.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");















var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_10__["CreateUserComponent"],
                _chat_room_chat_room_component__WEBPACK_IMPORTED_MODULE_11__["ChatRoomComponent"]
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_1__["MaterialModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__["PerfectScrollbarModule"]
            ],
            providers: [
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__["PERFECT_SCROLLBAR_CONFIG"],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat-room/chat-room.component.css":
/*!***************************************************!*\
  !*** ./src/app/chat-room/chat-room.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\r\n    box-sizing: border-box;\r\n  }\r\n\r\n  *, *::before, *::after {\r\n    box-sizing: inherit;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n\r\n  body {\r\n    font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;\r\n  }\r\n\r\n  .App {\r\n    width: 100%;\r\n    max-width: 960px;\r\n    height: 500px;\r\n    margin: 0 auto;\r\n    display: flex;\r\n    border: 1px solid black;\r\n    margin-top: 30px;\r\n  }\r\n\r\n  ul {\r\n    list-style: none;\r\n  }\r\n\r\n  .sidebar {\r\n    flex-basis: 30%;\r\n    background-color: #300d4f;\r\n    color: #fff;\r\n    padding: 5px 10px;\r\n  }\r\n\r\n  .sidebar section {\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  .sidebar h2 {\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .user-list li {\r\n    margin-bottom: 10px;\r\n    font-size: 16px;\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n\r\n  .presence {\r\n    display: inline-block;\r\n    width: 20px;\r\n    height: 20px;\r\n    background-color: #fff;\r\n    margin-right: 10px;\r\n    border-radius: 50%;\r\n  }\r\n\r\n  .presence.online {\r\n    background-color: green;\r\n  }\r\n\r\n  .chat-window {\r\n    flex-grow: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n  }\r\n\r\n  .chat-window > * {\r\n    padding: 10px 20px;\r\n  }\r\n\r\n  .chat-header, .chat-footer {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n\r\n  .chat-header {\r\n    border-bottom: 1px solid #ccc;\r\n  }\r\n\r\n  .chat-session {\r\n    flex-grow: 1;\r\n    display: flex;\r\n    overflow: hidden;\r\n  }\r\n\r\n  .message-list {\r\n    flex-grow: 1;\r\n    overflow-y: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-end;\r\n  }\r\n\r\n  .user-message {\r\n    margin-top: 10px;\r\n  }\r\n\r\n  .user-message span {\r\n    display: block;\r\n  }\r\n\r\n  .user-id {\r\n    font-weight: bold;\r\n    color: #283593;\r\n    /* margin-bottom: 3px; */\r\n  }\r\n\r\n  .chat-footer {\r\n    border-top: 1px solid #ccc;\r\n  }\r\n\r\n  .chat-footer form, .chat-footer input {\r\n    width: 100%;\r\n  }\r\n\r\n  h1 {\r\n    color:#283593;\r\n    font-weight: bold;\r\n  }\r\n\r\n  .example-full-width {\r\n    width: 100%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC1yb29tL2NoYXQtcm9vbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxVQUFVO0VBQ1o7O0VBRUE7SUFDRSx3SEFBd0g7RUFDMUg7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixjQUFjO0lBQ2QsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGFBQWE7SUFDYixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBQ0E7SUFDRSxhQUFhO0lBQ2IsaUJBQWlCO0VBQ25COztFQUVFO0lBQ0EsV0FBVztFQUNiIiwiZmlsZSI6InNyYy9hcHAvY2hhdC1yb29tL2NoYXQtcm9vbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuXHJcbiAgKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XHJcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcblxyXG4gIGJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFwiU2Vnb2UgVUlcIixSb2JvdG8sT3h5Z2VuLVNhbnMsVWJ1bnR1LENhbnRhcmVsbCxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG4gIC5BcHAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDk2MHB4O1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9XHJcblxyXG4gIHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuc2lkZWJhciB7XHJcbiAgICBmbGV4LWJhc2lzOiAzMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAwZDRmO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICB9XHJcblxyXG4gIC5zaWRlYmFyIHNlY3Rpb24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcblxyXG4gIC5zaWRlYmFyIGgyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG5cclxuICAudXNlci1saXN0IGxpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5wcmVzZW5jZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG5cclxuICAucHJlc2VuY2Uub25saW5lIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gIH1cclxuXHJcbiAgLmNoYXQtd2luZG93IHtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuXHJcbiAgLmNoYXQtd2luZG93ID4gKiB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuY2hhdC1oZWFkZXIsIC5jaGF0LWZvb3RlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5jaGF0LWhlYWRlciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICB9XHJcblxyXG4gIC5jaGF0LXNlc3Npb24ge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICAubWVzc2FnZS1saXN0IHtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgfVxyXG5cclxuICAudXNlci1tZXNzYWdlIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAudXNlci1tZXNzYWdlIHNwYW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAudXNlci1pZCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjMjgzNTkzO1xyXG4gICAgLyogbWFyZ2luLWJvdHRvbTogM3B4OyAqL1xyXG4gIH1cclxuXHJcbiAgLmNoYXQtZm9vdGVyIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xyXG4gIH1cclxuXHJcbiAgLmNoYXQtZm9vdGVyIGZvcm0sIC5jaGF0LWZvb3RlciBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgaDEge1xyXG4gICAgY29sb3I6IzI4MzU5MztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBcclxuICAgIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/chat-room/chat-room.component.html":
/*!****************************************************!*\
  !*** ./src/app/chat-room/chat-room.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"App\">\n  \n    <main class=\"chat-window\">\n      <header class=\"chat-header\">\n        <h1>{{user}} in {{room}}</h1>\n        <span class=\"participants\"></span>\n      </header>\n      <perfect-scrollbar>\n        <section>\n          <ul class=\"message-list\" >\n            <li class=\"user-message\" *ngFor=\"let messageObject of messageArray\">\n              <span class=\"user-id\">{{ messageObject.user }}</span>\n              <span>{{ messageObject.message }}</span>\n            </li>\n          </ul>\n        </section>\n      </perfect-scrollbar>\n\n      <footer class=\"chat-footer\">\n          <button mat-raised-button color=\"primary\" (click)='leave()' [disabled]='disabledFlag' routerLink='/createUser'>Leave</button>\n          &nbsp; &nbsp;\n          <form (ngSubmit) = 'sendMessage()'>\n          <mat-form-field class=\"example-full-width\">\n              <input matInput placeholder=\"Type a message. Hit Enter to send\" name=\"title\" [(ngModel)]=\"messageText\" type=\"text\">\n          </mat-form-field>\n        </form>\n     </footer>\n    </main>\n  </div>"

/***/ }),

/***/ "./src/app/chat-room/chat-room.component.ts":
/*!**************************************************!*\
  !*** ./src/app/chat-room/chat-room.component.ts ***!
  \**************************************************/
/*! exports provided: ChatRoomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoomComponent", function() { return ChatRoomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/chat.service */ "./src/services/chat.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/services/data.service.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");





var ChatRoomComponent = /** @class */ (function () {
    function ChatRoomComponent(_chatService, _dataService) {
        var _this = this;
        this._chatService = _chatService;
        this._dataService = _dataService;
        this.messageArray = [];
        this.disabledFlag = true;
        this._chatService.newUserJoined()
            .subscribe(function (data) { return _this.messageArray.push(data); });
        this._chatService.newMessageReceived()
            .subscribe(function (data) { return _this.messageArray.push(data); });
        this._chatService.userLeftRoom()
            .subscribe(function (data) { return _this.messageArray.push(data); });
        window.history.forward();
    }
    ChatRoomComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userNameSubscription = this._dataService.userNameObservable.subscribe(function (userName) {
            _this.user = userName;
            console.log(_this.user);
        });
        this.roomNameSubscription = this._dataService.roomNameObservable.subscribe(function (roomName) {
            _this.room = roomName;
            console.log(_this.room);
        });
    };
    ChatRoomComponent.prototype.ngOnDestroy = function () {
        this.userNameSubscription.unsubscribe();
        this.roomNameSubscription.unsubscribe();
    };
    ChatRoomComponent.prototype.sendMessage = function () {
        this._chatService.sendMessage({ user: this.user, room: this.room, message: this.messageText });
        this.disabledFlag = false;
        console.log('hello' + ' ' + this.messageText + ' ' + this.user + ' ' + this.room);
        this.messageText = '';
        this.componentRef.directiveRef.scrollToBottom();
    };
    ChatRoomComponent.prototype.leave = function () {
        this._chatService.leaveRoom({ user: this.user, room: this.room });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarComponent"])
    ], ChatRoomComponent.prototype, "componentRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarDirective"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarDirective"])
    ], ChatRoomComponent.prototype, "directiveRef", void 0);
    ChatRoomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat-room',
            template: __webpack_require__(/*! ./chat-room.component.html */ "./src/app/chat-room/chat-room.component.html"),
            styles: [__webpack_require__(/*! ./chat-room.component.css */ "./src/app/chat-room/chat-room.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"], _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], ChatRoomComponent);
    return ChatRoomComponent;
}());



/***/ }),

/***/ "./src/app/create-user/create-user.component.css":
/*!*******************************************************!*\
  !*** ./src/app/create-user/create-user.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 300%;\r\n    margin-top: 200px;\r\n  }\r\n  \r\n  .example-full-width {\r\n    width: 100%;\r\n  }\r\n  \r\n  h3 {\r\n    color:#283593;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    margin-top: 50px;\r\n    }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLXVzZXIvY3JlYXRlLXVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFDQTtJQUNFLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS11c2VyL2NyZWF0ZS11c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1mb3JtIHtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDMwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAyMDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgaDMge1xyXG4gICAgY29sb3I6IzI4MzU5MztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIH1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/create-user/create-user.component.html":
/*!********************************************************!*\
  !*** ./src/app/create-user/create-user.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-form\" style=\"width:400px; margin:0 auto;\" >\n<form>\n      <h3> Room Selection </h3>\n      <mat-form-field class=\"example-full-width\">\n          <input matInput required placeholder=\"Enter username\" name=\"title\" [(ngModel)]=\"user\" type=\"text\">\n      </mat-form-field>\n      <!-- <input type=\"text\" [(ngModel)]=\"user\" *ngIf = \"visible\"  class=\"form-control\" id=\"username\" placeholder=\"Enter username\"> -->\n<!-- \n      <div class=\"col-sm-5\" *ngIf = \"visible\">\n      <select name=\"roomInput\" id=\"roomInput\" placeholder=\"Enter username\" class=\"form-control\" [(ngModel)]=\"room\">\n          <option value=\"Lobby\">Lobby</option>\n          <option value=\"Hall\">Hall</option>\n          <option value=\"Deluxe\">Deluxe</option>\n      </select>\n      </div> -->\n      <mat-form-field required class=\"example-full-width\">\n          <mat-label>Select a room</mat-label>\n          <mat-select [(value)]=\"room\">\n            <mat-option value=\"Supreme\">Supreme</mat-option>\n            <mat-option value=\"Legends\">Legends</mat-option>\n            <mat-option value=\"Classy\">Classy</mat-option>\n          </mat-select>\n      </mat-form-field>\n      <!-- <p>You selected: {{room}}</p> -->\n  <!-- <div class=\"col col-sm-2\">\n      <div style=\"margin-top:19px;\" class=\"pull-right\"> \n          <button type=\"button\" class=\"btn btn-primary\" *ngIf = \"visible\" (click)=\"join()\">Join</button>\n      </div>\n  </div> -->\n  <button mat-raised-button color=\"primary\" (click)=\"join()\" routerLink='/chatRoom'>New Chat</button>\n</form>\n</mat-card>"

/***/ }),

/***/ "./src/app/create-user/create-user.component.ts":
/*!******************************************************!*\
  !*** ./src/app/create-user/create-user.component.ts ***!
  \******************************************************/
/*! exports provided: CreateUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserComponent", function() { return CreateUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/chat.service */ "./src/services/chat.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/services/data.service.ts");




var CreateUserComponent = /** @class */ (function () {
    function CreateUserComponent(_chatService, _dataService) {
        this._chatService = _chatService;
        this._dataService = _dataService;
        this.title = 'Realtime Messenger';
        this.userName = 'User Name';
        this.visible = true;
        window.history.forward();
        this._chatService.getCertificate();
    }
    CreateUserComponent.prototype.join = function () {
        this.visible = false;
        this.title = this.room;
        this.userName = this.user;
        // console.log({user: this.user, room: this.room});
        this._chatService.joinRoom({ user: this.user, room: this.room });
        this._dataService.setUserName(this.user);
        this._dataService.setRoom(this.room);
    };
    CreateUserComponent.prototype.sendMessage = function () {
        this._chatService.sendMessage({ user: this.user, room: this.room, message: this.messageText });
        this.messageText = '';
    };
    CreateUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-user',
            template: __webpack_require__(/*! ./create-user.component.html */ "./src/app/create-user/create-user.component.html"),
            styles: [__webpack_require__(/*! ./create-user.component.css */ "./src/app/create-user/create-user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"], _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], CreateUserComponent);
    return CreateUserComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    background-color: black;\r\n  }\r\n  .button {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    margin-left: 550px;\r\n  }\r\n  h1 {\r\n    color:#283593;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    margin-top: 50px;\r\n  }\r\n  .container{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0VBQ3JCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIC5idXR0b24ge1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNTUwcHg7XHJcbiAgfVxyXG4gIGgxIHtcclxuICAgIGNvbG9yOiMyODM1OTM7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgfVxyXG4gIC5jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <mat-card class=\"example-form\" style=\"width:400px; margin:0 auto;\">\n    <div class=\"h1\" >\n      <h1>Real Time Messenger</h1>\n      <hr>\n    </div>\n    <button style=\"display: block; margin-left: auto; margin-right: auto;\" mat-raised-button color=\"primary\" class=\"button\" routerLink='/createUser'> New Chat </button>\n    <br>\n    <br>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        window.history.forward();
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");







var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            declarations: [],
            exports: [
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_4__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTreeModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["ScrollingModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
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

/***/ "./src/services/chat.service.ts":
/*!**************************************!*\
  !*** ./src/services/chat.service.ts ***!
  \**************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http/ */ "./node_modules/@angular/common/fesm5/http.js");





var ChatService = /** @class */ (function () {
    function ChatService(http) {
        this.http = http;
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__('https://13.233.237.92:3000');
        this.url = 'https://13.233.237.92:3000';
    }
    ChatService.prototype.getCertificate = function () {
        // console.log('hello');
        this.http.get(this.url);
    };
    ChatService.prototype.joinRoom = function (data) {
        // console.log(this.socket);
        this.socket.emit('join', data);
    };
    ChatService.prototype.newUserJoined = function () {
        var _this = this;
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this.socket.on('New User connected', function (data) {
                // console.log(data);
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        return observable;
    };
    ChatService.prototype.leaveRoom = function (data) {
        this.socket.emit('leave', data);
    };
    ChatService.prototype.userLeftRoom = function () {
        var _this = this;
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this.socket.on('left room', function (data) {
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return observable;
    };
    ChatService.prototype.sendMessage = function (data) {
        this.socket.emit('message', data);
    };
    ChatService.prototype.newMessageReceived = function () {
        var _this = this;
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this.socket.on('new message', function (data) {
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return observable;
    };
    ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http___WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/services/data.service.ts":
/*!**************************************!*\
  !*** ./src/services/data.service.ts ***!
  \**************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var DataService = /** @class */ (function () {
    function DataService() {
        this.userName = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('default message');
        this.userNameObservable = this.userName.asObservable();
        this.roomName = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('default message');
        this.roomNameObservable = this.roomName.asObservable();
    }
    DataService.prototype.setUserName = function (user) {
        console.log('*' + user);
        this.userName.next(user);
    };
    DataService.prototype.setRoom = function (room) {
        console.log('*' + room);
        this.roomName.next(room);
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\pransaxe\work\Messenger\Messenger_Client\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map