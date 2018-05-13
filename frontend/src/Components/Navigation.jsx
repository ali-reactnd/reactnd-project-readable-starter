import React from 'react';
import { Menu } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

const Navigation = (props) => {
  return (
    <Menu text >
        <Menu.Item header>Navigate:</Menu.Item>
        <Menu.Item name="home" onClick={()=> { props.history.push('/')}} />
    </Menu>
  );
};

export default withRouter(Navigation);