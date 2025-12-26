import PortfolioHeader from "./PortfolioHeader";

export default function HackClubMessage() {

    const parenthesesedText = [
        "(namely the ones that are going to be judging this)",
        "(hence the very long time spent on this project,)",
        "(where you are right now)",
        "(will make some of the other secrets accessable)",
        "(this stuff is not going to be open to everyone after I finish working on it, but most of my time was spent on here trying to make edits to the source code",
        ")"
    ];

    return (
        <div className="">
            <PortfolioHeader/>
            <h3>This is my secret message for the hack-clubbers</h3>
            <p>({parenthesesedText[0]})</p>
            <br/>
            <p>I've been mostly working on API and such ({parenthesesedText[1]}) so to show you a bit more of what I've actually been doing I'm gonna give away a few of the secrets</p>
            <ol>
                <li>hackclub ({parenthesesedText[2]})</li>
                <li>accounting ({parenthesesedText[3]})</li>
                <li>drive ({parenthesesedText[4]}) <a>github.com/subnub/myDrive</a>({parenthesesedText[5]})</li>
            </ol>
        </div>
    )
}