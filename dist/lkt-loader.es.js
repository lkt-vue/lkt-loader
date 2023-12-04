var l = Object.defineProperty;
var m = (e, o, t) => o in e ? l(e, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[o] = t;
var c = (e, o, t) => (m(e, typeof o != "symbol" ? o + "" : o, t), t);
import { defineComponent as u, computed as d, openBlock as a, createElementBlock as n, createBlock as i, resolveDynamicComponent as L } from "vue";
const r = class {
  static setCustomLoader(o) {
    r.CustomLoader = o;
  }
};
let s = r;
c(s, "CustomLoader");
const _ = { class: "lkt-loader-container" }, p = {
  key: 1,
  class: "lkt-loader"
}, k = { name: "LktLoader", inheritAttrs: !1 }, C = /* @__PURE__ */ u({
  ...k,
  setup(e) {
    const o = d(() => typeof s.CustomLoader < "u"), t = d(() => s.CustomLoader);
    return (f, v) => (a(), n("div", _, [
      o.value ? (a(), i(L(t.value), { key: 0 })) : (a(), n("div", p))
    ]));
  }
}), B = {
  install: (e) => {
    e.component("lkt-loader", C);
  }
}, x = (e) => {
  s.setCustomLoader(e);
};
export {
  B as default,
  x as setCustomLoader
};
