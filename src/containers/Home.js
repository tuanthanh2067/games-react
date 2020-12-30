import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import {
  popularGamesUrl,
  upcomingGamesUrl,
  newGamesUrl,
  searchGamesURL,
} from "../api";

import Games from "../components/Games";
import Loader from "../components/Loader";

const Home = ({ searchPattern }) => {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState("");

  useEffect(() => {
    setIsLoading(true);

    let func;
    if (searchPattern === "popular-games") {
      func = popularGamesUrl();
      setTitle("Popular Games");
    } else if (searchPattern === "upcoming-games") {
      func = upcomingGamesUrl();
      setTitle("Upcoming Games");
    } else if (searchPattern === "new-games") {
      func = newGamesUrl();
      setTitle("New Games");
    } else if (searchPattern === "others") {
      func = upcomingGamesUrl();
      setTitle("Others Games");
    } else {
      func = searchGamesURL(searchPattern);
      setTitle(searchPattern + " Games");
    }

    axios.get(func).then((res) => {
      setGames(res.data.results);
      setIsLoading(false);
    });
  }, [searchPattern]);

  return (
    <StyledHome>
      <StyledTitle>{title}</StyledTitle>
      {isLoading ? <Loader /> : <Games games={games} />}
    </StyledHome>
  );
};

const StyledHome = styled.div`
  padding: 3rem 1rem 1rem 1rem;
  width: 100%;
  min-height: 100%;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  transition: all 0.5s ease;
  @media (max-width: 870px) {
    padding: 10rem 1rem 1rem 1rem;
  }
`;

const StyledTitle = styled.h1`
  font-family: "Audiowide", cursive;
  font-size: 2.5rem;
`;

export default Home;
