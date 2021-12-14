import SignupBox from "../../components/SignupBox/SignupBox";
import LoginBox from "../../components/LoginBox/LoginBox";
import Feed from "../../components/Feed/Feed";
import EditBox from "../../components/EditBox/EditBox";

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';




function HomePage() {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs>
          <Item>  <LoginBox /> </Item>
        </Grid>
        <Grid item xs={6}>
          <Item> <Feed /></Item>
        </Grid>
        <Grid item xs>
          <Item> HERE DOG </Item>
        </Grid>
      </Grid>
    </>
    //      <div>
    //       <h1>Home Page</h1>

    //       <div>
    //         <LoginBox />

    //         <Feed />
    //       </div>
    //     </div> *
    //   );
  )
};

export default HomePage;