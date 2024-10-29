import {Table} from 'reactstrap'
export default function AllAccountInfo(){
    //const style={width:'800px',margin:'0 auto'};
    const accs =[
                    {id:'1001',name:'홍길동',balance:10000,type:'일반계좌',grade:''},
                    {id:'1002',name:'송길동',balance:20000,type:'특수계좌',grade:'VIP'},
                    {id:'1003',name:'하길동',balance:30000,type:'특수계좌',grade:'Gold'},
                    {id:'1004',name:'구길동',balance:40000,type:'특수계좌',grade:'Silver'},
                    {id:'1001',name:'차길동',balance:50000,type:'일반계좌',grade:''}
                    
                ]
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
