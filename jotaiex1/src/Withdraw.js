import {useState} from 'react';
import {useAtom} from 'jotai';
import { accAtom } from './atoms';
const Withdraw =() =>{
    const [money,setMoney] = useState(0);
    const [acc,setAcc] = useAtom(accAtom);
    const withdraw =()=>{
        setAcc({...acc,balance: +acc.balance - +money});
    }
    return(
        <>
        <tr>
            <td>출금</td>
            <td>
                <input type='text' onChange={(e)=>setMoney(e.target.value)}/>
                <button onClick={withdraw}>출금</button>
                </td>
        </tr>
        
        </>
    )
}
export default Withdraw;