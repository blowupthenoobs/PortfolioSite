import getBackendURL from "../utils/getBackendURL";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MarkDownBubble from "./MarkDownBubble";


interface BlogPost {
    title: string;
    content: string;
}

export default function BlogArticle() {
    const backend = getBackendURL();
    const location = useLocation();
    const path = location.pathname;

    const [blogDetails, setBlogDetails] = useState<BlogPost>({title: "title", content: "content..."})
    
    useEffect(() => {
        const getData = async () => {
            try{
                const payload = {
                    article: path.substring(6),
                }

                const response = await axios.post(`${backend}/get-blog`, payload)
                setBlogDetails(response.data);
            } catch(err)
            {
                console.error('Failed to get data: ', err)
            }


        }

        getData();
    }, [backend, path])
    

    return (
        <div className="ml-3">
            <h1 className="text-[50px]">{blogDetails.title}</h1>
            <hr className="border-primary w-[10%]"/>
            <br/>
            <MarkDownBubble text={blogDetails.content}/>
        </div>
    )
}