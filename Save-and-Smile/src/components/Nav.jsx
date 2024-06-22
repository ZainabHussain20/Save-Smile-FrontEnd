import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <header>
      <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/signin">Sign In</NavLink>
      <NavLink to="/signup">Sign Up</NavLink>
      </nav>
      <img className='logo' src="https://lh3.googleusercontent.com/drive-viewer/AKGpihZbiS59QrpIBaRnT0P6xHrjDXO5UDcLJBAy3XXJ5d8a7_MboRU40lzksmINpOvDJ78gdUvr3VOKgbugGKfuzTIcnZ7fDe0vCxI=s2560"></img>
    </header>
    
  )
}

export default Nav
