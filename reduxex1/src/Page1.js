import { useSelector,useDispatch} from "react-redux"; // redux에 선언된 state를 참조 하는 형태
const Page1 =() =>{
    const data1 = useSelector(state=>state.data1); 
    const dispatch = useDispatch();
    return(
        <>
            <h1>
                {data1} <br/>
                <input type="text" onChange={(e)=>dispatch({type:"STRING",data:e.target.value})}></input>
            </h1>
        </>
    )
}
export default Page1;