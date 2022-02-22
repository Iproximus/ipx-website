
import React from 'react'
import './header_navbar.css'

function ServiceSubmenu() {
  return (
	  <div>
		  <li>
			  <a className='a' href="/#">Services&#9662;</a>
			  <ul className="dropdown">
				  <li><a className='hover-underline-animation a' href="/#">Strategy & Consulting</a></li>
				  <li><a className='hover-underline-animation a' href="/#">Data Engineering</a></li>
				  <li><a className='hover-underline-animation a' href="/#">Cloud Engineering</a></li>
				  <li><a className='hover-underline-animation a' href="/#">Artificial Intelligence</a></li>
			  </ul>
		  </li>
	</div>
  )
}

export default ServiceSubmenu