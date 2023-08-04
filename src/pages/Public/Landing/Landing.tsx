import Navbar from "../../../components/Nabvar/Navbar"
import '../../../styles/pages/Landing.scss'
import singleMushroomYellowBackground from '../../../assets/singleMushroomYellowBackground.png'
import { PublicRoutes } from "../../../models/routes";
import { useNavigate } from "react-router-dom";

function Landing() {

  const navigate = useNavigate();
  const goFormLeaveData = () => {
    navigate(`/${PublicRoutes.DATA_FORM}`, { replace: true });
  }

  return (
    <div className="containerLanding">
      <Navbar isLoggedIn={false}></Navbar>
      <div className="containerBody">
        <div className="containerInfo landingBox">
          <h2 className="companyName">PorteAlbo</h2>
          <p className="companySlogan">"Brindamos felicidad a todos aquellos estómagos que nos eligen."</p>
          <div className="containerButtons">
            <div className="containerDataButton">
              <button className="btnslanding dataButton" onClick={goFormLeaveData}>DEJA TUS DATOS</button>
            </div>
            <div className="containerContactButton">
              <button className="btnslanding contactButton">CONTACTANOS</button>
            </div>
          </div>
        </div>
        <div className="containerLogoLanging landingBox">
          <img className="mushroomLogoLanding" src={singleMushroomYellowBackground} />
        </div>
      </div>
    </div>
  )
}

export default Landing
