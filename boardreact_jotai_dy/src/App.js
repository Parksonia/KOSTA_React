import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route } from "react-router-dom";
import Main from "./component/Main";
import BoardList from "./component/BoardList";
import Login from "./component/Login";
import Join from "./component/Join";
import BoardWrite from "./component/BoardWrite";
import BoardDetail from "./component/BoardDetail";
import BoardModify from "./component/BoardModify";

function App() {
    return (
        <div>
            <Main />
            <Routes>
                <Route exect path="/" element={<BoardList />} />
                <Route exect path="/login" element={<Login />} />
                <Route exect path="/join" element={<Join />} />
                <Route exect path="/boardWrite" element={<BoardWrite />} />
                <Route
                    exect
                    path="/boardDetail/:num"
                    element={<BoardDetail />}
                />
                <Route
                    exect
                    path="/boardModify/:num"
                    element={<BoardModify />}
                />
            </Routes> 
        </div>
    );
}

export default App;
