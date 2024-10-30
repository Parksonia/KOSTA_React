import{Col,Button,Form,FormGroup,Label,Input,Modal,ModalFooter,ModalBody,ModalHeader} from 'reactstrap';
export default function AccountInfo() { //default는 함수 앞에 사용 오직 하나만 있을 때 default를 붙임
    return(
        <div className="route">
            <h4>계좌조회</h4>
            <Form>
                <FormGroup row>
                    <Label for='id' sm={3}>계좌번호</Label>
                    <Col sm={9}>
                        <Input type='text'name='id' id='id'/>
                    </Col>
                </FormGroup>
                <Button color='primary'>계좌조회</Button>
            </Form>
            <br/>
            <Form hidden>
                    <FormGroup row>
                        <Label for='id' sm={3}>계좌번호</Label>
                        <Col sm={9}>
                        <Input type='text'name='id' id='id'/>
                        </Col>
                    </FormGroup>    
            <FormGroup row>
                    <Label for='name' sm={3}>이름</Label>
                    <Col sm={9}>
                        <Input type='text'name='name' id='name' readOnly/>
                    </Col>
            </FormGroup>
            <FormGroup row>
                    <Label for='balance' sm={3}>잔액</Label>
                    <Col sm={9}>
                        <Input type='text'name='balance' id='balance' readOnly/>
                    </Col>
            </FormGroup>
            <FormGroup row>
                    <Label for='type' sm={3}>종류</Label>
                    <Col sm={9}>
                        <Input type='text'name='batypelance' id='type' readOnly/>
                    </Col>
            </FormGroup>
            <FormGroup row>
                    <Label for="grade" sm={3}>등급</Label>
                    <Col sm={9}>
                        <Input type="text"name="grade" id="grade" readOnly/>
                    </Col>
            </FormGroup>
            </Form>
            
        </div>
    );
}