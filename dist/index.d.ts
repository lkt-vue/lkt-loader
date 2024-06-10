import { Plugin, Component } from 'vue';
import "../style.css";
declare const LktLoader: Plugin;
export default LktLoader;
export declare const setCustomLoader: (component: string | Component) => void;
export declare const setCustomSpinner: (component: string | Component) => void;
