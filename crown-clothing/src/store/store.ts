import { compose, createStore, applyMiddleware, Middleware } from "redux";
// import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./root-saga";

export type RootState = ReturnType<typeof rootReducer>;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

type ExtendedPersistConfig = PersistConfig<RootState> & {
  whitelist: (keyof RootState)[];
};

const persistConfig: ExtendedPersistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

// HAVE FUN WITH YOUR REDUX SAGA MATE.
// can't install redux-logger with typescript
// can't even user middleware

// A type predicate's type must be assignable to its parameter's type.
// Type 'Middleware<{}, any, Dispatch<AnyAction>>' is not assignable to type 'boolean | SagaMiddleware<object>'.
//   Type 'Middleware<{}, any, Dispatch<AnyAction>>' is missing the following properties from type 'SagaMiddleware<object>': run, setContextts(2677)

// const middleWares = [
//   process.env.NODE_ENV !== "production",
//   sagaMiddleware,
// ].filter((middleware): middleware is Middleware => Boolean(middleware));

// const composeEnhancer =
//   (process.env.NODE_ENV !== "production" &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

// export const store = createStore(
//   persistedReducer,
//   undefined,
//   composedEnhancers
// );
export const store = createStore(
  persistedReducer,
  undefined,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
