import { NavLink,useNavigate,useSearchParams } from "react-router-dom";
import { useState } from "react";
import { newPasswordValidation } from "../validation/formValistion";
import {postMethodData} from "../../Service/apiServie.js"
import { useFormik } from "formik";
import  '../../App.css';


export default function NewPassword() {
    const [isLoading,setIsLoading] = useState(false);
     
    const [tokenUrl] = useSearchParams();
    const userId = tokenUrl.get('id')
    const token = tokenUrl.get('token');
    console.log(tokenUrl);
 

  const initialValue = {
    newPassword:'',
    confirmPassword:''
  }

  const redirect = useNavigate()

  const {handleSubmit,handleChange,handleBlur,errors} = useFormik({
    initialValues: initialValue,
    validationSchema: newPasswordValidation,
    onSubmit: (values) => {
      console.log(values)
      values.userId = userId
      values.token = token
      const result = postMethodData('http://localhost:3000/resetPassword','POST',values)
       result.then((json) => {
         setIsLoading(true);
        console.log(json)
        if(Object.keys(json).length > 0) {    
          console.log(Object.keys(json))
          setTimeout(() => {
            setIsLoading(false);
            redirect('/signin')
                  }, 2000);
  
        }})
    }
  })



if (isLoading) {
  return <><div className="loader"></div></>;
}





    return (
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto"src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
          alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">New Password</h2>
          <p className="mt-5 text-center text-gray-500">Please create a new password that you don't use on any other site.</p>
        </div>
        
        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Creat New Password</label>
              <div className="mt-2">
                <input id="newPassword" 
                name="newPassword"  
                type="password"  
                onChange={handleChange} 
                onBlur={handleBlur} 
                className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                p-2
                 ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6 ${errors.newPassword ? 'error-border' : ''}`} />
              </div>
              {errors.newPassword && <span className="text-red-600">{errors.newPassword}</span>}

            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
              <div className="mt-2">
                <input 
                id="cpassword" 
                name="confirmPassword"  
                type="password" 
                onChange={handleChange} 
                onBlur={handleBlur} 
                className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
                p-2
                 ring-gray-300 placeholder:text-gray-400 focus:ring-2 
                 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6 ${errors.confirmPassword ? 'error-border' : ''}`} />
              </div>
              {errors.confirmPassword && <span className="text-red-600">{errors.confirmPassword}</span>}

            </div>

            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">Send Recovery Mail</button>
            </div>
          </form>
        
          <p className="mt-10 text-center text-sm text-gray-500">
            Just remember?
            <NavLink to="/signup" className="font-semibold leading-6 text-orange-600 hover:text-orange-500">Sign Up</NavLink>
          </p>
        </div>
      </div>
    );
  }
  