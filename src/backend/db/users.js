import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "test",
    lastName: "test",
    email: "test@gmail.com",
    username: "test_test",
    password: "test123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Anjali",
    lastName: "Deshwani",
    email: "deshwanianjali@gmail.com",
    username: "deshwani_anjali",
    password: "anjali123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
