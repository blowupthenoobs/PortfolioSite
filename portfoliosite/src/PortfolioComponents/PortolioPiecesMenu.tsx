import GamesPortfolio from "./GamesPortfolio"


export default function PortfolioPiecesMenu() {

    return (
        <div className="border-primary h-full">
            <div className="w-full pl-[1%] pr-[1%] flex pt-[20px] text-blue-500 bg-bg-grey text-center">
                <h1 className="bg-black border-2 rounded-md border-blue-500 p-3 min-h-[40%] max-h-[100%] w-[30%] text-[30px]">Games</h1>
                <h1 className="bg-black border-2 rounded-md border-blue-500 p-3 min-h-[40%] max-h-[100%] w-[30%] text-[30px]">Art</h1>
                <h1 className="bg-black border-2 rounded-md border-blue-500 p-3 min-h-[40%] max-h-[100%] w-[30%] text-[30px]">Models</h1>
            </div>

            <GamesPortfolio/>
        </div>
    )
}