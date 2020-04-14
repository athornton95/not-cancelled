module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
/* harmony import */ var _pages_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/theme */ "./pages/theme.js");
var _jsxFileName = "/Users/alexandrathornton/Github/Outside/not-cancelled/components/Nav.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Nav = () => {
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1877738281", [_pages_theme__WEBPACK_IMPORTED_MODULE_2__["default"].palette.primary.main]]]) + " " + "header-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1877738281", [_pages_theme__WEBPACK_IMPORTED_MODULE_2__["default"].palette.primary.main]]]) + " " + "header-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, "#notcancelled"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1877738281",
    dynamic: [_pages_theme__WEBPACK_IMPORTED_MODULE_2__["default"].palette.primary.main],
    __self: undefined
  }, `.header-wrapper.__jsx-style-dynamic-selector{position:-webkit-sticky;position:sticky;background-color:${_pages_theme__WEBPACK_IMPORTED_MODULE_2__["default"].palette.primary.main};width:100vw;height:4rem;display:grid;padding:0 2rem;}.header-title.__jsx-style-dynamic-selector{color:white;opacity:.7;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4YW5kcmF0aG9ybnRvbi9HaXRodWIvT3V0c2lkZS9ub3QtY2FuY2VsbGVkL2NvbXBvbmVudHMvTmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9vQixBQUdpQyxBQVFKLFlBQ0QsV0FDZixpQkFUa0QsOENBQ2xDLFlBQ0EsWUFDQyxhQUNFLGVBQ25CIiwiZmlsZSI6Ii9Vc2Vycy9hbGV4YW5kcmF0aG9ybnRvbi9HaXRodWIvT3V0c2lkZS9ub3QtY2FuY2VsbGVkL2NvbXBvbmVudHMvTmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRoZW1lIGZyb20gJy4uL3BhZ2VzL3RoZW1lJztcblxuY29uc3QgTmF2ID0gKCkgPT4ge1xuICAgIHJldHVybihcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci13cmFwcGVyXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJoZWFkZXItdGl0bGVcIj4jbm90Y2FuY2VsbGVkPC9oMj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuaGVhZGVyLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbn07XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNHJlbTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5oZWFkZXItdGl0bGUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNzsgIFxuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4pO1xufTtcbiAgXG5leHBvcnQgZGVmYXVsdCBOYXY7Il19 */
/*@ sourceURL=/Users/alexandrathornton/Github/Outside/not-cancelled/components/Nav.js */`));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./components/TrailFinder.js":
/*!***********************************!*\
  !*** ./components/TrailFinder.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UserInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserInput */ "./components/UserInput.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/alexandrathornton/Github/Outside/not-cancelled/components/TrailFinder.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // import WeatherInfo from './WeatherInfo/WeatherInfo'

class TrailFinder extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor() {
    super();

    _defineProperty(this, "findGeoCode", async formData => {
      try {
        const searchURL = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?address=${formData.city},+${formData.state}&key=AIzaSyCxC93pv465QlIoGBJEWgafUpZwTJ_5tPg`;
        const result = await fetch(searchURL);
        const parsedResponse = await result.json(); // console.log(`${parsedResponse} is the parsed response for findGeoCode`);

        if (result.status === 200) {
          this.setState({
            lat: parsedResponse.results[0].geometry.location.lat,
            lng: parsedResponse.results[0].geometry.location.lng,
            city: formData.city,
            state: formData.state,
            minLength: formData.minLength,
            maxLength: formData.maxLength,
            difficulty: formData.difficulty
          });
        } // console.log(this.state)


        this.findTrails();
      } catch (err) {
        console.log(err);
      }
    });

    _defineProperty(this, "findTrails", async () => {
      console.log(this.state.maxLength);

      try {
        const searchURL = `https://www.hikingproject.com/data/get-trails?lat=${this.state.lat}&lon=${this.state.lng}&minLength=${this.state.minLength}&maxDistance=${this.state.maxLength}&key=200465360-942e3fb792b81fa531e25b7484cbc0f9`;
        const result = await fetch(searchURL);
        const parsedResponse = await result.json();
        console.log(searchURL);

        if (result.status === 200) {
          if (this.state.difficulty === '') {
            this.setState({
              trails: parsedResponse.trails.filter(trails => trails.length < this.state.maxLength)
            });
          } else {
            this.setState({
              trails: parsedResponse.trails.filter(trails => trails.length < this.state.maxLength && trails.difficulty === this.state.difficulty)
            });
          }
        }
      } catch (err) {
        console.log(err);
      }
    });

