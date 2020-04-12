webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Trails.js":
/*!******************************!*\
  !*** ./components/Trails.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _UserInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./UserInput */ "./components/UserInput.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);








var _jsxFileName = "/Users/alexandrathornton/Github/Outside/not-cancelled/components/Trails.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



 // import WeatherInfo from './WeatherInfo/WeatherInfo'

var Trails = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Trails, _Component);

  var _super = _createSuper(Trails);

  function Trails() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Trails);

    _this = _super.call(this);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "findGeoCode", function _callee(formData) {
      var searchURL, result, parsedResponse;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              searchURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?address=".concat(formData.city, ",+").concat(formData.state, "&key=AIzaSyCxC93pv465QlIoGBJEWgafUpZwTJ_5tPg");
              _context.next = 4;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch(searchURL));

            case 4:
              result = _context.sent;
              _context.next = 7;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(result.json());

            case 7:
              parsedResponse = _context.sent;
              console.log("".concat(parsedResponse, " is the parsed response"));

              if (result.status === 200) {
                _this.setState({
                  lat: parsedResponse.results[0].geometry.location.lat,
                  lng: parsedResponse.results[0].geometry.location.lng,
                  city: formData.city,
                  state: formData.state,
                  minLength: formData.minLength,
                  maxLength: formData.maxLength,
                  difficulty: formData.difficulty
                });
              }

              console.log(_this.state);

              _this.findTrails();

              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 14]], Promise);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "findTrails", function _callee2() {
      var searchURL, result, parsedResponse;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log(_this.state.maxLength);
              _context2.prev = 1;
              searchURL = "https://www.hikingproject.com/data/get-trails?lat=".concat(_this.state.lat, "&lon=").concat(_this.state.lng, "&minLength=").concat(_this.state.minLength, "&maxDistance=10&key=200465360-942e3fb792b81fa531e25b7484cbc0f9");
              _context2.next = 5;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch(searchURL));

            case 5:
              result = _context2.sent;
              _context2.next = 8;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(result.json());

            case 8:
              parsedResponse = _context2.sent;

              if (result.status === 200) {
                if (_this.state.difficulty === '') {
                  _this.setState({
                    trails: parsedResponse.trails.filter(function (trails) {
                      return trails.length < _this.state.maxLength;
                    })
                  });
                } else {
                  _this.setState({
                    trails: parsedResponse.trails.filter(function (trails) {
                      return trails.length < _this.state.maxLength && trails.difficulty === _this.state.difficulty;
                    })
                  });
                }
              }

              _context2.next = 15;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](1);
              console.log(_context2.t0);

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[1, 12]], Promise);
    });

    _this.state = {
      lat: '',
      lng: '',
      city: '',
      state: '',
      trails: [],
      minLength: '',
      maxLength: '',
      difficulty: ''
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Trails, [{
    key: "render",
    value: function render(formData) {
      var _this2 = this;

      //     console.log(this.state.trails)
      //     // console.log(formData)
      //     console.log(this.state.lat, this.state.lng, 'IN TRAILS INFO')
      var trailList = this.state.trails.map(function (trail) {
        __jsx("li", {
          key: trail.id,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
          href: "/p/[id]",
          as: "/p/".concat(trail.id),
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 17
          }
        }, __jsx("a", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 17
          }
        }, trail.name))); // return (
        //     <div className = 'eachTrail'>
        //         <div>
        //              <h4>{trail.name}</h4> 
        //         </div>
        //          <div>
        //             <p>{trail.location}</p> 
        //          </div>
        //         <div className = 'mainTrailInfo'>
        //             <p>{trail.length} miles</p>
        //          </div>
        //         <div>
        //             <p>peak elevation: {trail.high}</p>
        //         </div>
        //         <div>
        //             <p>rating: {trail.stars} stars</p>
        //         </div>
        //         <div>
        //             <p><a href = {trail.url} target="_blank">more info</a></p>
        //         </div>
        //     </div>
        // )

      }); // console.log('this is the lat', this.state.lat, this.state.lng)

      return __jsx("div", {
        className: "whatIsThisDiv",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 13
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "userInput",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 21
        }
      }, __jsx(_UserInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
        findGeoCode: this.findGeoCode,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 25
        }
      })), __jsx("div", {
        className: "trailInfo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 18
        }
      }, trailList)));
    }
  }]);

  return Trails;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Trails);

/***/ })

})
//# sourceMappingURL=index.js.f8419c55b894722590d6.hot-update.js.map