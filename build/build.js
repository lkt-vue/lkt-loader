import { defineComponent as i, computed as r, openBlock as s, createElementBlock as a, createBlock as d, resolveDynamicComponent as u } from "vue";
const n = class n {
  static setCustomLoader(o) {
    n.CustomLoader = o;
  }
  static setCustomSpinner(o) {
    n.CustomSpinner = o;
  }
};
n.CustomLoader = void 0, n.CustomSpinner = void 0;
let e = n;
const p = { class: "lkt-loader-container" }, _ = {
  key: 1,
  class: "lkt-loader"
}, k = { name: "LktLoader", inheritAttrs: !1 }, C = /* @__PURE__ */ i({
  ...k,
  setup(t) {
    const o = r(() => typeof e.CustomLoader < "u"), c = r(() => e.CustomLoader);
    return (l, m) => (s(), a("div", p, [
      o.value ? (s(), d(u(c.value), { key: 0 })) : (s(), a("div", _))
    ]));
  }
}), f = { class: "lkt-spinner-container" }, L = {
  key: 1,
  class: "lkt-spinner"
}, v = { name: "LktSpinner", inheritAttrs: !1 }, h = /* @__PURE__ */ i({
  ...v,
  setup(t) {
    const o = r(() => typeof e.CustomSpinner < "u"), c = r(() => e.CustomSpinner);
    return (l, m) => (s(), a("div", f, [
      o.value ? (s(), d(u(c.value), { key: 0 })) : (s(), a("div", L))
    ]));
  }
}), S = {
  install: (t) => {
    t.component("lkt-loader") === void 0 && t.component("lkt-loader", C), t.component("lkt-spinner") === void 0 && t.component("lkt-spinner", h);
  }
}, $ = (t) => {
  e.setCustomLoader(t);
}, x = (t) => {
  e.setCustomSpinner(t);
};
export {
  S as default,
  $ as setCustomLoader,
  x as setCustomSpinner
};
