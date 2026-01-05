import getBackendURL from "../utils/getBackendURL";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MarkdownIt from "markdown-it"
import attrs from "markdown-it-attrs";


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

    md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
        const href = tokens[idx].attrGet("href");

        if(!tokens[idx].attrGet("class")) {
            tokens[idx].attrPush([
                "class",
                href?.startsWith("https://") ? "text-link-color" : "text-secondary-color"
            ])
        }

        return self.renderToken(tokens, idx, options);
    }

    md.renderer.rules.image = function (tokens, idx, options, env, self) {
        tokens[idx].attrPush(["class", "w-full"]);
        return self.renderToken(tokens, idx, options);
    }

    md.use(attrs);

    //_italacize_ **bold** *italacize* ~~strikethrough~~
    //writing {className} right next to any text enclosure can apply classes

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
            <div dangerouslySetInnerHTML={{__html: md.render(blogDetails.content)}}/>
        </div>
    )
}