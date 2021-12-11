function PostBox({ post }) {
    return (
        <div key={post._id}>
            <h5>{post.tag}</h5>
            <p>{post.postText}</p>
            {/* <img src={post.postImage} alt="post-image" /> */}
            <h6>{post.createdBy.populate("name")}</h6>
        </div>
    );
}

export default PostBox;