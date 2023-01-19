import React from 'react'
import './sidebar.css'
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="header">
        <img src="https://media.istockphoto.com/id/1134411591/vector/old-train-front-icon-vector-on-white-background-steam-train-old-locomotive-pictogram-type.jpg?s=612x612&w=0&k=20&c=ngXpUnfFrx1fWnbtWTNLptgROHQ3lO9r2C4RYKuNtCs=" alt="" className="logo" />
        <h3>wow</h3>
        <i class="fa-regular fa-circle"></i>
      </div>
      <div className="options">
        <ul>
          <li className='active'><i class="fa-solid fa-table-columns"></i>Dashbord</li>
          <li><i class="fa-regular fa-user"></i>WOW Users</li>
          <li><i class="fa-solid fa-video"></i>Video Clips</li>
          <li><i class="fa-solid fa-triangle-exclamation"></i>Reported Content</li>
          <li><i class="fa-solid fa-filter"></i>Category</li>
          <li><i class="fa-solid fa-circle-info"></i>Info Page</li>
          <li><i class="fa-solid fa-comment-dots"></i>FAQ</li>
          <li><i class="fa-regular fa-bell"></i>Push Notifications</li>
          <li><i class="fa-solid fa-user-plus"></i>Internal Users</li>
        </ul>
      </div>
    </div>
  )
}
