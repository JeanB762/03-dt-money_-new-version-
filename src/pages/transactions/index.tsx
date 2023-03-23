import { useContext } from 'react';
import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import { TransactionContext } from '../../context/TransactionsContext';
import { SearchForm } from './Components/SearchForm';
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles';

export function Transactions() {
  const { transactions } = useContext(TransactionContext);
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width='40%'>{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {`R$ ${transaction.price}`}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>{transaction.createdAt}</td>
                </tr>
              );
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
