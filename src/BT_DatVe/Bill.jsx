import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
function Bill() {
    const {seatSelected, calcTotal}=useSelector(state=>state.seat);
    const dispatch=useDispatch();
    const handleClick=()=>{
        dispatch({type: 'xacNhan'})
    }
  return (
    <div className='mt-5'>      
        <table style={{borderCollapse: "collapse"}}>
        <thead>
            <tr>
                <th style={{border: "1px solid black", padding: "5px"}}>Số ghế</th>
                <th style={{border: "1px solid black", padding: "5px"}}>Giá</th>
            </tr>
        </thead>
        <tbody>
            {seatSelected.map((item,index)=>{
                return <tr key={index}>
                    <td style={{border: "1px solid black", padding: "5px"}}>{item.soGhe}</td>
                    <td style={{border: "1px solid black", padding: "5px"}}>{item.gia}</td>
                </tr>
            })} 
        </tbody>
    </table>
    <p>Tổng tiền: {calcTotal} <span><button className='btn btn-success' onClick={()=>{handleClick()}}>Xác nhận</button></span> </p>
    </div>
  )
}

export default Bill