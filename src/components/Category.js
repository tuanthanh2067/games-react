import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Category = ({ setSearchPattern }) => {
  return (
    <StyledCategory>
      <h1>Category</h1>
      <Link to="/popular-games">
        <h3>Popular Games</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        </svg>
      </Link>
      <Link to="/new-games">
        <h3>New Games</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        </svg>
      </Link>
      <Link to="/upcoming-games">
        <h3>Upcoming Games</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        </svg>
      </Link>
      <Link to="/others">
        <h3>Others (Updating)</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        </svg>
      </Link>
    </StyledCategory>
  );
};

const StyledCategory = styled.div`
  margin-top: 2rem;
  h1 {
    font-size: 2.125rem;
    font-family: "Audiowide", cursive;
  }
  a {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #d4d4d4;
    margin: 1rem 0rem;
    text-decoration: none;
    h3 {
      color: ${({ theme }) => theme.text};
    }
    svg {
      fill: ${({ theme }) => theme.text};
    }
  }
`;

export default Category;
