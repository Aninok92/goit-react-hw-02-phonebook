import React, { Component } from "react";
import shortid from "shortid";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    this.setState((prevState) => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };
  render() {
    const { contacts } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        {/* <Filter/> */}
        <ContactList contacts={contacts} />
      </div>
    );
  }
}

export default App;
