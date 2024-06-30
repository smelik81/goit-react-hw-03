import css from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import InputMask from 'react-input-mask';

const validationInputSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Min 3 symbols')
    .max(50, 'Max 50 symbols')
    .required('required'),
  number: Yup.string().min(9).required('required'),
});

const initialValues = {
  name: '',
  number: '',
};

const InputWithMask = ({ field, ...props }) => (
  <InputMask {...field} {...props} />
);

export default function ContactForm({ onAdd }) {
  const handleSubmit = (values, actions) => {
    const newUser = {
      id: nanoid(),
      ...values,
    };
    onAdd(newUser);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationInputSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.formWrapper}>
        <div className={css.container}>
          <label className={css.label}>Name</label>
          <Field className={css.input} type="text" name="name" />
          <ErrorMessage name="name" component="span" />
        </div>
        <div className={css.container}>
          <label className={css.label}>Number</label>
          <Field className={css.input} type="number" name="number">
            {({ field }) => (
              <InputWithMask
                className={css.inputMask}
                field={field}
                mask="999-99-99"
                maskChar={null}
              />
            )}
          </Field>
          <ErrorMessage name="number" component="span" />
        </div>
        <button className={css.formButton} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
}
