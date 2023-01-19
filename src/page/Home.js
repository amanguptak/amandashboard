import React from 'react'
import Data from '../components/data/Data'
import Sidebar from '../components/sidebar/Sidebar'
import './home.css'
export default function Home() {
  return (
    <div className="container">
        <Sidebar/>
        <Data/>
        
    </div>
  )
}
