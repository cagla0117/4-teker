import React from 'react'
import Details from './Details';
import {Routes, Route, Link, NavLink} from "react-router-dom";
import styled from 'styled-components';

function Cars({car,index}) {
    // console.log('-->',user)

  return (
    <>
    <Container className='product'>
        <img src={`https://picsum.photos/300/300?random=${index}`} alt=""/> 
        <h3>{car.brand}<hr></hr></h3>
    <h6>{car.model}<br></br> {car.productionYear}</h6>
        <div className="price">
           <Link to={`/${car.slug}`}><button> Kirala </button> </Link>
            






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


          
        button{
            border-radius: 8px;
            width: 180px;
            height: 40px;
            justify-content: center;
            text-align: center;
            margin-left: 10px;

        }

        

         img {
            width:100%;
            height:40%;
        }

         h6{
            font-size: 15px;
            

        }

        h3{

        }
        .price {
            height: 40px;
            width: 35%;
            padding: 0 15px;
            flex: 1;
            cursor: pointer;
    }

        `
export default Cars

