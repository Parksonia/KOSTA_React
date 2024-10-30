import { Col, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
export default function Join() {
    return(
        <div className="route">
            <h4>회원가입</h4>
            <Form>
                <FormGroup row>
                    <Label for="id" sm={3}>아이디</Label>
                    <Col sm={6}>
                        <Input type="text" name="id" id="id"/>
                    </Col>
                    <Col sm={3}>
                    <Button color="success">중복</Button>
                    </Col>
                </FormGroup>                
                <FormGroup row>
                    <Label for="name" sm={3}>이름</Label>
                    <Col sm={9}>
                        <Input type="text" name="name" id="name"/>
                    </Col>
                </FormGroup>     
                <FormGroup row>
                    <Label for="name" sm={3}>비밀번호</Label>
                    <Col sm={9}>
                        <Input type="text" name="password" id="password"/>
                    </Col>
                </FormGroup>  
                <FormGroup row>
                    <Label for="name" sm={3}>이메일</Label>
                    <Col sm={9}>
                        <Input type="text" name="email" id="email"/>
                    </Col>
                </FormGroup>  
                <FormGroup row>
                    <Label for="name" sm={3}>주소</Label>
                    <Col sm={9}>
                        <Input type="text" name="address" id="address"/>
                    </Col>
                </FormGroup>  
                <Button color="primary">회원가입</Button>
            </Form>    
            <Modal isOpen={false}>
                <ModalHeader >회원가입</ModalHeader>
                <ModalBody>
                    {}
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" >확인</Button>
                </ModalFooter>
            </Modal>                         
        </div>
    )
}