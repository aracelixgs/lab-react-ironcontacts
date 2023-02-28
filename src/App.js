import "./App.css";
import React, { useState } from "react";
import contacts from "./contacts.json";

function App() {

  const onlyFiveContacts = contacts.slice(0, 5);
  //console.log(onlyFiveContacts);

  const [ actualContacts, setNewArr ] = useState(onlyFiveContacts)

  const addRandomContact = () => {
    const randomNumber = Math.random() * contacts.length;
    const randomPosition = Math.floor(randomNumber);
    const randomContact = contacts[randomPosition];
    //console.log(randomContact)
    const cloneContacts = [...actualContacts]
    console.log(cloneContacts)
    cloneContacts.unshift(randomContact)
    setNewArr( cloneContacts )
  }


  return(
  <div className="App">
    <div>
      <h1>IronContacts</h1>

      <button onClick={addRandomContact}>Add Random Contact</button>

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
              <td><img src={eachElement.pictureUrl} alt={eachElement.name} width="100px" /></td>
              <td>{eachElement.name}</td>
              <td>{eachElement.popularity.toFixed(2)}</td>
              <td>{eachElement.wonOscar === true && <h2>🏆</h2>}</td>
              <td>{eachElement.wonEmmy === true && <h2>🏆</h2>}</td>
            </tr>
            </tbody>
          )
        })}
      </table>
    </div>



  </div>
  )
}

export default App;
