import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import {Routes, Route } from 'react-router-dom';


const App = (props) => {

  return (
   
   <Routes>
        <Route path='/' element={
          <div className='app-wrapper'>
            <Header />
            <Navbar />
            <div className='app-wrapper-content'>              
              <Profile posts={props.state.profilePage.posts} />
            </div>
          </div>
        } />
        <Route path='/profile' element={
          <div className='app-wrapper'>
            <Header />
            <Navbar />
            <div className='app-wrapper-content'>
              <Profile posts={props.state.profilePage.posts} />
            </div>
          </div>
        } />
        
        <Route path='/dialogs' element={
          <div className='app-wrapper'>
            <Header />
            <Navbar />
            <div className='app-wrapper-content'>
              <Dialogs dialogs={props.state.dialogsPage.dialogs} messages={props.state.dialogsPage.messages} />
            </div>
          </div>
        } />
        
      {/* <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
       

          
          <Dialogs />
          <Profile />
        </div>
      </div> */}
      </Routes>
    
  );
}


export default App;
