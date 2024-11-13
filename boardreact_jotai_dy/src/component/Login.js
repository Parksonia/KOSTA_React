import {Table, Label, Input, Button} from 'reactstrap';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {url} from '../config';
import { useNavigate } from 'react-router';
import { useAtom } from 'jotai/react';
import { userAtom, tokenAtom } from '../atoms';

const Login = () => {
    const [member, setMember] = useState({username:'', password:''});
    const [token, setToken] = useAtom(tokenAtom);
    const [user, setUser] = useAtom(userAtom);
    
    const divStyle = {margin:"0 auto",width:'400px',border:"1px solid lightgray",borderRadius:'7px',padding:'10px'};
    const navigate = useNavigate();

    const edit = (e) => {
        setMember({...member, [e.target.name]:e.target.value});
    }

    const userInfo = (pToken) => {
        axios
        .get(`${url}/user`, {
            headers: { Authorization: pToken },
        }) //백엔드가 토큰을 가지고 알아서 정보를 가져옴
        .then((res) => {
            console.log(res.data);
            //토큰이 만료되어 백엔드에서 토큰을 다시 만들어줌, 받은 토큰을 갱신하고 사용자 정보를 다시 요청해야 함
            if (res.data === "token") {
                setToken(res.headers.authorization);
            } else {
                setUser({ ...res.data });
            }
            navigate("/")
        })
        
        .catch((err) => {
            console.log(err);
        });
    }

    const submit = (e) => {
        const formData = new FormData();
        formData.append("username", member.username);
        formData.append("password", member.password);

        axios.post(`${url}/login`, formData)
            .then(res=> {
                console.log(res.headers.authorization);
                setToken(res.headers.authorization) // 토큰을 가져와서 atom sessionStorage에 저장 후
                axios.get(`${url}/user`,{
                    headers:{
                        Authorization: res.headers.authorization
                    }
                })
                
                serInfo(res.headers.authorization); //토큰으로 사용자 정보를 다시 요청
            })
            .catch(err=>{
                console.log(err);
            })
    }

    return(
        <>
            <div className="header-text">로그인</div>
            <div style={divStyle}>
                <Table borderless>
                    <tbody>
                        <tr>
                            <td><Label for="id">아이디</Label></td>
                            <td><Input type="text" name="username" id="username" onChange={edit}/></td>
                        </tr>
                        <tr>
                            <td><Label for="password">비밀번호</Label></td>
                            <td><Input type="password" name="password" id="password" onChange={edit}/></td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <Button color="primary" style={{width:"100%"}} onClick={submit}>로그인</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Label for="kakao">카카오로그인</Label>
                            </td>
                            <td>
                                <a href={"http://localhost:8080/oauth2/authorization/kakao"}>
                                    <img src="/kakao_login_medium_narrow.png" alt="" width="100px"/>
                                </a>
                            </td>
                            <td>
                                <Label for="naver">네이버로그인</Label>
                            </td>
                            <td>
                                <a href={"http://localhost:8080/oauth2/authorization/naver"}>
                                    <img src="/naver_login.png" alt="" width="100px" />
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default Login;