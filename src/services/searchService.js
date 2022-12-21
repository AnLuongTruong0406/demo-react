import { get } from "../utils/axiosInstance";

export const getSearch = async (q, type = "less") => {
  try {
    const res = await get("users/search", {
      params: {
        q,
        type,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
