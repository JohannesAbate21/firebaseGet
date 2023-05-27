import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, set } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCjYUIQtIGx5osC9vgNkIFz3v-iLqsI9PQ',
  authDomain: 'notes-242c0.firebaseapp.com',
  databaseURL: 'https://notes-242c0-default-rtdb.firebaseio.com',
  projectId: 'notes-242c0',
  storageBucket: 'notes-242c0.appspot.com',
  messagingSenderId: '378520659218',
  appId: '1:378520659218:web:6b991fbc66d4f1c0f43fcb',
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  // Push Function
  // Push Function
  const pushData = () => {
    const userRef = ref(database, 'user');
    const newUserRef = push(userRef); // Generate a new child reference

    set(newUserRef, {
      name: name,
      age: age,
    })
      .then(() => console.log('Data added successfully'))
      .catch((error) => console.error('Error adding data: ', error));
  };

  return (
    <div className="App" style={{ marginTop: 250 }}>
      <p>{name}</p>
      <center>
        <input
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <input
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <br />
        <button onClick={pushData}>PUSH</button>
      </center>
    </div>
  );
}

export default App;
