import React from "react";
import { Typography, Button, AppBar, Card, CardContent, CardActions, CardMedia, CssBaseline, Grid, Toolbar, Container } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';




export const Home = () => {

  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]


  return (
    <main>
      <div>

        <Container>

          <CssBaseline />

          <Grid container justifyContent="center" sx={{ marginTop: '50px', marginBottom: '50px' }}>
            <Card sx={{ width: '100%', padding: '20px' }}>
              <Grid item>
                <Avatar justifyContent="center" sizes="500px" sx={{ bgcolor: deepPurple[500],  width: 100, height: 100, marginRight: "15px" }}>JS</Avatar>
                <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                  John Smith
                </Typography>
              
              </Grid>
              <Grid item>

              </Grid>
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Hi I'm John Smith and I'm an artist. I love pastels and like to draw pictures of fruit.
              </Typography>
              <Grid container spacing={10} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">My Art</Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="secondary">Connect</Button>
                </Grid>
              </Grid>
            </Card>
          </Grid>



        </Container>
      </div>


      <Container sx={{ padding: "20px 0" }} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map(() => (

            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ display: "flex", flexDirection: "column", height: "100%", padding: "20px" }}>
                <CardMedia
                  image="https://source.unsplash.com/random"
                  title="image title"
                  sx={{ paddingTop: '56.25%', marginTop: '20px' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5">
                    Painting 1
                  </Typography>
                  <Typography>
                    Here is my favourite painting
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  <Button size="small" color="primary">
                    Like
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

      </Container>
    </main>
  )
};