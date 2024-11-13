import { Col, Button, Form, FormGroup, Label, Input, Modal, ModalFooter, ModalBody, ModalHeader } from 'reactstrap';
import { useState } from 'react';
import axios from 'axios';
const Deposit = () => {
    const [deposit,setDeposit] =useState({id:'',money:0});
    const [isModal,setIsModal] = useState(false);
    const[message,setMessage] = useState("");
    const edit =(e) =>{
        setDeposit({...deposit,[e.target.name]:e.target.value});
    }
    const submit =(e) =>{
        e.preventDefault();
        axios.post("http://3.34.139.32:8080/deposit",deposit)
        .then(res=>{
            setMessage(`입금 성공 (잔액 :${res.data})`);
            setIsModal(true);
        })
        .catch(err=>{
             console.log(err);
             setMessage(`입금 실패 : ${err.response.data}`);
             setIsModal(true);   
        })
    }

    return (
        <div className='route'>
            <h4>입금</h4>
            <Form className="form">
                <FormGroup row>
                    <Label id='id' sm={3}>계좌번호</Label>
                    <Col sm={9}>
                        <Input type='text' name="id" onChange={edit} value={deposit.id}></Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for='balance' sm={3}>입금액</Label>
                    <Col sm={9}>
                        <Input type='text' name='money' onChange={edit} value={deposit.money}/>
                    </Col>
                </FormGroup>
                <Button color='warning' onClick={submit}>입금</Button>
            </Form>
            <Modal isOpen={isModal} toggle={()=>setIsModal(!isModal)}>
                <ModalHeader toggle={()=>setIsModal(!isModal)}>입금확인</ModalHeader>
                <ModalBody>
                    {message}
                </ModalBody>
                <ModalFooter>
                    <Button color='primary' onClick={()=>setIsModal(!isModal)}>확인</Button>
                </ModalFooter>
            </Modal>

        </div>
    );
}
export default Deposit;