import { FriendListItem } from 'components/FriendList/FriendListItem'
import PropTypes from 'prop-types';
import { ListFriend } from './FriendList.styled'
import {Section} from '../Section/Section.styled'


export const FriendList = ({ friends }) => {
    return (
        <Section>
        <ListFriend >
            {friends.map(({ avatar, name,id,isOnline }) => 
                <FriendListItem key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline} />
           )}
            </ListFriend>
             </Section>
)
}

FriendList.propTypes = {
    friends:PropTypes.arrayOf(
        PropTypes.exact({
        avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    }),)
}

