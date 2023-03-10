import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getListComment, postComment } from "../../services/commentService";
import { getFullName } from "../../../../utils/common";
import Button from "../../../../components/Core/Button";
import Image from "../../../../components/Image";
import Loader from "../../../../components/Core/Loader";
import WrapperAuth from "../../../../components/WrapperAuth";
import styles from "./ListComment.module.scss";
import { FaRegHeart } from "react-icons/fa";
import { config } from "../../../../config";

function ListComment({ video }) {
  const [listComment, setListComment] = useState({});
  const [loading, setLoading] = useState(true);
  const [comment, setComment] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      const result = await getListComment(video.id);
      setListComment(result);

      setLoading(false);
    };

    fetchApi();
  }, [video]);

  const handleComment = async () => {
    const result = await postComment(video.id, {
      comment: comment,
    });
    setComment("");
    setListComment((prev) => [result, ...prev]);

    setLoading(false);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    handleComment();
  };

  return (
    <div className={styles.content_container}>
      <div className={styles.comment_list_container}>
        {!loading ? (
          listComment ? (
            listComment.length > 0 ? (
              listComment.map((comment) => (
                <div className={styles.comment_item_container} key={comment.id}>
                  <div className={styles.comment_content_container}>
                    <Image src={comment.user.avatar} />
                    <div className={styles.comment_container}>
                      <Link
                        to={config.routes.profileLink(comment.user.nickname)}
                        className={styles.account_item}
                      >
                        <p className={styles.comment_user}>
                          {getFullName(comment.user)}
                        </p>
                      </Link>

                      <p className={styles.comment_text}>{comment.comment}</p>
                      <p className={styles.created_at}>{comment.created_at}</p>
                    </div>
                    <div className={styles.action_container}>
                      <div className={styles.like_wrapper}>
                        <div
                          className={
                            comment.is_liked
                              ? `${styles.icon} ${styles.liked}`
                              : `${styles.icon}`
                          }
                        >
                          <FaRegHeart />
                        </div>
                        <span>{comment.likes_count}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className={styles.noti_text}>No comment</p>
            )
          ) : (
            <p className={styles.noti_text}>Please login to see and comment</p>
          )
        ) : (
          <Loader />
        )}
      </div>
      <WrapperAuth>
        <form onSubmit={onFormSubmit}>
          <div className={styles.bottom_comment_container}>
            <input
              type="text"
              placeholder="Add comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <Button type="submit" primary>
              Post
            </Button>
          </div>
        </form>
      </WrapperAuth>
    </div>
  );
}

export default ListComment;
