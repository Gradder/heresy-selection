import logo from '../assets/images/logo_hh.png';
import './Questioner.css';
import ProgressBar from './ProgressBar';
import Question from './Question';
import Answers from './Answers';
import Element from '../App.css';


function Questioner() {
  return (
    <div className="Questioner">
    <div className="BackgroundLayer">
      <div className="Element">
       <img src={logo} className="Logo-hh"/>
      </div>
      <ProgressBar />
      <Question />
    </div>
      <Answers />
    </div>
  );
}

export default Questioner;
