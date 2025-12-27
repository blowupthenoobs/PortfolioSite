import { useNavigate } from "react-router-dom";
import RouteBumper from "./RouteBumper";

export default function PortfolioPiecesMenu() {
    const navigate = useNavigate();
    RouteBumper();

    const BackToHomePage = () => {
        navigate("/");
    }

    return (
        <div className="w-full h-full pl-[1%] pr-[1%] pt-[20px] grid place-content-center text-primary">
                <p>Congrats on finding the first secret!</p>
                <p>You can always come back to this page by typing welcome</p>
                <p>Here's the way <a onClick={BackToHomePage} className="text-green-400 cursor-pointer">back to the main site</a></p>
        </div>
    )
}