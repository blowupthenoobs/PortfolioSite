import PortfolioHeader from "./PortfolioHeader";

export default function HackClubMessage() {

    return (
        <div>
            <PortfolioHeader/>
            <div className="ml-10">
                <h3>This is my secret message for the hack-clubbers</h3>
                <p>(namely the ones that are going to be judging this)</p>
                <br/>
                <p>I've been mostly working on API and such (hence the very long time spent on this project,) so to show you a bit more of what I've actually been doing I'm gonna give away a few of the secrets</p>
                <ul className="list-disc ml-10">
                    <li>hackclub (where you are right now)</li>
                    <li>accounting (will make some of the other secrets accessable)</li>
                    <li>drive (this stuff is not going to be open to everyone after I finish working on it, but most of my time was spent on here trying to make edits to the source code <a>github.com/subnub/myDrive</a>, tho my mongo Atlas thing is currently down for an unknown reason, and thus cannot be used. Source code should work just fine tho)</li>
                </ul>
            </div>
            
        </div>
    )
}