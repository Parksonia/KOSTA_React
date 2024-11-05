
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Routes,Route} from 'react-router-dom';
import BoardList from './component/BoardList'
import Login from './component/Login';
import Join from './component/Join';
import BoardWrite from './component/BoardWrite';
import BoardDetail from './component/BoardDetail';
import Main from './component/Main';
import BoardModify from './component/BoardModify';

function App() {
  return (
    <div>
      <Main/>
      <Routes>
        <Route exact path="/" element={<BoardList />}/>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/join" element={<Join/>} />
        <Route exact path="/boardWrite" element={<BoardWrite />} />
        <Route exact path="/boardDetail/:num" element={<BoardDetail />} />
        <Route exact path="/modifyBoard/:num" element={<BoardModify />} />
        {/* react-router에게 여기에 오는 num 값이 무엇인지 알고 싶다고 말하는 것 */}
      </Routes>
    </div>
  );
}

export default App;
