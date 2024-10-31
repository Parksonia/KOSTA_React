import {Table, Col, Button,ButtonGroup, Form, FormGroup, Label, Input, Modal, ModalFooter, ModalBody, ModalHeader } from 'reactstrap';
import { useState } from 'react';
import axios from 'axios'; // back과 연결 


// 변수에 함수를 담아서 사용도 가능 ,바로 export 붙이면 됨
const MakeAccount = () => {
    const [modal,setModal] = useState(false);
    const [message,setMessage] = useState('');
    
    const [acc, setAcc] = useState({ id: '', name: '', balance: 0, type: '일반계좌', grade: '' })
    const[isBefore,setIsBefore] = useState(false);  //계좌개설 전송 전 확인 위한 변수
    const[isCheckId,setIsCheckId] = useState(false); // 중복체크 했는지 여부를 위한 변수



    const editAcc = (e) => {
        setAcc({ ...acc, [e.target.name]: e.target.value });
    }
    
    const checkId =(e) =>{
    
        e.preventDefault();
        setIsBefore(false);
        axios.get(`http://localhost:8080/checkAccId/${acc.id}`)
        .then(res=> {
            setModal(true);
            if(res.data === true) {
                setMessage("사용중인 계좌번호입니다.");
            }else {
                setMessage("사용 가능한 계좌번호입니다.");
                setIsCheckId(true);
            }
           
        })
        .catch(err=>{
            console.log(err);
            setMessage("계좌번호 확인 중 오류 발생");
        })
        
    
    }
    const  editAccId =(e) =>{
        editAcc(e);
        setIsCheckId(false);
    }

    const confirm = (e)=>{
        e.preventDefault();
        if(!isCheckId) {
            setIsBefore(false);
            setMessage("계좌번호 중복을 확인하세요");
        }else {
            setIsBefore(true);
            setMessage("계좌를 개설하시겠습니까?");     
        }
        setModal(true);
    }

    const submit =(e) =>{
        e.preventDefault(); //백엔드로 전달되야하니까 프론트-폼태그의 전달을 막음
        console.log(acc);
        setIsBefore(false);
        axios.post("http://localhost:8080/makeAccount",acc) //백엔드에 포스트방식으로 보냄 
            .then(res =>{
                
                console.log(res);
                
                if(res.data===true){
                    setModal(true);
                    setMessage("계좌 개설 성공했습니다.");
                    setAcc({ id: '', name: '', balance: 0, type: '일반계좌', grade: '' })
                }

            })
            .catch(err=>{
                console.log(err);
                setMessage("계좌 개설 실패했습니다.");
                setAcc({ id: '', name: '', balance: 0, type: '일반계좌', grade: '' });
            }
        )
    }

    return (
        <div className='route'>
            <h4>계좌 개설</h4>
            <Form className='form'>
                <FormGroup row>
                    <Label for="id" sm={3}>계좌번호</Label>
                    <Col sm={6}>
                        <Input type='text' name='id' value={acc.id} onChange ={editAcc}/>
                    </Col>
                    <Col sm={3}>
                        <Button color='success' onClick={checkId}>중복</Button>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for='id' sm={3}>이름</Label>
                    <Col sm={9}>
                        <Input type='text' name='name' value={acc.name} onChange ={editAcc} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for='balance' sm={3}>입금액</Label>
                    <Col sm={9}>
                        <Input type='text' name='balance' value={acc.balance}  onChange ={editAcc}/>
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
                        <Input type='select' id='grade' value={acc.grade} name="grade"onChange = {editAcc} disabled={acc.type==="일반계좌"}>
                            <option value="">선택하세요</option>
                            <option value="vip">VIP</option>
                            <option value="gold">GOLD</option>
                            <option value="silver">Silver</option>
                            <option value="normal">Normal</option>
                        </Input>
                    </Col>
                </FormGroup>
                <Button color='warning' onClick={confirm}>생성</Button> {/*생성하기 전에 확인할 수 있는 모달 창이 뜸*/}
            </Form>
            <Modal isOpen={modal} toggle={()=>setModal(!modal)}>
                <ModalHeader toggle={()=>setModal(!modal)}>계좌개설</ModalHeader>
                <ModalBody>
                    {/*  && 연산자의 사용으로 조건이 성립하면  && 이후의 태그가 나올 수 있음*/ }
                    {isBefore && 
                    
                        <Table border="1"> 
                            <tbody>
                                <tr>
                                    <th>계좌번호</th><td>{acc.id}</td>
                                </tr>
                                
                                <tr>
                                    <th>이름</th><td>{acc.name}</td>
                                </tr>
                                
                                <tr>
                                    <th>입금액</th><td>{acc.balance}</td>
                                </tr>
                                
                                <tr>
                                    <th>종류</th><td>{acc.type}</td>
                                </tr>
                                {acc.type==="특수계좌" && <tr><th>등급</th><td>{acc.grade}</td></tr>}
                            </tbody>
                        </Table>
                        }
                    {message}
                </ModalBody>
                <ModalFooter>
                    {isBefore === true?
                    <div>
                    <Button color='primary' onClick={submit}>확인</Button> 
                    <Button color='secondary' onClick={()=>setModal(!modal)}>취소</Button>
                    </div> :
                    <Button color='primary' onClick={()=>setModal(!modal)}>확인</Button>
                    }
                    </ModalFooter>
            </Modal>

        </div>
    );
}
export default MakeAccount;
