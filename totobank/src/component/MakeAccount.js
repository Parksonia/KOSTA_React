import { Col, Button,ButtonGroup, Form, FormGroup, Label, Input, Modal, ModalFooter, ModalBody, ModalHeader } from 'reactstrap';
import { useState } from 'react';
import axios from 'axios'; // back과 연결 

// 변수에 함수를 담아서 사용도 가능 ,바로 export 붙이면 됨
const MakeAccount = () => {
    const [modal,setModal] = useState(false);
    const [message,setMessage] = useState()
    const [acc, setAcc] = useState({ id: '', name: '', balance: 0, type: '일반계좌', grade: '' })
    
    const editAcc = (e) => {
        setAcc({ ...acc, [e.target.name]: e.target.value });
    }
    const submit =(e) =>{
        e.preventDefault(); //프론트 폼태그의 전달을 막음
        console.log(acc);
        axios.post("http://localhost:8080/makeAccount",acc)
            .then(res =>{
                console.log(res);
                if(res.data==true){
                    setModal(true);
                    setMessage("계좌 개설 성공했습니다.");
                }
            })
            .catch(err=>{
                console.log(err);
                setMessage("계좌 개설 실패했습니다.");
            })
    }

    return (
        <div className='route'>
            <h4>계좌 개설</h4>
            <Form className='form'>
                <FormGroup row>
                    <Label for="id" sm={3}>계좌번호</Label>
                    <Col sm={6}>
                        <Input type='text' name='id' onChange ={editAcc}/>
                    </Col>
                    <Col sm={3}>
                        <Button color='success'>중복</Button>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for='id' sm={3}>이름</Label>
                    <Col sm={9}>
                        <Input type='text' name='name' onChange ={editAcc}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for='balance' sm={3}>입금액</Label>
                    <Col sm={9}>
                        <Input type='text' name='balance' onChange ={editAcc}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for='type' sm={3}>종류</Label>
                    <Col sm={9}>
                        <ButtonGroup>
                            <Button color="primary" onClick={() => setAcc({ ...acc, type: '일반계좌', grade: '' })}
                                active={acc.type == '일반계좌'}>일반계좌</Button>

                            <Button color="primary" onClick={() => setAcc({ ...acc, type: '특수계좌', grade: '' })}
                                active={acc.type == '특수계좌'}>특수계좌</Button>
                        </ButtonGroup>
                        {/* <Input type='radio' id='type' value="일반계좌" name='type'/>&nbsp;일반계좌&nbsp;&nbsp;
                        <Input type='radio' id='type' value="특수계좌" name='type'/>&nbsp;특수계좌&nbsp;&nbsp; */}
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for='grade' sm={3}>등급</Label>
                    <Col sm={9}>
                        <Input type='select' id='grade'  name="grade"onChange ={editAcc} disabled={acc.type==="일반계좌"}>
                            <option value="">선택하세요</option>
                            <option value="vip">VIP</option>
                            <option value="gold">GOLD</option>
                            <option value="silver">Silver</option>
                            <option value="normal">Normal</option>
                        </Input>
                    </Col>
                </FormGroup>
                <Button color='warning' onClick={submit}>생성</Button>
            </Form>
            <Modal isOpen={modal} toggle={()=>setModal(!modal)}>
                <ModalHeader toggle={()=>setModal(!modal)}>{ }</ModalHeader>
                <ModalBody>
                    {message}
                </ModalBody>
                <ModalFooter>
                    <Button color='primary' onClick={()=>setModal(!modal)}>확인</Button>
                    <Button color='secondary' onClick={()=>setModal(!modal)}>취소</Button>
                </ModalFooter>
            </Modal>

        </div>
    );
}
export default MakeAccount;
