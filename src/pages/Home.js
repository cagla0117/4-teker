import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Cars from '../components/Cars';
import Navbar from '../components/Navbar';
import Searchbar from '../components/Searchbar';


function Home() {
   const [users, setUsers] = useState([]);


   useEffect(() => {
      axios.get(
         "https://fow-rent-a-car.herokuapp.com/api/list"
      )
         .then((response) => setUsers(response.data));
   }, [])

   return (
      <div>
         <Navbar/>
         {/* <Searchbar/> */}
         <div className='container cars'>
            {users?.map((car,key) => (
               // <li key={user.id}>{user.brand}- {user.model}</li>
               <Cars car={car} key={key} index={key} />
            ))}
         </div>



      </div>
   )
}

export default Home