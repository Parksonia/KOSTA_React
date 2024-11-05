
const MyNickname =({info,dispatch}) =>{
    return(
        <>
            <label>{info.nickname}</label>
            <input type="text" onChange={(e)=>dispatch({type:"NICKNAME",data:e.target.value})}></input>
        </>
    )
}