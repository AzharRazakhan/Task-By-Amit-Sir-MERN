import { NavLink,useNavigate } from "react-router-dom";
import { useState } from "react";
import { useFormik } from "formik";
import { forgetPasswordValidation } from "../validation/formValistion";
import {postMethodData} from "../../Service/apiServie.js"
import  '../../App.css';

export default function Forgetpassword() {
    const [isLoading,setIsLoading] = useState(false);


  const redirect = useNavigate()



  const {handleSubmit,handleChange,handleBlur,errors} = useFormik({
    initialValues:{email:''},
    
    validationSchema:forgetPasswordValidation,
    onSubmit:(value) => {
      console.log(value)
      const result = postMethodData('sendMail','POST',value)
    result.then(json => {
      setIsLoading(true);
      if(Object.keys(json).length > 0) {    
        console.log(Object.keys(json))
        setTimeout(() => {
          setIsLoading(false);
          alert('Mail is Send on your Email Address')
                }, 2000);
      }})
    },
  
    
  })


if (isLoading) {
  return <><div className="loader"></div></>;
}




  

    return (
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto"                             src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
          alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Forget Password</h2>
          <p>Just enter your email and we will send you  a reset password link.</p>
        </div>
        
        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block font-medium leading-6 text-gray-900">Email address</label>
              <div className="mt-2">
                <input id="email"  
                name="email"  
                type="email" 
                onChange={handleChange} 
                onBlur={handleBlur}
                autoComplete="off" 
                className={`block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset 
                ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                 focus:ring-orange-600 sm:leading-6 ${errors.email ? 'error-border' :''}`} />
              </div>
              {errors.email && <span className="text-red-600">{errors.email}</span>}

            </div>

            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">Send Recovery Mail</button>
            </div>
          </form>
        
          <p className="mt-10 text-center text-gray-500">
            Not a member?
            <NavLink to="/signup" className="font-semibold leading-6 text-orange-600 hover:text-orange-500">Sign Up</NavLink>
          </p>
        </div>
      </div>
    );
  }
  