import css from './SearchBox.module.css';
import { useId } from 'react';

export default function SearcBox({ value, onChange }) {
  const id = useId();
  const handleInputChange = event => {
    console.log(event.target.value);
    onChange(event.target.value);
  };
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <label htmlFor={id} className={css.label}>
          Find contacts by name
        </label>
        <input
          id={id}
          type="text"
          className={css.input}
          value={value}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}
