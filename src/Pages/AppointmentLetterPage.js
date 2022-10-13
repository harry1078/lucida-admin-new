import React, { useState } from "react";
import FormInput from "../Components/FormInput/FormInput";
import {
  employeeDetails,
  empTitle,
  empSubTitle,
} from "../Components/FormInput/AppointmentFormHelper";
import AppointmentLetter from "../Templates/AppointmentLetter";
import Button from "../UI/Button";
import "../Pages/ExperienceLetterPage/ExperienceLetterPageStyling.css";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const AppointmentLetterPage = () => {
  const [empName, setEmpName] = useState();
  const [designation, setDesignation] = useState();
  const [dateOfJoining, setDateOfJoining] = useState();
  const [showPreview, setShowPreview] = useState(false);

  function handleOnChange(valueFrom, value) {
    if (valueFrom === 1) {
      setEmpName(value);
    }
    if (valueFrom === 2) {
      setDesignation(value);
    }
    if (valueFrom === 3) {
      let date = new Date(value).toLocaleDateString("en-GB"); //12-10-2022
      setDateOfJoining(date);
    }
  }

  const printDocument = () => {
    const input = document.getElementById("container-to-print");
    html2canvas(input, {
      onclone: (pdfdocument) => {
        pdfdocument.getElementById("divToDownload").style.visibility = "hidden";
      },
    }).then((canvas) => {
      var imgData = canvas.toDataURL("image/png");
      var imgWidth = 210;
      var pageHeight = 295;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;

      var doc = new jsPDF("p", "mm");
      var position = 0;

      doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      doc.save("Appointment Letter");
    });
  };

  return (
    <>
      {!showPreview ? (
        <div className="template-container">
          <div className="container hero-container">
            <div className="form-container">
              <div className="title-container">
                <h1 className="title">{empTitle}</h1>
                <h4 className="sub-title">{empSubTitle}</h4>
              </div>
              {employeeDetails.map((item, index) => (
                <FormInput
                  key={index}
                  label={item.label}
                  type={item.type}
                  onChange={(e) => handleOnChange(item.id, e.target.value)}
                  value={item.value}
                  placeholder={item.placeholder}
                  required={item.required}
                />
              ))}
            </div>
            {/* <div className="button-container">
              <Button>Submit</Button>
            </div> */}
          </div>
          <div className="preview-content">
            <Button
              className="preview-button"
              onClick={() => setShowPreview(true)}
            >
              Preview
            </Button>
            <AppointmentLetter
              empName={empName}
              designation={designation}
              dateOfJoining={dateOfJoining}
            />
          </div>
        </div>
      ) : (
        <div className="preview-content">
          <div className="preview-outer-container">
            <div id="container-to-print" className="container-to-print">
              <Button
                id="divToDownload"
                className="preview-button"
                onClick={printDocument}
              >
                Download
              </Button>
              <AppointmentLetter
                empName={empName}
                designation={designation}
                dateOfJoining={dateOfJoining}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
