import {configureStore} from '@reduxjs/toolkit'; // 저장 될 위치
import {Provider} from 'react-redux'
import { reducer } from './reducer'; 
import Page1 from './Page1';
import './App.css';
import Page2 from './Page2';

// reducer는 컴포넌트 안에서만 사용됨 따라서 사용할 컴포넌트들에게 공유되야하지만(넘겨줘야 함)
//redux는 Provider안의 모든 컴포넌트들이 store 에 저장된 state를 공유 할 수 있다. (store는 갱신 시 다시 초기화 됨 ) 
const store = configureStore({reducer});
function App() {
  return (
    <Provider store={store}>
      <div className='App'>
          <Page1/>
          <Page2/>
      </div>
    </Provider>
  );
}

export default App;
