
export default function RandomNuggetOfWisdom() {
const getData = async () => {
    //Does nothing rn I guess
}

    getData();

    return (
        <div className="bg-off-black text-blue-500 border-2 rounded-md border-blue-500 p-3 text-lg">
            <h3 className="justify-self-center">Nugget of Wisdom:</h3>
            <div className="bg-gray-800 rounded-md p-1 pl-2 overflow-hidden">
                <p className="animate-[scroll_40s_linear_infinite] line-clamp-1">camelCase is the best case</p>
            </div>
        </div>
    )
}