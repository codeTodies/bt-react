import React,{useState} from 'react'
import data from './data.json'
import ShoeShop from './ShoeShop'
import Detail from './Detail'
function Main() {
  const [selectProduct,SetselectProduct]=useState(null)
    const handleDetail=(item)=>{
    SetselectProduct(item)
  }
   const [isOpen,SetisOpen]=useState(false)
  return (
    <div className='container'>
        <ShoeShop items={data} isOpen={isOpen} onSelectProduct={handleDetail} onClose={()=>{SetisOpen(false)}} product={selectProduct}/>
        <Detail item={selectProduct}  />
    </div>
  )
}

export default Main