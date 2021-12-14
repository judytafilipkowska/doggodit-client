import { useContext, useState } from "react";
import postService from '../../../services/post.service';
import fileService from "../../../services/file.service";
import { AuthContext } from "../../../context/auth.context";


// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

function AddPost() {

    const { refreshPost, userId } = useContext(AuthContext);


    // const [tag, setTag] = useState("");

    const [postText, setPostText] = useState("");
    const [postImage, setPostImage] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);
    const [allowSubmit, setAllowSubmit] = useState(false)

    // const handleChange = (e) => {
    //     setTag(e.target.value);

    const handlePostImage = async (e) => {
        try {
            const uploadData = new FormData();
            uploadData.append("image", e.target.files[0])
            const response = await fileService.uploadImage(uploadData);
            setPostImage(response.data.secure_url);
            setAllowSubmit(true);
        } catch (error) {
            setErrorMessage("Something went wrong")
        }
    }
    const handleTextPost = (e) => setPostText(e.target.value);
    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            const requestBody = { postText, postImage, createdBy: userId }

            const response = await postService.createPost(requestBody, userId);
            setPostText("");

            refreshPost(response);
        } catch (error) {
            setErrorMessage("Something went wrong")
        }
    }
    return (
        // <Box sx={{ minWidth: 120 }}>
        //     <h4>Create a post here</h4>
        //     <FormControl fullWidth onSubmit={handleSubmit} >
        //         <InputLabel id="demo-simple-select-label">Tag</InputLabel>
        //         <Select
        //             labelId="demo-simple-select-label"
        //             id="demo-simple-select"
        //             name="tag"
        //             value={tag}
        //             label="Tag"
        //             onChange={handleChange}
        //         >
        //             <MenuItem value={"question"}>question</MenuItem>
        //             <MenuItem value={"showing off"}>showing off</MenuItem>
        //             <MenuItem value={"just sharing"}>just sharing</MenuItem>
        //             <MenuItem value={"help"}>help</MenuItem>
        //         </Select>
        //         <label>Text</label>
        //         <input type="text" name="postText" value={postText} onChange={handleTextPost} />

        //         <label>Add a pic</label>
        //         <input type="file" onChange={handlePostImage} />

        //         <button type="submit">Post it</button>
        //     </FormControl>
        // </Box>


        <div>
            <h4>Create a post here</h4>


            <form onSubmit={handleSubmit}>

                <label>Text</label>
                <input type="text" name="postText" value={postText} onChange={handleTextPost} />

                <label>Add a pic</label>
                <input type="file" onChange={handlePostImage} />

                <button type="submit">Post it</button>
            </form>
        </div>
    );
}


export default AddPost;