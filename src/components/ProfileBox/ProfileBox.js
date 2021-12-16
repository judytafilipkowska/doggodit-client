import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

import { Link } from "react-router-dom";


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { purple } from '@mui/material/colors';

const purple100 = purple[100];
const purple200 = purple[200];


function ProfileBox() {

    const { user, logOutUser } = useContext(AuthContext);


    return (
        <div key={user._id}>
            <Card sx={{ width: 345, bgcolor: purple100 }}>
                <CardMedia
                    component="img"
                    alt="profile pic"
                    height="400"
                    image={user.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div" sx={{ color: purple200 }}>
                        {user.name}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to="/user/interactions" style={{ textDecoration: "none" }} >
                        <Button size="small" sx={{ color: purple200 }}>Interactions</Button>
                    </Link>
                    <Link to={`/user/${user._id}/posts`} style={{ textDecoration: "none" }}>
                        <Button size="small" sx={{ color: purple200 }}>Posts</Button>
                    </Link>
                    <Link to="/user/edit" style={{ textDecoration: "none" }}>
                        <Button size="small" sx={{ color: purple200 }}>Edit</Button>
                    </Link>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <Button size="small" sx={{ color: purple200 }} onClick={logOutUser} >Log out</Button>
                    </Link>
                </CardActions>
            </Card>

        </div >




        // <div className="SignupPage">

        //     <div key={user._id}>
        //         <img src={user.image} alt="oezus" style={{ width: "200px" }} />
        //         <h5></h5>
        //         <p>Interactions</p>
        //         <Link to="/user/posts">
        //             <p>Posts</p>
        //         </Link>
        //         <Link to="/user/edit">
        //             <p>Edit</p>
        //         </Link>
        //         <Link to="/">
        //             <p onClick={logOutUser} >Log out</p>
        //         </Link>
        //     </div>
        // </div>

    );
}

export default ProfileBox;