import {useState} from 'react';
import UserInfo2 from './UserInfo2';

function App2() {
  const[user,setUser] = useState({name:'코스타',grade:4,weight:75.3});
  return (
    <div>
      <h1>App.js</h1>
      <p>이름 : {user.name}, 학년 :{user.grade} , 몸무게: {user.weight}</p>
      <UserInfo2  user={user} />
    
    </div>
  );
}

export default App2;
