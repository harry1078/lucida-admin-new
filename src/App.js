import React from "react";
import InputForm from "./Components/InputForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import { ExperienceLetterPage } from "./Pages/ExperienceLetterPage/ExperienceLetterPage";
import "./App.css";
import OfferLetterPage from "./Pages/OfferLetterPage";
import { ConfirmationLetterPage } from "./Pages/ConfirmationLetterPage";
import { AppointmentLetterPage } from "./Pages/AppointmentLetterPage";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<InputForm />} />
          <Route path="/experience-letter" element={<ExperienceLetterPage />} />
          <Route path="/offer-letter" element={<OfferLetterPage />} />
          <Route
            path="/appointment-letter"
            element={<AppointmentLetterPage />}
          />
          <Route
            path="/confirmation-letter"
            element={<ConfirmationLetterPage />}
          />
          <Route path="/relieving-letter" element={<ExperienceLetterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
