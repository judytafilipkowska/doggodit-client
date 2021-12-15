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
import postService from '../../../services/post.service';

// import FavoriteIcon from '@mui/icons-material/favorite';

// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useContext, useState } from 'react';
import { Button } from '@mui/material';
import { AuthContext } from '../../../context/auth.context';
import { useParams } from 'react-router';

function PostBox({ post }) {


    const [commentText, setCommentText] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);
    const { user } = useContext(AuthContext);
    const { userId } = useParams();

    const createComment = async (e) => {
        try {

            const requestBody = { commentText, postId: post._id }
            // addedBy: user._id
            const response = await postService.createComment(requestBody)
            setCommentText(response);
        } catch (error) {
            setErrorMessage("Something went wrong");
        }
    }

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
    return post.postImage ? (
        <Card sx={{ maxWidth: 700 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        <Avatar alt="avatar" src={post.createdBy.image} />
                    </Avatar>
                }
                // action={
                //   <IconButton aria-label="settings">
                //     <MoreVertIcon />
                //   </IconButton>
                // }
                title={post.createdBy.name}
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
                <TextField id="outlined-textarea"
                    label="🖊" name="commentText"
                    placeholder="Comment..."
                    value={commentText}
                    multiline onChange={(e) => setCommentText(e.target.value)} />
                <button type="submit" onClick={createComment}>Add</button>

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

    ) : (
        <Card sx={{ maxWidth: 700 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        <Avatar alt="avatar" src={post.createdBy.image} />
                    </Avatar>
                }
                title={post.createdBy.name}
                subheader={post.tag}
            />

            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {post.postText}
                </Typography>
            </CardContent>
            <CardActions >
                <TextField id="outlined-textarea"
                    label="🖊" name="commentText"
                    placeholder="Comment..."
                    value={commentText}
                    multiline onChange={(e) => setCommentText(e.target.value)} />
                <button type="submit" onClick={createComment}>Add</button>


                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="Comments"
                >
                    💬
                    {/* <ExpandMoreIcon /> */}
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

    )
    // return post.postImage ? (
    //     <div key={post._id}>

    //         <h5>{post.tag}</h5>
    //         <p>{post.postText}</p>
    //         <img src={post.postImage} alt="pic-pic" style={{ width: "200px" }} />
    //         {post.comments.map((comment) => {
    //             return (
    //                 <>
    //                     <p>THINGS IN HERE</p>
    //                     <p>Comment: {comment.commentText}</p>
    //                 </>
    //             )
    //         })}
    //         <h6>Created By: {post.createdBy.name}</h6>

    //     </div>

    // ) : (
    //     <div key={post._id}>

    //         <h5>{post.tag}</h5>
    //         <p>{post.postText}</p>
    //         {post.comments.map((comment) => {
    //             return (
    //                 <>
    //                     <p>Comment: {comment.commentText}</p>
    //                 </>
    //             )
    //         })}
    //         <h6>Created By: {post.createdBy.name}</h6>
    //         {/* <h6>{name.name}</h6> */}
    //         {/* <p>comments:{post.comments}</p> */}
    //         {/* <h6>{post.createdBy}</h6> */}

    //     </div>

    // );
}

export default PostBox;