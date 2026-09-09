import { useState } from "react";
import getBackendURL from "../utils/getBackendURL"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MarkDownBubble from "./MarkDownBubble";

export default function PortfolioPiecesMenu() {
    const backend = getBackendURL();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [blogType, setBlogType] = useState("draft");
    const [mode, setMode] = useState("writing");

    const togglePreview = () => {
        if(mode === "writing")
            setMode("preview")
        else
        {
            setMode("writing")
        }
    }

    const sendData = async () => {
        try{
            const payload = {
                    title: title,
                    content: content,
                    blogType: blogType
                }

            const response = await axios.post(`${backend}/post-blog`, payload)

            navigate("/blog" + response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="w-full text-black ml-3 mt-2">
            <div className="flex">
                <input type="text" placeholder="Title:" className="p-3 text-[30px] mb-2" onChange={(e) => setTitle(e.target.value)}/>
                <select className="h-[30px] mt-5 ml-5 bg-primary text-black" onChange={(e) => setBlogType(e.target.value)}>
                    <option value={"draft"}>draft</option>
                    <option value={"blog"}>blog</option>
                    <option value={"snippet"}>snippet</option>
                </select>
            </div>
            <hr className="w-[500px] border-primary"/>
            <div className="w-[calc(100%-30px)] mt-2 min-h-[300px]">
                {mode == "writing"?
                    <>
                        <textarea className="p-3 w-full h-full min-h-[500px]" placeholder="Content:" value={content} onChange={(e) => setContent(e.target.value)} onKeyDown={(e) => {
                            if(e.key === "Tab") {
                                e.preventDefault();
                                
                                const textarea = e.currentTarget;
                                const start = textarea.selectionStart;
                                const end = textarea.selectionEnd;
                                setContent(content.substring(0, start) + "          " + content.substring(end));
                                setTimeout(() => {
                                    textarea.selectionStart = textarea.selectionEnd = start + 10;
                                }, 0);
                            }
                        }}/>
                    </>:
                mode == "preview"?
                    <>
                        <MarkDownBubble text={content}/>
                    </>:

                    <>
                    </>
                }
            </div>

            <div className="flex mt-5">
                <button className="bg-secondary-color p-2 rounded-[2px]" onClick={togglePreview}>Preview</button>
                <button className="bg-link-color p-2 ml-3 rounded-[2px]" onClick={sendData}>Submit</button>
            </div>
        </div>
    )
}