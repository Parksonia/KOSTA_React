import { Col, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import { useState } from 'react';
import axios  from 'axios';
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';

export default function Login() {
    const [loginInfo,setLoginInfo] = useState({id:'',password:''});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    

    const submit =(e)=>{
        e.preventDefault();
        axios.post("http://3.34.139.32:8080/login",loginInfo)
        .then(res=>{
            console.log(res.data);
            dispatch({type:'USER',data:{...res.data}}); //type이 user이면 initState..data가 res.data로 변경
            navigate('/makeAccount')
        })
        .catch(err=>{
            console.log(err);
            alert("로그인 실패");

        })

    }
    
    return(
        <div className="route">
        <h4>로그인</h4>
        <Form>
            <FormGroup row>
                <Label for="id" sm={3}>아이디</Label>
                <Col sm={9}>
                    <Input type="text" name="id" id="id" value={loginInfo.id} onChange={(e)=>setLoginInfo({...loginInfo,id:e.target.value})}/>
                </Col>
            </FormGroup>                
            <FormGroup row>
                <Label for="name" sm={3}>비밀번호</Label>
                <Col sm={9}>
                    <Input type="text" name="password" id="password" value={loginInfo.password} onChange={(e)=>setLoginInfo({...loginInfo,password:e.target.value})}/>
                </Col>
            </FormGroup> 
            <Button color="primary" onClick={submit}>로그인</Button> 
        </Form>            
    </div>
    )
}