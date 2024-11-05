import {configureStore} from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import { boardReducer } from './component/reducer';

//Redux-persist는 store 값을 localStorage나 sessionStorage에 저장하여 새로고침해도 데이터를 유지된다.
//새로고침 시 저장공간에 있는 데이터를 Redux에 불러오는 형식으로 이루어진다.

//configureStore에 전달할 때는 persistReducer를 사용한다.
//: persistReducer는 reducer를 반환하는 API이다.


// persistReducer(config, reducer)
// config : key와 storage를 필수로 하며, whitelist, blacklist 등의 값을 지정할 수 있다.
// storage : localStorage에 저장하고 싶으면 import storage from 'redux-persist/lib/storageU, sessionStorage에 저장하고 싶으면 import storageSession from 'redux-persist/lib/storage/session
// whitelist : 유지하고 싶은 값을 배열로 전달함
// blacklist : 유지하고 싶지 않은 값을 배열로 전달함
// reducer : combineReducers로 부터 반환받은, 즉 하나로 합쳐진 root reducer를 넣어준다.
 
const persistConfig = {
    key:'root',
    storage: storageSession
}

const persistedReducer = persistReducer(persistConfig,boardReducer);

//store:앱의 전체 상태 트리를 가지고 있는 저장소입니다. 이 안의 상태(state)를 바꾸는 유일한 방법은 여기에 dispatch 통하여 액션(action)을 보내는 것 뿐입니다.
//configureStore는 Redux 스토어를 생성하는 함수 간편하게 스토어를 설정할 수 있도록 도와준다.
export const store = configureStore({
    reducer:{persistedReducer},// configureStore의 필수 인자 ,rootReducer를 포함한 리듀서 객체
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({serializableCheck:false}) //미들웨어를 배열 형태로 전달하는 속성
})