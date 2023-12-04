import {Component} from "vue";

export class Settings {
    static CustomLoader: string|Component = undefined

    static setCustomLoader(component: string|Component) {
        Settings.CustomLoader =  component;
    }
}