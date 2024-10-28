import './App.css';
import MyComponent from './MyComponent';
import YourComponent from './YourComponent';

//React 컴포넌트  return시 태그를 넣을 수 있다. 
//태그 형태로 컴포넌트를 사용 할 수 있다. 
function App() {
  return (
    <div className="App">
        <h1>Hello! React!</h1>
        <MyComponent />
        <YourComponent/>
    </div>
  );
}

export default App;
