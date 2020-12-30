import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Route, Switch, Redirect } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./containers/Home";
import Sidebar from "./components/Sidebar";
import GlobalStyles from "./components/GlobalStyles";
import { useModes } from "./components/useModes";
import { lightTheme, darkTheme } from "./components/Themes";
import GameDetail from "./containers/GameDetail";
import NoPageFound from "./components/NoPageFound";

function App() {
  const [sidebarStatus, setSidebarStatus] = useState(false);
  const [theme, themeToggler] = useModes();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <div className="App">
        <GlobalStyles />
        <Sidebar sidebarStatus={sidebarStatus} />
        <StyledWindow className={sidebarStatus ? null : "active"}>
          <Nav
            sidebarStatus={sidebarStatus}
            setSidebarStatus={setSidebarStatus}
            themeToggler={themeToggler}
            theme={theme}
          />
          <Switch>
            <Route
              path="/"
              exact
              render={() => <Redirect to="popular-games" />}
            />
            <Route
              path="/popular-games"
              render={() => <Home searchPattern="popular-games" />}
            />
            <Route
              path="/new-games"
              render={() => <Home searchPattern="new-games" />}
            />
            <Route
              path="/upcoming-games"
              render={() => <Home searchPattern="upcoming-games" />}
            />
            <Route
              path="/others"
              render={() => <Home searchPattern="others" />}
            />
            <Route
              path="/search/:pattern"
              render={(props) => (
                <Home searchPattern={props.match.params.pattern} />
              )}
            />
            <Route
              path="/games/:id"
              render={(props) => <GameDetail id={props.match.params.id} />}
            />
            <Route component={NoPageFound} />
          </Switch>
        </StyledWindow>
      </div>
    </ThemeProvider>
  );
}

const StyledWindow = styled.div`
  transition: all 0.5s ease;
  height: 100%;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  &.active {
    margin-left: 350px;
  }
  @media (max-width: 870px) {
    &.active {
      margin-left: 0px;
    }
  }
`;

export default App;
