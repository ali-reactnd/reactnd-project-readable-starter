import React from 'react';
import PropTypes from 'prop-types';
import { Header, Icon } from 'semantic-ui-react';

const PageHeader = ({ title }) => {
  return (
    <Header as='h2' icon textAlign='center'>
      <Icon name='quote left' />
      <Header.Content>{title}</Header.Content>
      <Icon name='quote right' />
    </Header>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default PageHeader;