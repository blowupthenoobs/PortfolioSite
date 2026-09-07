
export default function SocialsWidget() {
const getData = async () => {
    //Does nothing rn I guess
}

    getData();

    return (
        <div className="bg-off-black text-blue-500 border-2 rounded-md border-blue-500 text-lg p-3 mt-5 flex">
            <a href={"https://blowupthenoobs.dev"} title={"discord"} target="_blank"><img width="40px"  alt={"discord"} src={"svg/discord-svgrepo-com.svg"}/></a>
            <a href={"https://blowupthenoobs.itch.io"} title={"itch.io"} target="_blank"><img width="40px" src={"svg/itchio-logo-textless-black.svg"}/></a>
        </div>
    )
}