import {useState} from 'react';

function MyComponent3 (){
    const[person,setPerson] = useState({name:'hong',age:20});

    const changeName=()=>{
       
         {/*...person 이 꼭 있어야 한다. 안그러면 age는 사라짐
            key가 이미 존재하면 변경
            없으면 추가가 됨  따라서 name: 은 이미 존재하니까 age는 그대로  name만 변경됨
            */}
        setPerson({...person,name:'kong'}); 
    }

    // const changeAge=()=>{
    //     setPerson({...person,age:30});
    // }
    
    return(
        <>
        <h1>Hello React</h1>
        <span>{person.name}</span><button onClick={changeName}>변경</button><br/> 
        {/* <span>{person.age}</span><button onClick={changeAge}>변경</button><br/>  */}

        <span>{person.age}</span><button onClick={()=>setPerson({...person,age:40})}>변경</button><br/> 
        
        </>
    )
}

export default MyComponent3;