import { useLocation, useNavigate } from "react-router-dom"

import GamesPortfolio from "./GamesPortfolio"


export default function PortfolioPiecesMenu() {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;

    const OpenGames = () => {
        navigate("/portfolio/games")
    }

    const OpenArt = () => {
        navigate("/portfolio/arts")
    }

    const OpenModels = () => {
        navigate("/portfolio/models")
    }

    return (
        <div className="w-full">
            <div className="w-full -mx-2 -my-2 pl-[1%] pr-[1%] flex pt-[20px] text-blue-500 bg-off-black text-center place-content-around pb-4"> {/* you can write negative margins by putting the - before them*/}
                <h1 className="bg-bg-dark-grey border-2 rounded-md border-blue-500 p-3 min-h-[20%] max-h-[40%] w-[10%] text-[20px]" onClick={OpenGames}>Games</h1>
                <h1 className="bg-bg-dark-grey border-2 rounded-md border-blue-500 p-3 min-h-[20%] max-h-[40%] w-[10%] text-[20px]" onClick={OpenArt}>Art</h1>
                <h1 className="bg-bg-dark-grey border-2 rounded-md border-blue-500 p-3 min-h-[20%] max-h-[40%] w-[10%] text-[20px]" onClick={OpenModels}>Models</h1>
            </div>
            <div className="mt-5">
                {currentPath.endsWith("/games")?
                    <>
                        <GamesPortfolio/>
                    </>:
                 currentPath.endsWith("/arts")?
                    <>
                        <p>Srry, I've still yet to hook this up</p>
                    </>:
                 currentPath.endsWith("/models")?
                    <>
                        <p>Srry, I've still yet to hook this up</p>
                    </>:
                    <>
                        <p>Welcome to my portfolio</p>
                        <p>Click on a button to get started</p>
                    </>
                }
            </div>
            
        </div>
    )
}