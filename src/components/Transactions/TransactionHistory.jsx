import { Table, Title, Head, Tr, Td, Tbody } from './Transactions.styled';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ item }) => {
    return (
      <Table>
        <thead>
          <Head>
            <Title>Type</Title>
            <Title>Amount</Title>
            <Title>Currency</Title>
          </Head>
        </thead>
        <Tbody>
          {item.map(({ id, type, amount, currency }) => {
            return (
              <Tr key={id}>
                <Td>{type}</Td>
                <Td>{amount}</Td>
                <Td>{currency}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    ); 
};

TransactionHistory.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};