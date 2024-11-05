import {Table,Label,Input,Button} from 'reactstrap';
import {useState,useRef,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { url } from '../config';

const BoardWrite=()=>{

    const navigate = useNavigate();
    const fRef = useRef();
    const divStyle={
        margin:'0 auto',
        width:'600px',
        border:'1px solid lightgray',
        borderRadius:'7px',
        padding:'10px'
    }
    
    const[fileList,setFileList] = useState([]);
    const [board,setBoard] =useState({subject:'',content:'',writer:''});
    const edit=(e)=>{
        setBoard({...board,[e.target.name]:e.target.value});
    }

    const fileChange =(e) =>{
        if(e.target.files.length>0) {
            setFileList([...fileList,e.target.files[0]]);//새로운 배열을 만들고([])기존 배열(fileList)을 엎어씀(...) , 새로운 값을 추가한 형태
        }
    }
    const fileClick =(e) =>{
        fRef.current.click();
    }
    const deleteFile =(file) =>{
        const reFileList  = fileList.filter(f=>f!==file);
        setFileList([...reFileList]);
    }
    const submit=(e)=>{
        e.preventDefault();

        const formData = new FormData();
        
        formData.append("subject",board.subject);
        formData.append("content",board.content);
        formData.append("writer",board.writer);
        
    
        for(let file of fileList) {
            formData.append("file",file);
        }
        
        axios.post(`${url}/boardWrite`,formData)
        .then(res=>{
            console.log(res);
            navigate(`/boardDetail/${res.data}`); //router가 관리함 react-router-dom path에 
        })
        .catch(err=>{
            console.log(err);
        })
    }
    return(
        <div>
        <div className="header-text">게시글 등록</div>
        <br />

        <div style={divStyle} >
            <Table borderless>
                <tbody>
                    <tr>
                        <td>
                            <Label for="writer">글쓴이</Label>
                        </td>
                        <td>
                            <Input type="text" name="writer" onChange={edit}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Label for="subject">제목</Label>
                        </td>
                        <td>
                            <Input type="text" name="subject" onChange={edit}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Label for="content">내용</Label>
                        </td>
                        <td>
                            <Input type="textarea" cols="40" rows="15" name="content" onChange={edit}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Label>이미지</Label>
                        </td>
                        <td>
                            <img src="/plus.png" width="100px" height="100px" alt=''
                            // onClick ={()=>fRef.current.click()}/><br/><br/>
                            onClick={()=>document.getElementById('file').click()}/><br/><br/> 
                             <Input type="file" name="file" id="file" accept='image/*' onChange={fileChange} ref={fRef} hidden/>
                            {
                                fileList.map((file,index)=>
                                  <span key={index}>
                                    <div>
                                    <img style={{display:"inline-block",width:"20px",height:"20px"}} src='/minus.png' alt=''
                                                 onClick={()=> deleteFile(file)}/>
                                    <img src={URL.createObjectURL(file)} width="100px"alt='' style={{marginRight:"10px"}}/>
                                    </div>
                                    {(index+1)%3===0 &&<><br/><br /></>}
                                </span>   
                                )    
                        }
                            
                        
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <Button color="primary" onClick={submit}>등록</Button>&nbsp;&nbsp;
                            <Button color="secondary" type="rest">취소</Button>
                        </td>
                    </tr>
                
                
                </tbody>
            </Table>
        </div>
        </div>
    )
}
export default BoardWrite;