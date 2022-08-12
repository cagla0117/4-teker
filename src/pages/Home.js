import React, {useState, useEffect} from 'react'
import CarItem from '../components/CarItem';

const Home = () => {
    const [carList, setCarLis] = useState([]);
     useEffect(( )=> {
        fetch("https://fow-rent-a-car.herokuapp.com/api/list")
         .then((res) => res.json())
         .then((data) => setCarLis(data));
     }, []);
     console.log('-->',carList)
  return (
    <ul>
    {carList.map((m,idx) => (
       <CarItem item={m} />
    ))}
    </ul>
  )
}

export default Home