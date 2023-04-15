import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
function Seat() {
    const {seatDefault}=useSelector(state=>state.seat)
    const dispatch=useDispatch();
    const handleClick=(soGhe,hang)=>{
        dispatch({type: "chonGhe",payload:soGhe,payload1:hang})
    }
  return (
    <div className='mt-5'>
        {seatDefault.map((item,index)=>{
            return <div className='row' key={index}>
                <span>{item.hang}</span>
                {item.danhSachGhe.map((seat)=>{
                    return <button className={`seat ${seat.daDat ? 'full' : 'empty'} ${seat.selected ? 'is-selected' : 'empty'} mx-3`} key={seat.soGhe} onClick={()=>{handleClick(seat.soGhe,item.hang)}}
                    disabled={seat.daDat}> 
                        
                    </button>
                })}
            </div>
        })}
    </div>
  )
}

export default Seat