import{Navbar,Nav,NavItem,NavLink,NavbarBrand,NavbarToggler} from 'reactstrap'
const Main =() =>{
    return(
        <Navbar color='light' light expand="md">
            <NavbarBrand href='/' className='mr-auto'>
                <i><b>kosta.com</b></i>
            </NavbarBrand>
          
            <Nav navbar>
                <NavItem>
                    <NavLink href='/login'>로그인</NavLink>
                </NavItem>
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