import { useSelector } from "react-redux"
import { AppStore } from "../redux/store"
import { Navigate, Outlet } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "../models";

interface Props {
    privateValidation: boolean;
}

const PrivateValidationFragment = <Outlet/>
const PublicValidationFragment = <Navigate replace to={PrivateRoutes.PRIVATE}/>

export const AuthGuard = ({ privateValidation }: Props) => {
    const userState = useSelector((store: AppStore) => store.user);
    return userState.id ? (
        privateValidation ? (
            PrivateValidationFragment
        ) : (
            PublicValidationFragment
        )
    ) : (
        // <Navigate replace to={PublicRoutes.LANDING} />
        <Navigate replace to={PublicRoutes.LOGIN} />
    );
};

export default AuthGuard;