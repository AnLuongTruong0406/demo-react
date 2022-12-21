import { post } from "../../../utils/axiosInstance";

export const follow = async (id) => {
  try {
    const res = await post(`users/${id}/follow`, id);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const unfollow = async (id) => {
  try {
    const res = await post(`users/${id}/unfollow`, id);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
