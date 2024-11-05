import{useState} from 'react';
function App2(){
    const [inputValue,setInputValue ] = useState("");
    const [PreviousValue,setPreviousValue] = useState("");
    const inputChange = (e) =>{
        setPreviousValue(inputValue);
        setInputValue(e.target.value);
    }

    return(
        <>
        <input type="text" onChange={inputChange} />
        <h2>Current Value: {inputValue} </h2>
        <h2>Previous Value: {PreviousValue}</h2>
        </>
    )
}
export default App2;