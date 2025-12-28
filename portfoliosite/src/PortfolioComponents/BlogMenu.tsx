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
            console.log("began running")
            try{
                const response = await axios.get(`${backend}/get-blogs`)
                console.log(response)
                    
                setBlogs(response.data);
            } catch(err) {
                console.error('Grab failed: ', err)
            }

            console.log("end of running");
        }

        getData();
    }, [backend])

    return (
        <div className="w-full h-full  pl-[1%] pr-[1%] pt-[20px]">
            {blogs.map((item) => {
                return(
                    <BlogPostThumbail Title={item.title} BodyText={item.content}/>
                )
            })
            }
        </div>
    )
}