import React, { useState } from 'react';
import { roles } from '../mockData';

const RoleManagement = () => {
  const [roleList, setRoleList] = useState(roles);

  const addRole = (role) => {
    if (!roleList.includes(role)) {
      setRoleList([...roleList, role]);
    }
  };

  return (
    <div>
      <h2>Role Management</h2>
      <input type="text" id="newRole" placeholder="New Role" />
      <button onClick={() => addRole(document.getElementById('newRole').value)}>Add Role</button>
      <ul>
        {roleList.map((role, index) => (
          <li key={index}>{role}</li>
        ))}
      </ul>
    </div>
  );
};

export default RoleManagement;