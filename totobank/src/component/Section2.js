import { Button } from 'reactstrap';

export default function Section2() {
    return(
        <div style={{ width: "100%", marginTop:"50px" }}>
            <h3 className="section_title">
                우대조건 없이<br />
                합리적인 예금과 적금
            </h3><br/>
            <p className="section_sub1">
            기대했던 금리와 다르게 복잡한 우대조건에 실망한<br />
            적이 있었나요? 카카오뱅크의 예금, 적금은 숨겨진<br/>
            우대조건 없이 누구에게나 편리하고 합리적입니다.
            </p>
            <Button color='light' size="lg" style={{padding:"15px 30px",color:"gray"}}>정기예금&nbsp;&gt;</Button>&nbsp;&nbsp;
            <Button color='light' size="lg" style={{padding:"15px 30px",color:"gray"}}>자유예금&nbsp;&gt;</Button><br/>
            <img src="/img/main-savings.png" alt="" width="430px" height="680px"/>            
        </div>
    )
}