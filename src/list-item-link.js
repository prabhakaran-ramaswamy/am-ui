import React from 'react';
import {Route, Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const ListItemLink = ({to, children}) => (
  <Route
    path={to}
    children={({match}) => (
      <li role="presentation" className={match ? 'active' : ''}>
        <Link to={to} {...rest} />
      </li>
    )}
  />
);

ListItemLink.propTypes = {
  to: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
};
export default ListItemLink;
