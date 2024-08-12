export const RecordColumns = [
  {
    id: "actions",
    label: "Actions",
    minWidth: 80,
  },
  {
    id: "preview",
    label: "View PDF",
    minWidth: 80,
  },
  {
    id: "name",
    label: "Name",
    minWidth: 150,
  },
  {
    id: "arabic_name",
    label: "Arabic Name",
    minWidth: 150,
  },
  {
    id: "registration_type",
    label: "Registration Type",
    minWidth: 150,
  },
  {
    id: "registration_number",
    label: "Registration Number",
    minWidth: 150,
  },
  {
    id: "dob",
    label: "Date of Birth",
    minWidth: 120,
    align: "left",
    format: (value) => new Date(value).toLocaleDateString("en-US"),
  },
  {
    id: "nationality",
    label: "Nationality",
    minWidth: 150,
  },
  {
    id: "gender",
    label: "Gender",
    minWidth: 100,
    format: (value) => (value === "1" ? "Male" : "Female"),
  },
  {
    id: "passport_number",
    label: "Passport Number",
    minWidth: 150,
  },
  {
    id: "civil_id",
    label: "Civil ID",
    minWidth: 120,
  },
  {
    id: "category",
    label: "Category",
    minWidth: 150,
  },
  {
    id: "medical_validity",
    label: "Medical Validity",
    minWidth: 150,
    align: "left",
    format: (value) => new Date(value).toLocaleDateString("en-US"),
  },
  {
    id: "to",
    label: "Valid Until",
    minWidth: 150,
    align: "left",
    format: (value) => new Date(value).toLocaleDateString("en-US"),
  },
  {
    id: "medical_center",
    label: "Medical Center",
    minWidth: 150,
  },
];
