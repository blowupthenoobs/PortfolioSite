import axios from "axios";
import { useState } from "react";

interface Status {
    discord_status: 'online' | 'dnd' | 'idle';
    username: string;
    discriminator: string;
    discord_user: {
        username: string;
        discriminator: string;
        avatar: string;
        id: string;
    };
    spotify: {
        track_id: string;
        song: string;
        artist: string;
        album: string;
        album_art_url: string;

        timestamps: {
            start: number;
            end: number;
        };
    } | null

    activities: Activity[];
}

interface Activity { //put in a lot more stuff than I need, but I figure if I ever wanna use it again, it'll be nice to have
    ide: string;
    name: string;
    type: ActivityType;

    url?: string;
    created_at: number;

    timestamps?: {
        start?: number;
        end?: number;
    }

    application_id?: string;

    details: string;
    state?: string;

    emoji?: {
        name: string;
        id?: string;
        animated: boolean;
    };

    party?: {
        id?: string;
        size?: [number, number];
    };

    assets?: {
        large_image?: string;
        large_text?: string;
        small_image?: string;
        small_text?: string;
    };

    secrets?: {
        join?: string;
        spectate?: string;
        match?: string;
    };

    instance?: boolean;
    flags?: number;
    sync_id?: string;
    session_id?: string;
}

enum ActivityType {
    PLAYING = 0,
    STREAMING = 1,
    LISTENING = 2,
    WATCHING = 3,
    CUSTOM_STATUS = 4,
    COMPETING = 5
}


export default function DiscordStatusWidget() {

const [data, setData] = useState<Status>();
const getData = async () => {
    const response = await axios.get(`https://api.lanyard.rest/v1/users/609771201195409413`) //number at the end is my id. Since it's front end anyways, there's no point in hiding it
    setData(response.data.data);
    // console.log(data);
}

const getStatusName = (status: number) => {
    switch(status) {
        case 0:
            return "Playing:";
        case 1:
            return "";
        case 2:
            return "Listening to:";
        case 3:
            return "";
        case 4:
            return "";
        case 5:
            return "";
        default:
            return "";
    }
}

const turnSecsToTimeString = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    seconds -= mins * 60;
    let extraZero = "";
    if(seconds < 10)
        extraZero = "0"

    return (mins.toString() + ":" + extraZero + seconds.toString())
}

const getProgressText = () => {
    if(data?.spotify?.timestamps != null) // I don't like how it wants me to give it this sort of gaurd rail, lol. Not even like it's gonna be called without these variables filled
    {
        const elapsed = Date.now() - data?.spotify?.timestamps?.start;
        const duration = data.spotify.timestamps.end - data.spotify.timestamps.start;

        return (turnSecsToTimeString(Math.floor(elapsed / 1000)) + " / " + turnSecsToTimeString(Math.floor(duration / 1000)))
    }
}

const getFillPercent = () => {
    if(data?.spotify?.timestamps != null)
    {
        const elapsed = Date.now() - data?.spotify?.timestamps?.start;
        const duration = data.spotify.timestamps.end - data.spotify.timestamps.start;

        return (elapsed / duration * 100)
    }
}

    getData();

    return (
        <div className="bg-off-black text-blue-500 border-2 rounded-md border-blue-500 p-3 min-h-[40%] w-[400px]">
            <h3 className="text-2xl">Current Status</h3>
            <hr className="border-blue-500 w-[60px] border-1 mt-1 mb-3"/>

            <div className="border-white border-3 ">
                    <h4 className="mt-auto mb-auto text-[16px]">{getStatusName(2)}</h4>
                <div className="content-center">
                    {data?.spotify != null ?
                        <> 
                            <p className="justify-self-center text-[20px]">{data?.spotify.song}</p>
                            <img src={data?.spotify.album_art_url} className="w-[90%] ml-auto mr-auto"/>

                            <div className="h-[2px]"></div> {/* couldn't find any other way to make a space, lol*/}

                            {/* Music Progress */}
                            <div className="h-2 w-[91%] bg-blue-200 justify-self-center rounded-md">
                                <div className="h-full bg-blue-500 rounded-md" style={{width: `${getFillPercent()}%`}}></div>
                            </div>
                            <p className="ml-[6%]">{getProgressText()}</p>
                        </>
                    :
                        <>
                        
                        </>
                    }
                </div>
            </div>
            
            
        </div>
    )
}