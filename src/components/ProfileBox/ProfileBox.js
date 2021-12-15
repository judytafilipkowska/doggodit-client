import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

import { Link } from "react-router-dom";




function ProfileBox() {

    const { user, logOutUser } = useContext(AuthContext);

    return (

        <div className="SignupPage">

            <div key={user._id}>
                <img src={user.image} alt="oezus" style={{ width: "200px" }} />
                <h5>{user.name}</h5>
                <p>Favs</p>
                <Link to="/user/posts">
                    <p>Posts</p>
                </Link>
                <Link to="/user/edit">
                    <p>Edit</p>
                </Link>

                <p onClick={logOutUser} >Log out</p>

            </div>
        </div>

    );
}

export default ProfileBox;