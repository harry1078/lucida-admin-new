import React, { useState } from "react";
import {
  employeeDetails,
  empSubTitle,
  empTitle,
} from "../Components/FormInput/ConfirmFormInputHelper";
import FormInput from "../Components/FormInput/FormInput";
import ConfirmationLetter from "../Templates/ConfirmationLetter";
import Button from "../UI/Button";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "../Pages/ExperienceLetterPage/ExperienceLetterPageStyling.css";

export const ConfirmationLetterPage = () => {
  const [empName, setEmpName] = useState();
  const [empNum, setNum] = useState();
  const [designation, setDesignation] = useState();
  const [dateOfJoining, setDateOfJoining] = useState();
  const [showPreview, setShowPreview] = useState(false);

  function handleOnChange(valueFrom, value) {
    if (valueFrom === 1) {
      setEmpName(value);
    }
    if (valueFrom === 2) {
      setNum(value);
    }
    if (valueFrom === 3) {
      let date = new Date(value).toLocaleDateString("en-GB"); //12-10-2022
      setDateOfJoining(date);
    }
    if (valueFrom === 4) {
      setDesignation(value);
    }
  }

  //pdf generation functionality
  const printDocument = () => {
    const input = document.getElementById("container-to-print");
    console.log(input);
    html2canvas(input, {
      onclone: (pdfument) => {
        pdfument.getElementById("divToDownload").style.visibility = "hidden";
      },
    }).then((canvas) => {
      var doc = new jsPDF("p", "mm");
      var imgData = canvas.toDataURL("image/png");
      var imgWidth = doc.internal.pageSize.width;
      var pageHeight = doc.internal.pageSize.height;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;

      var position = 0;

      doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        // doc.addPage();
        doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      doc.save("Confirmation Letter");
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
          </div>
          <div className="preview-content">
            <Button
              className="preview-button"
              onClick={() => setShowPreview(true)}
            >
              Preview
            </Button>
            <ConfirmationLetter
              empName={empName}
              empNum={empNum}
              dateOfJoining={dateOfJoining}
              designation={designation}
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
              <ConfirmationLetter
                empName={empName}
                empNum={empNum}
                dateOfJoining={dateOfJoining}
                designation={designation}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
