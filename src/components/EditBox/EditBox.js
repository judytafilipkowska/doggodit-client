import { useEffect, useState, useContext } from "react";
import fileService from "../../services/file.service";
import userService from "../../services/user.service";
import { useNavigate } from "react-router";
import { AuthContext } from './../../context/auth.context'
import ProfileBox from "../ProfileBox/ProfileBox";

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


function EditBox() {

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const [emailUpdate, setEmailUpdate] = useState("");
    const [nameUpdate, setNameUpdate] = useState("");
    const [imageUpdate, setImageUpdate] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);
    const navigate = useNavigate();
    const { user, setUser } = useContext(AuthContext);

    const handleEmailUpdate = (e) => setEmailUpdate(e.target.value);
    const handleNameUpdate = (e) => setNameUpdate(e.target.value);

    const handleImageUpdate = async (e) => {
        try {
            const uploadData = new FormData();
            uploadData.append("image", e.target.files[0]);
            const response = await fileService.uploadImage(uploadData);

            setImageUpdate(response.data.secure_url)
        } catch (error) {
            setErrorMessage("Something went wrong")
        }
    }

    const handleUpdateSubmit = async (e) => {
        try {
            e.preventDefault();
            let email = emailUpdate;
            let name = nameUpdate;
            let image = imageUpdate

            const requestBody = { email, name, image };
            const response = await userService.updateCurrentUser(requestBody);
            setUser(response.data)
            navigate("/profile");
        } catch (error) {
            setErrorMessage("Something went wrong")
        }
    }

    useEffect(() => {
        if (user) {

            setEmailUpdate(user.email);
            setNameUpdate(user.name);
            setImageUpdate(user.image);
        }
    }, [user]);

    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Item>
                        <ProfileBox /> </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <div className="SignupPage">
                            <h2>edit here</h2>

                            <form onSubmit={handleUpdateSubmit}>

                                <label>Email: </label>
                                <input type="text" name="email" value={emailUpdate} onChange={handleEmailUpdate} />

                                <label>Name: </label>
                                <input type="text" name="name" value={nameUpdate} onChange={handleNameUpdate} />

                                <label>Picture: </label>
                                <img src={imageUpdate} width="100px" alt="" />
                                <input type="file" onChange={handleImageUpdate} />


                                <button type="submit">Update</button>
                            </form>
                        </div>
                    </Item>
                </Grid>
                <Grid item xs>
                    <Item> HERE DOG </Item>
                </Grid>
            </Grid>
        </ >
    );
}

export default EditBox;