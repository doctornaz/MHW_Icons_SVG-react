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
var SwordAndShieldIcon = function SwordAndShieldIcon(_ref) {
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
    d: "M19 1003h4v4h-4v9h-5v-17h5zm35.5-14.5h-16v16h16z",
    style: {
      fillOpacity: 0.76
    },
    transform: "translate(0 -960)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M51.5 992.5a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v8c0 .55.448 1 1 1h8c.552 0 1-.45 1-1z",
    style: {
      fill: col.fill1
    },
    transform: "translate(0 -960)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 1015h-5v2h5zm0-5h-5v3h5z",
    style: {
      fill: col.fill2
    },
    transform: "translate(0 -960)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M58.716 998c-.681 5.59-5.121 10.03-10.716 10.72V1007c0-.55-.448-1-1-1h-1c-.552 0-1 .45-1 1v1.72c-5.595-.69-10.035-5.13-10.716-10.72H36a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-1.716c.681-5.594 5.121-10.035 10.716-10.716V986a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1.716c5.595.681 10.035 5.122 10.716 10.716H57a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1zM20 1003v4H7c-.552 0-1-.45-1-1v-2c0-.55.448-1 1-1zm2 0h2c.552 0 1 .45 1 1v2c0 .55-.448 1-1 1h-2zm31-12a1 1 0 0 0-1-1H41a1 1 0 0 0-1 1v11c0 .55.448 1 1 1h11c.552 0 1-.45 1-1zm-39 9h5v-33h-1l-4 4z",
    style: {
      fill: col.fill3
    },
    transform: "translate(0 -960)"
  }));
};
var _default = exports["default"] = SwordAndShieldIcon;