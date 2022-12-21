import { get, post } from "../../../utils/axiosInstance";

export const getListComment = async (id) => {
  try {
    const res = await get(`videos/${id}/comments`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const postComment = async (id, comment) => {
  try {
    const res = await post(`videos/${id}/comments`, comment);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
