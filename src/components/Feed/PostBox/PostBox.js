import { useEffect } from "react";


function PostBox({ post }) {



    return (
        <div key={post._id}>

            <h5>{post.tag}</h5>
            <p>{post.postText}</p>
            <img src={post.postImage} alt="pic-pic" style={{ width: "200px" }} />
            <h6>{post.createdBy}</h6>

        </div>

    );
}

export default PostBox;