import React, {useState} from 'react'
import Data from "./dataGlasses.json"
function Content() {
  const [change,setChange]=useState()
  return (
    <div className='py-5'>
        <div className='d-flex justify-content-around align-items-center '>
            <div className="p-6">
                <img src="./img/model.jpg" alt="" />
            </div>
            <div className="p-6">
              {change}

            </div>
        </div>

      <div className='mt-2 bg-warning'>
        <div className='d-flex justify-content-center align-items-center  '>
            <div className="row mt-2">
                <div className="col-md-3" onClick={()=>setChange(<div className="card bg-dark text-white">
                  <img className="card-img" src="./img/v1-model.png" alt="" />
                  <div className="card-img-overlay d-flex">
                    <div className="align-self-end text-dark bg-warning">
                        <h3 className='text-primary'>{Data && Data[0].name}</h3>
                        <p className='mt-1'>{Data && Data[0].desc}</p>
                    </div>  
                  </div>
                  </div>)}>'
                <img src="./img/v1.png" alt="" width="150px"/>
              </div>
                <div className="col-md-3" onClick={()=>setChange(<div className="card bg-dark text-white">
                  <img className="card-img" src="./img/v2-model.png" alt="" />
                  <div className="card-img-overlay d-flex">
                    <div className="align-self-end text-dark bg-warning">
                        <h3 className='text-primary'>{Data && Data[1].name}</h3>
                        <p className='mt-1'>{Data && Data[1].desc}</p>
                    </div>  
                  </div>
                  </div>)}>'<img src="./img/v2.png" alt="" width="150px"/></div>
                <div className="col-md-3" onClick={()=>setChange(<div className="card bg-dark text-white">
                  <img className="card-img" src="./img/v3-model.png" alt="" />
                  <div className="card-img-overlay d-flex">
                    <div className="align-self-end text-dark bg-warning">
                        <h3 className='text-primary'>{Data && Data[2].name}</h3>
                        <p className='mt-1'>{Data && Data[2].desc}</p>
                    </div>  
                  </div>
                  </div>)}>'<img src="./img/v3.png" alt="" width="150px"/></div>
                <div className="col-md-3" onClick={()=>setChange(<div className="card bg-dark text-white">
                  <img className="card-img" src="./img/v4-model.png" alt="" />
                  <div className="card-img-overlay d-flex">
                    <div className="align-self-end text-dark bg-warning">
                        <h3 className='text-primary'>{Data && Data[3].name}</h3>
                        <p className='mt-1'>{Data && Data[3].desc}</p>
                    </div>  
                  </div>
                  </div>)}>'<img src="./img/v4.png" alt="" width="150px"/></div>
                <div className="col-md-3" onClick={()=>setChange(<div className="card bg-dark text-white">
                  <img className="card-img" src="./img/v5-model.png" alt="" />
                  <div className="card-img-overlay d-flex">
                    <div className="align-self-end text-dark bg-warning">
                        <h3 className='text-primary'>{Data && Data[4].name}</h3>
                        <p className='mt-1'>{Data && Data[4].desc}</p>
                    </div>  
                  </div>
                  </div>)}>'<img src="./img/v5.png" alt="" width="150px"/></div>
                <div className="col-md-3" onClick={()=>setChange(<div className="card bg-dark text-white">
                  <img className="card-img" src="./img/v6-model.png" alt="" />
                  <div className="card-img-overlay d-flex">
                    <div className="align-self-end text-dark bg-warning">
                        <h3 className='text-primary'>{Data && Data[5].name}</h3>
                        <p className='mt-1'>{Data && Data[5].desc}</p>
                    </div>  
                  </div>
                  </div>)}>'<img src="./img/v6.png" alt="" width="150px"/></div>
                <div className="col-md-3" onClick={()=>setChange(<div className="card bg-dark text-white">
                  <img className="card-img" src="./img/v7-model.png" alt="" />
                  <div className="card-img-overlay d-flex">
                    <div className="align-self-end text-dark bg-warning">
                        <h3 className='text-primary'>{Data && Data[6].name}</h3>
                        <p className='mt-1'>{Data && Data[6].desc}</p>
                    </div>  
                  </div>
                  </div>)}>'<img src="./img/v7.png" alt="" width="150px"/></div>
                <div className="col-md-3" onClick={()=>setChange(<div className="card bg-dark text-white">
                  <img className="card-img" src="./img/v8-model.png" alt="" />
                  <div className="card-img-overlay d-flex">
                    <div className="align-self-end text-dark bg-warning">
                        <h3 className='text-primary'>{Data && Data[7].name}</h3>
                        <p className='mt-1'>{Data && Data[7].desc}</p>
                    </div>  
                  </div>
                  </div>)}>'<img src="./img/v8.png" alt="" width="150px"/></div>
                <div className="col-md-3" onClick={()=>setChange(<div className="card bg-dark text-white">
                  <img className="card-img" src="./img/v9-model.png" alt="" />
                  <div className="card-img-overlay d-flex">
                    <div className="align-self-end text-dark bg-warning">
                        <h3 className='text-primary'>{Data && Data[8].name}</h3>
                        <p className='mt-1'>{Data && Data[8].desc}</p>
                    </div>  
                  </div>
                  </div>)}>'<img src="./img/v9.png" alt="" width="150px"/></div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Content