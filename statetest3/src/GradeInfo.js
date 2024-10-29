function GradeInfo({grade,setGrade}){
    
    return(
        <>
        <h1>Grade</h1>
        <input type="text" onChange={(e)=>setGrade(e.target.value)}></input>
        </>
    )
}
export default GradeInfo;
