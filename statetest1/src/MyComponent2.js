import {useState} from'react';
//let {a,b} ={a:10,b:20}
//let[a,b,c] =[10,20,30] -> a=10, b=20, c=30 각 변수에 데이터가 저장

//let t = {a:10,b:20};
//a = t.a;
//b = t.b;
//let {a,b} = t

//let arr =[10,20,30]
//let a = arr[0];
//let b = arr[1];
//let c = arr[2];
//let [a,b,c] =arr; 간단하게 사용 가능

function MyComponent2() {
    // useState  는 class 형에서는 사용x
    // function형태에서만 사용 한다.
    const[name,setName] = useState('hong');
    const[age,setAge] = useState(20);

    return(
        <>
        <h1>Hello React</h1>
        <span>{name}</span><button onClick={()=>setName('song')}>변경</button><br/> 
        <span>{age}</span><button onClick={()=>setAge(30)}>변경</button><br/> 
        
        </>
    )

}
export default MyComponent2;