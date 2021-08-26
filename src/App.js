/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/GlobalStyles';

import Routes from './routes';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
      <ToastContainer />
    </>
  );
}

export default App;
