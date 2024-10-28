import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { useState } from 'react';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className=''>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/"><i><b>Kosta Bank</b></i></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar >
          <Nav className="ml-auto" navbar >
            <NavItem>
              <NavLink href="/">로그인</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/join">회원가입</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle tag="a" nav caret>
                계좌
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag="a" href="/makeAccount">
                  계좌개설
                </DropdownItem>
                <DropdownItem tag="a" href="/deposit">
                  입금
                </DropdownItem>
                <DropdownItem tag="a" href="/withdraw" >
                  출금
                </DropdownItem>
                <DropdownItem tag="a" href="/accountInfo">
                  계좌조회
                </DropdownItem>
                <DropdownItem tag="a" href="/AllAccountInfo">
                  전체계좌조회
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
export default Header;