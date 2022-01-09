import React, { useEffect, useState } from 'react'

const Statewise = () => {

  const[datas,setdatas]=useState([]);

  const getCovid=async()=>{
         const resopnce = await fetch('https://data.covid19india.org/data.json');
         const actuals= await resopnce.json();
         setdatas(actuals.statewise)
  }

 useEffect(()=>{
getCovid();
 },[])
  return (
  <>
   
    <div className='container-fluid mt-5'>
      <div className='main-heading'>
        <h1 className='mb-5 text-center'> <span className='font-weight-bold'>INDIA </span>COVID-19 DASHBOARD</h1>
      </div>
      <div className='table-responsive'>
        <table className='table table-hover'>
          <thead className="table-dark">
          <tr>
            <th>STATE</th>
            <th>CONFIRMED</th>
            <th>RECOVERED</th>
            <th>DEATH</th>
            <th>ACTIVE</th>
            <th>UPDATED</th>
          </tr>

          </thead>

          <tbody>

          {
            datas.map((curelement,ind)=>{
              console.log(datas)
              return(
                <tr key={ind}>
            <td>{curelement.state}</td>
            <td>{curelement.confirmed}</td>
            <td>{curelement.recovered}</td>
            <td>{curelement.deaths}</td>
            <td>{curelement.active}</td>
            <td>{curelement.lastupdatedtime}</td>
          
            
          </tr>
              );
            })
          }
          
         
            
          </tbody>
        </table>
      </div>
    </div>
  </>
  )
}

export default Statewise
