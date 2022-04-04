import './App.css';
import { Container} from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import { useState } from 'react';
import EntryLines from './components/EntryLines';

function App() {

  const [entries, setEntries] = useState(initialEntries);

  return (
    <Container>
      <MainHeader title="Budget" type="h1" />
      <DisplayBalance title="Your Balance" value="2,550.53" size="small" />
      <DisplayBalances />
      <MainHeader title="History" type="h3" />
      <EntryLines entries={entries} />
      <MainHeader title="Add new Transaction" type="h3" />
      <NewEntryForm />
    </Container>
  );
}

export default App;

var initialEntries = [
  {
    id: 1,
    description: "Work income",
    value: "$100.00",
    isExpense: false
  },
  {
    id: 2,
    description: "Water bill",
    value: "$20.00",
    isExpense: true
  },
  {
    id: 3,
    description: "Rent",
    value: "$300.00",
    isExpense: true
  },
  {
    id: 3,
    description: "Power bill",
    value: "$50.00",
    isExpense: true
  }
]
