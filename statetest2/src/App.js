
import {useState} from 'react';
function App() {
  const[data,setData] = useState('test');
  const[user,setUser] =useState({name:'화요일',email:'feb@naver.com',address:'서울시 금천구'})

  // const setInput =(e) =>{ // e: event 함수 객체를 말함
  //  setData(e.target.value);
  //}

  const userChange =(e) =>{
    setUser({...user,[e.target.name]:e.target.value})
  }
  
  return (
    <div>
      <h1>{data}</h1>
      {/* <input type="text" onChange={setInput}></input> 리액트에서는 파라미터를 보내지않음 */}
      
      <input type="text" onChange={(e)=>setData(e.target.value)}/> <br/><br/>
      <p>이름 :{user.name},이메일 :{user.email}, 주소 :{user.address}</p>
      <div>
      이름 :<input type="text" name="name" onChange={userChange} /> 
      </div> 
      <div>
      이메일 :<input type="text" name="email" onChange={userChange}/> 
      </div>
      <div>
      주소 :<input type="text" name="address" onChange={userChange}/> 
      </div>

    </div>
  );
}

export default App;
