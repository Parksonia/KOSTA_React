import {useParams} from 'react-router-dom'
import {useState,useEffect} from 'react'
import axios from 'axios';
import { url } from '../config';
import {Table,Input,Button,Label} from 'reactstrap'
const BoardDetail=()=>{
    const {num} = useParams(); // 객체 타입으로 받아온 파라미터정보를 변수에저장함 
    
    const [board,setBoard] = useState({num:'',writer:'',subject:'',content:''});
    const[fileNumList,setFileNumList] = useState([]);
    const divStyle={
        margin:'0 auto',
        width:'600px',
        border:'1px solid lightgray',
        borderRadius:'7px',
        padding:'10px'
    }
    const [heart,setHeart] = useState(false);
    const heartClick =(e) => {
        const param ={id:'박소연',num:board.num};
        axios.post(`${url}/boardLike`,param)
        .then(res=>{
            setHeart(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    // 화면 전환되자마자 데이터가 보여야함 
    useEffect(()=>{
        axios.get(`${url}/boardDetail/${num}`)
        .then(res=>{ // data를 map형태로 받아옴 
             let resBoard = res.data.board;
            setBoard({...resBoard});
            setHeart({...res.data.heart});
            if(resBoard.fileNums!==null && resBoard.fileNums.length !==0) {
                setFileNumList([...resBoard.fileNums.split(",")]);
            }
            
        })
        .catch(err=>{
            console.log(err);
        })
    },[]);
    
    return(
        <>
            <div className='header-text'>게시글 상세</div>
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
                            <td><Input type='text' readOnly value={board.subject}></Input></td>
                        </tr>
                        <tr>
                            <td><Label>내용</Label></td>
                            <td><Input type='textarea' cols="40" rows="15" readOnly value={board.content}></Input></td>
                        </tr>
                        <tr>
                            <td><Label>이미지</Label></td>
                            <td>
                                {
                                    fileNumList.length!== 0 && 
                                    fileNumList.map(fn=>
                                        <img key={fn} src={`${url}/image/${fn}`} width="100px" alt='' style={{marginRight:"10px"}}/>
                                    )
                                }

                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><Button color='primary' tag="a" href={`/modifyBoard/${board.num}`}>수정</Button>&nbsp;&nbsp;
                            <Button color='primary' tag="a" href="/">목록</Button>&nbsp;&nbsp;
                            <img src={heart===true? '/redheart.png':'/blackheart.png' } width='30px' alt='' onClick={heartClick}/>
                            </td>
                        </tr>
                    
                    </tbody>
                </Table>

            </div>
        </>
        
    )
}
export default BoardDetail;