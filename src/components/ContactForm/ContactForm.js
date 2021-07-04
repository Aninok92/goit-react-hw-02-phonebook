import { Component } from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import s from "./ContactForm.module.scss";

class ContacForm extends Component {
  state = {
    name: "",
    number: "",
  };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const { onSubmit, contacts } = this.props;
    const normalizedName = name.toLowerCase();
    if (
      contacts.some(
        (contact) =>
          contact.name.toLowerCase() === normalizedName ||
          contact.number === number
      )
    ) {
      alert(`Contact with such ${name} or ${number} is already in Phonebook`);
      this.reset();
      return;
    }
    onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.label} htmlFor={this.nameInputId}>
          <span className={s.labelText}>Name</span>
          <input
            className={s.input}
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            id={this.nameInputId}
          />
        </label>
        <label className={s.label} htmlFor={this.numberInputId}>
          <span className={s.labelText}>Number</span>
          <input
            className={s.input}
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            id={this.numberInputId}
          />
        </label>
        <button type="submit" className={s.button}>
          Add Contact
        </button>
      </form>
    );
  }
}

ContacForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      namber: PropTypes.number,
    })
  ),
};

export default ContacForm;
