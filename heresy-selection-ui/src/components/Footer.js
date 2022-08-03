import './Footer.css';
import logo from '../assets/images/logo_darkside.png';
import logoSP from '../assets/images/logo_saint_p.png';
import logoYT from '../assets/images/logo_youtube.png';
function Footer() {
  return (
    <div className="Footer">
    <div className="FooterRow">
     <img src={logoSP} className="SaintPLogo"/>
    <p className="Text">
    ©Dark Side of Heresy вроде как не нарушает никакие права, хотя ГоВэ тут недавно хотела прикрывать всех блоггеров, читающих вахапедию под плывущую картинку, так что нельзя быть ни в чем уверенным на сто процентов. Но тем не менее, проект фановый и создан только для развлечения. Дружба, мир, Истваан III</p>

     <form action="https://vk.com/dark_side_of_heresy" target="_blank">
         <button type="submit" className="Button DivForAnswer Social" onclick="window.open('https://vk.com/dark_side_of_heresy')">
            <img src={logo} className="DarksideLogo"/>
          </button>
     </form>
     <form action="https://www.youtube.com/channel/UCyV_hwM1XpExFldnr-AbjJg" target="_blank">
        <button type="submit" className="Button DivForAnswer Social">
            <img src={logoYT} className="DarksideLogo"/>
        </button>
    </form>
    </div>
    </div>
  );
}

export default Footer;
