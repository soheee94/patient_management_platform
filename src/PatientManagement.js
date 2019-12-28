import React from "react";
import Nav from "./components/PatientManagement/Nav";
import ListContainer from "./components/PatientManagement/ListContainer";
function PatientManagement() {
  return (
    <>
      <Nav />
      <ListContainer />
      <footer>
        ©{" "}
        <a href="http://teamelysium.kr/" target="blank">
          Team Elysium Inc.
        </a>{" "}
        All Rights Reserved.
      </footer>
    </>
  );
}

export default PatientManagement;
