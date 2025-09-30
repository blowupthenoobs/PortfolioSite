import { useLocation, useNavigate } from "react-router-dom";

export default function SecretsMenu() {

    const navigate = useNavigate();
    
    const sendToPage = () => {
        navigate("/drive");
    }

    return (
        <div className="w-fit place-self-center grid justify-items-center place-items-center align-middle mt-[-200px]">
            <h1 className="text-[50px]">Secrets</h1>
            <input className="w-[500px] h-[50px] text-[30px] m-auto"/>
            <p onClick={sendToPage}>Temp link</p>
        </div>
    )
}