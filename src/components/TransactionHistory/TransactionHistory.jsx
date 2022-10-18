import PropTypes from 'prop-types';
import { TransactionHistoryList } from './TransactionHistoryList';
import { TableContainer, TableName } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TableContainer>
      <thead>
        <tr>
          <TableName>Type</TableName>
          <TableName>Amount</TableName>
          <TableName>Currency</TableName>
        </tr>
      </thead>

      {items.map(item => {
        return <TransactionHistoryList key={item.id} item={item} />;
      })}
    </TableContainer>
  );
};

TransactionHistory.prototypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
