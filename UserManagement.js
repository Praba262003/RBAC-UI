import React, { useState } from 'react';
import { users, roles } from '../mockData';

const UserManagement = () => {
  const [userList, setUserList] = useState(users);

  const handleRoleChange = (id, newRole) => {
    setUserList(userList.map(user => user.id === id ? { ...user, role: newRole } : user));
  };

  const toggleStatus = (id) => {
    setUserList(userList.map(user => user.id === id ? { ...user, status: user.status === 'active' ? 'inactive' : 'active' } : user));
  };

  return (
    <div>
      <h2>User Management</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userList.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>
                <select value={user.role} onChange={(e) => handleRoleChange(user.id, e.target.value)}>
                  {roles.map(role => <option key={role} value={role}>{role}</option>)}
                </select>
              </td>
              <td>{user.status}</td>
              <td>
                <button onClick={() => toggleStatus(user.id)}>
                  {user.status === 'active' ? 'Deactivate' : 'Activate'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;