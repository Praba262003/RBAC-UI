export const users = [
    { id: 1, name: 'Alice', role: 'admin', status: 'active' },
    { id: 2, name: 'Bob', role: 'user', status: 'inactive' },
  ];
  
  export const roles = ['admin', 'user', 'guest'];
  
  export const permissions = {
    admin: ['Read', 'Write', 'Delete'],
    user: ['Read', 'Write'],
    guest: ['Read'],
  };