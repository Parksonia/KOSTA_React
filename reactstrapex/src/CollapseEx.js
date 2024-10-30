import { useState } from 'react';
import { Collapse, UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
export default function CollapseEx() {
    const [collapse, setCollapse] = useState(false); // 초기값 설정 ,
    return (
        <div>
            <Button color='primary' onClick={() => setCollapse(!collapse)}
                style={{ marginBottom: '1rem' }}>Toggle</Button>
            <Collapse isOpen={collapse}>
                <Card>
                    <CardBody>
                        개굴개굴 개굴개굴
                        (깨굴깨굴 깨굴깨굴)
                        개굴개굴 개굴개굴 노래를 한다

                        개굴개굴 개구리 노래를 한다
                        아들 손자며느리 다 모여서
                        밤새도록 하여도 듣는 이 없네
                        듣는 사람 없어도 날이 밝도록
                        개굴개굴 개구리 노래를 한다
                        개굴개굴 개구리 목청도 좋다
                    </CardBody>
                </Card>
            </Collapse>
            <br/>
            <Button color='primary' id ="toggler" style={{marginBottom:'1rem'}}>Toggle</Button>
            <UncontrolledCollapse toggler='#toggler'>
                <Card>
                    <CardBody>
                        개굴개굴 개굴개굴
                        (깨굴깨굴 깨굴깨굴)
                        개굴개굴 개굴개굴 노래를 한다

                        개굴개굴 개구리 노래를 한다
                        아들 손자며느리 다 모여서
                        밤새도록 하여도 듣는 이 없네
                        듣는 사람 없어도 날이 밝도록
                        개굴개굴 개구리 노래를 한다
                        개굴개굴 개구리 목청도 좋다
                    </CardBody>    
                </Card>    
            </UncontrolledCollapse> 
        </div>
    )
}