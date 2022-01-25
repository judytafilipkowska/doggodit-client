import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';


function CommentBox({ comment }) {

    return (
        <>
            <Typography paragraph>
                <Avatar alt="avatar" src={comment.addedBy.image} />
                <h6>{comment.addedBy.name}</h6>
                <p>{comment.commentText}</p>
            </Typography>
        </>
    );
}

export default CommentBox;