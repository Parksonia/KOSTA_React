import {useEffect} from 'react'
import {useSetAtom} from 'jotai';
import {tokenAtom} from './atoms';
import {useNavigate} from 'react-router-dom'
const Token=()=>{
   const href = window.location.href;
   let params = new URL(document.URL).searchParams;
   let token = params.get("token"); 
   const navigate = useNavigate();
   const setToken = useSetAtom(tokenAtom);

   useEffect(()=>{
    console.log(token);
    setToken(token);
    navigate("/user");
     
   },[token]);

    return(
        <>
        </>
    )
}
export default Token;