import {Table} from 'reactstrap'
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function AllAccountInfo(){
    //const style={width:'800px',margin:'0 auto'};
    const [accs,setAccs] = useState([]);
    
    useEffect(()=>{ //화면이 뜨자마자 데이터가 있어야 하니까 useEffect 사용 반드시 [] 가 있어야함
        axios.get("http://3.34.139.32:8080/allAccountInfo")
        .then(res=>{
            console.log(res.data);
            setAccs([...res.data]);
        })
        .catch(err=>{
            console.log(err);
            
        })
    },[])    
    
    
    return(
        <div className='route'>
            <h4>전체 계좌 조회</h4>
            <Table bordered style={{width:'800px',margin:'0 auto'}}>  {/*{style}*/}  
                <tbody>
                    <tr><th>계좌번호</th><th>이름</th><th>잔액</th><th>종류</th><th>등급</th></tr>
                    {
                        
                        accs.map(a=>  //{} 가 존재하면 return을 해야함 주의! return을 빼면 () 소괄호로 감싸주기만 하면됨
                            (
                                 <tr key={a.id}>
                                     <td>{a.id}</td>
                                     <td>{a.name}</td>
                                     <td>{a.balance}</td>
                                     <td>{a.type}</td>    
                                     <td>{a.grade}</td>        
                                 </tr>
                              
                            )
                        )
                    }
                 

                </tbody>
            </Table>
        
        </div>
    );
}
