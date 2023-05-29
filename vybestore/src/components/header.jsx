import React from 'react'
import './header.css'

const Header = () => {
	return (
		<header>
			<div className='headLogo'>
				<span>VybeStore</span>
			</div>
			<div className="search-bar">
				<input type="text" placeholder="Search" />
      			<button type="submit">
        			<i className="fa fa-search"></i>
      			</button>
    		</div>
		</header>
	)
}

export default Header