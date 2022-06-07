import { getUserByUsername } from "../services/userService";
export const getUserFullNameFromUsername = async (username) => {
  let name = { firstName: "", lastname: "" };

  try {
    const { data } = await getUserByUsername(username);
    name.firstName = data.user.firstName;
    name.lastName = data.user.lastName;
  } catch (error) {
    console.error(error);
  }
  return name;
};
