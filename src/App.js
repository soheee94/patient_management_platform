import React from "react";
import { Route, Switch } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { darken } from "polished";
import Login from "./Login";
import PatientManagement from "./PatientManagement";

const GlobalStyle = createGlobalStyle`
  body{
    font-size: 14px;
    color: "#333";
    font-family: "Noto Sans KR Regular";
    src: url("./styles/font/NotoSans-Regular.woff2") format("woff2");
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  palette: {
    white: "#fff",
    black: "#333",
    lighterGray: "#f1f3f5",
    lightGray: "#e9ecef",
    gray: "#ccc",
    darkGray: darken("20%", "#ccc"),
    pink: "#e84d6a"
  }
};

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
