"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var React = _interopRequireWildcard(require("react"));
var _colors = _interopRequireDefault(require("./colors/colors1"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var ArmsArmoSlotIcon = function ArmsArmoSlotIcon(_ref) {
  var rank = _ref.rank,
    size = _ref.size;
  var col = _colors["default"][rank] || _colors["default"][1];
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
    d: "m147 922 4 4v4l1 1v1l-1 1v4l1 1v7l-1 1v5h21v-5l-.5-1v-7l.5-1v-4l-1-1v-1l1-1v-4l-1-1v-3l1-1.5-1-1.5v-2l1-1v-3l-1-1v-5l-4-4h-1l-1.5 1-1.5-1h-2.979l-1.446 1-1.583-1h-2.945l-1.541 1-1.506-1-5.5 6.5z",
    style: {
      fillOpacity: 0.76
    },
    transform: "translate(-128 -896)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M147 908h-3v11l3 3zm7-5h-3v10h3zm6 0h-3v10h3zm6 0h-3v10h3zm6 3h-3v7h3z",
    style: {
      fill: col.fill1
    },
    transform: "translate(-128 -896)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M176 950h-28v3h28zm-4-13h-21v9h21zm-16 4a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1zm10 0a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1zm-5 0a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1zm10 0a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1zm1-11h-21v3h21zm0-13s0-1-1-1h-19c-1 0-1 1-1 1v9l21 .045zm-16 3a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1zm10 0a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1zm-5 0a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1zm10 0a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1z",
    style: {
      fill: col.fill2
    },
    transform: "translate(-128 -896)"
  }));
};
var _default = exports["default"] = ArmsArmoSlotIcon;