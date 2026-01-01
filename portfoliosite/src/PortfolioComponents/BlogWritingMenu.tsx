import getBackendURL from "../utils/getBackendURL"

export default function PortfolioPiecesMenu() {
    const backend = getBackendURL();

    return (
        <div className="w-full text-black">
            <input type="text" placeholder="Title:"/>
            <hr/>
            <textarea className="w-full" placeholder="Content:"/>
        </div>
    )
}