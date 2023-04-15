import React from 'react'
import './style.css'
import Seat from './Seat'
import Bill from './Bill'
function Main() {
  return (
    <div className='container-fluid bg-dark text-white'>
        <div>
            <h1 className='text-center text-warning'>Movie Seat Selection</h1>
        </div>
        <div className='container bg-secondary mt-5'>
            <div >
                <ul>
                <li className='empty-seat text-info'>Ghế trống</li>
                <li className='selected-seat text-danger'>Ghế đã đặt</li>
                <li className='choose-seat text-warning' >Ghế bạn đang chọn</li>
                </ul>
            </div>
            <div className='mt-3 screen text-black text-center align-middle'>Screen</div>
            <div>
                <Seat/>
            </div>
            <div>
                <Bill/>
            </div>
 
        </div>
    </div>
  )
}

export default Main