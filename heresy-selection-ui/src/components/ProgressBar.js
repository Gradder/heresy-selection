import istvaan from '../assets/images/Istvaan_III_planet2.png';
import terra from '../assets/images/terra.png';
import ship from '../assets/images/ship4.png';
import './ProgressBar.css';

function ProgressBar() {
  return (
  <div className="ProgressDivBig">
      <div className="ProgressDiv">
          <div className="Planet" style={{ backgroundImage: `url(${istvaan})` }}>  </div>
            <div className="ProgressBar"><div className="Ship" style={{ backgroundImage: `url(${ship})` }}>  </div></div>
          <div className="Planet Terra" style={{ backgroundImage: `url(${terra})` }}>  </div>
      </div>
  </div>
  );
}

export default ProgressBar;
