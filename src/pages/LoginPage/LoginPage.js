// src/pages/LoginPage.js

import axios from "axios";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Feed from "../../components/Feed/Feed";




import authService from "../../services/auth.service";

function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  // Get the function for saving and verifying the token
  const { logInUser, user } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = async (e) => {
    try {
      e.preventDefault();
      const requestBody = { email, password };

      const authToken = localStorage.getItem("authToken");
      const response = await axios.post(
        "http://localhost:5005/auth/login",
        requestBody,
        { headers: { Authorization: `Bearer ${authToken}` } }
      );

      // or with a service
      // const response = await authService.login(requestBody);

      // Save the token and set the user as logged in ...
      const token = response.data.authToken;
      logInUser(token);

      navigate("/");
    } catch (error) {
      // If the request resolves with an error, set the error message in the state
      setErrorMessage("Something went wrong");
    }

  };

  return !user ? (
    <>

      <Grid container spacing={3}>

        <div className="LoginPage">
          <h1>Login</h1>

          <form onSubmit={handleLoginSubmit}>
            <label>Email:</label>
            <input type="text" name="email" value={email} onChange={handleEmail} />

            <label>Password:</label>
            <input type="password" name="password" value={password} onChange={handlePassword} />

            <button type="submit">Login</button>
          </form>
          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <p>Don't have an account yet?</p>
          <Link to={"/signup"}> Sign Up</Link>
        </div>
        {/* <Grid item xs>
          <Item>  <LoginBox /> </Item>
        </Grid> */}
        <Grid item xs={6}>
          <Item> <Feed /></Item>
        </Grid>
        <Grid item xs>
          <Item> HERE DOG </Item>
        </Grid>
      </Grid>
    </>
  ) : (
    <h1>Already logged in</h1>
  );
}

export default LoginPage;
