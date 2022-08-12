import React, {useState,useEffect} from 'react'
import Cars from './Cars';

function Data() {
    const [users, setUsers] = useState([]);

  
     useEffect(( )=> {
        fetch("https://fow-rent-a-car.herokuapp.com/api/list")
         .then((res) => res.json())
         .then((data) => setUsers(data));
     }, [] )

  return (
    <div><h2>Cars</h2>
        <div className='container cars'>
            {users.map((user)=> (
                // <li key={user.id}>{user.brand}- {user.model}</li>
                <Cars user={user}/>
            ))}
        </div>
    
    
    
    </div>
  )
}

export default Data 
 // Example POST method implementation:
// async function postData(url = 'https://fow-rent-a-car.herokuapp.com/api/list', data = {}) {
//     // Default options are marked with *
//     const response = await fetch(url, {
//       method: 'GET', // *GET, POST, PUT, DELETE, etc.
//       mode: 'no-cors', // no-cors, *cors, same-origin
//       cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//       credentials: 'same-origin', // include, *same-origin, omit
//       headers: {
//         'Content-Type': 'application/json'
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       redirect: 'follow', // manual, *follow, error
//       referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//       body: JSON.stringify(data) // body data type must match "Content-Type" header
//     });
//     return response.json(); // parses JSON response into native JavaScript objects
//   }
  
//   postData('https://fow-rent-a-car.herokuapp.com/api/list')
//     .then((data) => {
//       console.log(data); // JSON data parsed by `data.json()` call
//     });    //  useEffect(( )=> {
    //     fetch(`https://fow-rent-a-car.herokuapp.com/api/list${}`,{method: "delete"})
    //      .then((response) => response.json())
    //      .then((data) => console.log(data));
    //  }, [] )


    // useEffect(( )=> {
    //     fetch("https://fow-rent-a-car.herokuapp.com/api/list")
    //     .then(get => {
    //         return get.json();
    //     })
    //     .then(get => {
    //         console.log(get.title)
    //     });
    // }, [] )
