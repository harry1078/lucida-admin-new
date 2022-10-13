let employeeDetails = [
  {
    id: 1,
    label: "Today's Date*",
    type: "date",
    placeholder: "Choose Date",
    required: true,
  },
  {
    id: 2,
    label:
      "What's the name of the Employee for which you are creating this experience letter?*",
    placeholder: "Ex: Rahul",
    required: true,
  },
  {
    id: 3,
    label: "Gender*",
    placeholder: "Ex: Male",
    required: true,
  },
  {
    id: 4,
    label: "What's the Designation of the Employee?*",
    placeholder: "Ex: UX Designer",
    required: true,
  },

  {
    id: 5,
    label: "What's the Date of Joining of the Employee?*",
    type: "date",
    placeholder: "Choose Date",
    required: true,
  },
  {
    id: 6,
    label: "What's the Employee Service time period?*",
    placeholder: "Eg: 3 years and 2 months",
    required: true,
  },
  {
    id: 7,
    label: "Select the Date of Relieving*",
    type: "date",
    placeholder: "Choose Date",
    required: true,
  },
];

let hrDetails = [
  {
    id: 8,
    label: "What is the name of HR?*",
    placeholder: "Ex: Kavitha",
    required: true,
  },
  {
    id: 9,
    label: "What is the Email ID of HR?*",
    placeholder: "Ex: hr@lucidatechnologies.com",
    required: true,
  },
  {
    id: 10,
    label: "What is the Designation of HR?",
    placeholder: "Ex: HR Manager",
    required: true,
  },
];

let companyDetails = [
  {
    id: 11,
    label: "What's the name of the Company?*",
    placeholder: "Ex: Lucida Technologies Pvt. Ltd.",
    required: true,
  },
  {
    id: 12,
    label: "What's the email address of the company?*",
    placeholder: "Ex: connect@lucidatechnologies.com",
    required: true,
  },
  {
    id: 13,
    label: "What's the Company Tagline? [optional]",
    placeholder: "Ex: Lets Shine Together",
  },
  {
    id: 14,
    label: "Upload the Company Logo [optional]",
    type: "file",
    accept: "image/*",
  },
  {
    id: 15,
    label: "Upload the Company Stamp [optional]",
    type: "file",
    accept: "image/*",
  },
];

const empTitle = "Employee Details";
const hrTitle = "HR Details";
const cmpTitle = "Company Details";

const empSubTitle =
  "Fill in the details of the employee to generate the experience letter.";
const hrSubTitle = "Please fill the details of HR.";
const cmpSubTitle =
  "Fill in the details of the company to generate the experience letter.";

export {
  employeeDetails,
  hrDetails,
  companyDetails,
  empTitle,
  hrTitle,
  cmpTitle,
  empSubTitle,
  hrSubTitle,
  cmpSubTitle,
};
