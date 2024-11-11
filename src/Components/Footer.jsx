import React from 'react'

function Footer() {
  return (
    <div style={{backgroundColor:'#4e4f51',display:'flex',justifyContent:'space-between',width:'90vw',height:'380px',color:'yellow',paddingTop:'100px',paddingLeft:'60px'}}>
        <div className='my-5' style={{marginTop:'70px',top:'40px',fontWeight:'700'}}><h1 style={{fontWeight:'700'}}>Rehabilitation<br/> Center</h1></div>
        <div className='my-5'><p style={{fontSize:'20px',marginTop:'50px',color:'white'}}>Arfa Karim Software Technology Park,<br/>Model Town Lahore</p></div>
    </div>
  )
}

export default Footer