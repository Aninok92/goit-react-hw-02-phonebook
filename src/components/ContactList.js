const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ name, number }) => (
      <li key={name}>
        <p>{name}</p>
        <p>{number}</p>
        <button type="button" onClick={() => onDeleteContact(name)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
