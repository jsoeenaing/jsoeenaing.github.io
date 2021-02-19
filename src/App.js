import profileImage from './img/profilepic.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={profileImage} alt="profile-image"/>
      <h1>J Soe Naing</h1>
      <h2>Computing Science Student at Simon Fraser University</h2>
    </div>
  );
}

function Navbar() {
  return (
        <link to="/" className="navbar-logo">
          <button>Github</button>
        </link>
  )
}

export default App;
