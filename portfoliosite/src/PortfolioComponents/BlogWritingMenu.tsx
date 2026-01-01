import getBackendURL from "../utils/getBackendURL"

export default function PortfolioPiecesMenu() {
    const backend = getBackendURL();

    return (
        <div className="w-full text-black ml-3 mt-2">
            <input type="text" placeholder="Title:" className="p-3 text-[30px] mb-2"/>
            <hr className="w-[500px] border-primary"/>
            <textarea className="w-[calc(100%-50px)] mt-2 min-h-[300px] p-3" placeholder="Content:"/>
        </div>
    )
}