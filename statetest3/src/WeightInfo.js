function WeightInfo({weight,setWeight}){
    return(
        <>
        <h1>Weight</h1>
        <input type="text" onChange={(e)=>setWeight(e.target.value)}></input>
        </>
    )
}
export default WeightInfo;
