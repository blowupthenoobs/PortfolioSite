export default function HomePortfolioPage() {

const backend = import.meta.env.VITE_BackEndLocation;
const getData = async () => {
    try{

        const res = await fetch(`${backend}/select`)
        console.log(res)
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