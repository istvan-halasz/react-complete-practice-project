import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [users, setUsers] = useState([]);

  const userAddedHandler = (event) => {
    setUsers((prevState) => {
      console.log(prevState);
      let currentUsers = [...prevState];
      currentUsers.push(event);
      console.log(currentUsers);
    });
  };

  return (
    <div>
      <AddUser onUserAdded={userAddedHandler} />
      <UsersList users={[]} />
    </div>
  );
}

export default App;
