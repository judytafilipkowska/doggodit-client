import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";


function PostBox({ post }) {

    const [name, setName] = useState(null);
    const { userId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`mongodb://localhost:27017/doggodit/users`)
            setName(response.data)
            console.log(response)
        }
        fetchData();
    }, [userId]
    )




    return (
        <div key={post._id}>

            <h5>{post.tag}</h5>
            <p>{post.postText}</p>
            <img src={post.postImage} alt="pic-pic" style={{ width: "200px" }} />
            {/* <h6>{name.name}</h6> */}

        </div>

    );
}

export default PostBox;