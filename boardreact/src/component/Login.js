import {Table,Label,Input,Button} from 'reactstrap';
import {useState} from 'react';
import axios from 'axios';
import {url} from '../config';
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router';
const Login=()=>{
    const[member,setMember] = useState({id:'',password:''});
    const divStyle={margin:"0 auto",width:"400px",border:"1px solid lightgray",borderRadius:"7px",padding:"10px"};
    const dispatch = useDispatch();
    const navigate = useNavigate();

    
    
    const edit=(e)=>{
        setMember({...member,[e.target.name]:e.target.value});
    }
    const submit=(e)=>{
        axios.post(`${url}/login`,member)
        .then(res=>{
            console.log(res.data);
            dispatch({type:"USER",data:{...res.data}});
            navigate("/");
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
                        <td><Input type='text'name='id' id='id' onChange={edit}></Input></td>
                    </tr>
                    
                    <tr>
                        <td><Label for="password">비밀번호</Label></td>
                        <td><Input type='text'name='password' id='password' onChange={edit}></Input></td>
                    </tr>
                
                    <tr>
                        <td></td>
                        <td><Button onClick={submit}>로그인</Button></td>
                    </tr>
                
                </tbody>

                   
            </Table>
        </div>
        </>
    )
}
export default Login;