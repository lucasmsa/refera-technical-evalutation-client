import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from './pages/Login';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './global/globalStyles';
import { theme } from './global/theme';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
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
