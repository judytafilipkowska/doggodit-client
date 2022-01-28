import "./SignupBox.css"
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
        <div className="signup-box">
            <h1>Sign Up</h1>

            <form onSubmit={handleSignupSubmit}>

                <input type="text" name="email" placeholder="Email" value={email} onChange={handleEmail} />

                <input

                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePassword}
                />


                <input type="text" name="name" placeholder="Name" value={name} onChange={handleName} />

                {/* <label>Picture:</label> */}
                {/* <input type="file" value={image} onChange={handleImage} /> */}
                {/* <label for="files" className="button">Select picture</label>
                <input id="files" style={{ display: "none" }} type="file" value={image} onChange={handleImage} /> */}

                <button type="submit">Sign Up</button>
            </form>

            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <p>Already have account?</p>
            <Link to={"/"}> Login here</Link>
        </div>
    );
}

export default SignupBox;
