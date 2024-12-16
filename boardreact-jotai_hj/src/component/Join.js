import {Table, Label, Input, Button} from 'reactstrap';
import {useState} from 'react';
import axios from 'axios';
import {url} from '../config';
import { useNavigate } from 'react-router';

const Join = () => {
    const [member, setMember] = useState({id:'',name:'', password:'',email:'',address:'',nickname:''});
    const divStyle = {margin:"0 auto",width:'400px',border:"1px solid lightgray",borderRadius:'7px',padding:'10px'};
    const [profileImg, setProfileImg] = useState(null);
    const navigate = useNavigate();

    const edit = (e) => {
        setMember({...member, [e.target.name]:e.target.value});
    }

    const fileChange = (e) => {
        if(e.target.files.length>0) {
            setProfileImg(e.target.files[0]);
        }
    }    

    const submit = (e) => {
        let formData = new FormData();
        formData.append("id", member.id);
        formData.append("name",member.name);
        formData.append("password",member.password);
        formData.append("email",member.email);
        formData.append("address",member.address);
        formData.append("nickname",member.nickname);
        if(profileImg!=null) {
            formData.append("profile", profileImg);
        }

        axios.post(`${url}/join`, formData)
            .then(res=> {
                console.log(res.data)
                navigate("/login")
            })
            .catch(err=> {
                console.log(err);
            })
    }

    return(
        <>
            <div className="header-text">회원가입</div>
            <div style={divStyle}>
                <Table borderless>
                    <tbody>
                        <tr>
                            <td><Label for="id">아이디</Label></td>
                            <td><Input type="text" name="id" id="id" onChange={edit}/></td>
                        </tr>
                        <tr>
                            <td><Label for="name">이름</Label></td>
                            <td><Input type="text" name="name" id="name" onChange={edit}/></td>
                        </tr>
                        <tr>
                            <td><Label for="password">비밀번호</Label></td>
                            <td><Input type="text" name="password" id="password" onChange={edit}/></td>
                        </tr>
                        <tr>
                            <td><Label for="nickname">닉네임</Label></td>
                            <td><Input type="text" name="nickname" id="nickname" onChange={edit}/></td>
                        </tr>
                        <tr>
                            <td><Label for="email">이메일</Label></td>
                            <td><Input type="text" name="email" id="email" onChange={edit}/></td>
                        </tr>     
                        <tr>
                            <td><Label for="address">주소</Label></td>
                            <td><Input type="text" name="address" id="address" onChange={edit}/></td>
                        </tr>                                            
                        <tr>
                            <td><Label>프로파일이미지</Label></td>
                            <td>
                                <img src={profileImg!==null? URL.createObjectURL(profileImg) : "/person.webp" } width="100px" height="100px" alt='' style={{borderRadius:"10px"}}
                                    onClick={()=>document.getElementById('file').click()}/><br/><br/> 
                                <input type="file" name="file" id="file" onChange={fileChange} hidden accept='image/*'/>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <Button color="primary" style={{width:"100%"}} onClick={submit}>회원가입</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default Join;