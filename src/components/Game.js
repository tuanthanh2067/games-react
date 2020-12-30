import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { resizeImage } from "../utilities";

const Game = ({ game }) => {
  const history = useHistory();
  const clickedHandler = (id) => {
    history.push(`/games/${id}`);
  };

  return (
    <StyledCard onClick={() => clickedHandler(game.id)}>
      <h2>{game.name}</h2>
      <p>{game.released}</p>
      {game.background_image ? (
        // <img src={game.background_image} alt={game.name}></img>
        <img src={resizeImage(game.background_image)} alt={game.name}></img>
      ) : null}
    </StyledCard>
  );
};

const StyledCard = styled.div`
  margin-top: 3rem;
  height: 450px;
  width: 100%;
  text-align: center;
  border-radius: 12px;
  box-shadow: 0px 5px 30px ${({ theme }) => theme.boxShadow};
  cursor: pointer;
  overflow: hidden;
  h2 {
    margin: 0.5rem 0rem;
    font-size: 1.6rem;
  }
  p {
    font-size: 1.35rem;
    margin-bottom: 0.5rem;
  }

  img {
    width: 100%;
    height: 85%;
    object-fit: cover;
  }
`;

export default Game;
