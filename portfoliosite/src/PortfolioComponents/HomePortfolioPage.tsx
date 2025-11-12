export default function HomePortfolioPage() {

const backend = process.env.BackEndLocation;
const getData = async () => {
    const res = await fetch("bdlaotwaubpatshienngoobs.blowupthenoobs.dev/select")
    console.log(res)

}

    getData();

    return (
        <div>
            <h1>Hello world</h1>
        </div>
    )
}