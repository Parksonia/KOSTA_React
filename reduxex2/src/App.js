import {useSelector,useDispatch} from 'react-redux';
import './App.css';

function App() {
  const {value} = useSelector(state=>state.persistedReducer.value);
  const {count} = useSelector(state=>state.persistedReducer.count);
  const dispatch =useDispatch();
  return (
    <div className="App">
      <div>
        value:{value}
      </div>
      <button onClick={()=>dispatch({type:'INCREMENT'})}>+</button>
      <button onClick={()=>dispatch({type:'DECREMENT'})}>-</button>
      <button onClick={()=>dispatch({type:'RESET'})}>RESET</button>
      <div>
        count:{count}
      </div>
      <button onClick={()=>dispatch({type:'PUSH'})}>UP</button>

    </div>
  );
}

export default App;
