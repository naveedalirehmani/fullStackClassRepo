import axios from "axios";
import { http } from "../http/http";

export const rickAndMorty = async (currentPageNumber) => {
  const res = await axios.get(
    `https://rickandmortyapi.com/api/character/?page=${currentPageNumber}`
  );

  return res.data;
};

export const userQuery = async () => {
  const res = await http.get("/auth/user");
  return res.data;
};

export const PostsQuery = async () => {
  const res = await http.get("/post/");
  return res.data;
};

export const PostQuery = async (id) => {
  if (!id) return;

  const res = await http.get(`/post/${id}`);
  return res.data;
};
