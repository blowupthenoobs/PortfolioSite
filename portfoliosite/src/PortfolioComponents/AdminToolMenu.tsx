import { useLocation } from "react-router-dom";
import RouteBumper from "./RouteBumper";


import PorfolioHeader from "./PortfolioHeader"
import BlogWriter from "./BlogWritingMenu";

export default function AdminToolMenu() {
    const location = useLocation();
    const currentPath = location.pathname.substring(6);
    RouteBumper();

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
                            <BlogWriter/>
                        </>:
                    // currentPath === "/portfolio" || currentPath.startsWith("/portfolio/") ?
                    //     <>
                    //         <PortfolioPiecesMenu/>
                    //     </>:
                    <>
                        <p>This probably shouldn't exist ¯\_(ツ)_/¯</p>
                    </>
                    }
                </div>
            </div>
        </div>
    )
}