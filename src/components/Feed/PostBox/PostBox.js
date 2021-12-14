
function PostBox({ post }) {

    return post.postImage ? (
        <div key={post._id}>

            <h5>{post.tag}</h5>
            <p>{post.postText}</p>
            <img src={post.postImage} alt="pic-pic" style={{ width: "200px" }} />
            {post.comments.map((comment) => {
                return (
                    <>
                        <p>THINGS IN HERE</p>
                        <p>Comment: {comment.commentText}</p>
                    </>
                )
            })}
            <h6>Created By: {post.createdBy.name}</h6>

        </div>

    ) : (
        <div key={post._id}>

            <h5>{post.tag}</h5>
            <p>{post.postText}</p>
            {post.comments.map((comment) => {
                return (
                    <>
                        <p>Comment: {comment.commentText}</p>
                    </>
                )
            })}
            <h6>Created By: {post.createdBy.name}</h6>
            {/* <h6>{name.name}</h6> */}
            {/* <p>comments:{post.comments}</p> */}
            {/* <h6>{post.createdBy}</h6> */}

        </div>

    );
}

export default PostBox;