import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import PatientManagement from "./PatientManagement";

function App() {
  return (
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
  );
}

export default App;
