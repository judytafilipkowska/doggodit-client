import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import HomePage from "./pages/HomePage/HomePage";
// import SignupPage from "./pages/SignupPage/SignupPage";
// import LoginPage from "./pages/LoginPage/LoginPage";
// import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignupBox from "./components/SignupBox/SignupBox";
import LoginBox from "./components/LoginBox/LoginBox";
import ProfileBox from "./components/ProfileBox/ProfileBox";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import EditBox from "./components/EditBox/EditBox";
import AllPosts from "./components/ProfileBox/AllPosts/AllPosts";
import IsPrivate from './components/IsPrivate/IsPrivate';
import IsAnon from "./components/IsAnon/IsAnon";

import EditPost from "./components/ProfileBox/EditPost/EditPost"
import SinglePost from "./components/ProfileBox/SinglePost/SinglePost";


function App() {



  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<IsAnon> <SignupBox /> </IsAnon>} />
        <Route path="/login" element={<IsAnon> <LoginBox /> </IsAnon>} />
        <Route path="/profile" element={<IsPrivate> <ProfileBox /> </IsPrivate>} />
        <Route path="/user/edit" element={<IsPrivate><EditBox /></IsPrivate>} />
        <Route path="/user/posts" element={<IsPrivate><AllPosts /></IsPrivate>} />
        {/* <Route path="/user/posts/:postId" element={<IsPrivate><PostBox /></IsPrivate>} /> */}
        <Route path="/user/posts/:postId" element={<IsPrivate><SinglePost /></IsPrivate>} />
        <Route path="/user/posts/:postId/edit" element={<IsPrivate><EditPost /></IsPrivate>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

    </div>
  );
}

export default App;
