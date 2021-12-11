import { getNodeText } from "@testing-library/react";
import axios from "axios";
import { useState } from "react";
import postService from "../../../services/example.service";


function AddPost({ refreshPost, userId }) {

    const [textPost, setTextPost] = useState("");
    const [postImage, setPostImage] = useState("");

    const handleTexPost = (e) => setTextPost(e.target.value);
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            const requestBody = { tag: "from select", textPost, postImage, createdBy: userId }

            const token = localStorage.getItem('authToken');
            await axios.post(
                `${process.env.REACT_APP_SERVER_URL}/api/posts`, requestBody, { headers: { Authorization: "Bearer " + token } });

            setTextPost("");
            setPostImage("");

            refreshPost();
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <h4>Create a post here</h4>
            <form onSubmit={handleSubmit}>
                <label>Tag:</label>
                <select id="tag" name="tag">
                    <option selected value="question">question</option>
                    <option value="showing off">showing off</option>
                    <option value="just sharing">just sharing</option>
                    <option value="help">help</option>
                </select>

                <input type="text" name="postText" value={textPost} onChange={handleTexPost} />

                <label>Add a pic</label>
                <input type="file" name="postText" accept="image/png, image/jpeg" value={postImage} onChange={setPostImage} />

                <button type="submit">Post it</button>
            </form>
        </div>
    );
}

export default AddPost;