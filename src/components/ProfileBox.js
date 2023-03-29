import React from 'react'
import { Typography, Button, Card, CssBaseline, Grid, Container } from "@mui/material";
import Avatar from '@mui/material/Avatar';


export default function ProfileBox() {
    return (
        <Container justifyContent="center">

            <CssBaseline />

            <Grid container justifyContent="center" sx={{ marginTop: '50px', marginBottom: '50px' }}>
                <Card sx={{ width: '100%', padding: '20px' }}>
                    <Grid justifyContent="center" alignItems="center" item>
                        <Avatar justifyContent="center" alignItems="center" sizes="500px" sx={{ bgcolor: "#6f9283", width: 100, height: 100, margin: "0 auto" }}>JS</Avatar>
                    </Grid>
                    <Grid item>
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            John Smith
                        </Typography>
                    </Grid>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        Hi I'm John Smith and I'm an artist. I love pastels and like to draw pictures of fruit.
                    </Typography>
                    <Grid container spacing={10} justifyContent="center">
                        <Grid item>
                            <Button variant="contained" sx={{ bgColor: "#8d9f87" }}><a href='/'>Sign Out</a></Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" sx={{ bgColor: "#6f9283" }}><a href='/User'>Home</a> </Button>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>



        </Container>
    )
}
