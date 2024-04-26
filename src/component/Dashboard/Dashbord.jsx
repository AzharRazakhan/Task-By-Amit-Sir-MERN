import { useEffect,useState } from "react"
import {postMethodToken} from "../../Service/apiServie.js";
import { useNavigate } from "react-router-dom";



function Dashboard(){
    const [userData,setUserData] = useState({})
    const token =localStorage.getItem("token")
    const redirect = useNavigate()

 useEffect(() => {
    const response = postMethodToken('auth/profile','POST',token);
    response.then(profileData => {
          setUserData(profileData)
        })
        .catch(error => {
          console.error('There was a problem with your fetch operation:', error);
        });

 },[])

 const handleLoginOut = () => {
    localStorage.removeItem("token")
    redirect('/signin')
 }




    return (
        <>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div>
                <div className="text-center mr-auto">
                {token ? 
            <div>

                <>
                        <h1>User is logged in</h1>
                        <h1 className="mr-auto text-orange-600">{userData.fullName}</h1>
                        <button className="bg-blue mr-auto text-orange-600"
                        onClickCapture={handleLoginOut}>
                            logout user
                        </button>
                 </>

            </div>
                
                
             : 'login in Again ...'}
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Dashboard;