import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Login from './Login';
import User from './User';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Token from './Token';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exect path='/' element={<Login/>} />
      <Route exect path='/user' element={<User/>}/>
      <Route exect path='/login' element={<Token/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
