import { Component } from "vue";
export declare class Settings {
    static CustomLoader: string | Component | undefined;
    static CustomSpinner: string | Component | undefined;
    static setCustomLoader(component: string | Component): void;
    static setCustomSpinner(component: string | Component): void;
}
