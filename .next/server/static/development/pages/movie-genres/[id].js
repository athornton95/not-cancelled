module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme/theme */ "./theme/theme.js");
var _jsxFileName = "/Users/alexandrathornton/Github/Outside/not-cancelled/components/Nav.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Nav = () => {
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1877738281", [_theme_theme__WEBPACK_IMPORTED_MODULE_2__["default"].palette.primary.main]]]) + " " + "header-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1877738281", [_theme_theme__WEBPACK_IMPORTED_MODULE_2__["default"].palette.primary.main]]]) + " " + "header-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, "#notcancelled"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1877738281",
    dynamic: [_theme_theme__WEBPACK_IMPORTED_MODULE_2__["default"].palette.primary.main],
    __self: undefined
  }, `.header-wrapper.__jsx-style-dynamic-selector{position:-webkit-sticky;position:sticky;background-color:${_theme_theme__WEBPACK_IMPORTED_MODULE_2__["default"].palette.primary.main};width:100vw;height:4rem;display:grid;padding:0 2rem;}.header-title.__jsx-style-dynamic-selector{color:white;opacity:.7;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4YW5kcmF0aG9ybnRvbi9HaXRodWIvT3V0c2lkZS9ub3QtY2FuY2VsbGVkL2NvbXBvbmVudHMvTmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9vQixBQUdpQyxBQVFKLFlBQ0QsV0FDZixpQkFUa0QsOENBQ2xDLFlBQ0EsWUFDQyxhQUNFLGVBQ25CIiwiZmlsZSI6Ii9Vc2Vycy9hbGV4YW5kcmF0aG9ybnRvbi9HaXRodWIvT3V0c2lkZS9ub3QtY2FuY2VsbGVkL2NvbXBvbmVudHMvTmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRoZW1lIGZyb20gJy4uL3RoZW1lL3RoZW1lJztcblxuY29uc3QgTmF2ID0gKCkgPT4ge1xuICAgIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci13cmFwcGVyXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJoZWFkZXItdGl0bGVcIj4jbm90Y2FuY2VsbGVkPC9oMj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuaGVhZGVyLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbn07XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNHJlbTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oZWFkZXItdGl0bGUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNzsgIFxuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4pO1xufTtcbiAgXG5leHBvcnQgZGVmYXVsdCBOYXY7Il19 */
/*@ sourceURL=/Users/alexandrathornton/Github/Outside/not-cancelled/components/Nav.js */`));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./pages/movie-genres/[id].js":
/*!************************************!*\
  !*** ./pages/movie-genres/[id].js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _theme_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../theme/theme */ "./theme/theme.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Nav */ "./components/Nav.js");
