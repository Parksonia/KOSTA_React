import { Navbar, Nav, NavItem, NavLink, NavbarBrand, NavbarToggler } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux';
import { initState } from './reducer';
import { useNavigate } from 'react-router'
const Main = () => {
    const user = useSelector(state => state.persistedReducer.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logout = (e) => {
        e.preventDefault();
        dispatch({ type: "USER", data: { ...initState.user} });
        navigate("/");
    }

    return (
        <Navbar color='light' light expand="md">
            <NavbarBrand href='/' className='mr-auto'>
                <i><b>kosta.com</b></i>
            </NavbarBrand>

            <Nav navbar>
     

                {user.nickname !== '' ?
                    <>
                     <NavItem>
                            <img src={user.profileImageStr !==undefined?"data:image/png;base64,"+user.profileImageStr :"/defaultPerson.png"} alt='' width="40px" style={{borderRadius:"10%"

                            }}/>
                    </NavItem>
                    <NavItem> 
                        <NavLink>      
                            [{user.nickname}]
                        </NavLink>
                    </NavItem>        
                    <NavItem>
                            <NavLink href='#' onClick={logout} >로그아웃</NavLink>
                    </NavItem>
                    </> :
                     <NavItem>
                        
                            <NavLink href='/login'>로그인</NavLink>
                    </NavItem>
                }
              
                <NavItem>
                    <NavLink href='/join'>회원가입</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href='/'>게시판</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    )

}
export default Main;

