import { Button } from 'reactstrap';

export default function Section6() {
    return(
        <div style={{ width: "100%", paddingTop: "80px" }} className="Hover">
            <h3 className="section_title">
            복잡한 서류 제출을 간편하게,<br />
            내가 원하는 시간에
            </h3><br />
            <p className="section_sub1">
            이사 날짜가 주말이나 공휴일이어도<br />
            전월세보증금 대출을 신청할 수 있습니다.
            </p><br/>
            <Button color='light' size="lg" style={{ display:"inline-block", width:"270px", padding: "15px 20px", color: "gray" }}>마이너스 통장대출&nbsp;&gt;</Button>&nbsp;&nbsp;
            <Button color='light' size="lg" style={{ display:"inline-block", width:"270px", padding: "15px 20px", color: "gray" }}>신용대출&nbsp;&gt;</Button><br /><br />
            <Button color='light' size="lg" style={{ display:"inline-block", width:"270px", padding: "15px 20px", color: "gray" }}>개인사업자 대출&nbsp;&gt;</Button>&nbsp;&nbsp;
            <Button color='light' size="lg" style={{ display:"inline-block", width:"270px", padding: "15px 20px", color: "gray" }}>전월세보증금 대출&nbsp;&gt;</Button><br />
            <img src="/img/main-loan.png" alt="" width="430px" height="680px" />
        </div>
    )    
}