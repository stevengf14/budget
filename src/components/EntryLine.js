import React from "react";
import { Grid, Segment, Icon } from 'semantic-ui-react';

function EntryLine({ id, description, value, isExpense = false, deleteEntry }) {
    return (
        <Segment color={isExpense ? "red" : "green"}>
            <Grid columns={3} textAlign="right">
                <Grid.Row>
                    <Grid.Column columns={10} textAlign="left">{description}</Grid.Column>
                    <Grid.Column columns={3} textAlign="right">{value}</Grid.Column>
                    <Grid.Column columns={3}>
                        <Icon name="edit" bordered />
                        <Icon name="trash" bordered onClick={() => deleteEntry(id)} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    );
} export default EntryLine;