import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import todoReducer from "./todo";
import authReducer from "./auth";

const persistConfig = {
    key: 'root',
    storage,
    // whitelist: "auth"
}

const reducer = combineReducers({
    todo: todoReducer,
    auth: authReducer
});

const persistedReducer = persistReducer(persistConfig, reducer)

// const asyncMiddleware = (store) => (next) => (action) => {
//   if (typeof action === "function") {
//     return action(next);
//   }
//   return next(action);
// };

// const action = (action) => {
//       if (typeof action === "function") {
//         return action(next);
//       }
//       return next(action);
// };

// const next = (next) => action();

// const asyncMiddleware = (store) => next();

// export default createStore(reducer, applyMiddleware(thunk));

// configureStore tích hợp cả thunk và có kích hoạt redux devtool
const store = configureStore({
    reducer: persistedReducer
});

export const persistor = persistStore(store);

export default store;
