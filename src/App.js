import Button from './Button.js'
import './App.css';
import TopContainer from './TopContainer'
import ProfileContainer from './ProfileUser'
import Opinion from './Opinion'

function App() {
  return (
    <div className="App">
      <header>
        <div className="imagen"> 
            <h3>LOGOhhhSssSS</h3>
        </div>
        <div className="botonera">
            <p>How it works</p>
            <Button text="Login" className="button_secundary"/>
            <Button text="Sign Up" className="button_primary"/>
        </div>           
      </header>
      <TopContainer/>
      <ProfileContainer/>
      <Opinion />

    </div>
  );
}

export default App;