    this.state = {
      lat: '',
      lng: '',
      city: '',
      state: '',
      trails: [],
      minLength: '',
      maxLength: '',
      difficulty: ''
    };
  }

  render(formData) {
    console.log(this.state.trails);
    const trailList = this.state.trails.map(trail => {
      return __jsx("div", {
        className: "jsx-543587458",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 17
        }
      }, __jsx("div", {
        key: "trail.id",
        className: "jsx-543587458" + " " + "card",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 20
        }
      }, __jsx("a", {
        href: trail.url,
        target: "_blank",
        className: "jsx-543587458",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 20
        }
      }, __jsx("div", {
        className: "jsx-543587458" + " " + "card-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 56
        }
      }, __jsx("h2", {
        className: "jsx-543587458",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 25
        }
      }, trail.name), __jsx("p", {
        className: "jsx-543587458",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 25
        }
      }, trail.location), __jsx("p", {
        className: "jsx-543587458",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 25
        }
      }, "Length: ", trail.length, " miles"), __jsx("p", {
        className: "jsx-543587458",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 25
        }
      }, trail.summary), __jsx("p", {
        className: "jsx-543587458",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 25
        }
      }, "Current conditions: ", trail.conditionDetails, " | Last updated: ", trail.conditionDate)))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        id: "543587458",
        __self: this
      }, "h2.jsx-543587458{border-bottom:1px solid;}a.jsx-543587458{-webkit-text-decoration:none;text-decoration:none;color:black;}.card.jsx-543587458{background-color:white;width:100%;border-radius:1rem;box-shadow:1px 4px 8px #050066;padding:.25rem;min-height:18rem;}.card-content.jsx-543587458{margin:2rem;text-align:left;}.card.jsx-543587458:hover{-webkit-transform:translateY(-3px);-ms-transform:translateY(-3px);transform:translateY(-3px);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4YW5kcmF0aG9ybnRvbi9HaXRodWIvT3V0c2lkZS9ub3QtY2FuY2VsbGVkL2NvbXBvbmVudHMvVHJhaWxGaW5kZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUZpQyxBQUdxRCxBQUdILEFBS0UsQUFRWCxBQUtlLFlBSlgsV0FSTCxDQVJmLElBaUJBLE1BUnVCLGdCQU5QLEdBT21CLFNBTm5DLHNCQU9tQixTQVVuQixNQVRxQixpQkFDckIiLCJmaWxlIjoiL1VzZXJzL2FsZXhhbmRyYXRob3JudG9uL0dpdGh1Yi9PdXRzaWRlL25vdC1jYW5jZWxsZWQvY29tcG9uZW50cy9UcmFpbEZpbmRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFVzZXJJbnB1dCBmcm9tICcuL1VzZXJJbnB1dCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG4vLyBpbXBvcnQgV2VhdGhlckluZm8gZnJvbSAnLi9XZWF0aGVySW5mby9XZWF0aGVySW5mbydcblxuXG5jbGFzcyBUcmFpbEZpbmRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGxhdDogJycsXG4gICAgICAgICAgICBsbmc6ICcnLFxuICAgICAgICAgICAgY2l0eTogJycsXG4gICAgICAgICAgICBzdGF0ZTogJycsXG4gICAgICAgICAgICB0cmFpbHM6IFtdLFxuICAgICAgICAgICAgbWluTGVuZ3RoOiAnJyxcbiAgICAgICAgICAgIG1heExlbmd0aDogJycsXG4gICAgICAgICAgICBkaWZmaWN1bHR5OiAnJyxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpbmRHZW9Db2RlID0gYXN5bmMgKGZvcm1EYXRhKSA9PiB7XG4gICAgICAgIHRyeXtcbiAgICAgICAgY29uc3Qgc2VhcmNoVVJMID0gYGh0dHBzOi8vY29ycy1hbnl3aGVyZS5oZXJva3VhcHAuY29tL2h0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9nZW9jb2RlL2pzb24/YWRkcmVzcz0ke2Zvcm1EYXRhLmNpdHl9LCske2Zvcm1EYXRhLnN0YXRlfSZrZXk9QUl6YVN5Q3hDOTNwdjQ2NVFsSW9HQkpFV2dhZlVwWndUSl81dFBnYFxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChzZWFyY2hVUkwpXG4gICAgICAgIGNvbnN0IHBhcnNlZFJlc3BvbnNlID0gYXdhaXQgcmVzdWx0Lmpzb24oKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYCR7cGFyc2VkUmVzcG9uc2V9IGlzIHRoZSBwYXJzZWQgcmVzcG9uc2UgZm9yIGZpbmRHZW9Db2RlYCk7XG4gICAgICAgIGlmKHJlc3VsdC5zdGF0dXMgPT09IDIwMCl7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBsYXQ6IHBhcnNlZFJlc3BvbnNlLnJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubGF0LFxuICAgICAgICAgICAgICAgIGxuZzogcGFyc2VkUmVzcG9uc2UucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sbmcsXG4gICAgICAgICAgICAgICAgY2l0eTogZm9ybURhdGEuY2l0eSxcbiAgICAgICAgICAgICAgICBzdGF0ZTogZm9ybURhdGEuc3RhdGUsXG4gICAgICAgICAgICAgICAgbWluTGVuZ3RoOiBmb3JtRGF0YS5taW5MZW5ndGgsXG4gICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiBmb3JtRGF0YS5tYXhMZW5ndGgsXG4gICAgICAgICAgICAgICAgZGlmZmljdWx0eTogZm9ybURhdGEuZGlmZmljdWx0eVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKVxuICAgICAgICB0aGlzLmZpbmRUcmFpbHMoKTtcbiAgICAgICAgfWNhdGNoKGVycil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIH1cbiAgICB9XG4gICAgZmluZFRyYWlscyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5tYXhMZW5ndGgpXG4gICAgICAgIHRyeXtcbiAgICAgICAgY29uc3Qgc2VhcmNoVVJMID0gYGh0dHBzOi8vd3d3Lmhpa2luZ3Byb2plY3QuY29tL2RhdGEvZ2V0LXRyYWlscz9sYXQ9JHt0aGlzLnN0YXRlLmxhdH0mbG9uPSR7dGhpcy5zdGF0ZS5sbmd9Jm1pbkxlbmd0aD0ke3RoaXMuc3RhdGUubWluTGVuZ3RofSZtYXhEaXN0YW5jZT0ke3RoaXMuc3RhdGUubWF4TGVuZ3RofSZrZXk9MjAwNDY1MzYwLTk0MmUzZmI3OTJiODFmYTUzMWUyNWI3NDg0Y2JjMGY5YFxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChzZWFyY2hVUkwpO1xuICAgICAgICBjb25zdCBwYXJzZWRSZXNwb25zZSA9IGF3YWl0IHJlc3VsdC5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHNlYXJjaFVSTCk7XG4gICAgICAgIGlmKHJlc3VsdC5zdGF0dXMgPT09IDIwMCl7XG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlLmRpZmZpY3VsdHkgPT09ICcnKXtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgdHJhaWxzOiBwYXJzZWRSZXNwb25zZS50cmFpbHMuZmlsdGVyKHRyYWlscyA9PiB0cmFpbHMubGVuZ3RoIDwgdGhpcy5zdGF0ZS5tYXhMZW5ndGgpXG4gICAgICAgICAgICAgICAgfSkgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICB0cmFpbHM6IHBhcnNlZFJlc3BvbnNlLnRyYWlscy5maWx0ZXIodHJhaWxzID0+IHRyYWlscy5sZW5ndGggPCB0aGlzLnN0YXRlLm1heExlbmd0aCAmJiB0cmFpbHMuZGlmZmljdWx0eSA9PT0gdGhpcy5zdGF0ZS5kaWZmaWN1bHR5KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgfWNhdGNoKGVycil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKGZvcm1EYXRhKXtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnRyYWlscyk7XG4gICAgICAgIGNvbnN0IHRyYWlsTGlzdCA9IHRoaXMuc3RhdGUudHJhaWxzLm1hcCgodHJhaWwpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT1cInRyYWlsLmlkXCIgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3RyYWlsLnVybH0gdGFyZ2V0PVwiX2JsYW5rXCI+PGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57dHJhaWwubmFtZX08L2gyPiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0cmFpbC5sb2NhdGlvbn08L3A+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+TGVuZ3RoOiB7dHJhaWwubGVuZ3RofSBtaWxlczwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0cmFpbC5zdW1tYXJ5fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkN1cnJlbnQgY29uZGl0aW9uczoge3RyYWlsLmNvbmRpdGlvbkRldGFpbHN9IHwgTGFzdCB1cGRhdGVkOiB7dHJhaWwuY29uZGl0aW9uRGF0ZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PjwvYT5cbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXJkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCA0cHggOHB4ICMwNTAwNjY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogLjI1cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE4cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhcmQtY29udGVudCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAycmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXJkOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFpbC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYWlsLWluZm8td3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9ICd1c2VySW5wdXQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFVzZXJJbnB1dCBmaW5kR2VvQ29kZSA9IHt0aGlzLmZpbmRHZW9Db2RlfSBmaW5kVHJhaWxzPXt0aGlzLmZpbmRUcmFpbHN9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ3RyYWlsLWxpc3QnPlxuICAgICAgICAgICAgICAgICAgICAgICAgeyB0cmFpbExpc3QgfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIC50cmFpbC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC50cmFpbC1saXN0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiAxLjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXJvdy1nYXA6IDEuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAudHJhaWwtaW5mby13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgVHJhaWxGaW5kZXI7Il19 */\n/*@ sourceURL=/Users/alexandrathornton/Github/Outside/not-cancelled/components/TrailFinder.js */"));
    });
    return __jsx("div", {
      className: "jsx-423182249" + " " + "trail-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "jsx-423182249" + " " + "trail-info-wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "jsx-423182249" + " " + 'userInput',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 21
      }
    }, __jsx(_UserInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
      findGeoCode: this.findGeoCode,
      findTrails: this.findTrails,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: "jsx-423182249" + " " + 'trail-list',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 21
      }
    }, trailList)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "423182249",
      __self: this
    }, ".trail-container.jsx-423182249{display:grid;}.trail-list.jsx-423182249{display:grid;grid-template-columns:repeat(4,1fr);grid-column-gap:1.5rem;grid-row-gap:1.5rem;margin-top:1rem;}.trail-info-wrapper.jsx-423182249{text-align:center;margin-top:10rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4YW5kcmF0aG9ybnRvbi9HaXRodWIvT3V0c2lkZS9ub3QtY2FuY2VsbGVkL2NvbXBvbmVudHMvVHJhaWxGaW5kZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0g0QixBQUdzQyxBQUlBLEFBUUssYUFYdEIsQUFJeUMsS0FRcEIsaUJBQ3JCLGNBUjJCLHVCQUNILG9CQUNKLGdCQUNwQiIsImZpbGUiOiIvVXNlcnMvYWxleGFuZHJhdGhvcm50b24vR2l0aHViL091dHNpZGUvbm90LWNhbmNlbGxlZC9jb21wb25lbnRzL1RyYWlsRmluZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVXNlcklucHV0IGZyb20gJy4vVXNlcklucHV0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbi8vIGltcG9ydCBXZWF0aGVySW5mbyBmcm9tICcuL1dlYXRoZXJJbmZvL1dlYXRoZXJJbmZvJ1xuXG5cbmNsYXNzIFRyYWlsRmluZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbGF0OiAnJyxcbiAgICAgICAgICAgIGxuZzogJycsXG4gICAgICAgICAgICBjaXR5OiAnJyxcbiAgICAgICAgICAgIHN0YXRlOiAnJyxcbiAgICAgICAgICAgIHRyYWlsczogW10sXG4gICAgICAgICAgICBtaW5MZW5ndGg6ICcnLFxuICAgICAgICAgICAgbWF4TGVuZ3RoOiAnJyxcbiAgICAgICAgICAgIGRpZmZpY3VsdHk6ICcnLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmluZEdlb0NvZGUgPSBhc3luYyAoZm9ybURhdGEpID0+IHtcbiAgICAgICAgdHJ5e1xuICAgICAgICBjb25zdCBzZWFyY2hVUkwgPSBgaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvbj9hZGRyZXNzPSR7Zm9ybURhdGEuY2l0eX0sKyR7Zm9ybURhdGEuc3RhdGV9JmtleT1BSXphU3lDeEM5M3B2NDY1UWxJb0dCSkVXZ2FmVXBad1RKXzV0UGdgXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKHNlYXJjaFVSTClcbiAgICAgICAgY29uc3QgcGFyc2VkUmVzcG9uc2UgPSBhd2FpdCByZXN1bHQuanNvbigpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgJHtwYXJzZWRSZXNwb25zZX0gaXMgdGhlIHBhcnNlZCByZXNwb25zZSBmb3IgZmluZEdlb0NvZGVgKTtcbiAgICAgICAgaWYocmVzdWx0LnN0YXR1cyA9PT0gMjAwKXtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGxhdDogcGFyc2VkUmVzcG9uc2UucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sYXQsXG4gICAgICAgICAgICAgICAgbG5nOiBwYXJzZWRSZXNwb25zZS5yZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxuZyxcbiAgICAgICAgICAgICAgICBjaXR5OiBmb3JtRGF0YS5jaXR5LFxuICAgICAgICAgICAgICAgIHN0YXRlOiBmb3JtRGF0YS5zdGF0ZSxcbiAgICAgICAgICAgICAgICBtaW5MZW5ndGg6IGZvcm1EYXRhLm1pbkxlbmd0aCxcbiAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IGZvcm1EYXRhLm1heExlbmd0aCxcbiAgICAgICAgICAgICAgICBkaWZmaWN1bHR5OiBmb3JtRGF0YS5kaWZmaWN1bHR5XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXG4gICAgICAgIHRoaXMuZmluZFRyYWlscygpO1xuICAgICAgICB9Y2F0Y2goZXJyKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgfVxuICAgIH1cbiAgICBmaW5kVHJhaWxzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLm1heExlbmd0aClcbiAgICAgICAgdHJ5e1xuICAgICAgICBjb25zdCBzZWFyY2hVUkwgPSBgaHR0cHM6Ly93d3cuaGlraW5ncHJvamVjdC5jb20vZGF0YS9nZXQtdHJhaWxzP2xhdD0ke3RoaXMuc3RhdGUubGF0fSZsb249JHt0aGlzLnN0YXRlLmxuZ30mbWluTGVuZ3RoPSR7dGhpcy5zdGF0ZS5taW5MZW5ndGh9Jm1heERpc3RhbmNlPSR7dGhpcy5zdGF0ZS5tYXhMZW5ndGh9JmtleT0yMDA0NjUzNjAtOTQyZTNmYjc5MmI4MWZhNTMxZTI1Yjc0ODRjYmMwZjlgXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKHNlYXJjaFVSTCk7XG4gICAgICAgIGNvbnN0IHBhcnNlZFJlc3BvbnNlID0gYXdhaXQgcmVzdWx0Lmpzb24oKTtcbiAgICAgICAgY29uc29sZS5sb2coc2VhcmNoVVJMKTtcbiAgICAgICAgaWYocmVzdWx0LnN0YXR1cyA9PT0gMjAwKXtcbiAgICAgICAgICAgIGlmKHRoaXMuc3RhdGUuZGlmZmljdWx0eSA9PT0gJycpe1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICB0cmFpbHM6IHBhcnNlZFJlc3BvbnNlLnRyYWlscy5maWx0ZXIodHJhaWxzID0+IHRyYWlscy5sZW5ndGggPCB0aGlzLnN0YXRlLm1heExlbmd0aClcbiAgICAgICAgICAgICAgICB9KSBcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHRyYWlsczogcGFyc2VkUmVzcG9uc2UudHJhaWxzLmZpbHRlcih0cmFpbHMgPT4gdHJhaWxzLmxlbmd0aCA8IHRoaXMuc3RhdGUubWF4TGVuZ3RoICYmIHRyYWlscy5kaWZmaWN1bHR5ID09PSB0aGlzLnN0YXRlLmRpZmZpY3VsdHkpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB9Y2F0Y2goZXJyKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoZm9ybURhdGEpe1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudHJhaWxzKTtcbiAgICAgICAgY29uc3QgdHJhaWxMaXN0ID0gdGhpcy5zdGF0ZS50cmFpbHMubWFwKCh0cmFpbCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PVwidHJhaWwuaWRcIiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgPGEgaHJlZj17dHJhaWwudXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj48ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPnt0cmFpbC5uYW1lfTwvaDI+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3RyYWlsLmxvY2F0aW9ufTwvcD4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5MZW5ndGg6IHt0cmFpbC5sZW5ndGh9IG1pbGVzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3RyYWlsLnN1bW1hcnl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q3VycmVudCBjb25kaXRpb25zOiB7dHJhaWwuY29uZGl0aW9uRGV0YWlsc30gfCBMYXN0IHVwZGF0ZWQ6IHt0cmFpbC5jb25kaXRpb25EYXRlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDRweCA4cHggIzA1MDA2NjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAuMjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMThyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FyZC1jb250ZW50IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDJyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhcmQ6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYWlsLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhaWwtaW5mby13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gJ3VzZXJJbnB1dCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VXNlcklucHV0IGZpbmRHZW9Db2RlID0ge3RoaXMuZmluZEdlb0NvZGV9IGZpbmRUcmFpbHM9e3RoaXMuZmluZFRyYWlsc30vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPSAndHJhaWwtbGlzdCc+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IHRyYWlsTGlzdCB9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgLnRyYWlsLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLnRyYWlsLWxpc3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLWNvbHVtbi1nYXA6IDEuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtcm93LWdhcDogMS41cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC50cmFpbC1pbmZvLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTByZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBUcmFpbEZpbmRlcjsiXX0= */\n/*@ sourceURL=/Users/alexandrathornton/Github/Outside/not-cancelled/components/TrailFinder.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (TrailFinder);

