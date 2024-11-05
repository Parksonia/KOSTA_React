import{useState,useEffect,useRef} from 'react';
function App3(){
    const [inputValue,setInputValue ] = useState("");
    const PreviousValue = useState("");
    useEffect(()=>{
        PreviousValue.current = inputValue;
    },[inputValue]);
    
    return(
        <>
        <input type="text" onChange={(e)=>setInputValue(e.target.value)} />
        <h2>Current Value: {inputValue} </h2>
        <h2>Previous Value: {PreviousValue.current}</h2>
        </>
    )
}
export default App3;