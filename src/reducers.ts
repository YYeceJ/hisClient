import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { RN_ROUTER } from "./constants";

export default function createReducer(asyncReducers: any) {
    return combineReducers({
        [RN_ROUTER]: routerReducer,
        ...asyncReducers,
    });
}
