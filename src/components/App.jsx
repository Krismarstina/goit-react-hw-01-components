import { Profile } from 'components/Profile/Profile';
import user from 'data.json/user';
import { Statistics } from './Statistics/Statistics';
import data from 'data.json/data';
import { FriendList } from './FriendList/FriendList';
import friends from 'data.json/friends';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from 'data.json/transactions';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        view={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
