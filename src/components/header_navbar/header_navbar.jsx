import Logo from '../../images/navbar_header/iproximus.png'

import React, { useEffect } from 'react';
import './header_navbar.css'
import ServiceSubmenu from './service_submenu';
import IndustriesSubmenu from './industries_submenu';
import CompanySubmenu from './company_submenu';

const HeaderNavbar = () => {
	const [scrolledbar, setScrolledbar] = React.useState(false);

	const handleScroll = () => {
		const offset = window.scrollY;
		if (offset > 200) {
			setScrolledbar(true);
		}
		else {
			setScrolledbar(false);
		}
	}
	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
	})

	let x = ['navbar'];
	if (scrolledbar) {
		x.push('scrolledbar');
	}

	return (

		< header className={x.join(" ")} >
			<nav className="navigation nav-left">
				<ul>
					<li>  <div className="logo"><img src={Logo} alt="Logo" title="Logo" /></div></li>
				</ul>
			</nav>
			<nav className="navigation nav-right">
				<ul>
					<li><a className='hover-underline-animation a' href="#post2">Home</a></li>
					<li><a className='a' href="#post1"><ServiceSubmenu/></a></li>
					<li><a className='a' href="#post1"><IndustriesSubmenu/></a></li>
					<li><a className='a' href="#post1"><CompanySubmenu/></a></li>
					<li><a className='hover-underline-animation a' href="#post4">Contact Us</a></li>
				</ul>
			</nav>
		</header >

		
	);
};

export default HeaderNavbar;