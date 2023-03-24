import React from 'react'
import { Typography, Button, AppBar, Card, CardContent, CardActions, CardMedia, CssBaseline, Grid, Toolbar, Container } from "@mui/material";

export default function ArtCard() {
  return (
      <Grid container spacing={4}>
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
      </Grid>
  )
}
