// import { compose, createStore, applyMiddleware } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "root",
//   storage,
//   blacklist: ["user"],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const loggerMiddleware = (store) => (next) => (action) => {
//   if (!action.type) {
//     return next(action);
//   }

//   console.log("type: ", action.type);
//   console.log("payload: ", action.payload);
//   console.log("currentState: ", store.getState());

//   next(action);

//   console.log("next state: ", store.getState());
// };

// const middleWares = [loggerMiddleware];

const middleWares = [process.env.NODE_ENV !== "production" && logger].filter(
  Boolean
);

// const composeEnhancer =
//   (process.env.NODE_ENV !== "production" &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

// REDUX-THUNK IS INCLUDED BY DEFAULT
// IF I MODIFY MIDDLWARE IT WILL REMOVE REDUX-THUNK
export const store = configureStore({
  reducer: rootReducer,
  // middleware: middleWares,

  // HOW TO USE DEFAULT MIDDLEWARE & MY OWN without SERIALITABLECHECK
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // serializableCheck: false,
    }).concat(middleWares),
});

// export const persistor = persistStore(store);
