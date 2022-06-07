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
    following: [
      {
        _id: uuid(),
        firstName: "Anjali",
        lastName: "Deshwani",
        username: "deshwani_anjali",
      },
      {
        _id: uuid(),
        firstName: "Chandler",
        lastName: "Bing",
        username: "chandler_bing",
      },
      {
        _id: uuid(),
        firstName: "Phobe",
        lastName: "Buffay",
        username: "phobe_buffay",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Phobe",
        lastName: "Buffay",
        username: "phobe_buffay",
      },
    ],
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
    following: [
      {
        _id: uuid(),
        firstName: "Ross",
        lastName: "Geller",
        username: "ross_geller",
      },
      {
        _id: uuid(),
        firstName: "Chandler",
        lastName: "Bing",
        username: "chandler_bing",
      },
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Phobe",
        lastName: "Buffay",
        username: "phobe_buffay",
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Mark",
    lastName: "Darwin",
    email: "markdarwin@gmail.com",
    username: "mark_darwin",
    password: "mark123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers: [],
    following: [],
  },
  {
    _id: uuid(),
    firstName: "Chandler",
    lastName: "Bing",
    email: "chandler@gmail.com",
    username: "chandler_bing",
    password: "chandler123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers: [],
    following: [],
  },
  {
    _id: uuid(),
    firstName: "Phobe",
    lastName: "Buffay",
    email: "phobe@gmail.com",
    username: "phobe_buffay",
    password: "phobe123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers: [],
    following: [],
  },
  {
    _id: uuid(),
    firstName: "Monica",
    lastName: "Geller",
    email: "monica@gmail.com",
    username: "monica_geller",
    password: "monica123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers: [],
    following: [],
  },
  {
    _id: uuid(),
    firstName: "Ross",
    lastName: "Geller",
    email: "ross@gmail.com",
    username: "ross_geller",
    password: "ross123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    followers: [],
    following: [],
  },
];
