import { useLocation, useNavigate } from "react-router-dom";

interface BlogPostThumbail {
    Title: string;
    BodyText: string;
}

const BlogPostThumbail: React.FC<BlogPostThumbail> = ({Title, BodyText}) => {
    const location = useLocation();
    const navigate = useNavigate();

    const sendToPage = () => {
        // navigate(route);
    }

    return(
        <div className={"bg-black text-blue-500 border-2 rounded-md border-blue-500 p-3 min-h-[40%] max-h-[100%] w-[30%]"} onClick={sendToPage}>
            <h1 className="text-lg">{Title}</h1>
            <hr className="border-blue-500 w-[70%]"/>
            <p>{BodyText}...</p>
        </div>
    )
}

export default BlogPostThumbail;