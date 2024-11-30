import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import UserManagement from './components/UserManagement';
import RoleManagement from './components/RoleManagement';
import PermissionManagement from './components/PermissionManagement';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/users">User Management</Link>
            </li>
            <li>
              <Link to="/roles">Role Management</Link>
            </li>
            <li>
              <Link to="/permissions">Permission Management</Link>
            </li>
          </ul>
        </nav>
        
        <Switch>
          <Route path="/users" component={UserManagement} />
          <Route path="/roles" component={RoleManagement} />
          <Route path="/permissions" component={PermissionManagement} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;