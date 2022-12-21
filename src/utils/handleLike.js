import { unlike, like } from "../features/videos/services/postLikeVideoService";

const handleLikeFunc = async (video) => {
  let newVideo;
  if (video && video.is_liked) {
    newVideo = await unlike(video.id);
  } else {
    newVideo = await like(video.id);
  }

  return newVideo;
};

export default handleLikeFunc;
