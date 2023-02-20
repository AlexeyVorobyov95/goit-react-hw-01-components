import user from '../../user.json';
import data from '../../data.json';
import friends from '../../friends.json';
import transactions from '../../transactions';
import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from '../Friends/FriendList';
import { TransactionHistory } from '../Transactions/TransactionHistory';
import { GlobalStyle, Container } from './App.style';

export const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Profile dataUser={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory item={transactions} />
    </Container>
  );
};
