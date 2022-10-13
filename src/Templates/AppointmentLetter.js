import React from "react";
import "./ExperienceLetter.css";
import Button from "../UI/Button";
import Table from "./Tables/Table";

const AppointmentLetter = (props) => {
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
      <div id="confirm-letter-container" className="exp-letter-container">
        <div className="top-container">
          <div className="img-logo align-right">
            <img src={"./images/logo.png"} width={"120px"} alt="Company Logo" />
          </div>
          <p className="email-text align-right">
            <strong className="email-text-highlighted">CompanyEmail</strong>
          </p>
          <br />
          <br />
        </div>

        <div className="paragraph-container">
          <p className="paragraph-content">
            <strong>Date: </strong> {props.dateOfJoining} <br />
            <br />
            <strong>Name: </strong> {props.empName} <br />
          </p>
        </div>
        <div className="paragraph-container">
          <h1 className="main-title appoint-title">
            Sub:-Appointment/Offer Letter and Terms of Employment
          </h1>
        </div>

        <div className="paragraph-container">
          <p className="paragraph-content ">
            Dear {props.empName}, <br />
            <br />
            We are pleased to offer you the position of{" "}
            <strong className="bold-text">
              {props.designation ? props.designation : "designation"}
            </strong>
            , with{" "}
            <strong className="bold-text">
              Lucida Technologies Pvt Ltd, (the “Company")-Bangalore.
            </strong>
            <br />
            <br />
          </p>
          <p className="paragraph-content">
            This offer letter is subject to work output, fulfilling the
            technical capability to the satisfaction and due satisfactory
            background check.
          </p>
        </div>

        <p
          className="paragraph-content"
          style={{ textDecoration: "underline" }}
        >
          The terms and conditions of your employment with the Company are as
          follows:-
        </p>

        <br />

        <div className="employment-text">
          <ol>
            <li className="paragraph-text">
              Your annual Salary <strong>CTC</strong> and breakup can be found
              in <strong>Annexure-1.</strong> (Fixed and Variable)
            </li>
            <br />
            <li className="paragraph-text">
              Your joining the Company will be subject to submission of all the
              mandatory documents listed in <strong>Annexure II.</strong>
            </li>
            <br />
            <li className="paragraph-text">
              You are required to comply with all rules, regulations, code of
              conduct, compliance with requirements related to Intellectual
              Property (IP), confidentiality and IP undertaking and other
              procedures of the Company. You are also required to comply with
              all rules, regulations, procedures, policy, ethics which is in
              place, wherever you would be assigned to work
            </li>
            <br />
            <li className="paragraph-text">
              You will be responsible for performing services for the Company as
              assigned by the Company or Company's clients when deployed at
              client locations.
            </li>
            <br />
            <li className="paragraph-text">
              You are required to join on or before{" "}
              <strong className="bold-text">
                {props.dateOfJoining ? props.dateOfJoining : "DOJ"}
              </strong>{" "}
              and the offer stands withdrawn thereafter, unless the date is
              extended by us and communicated to you in writing
            </li>
            <br />
            <li className="paragraph-text">
              You are required to sign and return the duplicate copy of the
              offer letter as a token of your acceptance
            </li>
            <br />
            <li className="paragraph-text">
              You will be required to provide reports concerning your work
              activities from time to time as requested
            </li>
            <br />
            <li className="paragraph-text">
              You will refrain from engaging directly or indirectly in any
              activity or business transaction for yourself or through any other
              person, with or without any remuneration, direct or indirect,
              contingent or otherwise, which might adversely affect the proper
              discharge of your duties, your obligations to Company or its
              clients.
            </li>
            <br />
            <li className="paragraph-text">
              You shall undertake and agree that you shall not disclose to any
              unauthorized person, or misuse any information including IP,
              methods, algorithm, financial models/information including
              processes, data, concepts, ideas, plans, strategies, analysis,
              surveys, and or proprietary or Client information relating to the
              past, present or anticipated business, disclosed to you by the
              company/client or which becomes known to you in the course of your
              employment.
            </li>
            <br />
            <li className="paragraph-text">
              You shall be accountable for all assets, property, books, papers,
              charts, tools, instruments equipment, lock and key or any other
              property, including those in electronic formats - of the company
              which may be in your possession by the virtue of this appointment
              or in the course of carrying out your duties in the Company
              /client.
            </li>
            <br />
            <li className="paragraph-text">
              You will be bound by the code of conduct and all other rules,
              regulation, policies, procedures and orders issued by the company
              from time in relation to your conduct, discipline and service
              condition such as leave, medical, retirement, dress code, behavior
              etc.
            </li>
            <br />
            <li className="paragraph-text">
              Depending upon the business requirements, you would be currently
              posted within India. However, the company shall be at liberty to
              transfer your services, within India or abroad, to any department,
              establishment or place of work of the company or its clients or to
              its subsidiaries, Joint ventures, Associates or of the concerns in
              which the company has business interest. Consequent to such
              transfers, you shall be governed by the terms and conditions of
              services as applicable to your category of employees in the new
              work place.
            </li>
            <br />
            <li className="paragraph-text">
              <strong className="bold-text">Separation- </strong>
              You are at liberty to terminate your services by giving Three
              months’ notice in writing. The company shall likewise, be at
              liberty to terminate your services by giving{" "}
              <strong className="bold-text">Three months’ notice.</strong>
            </li>

            <br />
            <li className="paragraph-text">
              <strong className="bold-text">
                In addition, a Lucida technology Pvt Ltd reserves the right to
                terminate the contract immediately in the following events.
              </strong>
              <ol className="c">
                <li>
                  A breach in professional conduct and behavior, including
                  discussing the details of this contract with others.
                </li>
                <li>
                  Wrong/False statement of skills sets in the interview or in
                  your resume.
                </li>
                <li>On being accused of any criminal offence.</li>
                <li>
                  On committing any act of dishonesty or misconduct; negligence,
                  or breach of policies or procedure.
                </li>
                <li>On unsatisfactory performance/feedback.</li>
                <li>
                  Upon any discrepancy in the background verification check.
                </li>
                <li>
                  On remaining absent from work for more than 2 working days
                  without notice.
                </li>
              </ol>
            </li>

            <br />
            <li className="paragraph-text">
              You undertake to indemnify Lucida Technologies Pvt Ltd and keep
              the company harmless from all damages against any and all losses,
              claims, damages, cost charges, expenses which company may sustain
              as a result of the following:
              <ol className="c">
                <li>Willful negligence or misconduct.</li>
                <li>Unauthorized act or omission on your part.</li>
                <li>
                  Breach of any of the policies, procedures, rules, regulations,
                  compliance IP violations etc., as described in the clause
                  2,5,6,7,8 mentioned above.
                </li>
              </ol>
            </li>

            <br />
            <li className="paragraph-text">
              On termination of employment or your resignation, you will
              immediately return to the company in good conditions - all assets,
              tools, accessories, formulae, documents, specifications, books,
              etc. of whatever nature in your custody, care or charge and obtain
              clearance from the relevant person(s), office(s), department(s).
              Only on successful completion of the return and on obtaining clear
              no-due certificate from concerned your dues, if any, will be
              settled.
            </li>

            <br />
            <li className="paragraph-text">
              You shall abide by the rules and regulations of the company that
              are in force from time to time and during the period of your
              employment with the company and these will be deemed to form an
              integral part of the contract of employment. The company shall
              have right to add, amend and modify any or all the above terms and
              conditions of services which shall be binding on you. You shall
              keep yourself updated as to the latest changes in any rules,
              regulations, code of conduct etc, of the company.
            </li>

            <br />
            <li className="paragraph-text">
              All{" "}
              <strong className="bold-text">Compensation and Benefits</strong>{" "}
              entitlements are subject to company policies that may be changed
              from time to time and are subject to Govt: rules and regulations.
            </li>

            <br />
            <li className="paragraph-text">
              <strong className="bold-text">Probation Period:</strong>
              You will be on probation for{" "}
              <strong className="bold-text">(3-6) months.</strong> Your
              confirmation will be communicated to you in writing. Lucida
              Technologies Pvt Ltd reserves the right to terminate your
              employment in case your performance, behavior and / or conduct
              during the probation period is found to be unsatisfactory and also
              to extend, cut short the period of probation at this discretion.
              Unless you have received a written communication as to end of
              probation period, it should be assumed that the probation
              continues.
            </li>

            <br />
            <li className="paragraph-text">
              Once offer is accepted and signed you need to report on{" "}
              <strong className="bold-text">
                {props.dateOfJoining ? props.dateOfJoining : "DOJ"}
              </strong>
              , failure to report shall be deemed as{" "}
              <strong className="bold-text">“NO SHOW”.</strong> In such event,
              the offer stands cancelled, and you shall be liable to pay one
              month’s salary as penalty to the company for the loss suffered by
              the company.
            </li>

            <br />
            <li className="paragraph-text">
              <strong className="bold-text">Mobility: </strong>
              Lucida Technologies Pvt Ltd reserves the right to transfer/utilize
              your services at any of its offices, work sites, or associated or
              client companies in India or outside India, on the terms and
              conditions as applicable and you must be flexible for the same.
            </li>

            <br />
            <li className="paragraph-text">
              <strong className="bold-text">Alternative Employment: </strong>
              As a whole-time employee of Lucida Technologies Pvt Ltd, you are
              not permitted to undertake any other business, assume any public
              office, honorary or remunerative, without the written permission
              from the company.
            </li>

            <br />
            <li className="paragraph-text">
              <strong className="bold-text">Confidentiality Agreement: </strong>
              As part of the joining formalities, you are required to sign
              confidentiality agreement, which aims to protect the intellectual
              property rights and business information of Lucida Technologies
              Pvt Ltd and its clients.
            </li>

            <br />
            <li className="paragraph-text">
              <strong className="bold-text">
                Overseas Agreement/ International Assignment Agreement:{" "}
              </strong>
              If you are on international assignment, you will be covered by the
              Lucida Technologies Pvt Ltd International Assignment policy from
              the date of deputation.
            </li>
            <br />
            <li className="paragraph-text">
              <strong className="bold-text">Code of Conduct: </strong>
              You are required to sign the Code of Conduct and follow the same
              in your day to day conduct as an employee of Lucida Technologies
              Pvt Ltd.
            </li>
            <br />
            <li className="paragraph-text">
              <strong className="bold-text">Retirement: </strong>
              You will retire from the services of the Company on reaching the
              age 60 as per the proof of age submitted by you to the company at
              the time of joining.
            </li>
            <br />
            <li className="paragraph-text">
              <strong className="bold-text">Background Check: </strong>
              Your employment will be subject to a background check in line with
              Lucida Technologies Pvt Ltd ‟s background check policy. A
              specially appointed agency will conduct internal and external
              background checks after you join. If the background check reveals
              unfavorable results, you will liable to disciplinary action
              including termination of service without notice by the company
            </li>
            <br />
            <li className="paragraph-text">
              <strong className="bold-text">
                Rules and Regulations of the Company:{" "}
              </strong>
              Your appointment will be governed by the policies, rules,
              regulations, practices, processes and procedures of Lucida
              Technologies Pvt Ltd as applicable to you and the changes therein
              from time to time.
            </li>
            <br />
            <li className="paragraph-text">
              <strong className="bold-text">Compliance to all clauses: </strong>{" "}
              You will be required to fulfill all the terms and conditions
              mentioned in this letter of offer. Any failure to fulfill any term
              and /or condition would entitle Lucida Technologies Pvt Ltd in
              withdrawing this offer letter at its sole discretion.
            </li>
            <br />
            <li className="paragraph-text">
              <strong className="bold-text">Insurance – </strong>You are
              eligible for Self-insurance coverage only after completing one
              month of employment with Lucida Technologies Pvt Ltd.
            </li>
            <br />
            <li className="paragraph-text">
              <strong className="bold-text">Tax Deductions – </strong>Any tax
              liability arising out of the employee’s salary/ allowances/
              benefits shall be borne by the employee. The organization may
              deduct such tax liability or any amounts owed by the employee to
              the Organization from the employee’s salary or from any other
              amounts payable by the Organization to the employee.
            </li>
            <br />
          </ol>
        </div>
        <br />

        <p className="paragraph-content">
          <p>
            <strong style={{ textDecoration: "underline" }}>
              {" "}
              Compensation break-up:
            </strong>
          </p>
          <ul>
            <li>
              Fixed pay: <strong>As mentioned in the Annexure-1</strong>
            </li>
            <li>
              Variable pay <strong>OR</strong> Performance Bonus:{" "}
              <strong>
                As mentioned in the Annexure-1 (If agreed as per offer)
              </strong>{" "}
              - (Paid annually based on performance/ratings)
            </li>
          </ul>
        </p>

        <p className="paragraph-content">
          We congratulate you on your appointment with Lucida Technologies Pvt
          Ltd and wish you a long and successful career with us. We are
          confident that your contribution will take us further in our journey
          towards becoming technology leaders. We assure you of our support for
          your professional development and growth.
        </p>
        <br />
        <br />
        <br />

        <div className="declaration-text">
          <p className="paragraph-text">
            Yours sincerely,
            <br />
            <br />
            <strong>
              Suresh Mallandira <br />
              General Manager, <br />
              Lucida Technologies Pvt Ltd. <br />
            </strong>{" "}
          </p>
        </div>

        <br />

        {/* add tables   */}
        <div className="paragraph-container">
          <Table theadData={"Annexure - 1"} tbodyData={table1} />

          <Table theadData={"CTC-Breakup"} tbodyData={table2} />

          <Table theadData={"Cost Incurred by Company"} tbodyData={table3} />
        </div>

        <br />

        <div className="declaration-note">
          <p className="paragraph-text">
            I have read and understood the content of this employment letter and
            accept all the terms and conditions of the offer and related terms
            and conditions.
          </p>

          <br />
          <p className="paragraph-text">
            I will be joining and reporting Lucida Technologies Pvt Ltd on
            _________.
          </p>
        </div>
        <br />
        <br />
        <br />

        <p className="paragraph-content">
          <strong>Candidate’s Signature</strong>
        </p>

        <br />
        <br />
        <br />

        {/* page 7   */}
        <div className="paragraph-container">
          <p className="paragraph-text">
            <strong>
              <span style={{ textDecoration: "underline" }}>Note:</span> <br />
              <br />
              The following elements are included in the compensation package
              stated above:
            </strong>
          </p>
          <br />
          <p className="paragraph-text">
            Employee's contribution towards PF will be made from the monthly
            salary as defined by Law.
          </p>
          <br />
          <p className="paragraph-text">
            <strong style={{ textDecoration: "underline" }}>
              Provident Fund
            </strong>{" "}
            You will be covered under the Lucida Technologies Private Limited
            Employees' Provident Fund (PF) scheme wherein, the Company will
            contribute towards PF at the statutory rate as may be defined by the
            government from time to time. Your contribution and the Company's
            contribution have been included as a part of the above-mentioned
            compensation.
          </p>
          <br />
          <p className="paragraph-text">
            <strong style={{ textDecoration: "underline" }}>
              Group Medical Insurance
            </strong>{" "}
            In accordance with the Company's policy, you shall be covered under
            the Medical Insurance policy held by the Company.
          </p>
          <br />
          <p className="paragraph-text">
            <strong style={{ textDecoration: "underline" }}>
              Group Personal Accident Insurance
            </strong>{" "}
            You shall be covered under the Personal Accident Insurance Policy
            held by the Company.
          </p>
          <br />
          <p className="paragraph-text">
            <strong style={{ textDecoration: "underline" }}>
              Annual Leave/Public Holidays-
            </strong>{" "}
            You will be eligible for annual leaves and public holidays as
            determined by the Company's Leave Policy which is subject to change
            from time to time.
          </p>
          <br />
          <p className="paragraph-text">
            Your employment is inter alia based on the information furnished by
            you to the Company including declarations and undertakings thereto.
            If at any time during your employment with the Company, the Company
            discovers that you have furnished any false, fake, forged
            information (including documentation) for securing employment with
            the Company or otherwise failed to disclose any information about
            your past employment, the Company reserves the right to take
            disciplinary action against you, including, but not limited to,
            right to terminate your employment without notice and your
            employment with the Company will be void ab-initio.
          </p>
        </div>
        <br />
        <br />
        <br />
        {/* end of page 7 */}
        {/*page 8 */}
        <div className="paragraph-container">
          <h1 className="main-title appoint-title">ANNEXURE II</h1>
        </div>

        <br />

        <div className="paragraph-container">
          <div className="paragraph-text">
            <p>
              <strong style={{ textDecoration: "underline" }}>
                On boarding details REQUIRED DOCUMENTATION
              </strong>
            </p>
            <ul>
              <li>All Educational Certificates</li>
              <li>Relieving letter from all previous employers</li>
              <li>
                Resignation acceptance letter from immediate previous employer
              </li>
              <li>
                Last 3 Months Salary Certificate / Pay slip from immediate
                previous employer.
              </li>
              <li>Form 12B or previous employer Tax computation sheet</li>
              <li>2 Passport size photographs</li>
              <li>Passport copy (visa stamping copy if any)</li>
              <li>Pan Card</li>
              <li>Aadhar Card</li>
              <li>Bank Passbook Copy (front page)</li>
            </ul>
            <p>
              NOTE: Your employment will be subject to the submission and
              receipt of all the documents as mentioned above
            </p>
          </div>
        </div>
        {/* end of page 8 */}
      </div>
    </div>
  );
};

export default AppointmentLetter;
