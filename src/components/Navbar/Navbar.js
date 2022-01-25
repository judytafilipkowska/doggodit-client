import { Link } from "react-router-dom";
import Button from '@mui/material/Button';


function Navbar() {

  return (
    <nav className="Navbar">
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <Button size="big" >
          <img src="../pngfind.com-house-icon-png-1012390.png" alt="home" style={{ height: 50 }} />  </Button>
      </Link>
    </nav>
  );
}

export default Navbar;
