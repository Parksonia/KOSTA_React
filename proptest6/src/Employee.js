import Department from "./Department";
function Employee({emps,dept}) {
    return(
        <>
        <Department dept={dept}/> {/* Department는 App에서 넘어온 객체 공유가 안되기 때문에 따로 넘겨줘야함*/ }
        <table border="1">
            <tbody>
                <tr>
                    <th>사번</th><th>이름</th><th>부서번호</th><th>부서명</th>
                </tr>
                { emps.map(e=>(
                    <tr>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.dept}</td>
                        <td>{dept.find((d)=>d.id==e.dept).name}</td>
                    </tr>
                ))
                    
                }
            </tbody>
        </table>
        </>
    )
}
export default Employee;