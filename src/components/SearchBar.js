import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const SearchBar = () => {
  const [pattern, setPattern] = useState("");
  const history = useHistory();
  console.log("Search bar");

  const submitHandler = (e) => {
    console.log("submit handler");
    e.preventDefault();
    e.currentTarget.reset();
    history.push(`/search/${pattern}`);
  };

  return (
    <form onSubmit={submitHandler}>
      <StyledInputField>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z" />
        </svg>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            setPattern(e.target.value);
          }}
        ></input>
      </StyledInputField>
    </form>
  );
};

const StyledInputField = styled.div`
  width: 100%;
  position: relative;
  height: 40px;

  svg {
    position: absolute;
    top: 50%;
    right: 3%;
    transform: translateY(-50%);
    cursor: pointer;
  }

  input {
    width: 100%;
    height: 100%;
    border-radius: 22px;
    border: 1px solid #3a3a3a;
    color: #3a3a3a;
    outline: none;
    font-size: 1.125rem;
    padding: 0rem 2.25rem 0rem 1rem;
  }
`;

export default SearchBar;
