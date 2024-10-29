import {useState} from 'react';

function UserInfo2({user}) {
    
    const[myUser,setMyUser] = useState({...user})
    
    const userChange =(e)=>{       
        setMyUser({...user,[e.target.name]:e.target.value})
       
    }
    return(
        <>
        <h1>{myUser.name}</h1>
        이름 : <input type="text" name="name" onChange={userChange}></input>
        <h1>{myUser.grade}</h1>
        학년 : <input  type="text" name="grade"  onChange={userChange}></input>
        <h1>{myUser.weight}</h1>
        몸무게 : <input  type="text"name="weight"  onChange={userChange}></input>
        </>
    )
}
export default UserInfo2;