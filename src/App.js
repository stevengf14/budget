import './App.css';
import { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import { createStore, combineReducers, combineReducers } from 'redux';
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
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  useEffect(() => {
    let totalIncomes = 0;
    let totalExpenses = 0;
    entries.map((entry) => {
      if (entry.isExpense) {
        return (totalExpenses += Number(entry.value));
      }
      return (totalIncomes += Number(entry.value));
    });
    setTotal(totalIncomes - totalExpenses);
    setExpenseTotal(totalExpenses);
    setIncomeTotal(totalIncomes);
    console.log(`Total incomes are: ${totalIncomes} and total expenses are: ${totalExpenses}`)
  }, [entries]);

  ///
  function entriesReducer(state = initialEntries, action) {
    let newEntries;
    switch (action.type) {
      case 'CREATE_ENTRY':
        newEntries = state.concat({ ...action.payload });
        return newEntries;
      case 'REMOVE_ENTRY':
        newEntries = state.filter((entry) => entry.id !== action.payload.id);
        return newEntries;
      default:
        break;
    }
    return state;
  }

  const combineReducers = combineReducers({
    entries: entriesReducer,
  });

  const store = createStore(combineReducers);

  store.subscribe(() => {
    console.log('store: ', store.getState());
  });

  const payload_add = {
    id: 5,
    description: "Redux bill",
    value: 100.00,
    isExpense: false,
  }

  const payload_remove = {
    id: 1
  }

  function createEntryRedux(payload) {
    return { type: 'CREATE_ENTRY', payload }
  }

  function removeEntryRedux(id) {
    return { type: 'REMOVE_ENTRY', payload: { id } }
  }

  store.dispatch(createEntryRedux(payload_add));
  store.dispatch(removeEntryRedux(1));


  ///

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

  function resetEntry() {
    setDescription('');
    setValue('');
    setIsExpense(true);
  }

  return (
    <Container>
      <MainHeader title="Budget" type="h1" />
      <DisplayBalance title="Your Balance" value={total} size="small" />
      <DisplayBalances
        incomeTotal={incomeTotal}
        expenseTotal={expenseTotal}
      />
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
    value: 100.00,
    isExpense: false
  },
  {
    id: 2,
    description: "Water bill",
    value: 20.00,
    isExpense: true
  },
  {
    id: 3,
    description: "Rent",
    value: 300.00,
    isExpense: true
  },
  {
    id: 4,
    description: "Power bill",
    value: 50.00,
    isExpense: true
  }
]
