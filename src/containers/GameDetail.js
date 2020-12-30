import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { gameDetailsURL, gameScreenshotURL } from "../api";
import Loader from "../components/Loader";
import Detail from "../components/Detail";

const GameDetail = ({ id }) => {
  console.log(id);
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [game, setGame] = useState({});
  const [screenshots, setScreenshots] = useState([]);
  const goBackHandler = () => {
    history.goBack();
  };

  useEffect(() => {
    setIsLoading(true);
    axios.get(gameDetailsURL(id)).then((res) => {
      setGame(res.data);
      setIsLoading(false);
    });
    axios.get(gameScreenshotURL(id)).then((res) => {
      setScreenshots(res.data.results);
    });
  }, [id]);

  return (
    <StyledGameDetail>
      <StyledBack>
        <svg
          onClick={goBackHandler}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        </svg>
        <h2 onClick={goBackHandler}>Games</h2>
      </StyledBack>
      <StyledTitle>Game Detail</StyledTitle>
      <StyledDetail>
        {isLoading ? (
          <Loader />
        ) : (
          <Detail game={game} screenshots={screenshots} />
        )}
      </StyledDetail>
    </StyledGameDetail>
  );
};

const StyledGameDetail = styled.div`
  width: 100%;
  min-height: 100%;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  z-index: 10;
  padding: 1rem;
`;

const StyledBack = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  svg {
    fill: ${({ theme }) => theme.text};
    cursor: pointer;
  }
  h2 {
    color: ${({ theme }) => theme.text};
    cursor: pointer;
  }
`;

const StyledTitle = styled.h1`
  text-align: center;
  font-family: "Audiowide", cursive;
  font-size: 2.5rem;
`;

const StyledDetail = styled.div`
  width: 100%;
  padding: 2.5rem 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default GameDetail;
