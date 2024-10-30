import { Button } from 'reactstrap';

export default function Section3() {
    return(
        <div style={{ width: "100%", marginTop:"80px" }}>
            <h3 className="section_title">
                함께 쓰고 같이 보는<br />
                모임통장
            </h3><br/>
            <p className="section_sub1">
            카카오톡 친구를 바로 모임통장으로 초대하고<br />
            친구들과 함께 잔액과 입출금 현황을<br/>
            확인할 수 있습니다.<br/>
            재미있는 메시지 카드로 회비 입금 요청도 해보세요.
            </p>
            <Button color='light' size="lg" style={{padding:"15px 30px",color:"gray"}}>모임통장&nbsp;&gt;</Button><br/>
            <img src="/img/main-moim.png" alt="" width="450px" height="680px"/>
        </div>
    )
}