import { useLocation, useNavigate } from "react-router-dom";

interface PortfolioSideTab {
    Label: string;
    route: string;
}

// export default function PortfolioSideTab() {
//     return (
//         <div className="border-2 border-blue-500 p-1 border-l-0 mb-3 [writing-mode:vertical-lr]">
//             <h1>Sides</h1>
//         </div>
//     )
// }

const PortfolioSideTab: React.FC<PortfolioSideTab> = ({Label, route}) => {
    const location = useLocation();
    const currentPath = location.pathname;
    const navigate = useNavigate();

    const sendToPage = () => {
        navigate(route);
    }

    return(
        <div className={`"bg-off-black pt-2 pb-2 text-blue-500 border-2 border-blue-500 p-1 border-l-0 mb-3 [writing-mode:vertical-lr] select-none cursor-default"
            ${ currentPath === route 
                ? ""
                : "mr-[10px]"
            }`} onClick={sendToPage}>
            <h1 className="mr-2">{Label}</h1>
        </div>
    )
}

export default PortfolioSideTab;