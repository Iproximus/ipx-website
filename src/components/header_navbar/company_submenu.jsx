import React from 'react'

function CompanySubmenu() {
  return (
	  <div>
		  <li>
			  <a className='a' href="/#">Company&#9662;</a>
			  <ul className="dropdown">
				  <li><a className='hover-underline-animation a' href="/#">About Us</a></li>
				  <li><a className='hover-underline-animation a' href="/#">Team</a></li>
				  <li><a className='hover-underline-animation a' href="/#">Careers</a></li>
			  </ul>
		  </li>
	</div>
  )
}

export default CompanySubmenu



