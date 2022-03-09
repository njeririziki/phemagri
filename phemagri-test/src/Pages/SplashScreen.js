// import logo from './logo.svg';
import drop from '../drop.png'
import {Typography} from 'antd'
import '../styles/Splash.css';

function SplashScreen() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={drop} className="App-logo" alt="logo" />
      <Typography.Title style={{color:'white'}}>
      Phemagri
      </Typography.Title>
       
      
    
      </header>
    </div>
  );
}

export default SplashScreen;
