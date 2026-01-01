import getBackendURL from "../utils/getBackendURL"

export default function PortfolioPiecesMenu() {
    const backend = getBackendURL();

    return (
        <div className="w-full text-black ml-3">
            <input type="text" placeholder="Title:" className="p-3 text-[30px] mb-2"/>
            <hr/>
            <textarea className="w-[calc(100%-6px)] mt-2" placeholder="Content:"/>
        </div>
    )
}