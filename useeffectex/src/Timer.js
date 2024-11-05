import {useState,useEffect} from 'react';
export default function Timer() {
    const [count,setCount] =useState(0);
    
  useEffect(()=>{
    let timer = setTimeout(()=>{setCount(count+1)},1000);
    return()=>clearTimeout(timer) // 타이머를 종료 시키는 함수 
    
    //setInterval(()=>setCount(count+1),1000); 
  },[])
  //useEffect (<function>,<dependency>)
  //dependency에 [] 을 쓰면  : 페이지 실행 시 ,함수가 한번만 실행됨 
    
    return (
        <h1>I've rendered {count} times!</h1>
    )
}