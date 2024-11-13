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
    
    const divStyle={margin:"0 auto",width:"400px",border:"1px solid lightgray",borderRadius:"7px",padding:"10px"};
    const navigate = useNavigate();


    
    const redirectKakaoUri = "http://localhost:8080/oauth2/callback/kakao";
    const restKakaoAuthKey ="d1e55a57c615ed931fe94c2d77ef5a3c";
    const kakaoAuthUrl =`https://kauth.kakao.com/oauth/authorize?client_id=${restKakaoAuthKey}&redirect_uri=${redirectKakaoUri}&response_type=code`
    
    const redirectNaverUri = "http://localhost:8080/oauth2/callback/naver";
    const restNaverAuthKey ="cN5KhLKCmZQ3KCGoyauD";
    const naverAuthUrl = `https://nid.naver.com/oauth2.0/authorize?client_id=${restNaverAuthKey}&redirect_uri=${redirectNaverUri}&response_type=code`;


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
                axios.get(`${url}/user`,{ // user정보 
                    headers:{
                        Authorization:token
                    }
                })
                .then(res=>{
                    setUser(res.data); //토큰으로 사용자 정보를 다시 요청
                    navigate('/');
                }).catch(err=>{
                    console.log(err);
                })
                
            })
            .catch(err=>{
                console.log(err);
            })
    }

    return(
        <>
          <div className="header-text"> 로그인</div> 
        <div style={divStyle}>
            <Table borderless>
                <tbody>
                    <tr>
                        <td><Label for="id">아이디</Label></td>
                        <td><Input type='text'name='username' id='username' onChange={edit}></Input></td>
                    </tr>
                    
                    <tr>
                        <td><Label for="password">비밀번호</Label></td>
                        <td><Input type='text'name='password' id='password' onChange={edit}></Input></td>
                    </tr>
                
                    <tr>
                        <td></td>
                        <td><Button onClick={submit}>로그인</Button></td>
                    </tr>
                    <tr>
                        <td><Label for="kakao">카카오 로그인</Label></td>
                        <td><a href={kakaoAuthUrl} alt=''><img src="./kakaologin.png" alt='kakao'/></a></td>
                    </tr>
                    
                    <tr>
                        <td><Label for="naver">네이버 로그인</Label></td>
                        <td><a href={naverAuthUrl} alt=''><img src="./naverlogin.png"  alt='kakao'width={180}/></a></td>
                    </tr>
                </tbody>                   
            </Table>
        </div>
        </>
    )
}

export default Login;