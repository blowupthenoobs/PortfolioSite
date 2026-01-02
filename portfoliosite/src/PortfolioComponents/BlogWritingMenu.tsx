import getBackendURL from "../utils/getBackendURL"

export default function PortfolioPiecesMenu() {
    const backend = getBackendURL();

    return (
        <div className="w-full text-black ml-3 mt-2">
            <div className="flex">
                <input type="text" placeholder="Title:" className="p-3 text-[30px] mb-2"/>
                <select className="h-[30px] mt-10 ml-10">
                    <option value={"draft"}>draft</option>
                    <option value={"blog"}>blog</option>
                    <option value={"snippet"}>snippet</option>
                </select>
            </div>
            <hr className="w-[500px] border-primary"/>
            <textarea className="w-[calc(100%-30px)] mt-2 min-h-[300px] p-3" placeholder="Content:"/>
        </div>
    )
}