
import React,{useState,useEffect} from 'react'
import Detail from './Detail';
import ShoeItem from './ShoeItem'
function ShoeShop({items,onSelectProduct,product,onClose}) {
    const handleDetail=(item)=>{
    onSelectProduct(item)
  }
  const [Type,setType]=useState(0);
  const [isOpen,SetisOpen]=useState(false)
  useEffect(()=>{
   SetisOpen(false); 
  },[Type])
  return (
    <div className='container'>
        <h1 className='text-center'>ShoeShop</h1>
        <div className='row'>
            {items.map(item=>{
                return (
                    <div key={item.id} className="col-sm-4">
                        <ShoeItem items={items} item={item} product={product}  onSelectProduct={handleDetail} isOpen={isOpen} onClose={onClose} Type={Type}/>
                         <button key={item.id} className='btn btn-warning' onClick={()=>{setType(item.id);SetisOpen(true)}}>View detail</button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ShoeShop