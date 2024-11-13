import {Table,Label,Input,Button} from 'reactstrap';
import {useState} from 'react';
import axios from 'axios';
import {url} from '../config';
import {useNavigate} from 'react-router';
import {useAtom,useSetAtom} from'jotai';
import { userAtom } from '../atoms';
import { tokenAtom } from '../tokenatoms';

const Login=()=>{
    const[member,setMember] = useState({username:'',password:''});
    const divStyle={margin:"0 auto",width:"400px",border:"1px solid lightgray",borderRadius:"7px",padding:"10px"};
    const [user,setUser] = useAtom(userAtom);
    const navigate = useNavigate();
    const setToken = useSetAtom(tokenAtom);
    
    
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

        axios.post("http://localhost:8080/login",formData)
        .then(res=>{
            console.log(res);
            setToken(res.headers.authorization);
            setUser(res.data); 
            navigate("/");
        })
        .catch(err =>{
            console.log(err);
        })
        // axios.post(`${url}/login`,member)
        // .then(res=>{
        //     console.log(res.data);
        //     setUser(res.data);
        //     navigate("/");
        // })
        // .catch(err=>{
        //     console.log(err);
        // })
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