import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './Filter.module.css'

function Filter({ label, value, onChange }) {
  const filterId = nanoid();

  return (
    <div className={css.wraper}>
      <label className={css.label} htmlFor={filterId}>
        {label}
        <input
          className={css.input}
          type="text"
          placeholder="Search field"
          id={filterId}
          value={value}
          onChange={onChange}
        ></input>
      </label>
    </div>
  );
}

export default Filter;

Filter.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
