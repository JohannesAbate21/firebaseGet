import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';

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
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const userRef = ref(database, 'user');
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const userArray = Object.entries(data).map(([key, value]) => ({
          id: key,
          name: value.name,
          age: value.age,
        }));
        setUserData(userArray);
      } else {
        setUserData([]);
      }
    });
  }, []);

  return (
    <div className="App" style={{ marginTop: 250 }}>
      <center>
        {/* Render the fetched data */}
        {userData.map((user) => (
          <div key={user.id}>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <hr />
          </div>
        ))}
      </center>
    </div>
  );
}

export default App;
