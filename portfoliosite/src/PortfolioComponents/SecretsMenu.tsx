import { useNavigate } from "react-router-dom";
import axios from "axios";
import getBackendURL from "../utils/getBackendURL";
import { useState } from "react";



export default function SecretsMenu() {

    const navigate = useNavigate();
    const backend = getBackendURL();


    const [currentEntry, setTerminalCode] = useState("");

    const checkCode = async () => {
        try{
            const payload = {
                token: localStorage.getItem("currentLoginToken"),
                terminalCode: currentEntry
            }
            const response = await axios.post(`${backend}/check-secret`, payload)

            if(response.data !== "")
                navigate(response.data)
        } catch(err)
        {
            console.error('checking code failed: ', err)
        }
    }

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter") {
            checkCode();
        }
    }

    return (
        <div className="w-fit place-self-center grid justify-items-center place-items-center align-middle mt-[-200px] text-black">
            <h1 className="text-[50px]">Secrets</h1>
            <input className="w-[500px] h-[50px] text-[30px] m-auto" onChange={(e) => setTerminalCode(e.target.value)} onKeyDown={onKeyDown}/>
        </div>
    )
}