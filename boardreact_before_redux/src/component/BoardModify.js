import {useParams,useNavigate} from 'react-router-dom'
import {useState,useEffect} from 'react'
import axios from 'axios';
import { url } from '../config';
import {Table,Input,Button,Label} from 'reactstrap'

const BoardModify=()=>{
    const {num} = useParams(); // 객체 타입으로 받아온 파라미터정보를 변수에저장함 
    const navigate = useNavigate();
    const[board,setBoard] = useState({num:'',writer:'',subject:'',content:'',fileNums:''});
    const[fileNumList,setFileNumList] = useState([]); //보여지는것
    const [fileList,setFileList] =useState([]); // 추가되는 것 
    const [fileDelList,setFileDelList] =useState([]); 
    const divStyle={
        margin:'0 auto',
        width:'600px',
        border:'1px solid lightgray',
        borderRadius:'7px',
        padding:'10px'
    }
    // 화면 전환되자마자 데이터가 보여야함 
    useEffect(()=>{
        axios.get(`${url}/boardDetail/${num}`)
        .then(res=>{
             let resBoard = res.data.board;
            setBoard({...resBoard})
            if(resBoard.fileNums!==null && resBoard.fileNums.length !==0) {
                setFileNumList([...resBoard.fileNums.split(",")]);
            }
            
        })
        .catch(err=>{
            console.log(err);
        })
    },[]);
    const edit=(e)=>{
        setBoard({...board,[e.target.name]:e.target.value});
    }

    const submit=(e)=>{
        e.preventDefault();
       
        const modifyBoard = {num:board.num,subject:board.subject, content:board.content};
        console.log(modifyBoard);
        let formData = new FormData();
        formData.append("num",board.num);
        formData.append("subject",board.subject);
        formData.append("content",board.content);
        
        for(let fn of fileDelList) {
            formData.append("delFile",fn);
        }
        for(let file of fileList) {
            formData.append("file",file);
        }

        axios.post(`${url}/boardModify`,formData)
        .then(res=>{
            console.log(res.data);
            navigate(`/boardDetail/${res.data}`);

        })
        .catch(err=>{
            console.log(err);
        })

    }
    const fileChange =(e) =>{
        if(e.target.files.length>0) {
            setFileList([...fileList,e.target.files[0]]);// 새로운 배열을 만들고([])기존 배열(fileList)을 엎어씀(...) , 새로운 값을 추가한 형태
        }
    }

    const deleteFile =(file) =>{
        const reFileList  = fileList.filter(f=>f!==file);
        setFileList([...reFileList]);
    }
    const delFileNum =(fn) =>{
        setFileDelList([...fileDelList,fn]);
        setFileNumList([...fileNumList.filter(f=>f!==fn)]);
    }


    
    return(
        <>
            <div className='header-text'>게시글 수정</div>
            <br/>
            <div style={divStyle}>
                <Table borderless>
                    <tbody>
                        <tr>
                            <td><Label>작성자</Label></td>
                            <td><Input type='text' readOnly value={board.writer}></Input></td>
                        </tr>
                        <tr>
                            <td><Label>제목</Label></td>
                            <td><Input type='text'  value={board.subject} name="subject" onChange={edit}></Input></td>
                        </tr>
                        <tr>
                            <td><Label>내용</Label></td>
                            <td><Input type='textarea' cols="40" rows="15"  value={board.content} name="content" onChange={edit}></Input></td>
                        </tr>
                        <tr>
                            <td><Label>이미지</Label></td>
                            <td>
                            <img src="/plus.png" width="100px" height="100px" alt=''
                            onClick={()=>document.getElementById('file').click()}/><br/><br/> 
                            
                                {
                                    fileNumList.length!== 0 && 
                                    fileNumList.map((fn,index)=>
                                        <span key={index}>
                                         <div style={{display:"inline-block"}}>
                                         <img style={{ display: "inline-block", width: "20px", height: "20px" }} src="/minus.png" alt=''
                                         onClick={() => delFileNum(fn)} /><br />
                                        <img key={fn} src={`${url}/image/${fn}`} width="100px" alt='' style={{marginRight:"10px"}}/>
                                        </div>
                                        {(index+1)%3===0 &&<><br/><br /></>}
                                        </span>
                                    )
                                }
                                 {
                                fileList.length!==0 &&
                                fileList.map((file,index)=>
                                  <span key={index}>
                                    <div style={{display:"inline-block"}}>
                                    <img style={{display:"inline-block",width:"20px",height:"20px"}} src='/minus.png' alt=''
                                                 onClick={()=> deleteFile(file)}/> 
                                    <img src={URL.createObjectURL(file)} width="100px"alt='' style={{marginRight:"10px"}}/>
                                    </div>
                                    {((fileNumList===null?0:fileNumList.length)+index+1)%4 === 0 &&<><br/><br /></>}
                                </span>   
                                )    
                        }
                        <Input type="file" id="file" accept='image/*' hidden onChange={fileChange} />
                            </td> 
                        </tr>
                        

                        <tr>
                            <td><Button color='primary' onClick={submit}>수정</Button></td>
                            <td><Button color='primary' tag="a" href="/">목록</Button></td>&nbsp;&nbsp;

                        </tr>
                    
                    </tbody>
                </Table>

            </div>
        </>
        
    )
}
export default BoardModify;