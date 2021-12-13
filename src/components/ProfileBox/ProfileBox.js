import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";



function ProfileBox() {

    const { user } = useContext(AuthContext);

    return (

        <div>

            <div key={user._id}>
                <img src={user.image} alt="oezus" style={{ width: "200px" }} />
                <h5>{user.name}</h5>
                <p>Favs</p>
                <p>Posts</p>
                <p>Edit</p>
                <p>Log out</p>
            </div>
        </div>

    );
}

export default ProfileBox;