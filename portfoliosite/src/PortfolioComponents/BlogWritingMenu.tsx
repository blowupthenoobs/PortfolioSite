import getBackendURL from "../utils/getBackendURL"

export default function PortfolioPiecesMenu() {
    const backend = getBackendURL();

    return (
        <div className="w-full text-black ml-3">
            <input type="text" placeholder="Title:"/>
            <hr/>
            <textarea className="w-(calc(100% - 6px))" placeholder="Content:"/>
        </div>
    )
}