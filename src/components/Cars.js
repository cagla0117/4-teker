import React from 'react'
import Details from './Details';
import {Routes, Route, Link, NavLink} from "react-router-dom";
import styled from 'styled-components';

function Cars({user,index}) {
    // console.log('-->',user)

  return (
    <>
    <Container className='product'>
        <img src={`https://picsum.photos/300/300?random=${index}`} alt=""/> 
        <h3>{user.brand}</h3>
        <h6>{user.model}</h6>
        <div className="price">
           <Link to={`/${user.slug}`}> Details </Link>
            <Details/>






           {/* <a href='$item.slug'> <button typeof='button' >Details</button></a> */}
        </div> 
        </Container>

 
   </>
  )
}
const Container = styled.div`       
        
            
            padding: 15px;
            background: #fff;
            border: 1px solid #ddd;
            margin-bottom: 20px; 
            width: 24%;
            height: 332px;


          

        

         img {
            width:100%;
            height:40%;
        }

         h6{
            font-size: 20px;
            margin-bottom: 10px;

        }
        .price {
            height: 40px;
            width: 35%;
            padding: 0 15px;
            flex: 1;
            cursor: pointer;
    }
        
        .action button[disabled]{
            opacity: 0.3;
            cursor: not-alowed;
        }

        
        `
export default Cars

