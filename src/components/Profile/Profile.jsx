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
  userData: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
