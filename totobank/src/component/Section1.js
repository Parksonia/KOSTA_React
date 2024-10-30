import { Button } from 'reactstrap';

export default function Section1() {
    return (
        <div style={{ width: "100%" }}>
            <h3 className="section_title">
                모바일로 더 손쉬운<br />
                계좌개설, 간편한 이체
            </h3><br/>
            <p className="section_sub1">
            인증서, OTP 없이 계좌 개설이 간편합니다.<br />
            여러 건의 이체도 몇 번의 터치로 손쉽게 보낼 수<br/>
            있습니다.
            </p>
            <Button color='light' size="lg" style={{padding:"15px 30px",color:"gray"}}>토토뱅크 입출력통장&nbsp;&gt;</Button><br/>
            <img src="/img/main-withdrawal.png" alt="" width="480px" height="680px"/>
        </div>
    )
}