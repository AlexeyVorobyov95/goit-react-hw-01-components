import { Item, StatusIcon, Status, Avatar, Name } from './Friend.styled';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Status>
        <StatusIcon status={isOnline}></StatusIcon>
      </Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

FriendListItem.propTypes = {
friends: PropTypes.arrayOf(
  PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
).isRequired,
};