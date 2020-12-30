import React from "react";
import styled from "styled-components";
import SearchBar from "../containers/SearchBar";
import Category from "./Category";

const Sidebar = ({ sidebarStatus }) => {
  if (document.documentElement.clientWidth <= 870 && !sidebarStatus) {
    document.body.style.overflow = "hidden"; // get rid of scroll
  } else {
    document.body.style.overflow = "auto"; // display scroll bar
  }

  return (
    <StyledSidebar className={sidebarStatus ? null : "active"}>
      <SearchBar />
      <Category />
    </StyledSidebar>
  );
};

const StyledSidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 350px;
  height: 100%;
  z-index: 10;
  padding: 4rem 1rem;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  box-shadow: 1px 1px 30px ${({ theme }) => theme.boxShadow};
  overflow: auto;
  transform: translateX(-100%);
  transition: all 0.5s ease;
  /* opacity: 0; */
  &.active {
    transform: translateX(0%);
    /* opacity: 1; */
  }
  @media (max-width: 870px) {
    width: 100%;
    padding-top: 10rem;
  }
`;

export default Sidebar;
