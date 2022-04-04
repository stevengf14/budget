import './App.css';
import { Container, Grid, Segment, Icon } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';

function App() {
  return (
    <Container>
      <MainHeader title="Budget" type="h1" />
      <DisplayBalance title="Your Balance" value="2,550.53" size="small" />
      <DisplayBalances />
      <MainHeader title="History" type="h3" />
      <EntryLine color="red" description="Income" value="$15.00" />
      <EntryLine color="red" description="Another income" value="$10.00" />
      <EntryLine color="red" description="Expense" value="$20.00" isExpense/>

      <MainHeader title="Add new Transaction" type="h3" />
      <NewEntryForm />
    </Container>
  );
}

export default App;
