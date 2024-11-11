import React from 'react'
import Navbar from './Nabar'
import { Link } from 'react-router-dom'

function AdminPortal() {
  return (
    <>
    <div className='row'>
        <div className='col-3' style={{border:'2px solid black',height:'100vh',backgroundColor:"#4e4f51"}}>
            <div style={{display:'flex',flexDirection:'column',textAlign:'center'}}>
                <Link style={{color:'white',textDecoration:'none',border:'1px solid white',borderRadius:'10px',height:'40px',alignItems:'center',display:'flex',justifyContent:'center',fontWeight:'bold'}}>Messages</Link>
                <Link style={{color:'white',textDecoration:'none',border:'1px solid white',borderRadius:'10px',height:'40px',alignItems:'center',display:'flex',justifyContent:'center',fontWeight:'bold'}}>Patients</Link>
                <Link style={{color:'white',textDecoration:'none',border:'1px solid white',borderRadius:'10px',height:'40px',alignItems:'center',display:'flex',justifyContent:'center',fontWeight:'bold'}}>Doctors</Link>
                <Link style={{color:'white',textDecoration:'none',border:'1px solid white',borderRadius:'10px',height:'40px',alignItems:'center',display:'flex',justifyContent:'center',fontWeight:'bold'}}>Fee Vouchers</Link>
                <Link style={{color:'white',textDecoration:'none',border:'1px solid white',borderRadius:'10px',height:'40px',alignItems:'center',display:'flex',justifyContent:'center',fontWeight:'bold'}}>Generate Fee Voucher</Link>
            </div>
        </div>
        <div className='col-9'  style={{border:'2px solid black',height:'100vh'}}></div>
    </div>
    </>
  )
}

export default AdminPortal