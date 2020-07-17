import ReactDOM from "react-dom";
import {AppContainer} from "react-hot-loader";
import {Provider, } from "react-redux";
import {createStore, applyMiddleware, compose} from "redux";
import createSagaMiddleware from "redux-saga";
import {routerMiddleware} from "react-router-redux";

import createReducer from "./reducers";
import {GlobalDefinitions} from "./GlobalDefinitions";
import {HEMPConfig} from "./config";

(window as GlobalDefinitions).hempConfig = new HEMPConfig;
const sagaMiddleware = createSagaMiddleware();
(window as GlobalDefinitions).sagaMiddleware = sagaMiddleware;
const composeEnhancers = (window as GlobalDefinitions).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reduxRouterMiddleware = routerMiddleware(history);


const store = createStore(
    createReducer(undefined),
    composeEnhancers(applyMiddleware(sagaMiddleware, reduxRouterMiddleware))
)
ReactDOM.render(
    <AppContainer>
        <Provider store={store}>

        </Provider>
    </AppContainer>,
    document.getElementById("rootElement")
);