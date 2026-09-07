import MainBio from "./MainBio";
import DiscordStatusWidget from "./DiscordStatusWidget";
import FeaturedArtPieceWidget from "./FeaturedArtPieceWidget";
import FeaturedBlogWidget from "./FeaturedBlogWidget";
import RandomNuggetOfWisdom from "./RandomNuggetOfWisdom";
import SocialsWidget from "./SocialsWidget";


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
            <div className="flex mt-[20px] mb-[30px]">
                <FeaturedArtPieceWidget/>
                <FeaturedBlogWidget/>

                <div className="flex-col w-[20%]">
                    <RandomNuggetOfWisdom/>
                    <SocialsWidget/>
                </div>
            </div>
        </div>
    )
}