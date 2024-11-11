import React from 'react'
import './Home.css'
import Navbar from './Nabar'
import food from '../Images/food.jpg'
import accomodation from '../Images/accomodation.jpg'
import doctor from '../Images/doctor.jpg'
import coverImage from '../Images/main1.jpg'
import { Image } from 'react-bootstrap'
import Footer from './Footer'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div className='homePage'style={{fontFamily:'Roboto'}}>
		<Navbar/>
		<div className='coverImage'>
		<Image className='CI' style={{width:'100%',height:'100%'}} src={coverImage} fluid/>
		<div className='CT' style={{fontFamily:'Roboto'}}>Pathway to<br/><span style={{color:'yellow'}}> Renewal</span></div>
		<p className='CP'style={{fontFamily:'Roboto'}}>Compassionate care, proven recovery<br/>your journey to a healthier, brighter future starts here.</p>
		</div>
        {/* <div className='container' style={{zIndex:'-100'}}> */}
			<div  style={{zIndex:'100'}}>
					
			{/* // 		<div className="image-container">
			// 	<img src={image} alt="service" className="img2" />
			// 	<div className="overlay">
			// 	<div>
			// 		<h2>Consultancy</h2>
			// 		<p>
			// 		Great things are done by series of small things brought together.
			// 		</p>
			// 		<button className="but" onClick={handlescroll}>
			// 		Learn More
			// 		</button>
			// 	</div>
			// 	</div>
			// </div> */}
			<h1 className="services-title my-5" style={{color:'white',fontWeight:'700'}}>Our Services</h1>
			<div className="faciltiy" style={{display:'flex', justifyContent:'space-evenly',marginBottom:'40px'}}>
				<div className="cardS" style={{ width: "18rem",border:'1px solid black' , borderRadius:'30px',backgroundColor:'grey',color:'white'}}>
				<div className="card-body">
					<h3 className="card-title">Accomodation</h3>
					<img src={accomodation} className="card-img-top" alt="www" />
					<p className="card-text">
					We provide the best and clean room with the healthy enviroment to
					make sure the quick recovery.
					</p>
				</div>
				</div>
				<div className="cardS" style={{ width: "18rem",border:'1px solid black' , borderRadius:'30px',backgroundColor:'grey',color:'white' }}>
				<div className="card-body">
					<h3 className="card-title">Food</h3>
					<img src={food} className="card-img-top" alt="www" />
					<p className="card-text">
					We provide the healthy and top quality food, which is best for the
					victim's recovery.
					</p>
				</div>
				</div>
				<div className="cardS" style={{ width: "18rem",border:'1px solid black' , borderRadius:'30px',backgroundColor:'grey',color:'white' }}>
				<div className="card-body">
					<h3 className="card-title">Doctors</h3>
					<img src={doctor} className="card-img-top" alt="www" />
					<p className="card-text">
					We have the best and highly qualified dcotors which is specialized
					in this field.
					</p>
				</div>
				</div>
			</div>
			
			<h1 className="services-title my-5" style={{color:'white',marginTop:'40px',fontWeight:'700'}}>Our Plans</h1>
					<div className='row '>
					<div class="card col-3 mx-5" style={{marginLeft:'1000px'}}>
					<p style={{fontWeight:'700',color:'white',fontSize:'20px'}}>
						1-Week Plan
					</p>
					<p class="price">
						Rs 10,000
					</p>
					<ul class="lists">
						<li class="list">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path fill="#ffffff" d="M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z" clip-rule="evenodd" fill-rule="evenodd"></path> </g></svg>
							<span>Accomodation</span>
						</li>
						<li class="list">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path fill="#ffffff" d="M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z" clip-rule="evenodd" fill-rule="evenodd"></path> </g></svg>
						<span>Meal  </span>
						</li>
						
					</ul> 
					<Link to={'/register'} style={{margin:'auto'}} class="action">
						Get started
					</Link>
					</div>
					<div class="card col-3 mx-5">
					<p style={{fontWeight:'700',color:'white',fontSize:'20px'}}>
						3-Month Plan
					</p>
					<p class="price">
						Rs 120,000
					</p>
					<ul class="lists">
						<li class="list">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path fill="#ffffff" d="M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z" clip-rule="evenodd" fill-rule="evenodd"></path> </g></svg>
							<span> Accomodation </span>
						</li>
						<li class="list">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path fill="#ffffff" d="M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z" clip-rule="evenodd" fill-rule="evenodd"></path> </g></svg>
						<span> Meal </span>
						</li>
						<li class="list">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path fill="#ffffff" d="M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z" clip-rule="evenodd" fill-rule="evenodd"></path> </g></svg>
						<span> Weekly checkup </span>
						</li>
						
					</ul>
					<Link to={'/register'} style={{margin:'auto'}} class="action">
						Get started
					</Link>
					</div>
					<div class="card col-3 mx-5">
					<p style={{fontWeight:'700',color:'white',fontSize:'20px'}}>
						8-Month Plan
					</p>
					<p class="price">
						Rs 320,000
					</p>
					<ul class="lists">
						<li class="list">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path fill="#ffffff" d="M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z" clip-rule="evenodd" fill-rule="evenodd"></path> </g></svg>
							<span> Accomodation </span>
						</li>
						<li class="list">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path fill="#ffffff" d="M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z" clip-rule="evenodd" fill-rule="evenodd"></path> </g></svg>
						<span> Meal </span>
						</li>
						<li class="list">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path fill="#ffffff" d="M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z" clip-rule="evenodd" fill-rule="evenodd"></path> </g></svg>
						<span> Weekly checkup </span>
						</li>
						<li class="list">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path fill="#ffffff" d="M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z" clip-rule="evenodd" fill-rule="evenodd"></path> </g></svg>
						<span> Personal consultation </span>
						</li>
						
					</ul>
					<Link to={'/register'} style={{margin:'auto'}} class="action">
						Get started
					</Link>
					</div>
					</div>
			</div>
		{/* </div> */}
    <Footer/>
    </div>
  )
}

export default Home