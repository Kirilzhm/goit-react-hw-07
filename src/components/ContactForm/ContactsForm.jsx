import { Form, Field, ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from '../../redux/contactsSlice';

const validationSchema = Yup.object({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required")
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const newContact = { id: nanoid(), name: values.name, number: values.number };
    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor="name">Name</label>
        <Field type="text" name="name" />
        <ErrorMessage name="name" component="div" />
        
        <label htmlFor="number">Number</label>
        <Field type="phone" name="number" />
        <ErrorMessage name="number" component="div" />
        
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
