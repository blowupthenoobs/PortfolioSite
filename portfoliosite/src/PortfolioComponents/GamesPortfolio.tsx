export default function PortfolioPiecesMenu() {

    interface iframeDetails {
        source: string;
        link: string;
    }

    const game: iframeDetails[] = [
        {
            source: "https://itch.io/embed-upload/14505244?color=5e7db0",
            link: "https://lantern-games.itch.io/yet-again"
        }
    ]

    return (
        <div className="w-full h-full  pl-[1%] pr-[1%] pt-[20px] flex pb-[20px]">
            <div className="h-[30%] w-[30px] border-primary border-2 bg-lighter-black"> {/* LeftButton */}
                {/* Need to find some icon to put here */}
            </div>
            <iframe src={game[0].source} allowFullScreen={false} width="980" height="640"><a href={game[0].link}>Play Yet Again on itch.io</a></iframe>
            <div className="h-[30%] w-[30px] border-primary border-2 bg-lighter-black"> {/* LeftButton */}
                {/* Need to find some icon to put here */}
            </div>
        </div>
    )
}