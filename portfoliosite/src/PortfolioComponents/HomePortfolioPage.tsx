import axios from "axios";
import getBackendURL from "../utils/getBackendURL";

export default function HomePortfolioPage() {

const backend = getBackendURL();
const getData = async () => {
    // try{
    //     const res = await fetch(`${backend}/select`)
    //     const data = await res.json();
    //     console.log(data)
    // } catch(err) {
    //     console.error('Fetch failed: ', err)
    // }

    // try{
    //     const payload = {
    //         username: "mirrorClone",
    //         email: "testingagain@gmail.com",
    //         password: "another123"
    //     }
    //     axios.post(`${backend}/insert`, payload)
    // } catch(err)
    // {
    //     console.error('Insertion Failed: ', err)
    // }

    try{
        const payload = {
            email: "jeremiah12250@gmail.com"
        }
        console.log(axios.post(`${backend}/user-service/find-by-creds`, payload))
    } catch(err)
    {
        console.error('Insertion Failed: ', err)
    }


}

    getData();

    return (
        <div>
            <h1>Hello world</h1>
        </div>
    )
}