import React, { useEffect, useState } from 'react';

const Stateise=()=>{
    const [data, setData] = useState([]);

    const getCovidData= async()=>{
        const res = await fetch('https://data.covid19india.org/data.json');
   const actualData = await res.json();
//    console.log(actualData.statewise);
   setData(actualData.statewise);
    }

    useEffect(()=>{
        getCovidData()
    },[])

    return(
        <>

        <div className="container-fluid mt-5">
          <div>
            <h1 className="mb-5 text-center"><span>India</span>covid Cases</h1>
          </div>

          <div className="table-responsive">
            <table className='table table-hover'>
            <thead className='thead-dark'>
            <tr>
              <th>State</th>
              <th>Confirmed</th>
              <th>recovered</th>
              <th>deaths</th>
              <th>active</th>
              <th>updated</th>
            </tr>
            {data.map((curEle, Index)=>{
                   return(
                     <tr key={Index}>
                      <td>{curEle.state}</td>
                      <td>{curEle.confirmed}</td>
                      <td>{curEle.recovered}</td>
                      <td>{curEle.deaths}</td>
                      <td>{curEle.active}</td>
                      <td>{curEle.lastupdatedtime}</td>
                     </tr>
          

                   )
            })}

            </thead>


            </table>

          </div>
        </div>

        </>
    )
}

export default Stateise;