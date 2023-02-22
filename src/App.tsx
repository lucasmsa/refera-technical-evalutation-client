import 'react-activity/dist/library.css';
import 'react-toastify/dist/ReactToastify.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from './pages/Authentication/Login';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './global/globalStyles';
import { theme } from './global/theme';
import { ErrorPage } from './pages/ErrorPage';
import { SignUp } from './pages/Authentication/SignUp';
import { Provider as StoreProvider } from 'react-redux';
import { store } from './store';
import { Protected } from './components/Protected';
import { Dashboard } from './pages/App/Dashboard';

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
  {
    path: '/dashboard',
    element: (
      <Protected>
        <Dashboard />
      </Protected>
    ),
  },
]);

function App() {
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RouterProvider router={router} />
        <ToastContainer />
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
