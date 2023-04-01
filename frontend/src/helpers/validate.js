import toast from 'react-hot-toast';

const pswRegExp = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;
const emailRegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const verifyFields = (values, errors = {}) => {
  const fieldsName = Object.keys(values);

  const newErrors = errors;

  fieldsName.forEach((field) => {
    if (
      field === 'username' ||
      field === 'email' ||
      field === 'password' ||
      field === 'userName'
    ) {
      if (!values[field])
        newErrors[field] = toast.error(`${field} required...!`);

      if (values[field].includes(' '))
        newErrors[field] = toast.error(`Invalid ${field}!`);

      if (field === 'password') {
        if (values.password.length < 4)
          newErrors[field] = toast.error(
            `Password must be more than 4 characters long!`
          );

        if (!pswRegExp.test(values.password))
          newErrors.password = toast.error(
            'Password must have special character (!@#$%^&)!'
          );

        if (values.password && values.confirmPassword) {
          if (values.password !== values.confirmPassword)
            newErrors.exist = toast.error('Passwords not match...!');
        }
      }

      if (field === 'email') {
        if (!emailRegExp.test(values.email))
          newErrors.email = toast.error('Invalid email address...!');
      }
    }
  });

  return newErrors;
};

const validateFields = (values) => {
  const errors = verifyFields(values, {});

  return errors;
};

export default validateFields;
