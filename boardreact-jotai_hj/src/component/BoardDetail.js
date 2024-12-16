import {Table,Input,Button,Label} from 'reactstrap';
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import { useAtomValue } from 'jotai/react';
import { userAtom, tokenAtom } from '../atoms';
import {url} from '../config';
import axios from 'axios';

const BoardDetail = () => {
    const [board, setBoard] = useState({num:'',subject:'',content:'',writer:'',fileNums:'', nickname:''})
    const [fileNumList, setFileNumList] = useState([]);
    const [heart, setHeart] = useState(false);
    const user = useAtomValue(userAtom);
    const token = useAtomValue(tokenAtom);
    
    console.log(user);
    const {num} = useParams();
    const divStyle = {
        margin:'0 auto',
        width:'600px',
        border:'1px solid lightgray',
        borderRadius:'7px',
        padding:'10px'
    }
    useEffect(()=> {
        const param = {id:user.id, num:num}
        axios.post(`${url}/boardDetail`, param)
            .then(res=> {
                console.log(res.data)
                let resBoard = res.data.board;
                console.log(resBoard)
                setBoard({...resBoard})
                setHeart(res.data.heart);
                if(resBoard.fileNums!==null && resBoard.fileNums.length!==0) {
                    setFileNumList([...resBoard.fileNums.split(",")]);
                }
            })
            .catch(err=> {
                console.log(err);
            })
    },[user])

    const heartClick = (e) => {
        axios.get(`${url}/user/boardLike/${board.num}`,
            {
                headers: {
                    Authorization:token
                }
            }
        )
        .then(res=> {
            setHeart(res.data);
        })
        .catch(err=> {
            console.log(err);
        })
    }

    const fileDownload = (fn) => {
        axios.get(`${url}/fileDown?file=${fn}`,
            {responseType:'blob'}
        )
        .then(res=> {
            const blob = new Blob([res.data],{
                type: "image/jpeg",
            });
            const tempLink = document.createElement("a");
            tempLink.setAttribute("href", URL.createObjectURL(blob));
            tempLink.setAttribute("download", `${fn}`);
            tempLink.click();
            URL.revokeObjectURL(tempLink.href);
        })
    }

    return(
        <>
            <div className='header-text'>게시글 상세</div>
            <br/>
            <div style={divStyle}>
                <Table borderless>
                    <tbody>
                        <tr>
                            <td><Label>글쓴이</Label></td>
                            <td><Input type="text" readOnly value={board.nickname}/></td>
                        </tr>
                        <tr>
                            <td><Label>제목</Label></td>
                            <td><Input type="text" readOnly value={board.subject}/></td>
                        </tr>
                        <tr>
                            <td><Label>내용</Label></td>
                            <td><Input type="textarea" readOnly cols="40" rows="15" value={board.content}/></td>
                        </tr>
                        <tr>
                            <td><Label>이미지</Label></td>
                            <td>
                                {   fileNumList.length!==0 &&
                                    fileNumList.map(fn=>
                                        <img key={fn} src={`${url}/image/${fn}`} width="100px" alt='' style={{marginRight:'10px'}}
                                            onClick={()=>fileDownload(fn)}/>
                                    )
                                }
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                { board.writer===user.id ?
                                    <>
                                        <Button color="primary" tag="a" href={`/boardModify/${board.num}`}>수정</Button>&nbsp;&nbsp;
                                    </>:
                                    <></>
                                }
                                
                                <Button color="primary" tag="a" href="/">목록</Button>&nbsp;&nbsp;
                                { (user.nickname !== undefined && user.nickname!=='') ?
                                    <img src={heart===true? '/redheart.png':'/blackheart.png'} alt='' width='30px' onClick={heartClick}/>
                                    :<></>
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