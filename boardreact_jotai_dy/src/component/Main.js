import { Nav, Navbar, NavItem, NavLink, NavbarBrand } from 'reactstrap';
import { useAtom } from 'jotai/react';
import { initUser, userAtom } from '../atoms';
import { useNavigate } from 'react-router';

const Main = () => {
    const [user, setUser] = useAtom(userAtom);
    const navigate = useNavigate();

    const logout = () => {
        setUser({ ...initUser });
        navigate("/login");
    }
    
    return (
        <Navbar color='light' light expand='md'>
            <NavbarBrand href="/" className='mr-auto'>
                <i><b>kosta.com</b></i>
            </NavbarBrand>
            <Nav navbar>
                {
                    user.nickname ?
                        <>
                            <NavItem>
                                {<img src={user.profileImageStr ? "data:image/png;base64," + user.profileImageStr : "/person.png"} alt='' width="30px"
                                    style={{ borderRadius: "50%" }} />}&nbsp;&nbsp;
                            </NavItem>
                            <NavItem>
                                <NavLink><b>[{user.nickname}]</b></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#" onClick={logout}>로그아웃</NavLink>
                            </NavItem>
                        </> :
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