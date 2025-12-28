import { useNavigate } from "react-router-dom";
import getBackendURL from "../utils/getBackendURL";
import RouteBumper from "./RouteBumper";
import { useState } from "react";
import axios from "axios";

export default function PortfolioPiecesMenu() {
    const backend = getBackendURL();
    const navigate = useNavigate();
    RouteBumper();

    const [username, setUsername] = useState(["unknown user"]);

    const getData = async () => {
        try{
            const payload = {
                token: localStorage.getItem("currentLoginToken"),
            }
            const response = await axios.post(`${backend}/user-service/get-username`, payload)
            setUsername(response.data);
        } catch(err)
        {
            console.error('Failed to catch username: ', err)
        }


    }

    getData();

    const BackToHomePage = () => {
        navigate("/");
    }

    return (
        <div className="w-full h-full pl-[1%] pr-[1%] pt-[20px] grid place-content-center text-primary">
                <p>Congrats "{username}" on finding the first secret!</p>
                <p>You can always come back to this page by typing welcome</p>
                <p>Here's the way <a onClick={BackToHomePage} className="text-green-400 cursor-pointer">back to the main site</a></p>
        </div>
    )
}