import {Table, Input, Button, Label, ListGroup, ListGroupItem} from 'reactstrap';
import {useState, useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import {url} from '../config';
import axios from 'axios';
import { useAtomValue } from 'jotai/react';
import { userAtom, tokenAtom } from '../atoms';

const BoardWrite = () => {
    const [fileList, setFileList] = useState([]);
    const [board, setBoard] = useState({subject:'', content:'', writer:''});
    const user = useAtomValue(userAtom);
    const token = useAtomValue(tokenAtom);

    const fRef = useRef();
    const navigate = useNavigate();
    const divStyle = {
        margin:'0 auto',
        width:'600px',
        border:'1px solid lightgray',
        borderRadius:'7px',
        padding:'10px'
    }

    const edit = (e) => {
        setBoard({...board, [e.target.name]:e.target.value});
    }

    const fileChange = (e) => {
        if(e.target.files.length>0) {
            setFileList([...fileList, e.target.files[0]]);
        }
    }

    const submit = (e) => {
        const formData = new FormData();
        formData.append("subject", board.subject);
        formData.append("content", board.content);
        formData.append("writer", user.id);
        for(let file of fileList) {
            formData.append('file', file);
        }

        axios.post(`${url}/user/boardWrite`, formData, {
            headers: {
                Authorization:token
            }
        })
        .then(res=> {
            console.log(res.data);
            navigate(`/boardDetail/${res.data}`)
        })
        .catch(err => {
            console.log(err);
            alert(err.response.data);
        })
    }

    const delFile = (file) => {
        setFileList([...fileList.filter(f=>f!==file)]);
    }

    const fileClick = (e) => {
        fRef.current.click();
    }
    return(
        <div>
            <div className="header-text">게시글 등록</div>
            <br/>
            <div style={divStyle}>
                <Table borderless>
                    <tbody>
                        <tr>
                            <td><Label for="writer">글쓴이</Label></td>
                            <td>
                                <Input type="text" name="writer" id="writer" value={user.nickname} />
                            </td>
                        </tr>
                        <tr>
                            <td><Label for="subject">제목</Label></td>
                            <td>
                                <Input type="text" name="subject" id="subject" onChange={edit}/>
                            </td>
                        </tr>
                        <tr>
                            <td><Label for="content">내용</Label></td>
                            <td>
                                <Input type="textarea" name="content" id="content" cols="40" rows="15" onChange={edit}/>
                            </td>
                        </tr>                        
                        <tr>
                            <td><Label>이미지</Label></td>
                            <td>
                            <Input type="file" id="file" accept='image/*' hidden onChange={fileChange} ref={fRef}/>
                            <img src="/plus.png" width="100px" height="100px" alt=''
                                    // onClick={fileClick}/><br/><br/>
                                    onClick={()=>document.getElementById('file').click()}/><br/><br/> 
                                {
                                    fileList.map((file,index)=> 
                                        <span key={index}>
                                            <div style={{display:"inline-block"}}>
                                            <img style={{display:"inline-block", width:"20px", height:"20px"}} src="/minus.png" alt='' 
                                                onClick={()=>delFile(file)}/><br/>
                                            <img src={URL.createObjectURL(file)} width="100px" alt='' style={{marginRight:"10px"}}/>
                                            </div>
                                            {(index+1)%3===0 && <><br/><br/></>}
                                        </span>
                                    )
                                }
                            </td>
                        </tr>                        
                        <tr>
                            <td></td>
                            <td>
                                <Button color="primary" onClick={submit}>등록</Button>&nbsp;&nbsp;
                                <Button type="reset" color="secondary">다시쓰기</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )

}

export default BoardWrite;