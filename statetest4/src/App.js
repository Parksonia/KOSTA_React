import {useState} from 'react';
import UserInfo from './UserInfo';

function App() {
  const[user,setUser] = useState({name:'코스타',grade:4,weight:75.3});
  return (
    <div>
      <h1>App.js</h1>
      <p>이름 : {user.name}, 학년 :{user.grade} , 몸무게: {user.weight}</p>
      <UserInfo  user={user} setUser={setUser}/>
    
    </div>
  );
}

export default App;
