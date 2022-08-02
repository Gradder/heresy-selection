import './Answers.css';
import answer1 from '../assets/images/answer1.jpg';
import answer2 from '../assets/images/answer2.png';
import Frame from './Frame';

function Answers() {
  return (
    <div className="Answers">
      <button className="Button DivForAnswer">
                <div>
                <div className="AnswerImage" style={{ backgroundImage: `url(${answer1})` }}> <Frame /> </div>
                </div>
                <div className="AnswerText">Answer number one</div>
      </button>
       <button className="Button DivForAnswer">
              <div>
              <div className="AnswerImage" style={{ backgroundImage: `url(${answer2})` }}> <Frame /> </div>
              <div className="AnswerText">Answer number two</div>

               </div>
            </button>
    </div>
  );
}

export default Answers;
