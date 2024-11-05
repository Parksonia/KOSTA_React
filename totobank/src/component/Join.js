import { Col, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DaumPostcode from 'react-daum-postcode';


export default function Join() {
     const [member, setMember] = useState({ id: '', name: '', password: '', email: '', postCode:'',address: '',detailAddress:'',extraAddress:'' ,nickname: '' });
    //const [member,setMember] = useState({id: '', name: '', password: '', email: '', address: '' ,nickname: '' })
    const[isCheckId,setIsCheckId] =useState(false);
    const[isOpen,setIsOpen] =useState(false);
    const [isModal, setIsModal] = useState(false);
    const [message, setMessage] = useState('');
    const [isFail, setIsFail] = useState(false);
    const navigate = useNavigate();
    
  

    const memberEdit = (e) => {
        //e.preventDefault();
        setMember({ ...member, [e.target.name]: e.target.value });
    }

    const editId=(e)=>{
        setIsCheckId(false);
        memberEdit(e);
    }

    const checkId =(e) =>{
        e.preventDefault();
        axios.get(`http://localhost:8082/checkMemId/${member.id}`)
        .then(res=>{
            if(res.data===true) {
                alert("사용중인 아이디 입니다.");
                
            }else {
                alert("사용 가능한 아이디 입니다.."); 
                setIsCheckId(true);  
            }
           
        })
        .catch(err=>{   
            console.log(err);
        })
    }

    const submit = (e) => {
        
        e.preventDefault();
        if(!isCheckId){
            alert("중복 아이디를 체크하세요");
            return;
        }
        
        const smember = {
            id:member.id, name:member.name,password:member.password,
            nickname:member.nickname,email:member.email,address:member.address+' '+member.extraAddress+' '+member.detailAddress
        }
        

        axios.post("http://localhost:8082/join", member)
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

    const onCompletePost  =(data)=>{
        console.log(data);
        const{address,zonecode,bname,buildingName} = data;
        setMember({...member, postCode:zonecode, address:address, 
            extraAddress: bname + buildingName!==''&& buildingName});
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
                        <Button color="success" onClick={checkId}>중복</Button>
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
                    <Label for="email" sm={3}>이메일</Label>
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
                    <Label for="address" sm={3}>주소</Label>
                    <Col sm={6}>
                        <Input type="text" value={member.postCode} readOnly/>
                    </Col>
                    <Col sm={3}> 
                        <Button onClick={()=>setIsOpen(!isOpen)}>주소찾기</Button>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={3} />
                    <Col sm={9}>
                        <Input type="text"  value={member.address}   readOnly/>
                    </Col>    
                </FormGroup>
                <FormGroup row>
                    <Col sm={3} />
                    <Col sm={9}>
                        <Input type="text"  value={member.extraAddress}  readOnly /> 
                    </Col>    
                </FormGroup>
                <FormGroup row>
                    <Col sm={3} />
                    <Col sm={9}>
                    <Input type="text"  value={member.detailAddress}  onChange={memberEdit} />
                    </Col>    
                </FormGroup>
                <Button color="primary" onClick={submit}>회원가입</Button>
            </Form>

                {/* <FormGroup row>
                    <Label for="address" sm={3}>주소</Label>
                    <Col sm={9}>
                        <Input type="text" name="postCode" value={member.postCode} placeholder="우편번호" onChange={memberEdit} />
                        <Input type="button" onclick={daumAddress} value="우편번호 찾기" /><br />
                        <Input type="text"  value={member.address}   readOnly/><br />
                        <Input type="text"  value={member.detailAddress}  onChange={memberEdit} />
                        <Input type="text"  value={member.extraAddress}  readOnly /> 

                        <Input type="text" name="address" id="address" value={member.address} onChange={memberEdit} />
                    </Col>
                </FormGroup> */}

            <Modal isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
                <ModalHeader toggle={() => setIsOpen(!isOpen)}>주소 찾기</ModalHeader>
                <ModalBody>
                    {isOpen &&<div>
                        <DaumPostcode onComplete={onCompletePost} onClose={()=>setIsOpen(false)}/>
                        </div>
                    }
                </ModalBody>
            </Modal>                


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