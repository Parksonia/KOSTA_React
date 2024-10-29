import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { MakeAccount } from './MakeAccount';
import {Deposit} from './Deposit';
import { Withdraw } from './Withdraw';
import AccountInfo from './AccountInfo'; // default는 하나밖에 없어서 {} 쓰지 않아도 됨
import AllAccountInfo from './AllAccountInfo';
import Join from './Join';
import Login from './Login';
import Header from './Header';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>{/*  고정되는 컴포넌트는 Routes에 포함시키지 않음 */}
        <Routes>
          <Route exact path="/" element={<Login/>}></Route>
          <Route exact path="/join" element={<Join/>}></Route>
          <Route exact path="/makeAccount" element={<MakeAccount/>}></Route>
          <Route exact path="/deposit" element={<Deposit/>}></Route>
          <Route exact path="/withdraw" element={<Withdraw/>}></Route>
          <Route exact path="/accountInfo" element={<AccountInfo/>}></Route>
          <Route exact path="/allAccountInfo" element={<AllAccountInfo/>}></Route>
      {/* <MakeAccount/> */}
      {/* <Deposit /> */}
      {/* <Withdraw/> */}
      {/* <AccountInfo/> */}
      {/* <AllAccountInfo/> */}
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
