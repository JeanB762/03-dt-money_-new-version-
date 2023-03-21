import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles';

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width='50%'>Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant='income'>R$ 12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>21/03/2023</td>
            </tr>
            <tr>
              <td width='50%'>Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant='income'>R$ 5.320,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>21/03/2023</td>
            </tr>
            <tr>
              <td width='50%'>Compra de PC</td>
              <td>
                <PriceHighlight variant='outcome'>- R$ 6.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>21/03/2023</td>
            </tr>
            <tr>
              <td width='50%'>Despesas</td>
              <td>
                <PriceHighlight variant='outcome'>- R$ 875,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>21/03/2023</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
