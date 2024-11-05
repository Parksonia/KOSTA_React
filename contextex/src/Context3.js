import {useContext} from 'react';
import { UserContext } from './Context1';
export default function Context3 (){
   
    const user = useContext(UserContext);
    return(
        <>
            <h1>Context3</h1>
             <h2>{`Hello ${user} again!`}</h2>   
          </>
    )
}