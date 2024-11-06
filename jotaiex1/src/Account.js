import {useAtom} from 'jotai';
import {useState} from 'react';
import { accAtom } from './atoms';
import { countAtom } from './atoms';
import Withdraw from './Withdraw';
const Account=() =>{
    const[acc,setAcc] = useAtom(accAtom);
    const [money,setMoney] = useState(0);
    const deposit=()=>{
        setAcc({...acc,balance:+acc.balance+ +money})
    }
    return(
        <>
        <table border={1}>
            <tr>
                <td> 계좌번호</td>
                <td>{acc.id}</td>
            </tr>
            <tr>
                <td> 이름</td>
                <td>{acc.name}</td>
            </tr>
            <tr>
                <td>잔액</td>
                <td>{acc.balance}</td>
            </tr>
            <tr>
                <td>입금</td>
                <td>
                    <input type='text' onChange={(e)=>setMoney(e.target.value)} />
                    <button onClick={deposit}>입금</button>
                </td>
            </tr>
            <Withdraw/>

        </table>
        </>
    )
}
export default Account;