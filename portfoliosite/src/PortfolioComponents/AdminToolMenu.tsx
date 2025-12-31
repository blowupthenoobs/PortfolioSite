import { useLocation } from "react-router-dom";


import PorfolioHeader from "./PortfolioHeader"
import BlogMenu from "./BlogMenu";
import PortfolioPiecesMenu from "./PortolioPiecesMenu";

export default function AdminToolMenu() {
    const location = useLocation();
    const currentPath = location.pathname.substring(6);

    console.log(currentPath)

    return (
        <div>
            <PorfolioHeader/>
            <div className="flex ml-[100px] mt-10 w-full">
                <div className="bg-lighter-black w-[calc(100%-225px)] min-h-[700px] border-2 border-blue-500 p-2 grid text-primary">
                    {currentPath === "/"?
                        <>
                            <p>This probably shouldn't exist ¯\_(ツ)_/¯</p>
                        </>:
                    currentPath === "/blogging"?
                        <>
                            <BlogMenu/>
                        </>:
                    currentPath === "/portfolio" || currentPath.startsWith("/portfolio/") ?
                        <>
                            <PortfolioPiecesMenu/>
                        </>:
                    <>
                        <p>This probably shouldn't exist ¯\_(ツ)_/¯</p>
                    </>
                    }
                </div>
            </div>
        </div>
    )
}