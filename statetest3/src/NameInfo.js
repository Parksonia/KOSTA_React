
function NameInfo({name,setName}){
    const nameChange = (e)=> {
       setName(e.target.value);
    }
    
    return(
        <>
        <h1>Name</h1>
        <input type="text" onChange={nameChange}></input>
        </>
    )
}
export default NameInfo;
