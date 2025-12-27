interface PortfolioHeader {
    height?: string;
}

import axios from "axios";
import getBackendURL from "../utils/getBackendURL";


const PortfolioHeader: React.FC<PortfolioHeader> = ({height = "15vh"}) => {
    const backend = getBackendURL();
    const getData = async () => {
        try{
            const payload = {
                token: localStorage.getItem("currentLoginToken"),
            }
            const response = await axios.post(`${backend}/user-service/refresh-login-token`, payload)
            localStorage.setItem("currentLoginToken", response.data)
        } catch(err)
        {
            console.error('Refresh Failed: ', err)
        }


    }

    getData();

    return (
        <div className="bg-lighter-black w-full max-h-[15vh] h-[full] border-b-2 border-blue-500 text-primary" style={{height}}>     {/*w-1/2 is w-[50%], w-full is same as w-[100%]*/}
            <div className="flex w-fit m-auto h-full items-center"> 
                <img src="/images/MischeviousSmugSmile.png" className="h-[90%] rounded-full"/>
                <h1 className="ml-4 text-[calc(5.5vh)]">blowupthenoobs</h1> {/*text originally 50px*/}
            </div>
        </div>
    )
}

export default PortfolioHeader