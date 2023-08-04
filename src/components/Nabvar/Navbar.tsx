import MushroomLogo from '../../assets/MushroomLogo.png'
import { PublicRoutes } from '../../models/routes';
import { useNavigate } from 'react-router-dom';

import '../../styles/components/Navbar.scss'

interface Props {
  isLoggedIn: boolean
}

function Navbar(props:Props) {
  const navigate = useNavigate();

  const goLogin = () => {
    navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
  }
  const goLanding = () => {
    navigate(`/${PublicRoutes.LANDING}`, { replace: true });
  }
  const btnLogIn = () => {
    return(<button className='buttonLogIn' onClick={goLogin}>LOG IN</button>)
  }

  const btnBack = () => {
    return(<button className='buttonLogIn' onClick={goLanding}>SALIR</button>)
  }

  return (
    <div className="NavbarContainer">
      <div className="elementNavbar containerLogo">
        <img className="mushroomLogo" src={MushroomLogo} />
      </div>
      <div className="elementNavbar containerCompanyName">
        <h2 className="companyNameText">PORTEALBO</h2>
      </div>
      <div className='elementNavbar containerButtonLogIn'>
        {props.isLoggedIn ? btnBack() : btnLogIn()}
      </div>
    </div>
  )
}

export default Navbar
