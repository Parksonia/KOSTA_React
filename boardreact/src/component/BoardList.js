import {Col,Button,FormGroup,Input,Table,Pagination,PaginationItem,PaginationLink} from 'reactstrap';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { url } from '../config';
const BoardList=()=>{
    // 각각의 정보를 담을 변수 선언
    const [boardList,setBoardList] = useState([]); 
    const [pageInfo,setPageInfo] = useState([]);
    const [pageBtn,setPageBtn] = useState([]);
    const [type,setType] = useState('');
    const [keyword,setKeyword] = useState('');
    
    const boardDelete=(num)=>{
        axios.get(`${url}/boardDelete/${num}`)
        .then(res=>{
            //배열을 갱신시켜준다.
            if(res.data===true) {
                const remainBoard = boardList.filter(b=>b.num !==num); // target num 이 아닌것만 배열을 갱신시켜줌
                setBoardList([...remainBoard]);
            }
        })
        .catch(err=>{
            console.log(err);
        })

    }

    useEffect(()=>{
        submit(1);
    },[]);

    const submit=(page) =>{
        const listUrl = `${url}/boardList?page=${page}&type=${type}&keyword=${keyword}`;
        axios.get(listUrl)
        .then(res=>{
            let pageInfo = res.data.pageInfo;
            setBoardList([...res.data.boardList]);
            let page = [];
            for(let i=pageInfo.startPage; i<=pageInfo.endPage; i++){
                page.push(i);
            }
            setPageBtn([...page]);  
            setPageInfo(pageInfo);
        })
    }
    const formStyle={
        width:"800px",
        textAlign:"center",
        margin:"0 auto"
    }

    return(
        <div>
            <div className="header-text">게시글 목록</div>
            <FormGroup row style={formStyle}>
                <Col sm={3}>
                <Input type='select' name="type" onChange={(e)=>setType(e.target.value)}>
                    <option value="">선택하세요</option>
                    <option value="subject">제목</option>
                    <option value="writer">작성자</option>
                    <option value="content">내용</option>
                </Input>
                </Col>
                <Col sm={3}>
                <Input type='text' name="keyword" onChange={(e)=>setKeyword(e.target.value)}/>
                </Col>
                <Col cm={3}>
                    <Button onClick={()=>submit(1)}>검색</Button>
                </Col>
                <Col sm={3}>
                    <Button tag="a" href="/boardWrite" color='success'>글쓰기</Button>
                </Col>
            </FormGroup>
            <Table bordered style={{margin:"0 auto",width:"900px"}}>
                
                <thead>
                    <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성일</th>
                    <th>조회수</th>
                    <th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {/* 괄호 주의  {} 의 경우 return이 있어야함 () 소괄호 사용해라 */}
                    {boardList.map(board=>(
                        <tr key={board.num}>
                            <td>{board.num}</td>
                            <td><a href={`/boardDetail/${board.num}`}>{board.subject}</a></td>
                            <td>{board.nickname}</td>
                            <td>{board.createDate}</td>
                            <td>{board.viewCount}</td>
                            <td><Button onClick={()=>boardDelete(board.num)}>삭제</Button></td>

                        </tr>
                    ))}
                </tbody>
            </Table>
            <br />
            <Pagination style={{margin:"0 auto",width:"900px",justifyContent:"center"}}>
                <PaginationItem >
                    <PaginationLink previous />
                </PaginationItem>
                {pageBtn.map(page=>(
                    <PaginationItem key={page}>
                        <PaginationLink>{page}</PaginationLink>
                    </PaginationItem>
                ))}
                <PaginationItem >
                    <PaginationLink next />
                </PaginationItem>
            </Pagination>
        
        </div>
    )
}
export default BoardList;