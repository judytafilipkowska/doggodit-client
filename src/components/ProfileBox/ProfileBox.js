import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { useEffect } from "react";
import { Link } from "react-router-dom";


function ProfileBox() {

    const { user } = useContext(AuthContext);

    return (

        <div className="SignupPage">

            <div key={user._id}>
                <img src={user.image} alt="oezus" style={{ width: "200px" }} />
                <h5>{user.name}</h5>
                <p>Favs</p>
                <p>Posts</p>
                <Link to="/user/edit">
                    <p>Edit</p>
                </Link>
                <p>Log out</p>
            </div>
        </div>

    );
}

export default ProfileBox;