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
import IsPrivate from './components/IsPrivate/IsPrivate';
import IsAnon from "./components/IsAnon/IsAnon";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/profile" element={<IsPrivate> <ProfileBox /> </IsPrivate>} />
        <Route path="/signup" element={<IsAnon> <SignupBox /> </IsAnon>} />
        <Route path="/login" element={<IsAnon> <LoginBox /> </IsAnon>} />
        <Route path="/user/edit" element={<IsPrivate><EditBox /></IsPrivate>} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
