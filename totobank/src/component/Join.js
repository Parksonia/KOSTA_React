import { Col, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Join() {
    // const [member, setMember] = useState({ id: '', name: '', password: '', email: '', postCode:'',address: '',detailAddress:'',extraAddress:'' ,nickname: '' });
    const [member,setMember] = useState({id: '', name: '', password: '', email: '', address: '' ,nickname: '' })
    const [isModal, setIsModal] = useState(false);
    const [message, setMessage] = useState('');
    const [isFail, setIsFail] = useState(false);
    const navigate = useNavigate();
    
    const daumAddress =(e)=> {
       
    } 
    const memberEdit = (e) => {
        //e.preventDefault();
        setMember({ ...member, [e.target.name]: e.target.value });
    }
    const submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/join", member)
            .then(res => {
                if (res.data === true) {
                    setMessage("회원가입 성공!");
                    setIsFail(true);
                    setIsModal(true);
                }
            })
            .catch(err => {
                console.log(err);
                setMessage(err.response.data);
                setIsModal(true);
            })
    }

    return (
        <div className="route">
            <h4>회원가입</h4>
            <Form>
                <FormGroup row>
                    <Label for="id" sm={3}>아이디</Label>
                    <Col sm={6}>
                        <Input type="text" name="id" id="id" value={member.id} onChange={memberEdit} />
                    </Col>
                    <Col sm={3}>
                        <Button color="success">중복</Button>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="name" sm={3}>이름</Label>
                    <Col sm={9}>
                        <Input type="text" name="name" id="name" value={member.name} onChange={memberEdit} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="name" sm={3}>비밀번호</Label>
                    <Col sm={9}>
                        <Input type="text" name="password" id="password" value={member.password} onChange={memberEdit} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="name" sm={3}>이메일</Label>
                    <Col sm={9}>
                        <Input type="text" name="email" id="email" value={member.email} onChange={memberEdit} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="nickname" sm={3}>닉네임</Label>
                    <Col sm={9}>
                        <Input type="text" name="nickname" id="nickname" value={member.nickname} onChange={memberEdit} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="name" sm={3}>주소</Label>
                    <Col sm={9}>
                        {/* <Input type="text" name="postCode" value={member.postCode} placeholder="우편번호" onChange={memberEdit} />
                        <Input type="button" onclick={daumAddress} value="우편번호 찾기" /><br />
                        <Input type="text" name="address" value={member.address}  placeholder="주소" readOnly/><br />
                        <Input type="text" name="detailAddress" value={member.detailAddress} placeholder="상세주소" onChange={memberEdit} />
                        <Input type="text" name="extraAddress" value={member.extraAddress} placeholder="참고항목" onChange={memberEdit} /> */}

                        <Input type="text" name="address" id="address" value={member.address} onChange={memberEdit} />
                    </Col>
                </FormGroup>
                <Button color="primary" onClick={submit}>회원가입</Button>
            </Form>
            <Modal isOpen={isModal} toggle={() => setIsModal(!isModal)}>
                <ModalHeader toggle={() => setIsModal(!isModal)}>회원가입</ModalHeader>
                <ModalBody>
                    {message}
                </ModalBody>
                <ModalFooter>
                    {isFail === true ?
                        <div>
                            <Button color="primary" onClick={() => navigate('/login')}>로그인 페이지로 이동</Button>
                        </div> :
                        <Button color="primary" onClick={() => setIsModal(!isModal)}>확인</Button>
                    }
                </ModalFooter>
            </Modal>
        </div>
    )
}