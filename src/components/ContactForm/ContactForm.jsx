import css from './ContactForm.module.css';
import { Formik, Form, Field } from 'formik';
import { nanoid } from 'nanoid';
/* import * as Yup from 'yup'; */

export default function ContactForm({ onAdd }) {
  const handleSubmit = ({ values, actions }) => {
    const newUser = {
      id: nanoid(),
      ...values,
    };
    onAdd(newUser);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: 'hgfjghf',
        number: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.formWrapper}>
        <div className={css.container}>
          <label className={css.label}>Name</label>
          <Field className={css.input} type="text" name="name" />
        </div>
        <div className={css.container}>
          <label className={css.label}>Number</label>
          <Field className={css.input} type="number" name="number" />
        </div>
        <button className={css.formButton} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
}
