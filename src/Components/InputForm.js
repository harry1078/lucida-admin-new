import React, { useState } from "react";
import Button from "../UI/Button";
import "./InputForm.css";
import PDF from "./PDF";

const InputForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [designation, setDesignation] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const employeeDetails = {
    firstName: "",
    lastName: "",
    designation: "",
  };

  const submitHandler = () => {
    setIsSubmitted(true);
    employeeDetails.firstName = firstName;
    employeeDetails.lastName = lastName;
    employeeDetails.designation = designation;
    employeeDetails.isSubmitted = isSubmitted;

    console.log(employeeDetails);
  };

  return (
    <div className="form-div container">
      {!isSubmitted ? (
        <div className="details-block">
          <h1>Enter Your Details</h1>
          {/* <div className="container"> */}
          <form className="user-form">
            <div className="mb-3 row">
              <label
                htmlFor="firstName"
                className="col-sm-3 col-md-3 col-lg-3 col-3 col-form-label"
              >
                First Name :
              </label>
              <div className="col-sm-9 col-md-9 col-lg-9 col-9">
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
            </div>
            {/* <div>
              <label htmlFor="firstName">First Name : </label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div> */}

            <div className="mb-3 row">
              <label
                htmlFor="lastName"
                className="col-sm-3 col-md-3 col-lg-3 col-3 col-form-label"
              >
                Last Name :
              </label>
              <div className="col-sm-9 col-md-9 col-lg-9 col-9">
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            {/* <div>
              <label htmlFor="lastName">Last Name : </label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div> */}

            <div className="mb-3 row">
              <label
                htmlFor="designation"
                className="col-sm-3 col-md-3 col-lg-3 col-3 col-form-label"
              >
                Designation :
              </label>
              <div className="col-sm-9 col-md-9 col-lg-9 col-9">
                <input
                  type="text"
                  className="form-control"
                  id="designation"
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                />
              </div>
            </div>

            {/* <div>
              <label htmlFor="designation">Designation : </label>
              <input
                type="text"
                id="designation"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
              />
            </div> */}
          </form>

          <div className="submit-button">
            <Button onClick={submitHandler}>SUBMIT</Button>
            {/* <button className="app-btn" type="button" onClick={submitHandler}>Submit</button> */}
          </div>
          {/* </div> */}
        </div>
      ) : (
        <PDF
          firstName={firstName}
          lastName={lastName}
          designation={designation}
        />
      )}
    </div>
  );
};

export default InputForm;
