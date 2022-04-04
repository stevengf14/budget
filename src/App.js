import './App.css';
import { Container } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import { useState } from 'react';
import EntryLines from './components/EntryLines';

function App() {

  const [entries, setEntries] = useState(initialEntries);

  // const deleteEntry = (id) => { }
  function deleteEntry(id) {
    const result = entries.filter(entry => entry.id !== id);
    setEntries(result);
  }

  function createEntry(description, value, isExpense) {
    const result = entries.concat({ id: entries.length + 1, description, value, isExpense });
    setEntries(result);
  }

  return (
    <Container>
      <MainHeader title="Budget" type="h1" />
      <DisplayBalance title="Your Balance" value="2,550.53" size="small" />
      <DisplayBalances />
      <MainHeader title="History" type="h3" />
      <EntryLines entries={entries} deleteEntry={deleteEntry} />
      <MainHeader title="Add new Transaction" type="h3" />
      <NewEntryForm createEntry={createEntry} />
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
    id: 4,
    description: "Power bill",
    value: "$50.00",
    isExpense: true
  }
]
