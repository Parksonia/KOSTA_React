function Department({dept}){
    return(
        <select>
            {dept.map(d=>(
                <option key={d.id}>{d.name}</option>
            ))}
        </select>
    )
}
export default Department;