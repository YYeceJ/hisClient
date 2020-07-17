import { Store } from "redux";
import { SagaMiddleware } from "redux-saga";
import { HEMPConfig } from "./config";

declare global {
    interface Window {
        store: Store<any>;  // redux state store
        sagaMiddleware: SagaMiddleware<{}>;
        asyncReducers: {[key: string]: any};
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
        hempConfig: HEMPConfig,
    }
}

export interface GlobalDefinitions extends Window {}
