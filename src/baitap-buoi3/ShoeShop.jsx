import React from 'react'
import Detail from './Detail'
import ShoeItem from './ShoeItem'
function ShoeShop({items,onSelectProduct,onSelectReduce,product,reduce}) {
    const handleDetail=(item)=>{
    onSelectProduct(item)
  }
  const handleReduce=(item)=>
  {
    onSelectReduce(item)
  }
   
  return (
    <div className='container'>
        <h1 className='text-center'>ShoeShop</h1>
        <div className='row'>
            {items.map(item=>{
                return (
                    <div key={item.id} className="col-sm-4">
                        <ShoeItem item={item} product={product} reduce={reduce} onSelectProduct={handleDetail} onSelectReduce={handleReduce} />
                       
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ShoeShop