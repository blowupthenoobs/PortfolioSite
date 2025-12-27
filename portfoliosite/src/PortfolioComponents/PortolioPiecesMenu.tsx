import GamesPortfolio from "./GamesPortfolio"


export default function PortfolioPiecesMenu() {

    return (
        <div>
            <div className="w-full h-full pl-[1%] pr-[1%] pt-[20px] grid place-content-center text-blue-500">
                <h1 className="bg-black border-2 rounded-md border-blue-500 p-3 min-h-[40%] max-h-[100%] w-full text-[30px]">Games</h1>
                <h1 className="bg-black border-2 rounded-md border-blue-500 p-3 min-h-[40%] max-h-[100%] w-full text-[30px]">Art</h1>
                <h1 className="bg-black border-2 rounded-md border-blue-500 p-3 min-h-[40%] max-h-[100%] w-full text-[30px]">Models</h1>
            </div>
            
            <GamesPortfolio/>
        </div>
    )
}