import { useState, useEffect } from "react";
import PostBox from "../../Feed/PostBox/PostBox";
import userService from "../../../services/user.service";
import { useNavigate, useParams } from "react-router";
import { Navigate } from "react-router";

import { Link } from "react-router-dom";

function AllPosts() {

    const [posts, setPosts] = useState([]);
    const [errorMessage, setErrorMessage] = useState(undefined);
    const { postId } = useParams();
    const navigate = useNavigate();

    const postsOfCurrentUser = async () => {

        try {
            const response = await userService.postsOfCurrentUser();
            setPosts(response.data);
        } catch (error) {
            setErrorMessage("Something went wrong");
        }
    }

    useEffect(() => {
        postsOfCurrentUser();
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
            <h4>Your posts</h4>

            {posts.map((post) => (
                <>
                    <Link to="/user/posts/:postId">
                        <div className="SignupPage">
                            <PostBox key={post._id} post={post} />
                            <Link to="/user/posts/:postId/edit">
                                <h2>Edit</h2>
                            </Link>
                            <button onClick={deletePost}>Delete</button>
                        </div>
                    </Link>
                </>
            ))}
        </div>
    )

}

export default AllPosts;