export default function HomePortfolioPage() {

const backend = import.meta.env.BackEndLocation;
console.log(backend)
const getData = async () => {
    const res = await fetch(`${backend}/select`)
    console.log(res)

}

    getData();

    return (
        <div>
            <h1>Hello world</h1>
        </div>
    )
}