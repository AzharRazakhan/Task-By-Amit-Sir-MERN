import { useParams } from "react-router-dom"

export default function User(){
    const {id} = useParams()
    return(
        <>
        <div className="bg-gray-500 text-white text-3xl text-center p-4 m-4">
            User id: {id}
        </div>
        </>
    )
}