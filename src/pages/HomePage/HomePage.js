
import LoginBox from "../../components/LoginBox/LoginBox";
import Feed from "../../components/Feed/Feed";

import ProfileBox from "../../components/ProfileBox/ProfileBox";
import { AuthContext } from "../../context/auth.context";
import { useContext } from "react";
import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import DogBox from "../../components/DogBox/DogBox";
import DogCard from "../../components/DogBox/DogCard";




function HomePage() {
  const { isLoggedIn, user } = useContext(AuthContext);


  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    // user ? (
    // <>
    //   <Grid container spacing={3}>
    //     <Grid item xs>

    //       <Item><ProfileBox /></Item>
    //     </Grid>
    //     <Grid item xs={6}>
    //       <Item> <Feed /></Item>
    //     </Grid>
    //     <Grid item xs>
    //       <Item> HERE DOG </Item>
    //       {/* <Item> <DogBox /></Item> */}
    //     </Grid>
    //   </Grid>
    // </>
    //      <div>
    //       <h1>Home Page</h1>

    //       <div>
    //         <LoginBox />

    //         <Feed />
    //       </div>
    //     </div> *
    //   );
    // ) : (
    <>
      <Grid container spacing={3}>
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
    </>)

  // ) */}
};

export default HomePage;