import './App.css';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = (props) => {

  return (
   <BrowserRouter>
   <Routes>
        <Route path='/' element={
          <div className='app-wrapper'>
            <Header />
            <Navbar />
            <div className='app-wrapper-content'>              
              <Profile posts={props.posts} />
            </div>
          </div>
        } />
        <Route path='/profile' element={
          <div className='app-wrapper'>
            <Header />
            <Navbar />
            <div className='app-wrapper-content'>
              <Profile posts={props.posts} />
            </div>
          </div>
        } />
        
        <Route path='/dialogs' element={
          <div className='app-wrapper'>
            <Header />
            <Navbar />
            <div className='app-wrapper-content'>
              <Dialogs dialogs={props.dialogs} messages={props.messages} />
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
      </BrowserRouter>
  );
}


export default App;
