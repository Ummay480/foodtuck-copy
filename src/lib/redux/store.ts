import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import foodReducer from "./slices/foodSlice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import type { Middleware } from "redux";

// ✅ Define persist configuration with explicit types
const persistConfig: PersistConfig<ReturnType<typeof rootReducer>> = {
  key: "root",
  version: 1,
  storage,
};

// ✅ Combine reducers
const rootReducer = combineReducers({
  product: foodReducer,
  cart: cartReducer,
});

// ✅ Apply persistence to the root reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// ✅ Define middleware with TypeScript support
const middleware: Middleware[] = []; // Explicit middleware array

// ✅ Configure the Redux store
const store = configureStore({ // Declare as `store`
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(middleware),
  devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools in development mode
});

// ✅ Create persistor instance
export const persistor = persistStore(store);

// ✅ Define store-related types for TypeScript
export type RootState = ReturnType<typeof rootReducer>; // Corrected type
export type AppDispatch = typeof store.dispatch;

export default store; // Default export