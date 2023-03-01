import "./App.css";
import React, { useState } from "react";
import contacts from "./contacts.json";

function App() {
  const onlyFiveContacts = contacts.slice(0, 5);
  //console.log(onlyFiveContacts);

  const [actualContacts, setNewArr] = useState(onlyFiveContacts);

  const addRandomContact = () => {
    const randomNumber = Math.random() * contacts.length;
    const randomPosition = Math.floor(randomNumber);
    const randomContact = contacts[randomPosition];
    //console.log(randomContact)
    const cloneContacts = [...actualContacts];
    console.log(cloneContacts);
    cloneContacts.unshift(randomContact);
    setNewArr(cloneContacts);
  };

  const sortByName = () => {
    const cloneContacts = [...actualContacts];
    cloneContacts.sort((elem2, elem1) => {
      return elem2.name.localeCompare(elem1.name);
    });
    setNewArr(cloneContacts);
  };

  const sortByPopularity = () => {
    const cloneContacts = [...actualContacts];
    cloneContacts.sort((elem2, elem1) => {
      if (elem2.name[0] > elem1.name[0]) {
        return -1;
      } else if (elem2.name[0] < elem1.name[0]) {
        return 1;
      } else {
        return 0;
      }
    });
    setNewArr( cloneContacts );
  };

  return (
    <div className="App">
      <div>
        <h1>IronContacts</h1>

        <button onClick={addRandomContact}>Add Random Contact</button>
        <button onClick={sortByName}>Sort by name</button>
        <button onClick={sortByPopularity}>Sort by popularity</button>

        <table className="tabla-contactos">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won an Oscar</th>
              <th>Won an Emmy</th>
            </tr>
          </thead>
          {actualContacts.map((eachElement) => {
            return (
              <tbody key={eachElement.id}>
                <tr>
                  <td>
                    <img
                      src={eachElement.pictureUrl}
                      alt={eachElement.name}
                      width="100px"
                    />
                  </td>
                  <td>{eachElement.name}</td>
                  <td>{eachElement.popularity.toFixed(2)}</td>
                  <td>{eachElement.wonOscar === true && <h2>🏆</h2>}</td>
                  <td>{eachElement.wonEmmy === true && <h2>🏆</h2>}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default App;
