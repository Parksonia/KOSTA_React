import SubComponent from './SubComponent';
function App() {
  return (
    <div>
      <SubComponent str="react" num={30} boolean={2==1} obj={{react:'리액트',exam:100}}
       arr={[10,20,30]} func={alert('I am Function')}>
      </SubComponent>
    </div>
  );
}

export default App;
