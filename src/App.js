//import logo from './logo.svg';
import {useState,useEffect} from 'react';
import './App.css';

function App() {
const [chistes,setChistes]=useState([])
const myStyle={
  border: "0 px solid",
  borderRadius: "15px"
}
useEffect(() => {
  const url='https://api.chucknorris.io/jokes/random';
  const peticion1=fetch(url);
  peticion1
  .then(chiste => chiste.json())
  .then(lectura =>{
    setChistes(lectura)
  })
  
  .catch((e)=>console.error(e))
}, []);
  
console.log("soy chistes",chistes)
  return (
    <div className="App container my-5 mb-3 py-5">
      <h2>Chistes</h2>
      <div className='w-100 bg-warning  mx-0 px-2 ' style={myStyle}>{chistes.value}</div>
      
    </div>
  );
}

export default App;
