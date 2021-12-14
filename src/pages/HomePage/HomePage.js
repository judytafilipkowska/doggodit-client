import SignupBox from "../../components/SignupBox/SignupBox";
import LoginBox from "../../components/LoginBox/LoginBox";
import Feed from "../../components/Feed/Feed";
import EditBox from "../../components/EditBox/EditBox";



function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>

      <div>
        <LoginBox />
        <Feed />
      </div>
    </div>
  );
}

export default HomePage;