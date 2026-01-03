import { useState } from "react";
import getBackendURL from "../utils/getBackendURL"
import MarkdownIt from "markdown-it";

export default function PortfolioPiecesMenu() {
    const backend = getBackendURL();
    const md = MarkdownIt({
        html:true,
    });

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [mode, setMode] = useState("writing");

    const togglePreview = () => {
        if(mode === "writing")
            setMode("preview")
        else
        {
            setMode("writing")
        }
    }

    return (
        <div className="w-full text-black ml-3 mt-2">
            <div className="flex">
                <input type="text" placeholder="Title:" className="p-3 text-[30px] mb-2" onChange={(e) => setTitle(e.target.value)}/>
                <select className="h-[30px] mt-5 ml-5 bg-primary text-black">
                    <option value={"draft"}>draft</option>
                    <option value={"blog"}>blog</option>
                    <option value={"snippet"}>snippet</option>
                </select>
            </div>
            <hr className="w-[500px] border-primary"/>
            <div className="w-[calc(100%-30px)] mt-2 min-h-[300px]">
                {mode == "writing"?
                    <>
                        <textarea className="p-3 w-full h-fit" placeholder="Content:" value={content} onChange={(e) => setContent(e.target.value)}/>
                    </>:
                mode == "preview"?
                    <>
                        <div className="text-primary bg-bg-grey p-3 w-full h-fit" dangerouslySetInnerHTML={{__html: md.render(content)}}/>
                    </>:

                    <>
                    </>
                }
            </div>

            <div className="flex mt-5">
                <button className="bg-secondary-color p-2 rounded-[2px]" onClick={togglePreview}>Preview</button>
                <button className="bg-link-color p-2 ml-3 rounded-[2px]">Submit</button>
            </div>
        </div>
    )
}