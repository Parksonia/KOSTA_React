import { Table, Input, Button, Label } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAtom } from 'jotai/react';
import { userAtom } from '../atoms';
import axios from 'axios';
import { url } from '../config';

const BoardDetail = () => {

    //boardDto랑 이름이 같아야함 (다 있어야하는건 아님)
    const [board, setBoard] = useState({ num: '', subject: '', content: '', writer: '', fileNums: '', nickname: '' });
    const [fileNumList, setFileNumList] = useState([]);
    const [heart, setHeart] = useState();
    const [user, setUser] = useAtom(userAtom);
    
    const { num } = useParams();
    // const user = useSelector(state => state.persistedReducer.user);

    const divStyle = {
        margin: '0 auto',
        width: '600px',
        border: '1px solid lightgray',
        borderRadius: '7px',
        padding: '10px'
    }

    useEffect(() => {     // 화면 전환되자마자 데이터가 보여야함 
        axios.get(`${url}/boardDetail/${num}`)
            .then(res => {
                let resBoard = res.data.board;
                setBoard({ ...resBoard })
                setHeart(res.data.heart)
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

    const heartClick = (e) => {
        const param = { id: 'hong', num: board.num };
        axios.post(`${url}/boardLike`, param)
            .then(res => {
                setHeart(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }
    
    const fileDownload = (fn) => {
        axios.get(`${url}/fileDown?file=${fn}`, 
            {responseType : 'blob'}
        )
        .then(res => {
            const blob = new Blob([res.daat], {
                type : "image/jpeg",
            });
            const tempLink = document.createElement("a");
            tempLink.setAttribute("href", URL.createObjectURL(blob));
            tempLink.setAttribute("download", `${fn}`);
            tempLink.click();
            URL.revokeObjectURL(tempLink.href);
        })

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
                            <td><Input type="text" readOnly value={board.nickname} /></td>
                        </tr>
                        <tr>
                            <td><Label>제목</Label></td>
                            <td><Input type="text" readOnly value={board.subject} /></td>
                        </tr>
                        <tr>
                            <td><Label>내용</Label></td>
                            <td><Input type="textarea" readOnly cols="40" rows="15" value={board.content} /></td>
                        </tr>
                        <tr>
                            <td><Label>이미지</Label></td>
                            <td>
                                {
                                    fileNumList.length !== 0 &&
                                    fileNumList.map(fn =>
                                        <img key={fn} src={`${url}/image/${fn}`} width="100px" alt=''
                                            style={{ marginRight: '10px' }} onClick={() => fileDownload(fn)}/>
                                    )
                                }
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                {
                                    board.writer === user.id ?
                                        <>
                                            <Button color='primary' tag="a" href={`/boardModify/${board.num}`}>수정</Button>&nbsp;&nbsp;
                                        </> :
                                        <></>
                                }

                                <Button color="primary" tag="a" href="/">목록</Button>&nbsp;&nbsp;
                                {
                                    user.nickname !== undefined ?
                                        <img src={heart === true ? '/heart.png' : '/blackheart.png'} alt='' width='30px' onClick={heartClick} />
                                        : <></>
                                }
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default BoardDetail;