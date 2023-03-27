import React from 'react'

function Detail({item}) {

   if(!item)
  {
    return null
  }
  return (
    <div key={item.id}>
      <h3>Mô tả sản phẩm</h3>
      <p>{item.description}</p>
      <p>{item.shortDescription}</p>
    </div>
    
  )
}

export default Detail