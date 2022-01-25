
import LoginBox from "../../components/LoginBox/LoginBox";
import Feed from "../../components/Feed/Feed";
import ProfileBox from "../../components/ProfileBox/ProfileBox";
import DogBox from "../../components/DogBox/DogBox";
import { AuthContext } from "../../context/auth.context";
import { useContext } from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import IsAnon from "../../components/IsAnon/IsAnon";





function HomePage() {
  const { isLoggedIn, user } = useContext(AuthContext);


  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return isLoggedIn ? (
    <>

      <Grid container spacing={3}>
        <Grid item xs >

          <Item style={{ overflow: "auto", height: 1200, backgroundColor: "#ca90db6f" }}><ProfileBox /></Item>

        </Grid>

        <Grid item xs={6}>
          <Item style={{ overflow: "auto", height: 1200, backgroundColor: "#ca90db6f" }}> <Feed /></Item>
        </Grid>
        <Grid item xs>
          <Item style={{ overflow: "auto", height: 1200, backgroundColor: "#ca90db6f" }}>
            <DogBox />
          </Item>
        </Grid>
      </Grid>
    </>
  ) : (
    <>

      <Grid container spacing={3}>
        <Grid item xs>

          <Item style={{ overflow: "auto", height: 1200, backgroundColor: "#ca90db6f" }}><LoginBox /></Item>

        </Grid>

        <Grid item xs={6}>
          <Item style={{ overflow: "auto", height: 1200, backgroundColor: "#ca90db6f" }}> <Feed /></Item>
        </Grid>
        <Grid item xs>
          <Item style={{ overflow: "auto", height: 1200, backgroundColor: "#ca90db6f" }}>
            <DogBox />
          </Item>
        </Grid>
      </Grid>
    </>
  )
};

export default HomePage;

