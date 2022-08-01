import PropTypes from 'prop-types';
import { ListFriendImage,ListFriendItem,Online,Offline,FriendName } from './FriendList.styled'

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return (
        <ListFriendItem>
            {isOnline ? <Online /> : <Offline />}
  <ListFriendImage src={avatar} alt="User avatar" width="48" />
<FriendName>{name}</FriendName>
</ListFriendItem>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    
}