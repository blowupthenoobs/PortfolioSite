import getBackendURL from "../utils/getBackendURL"

export default function PortfolioPiecesMenu() {
    const backend = getBackendURL();

    return (
        <div className="w-full">
            <input type="text" placeholder="Title:"/>
            <hr/>
            <textarea placeholder="Content:"/>
        </div>
    )
}