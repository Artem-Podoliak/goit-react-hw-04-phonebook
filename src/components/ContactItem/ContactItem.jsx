import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactItem.module.css'

function ContactItem({ id, name, number, onDeleteContact }) {
  return (
    <div className={css.wraper}>
      <p className={css.name}>{name}:</p>
      <a className={css.tel} href={`tel:${number}`}>{number}</a>
      <button className={css.btn} type="buton" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </div>
  );
}

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
