import styled from '@emotion/styled'

export const ListFriend = styled.ul`
display: flex;
 flex-direction: column;
align-items: center;
    justify-content: space-between;
   `

export const ListFriendItem = styled.li`
   width:100%;
    padding:4px;
    display: flex;
    align-items: center;
    border: 1px solid black;
    background-color: white;
    &:not(:last-child) {
    margin-bottom: 15px;`

export const ListFriendImage =styled.img`
    width: 40px;
  height: 40px;
  margin-right:10px;`

export const ListFriendStatus = styled.span` 
   height: 15px;
  width: 15px;
  border-radius: 50%;
  border: 2px solid black;
  margin-right:16px;`

  export const Online = styled(ListFriendStatus)`
  background-color:green ;
`;
// ${props => props.theme.colors.green}

export const Offline = styled(ListFriendStatus)`
  background-color:red ;
`;
  
// ${props => props.theme.colors.red}

export const FriendName = styled.p`
font-size: 20px;`