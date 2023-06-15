import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginScreen from './components/LoginScreen';
import AppBar from './components/Navbar';
import { SocketContext } from './SocketContext';
import App from './components/';
import useCallStates from './hooks/useCallStates';
import { SnackbarProvider } from 'notistack';

const Home = () => {
  const { joinedRoom, callEnded } = useCallStates();

  return (
    <SnackbarProvider
      maxSnack={3}
      autoHideDuration={3000}
      preventDuplicate
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
    >
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/call" element={<App />} />
        </Routes>
      </BrowserRouter>
    </SnackbarProvider>
  );
};

export default Home;
