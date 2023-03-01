import "./App.css";
import React, { useState } from "react";
import contacts from "./contacts.json";

function App() {

// AÑADIR ESTILOS
const buttonStyle = {
    backgroundColor: "darkgray",
    color: "white",
    padding: "10px",
    margin: "20px",
    borderRadius: "5px",
}

const deleteButtonStyle = {
  backgroundColor: "darkred",
  color: "white",
  padding: "10px",
  margin: "20px",
  borderRadius: "5px",

}


  const onlyFiveContacts = contacts.slice(0, 5);
  //console.log(onlyFiveContacts);

  const [actualContacts, setNewArr] = useState(onlyFiveContacts);

  const addRandomContact = () => {
    const randomNumber = Math.random() * contacts.length;
    const randomPosition = Math.floor(randomNumber);
    const randomContact = contacts[randomPosition];
    //console.log(randomContact)

    let newContactId = randomContact.id;
    let isContactRepeated = false;
    actualContacts.forEach((each) => {
      if(newContactId === each.id) {
        isContactRepeated = true;
      }
    })
    if(isContactRepeated === true) {
      addRandomContact()
      return;
    }
      
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
    const sortedContacts = cloneContacts.sort((elem2, elem1) => elem1.popularity - elem2.popularity)
    setNewArr( sortedContacts );
  };

  const deleteContact = (elIdABorrar) => {
    const filteredArr = actualContacts.filter((eachElement) => {
      if (eachElement.id === elIdABorrar) {
          return false 
      } else {
          return true
      }
  })
  setNewArr( filteredArr );

  }

  return (
    <div className="App">
      <div>
        <h1>IronContacts</h1>

        <button onClick={addRandomContact} style={buttonStyle}>Add Random Contact</button>
        <button onClick={sortByName} style={buttonStyle}>Sort by name</button>
        <button onClick={sortByPopularity} style={buttonStyle}>Sort by popularity</button>

        <table className="tabla-contactos">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won an Oscar</th>
              <th>Won an Emmy</th>
              <th>Actions</th>
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
                  <td><button onClick={ () => deleteContact(eachElement.id) } style={deleteButtonStyle}>Delete</button></td>
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
