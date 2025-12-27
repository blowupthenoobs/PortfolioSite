import { useLocation } from "react-router-dom";


import SectionPanel from "./SectionPanel"
import HomePortfolioPage from "./HomePortfolioPage"
import PorfolioHeader from "./PortfolioHeader"
import BlogMenu from "./BlogMenu";
import SecretsMenu from "./SecretsMenu";
import PortfolioPiecesMenu from "./PortolioPiecesMenu";

export default function MainPage() {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <div>
            <PorfolioHeader/>
            <div className="flex ml-[100px] mt-10 w-full">
                <SectionPanel/>
                <div className="bg-bg-dark-grey w-[calc(100%-225px)] min-h-[700px] border-2 border-blue-500 p-2 grid text-primary">
                    {currentPath === "/"?
                        <>
                            <HomePortfolioPage/>
                        </>:
                    currentPath === "/blogs"?
                        <>
                            <BlogMenu/>
                        </>:
                    currentPath.startsWith("/portfolio") ?
                        <>
                            <PortfolioPiecesMenu/>
                        </>:
                    currentPath === "/secrets"?
                    <>
                        <SecretsMenu/>
                    </>:
                    <>
                        <p>you weren't supposed to find this, that or I've yet to implement it</p>
                    </>
                    }
                </div>
            </div>
        </div>
    )
}