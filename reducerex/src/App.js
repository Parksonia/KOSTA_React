import {useReducer,useState} from 'react'
import './App.css';

//reducer :state를 업데이트 하는 역할을 하는 함수
//action : 업데이트 하고자 하는 내용.(무엇을 무엇으로)
//dispatch :  state 업데이트를 위한 요구, reducer를 호출시키는 역할

const reducer  = (state,action) => {
  switch(action.type) { //action : 무엇을->(dispatch를 통해)->무엇으로
    case 'deposit': return +state+(+action.data);
    case 'withdraw' : return +state-(+action.data); 
    default :return state;
  }
}

function App() {
  const [money,setMoney] =useState(0);
  const [balance,dispatch] = useReducer(reducer,0) ; //balance를 0으로 초기화 하고 reducer 설정 ,




  return (
    <div className="App">

    <h2>useReducer 은행</h2>
      <p>잔액 : {balance} </p>
      <input type='number' step={1000} value={money} onInput={(e)=>setMoney(e.target.value)} />
      <button onClick={()=>dispatch({type:'deposit',data:money})}>입금</button>
      <button onClick={()=>dispatch({type:'withdraw',data:money})}> 출금</button>  
    </div>
  );
}

export default App;
