import {useEffect,useState} from 'react';

export default function Counter(){
    const [count,setCount] = useState(1);
    const [calculation,setCalculation] = useState(0);

    const [kor,setKor] = useState(0);
    const [eng,setENg] = useState(0);
    const [math,setMath] = useState(0);
    const [avg,setAvg] =useState(0);

    // 여러개의 useEffect 사용 가능하다. 
    useEffect(()=>{
        setCalculation(()=>count*2)
    },[count]);//dependency변수가 update될 때도 실행되게 됨 
    
    useEffect(()=>{
        setAvg((+kor+ +eng+ +math) /3);
    },[kor,eng,math]);
    
    return(
        <>

            국어 : <input type="text" onChange={(e)=>setKor(e.target.value)} /> <br/>
            영어 : <input type="text" onChange={(e)=>setENg(e.target.value)} /> <br/>
            수학 : <input type="text" onChange={(e)=>setMath(e.target.value)} /> 
            <p>평균 :{avg}</p> <br/>

            <p>Count:{count}</p>
            <button onClick={()=>setCount(count+1)}>+</button>
            <p>Calculation : {calculation}</p>
        </>
    )
}
