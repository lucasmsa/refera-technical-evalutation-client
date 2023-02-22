import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from './pages/Authentication/Login';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './global/globalStyles';
import { theme } from './global/theme';
import { ErrorPage } from './pages/ErrorPage';
import { SignUp } from './pages/Authentication/SignUp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
