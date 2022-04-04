import './App.css';
import { Container, Grid, Segment, Statistic, Icon } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';

function App() {
  return (
    <Container>
      <MainHeader title="Budget" type="h1" />
      <DisplayBalance title="Your Balance" value="2,550.53" size="small" />
      <Segment textAlign="center">
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <DisplayBalance title="Income" value="1,045.50" color="green" />
            </Grid.Column>
            <Grid.Column>
              <DisplayBalance title="Expenses" value="623.50" color="red" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <MainHeader title="History" type="h3" />
      <Segment color="red">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column columns={10} textAlign="left">Something</Grid.Column>
            <Grid.Column columns={3} textAlign="right">$10.00</Grid.Column>
            <Grid.Column columns={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment color="red">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column columns={10} textAlign="left">Something else</Grid.Column>
            <Grid.Column columns={3} textAlign="right">$20.00</Grid.Column>
            <Grid.Column columns={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment><Segment color="blue">
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column columns={10} textAlign="left">Something important</Grid.Column>
            <Grid.Column columns={3} textAlign="right">$100.00</Grid.Column>
            <Grid.Column columns={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <MainHeader title="Add new Transaction" type="h3" />
      <NewEntryForm />
    </Container>
  );
}

export default App;
