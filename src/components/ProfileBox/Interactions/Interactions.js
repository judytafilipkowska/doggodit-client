import userService from "../../../services/user.service";
import { useState } from "react";
import { useEffect } from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ProfileBox from "../ProfileBox";


function Interactions() {


    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));


    const [interactions, setInteractions] = useState([]);
    const [errorMessage, setErrorMessage] = useState(undefined);

    useEffect(() => {
        const allInteractions = async () => {
            try {
                const response = await userService.allInteractions()
                console.log(response.data[0])
                setInteractions(response.data[0])
            } catch (error) {
                setErrorMessage("Something went wrong");
            }
        }
        allInteractions();
    }, [])

    return (
        <div>

            <Grid container spacing={3}>
                <Grid item xs>
                    <Item>
                        <ProfileBox /> </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        {interactions.length && interactions.map((interaction) =>
                            interaction.post.postImage ? (
                                <div key={interactions._id}>


                                    <Card sx={{ maxWidth: 700 }}>
                                        <CardHeader
                                            avatar={
                                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                                    <Avatar alt="avatar" src={interaction.post.createdBy.image} />
                                                </Avatar>
                                            }

                                            title={interaction.post.createdBy.name}
                                            subheader={interaction.post.tag}
                                        />
                                        <CardMedia
                                            component="img"
                                            height="400"
                                            image={interaction.post.postImage}
                                            alt="post picture"
                                        />
                                        <CardContent>
                                            <Typography variant="body2" color="text.secondary">
                                                {interaction.post.postText}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </div>
                            ) : (

                                <div key={interactions._id}>
                                    <Card sx={{ maxWidth: 700 }}>
                                        <CardHeader
                                            avatar={
                                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                                    <Avatar alt="avatar" src={interaction.post.createdBy.image} />
                                                </Avatar>
                                            }
                                            title={interaction.post.createdBy.name}
                                            subheader={interaction.post.tag}
                                        />

                                        <CardContent>
                                            <Typography variant="body2" color="text.secondary">
                                                {interaction.post.postText}
                                            </Typography>
                                        </CardContent>

                                    </Card>

                                </div>
                            ))
                        }
                    </Item>
                </Grid>
                <Grid item xs>
                    <h4>hrerehreh</h4>
                </Grid>
            </Grid>
        </div>

    );


}

export default Interactions;