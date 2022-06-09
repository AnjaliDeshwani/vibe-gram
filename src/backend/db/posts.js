import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "As you get older, three things happen. The first is your memory goes, and I can’t remember the other two.",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Phobe",
          lastName: "Buffay",
          username: "phobe_buffay",
        },
        {
          _id: uuid(),
          firstName: "Ross",
          lastName: "Geller",
          username: "ross_geller",
        },
      ],
      dislikedBy: [],
    },
    username: "test_test",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "chandler_bing",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: uuid(),
        username: "ross_geller",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "When I’m in social situations, I always hold onto my glass. It makes me feel comfortable and secure and I don’t have to shake hands. :P",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Chandler",
          lastName: "Bing",
          username: "chandler_bing",
        },
        {
          _id: uuid(),
          firstName: "Ross",
          lastName: "Geller",
          username: "ross_geller",
        },
        {
          _id: uuid(),
          firstName: "test",
          lastName: "test",
          username: "test_test",
        },
      ],
      dislikedBy: [],
    },
    username: "deshwani_anjali",
    comments: [
      {
        _id: uuid(),
        username: "ross_geller",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: uuid(),
        username: "deshwani_anjali",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Yeah, well. I don’t try to be awesome. It just comes natural.",
    likes: {
      likeCount: 4,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Chandler",
          lastName: "Bing",
          username: "chandler_bing",
        },
        {
          _id: uuid(),
          firstName: "Ross",
          lastName: "Geller",
          username: "ross_geller",
        },
        {
          _id: uuid(),
          firstName: "test",
          lastName: "test",
          username: "test_test",
        },
      ],
      dislikedBy: [],
    },
    username: "phobe_buffay",
    comments: [
      {
        _id: uuid(),
        username: "chandler_bing",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: uuid(),
        username: "ross_geller",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
    createdAt: "2022-06-06T18:08:40+05:30",
    updatedAt: "2022-06-06T18:08:40+05:30",
  },
  {
    _id: uuid(),
    content: "It's the imperfections that make things beautiful",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Chandler",
          lastName: "Bing",
          username: "chandler_bing",
        },
        {
          _id: uuid(),
          firstName: "Ross",
          lastName: "Geller",
          username: "ross_geller",
        },
      ],
      dislikedBy: [],
    },
    username: "deshwani_anjali",
    comments: [
      {
        _id: uuid(),
        username: "chandler_bing",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
    createdAt: "2022-06-06T18:08:40+05:30",
    updatedAt: "2022-06-06T18:08:40+05:30",
  },
  {
    _id: uuid(),
    content:
      "Life is a succession of lessons which must be lived to be understood",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Chandler",
          lastName: "Bing",
          username: "chandler_bing",
        },
        {
          _id: uuid(),
          firstName: "Ross",
          lastName: "Geller",
          username: "ross_geller",
        },
      ],
      dislikedBy: [],
    },
    username: "chandler_bing",
    comments: [
      {
        _id: uuid(),
        username: "chandler_bing",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: uuid(),
        username: "phobe_buffay",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
    createdAt: "2022-05-06T18:08:40+05:30",
    updatedAt: "2022-06-06T18:08:40+05:30",
  },
  {
    _id: uuid(),
    content:
      "I prefer not to think before speaking. I like being as surprised as everyone else by what comes out of my mouth.",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Chandler",
          lastName: "Bing",
          username: "chandler_bing",
        },
        {
          _id: uuid(),
          firstName: "Ross",
          lastName: "Geller",
          username: "ross_geller",
        },
      ],
      dislikedBy: [],
    },
    username: "mark_darwin",
    comments: [
      {
        _id: uuid(),
        username: "chandler_bing",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: uuid(),
        username: "phobe_buffay",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
    createdAt: "2022-04-04T18:08:40+05:30",
    updatedAt: "2022-04-06T18:08:40+05:30",
  },
  {
    _id: uuid(),
    content:
      "Why don’t you stop worrying about sounding smart and just be yourself.",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Chandler",
          lastName: "Bing",
          username: "chandler_bing",
        },
        {
          _id: uuid(),
          firstName: "Ross",
          lastName: "Geller",
          username: "ross_geller",
        },
      ],
      dislikedBy: [],
    },
    username: "monica_geller",
    comments: [
      {
        _id: uuid(),
        username: "chandler_bing",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: uuid(),
        username: "phobe_buffay",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
    createdAt: "2022-06-04T18:08:40+05:30",
    updatedAt: "2022-06-06T18:08:40+05:30",
  },
  {
    _id: uuid(),
    content: "Unagi is a total state of awareness.",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Chandler",
          lastName: "Bing",
          username: "chandler_bing",
        },
        {
          _id: uuid(),
          firstName: "Ross",
          lastName: "Geller",
          username: "ross_geller",
        },
      ],
      dislikedBy: [],
    },
    username: "ross_geller",
    comments: [
      {
        _id: uuid(),
        username: "chandler_bing",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: uuid(),
        username: "phobe_buffay",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
    createdAt: "2022-06-04T18:08:40+05:30",
    updatedAt: "2022-06-06T18:08:40+05:30",
  },
];
