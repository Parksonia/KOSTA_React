import {useState,createContext} from 'react';
import Context2 from './Context2'

export const UserContext = createContext();
export default function Context1 (){
   
    const [user,setUser] = useState('Micle');
    return(
        // 제공하는 곳에서 사용
        <UserContext.Provider value={user}> 
            <h1>{`Hello ${user}`}</h1>
                <Context2 />
        </UserContext.Provider>        
          
    )
}