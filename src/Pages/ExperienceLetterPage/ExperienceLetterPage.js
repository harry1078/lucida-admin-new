import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React, { useState } from "react";
import FormInput from "../../Components/FormInput/FormInput";
import {
  employeeDetails,
  empSubTitle,
  empTitle,
  hrDetails,
  hrSubTitle,
  hrTitle,
} from "../../Helpers/ExperienceLetterHelper";
import ExperienceLetter from "../../Templates/ExperienceLetter/ExperienceLetter";
import Button from "../../UI/Button";
import "./ExperienceLetterPageStyling.css";

export const ExperienceLetterPage = () => {
  const [detailsType, setDetailsType] = useState(empTitle);
  const [empName, setEmpName] = useState();
  const [empId, setEmpId] = useState();
  const [designation, setDesignation] = useState();
  const [dateOfJoining, setDateOfJoining] = useState();
  const [dateOfRelieving, setDateOfRelieving] = useState();
  const [authSignature, setAuthSignature] = useState();
  const [showPreview, setShowPreview] = useState(false);

  function handleOnChange(valueFrom, value) {
    if (valueFrom === 1) {
      setEmpName(value);
    }
    if (valueFrom === 2) {
      setEmpId(value);
    }
    if (valueFrom === 3) {
      let date = new Date(value).toLocaleDateString("en-GB"); //12-10-2022
      setDateOfJoining(date);
    }
    if (valueFrom === 4) {
      let date = new Date(value).toLocaleDateString("en-GB"); //12-10-2022
      setDateOfRelieving(date);
    }
    if (valueFrom === 5) {
      setDesignation(value);
    }
    if (valueFrom === 6) {
      setAuthSignature(URL.createObjectURL(value[0]));
    }
  }

  //pdf generation functionality
  const printDocument = () => {
    const input = document.getElementById("container-to-print");
    html2canvas(input, {
      onclone: (document) => {
        document.getElementById("divToDownload").style.visibility = "hidden";
      },
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: "a4",
      });
      pdf.addImage(imgData, "JPEG", 0, 10);
      pdf.save("Experience Letter.pdf");
    });
  };

  return (
    <>
      {!showPreview ? (
        <div className="template-container">
          <div className="container hero-container">
            <div className="form-container">
              <div className="title-container">
                <h1 className="title">
                  {detailsType === empTitle ? empTitle : hrTitle}
                </h1>
                <h4 className="sub-title">
                  {detailsType === empTitle ? empSubTitle : hrSubTitle}
                </h4>
              </div>
              {(detailsType === empTitle ? employeeDetails : hrDetails).map(
                (item, index) => (
                  <FormInput
                    key={index}
                    label={item.label}
                    type={item.type}
                    onChange={(e) =>
                      handleOnChange(
                        item.id,
                        item.id === 6 ? e.target.files : e.target.value
                      )
                    }
                    value={item.value}
                    placeholder={item.placeholder}
                    required={item.required}
                    accept={item.accept}
                  />
                )
              )}
            </div>
            <div className="button-container">
              {detailsType != empTitle && (
                <Button
                  onClick={() =>
                    detailsType === hrTitle && setDetailsType(empTitle)
                  }
                >
                  Prev
                </Button>
              )}
              {detailsType != hrTitle && (
                <Button
                  onClick={() =>
                    detailsType === empTitle && setDetailsType(hrTitle)
                  }
                >
                  Next
                </Button>
              )}
            </div>
          </div>
          <div className="preview-content">
            <Button
              className="preview-button"
              onClick={() => setShowPreview(true)}
            >
              Preview
            </Button>
            <ExperienceLetter
              empName={empName}
              empId={empId}
              designation={designation}
              dateOfJoining={dateOfJoining}
              dateOfRelieving={dateOfRelieving}
              authSign={authSignature}
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
              <ExperienceLetter
                empName={empName}
                empId={empId}
                designation={designation}
                dateOfJoining={dateOfJoining}
                dateOfRelieving={dateOfRelieving}
                authSign={authSignature}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
