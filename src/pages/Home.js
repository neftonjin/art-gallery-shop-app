import React from "react";
import ComplexCard from "../components/ComplexCard";
import { Container } from "@mui/system";
import Artists from '../Artists.json'
import Login from "../components/Login";

export const Home = () => {

  return (
    <>
    <Login />
      <Container align="center">
        {Artists.map((artist) => {
          return (
            <ComplexCard
              artist={artist.artist}
              artistAvatar={artist.artistAvatar}
              image={artist.image}
              title={artist.title}
              description={artist.description}
              expandedDescription={artist.expandedDescription}

            >
            </ComplexCard>
          )
        })}


      </Container>
    </>
  )
};