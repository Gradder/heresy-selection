import './Answers.css';
import answer1 from '../assets/images/answer1.jpg';
import answer2 from '../assets/images/answer2.png';
import Frame from './Frame';

function Answers() {
  return (
    <div className="Answers">
    <div className="FirstTwoButtons">
      <button className="Button DivForAnswer">
                <div>
                <div className="AnswerImage" style={{ backgroundImage: `url(${answer1})` }}> <Frame /> </div>
                </div>
                <div className="AnswerText">Тяжелая техника и самолеты</div>
      </button>
       <button className="Button DivForAnswer">
              <div>
              <div className="AnswerImage" style={{ backgroundImage: `url(${answer2})` }}> <Frame /> </div>
              <div className="AnswerText">Альфария</div>

               </div>
            </button>
       </div>
              <button className="Button DivForAnswer ThirdAnswer">
                     <div>
                     <div className="AnswerImage" style={{ backgroundImage: `url(${answer2})` }}> <Frame /> </div>
                     <div className="AnswerText">Омегона</div>

                      </div>
                   </button>
    </div>
  );
}

export default Answers;
