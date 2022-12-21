import { get, post } from "../../../utils/axiosInstance";

export const getListVideo = async (type = "for-you", page = 1) => {
  try {
    const res = await get("videos", {
      params: {
        type,
        page,
      },
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getVideo = async (id) => {
  try {
    const res = await get(`videos/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const postVideo = async (formData) => {
  try {
    await post("videos", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (err) {
    console.log(err);
  }
};
