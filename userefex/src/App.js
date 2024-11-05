import {useRef} from 'react';
import './App.css';

function App() {
  const elRef = useRef();
  return (
    <div className="App">
      <input type='text' ref={elRef} />
      <button onClick={()=>{alert(elRef.current.value)}}>Focus Input</button>
    </div>
  );
}

export default App;
