import React from 'react'
import Details from './Details';
import {Routes, Route, Link, NavLink} from "react-router-dom";

function Cars({user}) {
    console.log('-->',user)
  return (
    <>
    <div className='product'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThykhS6tByx95mv4BEISM81gBroBLfRwXOjFnGSSo&s" alt=""/> 
        <h3>{user.brand}</h3>
        <h6>{user.model}</h6>
        <div className="price">
           <Link to ={`/${user.slug}`}> Details </Link>
            <Details/>






           {/* <a href='$item.slug'> <button typeof='button' >Details</button></a> */}
        </div> 
        </div>
        <style jsx>{`
        // .container{
        //     padding: 20px;
        //     background: #fff;
        //     border: 1px solid #ddd;
        // }
        // .container h3{
        //     font-size: 20px;
        //     margin-bottom: 15px;
        // .container h6{
        //     padding-bottom:10px;
        //     font-size:17px;
            

        // }
        // }       
        .product {
            
            padding: 15px;
            background: #fff;
            border: 1px solid #ddd;
            margin-bottom: 20px; 
            width: 24%;
            height: 332px;


          

        }

        .product img {
            width:100%;
            height:40%;
        }

        .product h6{
            font-size: 20px;
            margin-bottom: 10px;

        }
        .product .price (
            height: 40px;
            width: 35%;
            padding: 0 15px;
            flex: 1;
            cursor: pointer;
        )
        
        .action button[disabled]{
            opacity: 0.3;
            cursor: not-alowed;
        }

        
        `} </style>
       
   </>
  )
}

export default Cars