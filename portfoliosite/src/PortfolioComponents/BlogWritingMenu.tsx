import getBackendURL from "../utils/getBackendURL"

export default function PortfolioPiecesMenu() {
    const backend = getBackendURL();

    return (
        <div className="w-full text-black ml-3 mb-2">
            <input type="text" placeholder="Title:" className="p-3 text-[30px]"/>
            <hr/>
            <textarea className="w-[calc(100% - 6px)] mt-2" placeholder="Content:"/>
        </div>
    )
}