/***/ }),

/***/ "./components/UserInput.js":
/*!*********************************!*\
  !*** ./components/UserInput.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/theme */ "./pages/theme.js");
var _jsxFileName = "/Users/alexandrathornton/Github/Outside/not-cancelled/components/UserInput.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class UserInput extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor() {
    super();

    _defineProperty(this, "handleChange", e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    });

    _defineProperty(this, "handleSubmit", e => {
      e.preventDefault();
      this.props.findGeoCode(this.state);
    });

    this.state = {
      city: '',
      state: '',
      minLength: '',
      maxLength: '',
      difficulty: ''
    };
  }

  render() {
    const hoverColor = '#08009c';
    return __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2579907853", [_pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, _pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, hoverColor]]]) + " " + "user-input-form",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }
    }, __jsx("form", {
      onSubmit: this.handleSubmit,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2579907853", [_pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, _pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, hoverColor]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2579907853", [_pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, _pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, hoverColor]]]) + " " + "text-field",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 21
      }
    }, __jsx("input", {
      onChange: this.handleChange,
      placeholder: "City",
      type: "text",
      name: "city",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2579907853", [_pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, _pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, hoverColor]]]) + " " + "formInput",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2579907853", [_pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, _pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, hoverColor]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 21
      }
    }, __jsx("input", {
      onChange: this.handleChange,
      placeholder: "State",
      type: "text",
      name: "state",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2579907853", [_pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, _pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, hoverColor]]]) + " " + "formInput",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2579907853", [_pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, _pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, hoverColor]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 21
      }
    }, __jsx("select", {
      onChange: this.handleChange,
      value: this.state.minLength,
      name: "minLength",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2579907853", [_pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, _pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, hoverColor]]]) + " " + "formInput select",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 25
      }
    }, __jsx("option", {
      value: "0",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2579907853", [_pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, _pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, hoverColor]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 29
      }
    }, "Min Miles"), __jsx("option", {
      value: "1",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2579907853", [_pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, _pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, hoverColor]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 29
      }
    }, "1 Miles"), __jsx("option", {
      value: "5",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2579907853", [_pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, _pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, hoverColor]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 29
      }
    }, "5 Miles"), __jsx("option", {
      value: "10",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2579907853", [_pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, _pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, hoverColor]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 29
      }
    }, "10 Miles"))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2579907853", [_pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, _pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, hoverColor]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 21
      }
    }, __jsx("select", {
      onChange: this.handleChange,
      value: this.state.maxLength,
      name: "maxLength",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2579907853", [_pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, _pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, hoverColor]]]) + " " + "formInput select",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 25
      }
    }, __jsx("option", {
      value: "",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2579907853", [_pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, _pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, hoverColor]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 29
      }
    }, "Max Miles"), __jsx("option", {
      value: "5",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2579907853", [_pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, _pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, hoverColor]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 29
      }
    }, "5 Miles"), __jsx("option", {
      value: "10",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2579907853", [_pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, _pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, hoverColor]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 29
      }
    }, "10 Miles"), __jsx("option", {
      value: "15",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2579907853", [_pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, _pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, hoverColor]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 29
      }
    }, "15 Miles"), __jsx("option", {
      value: "20",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2579907853", [_pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, _pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, hoverColor]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 29
      }
    }, "20 Miles"), __jsx("option", {
      value: "100",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2579907853", [_pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, _pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, hoverColor]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 29
      }
    }, "No Max"))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2579907853", [_pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, _pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, hoverColor]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 21
      }
    }, __jsx("select", {
      onChange: this.handleChange,
      value: this.state.difficulty,
      name: "difficulty",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2579907853", [_pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, _pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, hoverColor]]]) + " " + "formInput select",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 25
      }
    }, __jsx("option", {
      value: "",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2579907853", [_pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, _pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, hoverColor]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 29
      }
    }, "Difficulty"), __jsx("option", {
      value: "green",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2579907853", [_pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, _pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, hoverColor]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 29
      }
    }, "Novice"), __jsx("option", {
      value: "greenBlue",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2579907853", [_pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, _pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, hoverColor]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 29
      }
    }, "Proficient"), __jsx("option", {
      value: "blue",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2579907853", [_pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, _pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, hoverColor]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 29
      }
    }, "Strenuous"), __jsx("option", {
      value: "blueBlack",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2579907853", [_pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, _pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, hoverColor]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 29
      }
    }, "Very strenuous"), __jsx("option", {
      value: "black",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2579907853", [_pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, _pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, hoverColor]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 29
      }
    }, "You're Wild"), __jsx("option", {
      value: "",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2579907853", [_pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, _pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, hoverColor]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 29
      }
    }, "All Difficulties"))), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2579907853", [_pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, _pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, hoverColor]]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 21
      }
    }, __jsx("button", {
      type: "submit",
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2579907853", [_pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, _pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, hoverColor]]]) + " " + "global-button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 25
      }
    }, "Find me trails"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2579907853",
      dynamic: [_pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, _pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main, hoverColor],
      __self: this
    }, `.formInput.__jsx-style-dynamic-selector{border-color:${_pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main};padding:5px 10px;margin:5px;width:37vh;font-size:20px;}.select.__jsx-style-dynamic-selector{padding:5px 10px;}.global-button.__jsx-style-dynamic-selector{-webkit-text-decoration:none;text-decoration:none;padding:1rem 1.75rem;background-color:${_pages_theme__WEBPACK_IMPORTED_MODULE_3__["default"].palette.primary.main};color:white;border-radius:2rem;font-weight:700;box-shadow:1px 4px 8px #050066;margin:1rem 1rem;border:none;font-size:.8rem;}.global-button.__jsx-style-dynamic-selector:hover{background-color:${hoverColor};}textarea.__jsx-style-dynamic-selector:focus,input.__jsx-style-dynamic-selector:focus{outline:none;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4YW5kcmF0aG9ybnRvbi9HaXRodWIvT3V0c2lkZS9ub3QtY2FuY2VsbGVkL2NvbXBvbmVudHMvVXNlcklucHV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9FNEIsQUFHbUUsQUFPekIsQUFHSSxBQVl5QixBQUdqQyxhQUNqQixJQWxCQSx5QkFQcUIsSUFzQnJCLElBWnlCLFNBVFYsV0FDQSxDQVNtQyxVQVIvQixlQUNuQixxQkFRZ0IsWUFDTSxtQkFDRixnQkFDZSwrQkFDZCxpQkFDTCxZQUNJLGdCQUNwQiIsImZpbGUiOiIvVXNlcnMvYWxleGFuZHJhdGhvcm50b24vR2l0aHViL091dHNpZGUvbm90LWNhbmNlbGxlZC9jb21wb25lbnRzL1VzZXJJbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3NzLCBqc3ggfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCB0aGVtZSBmcm9tICcuLi9wYWdlcy90aGVtZSc7XG5cbmNsYXNzIFVzZXJJbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNpdHk6ICcnLFxuICAgICAgICAgICAgc3RhdGU6ICcnLFxuICAgICAgICAgICAgbWluTGVuZ3RoOiAnJyxcbiAgICAgICAgICAgIG1heExlbmd0aDogJycsXG4gICAgICAgICAgICBkaWZmaWN1bHR5OiAnJ1xuICAgICAgICB9XG4gICAgfVxuICAgIGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgIH1cbiAgICBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMucHJvcHMuZmluZEdlb0NvZGUodGhpcy5zdGF0ZSlcbiAgICB9XG4gICAgcmVuZGVyKCl7XG4gICAgICAgIGNvbnN0IGhvdmVyQ29sb3IgPSAnIzA4MDA5Yyc7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXItaW5wdXQtZm9ybVwiPlxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0ID0ge3RoaXMuaGFuZGxlU3VibWl0fSA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG9uQ2hhbmdlID0ge3RoaXMuaGFuZGxlQ2hhbmdlfSBjbGFzc05hbWUgPSBcImZvcm1JbnB1dFwiIHBsYWNlaG9sZGVyID0gJ0NpdHknIHR5cGUgPSBcInRleHRcIiBuYW1lID0gXCJjaXR5XCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBvbkNoYW5nZSA9IHt0aGlzLmhhbmRsZUNoYW5nZX0gY2xhc3NOYW1lID0gXCJmb3JtSW5wdXRcIiBwbGFjZWhvbGRlciA9ICdTdGF0ZScgdHlwZSA9IFwidGV4dFwiIG5hbWUgPSBcInN0YXRlXCIvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2UgPSB7dGhpcy5oYW5kbGVDaGFuZ2V9IGNsYXNzTmFtZSA9IFwiZm9ybUlucHV0IHNlbGVjdFwiIHZhbHVlID0ge3RoaXMuc3RhdGUubWluTGVuZ3RofW5hbWUgPSAnbWluTGVuZ3RoJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gJzAnPk1pbiBNaWxlczwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSAnMSc+MSBNaWxlczwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSAnNSc+NSBNaWxlczwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIjEwXCI+MTAgTWlsZXM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2UgPSB7dGhpcy5oYW5kbGVDaGFuZ2V9IGNsYXNzTmFtZSA9IFwiZm9ybUlucHV0IHNlbGVjdFwiIHZhbHVlID0ge3RoaXMuc3RhdGUubWF4TGVuZ3RofSBuYW1lID0gJ21heExlbmd0aCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9ICcnPk1heCBNaWxlczwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSAnNSc+NSBNaWxlczwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSAnMTAnPjEwIE1pbGVzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9IFwiMTVcIj4xNSBNaWxlczwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIjIwXCI+MjAgTWlsZXM8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gXCIxMDBcIj5ObyBNYXg8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2UgPSB7dGhpcy5oYW5kbGVDaGFuZ2V9IGNsYXNzTmFtZSA9IFwiZm9ybUlucHV0IHNlbGVjdFwiIHZhbHVlID0ge3RoaXMuc3RhdGUuZGlmZmljdWx0eX0gbmFtZSA9ICdkaWZmaWN1bHR5Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gJyc+RGlmZmljdWx0eTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSAnZ3JlZW4nPk5vdmljZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSAnZ3JlZW5CbHVlJz5Qcm9maWNpZW50PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9IFwiYmx1ZVwiPlN0cmVudW91czwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcImJsdWVCbGFja1wiPlZlcnkgc3RyZW51b3VzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9IFwiYmxhY2tcIj5Zb3UncmUgV2lsZDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSAnJz5BbGwgRGlmZmljdWx0aWVzPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGUgPSBcInN1Ym1pdFwiIGNsYXNzTmFtZSA9IFwiZ2xvYmFsLWJ1dHRvblwiPkZpbmQgbWUgdHJhaWxzPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIC5mb3JtSW5wdXR7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICR7dGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW59O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzN3ZoO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5zZWxlY3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmdsb2JhbC1idXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbSAxLjc1cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbn07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzIDJyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDRweCA4cHggIzA1MDA2NjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMXJlbSAxcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuZ2xvYmFsLWJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2hvdmVyQ29sb3J9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRleHRhcmVhOmZvY3VzLCBpbnB1dDpmb2N1c3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBVc2VySW5wdXQ7Il19 */
/*@ sourceURL=/Users/alexandrathornton/Github/Outside/not-cancelled/components/UserInput.js */`));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (UserInput);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/theme.js":
/*!************************!*\
  !*** ./pages/theme.js ***!
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

/***/ "./pages/trails.js":
/*!*************************!*\
  !*** ./pages/trails.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_TrailFinder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/TrailFinder */ "./components/TrailFinder.js");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Nav */ "./components/Nav.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theme */ "./pages/theme.js");
