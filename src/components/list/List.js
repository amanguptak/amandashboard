import React, { useEffect,  useState } from "react";


import axios from "axios";
import "./list.css";

export default function List() {
  const [list, setList] = useState([]);
  const [disable, setDisable]= useState(true);
  const [todate, setTodate]= useState();
  const [fromdate, setFromdate]= useState();
  const [calendar, setCalendar]= useState([])
  let month_name =(dt)=>{
    let mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
      return mlist[dt]
    }
    
    

  const getList = async () => {
    const res = await axios.get(
      `https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticlist?fromdate=2022-06-01&todate=2022-07-01`
    );
    setList(res.data.data.data);
  
  };

  const getCalender = async () => {
    const res = await axios.get(
      `https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticlist?fromdate=${todate}&todate=${fromdate}`
    );
    setCalendar(res.data.data.data);
    
  
  };
  useEffect(() => {
   
   getList()
  }, []);
  const handleSubmit=(e)=>{
    e.preventDefault();
    const gettodatevalue= e.target.value;
       setTodate(gettodatevalue)
       getCalender()
       

   
   }
  

  const handletodate= (e)=>{
    const gettodatevalue= e.target.value;
    setTodate(gettodatevalue)
    setDisable(false);
   

 }



  return (
   <div className="alldata">
     <div className="calender">

      <div>
        <h4> Show</h4>
      </div>
    <form onSubmit={handleSubmit}>
  <span>Select Duration</span>
  <label htmlFor="todate">from</label>
  <input type="date"  name="todate" placeholder="dd-mm-yyyy" onChange={(e)=>handletodate(e)}   />
  <label htmlFor="fromdate">to</label>
  <input type="date" className="form-control" name="fromdate" placeholder="dd-mm-yyyy" disabled={disable}  onChange={(e)=>setFromdate(e.target.value)}  /> 
   <button type="submit" >Apply</button>
  </form> 
      
    </div>
    <div className="appinstall">


    {calendar.length===0?(   <table className="head">
        <tr className="detail">
          <th>Date</th>
          <th>Date installs</th>
          <th>Platform</th>
          <th>Day Uninstalls </th>
          <th>Platform </th>
          <th>Churn Rate </th>
          <th>Churn Platform </th>
        </tr>

        {list.length === 0 ? (
          <tr>
            <td>
              <h1>No data</h1>
            </td>
          </tr>
        ) : (
          list.map((item,key) => (
            <tr className="orderid"key={item.created_At}>
             
           

              <td>
              
                {new Date(item.created_At).getDate()}
                {"  "}
                {month_name(new Date(item.created_At).getMonth())}
                {"  "}
                {new Date(item.created_At).getFullYear()}
              </td>
              <td>{item.totalinstall}</td>
              <td>
                <ul>
                  <li><i class="fa-brands fa-android"></i>{item.android_install}</li>
                  <li><i class="fa-brands fa-apple"></i>{item.ios_install}</li>
                </ul>
              </td>
              <td>{item.totaluninstall}</td>
              <td>
                <ul>
                  <li><i class="fa-brands fa-android"></i>{item.android_uninstall}</li>
                  <li><i class="fa-brands fa-apple"></i>{item.ios_uninstall}</li>
                </ul>
              </td>
              <td>{item.totalchurn}%</td>
              <td>
                <ul>
                  <li><i class="fa-brands fa-android"></i>{item.android_churn}%</li>
                  <li><i class="fa-brands fa-apple"></i>{item.ios_churn}%</li>
                </ul>
              </td>
            </tr>
          ))
        )}
      </table>):(<table className="head">
       
      <tr className="detail">
          <th>Date</th>
          <th>Date installs</th>
          <th>Platform</th>
          <th>Day Uninstalls </th>
          <th>Platform </th>
          <th>Churn Rate </th>
          <th>Churn Platform </th>
        </tr>
        { (
          calendar.map((item,key) => (
            <tr className="orderid"key={item.created_At}>
         

              <td>
                {new Date(item.created_At).getDate()}
                {" "}
                {month_name(new Date(item.created_At).getMonth())}
                {" "}
                {new Date(item.created_At).getFullYear()}
              </td>
              <td>{item.totalinstall}</td>
              <td>
                <ul>
                  <li>{item.android_install}</li>
                  <li>{item.ios_install}</li>
                </ul>
              </td>
              <td>{item.totaluninstall}</td>
              <td>
                <ul>
                  <li>{item.android_uninstall}</li>
                  <li>{item.ios_uninstall}</li>
                </ul>
              </td>
              <td>{item.totalchurn}%</td>
              <td>
                <ul>
                  <li>{item.android_churn}%</li>
                  <li>{item.ios_churn}%</li>
                </ul>
              </td>
            </tr>
          ))
        )}
      </table>)}
    </div>
   
      
    </div>
  );
}
