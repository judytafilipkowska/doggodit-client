import { Link } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";


import Button from '@mui/material/Button';


function Navbar() {
  // Get the value from the context
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);


  return (
    <nav className="Navbar">
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <Button size="big" >
          <img src="../pngfind.com-house-icon-png-1012390.png" alt="home" style={{ height: 50 }} />  </Button>
      </Link>

      {/* 
      <div className="profile-img-wrapper">
        {user && (
          <Link to="/profile">
            <img className="profile-img" src={user.image} alt="profile" />
          </Link>
        )}
      </div> */}
    </nav>
  );
}

export default Navbar;
