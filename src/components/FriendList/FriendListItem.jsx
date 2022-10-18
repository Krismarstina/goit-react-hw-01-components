import PropTypes from 'prop-types';
import { ListItem, Status } from './FriendListItem.styled';
import { HiEmojiHappy } from 'react-icons/hi';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <ListItem>
      <Status active={isOnline}>
        <HiEmojiHappy />
      </Status>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </ListItem>
  );
};

FriendListItem.prototypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
