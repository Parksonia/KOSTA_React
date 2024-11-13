import { Table, Input, Button, Label } from 'reactstrap';
import { useState, useRef } from 'react'; //랜더링을 위한 useState사용. 리액트의 장점은 랜더링
import { useNavigate } from 'react-router';
import axios from 'axios';
import { url } from '../config';
import { useAtom } from 'jotai/react';
import { userAtom } from '../atoms';

const BoardWrite = () => {

    // 파일목록을 관리할 배열 ...배열복사 사용해야
    const [fileList, setFileList] = useState([]);
    const [board, setBoard] = useState({ subject: '', content: '', writer: '' });
    const [user, setUser] = useAtom(userAtom);

    //useNavigate
    const navigate = useNavigate();
    const fRef = useRef();
    // const user = useSelector(state => state.persistedReducer.user);


    const divStyle = {
        margin: '0 auto',
        width: '600px',
        border: '1px solid lightgray',
        borderRadius: '7px',
        padding: '10px'
    }

    const edit = (e) => {
        setBoard({ ...board, [e.target.name]: e.target.value });
    }
    const fileChange = (e) => {
        //onClick, onChange같은 애들은 항상 e를 가지고 온다
        if (e.target.files.length > 0) {
            setFileList([...fileList, e.target.files[0],])
        }
    }
    const submit = (e) => {
        const formData = new FormData();
        //boardDto의 이름과 같아야 함
        formData.append("subject", board.subject);
        formData.append("content", board.content);
        formData.append("writer", user.id);
        for (let file of fileList) {
            formData.append('file', file);
        }

        axios.post(`${url}/boardWrite`, formData)
            .then(res => {
                console.log(res.data); //res.data는 넘버, BoardDetail로 넘기기 위함
                //방법1. 
                //window.location.href = "/boardDetail"
                //방법2.
                navigate(`/boardDetail/${res.data}`); //App.js에서도 num을 넣어줘야함


            })
            .catch(err => {
                console.log(err);
                alert(err.response.data);
            })
    }

    

    const delFile = (file) => {
        setFileList({ ...fileList.filter(f => f !== file) });
    }

    const fileClick = (e) => {
        fRef.current.click();
    }


    return (
        <div>
            <div className="header-text"> 게시글 등록 </div>
            <br />
            <div style={divStyle}>
                <Table borderless>
                    <tbody>
                        <tr>
                            <td><Label for="writer">글쓴이</Label></td>
                            <td>
                                <Input type="text" name="writer" id="writer" value={user.nickname} onChange={edit} />
                            </td>
                        </tr>
                        <tr>
                            <td><Label for="subject">제목</Label></td>
                            <td>
                                <Input type="text" name="subject" id="subject" onChange={edit} />
                            </td>
                        </tr>
                        <tr>
                            <td><Label for="content">내용</Label></td>
                            <td>
                                <Input type="textarea" name="content" id="content" cols="40" rows="15" onChange={edit} />
                            </td>
                        </tr>
                        <tr>
                            <td><Label>이미지</Label></td>
                            <td>
                                <Input type="file" id="file" accept='image/*' hidden onChange={fileChange} ref={fRef}/>
                                <img src="/plus.png" width="100px" height="100px" alt=""
                                    onClick={() => document.getElementById('file').click()} /><br /><br />
                                {
                                    fileList.map((file, index) =>
                                        <span key={index}>
                                            <div style={{ display: "inline-block" }}>
                                                <img style={{ display: "inline-block", width: "20px", height: "20px" }} src="/minus.png" alt=""
                                                    onClick={() => delFile(file)} /><br />
                                                <img src={URL.createObjectURL(file)} width="100px" alt='' style={{ marginRight: "10px" }} />
                                            </div>
                                            {(index + 1) % 3 === 0 && <><br /><br /></>}
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