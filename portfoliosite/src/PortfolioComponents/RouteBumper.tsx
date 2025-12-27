import { useNavigate, useLocation } from "react-router-dom";
import getBackendURL from "../utils/getBackendURL";
import axios from "axios";
import { useEffect } from "react";

export default function RouteBumper()  {
    const backend = getBackendURL();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const checkPerms = async() => {
            const payload = {
                token:  localStorage.getItem("currentLoginToken"),
                route: location.pathname
            }

            const perms = (await axios.post(`${backend}/check-perms-for-route`, payload)).data

            if(perms !== "hasPerms")
                navigate("/");
        }
        
        checkPerms();
    }, [location, navigate, backend])

    return null
};