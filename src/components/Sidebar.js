import React from "react";
import styled from "styled-components";
import SearchBar from "../containers/SearchBar";
import Category from "./Category";

const Sidebar = ({ sidebarStatus }) => {
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
  padding: 4rem 1rem;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  box-shadow: 2px 2px 50px ${({ theme }) => theme.boxShadow};
  overflow: auto;
  transform: translateX(-100%);
  transition: all 0.5s ease;
  opacity: 0;
  &.active {
    transform: translateX(0%);
    opacity: 1;
  }
`;

export default Sidebar;
