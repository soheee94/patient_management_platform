import React, { useState } from "react";
import Nav from "./components/PatientManagement/Nav";
import ListContainer from "./components/PatientManagement/ListContainer";
import Tutorial from "./components/PatientManagement/Tutorial";
function PatientManagement() {
  const [isTutorialOpen, setTutorialOpen] = useState(false);
  const onTutorialOpen = () => setTutorialOpen(true);
  const onTutorialClose = () => setTutorialOpen(false);
  return (
    <>
      <Nav onTutorialOpen={onTutorialOpen} />
      <ListContainer />
      <footer>
        ©{" "}
        <a href="http://teamelysium.kr/" target="blank">
          Team Elysium Inc.
        </a>{" "}
        All Rights Reserved.
      </footer>

      {isTutorialOpen && <Tutorial onClose={onTutorialClose} />}
    </>
  );
}

export default React.memo(PatientManagement);
