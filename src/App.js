import "./App.css";
import React, { useState } from "react";
import contacts from "./contacts.json";

function App() {

  const onlyFiveContacts = contacts.slice(0, 5);
  console.log(onlyFiveContacts);

  return(
  <div className="App">
    <div>
      <h1>IronContacts</h1>
      <table class="tabla-contactos">
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
        {onlyFiveContacts.map((eachElement) => {
          return (
            <tr>
              <td><img src={eachElement.pictureUrl} alt={eachElement.name} width="100px" /></td>
              <td>{eachElement.name}</td>
              <td>{eachElement.popularity.toFixed(2)}</td>
            </tr>
          )
        })}
      </table>
    </div>



  </div>
  )
}

export default App;
