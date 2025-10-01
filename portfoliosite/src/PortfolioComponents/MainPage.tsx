import { useLocation, useNavigate } from "react-router-dom";


import SectionPanel from "./SectionPanel"
import HomePortfolioPage from "./HomePortfolioPage"
import PorfolioHeader from "./PortfolioHeader"
import BlogMenu from "./BlogMenu";
import SecretsMenu from "./SecretsMenu";

export default function MainPage() {
    const location = useLocation();
    const currentPath = location.pathname;


    return (
        <div>
            <PorfolioHeader/>
            <div className="bg-bg-dark-grey flex ml-[100px] mt-10 w-full">
                <SectionPanel/>
                <div className="bg-off-black w-[80%] h-[60vh] min-h-[500px] border-2 border-blue-500 p-2 grid">
                    {currentPath === "/"?
                        <>
                            <HomePortfolioPage/>
                        </>:
                    currentPath === "/blogs"?
                        <>
                            <BlogMenu/>
                        </>:
                    currentPath === "/secrets"?
                    <>
                        <SecretsMenu/>
                    </>:
                        <>

                        </>
                    }
                </div>
            </div>
        </div>
    )
}