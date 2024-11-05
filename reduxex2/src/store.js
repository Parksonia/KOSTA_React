import {configureStore} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';// session storage에 저장
import { rootReducer } from './reducer'
// import storage from 'redux-persist/lib/storage // localStorage에 저장

const persistConfig ={
    key:'root',
    storage:storageSession
}
const persistedReducer = persistReducer(persistConfig,rootReducer);
export const store = configureStore({reducer:{persistedReducer},
                    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({serializableCheck:false})
})