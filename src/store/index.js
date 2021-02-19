import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../saga";
import rootReducer from "../reducers";

/**
 *  Redux logging middleware
 */

const getReduxDevtoolsExtension = () => require("redux-devtools-extension");
const reduxDevToolOptions = { trace: true, traceLimit: 30 };
const sagaMiddleware = createSagaMiddleware();
const getStoreEnhancer = () => applyMiddleware(sagaMiddleware);

/**
 * Store Configuration
 */

export default function configureStore(isDevToolEnabled = false) {
  let initalState = {};
  const enhance = isDevToolEnabled
    ? getReduxDevtoolsExtension().composeWithDevTools(reduxDevToolOptions)(
        getStoreEnhancer()
      )
    : getStoreEnhancer();

  const store = createStore(rootReducer, initalState, enhance);
  const saga = sagaMiddleware.run(rootSaga);
  return store;
}
