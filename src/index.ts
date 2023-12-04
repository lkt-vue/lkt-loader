import { App } from 'vue';

import { default as loader } from './lib-components/LktLoader.vue';
import {Component} from "vue/dist/vue";
import {Settings} from "./settings/Settings";

const LktLoader = {
  install: (app: App) => {
    app.component('lkt-loader', loader);
  },
};

export default LktLoader;

export const setCustomLoader = (component: string|Component) => {
  Settings.setCustomLoader(component);
}
