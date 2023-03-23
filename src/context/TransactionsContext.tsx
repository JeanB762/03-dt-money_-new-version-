import { Children, createContext, ReactNode, useEffect, useState } from 'react';

interface ITransaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}

interface TransactionContextType {
  transactions: ITransaction[];
}

interface TransactionProviderProps {
  children: ReactNode;
}

export const TransactionContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([]);

  async function loadTransactions() {
    const response = await fetch('http://localhost:3001/transactions');
    const data = await response.json();

    setTransactions(data);
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        transactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}
