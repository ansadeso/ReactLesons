import './App.css';
import logos from './logo.jpg'
import Nature from './Nature.jpg'

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src={logos} alt=''></img>
      </header>
      <nav className='nav'>
        <div><a href='#s'>Profile</a></div>
        <div><a href='#s'>Message</a></div>
        <div><a href='#s'>News</a></div>
        <div><a href='#s'>Music</a></div>     
        <div><a href='#s'>Settings</a></div>     
      </nav>
      <div className='content'>
        <div>
          <img src={Nature}/>
        </div>
        <div>
          ava + description
        </div>
        <div>
          My posts
          <div>
            New Posts
          </div>
          <div>
            <div>
              post 1
            </div>
            <div>
              post 2
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}


export default App;
