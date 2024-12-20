import { Col, Button, Form, FormGroup, Label, Input, Modal, ModalFooter, ModalBody, ModalHeader } from 'reactstrap';
import { useState } from 'react';
import axios from 'axios';

export default function Transfer(){
    const [transfer,setTransfer] = useState({sid:'',rid:'',money:''});
    const edit=(e)=>{
        setTransfer({...transfer,[e.target.name]:e.target.value});
    }
    const [isModal,setIsModal] = useState(false);
    const [message,setMessage] =useState('');
    const submit=(e)=>{
        
        e.preventDefault();
        axios.post("http://localhost:8080/transfer",transfer)
        .then(res=>{
            setMessage(`송금 성공 (잔액: ${res.data})`);
            setIsModal(true);
        })
        .catch(err=>{
            console.log(err);
            setMessage(`송금 실패 (사유: ${err.response.data})`);
            setIsModal(true);
        })

    }
    
    return(
        <div className='route'>
        <h4>계좌 송금</h4>
        <Form className="form">
            <FormGroup row>
                <Label id='id' sm={3}>보내는 계좌 번호</Label>
                <Col sm={9}>
                    <Input type='text' name="sid" onChange={edit} value={transfer.sid}></Input>
                </Col>
            </FormGroup>
            <FormGroup row >
                <Label id='id' sm={3}>받는 계좌 번호</Label>
                <Col sm={9}>
                    <Input type='text' name="rid" onChange={edit} value={transfer.rid}></Input>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for='balance' sm={3}>송금액</Label>
                <Col sm={9}>
                    <Input type='text' name='money' onChange={edit} value={transfer.money}/>
                </Col>
            </FormGroup>
            <Button color='warning' onClick={submit}>송금</Button>
        </Form>
        <Modal isOpen={isModal} toggle={()=>setIsModal(!isModal)}>
            <ModalHeader toggle={()=>setIsModal(!isModal)}>송금확인</ModalHeader>
            <ModalBody>
                {message}
            </ModalBody>
            <ModalFooter>
                <Button color='primary' onClick={()=>setIsModal(!isModal)}>확인</Button>
            </ModalFooter>
        </Modal>

    </div>
    )
}