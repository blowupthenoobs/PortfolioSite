import BlogPostThumbail from "./BlogPostThumbnail"
import getBackendURL from "../utils/getBackendURL";
import axios from "axios";
import { useState } from "react";

export default function BlogMenu() {
    const backend = getBackendURL();
    const [blogs, setBlogs] = useState([])

    const getData = async () => {
        try{
            const response = await axios.get(`${backend}/get-blogs`)
            
            setBlogs(response.data);
        } catch(err)
        {
            console.error('Refresh Failed: ', err)
        }


    }

    getData();

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