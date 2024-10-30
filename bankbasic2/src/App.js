import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import {useState} from 'react'
import {Nav,NavItem,NavLink,TabContent,TabPane} from 'reactstrap';
import { MakeAccount } from './MakeAccount';
import {Deposit} from './Deposit';
import { Withdraw } from './Withdraw';
import AccountInfo from './AccountInfo'; // default는 하나밖에 없어서 {} 쓰지 않아도 됨
import AllAccountInfo from './AllAccountInfo';
import classNames from 'classnames';

function App() {
  const [tab,setTab] =useState("makeAccount");
  const toggle =(tabName) =>{
    if(tab!=tabName) setTab(tabName);
  }
  return (
    <div className="App">
      <i><h5>kosta bank</h5></i>
      <Nav tabs>
        <NavItem>
          <NavLink onClick={()=>{toggle('makeAccount');}}
           className={classNames({active:tab==='makeAccount'})}>계좌개설</NavLink> {/*className 사용 */}
         </NavItem>
        <NavItem>
          <NavLink onClick={()=>{toggle('deposit');}}
           className={classNames({active:tab==='deposit'})}>입금</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={()=>{toggle('withdraw');}}
           className={classNames({active:tab==='withdraw'})}>출금</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={()=>{toggle('accountInfo');}}
           className={classNames({active:tab==='accountInfo'})}>계좌조회</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={()=>{toggle('allAccountInfo');}}
           className={tab==='allAccountInfo'&&'active'}>전체계좌조회</NavLink> {/*선택된 경우에만(true) &&연산자의  active가 됨*/}
        </NavItem>
      </Nav>
      <TabContent activeTab={tab} >
        <TabPane tabId="makeAccount"><MakeAccount/></TabPane>
        <TabPane tabId="deposit"><Deposit/></TabPane>
        <TabPane tabId="withdraw"><Withdraw/></TabPane>
        <TabPane tabId="accountInfo"><AccountInfo/></TabPane>
        <TabPane tabId="allAccountInfo"><AllAccountInfo/></TabPane>
      </TabContent>
    </div>
  );
}

export default App;
