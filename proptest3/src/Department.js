function Department({depts}) {
    return(
        <>
        <select name="department">
            {
            depts.map(d=>(
                <option key={d.id} value={d.name} >{d.name}</option>
            )

            )
        }       
        </select>
        </>
    )
}
export default Department;