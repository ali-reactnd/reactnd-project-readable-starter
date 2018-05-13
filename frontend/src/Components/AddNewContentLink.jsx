import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Segment, Header } from 'semantic-ui-react';

const AddNewContentLink = (props) => {
    
    const {path, contentType} = props;

    return (
        <Container text>
            <Segment padded="very" raised>
                <Header as='h4'>
                    {`Click `}
                    <Link to={path} >
                        here
                    </Link>
                    {` to add a new ${contentType}.`} 
                </Header>
            </Segment>
        </Container>
    )
}

AddNewContentLink.protoType = {
    props: PropTypes.shape({
        path: PropTypes.string.isRequired,
        contentType: PropTypes.string.isRequired,
    }).isRequired
}

export default AddNewContentLink;