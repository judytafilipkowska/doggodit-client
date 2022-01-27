import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";

import authService from "../../services/auth.service";

function LoginBox(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(undefined);

    const { logInUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    const handleLoginSubmit = async (e) => {
        try {
            e.preventDefault();
            const requestBody = { email, password };


            const response = await authService.login(requestBody);

            const token = response.data.authToken;

            logInUser(token);

            navigate("/");
        } catch (error) {
            setErrorMessage("Something went wrong");
        }
    };

    return (
        <div className="LoginBox">
            <h1>Good to see you again!</h1>


            <form onSubmit={handleLoginSubmit}>
                <label>Email:</label>
                <input type="text" name="email" value={email} onChange={handleEmail} />

                <label>Password:</label>
                <input type="password" name="password" value={password} onChange={handlePassword} />

                <button type="submit">Login</button>

            </form>
            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <h3>You don't have an account yet?</h3>
            <Link to={"/signup"}> <span>Sign up here</span></Link>
        </div>
    );
}

export default LoginBox;
