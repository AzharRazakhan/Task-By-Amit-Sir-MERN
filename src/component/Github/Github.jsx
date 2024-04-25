import { useEffect,useState } from "react"
export default function Github(){
    const [data,setData] = useState([])
    useEffect(() => {
        fetch('https://github.com/users/hiteshchodhary')
        .then(response => response.json())
        .then(data => setData(data))
    },[

    ])
    return(
        <div className="bg-gray-500 text-center text-3xl">
            Github Follwer: {data}
        </div>
    )
}