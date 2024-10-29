import Student from './Student';
function Students({students}) { //배열형태를 받아옴
    return(
        <>
            <table border="1">
                <tbody>
                <tr>
                    <th>이름</th><th>학년</th><th>전공</th>
                </tr>
             
                    {
                        students.map((s,index)=>{
                            return(
                                // <tr key={index}>
                                //     <td>{s.name}</td>
                                //     <td>{s.grade}</td>
                                //     <td>{s.subject}</td>    
                                // </tr>
                                 <Student stud={s} key={index}/>
                            )
                        })
                    }
                
                </tbody>
            </table>
        </>
    )
}
export default Students;