import PorfolioHeader from "./PortfolioHeader"
import RouteBumper from "./RouteBumper"

export default function Drive() {
    RouteBumper();
    
    return (
        <div className="flex flex-col h-screen">
            <PorfolioHeader height="10vh"/>
            <iframe src="https://fbalkoewguopotghleendoroibvse.blowupthenoobs.dev" className="w-full flex-grow"></iframe>
        </div>
    )
}