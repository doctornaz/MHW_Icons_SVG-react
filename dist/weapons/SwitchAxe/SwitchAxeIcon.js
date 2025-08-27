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
var SwitchAxeIcon = function SwitchAxeIcon(_ref) {
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
    d: "M552 974h9v5h-9v5h9v5h-9v11l-5 6v12h-5v-2l-2-2v-8l-3-3v-3h2v-8h-16v-21h29z",
    style: {
      fillOpacity: 0.76
    },
    transform: "translate(-512 -960)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M541 1006h-1c-.552 0-1 .45-1 1v6c0 .55.448 1 1 1h1zm11-14h-13v-2h-4a1 1 0 0 1-1-1v-5h-4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h4v-9a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1zm-6-10c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4m0-11c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4",
    style: {
      fill: col.fill1
    },
    transform: "translate(-512 -960)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M547 1015h2v4c0 .55-.448 1-1 1h-6c-.552 0-1-.45-1-1v-4h2v2h4zm0-3c0-.55-.448-1-1-1h-2v3h2c.552 0 1-.45 1-1zm-21-41v27s0 4 2 6 3 2 3 2v2s-7 1-10-3-3-7-3-7v-26s0-1 1-1zm21 36c0-.55-.448-1-1-1h-2v2h2c.552 0 1-.45 1-1m13-42h10v21l-10 10z",
    style: {
      fill: col.fill2
    },
    transform: "translate(-512 -960)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M550 995h2v7c0 .55-.448 1-1 1h-14c-.552 0-1-.45-1-1v-1c0-.55.448-1 1-1h2v-5h3c0 2.208 1.792 4 4 4s4-1.792 4-4m-2 0h-4a2 2 0 0 0 4 0m18-30-3 3 5 5-5 5 5 5-5 5 2.5 2.5-5.5 5.5v-31zm-35 23a1 1 0 0 0-1-1h-4v5h4a1 1 0 0 0 1-1zm15-4a2 2 0 1 1-.001 4.001A2 2 0 0 1 546 984m0-11a2 2 0 1 1-.001 4.001A2 2 0 0 1 546 973m-15-1a1 1 0 0 0-1-1h-4v5h4a1 1 0 0 0 1-1z",
    style: {
      fill: col.fill3
    },
    transform: "translate(-512 -960)"
  }));
};
var _default = exports["default"] = SwitchAxeIcon;