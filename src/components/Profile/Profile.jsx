import PropTypes from 'prop-types';
import {Section} from '../Section/Section.styled'
import {Description, Avatar, NameProfile,ProfileInfo,UserList,UserCard,UserLabel,UserValue} from './Profile.styled'


export const Profile = ({ username, tag, location, avatar, stats}) => {
  return (
    <Section>
      <Description>
        <Avatar
          src={avatar}
          alt="User avatar"
        />
        <NameProfile>{username}</NameProfile>
        <ProfileInfo>{tag}</ProfileInfo>
        <ProfileInfo>{location}</ProfileInfo>
      </Description>

      <UserList>
        <UserCard>
          <UserLabel>Followers</UserLabel>
          <UserValue>{stats.followers}</UserValue>
        </UserCard>
        <UserCard>
          <UserLabel>Views</UserLabel>
          <UserValue>{stats.views}</UserValue>
        </UserCard>
        <UserCard>
          <UserLabel>Likes</UserLabel>
          <UserValue>{stats.likes}</UserValue>
        </UserCard>
      </UserList>
    </Section>)
};

Profile.propTypes = {
            username: PropTypes.string.isRequired,
            tag: PropTypes.string.isRequired,
            location: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
}