import React from 'react'
import { Typography, Button, AppBar, Card, CardContent, CardActions, CardMedia, CssBaseline, Grid, Toolbar, Container } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';

export default function ProfileBox() {
  return (
      <Container>

          <CssBaseline />

          <Grid container justifyContent="center" sx={{ marginTop: '50px', marginBottom: '50px' }}>
              <Card sx={{ width: '100%', padding: '20px' }}>
                  <Grid item>
                      <Avatar justifyContent="center" sizes="500px" sx={{ bgcolor: deepPurple[500], width: 100, height: 100, marginRight: "15px" }}>JS</Avatar>
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
  )
}
