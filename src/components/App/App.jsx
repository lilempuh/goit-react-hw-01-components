import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { Container } from './App.styled';
import user from 'dataBasic/user.json';
import dataa from 'dataBasic/dataa.json';
import friends from 'dataBasic/friends';
import transactions from 'dataBasic/transactions.json';
import { FriendList } from '../FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={dataa} />
      {/* <Statistics stats={dataa} /> */}
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
