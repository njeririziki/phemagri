 import logo from '../phema-logo.png';
import drop from '../drop.png'
import {Typography} from 'antd'
import '../styles/Splash.css';

function SplashScreen() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <Typography.Title  >
      Phema-Agri
      </Typography.Title>
       
      
    
      </header>
    </div>
  );
}

export default SplashScreen;
