import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../context/auth.context";
import { useParams, useNavigate } from "react-router";
import userService from "../../../services/user.service";
import ProfileBox from "../ProfileBox";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

function EditPost() {
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    const { user } = useContext(AuthContext);
    const { postId } = useParams();
    const [postText, setPostText] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);
    const navigate = useNavigate();
    const handleTextPost = (e) => setPostText(e.target.value);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await userService.onePostOfCurrentUser(postId);
                const onePost = response.data;
                setPostText(onePost.postText);
            } catch (error) {
                setErrorMessage("Something went wrong")
            }
        };
        fetchData();
    }, [postId])

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            const requestBody = { postText }

            const response = await userService.editOnePostOfCurrentUser(postId, requestBody);
            setPostText(response);

            navigate(`/`);

        } catch (error) {
            setErrorMessage("Something went wrong")
        }
    }

    const deletePost = async () => {
        try {
            const response = await userService.deleteOnePostOfCurrentUser(postId)
            navigate("/profile");
        } catch (error) {
            setErrorMessage("Something went wrong");
        }
    }


    return (
        <div>
            <>
                <Grid container spacing={3}>
                    <Grid item xs>
                        <Item>
                            <ProfileBox /> </Item>
                    </Grid>
                    <Grid item xs={6}>


                        <h4>Edit your post here</h4>
                        <form onSubmit={handleSubmit}>

                            <TextField fullWidth id="outlined-textarea"
                                label="Edit post" name="postText"
                                placeholder="Post..."
                                multiline onChange={handleTextPost} />
                            <Button size="small" type="submit">Save</Button>
                            <Button size="small" onClick={deletePost}>Delete the post</Button>
                        </form>

                    </Grid>
                    <Grid item xs>
                        <Item> HERE DOG </Item>
                    </Grid>
                </Grid>
            </>
        </div>
    );
}

export default EditPost;