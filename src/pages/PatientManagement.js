import React, { useState } from "react";
import Nav from "../components/PatientManagement/Nav";
import FullListContainer from "../components/PatientManagement/FullListContainer";
import Tutorial from "../components/PatientManagement/Tutorial";
import Footer from "../components/Footer";

function PatientManagement() {
  const [isTutorialOpen, setTutorialOpen] = useState(false);
  return (
    <>
      <Nav onTutorialOpen={() => setTutorialOpen(true)} />
      <FullListContainer />
      <Footer />
      {isTutorialOpen && <Tutorial onClose={() => setTutorialOpen(false)} />}
    </>
  );
}

export default PatientManagement;
