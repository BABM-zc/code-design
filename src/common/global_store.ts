import { BaseStore } from "./base_store";


export class GlobalStore extends BaseStore {

    private static instance: GlobalStore;

    private componentMap = new Map<string, any>();

    public static getInstance(): GlobalStore {
        if (!this.instance) {
            this.instance = new GlobalStore();
        }
        return this.instance;
    }

    public set(key: string, value: any) {
        this.componentMap.set(key, value);
    }

    public get(key: string): any {
       return this.componentMap.has(key) && this.componentMap.get(key);
    }

}