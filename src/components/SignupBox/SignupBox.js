
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import authService from "../../services/auth.service";
import fileService from "../../services/file.service";


function SignupBox() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);
    const navigate = useNavigate();

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleName = (e) => setName(e.target.value);
    const handleImage = async (e) => {
        try {
            const uploadData = new FormData();
            uploadData.append("image", e.target.files[0])
            const response = await fileService.uploadImage(uploadData);

            setImage(response.data.secure_url);

            return
        } catch (error) {
            setErrorMessage("Something went wrong")
        }
    }

    const handleSignupSubmit = async (e) => {
        try {
            e.preventDefault();
            const requestBody = { email, password, name };


            await authService.signup(requestBody);
            navigate("/login");
        } catch (error) {
            setErrorMessage("Something went wrong");
        }
    };

    return (
        <div className="SignupPage">
            <h1>Sign Up</h1>

            <form onSubmit={handleSignupSubmit}>
                <label>Email:</label>
                <input type="text" name="email" value={email} onChange={handleEmail} />

                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handlePassword}
                />

                <label>Name:</label>
                <input type="text" name="name" value={name} onChange={handleName} />

                <label>Picture:</label>
                <input type="file" value={image} onChange={handleImage} />


                <button type="submit">Sign Up</button>
            </form>

            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <p>Already have account?</p>
            <Link to={"/login"}> Login</Link>
        </div>
    );
}

export default SignupBox;
