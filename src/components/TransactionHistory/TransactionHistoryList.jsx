import PropTypes from 'prop-types';
import {
  TableData,
  TableDataZebraColor,
} from './TransactionHistoryList.styled';

export const TransactionHistoryList = ({
  item: { type, amount, currency },
}) => {
  return (
    <tbody>
      <TableDataZebraColor>
        <TableData>{type}</TableData>
        <TableData>{amount}</TableData>
        <TableData>{currency}</TableData>
      </TableDataZebraColor>
    </tbody>
  );
};

TransactionHistoryList.prototypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
