import React from 'react';

const CarItem = ({item}) => {
  return (
    <div>
        <li>
        {item.slug}
       </li>
    </div>
  )
}

export default CarItem