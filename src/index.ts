import { App } from 'vue';

import { default as loader } from './lib-components/LktLoader.vue';
import LktSpinner from './lib-components/LktSpinner.vue';
import {Component} from "vue/dist/vue";
import {Settings} from "./settings/Settings";

const LktLoader = {
  install: (app: App) => {
    app.component('lkt-loader', loader).component('lkt-spinner', LktSpinner);
  },
};

export default LktLoader;

export const setCustomLoader = (component: string|Component) => {
  Settings.setCustomLoader(component);
}

export const setCustomSpinner = (component: string|Component) => {
  Settings.setCustomSpinner(component);
}
