import React from 'react'
import Detail from './Detail'
function ShoeItem({item,onSelectProduct}) {
  return (
     <div className='card'>
        <img src={item.image} alt={item.name}  className='card-image'/>
        <div className='card-body'>
            <h3 className='card-title'>{item.name}</h3>
            <p className='card-text'>${item.price}</p>
            <button className='btn btn-dark'>Add To Cart</button>
            <button className='btn btn-warning' onClick={()=>{onSelectProduct(item);}} >View detail</button>
        </div>
    </div>
  )
}

export default ShoeItem