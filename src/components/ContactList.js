const ContactList = ({ contacts }) => (
  <ul>
    {contacts.map(({ name, number }) => (
      <li key={name}>
        <p>{name}</p>
        <p>{number}</p>
      </li>
    ))}
  </ul>
);

export default ContactList;
