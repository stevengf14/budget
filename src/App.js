import './App.css';
import { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import ModalEdit from "./components/ModalEdit";

function App() {

  const [entries, setEntries] = useState(initialEntries);
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();

  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex((entry) => entry.id === entryId);
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
      resetEntry();
    }
  }, [isOpen]);

  // const deleteEntry = (id) => { }
  function deleteEntry(id) {
    const result = entries.filter(entry => entry.id !== id);
    setEntries(result);
  }

  function editEntry(id) {
    console.log(`edit entry with id ${id}`)
    if (id) {
      const index = entries.findIndex(entry => entry.id === id);
      const entry = entries[index];
      setEntryId(id);
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true);
    }
  }

  function createEntry() {
    const result = entries.concat({ id: entries.length + 1, description, value, isExpense });
    setEntries(result);
    resetEntry();
  }

  function resetEntry(){
    setDescription('');
      setValue('');
      setIsExpense(true);
  }

  return (
    <Container>
      <MainHeader title="Budget" type="h1" />
      <DisplayBalance title="Your Balance" value="2,550.53" size="small" />
      <DisplayBalances />
      <MainHeader title="History" type="h3" />
      <EntryLines
        entries={entries}
        deleteEntry={deleteEntry}
        setIsOpen={setIsOpen}
        editEntry={editEntry} />
      <MainHeader title="Add new Transaction" type="h3" />
      <NewEntryForm
        createEntry={createEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense} />
      <ModalEdit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        createEntry={createEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
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
