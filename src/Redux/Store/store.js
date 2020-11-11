import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from 'redux-thunk';

import rootReucer from "../RootReducer/rootReducer";

const middleware = [thunk, logger];

const store = createStore(rootReucer, composeWithDevTools(applyMiddleware(...middleware)));

export {store};
