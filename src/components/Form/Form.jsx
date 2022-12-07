import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import * as yup from 'yup';

const schema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().min(4).max(16).required(),
});

const Error = styled.p`
  color: green;
`;

const FormError = ({ name }) => {
  return (
    <ErrorMessage name={name} render={message => <Error>{message}</Error>} />
  );
};

const initialValues = {
  login: '',
  password: '',
};

const Input = styled(Field)`
  color: red;
`;

export const FormLogin = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          Login
          <Input type="text" name="login" />
          <FormError name="login" />
        </label>
        <label>
          Password
          <Input type="password" name="password" />
          <FormError name="password" />
        </label>
        <button type="submit">Відправити</button>
      </Form>
    </Formik>
  );
};
