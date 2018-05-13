import React from 'react';
import Navigation from './Navigation';
import { Container, Segment, Grid, Header } from 'semantic-ui-react';

const NotFound = () => (
    <div>
        <Grid centered>
            <Navigation />
        </Grid>
        <Container text>
            <Segment padded="very" raised>
                <Header as='h2'>
                    404 - The page you are looking for can't be found.
                </Header>
            </Segment>  
        </Container>
    </div>
);

export default NotFound;