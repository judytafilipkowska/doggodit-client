import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import SignupBox from "./components/SignupBox/SignupBox";
import LoginBox from "./components/LoginBox/LoginBox";
import ProfileBox from "./components/ProfileBox/ProfileBox";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import EditBox from "./components/EditBox/EditBox";
import AllPosts from "./components/ProfileBox/AllPosts/AllPosts";
import IsPrivate from './components/IsPrivate/IsPrivate';
import IsAnon from "./components/IsAnon/IsAnon";
import Interactions from "./components/ProfileBox/Interactions/Interactions";
import EditPost from "./components/ProfileBox/EditPost/EditPost"
import SinglePost from "./components/ProfileBox/SinglePost/SinglePost";


function App() {



  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<IsAnon> <SignupBox /> </IsAnon>} />
        {/* <Route path="/login" element={<IsAnon> <LoginBox /> </IsAnon>} />
        <Route path="/profile" element={<IsPrivate> <ProfileBox /> </IsPrivate>} />
        <Route path="/user/edit" element={<IsPrivate><EditBox /></IsPrivate>} />
        <Route path="/user/:userId/posts" element={<IsPrivate><AllPosts /></IsPrivate>} />
        <Route path="/user/posts/:postId" element={<IsPrivate><SinglePost /></IsPrivate>} />
        <Route path="/user/posts/:postId/edit" element={<IsPrivate><EditPost /></IsPrivate>} />
        <Route path="/user/interactions" element={<IsPrivate><Interactions /></IsPrivate>} />
        <Route path="*" element={<ErrorPage />} /> */}
        debugging;
      </Routes>

    </div>
  );
}

export default App;
