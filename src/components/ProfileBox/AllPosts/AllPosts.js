import { useState, useEffect, useContext } from "react";
import PostBox from "../../Feed/PostBox/PostBox";
import userService from "../../../services/user.service";
import { useNavigate, useParams } from "react-router";
import { Navigate } from "react-router";
import { AuthContext } from '../../../context/auth.context';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { red } from '@mui/material/colors';

import { Link } from "react-router-dom";

function AllPosts() {


    const [posts, setPosts] = useState([]);
    const [errorMessage, setErrorMessage] = useState(undefined);
    const { postId } = useParams();
    const navigate = useNavigate();

    console.log(postId)

    useEffect(() => {
        const postsOfCurrentUser = async () => {

            try {
                const response = await userService.postsOfCurrentUser();
                setPosts(response.data);
                console.log(response.data);
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
            <h4>Your posts</h4>

            {posts.map((post) =>
                post.image ?
                    (
                        <>

                            <div className="SignupPage">
                                <Link to={`/user/posts/${post._id}`}>
                                    <Card sx={{ maxWidth: 700 }}>
                                        <CardHeader
                                            avatar={
                                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                                    <Avatar alt="avatar" src={post.createdBy.image} />
                                                </Avatar>
                                            } title={post.createdBy.name}
                                            subheader={post.tag}
                                        />
                                        <CardMedia
                                            component="img"
                                            height="400"
                                            image={post.postImage}

                                            alt="post picture"
                                        />

                                        <CardContent>
                                            <Typography variant="body2" color="text.secondary">
                                                {post.postText}
                                            </Typography>
                                        </CardContent>
                                        <CardActions disableSpacing>
                                            <ExpandMore
                                                expand={expanded}
                                                onClick={handleExpandClick}
                                                aria-expanded={expanded}
                                                aria-label="Comments"
                                            >
                                                💬
                                            </ExpandMore>
                                        </CardActions>
                                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                                            <CardContent>
                                                {post.comments.map((comment) => {
                                                    return (
                                                        <>
                                                            <Typography paragraph>
                                                                <Avatar alt="avatar" src={comment.addedBy.image} />
                                                                <h6>{comment.addedBy.name}</h6>
                                                                <p>{comment.commentText}</p>
                                                            </Typography>
                                                        </>
                                                    )
                                                })}

                                            </CardContent>
                                        </Collapse>
                                    </Card>
                                </Link>
                                <Link to={`/user/posts/${post._id}/edit`}>
                                    <h2>Edit</h2>
                                </Link>

                            </div>

                        </>
                    ) : (
                        <>

                            <div className="SignupPage">
                                <Link to={`/user/posts/${post._id}`}>
                                    <Card sx={{ maxWidth: 700 }}>
                                        <CardHeader
                                            avatar={
                                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                                    <Avatar alt="avatar" src={post.createdBy.image} />
                                                </Avatar>
                                            } title={post.createdBy.name}
                                            subheader={post.tag}
                                        />

                                        <CardContent>
                                            <Typography variant="body2" color="text.secondary">
                                                {post.postText}
                                            </Typography>
                                        </CardContent>
                                        <CardActions disableSpacing>
                                            <ExpandMore
                                                expand={expanded}
                                                onClick={handleExpandClick}
                                                aria-expanded={expanded}
                                                aria-label="Comments"
                                            >
                                                💬
                                            </ExpandMore>
                                        </CardActions>
                                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                                            <CardContent>
                                                {post.comments.map((comment) => {
                                                    return (
                                                        <>
                                                            <Typography paragraph>
                                                                <Avatar alt="avatar" src={comment.addedBy.image} />
                                                                <h6>{comment.addedBy.name}</h6>
                                                                <p>{comment.commentText}</p>
                                                            </Typography>
                                                        </>
                                                    )
                                                })}

                                            </CardContent>
                                        </Collapse>
                                    </Card>
                                </Link>
                                <Link to={`/user/posts/${post._id}/edit`}>
                                    <h2>Edit</h2>
                                </Link>

                            </div>

                        </>
                    ))
            }
        </div>
    )

}

export default AllPosts;