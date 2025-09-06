

export default function PorfolioHeader() {
    return (
        <div className="bg-bg-grey w-full h-[15vh] border-b-2 border-blue-500">     {/*w-1/2 is w-[50%], w-full is same as w-[100%]*/}
            <div className="flex w-fit m-auto h-full items-center"> 
                <img src="/images/MischeviousSmugSmile.png" className="h-[90%] rounded-full"/>
                <h1 className="ml-4 text-[calc(5.5vh)]">blowupthenoobs</h1> {/*text originally 50px*/}
            </div>
        </div>
    )
}