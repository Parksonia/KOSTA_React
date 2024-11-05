import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import{BrowserRouter} from 'react-router-dom';
import {store} from './store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'
import {persistStore} from 'redux-persist';

//  persistStore
// : 유지하고 싶은 redux store를 인자로 넣으면 persistor 객체를 반환한다.
// *여기서 store는 configureStore에 전달한 reducer
const persistor = persistStore(store);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

//앱 최상위에 store를 위치시킴 
<Provider store={store}>
{/* // PersistGate
// : 유지되는 store의 값이 다시 Redux에 저장될 때까지 app의 렌더링을 지연시킨다.
// loading : 로딩 과정에서 보여줄 컴포넌트
// persistor : localStorage에 저장할 store (persistStore가 반환한 persistor 객체를 전달하면 됨) */}
  <PersistGate loading={null} persistor={persistor}></PersistGate>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
);


reportWebVitals();
