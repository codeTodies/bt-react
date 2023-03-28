
import React from 'react'
import Detail from './Detail'
function ShoeItem({item,isOpen,Type}) {
  return (
     <div className='card'>
        <img src={item.image} alt={item.name}  className='card-image'/>
        <div className='card-body'>
            <h3 className='card-title'>{item.name}</h3>
            <p className='card-text'>${item.price}</p>
            <button className='btn btn-dark'>Add To Cart</button>
            <Detail item={item} isOpen={isOpen} Type={Type}/>
        </div>
    </div>
  )
}

export default ShoeItem