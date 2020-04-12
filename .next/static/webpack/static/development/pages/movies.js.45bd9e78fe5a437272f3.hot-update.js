webpackHotUpdate("static/development/pages/movies.js",{

/***/ "./pages/movies.js":
/*!*************************!*\
  !*** ./pages/movies.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Nav */ "./components/Nav.js");


var _this = undefined,
    _jsxFileName = "/Users/alexandrathornton/Github/Outside/not-cancelled/pages/movies.js";



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var Movies = function Movies(props) {
  var hoverColor = '#08009c';
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3622812002", [hoverColor]]]) + " " + "content-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3622812002", [hoverColor]]]) + " " + "title-wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3622812002", [hoverColor]]]) + " " + "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, "Staying inside? Watch a movie"), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3622812002", [hoverColor]]]) + " " + "subtitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, "Choose a genre to get started"), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3622812002", [hoverColor]]]) + " " + "list-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, props.genres.map(function (genre) {
    return __jsx("li", {
      key: genre.id,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3622812002", [hoverColor]]]) + " " + "list-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/movie-genres/[id]",
      as: "/movie-genres/".concat(genre.name),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 21
      }
    }, __jsx("a", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3622812002", [hoverColor]]]) + " " + "global-button",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 25
      }
    }, genre.name)));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3622812002",
    dynamic: [hoverColor],
    __self: _this
  }, "li.__jsx-style-dynamic-selector{list-style:none;display:block;}.content-container.__jsx-style-dynamic-selector{height:100vh;background:linear-gradient(#e66465,#9198e5);position:relative;}.title-wrapper.__jsx-style-dynamic-selector{display:grid;margin:0 auto;width:70%;justify-items:center;text-align:center;position:absolute;left:50%;top:-15%;-webkit-transform:translate(-50%,50%);-ms-transform:translate(-50%,50%);transform:translate(-50%,50%);}.title.__jsx-style-dynamic-selector{color:white;opacity:1;font-size:2rem;text-shadow:2px 2px #e66465;}.subtitle.__jsx-style-dynamic-selector{color:white;font-size:1.5rem;opacity:.7;font-style:italic;}.list-container.__jsx-style-dynamic-selector{display:grid;grid-template-columns:repeat(5,1fr);grid-column-gap:1rem;width:100%;}.list-item.__jsx-style-dynamic-selector{margin:2rem 0;}.button-wrapper.__jsx-style-dynamic-selector{margin-top:1rem;}.global-button.__jsx-style-dynamic-selector{-webkit-text-decoration:none;text-decoration:none;padding:1rem 1.75rem;background-color:blue;color:white;border-radius:2rem;font-weight:700;box-shadow:1px 4px 8px #050066;margin:1rem 1rem;}.global-button.__jsx-style-dynamic-selector:hover{background-color:".concat(hoverColor, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbGV4YW5kcmF0aG9ybnRvbi9HaXRodWIvT3V0c2lkZS9ub3QtY2FuY2VsbGVkL3BhZ2VzL21vdmllcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Qm9CLEFBR2lDLEFBSUgsQUFLQSxBQVdELEFBT0EsQUFNQyxBQU9DLEFBSUUsQUFHSyxBQVV5QixZQXBDcEMsQUFPTyxDQXZCNEIsQUFLL0IsQUF3QnNCLENBT3hDLEVBeENrQixBQTRDbEIsTUF2Qm1CLEtBWEwsRUFrQkMsQ0EzQmYsT0FVeUIsQUFXTyxHQU9WLE1BNEJ0QixHQXZCeUIsQ0FhQSxPQTFDSCxDQU9BLEFBa0J0QixPQVBBLEtBWWUsQ0FhVyxJQTFDMUIsQ0FPc0IsS0F1QnRCLFlBYWdCLENBbkNILFNBQ0EsRUFtQ1MsT0FsQ2EsWUFtQ2YsZ0JBQ2UsK0JBQ2QsaUJBQ3JCLDBCQXJDQSIsImZpbGUiOiIvVXNlcnMvYWxleGFuZHJhdGhvcm50b24vR2l0aHViL091dHNpZGUvbm90LWNhbmNlbGxlZC9wYWdlcy9tb3ZpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgeyBjc3MsIGpzeCB9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvTmF2JztcblxuY29uc3QgTW92aWVzID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgaG92ZXJDb2xvciA9ICcjMDgwMDljJztcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxOYXYvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+U3RheWluZyBpbnNpZGU/IFdhdGNoIGEgbW92aWU8L2gxPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+Q2hvb3NlIGEgZ2VucmUgdG8gZ2V0IHN0YXJ0ZWQ8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtY29udGFpbmVyXCI+XG4gICAgICAgICAgICB7cHJvcHMuZ2VucmVzLm1hcCgoZ2VucmUpID0+IChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtnZW5yZS5pZH0gY2xhc3NOYW1lPVwibGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbW92aWUtZ2VucmVzL1tpZF1cIiBhcz17YC9tb3ZpZS1nZW5yZXMvJHtnZW5yZS5uYW1lfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZ2xvYmFsLWJ1dHRvblwiPntnZW5yZS5uYW1lfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZTY2NDY1LCAjOTE5OGU1KTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGl0bGUtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICB0b3A6IC0xNSU7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNTAlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAycHggMnB4ICNlNjY0NjU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zdWJ0aXRsZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IC43O1xuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5saXN0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KDUsIDFmcik7XG4gICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiAxcmVtO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubGlzdC1pdGVtIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDJyZW0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJ1dHRvbi13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmdsb2JhbC1idXR0b24ge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDEuNzVyZW07XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1cyAycmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDRweCA4cHggIzA1MDA2NjtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDFyZW0gMXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5nbG9iYWwtYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2hvdmVyQ29sb3J9O1xuICAgICAgICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5Nb3ZpZXMuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvZ2VucmUvbW92aWUvbGlzdD9hcGlfa2V5PWM3YmQ4MmI5MDJiMDAzZjhkZjI3MDNhZTgxNDE2OWI1Jmxhbmd1YWdlPWVuLVVTYClcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIGNvbnNvbGUubG9nKGBTaG93IGRhdGEgZmV0Y2hlZC4gQ291bnQ6ICR7ZGF0YS5sZW5ndGh9YCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2VucmVzIDogZGF0YS5nZW5yZXNcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllczsiXX0= */\n/*@ sourceURL=/Users/alexandrathornton/Github/Outside/not-cancelled/pages/movies.js */")));
};

Movies.getInitialProps = function _callee() {
  var res, data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("https://api.themoviedb.org/3/genre/movie/list?api_key=c7bd82b902b003f8df2703ae814169b5&language=en-US"));

        case 2:
          res = _context.sent;
          _context.next = 5;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

        case 5:
          data = _context.sent;
          console.log("Show data fetched. Count: ".concat(data.length));
          return _context.abrupt("return", {
            genres: data.genres
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Movies);

/***/ })

})
//# sourceMappingURL=movies.js.45bd9e78fe5a437272f3.hot-update.js.map