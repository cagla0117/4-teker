import React from 'react';
import styled from 'styled-components';

function CarItem({data}) {
  return (
    
<Container className='car'>
        <img src={`https://cumhuriyet.com.tr/Archive/2021/11/29/1888598/kapak_112247.jpg`} alt=""/> 
        <div className='content'>
            Brand: {data.brand} <br></br><hr></hr>
            Car Model: {data.model} <br></br><hr></hr>
            ProdutionYear: {data.productionYear}<br></br><hr></hr>
            Engine Displacement: {data.engineDisplacement}<br></br><hr></hr>
            Color: {data.color}<br></br><hr></hr>
            Hp: {data.hp}<br></br><hr></hr>
      </div>





           {/* <a href='$item.slug'> <button typeof='button' >Details</button></a> */}
       
        </Container>

 
   
  )
}
const Container = styled.div`       
        
            
            padding: 15px;
            
            justify-content: center;

            border: 1px solid #ddd;
            margin-bottom: 20px; 
            width: 50%;
            height: 100%;
            margin-right: 10cm;
            margin-left: 8cm;



          

        

         img {
            width:100%;
            height:40%;
        }



        
        `



export default CarItem