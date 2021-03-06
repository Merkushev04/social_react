import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import store from './redux/redux-store';


const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={() => (
            <DialogsContainer store={store} />
          )} />

          <Route exact path='/profile'
            render={() => (<Profile
              store={props.store}
            />)} />
        </div>

      </div>
    </BrowserRouter>
  );
}



export default App;
