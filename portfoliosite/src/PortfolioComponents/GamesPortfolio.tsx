export default function PortfolioPiecesMenu() {
    interface iframeDetails {
        source: string;
        link: string;
        text?: string;
    }

    const game: iframeDetails[] = [
        {
            source: "https://itch.io/embed-upload/14505244?color=5e7db0",
            link: "https://lantern-games.itch.io/yet-again"
        },
        {
            source: "https://itch.io/embed-upload/15493256?color=000000",
            link: "https://blowupthenoobs.itch.io/warpshot"
        },
        {
            source: "https://itch.io/embed-upload/14946514?color=333333",
            link: "https://blowupthenoobs.itch.io/sole-slinger"
        },
        {
            source: "https://itch.io/embed-upload/15927887?color=3f2832",
            link: "https://blowupthenoobs.itch.io/speedrunner"
        },
        {
            source: "https://itch.io/embed-upload/8630976?color=333333",
            link: "https://blowupthenoobs.itch.io/farmerjoe"
        }
    ]

    let selected = 0;

    const switchGameForward = () => {
        selected++;

        if(selected >= game.length)
        {
            while(selected >= game.length)
            {
                selected -= game.length;
            }
        }
    }

    const switchGameBack = () => {
        selected--;

        if(selected < 0)
        {
            while(selected < game.length)
            {
                selected += game.length;
            }
        }
    }

    return (
        <div className="w-full h-full  pl-[1%] pr-[1%] pt-[20px] flex pb-[20px]">
            <div className="h-[30%] w-[30px] border-primary border-2 bg-lighter-black" onClick={switchGameBack}> {/* LeftButton */}
                {/* Need to find some icon to put here */}
            </div>
            <iframe src={game[selected].source} allowFullScreen={false} width="980" height="640"><a href={game[selected].link}>Host Source:</a></iframe>
            <div className="h-[30%] w-[30px] border-primary border-2 bg-lighter-black" onClick={switchGameForward}> {/* LeftButton */}
                {/* Need to find some icon to put here */}
            </div>
        </div>
    )
}