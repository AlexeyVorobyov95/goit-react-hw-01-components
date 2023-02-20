import PropTypes from 'prop-types';

import {
  ProfileContainer,
  Avatar,
  Text,
  ListStats,
  Label,
  Quantity,
} from './Profile.style';

export const Profile = ({
  dataUser: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <ProfileContainer class="profile">
      <div class="description">
        <Avatar src={avatar} alt="User avatar" class="avatar" width="200" />
        <Text name="name" class="name">
          {username}
        </Text>
        <Text class="tag">@{tag}</Text>
        <Text class="location">{location}</Text>
      </div>

      <ListStats class="stats">
        <li>
          <Label class="label">Followers</Label>
          <Quantity class="quantity">{followers}</Quantity>
        </li>
        <li>
          <Label class="label">Views</Label>
          <Quantity class="quantity">{views}</Quantity>
        </li>
        <li>
          <Label class="label">Likes</Label>
          <Quantity class="quantity">{likes}</Quantity>
        </li>
      </ListStats>
    </ProfileContainer>
  );
};

Profile.PropTypes = {
  dataUser: PropTypes.arrayOf(
    PropTypes.exact({
      username: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,

      stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
      }),
    }),
  ).isRequired,
};