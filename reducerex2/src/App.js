import {useReducer} from 'react';
import {initState,reduer } from './MyReducer';
import './App.css';

function App() {
  const [info,dispatch] = useReducer(reduer,initState);
  const edit= (e)=>{
    dispatch({type:e.target.name,data:e.target.value});
  }
  
  return (
    <div className="App">
      <label>{info.id}</label>&nbsp;&nbsp;&nbsp;&nbsp;
      <input type='text' name="ID" onChange={edit}/><br/>
      <MyNickname info={info} dispatch={dispatch} />
      <label>{info.subject}</label>&nbsp;&nbsp;&nbsp;&nbsp;
      <input type='text' name="SUBJECT"onChange={edit}/><br/>
      <label>{info.grade}</label>&nbsp;&nbsp;&nbsp;&nbsp;
      <input type='text' name="GRADE" onChange={edit}/><br/>
      

    </div>
  );
}

export default App;
