import React from "react";
import ComplexCard from "../components/ComplexCard";
import { Container } from "@mui/system";
import Artists from '../Artists.json'


export const Home = () => {

  return (
    <>
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