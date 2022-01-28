import "./Navbar.css"
import { Link } from "react-router-dom";
import Logo from "../../image/logo.png"


function Navbar() {

  return (
    <nav className="navbar">

      <div className="logo">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <img src={Logo} alt="" className="logo-img" />
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;
