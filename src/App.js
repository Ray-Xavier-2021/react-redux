import './App.css';
import LogIn from './components/LogIn';
import Logout from './components/Logout';
import Profile from './components/Profile';
import ToggleColor from './components/ToggleColor';

function App() {
  return (
    <div className="App">
      <Profile />
      <LogIn />
      <Logout />
      <ToggleColor />
    </div>
  );
}

export default App;
