import PropTypes from "prop-types";
import s from "./ContactList.module.scss";

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={s.list}>
    {contacts.map(({ id, name, number }) => (
      <li className={s.item} key={id}>
        <div className={s.wrapper}>
          <p className={s.contact}>{name}</p>
          <p className={s.contact}>{number}</p>
        </div>

        <button
          className={s.button}
          type="button"
          onClick={() => onDeleteContact(name)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
