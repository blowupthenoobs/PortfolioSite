
export default function SocialsWidget() {
const getData = async () => {
    //Does nothing rn I guess
}

    getData();

    return (
        <div className="bg-off-black text-blue-500 border-2 rounded-md border-blue-500 text-lg p-3 mt-5 flex justify-center ">
            <a href={"https://www.youtube.com/@blowupthenoobs"} title={"youtube"} target="_blank"><span className="ml-2 mr-1 block w-10 h-10 bg-blue-500" style={{maskImage: "url('svg/youtube-168-svgrepo-com.svg')", WebkitMaskImage: "url('svg/youtube-168-svgrepo-com.svg')", maskRepeat: "no-repeat", WebkitMaskRepeat: "no-repeat", maskSize: "contain", WebkitMaskSize: "contain", maskPosition: "center", WebkitMaskPosition: "center"}}/></a>
            <a href={"https://blowupthenoobs.itch.io"} title={"itch.io"} target="_blank"><span className="ml-2 mr-1 block w-10 h-10 bg-blue-500" style={{maskImage: "url('svg/itchio-logo-textless-black.svg')", WebkitMaskImage: "url('svg/itchio-logo-textless-black.svg')", maskRepeat: "no-repeat", WebkitMaskRepeat: "no-repeat", maskSize: "contain", WebkitMaskSize: "contain", maskPosition: "center", WebkitMaskPosition: "center"}}/></a>
            <a href={"https://github.com/blowupthenoobs"} title={"github"} target="_blank"><span className="block w-10 h-10 bg-blue-500" style={{maskImage: "url('svg/github-repo-git-octocat-svgrepo-com.svg')", WebkitMaskImage: "url('svg/github-repo-git-octocat-svgrepo-com.svg')", maskRepeat: "no-repeat", WebkitMaskRepeat: "no-repeat", maskSize: "contain", WebkitMaskSize: "contain", maskPosition: "center", WebkitMaskPosition: "center"}}/></a>
            <a href={"https://blowupthenoobs.dev"} title={"discord"} target="_blank"><span className="ml-1 block w-10 h-10 bg-blue-500" style={{maskImage: "url('svg/discord-svgrepo-com.svg')", WebkitMaskImage: "url('svg/discord-svgrepo-com.svg')", maskRepeat: "no-repeat", WebkitMaskRepeat: "no-repeat", maskSize: "contain", WebkitMaskSize: "contain", maskPosition: "center", WebkitMaskPosition: "center"}}/></a>
        </div>
    )
}