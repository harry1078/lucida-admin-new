let employeeDetails = [
  //   {
  //     id: 1,
  //     label: "Date*",
  //     type: "date",
  //     placeholder: "Choose Date",
  //     required: true,
  //   },
  {
    id: 1,
    label: "Employee Name*",
    type: "text",
    placeholder: "Ex: Raghav",
    required: true,
  },
  {
    id: 2,
    label: "Designation*",
    type: "text",
    placeholder: "Ex: UX Designer",
    required: true,
  },
  {
    id: 3,
    label: "Date Of Joining*",
    type: "date",
    placeholder: "Choose Date",
    required: true,
  },
];

const empTitle = "Employee Details";

const empSubTitle =
  "Fill in the details of the employee to generate the appointment letter.";

export { employeeDetails, empTitle, empSubTitle };
