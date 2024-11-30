# Admin Dashboard - Role-Based Access Control (RBAC) System

## Project Description

This is a web-based **Admin Dashboard** for managing **users, roles, and permissions** using a **Role-Based Access Control (RBAC)** system. The project includes features like adding and editing users, assigning roles, managing permissions, and customizing user statuses (active/inactive). It is built with **React** for the frontend and uses mock data to simulate API interactions for demonstration purposes.

## Core Features

### 1. User Management
- **View and manage users**: See a list of users with details like name, role, and status.
- **Add, edit, delete users**: Options to create, update, or remove users from the system.
- **Assign roles and manage statuses**: Change user roles (e.g., admin, user) and toggle their active/inactive status.

### 2. Role Management
- **Define and edit roles**: Add new roles and manage existing ones (e.g., admin, user, guest).
- **Assign permissions to roles**: Set permissions (Read, Write, Delete) for each role.

### 3. Permission Management
- **Dynamic permissions**: Modify role-based permissions easily and visualize which roles have specific permissions.
- **Display permissions**: Clear interface to manage which actions (Read, Write, Delete) each role can perform.

### 4. Custom API Simulation (Optional)
- **Mock API calls**: Simulate CRUD operations for users, roles, and permissions using mock data.
- **Server response simulation**: Mock server responses to validate the functionality of the dashboard.

## Technologies Used

- **React**: Frontend framework used for building the dashboard.
- **React Router**: Used for navigation between the User Management, Role Management, and Permission Management components.
- **Mock Data**: A file-based simulation of backend data for users, roles, and permissions.
- **Axios** (Optional): You can extend the project to use Axios for real API calls.

## Installation and Setup

### Prerequisites

Make sure you have the following installed on your machine:
- **Node.js** (v12 or higher)
- **npm** (v6 or higher)

### Steps to Install and Run the Project

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/rbac-dashboard.git
    cd rbac-dashboard
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the application**:
    ```bash
    npm start
    ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Project Structure

```plaintext
rbac-dashboard/
│
├── public/ # Static assets
├── src/ # Source files
│ ├── components/ # React components for the dashboard
│ │ ├── UserManagement.js # User Management component
│ │ ├── RoleManagement.js # Role Management component
│ │ └── PermissionManagement.js # Permission Management component
│ ├── mockData.js # Mock data for users, roles, and permissions
│ ├── App.js # Main application component with routing
│ └── index.js # Entry point for React
├── package.json # npm dependencies and scripts
└── README.md # Project documentation