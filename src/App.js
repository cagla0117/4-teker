
import './App.css';
import Navbar from './components/Navbar';
import products from "./products.json";
import Cars from './components/Cars';
import Content from './components/Content';
import {useState, useEffect} from 'react'





function App() {

  const[cars, setCars] = useState([])
  return (
    <>
    <div className="App">

        <Navbar/>
       
        <Content/>
        
     

      <div className='container cars'>{products.map(item => ( 
      <Cars item={item}/>

      ))}

      </div>

    </div>
    </>
  );
}

export default App;
