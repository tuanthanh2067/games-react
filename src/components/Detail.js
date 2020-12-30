import React from "react";
import styled from "styled-components";

import playstation from "../assets/img/playstation.svg";
import steam from "../assets/img/steam.svg";
import xbox from "../assets/img/xbox.svg";
import nintendo from "../assets/img/nintendo.svg";
import apple from "../assets/img/apple.svg";
import gamepad from "../assets/img/gamepad.svg";

const Detail = ({ game, screenshots }) => {
  const getDevelopers = () => {
    let string = "";
    for (let i = 0; i < game.developers.length; i++) {
      string += game.developers[i].name;
      if (i < game.developers.length - 1) {
        string += ", ";
      }
    }
    return string;
  };
  const getPlatform = (name) => {
    console.log(name);
    switch (name) {
      case "PlayStation 4":
        return playstation;
      case "PlayStation 5":
        return playstation;
      case "Xbox One":
        return xbox;
      case "Xbox Series S/X":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };

  return (
    <>
      <StyledImage src={game.background_image} alt={game.name}></StyledImage>
      <h2>{game.name}</h2>
      <StyledReleasedDate>Released Date: {game.released}</StyledReleasedDate>
      <h3>Developed by: {getDevelopers()}</h3>
      <StyledDescription>{game.description_raw}</StyledDescription>
      <StyledRatingAndPlatform>
        <h1>Rating: {game.rating}</h1>
        <StyledAvailable>
          <h1>Available on:</h1>
          <div>
            {game.platforms.map((platform) => (
              <img
                src={getPlatform(platform.platform.name)}
                alt={platform.platform.name}
                key={platform.platform.id}
              ></img>
            ))}
          </div>
        </StyledAvailable>
      </StyledRatingAndPlatform>
      {game.clip ? (
        <video
          style={{ width: "100%" }}
          src={game.clip.clips.full}
          controls
        ></video>
      ) : null}
      <StyledScreenshots>
        <h1>Game Screenshots</h1>
        {screenshots.map((screenshot) => (
          <img src={screenshot.image} alt={screenshot.id}></img>
        ))}
      </StyledScreenshots>
    </>
  );
};

const StyledImage = styled.img`
  width: 100%;
`;

const StyledDescription = styled.p`
  font-size: 1.4rem;
  margin: 1.5rem 0rem;
`;

const StyledReleasedDate = styled.h3`
  margin: 1.5rem 0rem;
`;

const StyledRatingAndPlatform = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: space-between;
`;

const StyledAvailable = styled.div`
  display: flex;
  align-items: center;
  div {
    margin-left: 0.5rem;
    img {
      margin: 0rem 0.35rem;
    }
  }
`;

const StyledScreenshots = styled.div`
  margin-top: 3rem;
  text-align: center;

  h1 {
    margin-bottom: 0.5rem;
  }

  img {
    width: 100%;
    margin: 1rem 0rem;
  }
`;

export default Detail;
