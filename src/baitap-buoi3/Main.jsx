import React,{useState} from 'react'
import data from './data.json'
import ShoeShop from './ShoeShop'
function Main() {
  const [selectProduct,SetselectProduct]=useState(null)
    const handleDetail=(item)=>{
    SetselectProduct(item)
  }
   
  return (
    <div className='container'>
        <ShoeShop items={data}  onSelectProduct={handleDetail} product={selectProduct} />
    </div>
  )
}

export default Main