import React from 'react';

import '../styles/navbar.css';
import { Link } from 'react-router-dom';

/*
  This component is used for rendering the Nav Bar which contains the following,
  - Welcome message for the logged in user
  - Logout Button
  - In more complex webpages you can include routes here with the help of React-Router
*/
const NavBar = ({ user, setUser }) => {
  // If the Logout button has been clicked then clear the loggedInUser object from localStorage and
  // update "user" state to null, in order to logout, otherwise on the next reload, the Effect hook will again read the user
  // from the localStorage and relogin without showing the login form
  const logout = () => {
    window.localStorage.removeItem('loggedInUser')
    setUser(null)
  }

  // Prevents Key Exception errors if "user" state hasn't loaded yet
  if (!user)
    return null

  // Fully styled Navbar using Bootstrap (it can be a big pain to style Navbars)
  return (
    <div className="navbar">
      <Link to="/" className="left-button">Home</Link>
      <div className="right-buttons">
        {/* <Link to="/salary">Salary</Link> */}
        <Link to="/profile">Profile</Link>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  )
}

export default NavBar