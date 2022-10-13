let employeeDetails = [
  {
    id: 1,
    label: "What's the name of the Employee for which you are creating this experience letter/relieving letter?*",
    placeholder: "Ex: Rahul",
    required: true,
  },
  {
    id: 2,
    label: "Employee ID",
    placeholder: "Ex: a123",
    required: true,
  },

  {
    id: 3,
    label: "What's the Date of Joining of the Employee?*",
    type: "date",
    placeholder: "Choose Date",
    required: true,
  },
  {
    id: 4,
    label: "Select the Date of Relieving*",
    type: "date",
    placeholder: "Choose Date",
    required: true,
  },
  {
    id: 5,
    label: "What's the Designation of the Employee?*",
    placeholder: "Ex: Software Developer",
    required: true,
  },
];

let hrDetails = [
  {
    id: 6,
    label: "Upload Authorized Signature",
    type: "file",
    accept: "image/*",
  },
];

const empTitle = "Employee Details";
const hrTitle = "HR Details";

const empSubTitle = "Fill in the details of the employee to generate the experience letter / relieving letter.";
const hrSubTitle = "Please fill the details of HR.";

export {
  employeeDetails,
  hrDetails,
  empTitle,
  hrTitle,
  empSubTitle,
  hrSubTitle,
};
