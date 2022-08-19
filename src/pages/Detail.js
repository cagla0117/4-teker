import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



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
    <div>Detail {data.slug}</div>
  )
}

export default Detail