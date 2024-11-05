import {useState} from 'react';
import Component2 from './Component2';
export default function Component1 (){
   
    const [user,setUser] = useState("Micle");
    return(
        <>
            <h1>{`Hello ${user}`}</h1>
                <Component2 user={user}/>
          </>
    )
}