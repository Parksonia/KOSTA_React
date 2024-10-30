import {Card,CardImg,CardText,CardBody,CardTitle,CardSubtitle,Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
export default function ReactStrapCard() {
    return (
        <div style={{width:'300px',height:'500px'}}>
           <Card>
                <CardImg top height="200px" width="120px" src="/frog.jpg" alt="개구리"></CardImg>
                <CardBody>
                    <CardTitle>개구리</CardTitle>
                    <CardSubtitle>귀엽고 작은 아기 초록 개구리</CardSubtitle>
                    <CardText>개굴개굴개구리 목청도 좋다 하지만 왜 울고있는거니? 무슨 일 있는거니???개굴개굴개굴개굴개굴개굴개굴</CardText>
                    <Button>자세히 보기</Button>
                </CardBody>
           </Card>

        </div>
    )
}

