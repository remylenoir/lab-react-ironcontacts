import React, { Component } from "react";
import ContactsList from "./components/ContactsList";
import JSONContacts from "./contacts.json";

import "./App.css";

class App extends Component {
  state = {
    contacts: JSONContacts.slice(0, 5)
  };

  handlePush = () => {
    let contacts = this.state.contacts.slice();
    contacts.push(JSONContacts[Math.floor(Math.random() * JSONContacts.length)]);
    this.setState({
      contacts
    });
  };

  handleSort = type => {
    let contacts = this.state.contacts.slice();

    if (type === "name") {
      contacts.sort((a, b) => a[type].localeCompare(b[type]));
    } else if (type === "popularity") {
      contacts.sort((a, b) => b[type] - a[type]);
    }

    this.setState({
      contacts
    });
  };

  handleDelete = index => {
    let contacts = this.state.contacts.slice();
    contacts.splice(index, 1);

    this.setState({
      contacts
    });
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.handlePush}>Add random contact</button>
        <button onClick={() => this.handleSort("name")}>Sort by Name</button>
        <button onClick={() => this.handleSort("popularity")}>Sort by Popularity</button>
        <ContactsList handleDelete={this.handleDelete} contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
