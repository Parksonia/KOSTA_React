import {Table, Label, Input, Button} from 'reactstrap';
import {useState} from 'react';
import axios from 'axios';
import {url, axiosInToken} from '../config';
import { useNavigate } from 'react-router';
import { useSetAtom } from 'jotai/react';
import { tokenAtom, userAtom } from '../atoms';

const Login = () => {
    const [member, setMember] = useState({username:'', password:''});
    const setToken = useSetAtom(tokenAtom);
    const setUser = useSetAtom(userAtom);

    const divStyle = {margin:"0 auto",width:'400px',border:"1px solid lightgray",borderRadius:'7px',padding:'10px'};
    const navigate = useNavigate();

    const edit = (e) => {
        setMember({...member, [e.target.name]:e.target.value});
    }

    const submit = (e) => {
        const formData = new FormData();
        formData.append("username", member.username);
        formData.append("password", member.password);
        axios.post(`${url}/login`, formData)
            .then(res=> {
                const token = res.headers.authorization;
                setToken(token);
                axiosInToken(token).get("user")
                .then(res=> {
                    setUser(res.data);
                    navigate('/');
                })
                .catch(err=> {
                    console.log(err);
                })

                // axios.get(`${url}/user`, {
                //     headers: {
                //         Authorization:token
                //     }
                // })
                // .then(res=> {
                //     setUser(res.data);
                //     navigate('/');
                // })
                // .catch(err=> {
                //     console.log(err);
                // })
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
                            <td><Label for="password">카카오로그인</Label></td>
                            <td>
                                <a href="http://localhost:8090/oauth2/authorization/kakao"><img src="/kakao_login.png" alt='' width="220px"/></a>
                            </td>
                        </tr>
                        <tr>
                            <td><Label for="password">네이버로그인</Label></td>
                            <td>
                                <a href="http://localhost:8090/oauth2/authorization/naver"><img src="/naver_login.png" alt='' width="220px" height="50px"/></a>
                            </td>
                        </tr>                        
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default Login;