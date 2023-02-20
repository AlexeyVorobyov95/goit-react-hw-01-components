import PropTypes from 'prop-types';

import {
  ProfileContainer,
  Avatar,
  Text,
  ListStats,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = (props) => {
  const { username, tag, location, avatar, stats } = props.userData;
  const { followers, views, likes } = stats;

  return (
    <ProfileContainer>
      <div>
        <Avatar src={avatar} alt="User avatar" width="200" />
        <Text name="name">{username}</Text>
        <Text>@{tag}</Text>
        <Text>{location}</Text>
      </div>

      <ListStats>
        <li>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </li>
        <li>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </li>
        <li>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </li>
      </ListStats>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  userData: PropTypes.exact(
    PropTypes.exact({
      username: PropTypes.string,
      tag: PropTypes.string,
      location: PropTypes.string,
      avatar: PropTypes.string,

      stats: PropTypes.exact({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number,
      }),
    })
  ),
};
