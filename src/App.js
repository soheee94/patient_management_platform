import React from "react";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { createMuiTheme } from "@material-ui/core/styles";
import Login from "./pages/Login";
import PatientManagement from "./pages/PatientManagement";
import MeasurementResult from "./pages/MeasurementResult";

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
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/patient" component={PatientManagement} />
        <Route path="/result" component={MeasurementResult} />
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
