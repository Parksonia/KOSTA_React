function Employee({emps}){
    return(
        <>
        <table border="1" >
            <tbody>
                <tr>
                    <th>사번</th><th>이름</th><th>부서번호</th>
                </tr>
                {
                emps.map(e=>(
                    <tr>
                       <td>{e.id}</td>
                       <td>{e.name}</td>
                       <td>{e.dept}</td> 
                    </tr>
                ))

                }
            </tbody>    
        </table>
        </>
    )
}
export default Employee;