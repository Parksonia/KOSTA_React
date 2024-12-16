import {Table,Input,Button,Label} from 'reactstrap';
import {useParams, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {url} from '../config';
import axios from 'axios';

const BoardModify = () => {
    const [board, setBoard] = useState({num:'',subject:'',content:'',writer:'',fileNums:'', nickname:''})
    const [fileNumList, setFileNumList] = useState([]);
    const [fileList, setFileList] = useState([]);
    const [fileDelList, setFileDelList] = useState([]);

    const {num} = useParams();
    const navigate = useNavigate();
    const divStyle = {
        margin:'0 auto',
        width:'600px',
        border:'1px solid lightgray',
        borderRadius:'7px',
        padding:'10px'
    }
    useEffect(()=> {
        axios.get(`${url}/boardDetail/${num}`)
            .then(res=> {
                let resBoard = res.data.board;
                setBoard({...resBoard})
                if(resBoard.fileNums!==null && resBoard.fileNums.length!==0) {
                    setFileNumList([...resBoard.fileNums.split(",")]);
                }
            })
            .catch(err=> {
                console.log(err);
            })
    },[])

    const submit = (e) => {
        const modifyBoard = {num:board.num, subject:board.subject, content:board.content};
        console.log(modifyBoard);

        let formData = new FormData();
        formData.append("num", board.num);
        formData.append("subject", board.subject);
        formData.append("content", board.content);
        for(let fn of fileDelList) {
            formData.append('delFile', fn);
        }
        for(let file of fileList) {
            formData.append("file", file);
        }
        axios.post(`${url}/boardModify`, formData)
            .then(res => {
                console.log(res.data);
                navigate(`/boardDetail/${res.data}`);
            }) 
            .catch(err=> {
                console.log(err);
            })
    }

    const edit = (e) => {
        setBoard({...board, [e.target.name]:e.target.value});
    }

    const fileChange = (e) => {
        if(e.target.files.length>0) {
            setFileList([...fileList, e.target.files[0]]);
        }
    }

    const delFile = (file) => {
        setFileList([...fileList.filter(f=>f!==file)]);
    }    

    const delFileNum = (fn) => {
        setFileDelList([...fileDelList, fn]);
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
                            <td><Label>글쓴이</Label></td>
                            <td><Input type="text" value={board.nickname} readOnly/></td>
                        </tr>
                        <tr>
                            <td><Label>제목</Label></td>
                            <td><Input type="text" name="subject" value={board.subject} onChange={edit}/></td>
                        </tr>
                        <tr>
                            <td><Label>내용</Label></td>
                            <td><Input type="textarea" name="content" cols="40" rows="15" value={board.content} onChange={edit}/></td>
                        </tr>
                        <tr>
                            <td><Label>이미지</Label></td>
                            <td>
                                <img src="/plus.png" width="100px" height="100px" alt=''
                                    onClick={()=>document.getElementById('file').click()}/><br/><br/>                                 
                                {fileNumList.length !== 0 &&
                                    fileNumList.map((fn,index) =>
                                        <span key={index}>
                                            <div style={{ display: "inline-block" }}>
                                                <img style={{ display: "inline-block", width: "20px", height: "20px" }} src="/minus.png" alt=''
                                                    onClick={() => delFileNum(fn)} /><br />
                                                <img key={fn} src={`${url}/image/${fn}`} width="100px" alt='' style={{ marginRight: '10px' }} />
                                            </div>
                                            {(index + 1) % 4 === 0 && <><br /><br /></>}
                                        </span>
                                    )
                                }
                                {
                                    fileList.length !== 0 &&
                                    fileList.map((file, index) =>
                                        <span key={index}>
                                            <div style={{ display: "inline-block" }}>
                                                <img style={{ display: "inline-block", width: "20px", height: "20px" }} src="/minus.png" alt=''
                                                    onClick={() => delFile(file)} /><br />
                                                <img src={URL.createObjectURL(file)} width="100px" alt='' style={{ marginRight: "10px" }} />
                                            </div>
                                            {((fileNumList===null? 0:fileNumList.length) + index + 1) % 4 === 0 && <><br /><br /></>}
                                        </span>
                                    )
                                }
                                <Input type="file" id="file" accept='image/*' hidden onChange={fileChange}/>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <Button color="primary" onClick={submit}>수정</Button>&nbsp;&nbsp;
                                <Button color="primary" tag="a" href="/">목록</Button>&nbsp;&nbsp;
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            
        </>
    )
}

export default BoardModify;
