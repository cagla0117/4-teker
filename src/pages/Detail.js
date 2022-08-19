import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CarItem from '../components/CarItem'
import Navbar from '../components/Navbar'



function Detail  () {
  const [data, setData]=useState(null)
  const params=useParams()
  useEffect(() =>{
    axios.get(`https://fow-rent-a-car.herokuapp.com/api/${params.slug}`).then((response)=>{
      setData(response.data)
    })
  },[])
  if (data===null) return <p>YÜKLENİYOR</p>
    return (
      
    <div><Navbar/> <CarItem data={data}/> </div>
  )
}

export default Detail