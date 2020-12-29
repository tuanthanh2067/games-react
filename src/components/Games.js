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
  grid-column-gap: 2.75rem;
  grid-row-gap: 4rem;
`;

export default Games;
