import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createAt: string;
}

export function TransactionsTable() {
  const [transaction, setTransaction] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransaction(response.data.transactions));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transaction.map((element) => (
            <tr key={element.id}>
              <td>{element.title}</td>
              <td className={element.type}>
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(element.amount)}
              </td>
              <td>{element.category}</td>
              <td>
                {new Intl.DateTimeFormat("en-US").format(
                  new Date(element.createAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
