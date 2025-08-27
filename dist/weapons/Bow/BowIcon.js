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
var BowIcon = function BowIcon(_ref) {
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
    d: "m850.441 1016.46-2.829-2.83 4.293-4.29 2.829 2.83zM844.027 991l3.973-2s3-7 7-7 10 8 12 8h4l7-7h16l-8 8v2l8 8h-16l-7-7h-4c-2 0-9 9-13 9s-6-8-6-8l-4-2zm6.414-23.246-2.829 2.828 4.293 4.293 2.829-2.828z",
    style: {
      fillOpacity: 0.77
    },
    transform: "translate(-832 -960)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M857 996v4c0 2-3 4-3 6s3 3 7 3 6-1 8-1 4 3 4 5-3 6-4 6-3 0-3-1 3-2 3-4q0-3-3-3c-2 0-6 2-10 2s-6-2-6-5 5-7 5-9v-3s0-1 1-1 1 1 1 1m30 5h-3l-6-6h3zm-46-12-5 3 5 3h4v-6zm46-6h-3l-6 6h3zm-17.988-18c1.011.031 3.988 4.008 3.988 6 0 2-2 5-4 5s-4-1-8-1-7 1-7 3c0 .937.659 1.875 1.36 2.813l.28.375c.701.937 1.36 1.875 1.36 2.812v4s0 1-1 1-1-1-1-1v-3c0-2-5-6-5-9s2-5 6-5 8 2 10 2q3 0 3-3c0-2-3-3-3-4s2-1 3-1z",
    style: {
      fill: col.fill1
    },
    transform: "translate(-832 -960)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M848.441 1018.46c-.781.78-2.048.78-2.829 0-.78-.78-.78-2.05 0-2.83l2.293-2.29 2.829 2.83zM892 1001h-3l-6-6h3zm-10 0h-3l-6-6h3zm-30-4c0 1.656-1.344 3-3 3a1 1 0 0 1-1-1v-4h4zm12 1a2 2 0 0 1-2 2h-2v-5h4zm22-7h-38v2h38zm6-8h-3l-6 6h3zm-10 0h-3l-6 6h3zm-30 4c0-1.656-1.344-3-3-3a1 1 0 0 0-1 1v4h4zm12-1a2 2 0 0 0-2-2h-2v5h4zm-15.559-20.246a2 2 0 0 0-2.829 2.828l2.293 2.293 2.829-2.828z",
    style: {
      fill: col.fill2
    },
    transform: "translate(-832 -960)"
  }));
};
var _default = exports["default"] = BowIcon;