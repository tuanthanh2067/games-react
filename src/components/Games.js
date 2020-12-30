import React from "react";
import styled from "styled-components";
import Game from "./Game";

const Games = ({ games }) => {
  return (
    <StyledGames>
      {games.map((game) => (
        <Game game={game} key={game.id} />
      ))}
    </StyledGames>
  );
};

const StyledGames = styled.div`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(470px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 4rem;
  @media (max-width: 530px) {
    grid-template-columns: 1fr;
    grid-row-gap: 1rem;
  }
`;

export default Games;
