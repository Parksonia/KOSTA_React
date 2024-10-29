import logo from './logo.svg';
import './App.css';
import Subject from './Subject';
function App() {
  const subjects =[
      {key:'js',text:'JavaScript'},
      {key:'java',text:'Java'},
      {key:'jq',text:'JQuery'},
      {key:'hc',text:'HTML/CSS'},
      {key:'spring',text:'SpringFramework'}
  ]
  return (
    <div className="App">
      <select name="subject">
        <Subject subjects ={subjects}/>
      </select>
    </div>
  );
}

export default App;
