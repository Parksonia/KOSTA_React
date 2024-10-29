import {useState} from 'react';
import NameInfo from './NameInfo';
import GradeInfo from './GradeInfo';
import WeightInfo from './WeightInfo';

function App() {
  const[name,setName] = useState('코스타');
  const[grade,setGrade] = useState(4);
  const[weight,setWeight] = useState(75.3);
  return (
    <div>
      <h1>App.js</h1>
      <p>이름 : {name}, 학년 :{grade} , 몸무게: {weight}</p>
      <NameInfo  name={name} setName={setName}/>
      <GradeInfo grade ={grade} setGrade={setGrade}/>
      <WeightInfo weight ={weight} setWeight={setWeight} />
    </div>
  );
}

export default App;
