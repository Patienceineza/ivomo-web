import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import userAccountSlice from '../slices/user/userAccountSlice';
import themeConfigSlice from './themeConfigSlice';

const persistConfig = {
    key: 'root',
    storage,
};

const ALL_REDUCERS = combineReducers({
    user: userAccountSlice,
    themeConfig: themeConfigSlice
});

const persistedReducer = persistReducer(persistConfig, ALL_REDUCERS);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.REACT_APP_NODE_ENV === 'production',
    middleware: [thunk]
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export const persistor = persistStore(store);