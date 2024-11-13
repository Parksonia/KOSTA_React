import{Col,Button,Form,FormGroup,Label,Input,Modal,ModalFooter,ModalBody,ModalHeader} from 'reactstrap';
import { useState } from 'react';
import axios from 'axios';


export default function AccountInfo() { //default는 함수 앞에 사용 오직 하나만 있을 때 default를 붙임
    const [isModal,setIsModal] = useState(false);
    const [message,setMessage] =useState("");
    const [viewInfo,setViewInfo] = useState(false);
    const [acc,setAcc] =useState({id:'',name:'',balance:'',type:'',grade:''}) 
    
    const submit =(e) =>{
        e.preventDefault();
        axios.get(`http://3.34.139.32:8080/accountInfo/${acc.id}`)
        .then(res=>{
            console.log(res.data);
            setAcc({...res.data});
            setViewInfo(true);
        })
        .catch(err=>{
            console.log(err);
            setMessage("계좌조회 오류");
            setIsModal(true);
        })
    }
    
    return(
        <div className="route">
            <h4>계좌조회</h4>
            <Form>
                <FormGroup row>
                    <Label for='id' sm={3}>계좌번호</Label>
                    <Col sm={9}>
                        <Input type='text'name='id' id='id' value={acc.id} onChange={(e)=>setAcc({...acc,id:e.target.value})}/>
                    </Col>
                </FormGroup>
                <Button color='primary' onClick={submit}>계좌조회</Button>
            </Form>
            <br/>
            <Form hidden={!viewInfo}>
                    <FormGroup row>
                        <Label for='id' sm={3}>계좌번호</Label>
                        <Col sm={9}>
                        <Input type='text'name='id' id='id' readOnly value={acc.id}/>
                        </Col>
                    </FormGroup>    
            <FormGroup row>
                    <Label for='name' sm={3}>이름</Label>
                    <Col sm={9}>
                        <Input type='text'name='name' id='name' readOnly value={acc.name}/>
                    </Col>
            </FormGroup>
            <FormGroup row>
                    <Label for='balance' sm={3}>잔액</Label>
                    <Col sm={9}>
                        <Input type='text'name='balance' id='balance' readOnly value={acc.balance}/>
                    </Col>
            </FormGroup>
            <FormGroup row>
                    <Label for='type' sm={3}>종류</Label>
                    <Col sm={9}>
                        <Input type='text'name='type' id='type' readOnly value={acc.type}/>
                    </Col>
            </FormGroup>
            {acc.type ==="특수계좌" &&
            <FormGroup row>
                    <Label for="grade" sm={3}>등급</Label>
                    <Col sm={9}>
                        <Input type="text"name="grade" id="grade" readOnly value={acc.grade}/>
                    </Col>
            </FormGroup>
            }
            </Form>
            
            <Modal isOpen={isModal} toggle={()=>setIsModal(!isModal)}>
                <ModalHeader toggle={()=>setIsModal(!isModal)}>출금확인</ModalHeader>
                <ModalBody>
                    {message}
                </ModalBody>
                <ModalFooter>
                        <Button color='primary' onClick={()=>setIsModal(!isModal)} >확인</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}