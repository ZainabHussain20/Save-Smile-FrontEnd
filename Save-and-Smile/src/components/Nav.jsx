import { NavLink } from 'react-router-dom'

const Nav = () => {

  return (
    <header>
      <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  )
}

export default Nav