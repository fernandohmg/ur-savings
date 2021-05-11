import { Container } from "./styles";

export function TransactionsTable() {
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
          <tr>
            <td>Web developing</td>
            <td className="deposit">12,000.00</td>
            <td>Developing</td>
            <td>05/15/2021</td>
          </tr>
          <tr>
            <td>Rental</td>
            <td className="withdraw">- 1,100.00</td>
            <td>Home</td>
            <td>05/05/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
