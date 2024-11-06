import {Table,Label,Input,Button} from 'reactstrap';
import {useState,useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {url} from '../config';
const Join=()=>{
    const divStyle={margin:"0 auto",width:"400px",border:"1px solid lightgray",borderRadius:"7px",padding:"10px"};
    
    const[member,setMember] =useState({id:'',name:'',password:'',email:'',address:'',nickname:''});
    const[profileImage,setProfileImage]= useState(null);
   
    
    const imgRef = useRef();
    const navigate = useNavigate();
    const edit=(e)=>{
        setMember({...member,[e.target.name]:e.target.value});
    }
    const pofileChange =(e) =>{
        // const reader = new FileReader();
        // const file = imgRef.current.files[0];
    
        // reader.readAsDataURL(file);
        // reader.onloadend = () => {
        //     setProfileImage(reader.result);
        // };
        
        if(e.target.files.length>0) {
            setProfileImage(imgRef.current.files[0]);
        }
        
    }

    const submit=(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("id",member.id);
        formData.append("name",member.name);
        formData.append("password",member.password);
        formData.append("email",member.email);
        formData.append("address",member.address);
        formData.append("nickname",member.nickname);
        if(profileImage !=null){
            formData.append("profile",profileImage);
        }
        

        axios.post(`${url}/join`,formData)
        .then(res=>{
            console.log(res);
            navigate(`/login`);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    return(
        <>
        <div className='header-text'>회원가입</div>
        <div style={divStyle}>
            <Table borderless> 
                <tbody>
                    <tr>
                        <td><Label for='id'>아이디</Label></td>
                        <td><Input type='text' name='id' id ="id" onChange={edit}></Input></td>
                    </tr>
                    <tr>
                        <td><Label for='name'>이름</Label></td>
                        <td><Input type='text' name='name' id ="name" onChange={edit}></Input></td>
                    </tr>
                    <tr>
                        <td><Label for='nickname'>닉네임</Label></td>
                        <td><Input type='text' name='nickname' id ="nickname" onChange={edit}></Input></td>
                    </tr>
                    <tr>
                        <td><Label for='password'>비밀번호</Label></td>
                        <td><Input type='text' name='password' id ="password" onChange={edit}></Input></td>
                    </tr>
                    <tr>
                        <td><Label for='email'>이메일</Label></td>
                        <td><Input type='text' name='email' id ="email" onChange={edit}></Input></td>
                    </tr>
                    <tr>
                        <td><Label for='address'>주소</Label></td>
                        <td><Input type='text' name='address' id ="address" onChange={edit}></Input></td>
                    </tr>
                    <tr>
                        <td><Label for='profile'>프로필이미지</Label></td>
                        <td>
                            <img src={profileImage !==null? URL.createObjectURL(profileImage):'/defaultPerson.png'} width="100px" height="100px" alt=''
                            onClick={()=>imgRef.current.click()} /><br/><br/>
                            <input type='file' name='file' id ="file" onChange={pofileChange} hidden ref={imgRef} accept='image/*' />
                          
                        </td>
                    
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <Button color='primary' style={{width:"100%"}} onClick={submit}>회원가입</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
        
        </>
    )
}
export default Join;