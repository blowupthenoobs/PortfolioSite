import getBackendURL from "../utils/getBackendURL";
import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";


interface BlogPost {
    Title: string;
    BodyText: string;
}

export default function BlogMenu() {
    const backend = getBackendURL();
    const location = useLocation();
    const path = location.pathname;

    const [blogDetails, setBlogDetails] = useState<BlogPost>({Title: "title", BodyText: "content..."})
    
    const getData = async () => {
        try{
            console.log(path.slice(0,5));

            const payload = {
                article: path.slice(0, 5),
            }

            const response = await axios.post(`${backend}/get-blog`, payload)
            setBlogDetails(response.data);
        } catch(err)
        {
            console.error('Failed to get data: ', err)
        }


    }

    getData();

    return (
        <div>
            <h1>{blogDetails.Title}</h1>
        </div>
    )
}