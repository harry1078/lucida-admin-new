import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./ExperienceLetter.css";
import { useNavigate } from "react-router-dom";
import Table from "./Tables/Table";
import { Button } from "react-bootstrap";

const OfferLetter = (props) => {
  const table1 = [
    {
      id: "1",
      items: ["Candidate Name: ", props.name ? props.name : "Name"],
    },
    {
      id: "2",
      items: [
        "Designation: ",
        props.designation ? props.designation : "Designation",
      ],
    },
  ];

  const table2 = [
    {
      id: "1",
      items: ["Description ", "Monthly", "Annually"],
    },
    {
      id: "2",
      items: ["CTC ", ` `, ` `],
    },
    {
      id: "3",
      items: ["Basic (30% of CTC) ", ` `, ` `],
    },
    {
      id: "4",
      items: ["HRA (40% of Basic) ", ` `, ` `],
    },
    {
      id: "5",
      items: ["Transport Allowance", ` `, ` `],
    },
    {
      id: "6",
      items: ["Telephone Reimbursement", ` `, ` `],
    },
    {
      id: "7",
      items: ["Medical Allowance ", ` `, ` `],
    },
    {
      id: "8",
      items: ["Special Allowance ", ` `, ` `],
    },
    {
      id: "9",
      items: ["Gross Salary ", ` `, ` `],
    },
  ];

  const table3 = [
    {
      id: "1",
      items: ["Employer's Provident Fund "],
    },
    {
      id: "2",
      items: ["Accident & Medical Insurance "],
    },
    {
      id: "3",
      items: ["ESIC "],
    },
  ];

  return (
    <div className="outer-container">
      <div id="offer-letter-container" className="exp-letter-container">
        <div className="top-container">
          <div className="logo-img">
            <img src="./images/logo.png" width={"120px"} alt="Company Logo" />
          </div>
          <h1 className="main-title">Offer Letter</h1>
          <p>To,</p>
          <span>
            Mr/Miss{" "}
            <strong className="bold-text">
              {props.name ? props.name : "Name"}
            </strong>
          </span>
          <span className="paragraph-container">
            <strong className="bold-text">
              {props.location ? props.location : "location"}
            </strong>
          </span>
        </div>

        <div className="paragraph-container">
          <p className="paragraph-content paragraph-container ">
            Dear{" "}
            <strong className="bold-text">
              {props.name ? props.name : "Name"}
            </strong>
            ,
          </p>

          <p className="paragraph-content paragraph-container">
            Further to your application and the subsequent discussions you had
            with us, we have pleasure to offer you the position of{" "}
            <strong className="bold-text">
              {props.designation ? props.designation : "Designation"}
            </strong>{" "}
            in our company Lucida Technologies Private Limited, Bangalore.
          </p>

          <p className="paragraph-content paragraph-container">
            You are required to join on or before{" "}
            <strong className="bold-text">
              {props.doj ? props.doj : "DOJ"}
            </strong>{" "}
            and the offer stands withdrawn thereafter unless the date is
            extended by us and communicated to you in writing.
          </p>

          <p className="paragraph-content paragraph-container">
            Your annual Salary CTC and breakup can be found in Annexure-1.
          </p>

          <p className="paragraph-content paragraph-container">
            Please send a signed copy of this letter indicating your acceptance
            to join and share resignation acceptance letter from your current
            employer.
          </p>

          <p className="paragraph-content paragraph-container">
            Your Appointment Letter will be issued on the date of joining.
          </p>

          <p className="paragraph-content paragraph-container">
            Please submit the following documents at the time of your joining:
          </p>

          <ul className="paragraph-content paragraph-container">
            <li> Photocopies of your educational documents.</li>
            <li>
              {" "}
              Experience and Relieving letters from your previous companies.
            </li>
            <li> Last 3 months Pay slips of your previous companies</li>
            <li>
              {" "}
              Address Proof and KYC Documents (PAN Card, Aadhar and Passport)
            </li>
            <li> Offer if you hold if any.</li>
          </ul>

          <p className="paragraph-content paragraph-container">
            We look forward to welcoming you aboard.
          </p>
        </div>

        <div className="bottom-container">
          <p className="paragraph-content">Sincerely, </p>
          <p className="paragraph-content">
            For{" "}
            <strong className="bold-text">
              Lucida Technologies Private Limited
            </strong>
          </p>
        </div>

        <div className="paragraph-container">
          <Table theadData={"Annexure - 1"} tbodyData={table1} />

          <Table theadData={"CTC-Breakup"} tbodyData={table2} />

          <Table theadData={"Cost Incurred by Company"} tbodyData={table3} />
        </div>

        <div className="paragraph-container">
          <p className="paragraph-content paragraph-container">
            I will be joining and reporting Lucida Technologies Pvt Ltd on
            ________________.
          </p>
          <p className="paragraph-content paragraph-container">Date: </p>
          <p className="paragraph-content paragraph-container">
            Candidate Name
          </p>
        </div>
      </div>
      {/* <Button id="divToPrint" onClick={printDocument}>Download PDF</Button> */}
    </div>
  );
};

export default OfferLetter;
