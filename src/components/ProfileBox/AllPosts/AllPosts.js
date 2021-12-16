import { useState, useEffect, useContext } from "react";

import userService from "../../../services/user.service";
import { useNavigate, useParams } from "react-router";

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { red } from '@mui/material/colors';
import { AuthContext } from "../../../context/auth.context";

import Interactions from "../Interactions/Interactions";


import ProfileBox from "../ProfileBox";
import { Link } from "react-router-dom";

function AllPosts() {
    const { user } = useContext(AuthContext);

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const [myPosts, setMyPosts] = useState([]);
    const [errorMessage, setErrorMessage] = useState(undefined);
    const { postId, userId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const postsOfCurrentUser = async () => {

            try {
                const response = await userService.postsOfCurrentUser(userId);
                setMyPosts(response.data.posts);

            } catch (error) {
                setErrorMessage("Something went wrong");
            }
        }
        postsOfCurrentUser();
    }, [])


    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }));
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <div>
            <>
                <Grid container spacing={3}>
                    <Grid item xs>
                        <Item>
                            <ProfileBox /> </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            <h4>Your posts</h4>

                            {myPosts.map((onePost) =>
                                onePost.image ?
                                    (
                                        <>

                                            <div className="SignupPage">
                                                {/* <Link to={`/user/posts/${post._id}`}> */}
                                                <Card sx={{ maxWidth: 700 }}>
                                                    <CardMedia
                                                        component="img"
                                                        height="400"
                                                        image={onePost.postImage}

                                                        alt="post picture"
                                                    />

                                                    <CardContent>
                                                        <Typography variant="body2" color="text.secondary">
                                                            {onePost.tag}
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary">
                                                            {onePost.postText}
                                                        </Typography>
                                                    </CardContent>
                                                </Card>
                                                {/* </Link> */}
                                                <Link to={`/user/posts/${onePost._id}/edit`}>
                                                    <h2>Edit</h2>
                                                </Link>

                                            </div>

                                        </>
                                    ) : (
                                        <>

                                            <div className="SignupPage">
                                                {/* <Link to={`/user/posts/${post._id}`}> */}
                                                <Card sx={{ maxWidth: 700 }}>

                                                    <CardContent>
                                                        <Typography variant="body2" color="text.secondary">
                                                            {onePost.tag}
                                                        </Typography>
                                                        <Typography variant="body2" color="text.secondary">
                                                            {onePost.postText}
                                                        </Typography>
                                                    </CardContent>


                                                </Card>
                                                {/* </Link> */}
                                                <Link to={`/user/posts/${onePost._id}/edit`}>
                                                    <h2>Edit</h2>
                                                </Link>

                                            </div>

                                        </>
                                    ))
                            }
                        </Item>
                    </Grid>
                    <Grid item xs>
                        <h4>hrerehreh</h4>
                    </Grid>
                </Grid>
            </>
        </div>

    )

}

export default AllPosts;