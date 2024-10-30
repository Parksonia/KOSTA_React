import { Button } from 'reactstrap';
export default function Section5() {
    return(
        <div style={{ width: "100%", marginTop:"80px" }}>
            <h3 className="section_title">
                해외계좌송금과<br />
                WU빠른해외송금을<br/>
                더 쉽고, 저렴하게
            </h3><br/>
            <p className="section_sub1">
            해외계좌송금이 가능한 22개국을 포함하여<br />
            전세계 200여개국으로 WU빠른해외송금이<br/>
            가능합니다.
            </p>
            <Button color='light' size="lg" style={{padding:"15px 40px",color:"gray"}}>해외송금&nbsp;&gt;</Button><br/>
            <img src="/img/main-foreignRemittance-new.png" alt="" width="450px" height="680px"/>
        </div>
    )
}