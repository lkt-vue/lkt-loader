import { App, Plugin, Component } from 'vue';

import { default as loader } from './lib-components/LktLoader.vue';
import LktSpinner from './lib-components/LktSpinner.vue';
import {Settings} from "./settings/Settings";
import "../lkt-loader.css";
import "../lkt-spinner.css";

const LktLoader: Plugin = {
  install: (app: App) => {
    if (app.component('lkt-loader') === undefined) app.component('lkt-loader', loader);
    if (app.component('lkt-spinner') === undefined) app.component('lkt-spinner', LktSpinner);
  },
};

export default LktLoader;

export const setCustomLoader = (component: string|Component) => {
  Settings.setCustomLoader(component);
}

export const setCustomSpinner = (component: string|Component) => {
  Settings.setCustomSpinner(component);
}
