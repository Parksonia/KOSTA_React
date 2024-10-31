import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import MakeAccount from './component/MakeAccount';
import Deposit from './component/Deposit';
import Withdraw from './component/Withdraw';
import AccountInfo from './component/AccountInfo'; // default는 하나밖에 없어서 {} 쓰지 않아도 됨
import AllAccountInfo from './component/AllAccountInfo';
import Main from './component/Main';
import Header from './component/Header';
import Transfer from './component/Transfer';
import Join from './component/Join';
import Login from './component/Login';
import{BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>{/*  고정되는 컴포넌트는 Routes에 포함시키지 않음 */}
        <Routes>
          <Route exact path="/" element={<Main/>}/>
          <Route exact path="/makeAccount" element={<MakeAccount/>}></Route>
          <Route exact path="/deposit" element={<Deposit/>}></Route>
          <Route exact path="/withdraw" element={<Withdraw/>}></Route>
          <Route exact path="/transfer" element={<Transfer/>}></Route>
          <Route exact path="/accountInfo" element={<AccountInfo/>}></Route>
          <Route exact path="/allAccountInfo" element={<AllAccountInfo/>}></Route>
          <Route exact path="/join" element={<Join/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
