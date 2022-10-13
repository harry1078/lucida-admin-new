import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./ExperienceLetter.css";
import Button from "../UI/Button";

const ConfirmationLetter = (props) => {

  return (
    <div className="outer-container">
      <div id="confirm-letter-container" className="exp-letter-container">
        <div className="top-container">
          <div className="img-logo align-right">
            <img src={"./images/logo.png"} width={"120px"} alt="Company Logo" />
          </div>

          <p className="email-text align-right">
            <strong className="email-text-highlighted">CompanyEmail</strong>
          </p>
          <h1 className="main-title confirm-title">
            Contract/Probation to FTE confirmation letter
          </h1>
          <br />
          <br />
        </div>

        <div className="paragraph-container">
          <p className="paragraph-content">
            <strong>Employee Name -</strong> {props.empName} <br />
            <br />
            <strong>Employee Number -</strong> {props.empNum} <br />
            <br />
            <strong>Date of joining -</strong> {props.dateOfJoining} <br />
            <br />
            <strong>Designation -</strong> {props.designation}
          </p>
        </div>

        <br />
        <br />

        <div className="paragraph-container">
          <p className="paragraph-content ">
            Dear {props.empName}, <br />
            <br />
            <strong className="bold-text">LUCIDA TECHNOLOGIES PVT LTD</strong>,
            here by confirms that your contract/probation is completed and you
            will be a <strong className="bold-text">Full Time Employee</strong>
            &nbsp;(FTE) effective from &nbsp;
            <strong className="bold-text">
              {props.dateOfJoining ? props.dateOfJoining : "date of joining"}
            </strong>
            , and please treat this letter as official confirmation. 
            <br />
            <br />
            <br />
            <p className="note">
              <strong className="bold-text">
                <span className="confirm-title">Note</span>:- &nbsp; &nbsp;
                &nbsp; (Your designation/role/salary remains the same as
                before).
              </strong>
            </p>
            <br />
            <br />
          </p>
        </div>
        <br />

        <div className="declaration-text">
          <p className="paragraph-text">
            General Manager, <br />
            <br />
            Lucida Technologies, Bengaluru. <br />
            <br />
            Date:
          </p>
          <p className="paragraph-text">
            Employee Name: <br />
            <br />
            Signature:
          </p>
        </div>
        <br />
        <br />
        <img
          className="stamp"
          src={props.cmpStamp ? props.cmpStamp : "./images/stamp.jpg"}
          alt="seal"
        />
      </div>
    </div>
  );
};

export default ConfirmationLetter;
