import { post } from "../../../utils/axiosInstance";

export const like = async (id) => {
  try {
    const res = await post(`videos/${id}/like`, id);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const unlike = async (id) => {
  try {
    const res = await post(`videos/${id}/unlike`, id);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
