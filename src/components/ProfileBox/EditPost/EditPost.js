import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../context/auth.context";
import { useParams, useNavigate } from "react-router";
import userService from "../../../services/user.service";


function EditPost() {

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
            navigate("/user/posts")
        } catch (error) {
            setErrorMessage("Something went wrong");
        }
    }


    return (
        <div>
            <h4>Edit your post here</h4>
            <form onSubmit={handleSubmit}>

                <label>Text</label>
                <input type="text" name="postText" value={postText} onChange={handleTextPost} />

                <button type="submit">Save</button>
                <button onClick={deletePost}>Delete the post</button>
            </form>
        </div>
    );
}

export default EditPost;