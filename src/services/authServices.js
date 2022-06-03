import axios from "axios";

export const loginService = async ({ email, password }) => {
  return await axios.post("/api/auth/login", {
    email,
    password,
  });
};

export const singupService = async ({
  email,
  password,
  firstName,
  lastName,
}) => {
  console.log(email, password, firstName, lastName);
  const response = await axios.post("/api/auth/signup", {
    email,
    password,
    firstName,
    lastName,
  });
  console.log(response);
  return response;
};
