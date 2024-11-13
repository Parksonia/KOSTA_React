import { Table, Input, Button, Label } from 'reactstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { url } from '../config';

const BoardModify = () => {

    //boardDto랑 이름이 같아야함 (다 있어야하는건 아님)
    const [board, setBoard] = useState({ num: '', subject: '', content: '', writer: '', fileNums: '', nickname: '' });
    const [fileNumList, setFileNumList] = useState([]); //보여지는 사진
    const [fileList, setFileList] = useState([]); //추가되는 사진
    const [fileDelList, setFileDelList] = useState([]); //삭제되는 사진


    const { num } = useParams();
    const navigate = useNavigate();

    const divStyle = {
        margin: '0 auto',
        width: '600px',
        border: '1px solid lightgray',
        borderRadius: '7px',
        padding: '10px'
    }

    useEffect(() => {
        axios.get(`${url}/boardDetail/${num}`)
            .then(res => {
                let resBoard = res.data.board;
                setBoard({ ...resBoard })
                /* 
                    이미지를 올릴 때 board에서 file을 참조하고 있지만, 
                    fileNum에 대한 정보는 board에 없다. 
                    file 테이블에 boardNum을 가지고 있음.
                    boardNum이 같은 file이 여러개 있는데, 이것을 백엔드에 Board엔티티 클래스에서 
                    joining을 이용해서 (,를 이용해서)  setFileNums 로 설정해두었다 
                    이것을 프론트에서 [setBoard] 의 fileNums로 받아왔다. 이것은 , 로 연결되어 있는 상태 
                    이것을 , 로 잘라서 아래 이미지 보여주는 곳에서 각각 보여질 수 있도록 split 처리 하는 것이다
                */
                //여기서 아주중요한거 하나! ...res.data로 dto 데이터를 가져온 것을 [setBoard]에 넣었는데
                //그 fileNums를 ,로 짤라서 setFileNumList에 넣을 것임
                if (resBoard.fileNums !== null && resBoard.fileNums.length !== 0) {
                    setFileNumList([...resBoard.fileNums.split(",")]);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const submit = (e) => {
        const modifyBoard = { num: board.num, subject: board.subject, content: board.content };
        console.log(modifyBoard);

        let formData = new FormData();
        formData.append("num", board.num);
        formData.append("subject", board.subject);
        formData.append("content", board.content);

        for (let fn of fileDelList) {
            formData.append('delFile', fn);
        }
        for (let file of fileList) {
            formData.append("file", file);
        }

        axios.post(`${url}/boardModify`, formData)
            .then(res => {
                console.log(res);
                navigate(`/boardDetail/${res.data}`);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const edit = (e) => {
        setBoard({ ...board, [e.target.name]: e.target.value })
    }

    const fileChange = (e) => {
        //onClick, onChange같은 애들은 항상 e를 가지고 온다
        if (e.target.files.length > 0) {
            setFileList([...fileList, e.target.files[0]])
        }
    }

    const delFile = (file) => {
        setFileList([...fileList.filter(f => f !== file)]);
    }

    const delFileNum = (fn) => {
        setFileDelList([...fileDelList, fn]);
        setFileNumList([...fileNumList.filter(f => f !== fn)]);
    }


    return (
        <>
            <div className='header-text'>게시글 상세</div>
            <br />
            <div style={divStyle}>
                <Table borderless>
                    <tbody>
                        <tr>
                            <td><Label>글쓴이</Label></td>
                            <td><Input type="text" value={board.nickname} readOnly /></td>
                        </tr>
                        <tr>
                            <td><Label>제목</Label></td>
                            <td><Input type="text" name="subject" value={board.subject} onChange={edit} /></td>
                        </tr>
                        <tr>
                            <td><Label>내용</Label></td>
                            <td><Input type="textarea" name="content" cols="40" rows="15" value={board.content} onChange={edit} /></td>
                        </tr>
                        <tr>
                            <td><Label>이미지</Label></td>
                            <td>
                                <img src="/plus.png" width="100px" height="100px" alt=""
                                    onClick={() => document.getElementById('file').click()} /><br /><br />
                                {
                                    fileNumList.length !== 0 &&
                                    fileNumList.map((fn, index) =>
                                        <span key={index}>
                                            <div style={{ display: "inline-block" }}>
                                                <img style={{ display: "inline-block", width: "20px", height: "20px" }} src="/minus.png" alt=""
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
                                                <img style={{ display: "inline-block", width: "20px", height: "20px" }} src="/minus.png" alt=""
                                                    onClick={() => delFile(file)} /><br />
                                                <img src={URL.createObjectURL(file)} width="100px" alt='' style={{ marginRight: "10px" }} />
                                            </div>
                                            {((fileNumList===null? 0:fileNumList.length) + index + 1) % 4 === 0 && <><br /><br /></>}
                                        </span>
                                    )
                                }
                                <Input type="file" id="file" accept='image/*' hidden onChange={fileChange} />
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