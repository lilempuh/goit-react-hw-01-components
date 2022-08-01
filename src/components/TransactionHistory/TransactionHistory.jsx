import PropTypes from 'prop-types';
import { Section } from '../Section/Section.styled'
import {TransactionTable,TransactionHead,TransactionInfo,TransactionRow} from './TransactionHistory.styled'

export const TransactionHistory = ({items}) => {
  return (
      <Section>
<TransactionTable>
  <TransactionHead>
    <TransactionRow>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </TransactionRow>
  </TransactionHead>

            <tbody>{items.map(({ id, type, amount, currency }) => (
                <TransactionRow key={id}>
      <TransactionInfo>{type}</TransactionInfo>
    <TransactionInfo>{amount}</TransactionInfo>
    <TransactionInfo>{currency}</TransactionInfo>
    </TransactionRow>)
    )}
   
   
  </tbody>
      </TransactionTable>
      </Section>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }),)
    
}