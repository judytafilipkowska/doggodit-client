import axios from "axios";
import { useState, useEffect } from "react";
import AddPost from "./AddPost/AddPost";
import PostBox from "./PostBox/PostBox";
import postService from "../../services/example.service";
import { getNodeText } from "@testing-library/react";


function Feed() {

    const [posts, setPosts] = useState([]);

    const displayAll = async () => {
        try {
            const response = await postService.displayAll()

            setPosts(response.data);
        } catch (error) {
            console.log(error)
        }
    };
    useEffect(() => {
        displayAll();
    }, []);

    return (
        <div>
            <h1>Feed</h1>
            {posts.map((post) => (
                <PostBox key={postService._id} post={post} />
            ))};
        </div>

    );
}

export default Feed;