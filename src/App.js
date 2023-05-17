import React from 'react';
import {
  AppBody,
  AppLoading,
  AppLoadingContents
} from './App.styles.js';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat';
import Login from './components/login/Login';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import logo from './assets/images/logo.png';
import Spinner from 'react-spinkit';

function App() {

  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img src={logo} alt='logo' />
          <Spinner
            name='ball-spin-fade-loader'
            color='white'
            fadeIn='none'
          />
        </AppLoadingContents>
      </AppLoading>
    )
  }

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Routes>
                <Route path="/" exact element={<Chat />} />
              </Routes>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;