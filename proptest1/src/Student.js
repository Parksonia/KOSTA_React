//props ={stud:{name:'hong',grade:1,subject:'computer'},etc:'etc'}
//{stud} = pops;
// props 자체가 객체임 여러개를 가져올 수 있다.  -> let{stud,etc} = props

// function Student(props){
//     return(
//         <tr>
//             <td>{props.stud.name}</td>
//             <td>{props.stud.grade}</td>
//             <td>{props.stud.subject}</td>
//         </tr>
//     ) 
// }

function Student({stud}){
    return(
        <tr>
            <td>{stud.name}</td>
            <td>{stud.grade}</td>
            <td>{stud.subject}</td>
        </tr>
    ) 
}
export default Student;