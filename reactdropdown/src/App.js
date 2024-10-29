import {ButtonDropdown,DropdownToggle,DropdownMenu,DropdownItem} from 'reactstrap';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  const [isOpen,setIsOpen] = useState(false);
  // const toggle =(e)=>{
  //   setIsOpen(!isOpen);
  // }
  return (
    <div>
     <ButtonDropdown isOpen={isOpen} toggle={()=>setIsOpen(!isOpen)}>
        <DropdownToggle caret>버튼 DropDown</DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>헤더</DropdownItem>
            <DropdownItem disabled>비활성화 버튼</DropdownItem>
            <a href="http://naver.com">
              <DropdownItem>네이버 사이트로 이동</DropdownItem>
            </a>
            <DropdownItem onClick={()=>alert("Alert버튼")}>Alert버튼</DropdownItem>
          </DropdownMenu>
     </ButtonDropdown>
    </div>
  );
}

export default App;
