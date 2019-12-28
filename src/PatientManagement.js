import React from "react";
import Nav from "./components/PatientManagement/Nav";

function PatientManagement() {
  return (
    <div>
      <Nav />
      <footer>
        ©{" "}
        <a href="http://teamelysium.kr/" target="blank">
          Team Elysium Inc.
        </a>{" "}
        All Rights Reserved.
      </footer>
    </div>
  );
}

export default PatientManagement;
