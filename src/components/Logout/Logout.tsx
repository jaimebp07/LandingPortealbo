import { useNavigate } from 'react-router-dom';
import { UserKey, resetUser } from '../../redux/states/user';
import { clearLocalStorage } from "../../utilities";
import { PublicRoutes } from '../../models';
import { useDispatch } from 'react-redux';

function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logOut = () => {
    clearLocalStorage(UserKey);
    dispatch(resetUser());
    // navigate(PublicRoutes.LANDING, {replace: true});
    navigate(PublicRoutes.LOGIN, {replace: true});
  }
  return <button onClick={logOut}>Log Outtt</button>
}
export default Logout;