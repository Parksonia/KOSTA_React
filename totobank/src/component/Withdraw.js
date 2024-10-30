import{Col,Button,Form,FormGroup,Label,Input,Modal,ModalFooter,ModalBody,ModalHeader} from 'reactstrap';

const Withdraw=()=>{
   return(
   <div className='route'>
        <h4>출금</h4>
        <Form >
        <FormGroup row>
        <Label id='id' sm={3}>계좌번호</Label>
            <Col sm={9}>
                 <Input type='text'>계좌번호</Input>
            </Col>
        </FormGroup>
        <FormGroup row>
        <Label for='balance' sm={3}>출금액</Label>
            <Col sm={9}>
                <Input type='text' name='balance' />
            </Col>
        </FormGroup>
        <Button color='warning'>출금</Button>
        </Form>
        <Modal isOpen={false}>
                <ModalHeader>{}</ModalHeader>
                <ModalBody>
                    {}
                </ModalBody>
                <ModalFooter>
                        <Button color='primary'>확인</Button>
                        <Button color='secondary'>취소</Button>
                </ModalFooter>
            </Modal>

    </div>
   );
}
export  default Withdraw;