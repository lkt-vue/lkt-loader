import { defineComponent as i, computed as r, createElementBlock as c, openBlock as s, createBlock as d, resolveDynamicComponent as m } from "vue";
const n = class n {
  static setCustomLoader(o) {
    n.CustomLoader = o;
  }
  static setCustomSpinner(o) {
    n.CustomSpinner = o;
  }
};
n.CustomLoader = void 0, n.CustomSpinner = void 0;
let t = n;
const p = { class: "lkt-loader-container" }, _ = {
  key: 1,
  class: "lkt-loader"
}, k = /* @__PURE__ */ i({
  __name: "LktLoader",
  setup(e) {
    const o = r(() => typeof t.CustomLoader < "u"), a = r(() => t.CustomLoader);
    return (u, l) => (s(), c("div", p, [
      o.value ? (s(), d(m(a.value), { key: 0 })) : (s(), c("div", _))
    ]));
  }
}), C = { class: "lkt-spinner-container" }, L = {
  key: 1,
  class: "lkt-spinner"
}, v = /* @__PURE__ */ i({
  __name: "LktSpinner",
  setup(e) {
    const o = r(() => typeof t.CustomSpinner < "u"), a = r(() => t.CustomSpinner);
    return (u, l) => (s(), c("div", C, [
      o.value ? (s(), d(m(a.value), { key: 0 })) : (s(), c("div", L))
    ]));
  }
}), h = {
  install: (e) => {
    e.component("lkt-loader") === void 0 && e.component("lkt-loader", k), e.component("lkt-spinner") === void 0 && e.component("lkt-spinner", v);
  }
}, y = (e) => {
  t.setCustomLoader(e);
}, S = (e) => {
  t.setCustomSpinner(e);
};
export {
  h as default,
  y as setCustomLoader,
  S as setCustomSpinner
};
