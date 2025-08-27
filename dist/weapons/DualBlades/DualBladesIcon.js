"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var React = _interopRequireWildcard(require("react"));
var _rankcolors = _interopRequireDefault(require("./rankcolors"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var DualBladesIcon = function DualBladesIcon(_ref) {
  var rank = _ref.rank,
    size = _ref.size;
  var col = _rankcolors["default"][rank] || _rankcolors["default"][1];
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlSpace: "preserve",
    style: {
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 2
    },
    viewBox: "0 0 64 64",
    width: size,
    height: size
  }, /*#__PURE__*/React.createElement("path", {
    d: "M241 454v8l-7 6v-13h-3l3-4zm-33 0v8l7 6v-13h3l-3-4z",
    style: {
      fillOpacity: 0.75
    },
    transform: "translate(-192 -416)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M234.839 470.448c.112-.687.252-1.361.422-1.844.516-1.471 1.767-3.991.746-4.604-1.022-.614-2.55 1.703-3.715 2.819-.393.377-.952.826-1.52 1.257a3.5 3.5 0 0 0-2.272 1.621 3.501 3.501 0 0 0 6 3.606 3.49 3.49 0 0 0 .339-2.855m-20.678 0c-.112-.687-.252-1.361-.422-1.844-.516-1.471-1.767-3.991-.746-4.604 1.022-.614 2.55 1.703 3.715 2.819.393.377.952.826 1.52 1.257.963.204 1.78.804 2.272 1.621a3.501 3.501 0 0 1-6 3.606 3.49 3.49 0 0 1-.339-2.855",
    style: {
      fill: col.fill1
    },
    transform: "translate(-192 -416)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M227.336 454.757c.873-1.233 2.673-1.719 4.019-1.083 0 0 4.293 1.169 7.587 2.587s7.587 4.587 7.587 4.587c1.346.636 1.73 2.154.857 3.387-.872 1.234-2.673 1.719-4.019 1.083 0 0-2.728-1.879-7.098-4.355-4.371-2.477-8.076-2.818-8.076-2.818-1.346-.636-1.73-2.154-.857-3.388m-5.672 0c-.873-1.233-2.673-1.719-4.019-1.083 0 0-4.293 1.169-7.587 2.587s-7.587 4.587-7.587 4.587c-1.346.636-1.73 2.154-.857 3.387.872 1.234 2.673 1.719 4.019 1.083 0 0 2.728-1.879 7.098-4.355 4.371-2.477 8.076-2.818 8.076-2.818 1.346-.636 1.73-2.154.857-3.388M241 454l-7-3s6-10 6-17-8-12-8-12 15 3 15 13-6 19-6 19m-33 0 7-3s-6-10-6-17 8-12 8-12-15 3-15 13 6 19 6 19",
    style: {
      fill: col.fill2
    },
    transform: "translate(-192 -416)"
  }));
};
var _default = exports["default"] = DualBladesIcon;