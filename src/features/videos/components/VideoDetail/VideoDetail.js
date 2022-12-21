import React, { memo, useEffect, useState } from "react";
import styles from "./VideoDetail.module.scss";
import Video from "../Video";
import ListComment from "../../../comments/components/ListComment";
import { useParams } from "react-router-dom";
import { getVideo } from "../../services/videosService";
import Loader from "../../../../components/Core/Loader";

function VideoDetail({ data }) {
  const [video, setVideo] = useState(data);
  const params = useParams();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!data) return;
    const fetchApi = async () => {
      const result = await getVideo(params.id);
      setVideo(result);

      setLoading(false);
    };

    fetchApi();
  }, [params.id]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.video_container}>
        <img className={styles.blur} src={video.thumb_url} alt="" />
        <div className={styles.video_wrapper}>
          <div className={styles.video}>
            <Video data={video} />
          </div>
        </div>
      </div>
      <ListComment video={video} />
    </div>
  );
}

export default memo(VideoDetail);
