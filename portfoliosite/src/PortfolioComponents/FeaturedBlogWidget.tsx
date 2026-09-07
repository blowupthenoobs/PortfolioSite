import { useNavigate } from "react-router-dom";
import getBackendURL from "../utils/getBackendURL";
import { useEffect, useState } from "react";
import axios from "axios";

interface Blog {
    title: string;
    content: string;
}

export default function FeaturedBlogWidget() {
    
    const navigate = useNavigate();
    const backend = getBackendURL();
    const [blog, setBlog] = useState<Blog>()

    useEffect(() => {
        const getData = async () => {
            try{
                const response = await axios.get(`${backend}/get-featured-blog`)
                    
                setBlog(response.data);
            } catch(err) {
                console.error('Grab failed: ', err)
            }
        }

        getData();
    }, [backend])

    const trimMarkdown = (text: string) => {
        return text
                .replace(/\[([^\]]+)\([^)]+\)/g, "$1")  //remove links
                .replace(/[*_~`]/g, "")                 //remove styling
                .replace(/#+\s?/g, "")                  //remove headers
                .replace(/!\[.*?\]\(.*?\)/g, "");       //remove images
    }

    const trimContent = (text: string) => {
        return trimMarkdown(text).slice(0, 150)
    }

    const sendToPage = () => {
        if(blog != null)
            navigate("/blog/" + blog.title);
    }

    return (
        <div className="bg-off-black text-blue-500 border-2 rounded-md border-blue-500 p-3 flex-1 mr-6" onClick={sendToPage}>
            {blog != null ?
                <>
                    <h1 className="text-[30px]">{blog?.title}</h1>
                    <hr className="border-blue-500 w-[70%] border-1"/>
                    <p>{trimContent(blog?.content)}...</p>
                </>
                :
                <>
                </>
            }
        </div>
    )
}