import { useState } from "react";
import ProfileBox from "../../components/ProfileBox/ProfileBox";
import userService from "../../services/user.service";

function ProfilePage() {


  return (
    <div>
      <h1>Profile Page</h1>
      <ProfileBox key={userService._id} />
    </div>
  );
}

export default ProfilePage;