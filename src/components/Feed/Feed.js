import axios from "axios";
import { useState, useEffect } from "react";
import AddPost from "./AddPost/AddPost";
import PostBox from "./PostBox/PostBox";
import postService from "../../services/post.service";

import IsPrivate from "../../components/IsPrivate/IsPrivate";
import IsAnon from "../../components/IsAnon/IsAnon";


function Feed() {

    const [posts, setPosts] = useState([]);
    const [errorMessage, setErrorMessage] = useState(undefined);

    const displayAll = async () => {
        try {
            const response = await postService.displayAll()

            setPosts(response.data);
        } catch (error) {
            setErrorMessage("Something went wrong")
        }
    };
    useEffect(() => {
        displayAll();
    }, []);

    return (
        <div>
            <IsPrivate>
                <h1>Add post </h1>
                <AddPost refreshPost={displayAll} />
            </IsPrivate>


            <h1>Feed</h1>
            {posts.map((post) => (
                <PostBox key={postService._id} post={post} />
            ))}

        </div>

    );
}

export default Feed;