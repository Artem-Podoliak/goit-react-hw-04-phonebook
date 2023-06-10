import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  const [contact, setContact] = useState({
    name: '',
    number: '',
  });

  const nameId = nanoid();
  const numberId = nanoid();

  const onInputChange = event => {
    const { name, value } = event.currentTarget;
    setContact(prevContact => ({ ...prevContact, [name]: value }));
  };

  const onContactFormSubmit = event => {
    event.preventDefault();

    onSubmit(contact);
    contactFormReset();
  };

  const contactFormReset = () => {
    setContact({
      name: '',
      number: '',
    });
  };

  const { name, number } = contact;

  return (
    <div className={css.wraper}>
      <form className={css.form} onSubmit={onContactFormSubmit}>
        <label className={css.label} htmlFor={nameId}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            id={nameId}
            onChange={onInputChange}
            required
          />
        </label>
        <label className={css.label} htmlFor={numberId}>
          Number
          <input
            className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            onChange={onInputChange}
            id={numberId}
            required
          />
        </label>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
