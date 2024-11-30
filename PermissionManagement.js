import React, { useState } from 'react';
import { permissions } from '../mockData';

const PermissionManagement = () => {
  const [permissionList, setPermissionList] = useState(permissions);

  const handlePermissionChange = (role, newPermission) => {
    setPermissionList({ 
      ...permissionList, 
      [role]: permissionList[role].includes(newPermission)
        ? permissionList[role].filter(p => p !== newPermission)
        : [...permissionList[role], newPermission] 
    });
  };

  return (
    <div>
      <h2>Permission Management</h2>
      {Object.keys(permissionList).map(role => (
        <div key={role}>
          <h3>{role} Permissions</h3>
          <label>
            <input 
              type="checkbox" 
              checked={permissionList[role].includes('Read')} 
              onChange={() => handlePermissionChange(role, 'Read')} 
            />
            Read
          </label>
          <label>
            <input 
              type="checkbox" 
              checked={permissionList[role].includes('Write')} 
              onChange={() => handlePermissionChange(role, 'Write')} 
            />
            Write
          </label>
          <label>
            <input 
              type="checkbox" 
              checked={permissionList[role].includes('Delete')} 
              onChange={() => handlePermissionChange(role, 'Delete')} 
            />
            Delete
          </label>
        </div>
      ))}
    </div>
  );
};

export default PermissionManagement;