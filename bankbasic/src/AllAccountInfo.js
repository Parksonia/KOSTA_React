import {Table} from 'reactstrap'
export default function AllAccountInfo(){
    //const style={width:'800px',margin:'0 auto'};
    return(
        <div className='route'>
            <h4>전체 계좌 조회</h4>
            <Table bordered style={{width:'800px',margin:'0 auto'}}>  {/*{style}*/}  
                <tbody>
                    <tr><th>계좌번호</th><th>이름</th><th>잔액</th><th>종류</th><th>등급</th></tr>
                </tbody>

            </Table>
        
        </div>
    );
}
