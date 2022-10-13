import React from "react";
import "./ExperienceLetter.css";

const ExperienceLetter = (props) => {
  return (
    <div className="letter-container">
      <div className="logo-img">
        <img src={"./images/logo.png"} width={"100%"} alt="Company Logo" />
      </div>
      <div className="top-container">
        <h1 className="main-title">Relieving / Experience Letter</h1>
      </div>
      <div className="paragraph-container">
        <p className="paragraph-content ">
          This is to certify that&nbsp;<strong className="bold-text">Mr. {props.empName ? props.empName : "Employee Name"}&nbsp;(Emp Id -&nbsp;{props.empId ? props.empId : "Employee ID"})&nbsp;</strong>
          was working with us as our employee&nbsp;<strong className="bold-text">{props.dateOfJoining ? props.dateOfJoining : "Date of Joining"}</strong>
          to&nbsp;<strong className="bold-text">{props.dateOfRelieving ? props.dateOfRelieving : "Date of Relieving"}.</strong>
        </p>
      </div>
      <div className="paragraph-container">
        <p className="paragraph-content">
          His last designation with us was&nbsp;<strong className="bold-text">{props.designation ? props.designation : "Designation"}.</strong>
        </p>
      </div>
      <div className="paragraph-container">
        <p className="paragraph-content">
          <strong className="bold-text">Mr. {props.empName ? props.empName : "Employee Name"}</strong>&nbsp;is relieved from the services of&nbsp;
          <strong className="bold-text">Lucida Technologies</strong> effective e.o.d&nbsp;
          <strong className="bold-text">{props.dateOfRelieving ? props.dateOfRelieving : "Date of Relieving"}.</strong>
        </p>
      </div>
      <div className="paragraph-container">
        <p className="paragraph-content">
          He left the services with us, on own accord, and we wish him all the very best for his future.
        </p>
      </div>
      <div>
        <p className="paragraph-text">Regards,</p>
        <div className="sign-container">
          {props.authSign && (
            <img
              src={props.authSign}
              width={"100%"}
              alt="Authorised Signatory"
            />
          )}
        </div>
        <p className="paragraph-text">
          <strong className="bold-text">Authorised Signatory</strong>
          <p>Lucida-Bangalore</p>
        </p>
      </div>
    </div>
  );
};

export default ExperienceLetter;
