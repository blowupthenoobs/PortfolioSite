import getBackendURL from "../utils/getBackendURL";

export default function HomePortfolioPage() {

const backend = getBackendURL();
const getData = async () => {
    console.log("starting")
    try{
        console.log("is trying")
        const res = await fetch(`${backend}/select`)
        const data = await res.json();
        console.log(data)
    } catch(err) {
        console.error('Fetch failed: ', err)
    }


}

    getData();

    return (
        <div>
            <h1>Hello world</h1>
        </div>
    )
}