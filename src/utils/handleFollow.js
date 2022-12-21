import {
  unfollow,
  follow,
} from "../features/accounts/services/postFollowService";

const handleFollowFunc = async (user) => {
  let newUser;
  if (user && user.is_followed) {
    newUser = await unfollow(user.id);
  } else {
    newUser = await follow(user.id);
  }

  return newUser && newUser.is_followed;
};

export default handleFollowFunc;
