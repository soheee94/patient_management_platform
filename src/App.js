import React from "react";
import { Route, Switch } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { createMuiTheme } from "@material-ui/core/styles";
import Login from "./Login";
import PatientManagement from "./PatientManagement";

const GlobalStyle = createGlobalStyle`
  body{
    font-size: 14px;
    color: #333;
    font-family: "Noto Sans KR Regular";
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
const theme = createMuiTheme({
  palette: {
    white: "#fff",
    black: "#333",
    lighterGray: "#f1f3f5",
    lightGray: "#e9ecef",
    gray: "#cccccc",
    darkGray: "#999999",
    pink: "#e84d6a"
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/patient" component={PatientManagement} />
        <Route
          // 404
          render={({ location }) => (
            <div>
              <h2>Not Found 404</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
