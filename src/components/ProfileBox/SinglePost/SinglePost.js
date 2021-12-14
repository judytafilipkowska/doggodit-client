import PostBox from "../../Feed/PostBox/PostBox";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import userService from "../../../services/user.service";
import { Link } from "react-router-dom";


function SinglePost() {
    const [post, setPost] = useState([]);
    const [errorMessage, setErrorMessage] = useState(undefined);
    const { postId } = useParams();
    const navigate = useNavigate();

    const onePostOfCurrentUser = async () => {

        try {
            const response = await userService.postsOfCurrentUser();
            setPost(response.data);
        } catch (error) {
            setErrorMessage("Something went wrong");
        }
    }

    useEffect(() => {
        onePostOfCurrentUser();
    }, [])

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

            <>
                <div className="SignupPage">
                    <h5>{post.tag}</h5>
                    <p>{post.postText}</p>
                    <img src={post.postImage} alt="pic-pic" style={{ width: "200px" }} />

                    <Link to="/user/posts/:postId/edit">
                        <h2>Edit</h2>
                    </Link>
                    <button onClick={deletePost}>Delete</button>
                </div>

            </>


        </div >
    );
}

export default SinglePost;