import {useSetAtom} from 'jotai';
import {tokenAtom} from './atoms';
import {Table,Input,Button,Label} from 'reactstrap';
import {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router'

const Login =() => {
    const [member,setMember] =useState({username:'',password:''});
    const setToken = useSetAtom(tokenAtom);
    const divStyle={margin:"0 auto",width:"400px",border:"1px solid lightgray",borderRadius:"7px",padding:"10px"};
    const navigate = useNavigate();
    const edit=(e)=>{
        setMember({...member,[e.target.name]:e.target.value});
    }    

    const redirectKakaoUri = "http://localhost:8080/oauth2/callback/kakao";
    const restKakaoAuthKey ="d1e55a57c615ed931fe94c2d77ef5a3c";
    const kakaoAuthUrl =`https://kauth.kakao.com/oauth/authorize?client_id=${restKakaoAuthKey}&redirect_uri=${redirectKakaoUri}&response_type=code`
    
    const redirectNaverUri = "http://localhost:8080/oauth2/callback/naver";
    const restNaverAuthKey ="cN5KhLKCmZQ3KCGoyauD";
    const naverAuthUrl = `https://nid.naver.com/oauth2.0/authorize?client_id=${restNaverAuthKey}&redirect_uri=${redirectNaverUri}&response_type=code`;




    const submit=(e)=>{
        let formData = new FormData();
        formData.append("username",member.username);
        formData.append("password",member.password);
        //security는 post형태임
        axios.post("http://localhost:8080/login",formData)
        .then(res =>{
            console.log(res);
            
            //테스트 시작
            //let token = JSON.parse(res.headers.authorization);
            //console.log(token);
            // 토큰 오염 (User에서 토큰 재발급 돼야 함)
            //token.access_token = token.access_token+'1';
            // 재발급 토큰까지 오염시킴 (User에서 err로 가야함)
            
            //console.log(res.headers.authorization); 
            //token.refresh_token = token.refresh_token+'1';    
            //setToken(JSON.stringify(token)); // 토큰 정보를 변수에 저장 
            // 테스트 끝
            setToken(res.headers.authorization);
            navigate("/user");
        })
        .catch(err=>{
            console.log(err);
        })
    }
    
    return(
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
        )
}
export default Login;