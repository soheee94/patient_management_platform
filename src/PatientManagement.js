import React, { useState } from "react";
import Nav from "./components/PatientManagement/Nav";
import Container from "./components/PatientManagement/Container";
import Tutorial from "./components/PatientManagement/Tutorial";
import Footer from "./components/PatientManagement/Footer";
import { PatientsProvider } from "./contexts/PatientContext";
function PatientManagement() {
  const [isTutorialOpen, setTutorialOpen] = useState(false);
  const onTutorialOpen = () => setTutorialOpen(true);
  const onTutorialClose = () => setTutorialOpen(false);
  return (
    <>
      <Nav onTutorialOpen={onTutorialOpen} />
      <PatientsProvider>
        <Container />
      </PatientsProvider>
      <Footer />
      {isTutorialOpen && <Tutorial onClose={onTutorialClose} />}
    </>
  );
}

export default React.memo(PatientManagement);
