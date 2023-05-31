import React from 'react'
import './header.css'
import Search from './search.jsx'

const Header = () => {
	return (
		<header>
			<div className='headLogo'>
				<span>VybeStore</span>
				<Search />
			</div>
		</header>
	)
}

export default Header