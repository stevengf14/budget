import React, { Fragment, useState } from "react";
import { Grid, Segment, Icon } from 'semantic-ui-react';
import ModalEdit from "./ModalEdit";

function EntryLine({ id, description, value, isExpense = false, deleteEntry }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Fragment>
            <Segment color={isExpense ? "red" : "green"}>
                <Grid columns={3} textAlign="right">
                    <Grid.Row>
                        <Grid.Column columns={10} textAlign="left">{description}</Grid.Column>
                        <Grid.Column columns={3} textAlign="right">{value}</Grid.Column>
                        <Grid.Column columns={3}>
                            <Icon name="edit" bordered onClick={() => setIsOpen(true)} />
                            <Icon name="trash" bordered onClick={() => deleteEntry(id)} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            <ModalEdit isOpen={isOpen} setIsOpen={setIsOpen} />
        </Fragment>
    );
} export default EntryLine;