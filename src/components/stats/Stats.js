import React, { useEffect, useState } from 'react'
import './stats.css'
import axios from 'axios'
export default function Stats() {
    const [data, setData]= useState({})
    const loadStats= async () => {
        return await axios
          .get("https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticcount?fromdate=2022-07-01&todate=2022-07-14")
          .then((res) => setData(res.data.data))
          .catch((err) => console.log(err));
          
      };
    useEffect(() => {
        loadStats();
     
      }, []);
    
  return (
<div className="stats">

     <div className="row1">
        <div className="col1">
        <i class="fa-solid fa-arrow-down"></i>
        <span className="details">
        <p>{data.totalInstall}</p>
        <h6>App installed</h6>
        </span>
        </div>
        <div className="col1">
        <i class="fa-regular fa-circle"></i>
        <span className="details">
            <p>{data.activeinstall}</p>
        <h6>Active installs</h6>
        </span>
        </div>
        <div className="col1">
        <i class="fa-regular fa-circle"></i>
        <span className="details">
        <p>{data.churn} %</p>
        <h6>Churn Rate</h6>
        </span>
        </div>
      
</div>
     <div className="row1">
        <div className="col1">
        <i class="fa-regular fa-trash-can"></i>
        <span className="details">
        <p>{data.totaluninstall
}</p>
        <h6>App Unistall</h6>
        </span>
        </div>
        <div className="col1">
        <i class="fa-regular fa-circle"></i>
        <span className="details">
        <p>{data.aliveappusers}</p>
        <h6>Alive users</h6>
        </span>
        </div>
        <div className="col1">
        <i class="fa-regular fa-circle"></i>
        <span className="details">
        <p>{data.alivechurn}%</p>
        <h6>Alive Churn</h6>
        </span>
        </div>
      
</div>

     
</div>
  )
}
