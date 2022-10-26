import validator from "validator";

export const recomendedPlan = ({
  numberOfKids,
  age,
  monthlyEmis,
  retireAge,
}) => {
  let isValid = true;
  let validationErrors = {};

  if (!validator.isNumeric(numberOfKids)) {
    isValid = false;
    validationErrors = {
      ...validationErrors,
      numberOfKids: "Please ensure this is a number",
    };
  }
  if (!validator.isNumeric(age)) {
    isValid = false;
    validationErrors = {
      ...validationErrors,
      age: "Please ensure this is a number",
    };
  }
  if (!validator.isNumeric(monthlyEmis)) {
    isValid = false;
    validationErrors = {
      ...validationErrors,
      monthlyEmis: "Please ensure this is a number",
    };
  }
  if (!validator.isNumeric(retireAge)) {
    isValid = false;
    validationErrors = {
      ...validationErrors,
      retireAge: "Please ensure this is a number",
    };
  }
  return { isValid, validationErrors };
};
