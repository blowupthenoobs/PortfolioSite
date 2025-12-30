import getBackendURL from "../utils/getBackendURL";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MarkdownIt from "markdown-it"


interface BlogPost {
    title: string;
    content: string;
}

export default function BlogArticle() {
    const backend = getBackendURL();
    const location = useLocation();
    const path = location.pathname;
    const md = MarkdownIt({
        html:true,
    });

    const tempTestContent = "is _this_ **text** *marked* ~~down?~~"

    const [blogDetails, setBlogDetails] = useState<BlogPost>({title: "title", content: "content..."})
    
    useEffect(() => {
        const getData = async () => {
            try{
                console.log(path.substring(6));

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
        <div>
            <h1>{blogDetails.title}</h1>
            <hr className="border-primary"/>
            <p>{blogDetails.content}</p>
            <div dangerouslySetInnerHTML={{__html: md.render(tempTestContent)}}/>
        </div>
    )
}