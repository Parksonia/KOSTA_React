function UserInfo({user,setUser}) {
    const changeName =(e)=>{       
        setUser({...user,[e.target.name]:e.target.value})
       
    }
    return(
        <>
        이름 : <input type="text" name="name" value={user.name} onChange={changeName}></input>
        학년 : <input  type="text" name="grade" value={user.grade} onChange={changeName}></input>
        몸무게 : <input  type="text"name="weight" value={user.weight} onChange={changeName}></input>
        </>
    )
}
export default UserInfo;