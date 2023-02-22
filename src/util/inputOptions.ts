export const inputOptions = {
  name: { required: 'Name is required' },
  email: { required: 'Email is required' },
  password: {
    required: 'Password is required',
    minLength: {
      value: 6,
      message: 'Password must be at least 6 characters',
    },
  },
};
