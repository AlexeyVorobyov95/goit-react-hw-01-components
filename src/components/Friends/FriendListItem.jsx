import { Item, StatusIcon, Status, Avatar, Name } from './Friend.styled';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item class="item">
      <Status class="status">
        <StatusIcon status={isOnline}></StatusIcon>
      </Status>
      <Avatar class="avatar" src={avatar} alt="User avatar" width="48" />
      <Name class="name">{name}</Name>
    </Item>
  );
};

FriendListItem.PropTypes = {
friends: PropTypes.arrayOf(
  PropTypes.exact({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    // id: PropTypes.number.isRequired,
  }),
).isRequired,
};