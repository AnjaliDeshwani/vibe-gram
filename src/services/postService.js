import axios from "axios";

export const getPostsService = async () => {
  return await axios.get("/api/posts");
};

export const createPostService = async ({ postData, token }) => {
  console.log("inside service1");
  // console.log("content", content);
  const response = await axios.post(
    "/api/posts/",
    { postData },
    { headers: { authorization: token } }
  );
  console.log("inside service2");
  console.log(response);
  return response;
};
