import { App } from 'vue';
import { Component } from "vue/dist/vue";
import "../lkt-loader.css";
import "../lkt-spinner.css";
declare const LktLoader: {
    install: (app: App) => void;
};
export default LktLoader;
export declare const setCustomLoader: (component: string | Component) => void;
export declare const setCustomSpinner: (component: string | Component) => void;
