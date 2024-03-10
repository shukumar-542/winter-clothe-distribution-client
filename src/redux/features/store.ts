import { configureStore } from "@reduxjs/toolkit";
// import { productApi } from "./productSlice/productApi";
import { baseApi } from "../api/baseApi";
import authReducer from './auth/authSlice'
import storage from 'redux-persist/lib/storage'
import themeReducer from '../features/themeSlice/themeSlice'
import {
   
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    persistStore, persistReducer
  } from 'redux-persist'
const persistConfig = {
    key: 'auth',
    storage,
}

const persistedReducer = persistReducer(persistConfig, authReducer)
const persistedThemeReducer =persistReducer(persistConfig ,themeReducer )

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        auth: persistedReducer,
        theme : persistedThemeReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
              },
        }).concat(baseApi.middleware),
})



// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)