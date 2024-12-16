import {Navbar, Nav, NavItem, NavLink, NavbarBrand } from 'reactstrap';
import { useAtom, useSetAtom } from 'jotai/react';
import { initUser ,userAtom, tokenAtom } from '../atoms';
import { useNavigate } from 'react-router';

const Main = () => {
    const [user, setUser] = useAtom(userAtom);
    const setToken = useSetAtom(tokenAtom);
    const navigate = useNavigate();

    const logout = () => {
        setUser({...initUser});
        setToken('');
        navigate("/login");
    }
    
    return(
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/" className='mr-auto'>
                <i><b>kosta.com</b></i>
            </NavbarBrand>
            <Nav navbar>
                {user.nickname?<>
                    <NavItem>
                        {<img src={user.profileImageStr? "data:image/png;base64,"+user.profileImageStr:"/person.webp"} alt='' 
                            width="40px" style={{borderRadius:"50%"}}/>}&nbsp;&nbsp;
                    </NavItem>
                    <NavItem>
                        <NavLink><b>[{user.nickname}]</b>&nbsp;</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#" onClick={logout}>로그아웃</NavLink>
                    </NavItem></>:
                    <NavItem>
                        <NavLink href="/login">로그인</NavLink>
                    </NavItem>
                }
                <NavItem>
                    <NavLink href="/join">회원가입</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/">게시판</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    )
}

export default Main;