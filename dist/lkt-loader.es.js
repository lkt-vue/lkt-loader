var _ = Object.defineProperty;
var C = (t, e, s) => e in t ? _(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s;
var i = (t, e, s) => (C(t, typeof e != "symbol" ? e + "" : e, s), s);
import { defineComponent as u, computed as r, openBlock as n, createElementBlock as a, createBlock as d, resolveDynamicComponent as m } from "vue";
const c = class {
  static setCustomLoader(e) {
    c.CustomLoader = e;
  }
  static setCustomSpinner(e) {
    c.CustomSpinner = e;
  }
};
let o = c;
i(o, "CustomLoader"), i(o, "CustomSpinner");
const k = { class: "lkt-loader-container" }, L = {
  key: 1,
  class: "lkt-loader"
}, f = { name: "LktLoader", inheritAttrs: !1 }, v = /* @__PURE__ */ u({
  ...f,
  setup(t) {
    const e = r(() => typeof o.CustomLoader < "u"), s = r(() => o.CustomLoader);
    return (l, p) => (n(), a("div", k, [
      e.value ? (n(), d(m(s.value), { key: 0 })) : (n(), a("div", L))
    ]));
  }
}), h = { class: "lkt-spinner-container" }, y = {
  key: 1,
  class: "lkt-spinner"
}, S = { name: "LktSpinner", inheritAttrs: !1 }, $ = /* @__PURE__ */ u({
  ...S,
  setup(t) {
    const e = r(() => typeof o.CustomSpinner < "u"), s = r(() => o.CustomSpinner);
    return (l, p) => (n(), a("div", h, [
      e.value ? (n(), d(m(s.value), { key: 0 })) : (n(), a("div", y))
    ]));
  }
}), A = {
  install: (t) => {
    t.component("lkt-loader", v).component("lkt-spinner", $);
  }
}, D = (t) => {
  o.setCustomLoader(t);
}, E = (t) => {
  o.setCustomSpinner(t);
};
export {
  A as default,
  D as setCustomLoader,
  E as setCustomSpinner
};
