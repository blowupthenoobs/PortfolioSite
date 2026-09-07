import MainBio from "./MainBio";
import DiscordStatusWidget from "./DiscordStatusWidget";
import HomeSampleArtPiece from "./HomeSampleArtPiece";
import BlogPostThumbail from "./BlogPostThumbnail";
import RandomNuggetOfWisdom from "./RandomNuggetOfWisdom";


export default function HomePortfolioPage() {
const getData = async () => {
    //Does nothing rn I guess
}

    getData();

    return (
        <div className="w-full h-full pl-[1%] pr-[1%] pt-[20px]">
            <div className="flex justify-between">
                <MainBio/>
                <DiscordStatusWidget/>
            </div>
            <div className="flex justify-between mt-[20px]">
                <HomeSampleArtPiece/>
                <BlogPostThumbail Title={"Testing"} BodyText={"Here's a lot of body text to work with as sort of a temp"}/>

                <div className="flex-col w-[20%]">
                    <RandomNuggetOfWisdom/>
                </div>
            </div>
        </div>
    )
}