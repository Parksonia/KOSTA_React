import {Col,Button,FormGroup,Input,Table, Pagination,PaginationItem,PaginationLink} from 'reactstrap';
import {useState, useEffect} from 'react';
import {url} from '../config';
import axios from 'axios';
import { useAtomValue } from 'jotai/react';
import { userAtom, tokenAtom } from '../atoms';

const BoardList = () => {
    const [boardList, setBoardList] = useState([]);
    const [pageBtn, setPageBtn] = useState([]);
    const [pageInfo, setPageInfo] = useState({});
    const [type, setType] = useState('');
    const [keyword, setKeyword] = useState('');
    const user = useAtomValue(userAtom);
    const token = useAtomValue(tokenAtom);

    const formStyle = {
        width:"600px",
        textAlign:"center",
        margin:"0 auto"
    }

    const boardDelete = (num) => {
        axios.get(`${url}/user/boardDelete/${num}`,{
            headers: {
                Authorization:token
            }
        })
        .then(res => {
            if (res.data === true) {
                const remainBoard = boardList.filter(b => b.num !== num);
                setBoardList([...remainBoard]);
            }
        })
        .catch(err=> {
            console.log(err)
        })
    }

    useEffect(()=> {
        submit(1);
    }, [])

    const submit = (page) => {
        const listUrl = `${url}/boardList?page=${page}&type=${type}&keyword=${keyword}`;
        axios.get(listUrl)
            .then(res=> {
                let pageInfo = res.data.pageInfo;
                console.log(res.data.boardList)
                setBoardList([...res.data.boardList])
                let page = [];
                for(let i=pageInfo.startPage; i<=pageInfo.endPage; i++) {
                    page.push(i);
                }
                setPageBtn([...page]);
                setPageInfo(pageInfo);
            })
    }

    return(
        <div>
            <div className="header-text">게시글 목록</div>
            <FormGroup row style={formStyle}>
                <Col sm={3}>
                    <Input type="select" name="type" onChange={(e)=>setType(e.target.value)}>
                        <option value="">선택하세요</option>
                        <option value="subject">제목</option>
                        <option value="writer">작성자</option>
                        <option value="content">내용</option>
                    </Input>
                </Col>
                <Col sm={3}>
                    <Input type="text" name="keyword" onChange={(e)=>setKeyword(e.target.value)}/>
                </Col>
                <Col sm={3}>
                    <Button onClick={()=>submit(1)}>검색</Button>
                </Col>
                <Col sm={3}>
                    {(user.nickname!=='') && 
                        <Button tag="a" href="/boardWrite" color="success">글쓰기</Button>
                    }                    
                </Col>
            </FormGroup>
            <Table bordered style={{margin:"0 auto",width:"900px"}}>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>자성일</th>
                        <th>조회수</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {boardList.map(board=>(
                        <tr key={board.num}>
                            <td>{board.num}</td>
                            <td><a href={`/boardDetail/${board.num}`}>{board.subject}</a></td>
                            <td>{board.nickname}</td>
                            <td>{board.createDate}</td>
                            <td>{board.viewCount}</td>
                            <td>
                                {user.id === board.writer &&
                                    <Button onClick={()=>boardDelete(board.num)}>삭제</Button>
                                }
                                
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <br/>
            <Pagination style={{margin:"0 auto",width:"900px",justifyContent:"center"}}>
                <PaginationItem>
                    <PaginationLink previous/>
                </PaginationItem>
                {pageBtn.map(page=>(
                    <PaginationItem key={page}>
                        <PaginationLink>{page}</PaginationLink>
                    </PaginationItem>
                ))}
                <PaginationItem>
                    <PaginationLink next/>
                </PaginationItem>
            </Pagination>
        </div>
    )

}

export default BoardList;