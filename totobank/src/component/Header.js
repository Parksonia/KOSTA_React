import {useState} from 'react';
import {Navbar,Collapse,NavbarToggler,NavbarBrand,Nav,ListGroup,ListGroupItem} from 'reactstrap';
import {useSelector,useDispatch} from 'react-redux';
import {initState} from '../reducer';
import {useNavigate} from 'react-router';

const Header =() =>{
    const[collapsed,setCollapsed] = useState(true);
    const user = useSelector(state=>state.persistedReducer.user);
    const dispatch= useDispatch();
    const navigate = useNavigate();

    const logout=(e) =>{
        e.preventDefault();
        dispatch({type:"USER",data:{...initState.user}});
        navigate("/");
    }

    return (
        <div style={{position:'fixed',width:'100%',zIndex:"100"}}>
            <Navbar color='faded' style={collapsed===true?{backgroundColor:"#ffef6b"}:{backgroundColor:"#white"}}>

                <NavbarBrand href='/' className='mr-auto'><i>toto</i><b>Bank</b></NavbarBrand>
            
                <div style={{display:"block",width:"auto"}}>
                    {user.nickname !==''?
                    <>
                    <span>{user.nickname}</span>&nbsp;&nbsp;&nbsp;
                    <a href='#'onClick={logout} style={{color:'gray'}}>로그아웃</a> &nbsp;&nbsp;&nbsp; 
                    </>:
                    <>
                <a href='/login'><img src='/img/signin.png' style={{marginRight:'30px'}} /></a>&nbsp;&nbsp;&nbsp; </>
                }
                <a href='/join'><img src='/img/signup.png'  style={{marginRight:'30px'}} /></a>
               
                <NavbarToggler onClick={()=>setCollapsed(!collapsed)} className='mr-2'>
                 
                </NavbarToggler>
                </div>
                <Collapse isOpen={!collapsed} navbar>
                <ListGroup>
                    <ListGroupItem tag="a" href='/makeAccount'>계좌개설</ListGroupItem>
                    <ListGroupItem tag="a" href='/deposit'>입금</ListGroupItem>
                    <ListGroupItem tag="a" href='/withdraw'>출금</ListGroupItem>
                    <ListGroupItem tag="a" href='/transfer'>계좌송금</ListGroupItem>
                    <ListGroupItem tag="a" href='/accountInfo'>계좌조회</ListGroupItem>
                    <ListGroupItem tag="a" href='/allAccountInfo'>전체계좌조회</ListGroupItem>
                </ListGroup>
                </Collapse>
            </Navbar>
        </div>
    )
}
export default Header;