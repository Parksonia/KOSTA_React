import { Button,UncontrolledCarousel } from 'reactstrap';

export default function Section7() {
    const items = [
        {
            src:"/img/card-1.png",
        },
        {
            src:"/img/card-2.png",
        },
        {
            src:"/img/card-3.png",
        },
        {
            src:"/img/card-4.png",
        },
        {
            src:"/img/card-5.png",
        },
    ]
    return(
        <div style={{ width: "100%", marginTop:"80px" }}>
            <h3 className="section_title">
            프렌즈 체크카드,<br />
            내가 고르는 선택의 즐거움
            </h3><br/>
            <p className="section_sub1">
            프렌즈 디자인부터 멋스러운 블랙 컬러 카드까지<br />
            원하는 디자인과 기능을 선택 할 수 있습니다.
            </p>
            <Button color='light' size="lg" style={{padding:"15px 40px",color:"gray"}}>토토뱅크 프렌즈 체크카드&nbsp;&gt;</Button>
            <br/><br/><br/>
            <UncontrolledCarousel items={items} style={{width:"300px", margin:"0 auto"}}/>
        </div>
    )
}