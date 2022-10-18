import PropTypes from 'prop-types';
import {
  Wrapper,
  StatsInfo,
  Avatar,
  Name,
  Tag,
  Location,
  StatsInfoItem,
  Quantity,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  view,
  likes,
}) => {
  return (
    <Wrapper>
      <div className="description">
        <Avatar src={avatar} alt="User avatar" className="avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location className="location">{location}</Location>
      </div>

      <StatsInfo>
        <StatsInfoItem>
          <span className="label">Followers</span>
          <Quantity className="quantity">{followers}</Quantity>
        </StatsInfoItem>
        <StatsInfoItem>
          <span className="label">Views</span>
          <Quantity className="quantity">{view}</Quantity>
        </StatsInfoItem>
        <StatsInfoItem>
          <span className="label">Likes</span>
          <Quantity className="quantity">{likes}</Quantity>
        </StatsInfoItem>
      </StatsInfo>
    </Wrapper>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  view: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