var _jsxFileName = "/Users/alexandrathornton/Github/Outside/not-cancelled/pages/trails.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const Trails = () => {
  const hoverColor = '#08009c';
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3073691018", [_theme__WEBPACK_IMPORTED_MODULE_5__["default"].palette.primary.main, hoverColor]]]) + " " + "content-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3073691018", [_theme__WEBPACK_IMPORTED_MODULE_5__["default"].palette.primary.main, hoverColor]]]) + " " + "wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3073691018", [_theme__WEBPACK_IMPORTED_MODULE_5__["default"].palette.primary.main, hoverColor]]]) + " " + "title-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3073691018", [_theme__WEBPACK_IMPORTED_MODULE_5__["default"].palette.primary.main, hoverColor]]]) + " " + "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, "Get outside and take a hike!"), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3073691018", [_theme__WEBPACK_IMPORTED_MODULE_5__["default"].palette.primary.main, hoverColor]]]) + " " + "subtitle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, "Enter your location and hike style preferences to get inspired!")), __jsx(_components_TrailFinder__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3073691018",
    dynamic: [_theme__WEBPACK_IMPORTED_MODULE_5__["default"].palette.primary.main, hoverColor],
    __self: undefined
  }, `li.__jsx-style-dynamic-selector{list-style:none;display:block;}.wrapper.__jsx-style-dynamic-selector{display:grid;max-width:100%;margin:2rem;}.content-container.__jsx-style-dynamic-selector{min-height:100vh;background:linear-gradient(#e66465,#9198e5);position:relative;}.title-wrapper.__jsx-style-dynamic-selector{display:grid;margin:0 auto;margin-top:-5rem;width:70%;justify-items:center;text-align:center;position:absolute;left:50%;-webkit-transform:translate(-50%,50%);-ms-transform:translate(-50%,50%);transform:translate(-50%,50%);}.title.__jsx-style-dynamic-selector{color:white;opacity:1;font-size:2rem;text-shadow:2px 2px #e66465;}.subtitle.__jsx-style-dynamic-selector{color:white;font-size:1.5rem;opacity:.7;font-style:italic;}.list-container.__jsx-style-dynamic-selector{display:grid;grid-template-columns:repeat(5,1fr);grid-column-gap:1rem;width:100%;}.list-item.__jsx-style-dynamic-selector{margin:2rem 0;}.button-wrapper.__jsx-style-dynamic-selector{margin-top:1rem;}.global-button.__jsx-style-dynamic-selector{-webkit-text-decoration:none;text-decoration:none;padding:1rem 1.75rem;background-color:${_theme__WEBPACK_IMPORTED_MODULE_5__["default"].palette.primary.main};color:white;border-radius:2rem;font-weight:700;box-shadow:1px 4px 8px #050066;margin:1rem 1rem;}.global-button.__jsx-style-dynamic-selector:hover{background-color:${hoverColor};}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4YW5kcmF0aG9ybnRvbi9HaXRodWIvT3V0c2lkZS9ub3QtY2FuY2VsbGVkL3BhZ2VzL3RyYWlscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQndCLEFBR2lDLEFBSUgsQUFLSSxBQUtKLEFBV0QsQUFPQSxBQU1DLEFBT0MsQUFJRSxBQUdLLEFBVXlCLFlBcENwQyxBQU9PLENBNUJGLEFBVUQsQUF3QnNCLENBT3hDLEVBN0NrQixBQWlEbEIsQ0F4Q2lELEtBaUI5QixLQVhFLENBVkwsQ0E0QkQsQ0FoQ2YsT0EwQmdDLEdBckJoQyxBQTRCc0IsSUFsQlIsRUE4Q2QsR0F2QnlCLENBYUEsSUFuQ0EsSUFrQnpCLEdBekJzQixJQWtCdEIsS0FZZSxDQWFtQyxJQW5DNUIsSUFQdEIsRUE4QkEsWUF0QnNCLGtCQUNULE1Ba0NHLEdBakNtQixTQWtDYixtQkFDRixnQkFDZSwrQkFDZCxpQkFDckIsVUFyQ0EiLCJmaWxlIjoiL1VzZXJzL2FsZXhhbmRyYXRob3JudG9uL0dpdGh1Yi9PdXRzaWRlL25vdC1jYW5jZWxsZWQvcGFnZXMvdHJhaWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYWlsRmluZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvVHJhaWxGaW5kZXInO1xuaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL05hdic7XG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi90aGVtZSc7XG5cbmNvbnN0IFRyYWlscyA9ICgpID0+IHtcbiAgICBjb25zdCBob3ZlckNvbG9yID0gJyMwODAwOWMnO1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPE5hdi8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+R2V0IG91dHNpZGUgYW5kIHRha2UgYSBoaWtlITwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+RW50ZXIgeW91ciBsb2NhdGlvbiBhbmQgaGlrZSBzdHlsZSBwcmVmZXJlbmNlcyB0byBnZXQgaW5zcGlyZWQhPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxUcmFpbEZpbmRlciAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDJyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGVudC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZTY2NDY1LCAjOTE5OGU1KTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGl0bGUtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtNXJlbTtcbiAgICAgICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA1MCUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggI2U2NjQ2NTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnN1YnRpdGxlIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogLjc7XG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxpc3QtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoNSwgMWZyKTtcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbi1nYXA6IDFyZW07XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5saXN0LWl0ZW0ge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMnJlbSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYnV0dG9uLXdyYXBwZXIge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZ2xvYmFsLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMS43NXJlbTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWlufTtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1cyAycmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDRweCA4cHggIzA1MDA2NjtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDFyZW0gMXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5nbG9iYWwtYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2hvdmVyQ29sb3J9O1xuICAgICAgICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhaWxzO1xuXG5cbiJdfQ== */
/*@ sourceURL=/Users/alexandrathornton/Github/Outside/not-cancelled/pages/trails.js */`));
};

/* harmony default export */ __webpack_exports__["default"] = (Trails);

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/trails.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/alexandrathornton/Github/Outside/not-cancelled/pages/trails.js */"./pages/trails.js");


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

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=trails.js.map