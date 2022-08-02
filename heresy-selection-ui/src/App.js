import logo from './logo.svg';
import background from './assets/images/background_1.jpg'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Questioner from './components/Questioner';

function App() {
  return (
  <div className="WorkingArea">
    <Header />
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <Questioner />
    </div>
    <Footer />
  </div>
  );
}

export default App;
