import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storageSession from 'redux-persist/lib/storage/session'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import productReducer from './Products'
import cartReducer from './Cart'
import cartSlice from "./CartSlice";

const persistConfig = {
  key: 'root',
  storage: storageSession,
}

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
  cartList: cartSlice.reducer
})


const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store)
