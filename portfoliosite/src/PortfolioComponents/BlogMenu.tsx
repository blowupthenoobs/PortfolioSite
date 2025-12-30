import BlogPostThumbail from "./BlogPostThumbnail"
import getBackendURL from "../utils/getBackendURL";
import axios from "axios";
import { useEffect, useState } from "react";

interface Blog {
    title: string;
    content: string;
}

export default function BlogMenu() {
    const backend = getBackendURL();
    const [blogs, setBlogs] = useState<Blog[]>([])

    useEffect(() => {
        const getData = async () => {
            try{
                const response = await axios.get(`${backend}/get-blogs`)
                    
                setBlogs(response.data);
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

    return (
        <div className="w-full h-full  pl-[1%] pr-[1%] pt-[20px]">
            {blogs.map((item) => {
                return(
                    <BlogPostThumbail Title={item.title} BodyText={trimContent(item.content)}/>
                )
            })
            }
        </div>
    )
}