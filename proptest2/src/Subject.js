function Subject({subjects}) {
    
    return(
        <>
        {
        subjects.map(s=>{
            return (
                <option key={s.key} value={s.text}>{s.text}</option>
            )
        })
    }
        </>

    )
}
export default Subject;