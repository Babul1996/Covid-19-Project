import React, { useEffect, useState } from 'react'

const Covid = () => {

const[data, setData]=useState([]);
  const getCovidData=async()=>{
    try{
      const result=await fetch('https://data.covid19india.org/data.json');
      const actual=await result.json();
      setData(actual.statewise[0])
    }
    catch(error){
      console.log(error)
    }
  }
  useEffect(()=>{
    getCovidData();
  })
  return (
    <div>
     
      <div className='container mt-5'>
        <div className="row gy-5">
          <div className='col-md-4'>
            <div class="card bg-info" style={{width: "18rem"}}>
              <div class="card-body">
                <h5 class="card-title">COUNTRY</h5>
                <h4 class="card-subtitle text-muted">INDIA</h4>
                

              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div class="card bg-warning" style={{width: "18rem"}}>
              <div class="card-body">
               
                <h4 class="card-subtitle mb-2 text-muted">CONFIRMED</h4>
                <p class="card-text">{data.confirmed}</p>

              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div class="card bg-success" style={{width: "18rem"}}>
              <div class="card-body">
                
                <h4 class="card-subtitle mb-2 text-muted">RECOVERED</h4>
                <p class="card-text">{data.recovered}</p>

              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div class="card bg-danger" style={{width: "18rem"}}>
              <div class="card-body">
                <h4 class="card-title">DEATH</h4>
                
                <p class="card-text">{data.deaths}</p>

              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div class="card bg-primary" style={{width: "18rem"}}>
              <div class="card-body">
                
                <h4 class="card-subtitle mb-2 text-muted">ACTIVE</h4>
                <p class="card-text">{data.active}</p>

              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div class="card bg-light" style={{width: "18rem"}}>
              <div class="card-body">
                <h4 class="card-title">LATEST UPDATED</h4>
                
                <p class="card-text">{data.lastupdatedtime}</p>

              </div>
            </div>
          </div>
          
          

        </div>
      </div>

    </div>
  )
}

export default Covid;

// https://data.covid19india.org/data.json