var _jsxFileName = "/Users/alexandrathornton/Github/Outside/not-cancelled/pages/movie-genres/[id].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const Movie = props => {
  const hoverColor = '#08009c';
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2213196832", [_theme_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, hoverColor]]]) + " " + "content-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2213196832", [_theme_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, hoverColor]]]) + " " + "wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2213196832", [_theme_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, hoverColor]]]) + " " + "list-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, props.movies.map(movie => __jsx("li", {
    key: movie.id,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2213196832", [_theme_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, hoverColor]]]) + " " + "card",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2213196832", [_theme_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, hoverColor]]]) + " " + "card-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2213196832", [_theme_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, hoverColor]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 25
    }
  }, movie.title), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2213196832", [_theme_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, hoverColor]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 25
    }
  }, movie.overview), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2213196832", [_theme_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, hoverColor]]]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 25
    }
  }, "Rating: ", movie.vote_average, "/10")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2213196832",
    dynamic: [_theme_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, hoverColor],
    __self: undefined
  }, `li.__jsx-style-dynamic-selector{list-style:none;display:block;}.card.__jsx-style-dynamic-selector{background-color:white;width:100%;border-radius:1rem;box-shadow:1px 4px 8px #050066;}.card.__jsx-style-dynamic-selector:hover{-webkit-transform:translateY(-3px);-ms-transform:translateY(-3px);transform:translateY(-3px);}.card.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector{border-bottom:1px solid;}.card-content.__jsx-style-dynamic-selector{margin:2rem;}.wrapper.__jsx-style-dynamic-selector{display:grid;max-width:100%;margin:2rem;}.content-container.__jsx-style-dynamic-selector{max-height:100%;background:linear-gradient(#e66465,#9198e5);position:relative;}.title-wrapper.__jsx-style-dynamic-selector{display:grid;margin:0 auto;width:70%;justify-items:center;text-align:center;position:absolute;left:50%;top:-15%;-webkit-transform:translate(-50%,50%);-ms-transform:translate(-50%,50%);transform:translate(-50%,50%);}.title.__jsx-style-dynamic-selector{color:white;opacity:1;font-size:2rem;text-shadow:2px 2px #e66465;}.subtitle.__jsx-style-dynamic-selector{color:white;font-size:1.5rem;opacity:.7;font-style:italic;}.list-container.__jsx-style-dynamic-selector{display:grid;grid-template-columns:repeat(4,1fr);grid-column-gap:1.5rem;grid-row-gap:1.5rem;width:100%;}.list-item.__jsx-style-dynamic-selector{margin:2rem 0;}.button-wrapper.__jsx-style-dynamic-selector{margin-top:1rem;}.global-button.__jsx-style-dynamic-selector{-webkit-text-decoration:none;text-decoration:none;padding:1rem 1.75rem;background-color:${_theme_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main};color:white;border-radius:2rem;font-weight:700;box-shadow:1px 4px 8px #050066;margin:1rem 1rem;}.global-button.__jsx-style-dynamic-selector:hover{background-color:${hoverColor};}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4YW5kcmF0aG9ybnRvbi9HaXRodWIvT3V0c2lkZS9ub3QtY2FuY2VsbGVkL3BhZ2VzL21vdmllLWdlbnJlcy9baWRdLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCcUIsQUFHaUMsQUFJTyxBQU9JLEFBSUgsQUFJWixBQUlDLEFBTUcsQUFLSCxBQVdELEFBT0EsQUFNQyxBQVFDLEFBSUUsQUFHSyxBQVV5QixZQS9EbEQsQUEwQmMsQUFPTyxDQTdCRixBQVdELEFBd0JzQixDQVF4QyxFQWxFa0IsQUE2QitCLEFBeUNqRCxNQXhCbUIsQ0ExQ0osQ0FXZixHQW9CYyxDQVhFLENBNkJELENBcERmLElBSXVCLEdBK0JFLEFBV08sR0F0QmhDLEFBNkJzQixNQTZCdEIsR0F4QjJCLENBY0YsR0FuRVUsS0ErQmIsQUFrQnRCLEVBekJzQixLQWtCdEIsTUEwQmtELENBZDFCLElBdEJGLEVBUHRCLE1BeEJBLFFBc0RlLENBbERmLENBNEJhLFNBQ0EsQUFzQmIsU0FyQm1DLEtBa0NuQixZQUNNLG1CQUNGLGdCQUNlLCtCQUNkLGlCQUNyQixFQXRDQSIsImZpbGUiOiIvVXNlcnMvYWxleGFuZHJhdGhvcm50b24vR2l0aHViL091dHNpZGUvbm90LWNhbmNlbGxlZC9wYWdlcy9tb3ZpZS1nZW5yZXMvW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uLy4uL3RoZW1lL3RoZW1lJztcbmltcG9ydCB7IGNzcywganN4IH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgTmF2IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2JztcblxuY29uc3QgTW92aWUgPSBwcm9wcyA9PiB7XG4gICAgY29uc3QgaG92ZXJDb2xvciA9ICcjMDgwMDljJztcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jb250YWluZXJcIj5cbiAgICAgICAgPE5hdi8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtY29udGFpbmVyXCI+XG4gICAgICAgXG4gICAgICAgICAgICB7cHJvcHMubW92aWVzLm1hcCgobW92aWUpID0+IChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXttb3ZpZS5pZH0gY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPnttb3ZpZS50aXRsZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e21vdmllLm92ZXJ2aWV3fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlJhdGluZzoge21vdmllLnZvdGVfYXZlcmFnZX0vMTA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDRweCA4cHggIzA1MDA2NjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNhcmQ6aG92ZXIge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNhcmQgaDIge1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNhcmQtY29udGVudCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAycmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAycmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY29udGVudC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNlNjY0NjUsICM5MTk4ZTUpO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50aXRsZS13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgIHRvcDogLTE1JTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA1MCUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggI2U2NjQ2NTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnN1YnRpdGxlIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogLjc7XG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxpc3QtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoNCwgMWZyKTtcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbi1nYXA6IDEuNXJlbTtcbiAgICAgICAgICAgICAgICBncmlkLXJvdy1nYXA6IDEuNXJlbTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmxpc3QtaXRlbSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAycmVtIDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5idXR0b24td3JhcHBlciB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5nbG9iYWwtYnV0dG9uIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbSAxLjc1cmVtO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW59O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzIDJyZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAxcHggNHB4IDhweCAjMDUwMDY2O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMXJlbSAxcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmdsb2JhbC1idXR0b246aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7aG92ZXJDb2xvcn07XG4gICAgICAgICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG4gICAgfVxuXG5cbk1vdmllLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IGlkIH0gPSBjb250ZXh0LnF1ZXJ5O1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zL2Rpc2NvdmVyL21vdmllP2FwaV9rZXk9YzdiZDgyYjkwMmIwMDNmOGRmMjcwM2FlODE0MTY5YjUmd2l0aF9nZW5yZXM9JHtpZH1gKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBcbiAgICByZXR1cm4geyBtb3ZpZXM6IGRhdGEucmVzdWx0c307XG4gICAgfTtcbiAgICBcbmV4cG9ydCBkZWZhdWx0IE1vdmllOyJdfQ== */
/*@ sourceURL=/Users/alexandrathornton/Github/Outside/not-cancelled/pages/movie-genres/[id].js */`));
};

Movie.getInitialProps = async function (context) {
  const {
    id
  } = context.query;
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(`https://api.themoviedb.org/3/discover/movie?api_key=c7bd82b902b003f8df2703ae814169b5&with_genres=${id}`);
  const data = await res.json();
  return {
    movies: data.results
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Movie);

/***/ }),

/***/ "./theme/theme.js":
/*!************************!*\
  !*** ./theme/theme.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors */ "@material-ui/core/colors");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__);

 // Create a theme instance.

const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createMuiTheme"])({
  palette: {
    primary: {
      main: '#0000ff'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__["red"].A400
    },
    background: {
      default: 'white'
    }
  }
});
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ 8:
/*!******************************************!*\
  !*** multi ./pages/movie-genres/[id].js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/alexandrathornton/Github/Outside/not-cancelled/pages/movie-genres/[id].js */"./pages/movie-genres/[id].js");


/***/ }),

/***/ "@emotion/core":
/*!********************************!*\
  !*** external "@emotion/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/core");

/***/ }),

/***/ "@material-ui/core/colors":
/*!*******************************************!*\
  !*** external "@material-ui/core/colors" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=[id].js.map