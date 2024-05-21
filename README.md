# User Management App

This User Management App is a simple CRUD (Create, Read, Update, Delete) application built with React. It utilizes various technologies and concepts such as React Router, Axios for HTTP requests, mock API for simulating backend data, React hooks, and passing props between components.

## Components

App: The main component that sets up the routes and navigation.

Nav: The navigation component.

Home: Displays user information in card format.

Users: Displays user information in a table with edit and delete options.

Edit: Edit user information.

Create: Create new users.

## Technologies and Concepts Used

### React Router
React Router is used for declarative routing in the application. It enables navigation between different pages/components without full page reloads.

### Axios
Axios is utilized for making HTTP requests to the mock API server. It simplifies the process of sending asynchronous requests and handling responses.

### Mock API
A mock API server is used to simulate backend data. This allows us to develop and test the application without relying on a real backend server.

### React Hooks
React hooks such as useState, useEffect, and useNavigate are employed for managing state and side effects within functional components. They provide a cleaner and more concise way to handle component logic.

### Props
Props are used to pass data from parent to child components. In this application, props are used to pass user IDs between components for editing and deleting user data.

## Usage

- Upon accessing the application, you will be presented with a list of users.
- You can view user details, edit existing users, delete users, or create new users using the provided buttons.
- Clicking the "Edit" button allows you to modify user details.
- Clicking the "Delete" button removes the user from the list.
- Clicking the "Create" button navigates to a form where you can add a new user.

view=>https://axios-crud-sri2403.netlify.app/