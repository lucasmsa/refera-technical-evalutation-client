export const inputOptions = {
  name: { required: 'Name is required' },
  email: { required: 'Email is required' },
  contact_name: { required: 'Contact name is required' },
  contact_phone: {
    required: 'Contact phone is required',
    pattern: {
      value: /^\+?1?\d{9,15}$/,
      message: 'Invalid phone number',
    },
  },
  description: { required: 'Description is required' },
  real_state_agency: { required: 'Real state agency is required' },
  company: { required: 'Company is required' },
  deadline: {
    required: 'Deadline is required',
    pattern: {
      value: /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/,
      message: 'Must be in format YYYY-MM-DD',
    },
  },
  category: { required: 'Category is required' },
  password: {
    required: 'Password is required',
    minLength: {
      value: 6,
      message: 'Password must be at least 6 characters',
    },
  },
};
