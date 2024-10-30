import { Col, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
export default function Login() {
    return (
        <div className="route">
            <h4>로그인</h4>
            <Form>
                <FormGroup row>
                    <Label for="id" sm={3}>아이디</Label>
                    <Col sm={9}>
                        <Input type="text" name="id" id="id"/>
                    </Col>
                </FormGroup>                
                <FormGroup row>
                    <Label for="name" sm={3}>비밀번호</Label>
                    <Col sm={9}>
                        <Input type="text" name="password" id="password"/>
                    </Col>
                </FormGroup> 
                <Button color="primary">로그인</Button> 
            </Form>            
        </div>
    )
}