import { useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";
import {useFormik} from "formik";
import { signInValidations } from "../validation/formValistion";
import {postMethodData} from "../../Service/apiServie.js";
import  '../../App.css';

export default function Signin() {
  const [isLoading,setIsLoading] = useState(false);
  //using Formik
  const initialState = {
    email: '',
    password: ''
  } 

  const redirect = useNavigate()

  const {values,handleBlur,handleChange,handleSubmit,errors} = useFormik({
    initialValues:initialState,
    validationSchema:signInValidations,
    onSubmit:values=> {
    const response =  postMethodData('auth/sign_in','POST',values)
    response.then(json => {
      console.log(response);
      setIsLoading(true);
          if(json && json.token.length > 0) {    
            setTimeout(() =>{
              setIsLoading(false);
              redirect('/dashboard')
            },2000 )
            localStorage.setItem('token', json.token)
          }
        }
      )
    response.catch((errors) => {console.log(errors)})
    } })

    if (isLoading) {
      return <><div className="loader"></div></>;
    }
    

  return (
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto"        
            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
          alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
        </div>
        
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block font-medium leading-6 text-gray-900">Email address</label>
              <div className="mt-2">
          <input id="email" name="email" 
           onChange={handleChange}
           onBlur={handleBlur}
           value={values.email}


            type="email" 
            autoComplete="off" 
          className={`block w-full rounded-md p-2 border-0 py-1.5
           text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
            placeholder:text-gray-400 focus:ring-2 focus:ring-inset
             focus:ring-orange-600 sm:text-sm sm:leading-6 ${errors.email ? 'error-border' : ''}`}
          />
              </div>
              {errors.email && <span className="text-red-600">{errors.email}</span>}
            </div>

            
        
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block font-medium leading-6 text-gray-900">Password</label>
                <div className="">
                  <NavLink to="/forget" className="font-semibold text-orange-600 hover:text-indigo-500">Forgot password?</NavLink>
                </div>
              </div>
              <div className="mt-2">
                <input id="password" name="password" 
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password} 
                type="password" 
                border={
                 "1px solid red"
                }
                autoComplete="current-password"  
                className={`block w-full rounded-md border-0 py-1.5 p-2
                 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                  placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                   focus:ring-orange-600 sm:leading-6 ${errors.password ? 'error-border':'' }`} />
              </div>
              {errors.password && <span className="text-red-600">{errors.password}</span>}
            </div>
        
            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">Sign in</button>
            </div>
          </form>
        
          <p className="mt-10 text-center text-gray-500">
            Not a member?
            <NavLink to="/signup" className="font-semibold leading-6 text-orange-600 hover:text-orange-500">Sign Up</NavLink>
          </p>
        </div>
      </div>
    ); 
  

  


    // return (
    //   <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    //     <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    //       <img className="mx-auto h-10 w-auto"        
    //         src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
    //       alt="Your Company" />
    //       <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
    //     </div>
        
    //     <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    //       <form className="space-y-6" onSubmit={formik.onSubmit}>
    //         <div>
    //           <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
    //           <div className="mt-2">
    //       <input id="email" name="email"  onChange={handleInput} type="email" autoComplete="off" 
    //       className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" 
    //       />
    //           </div>
    //           {error.email && <span className="text-red-600">{error.email}</span>}
    //         </div>

            
        
    //         <div>
    //           <div className="flex items-center justify-between">
    //             <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
    //             <div className="text-sm">
    //               <NavLink to="/forget" className="font-semibold text-orange-600 hover:text-indigo-500">Forgot password?</NavLink>
    //             </div>
    //           </div>
    //           <div className="mt-2">
    //             <input id="password" name="password" onChange={handleInput} type="password" autoComplete="current-password"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" />
    //           </div>
    //           {error.password && <span className="text-red-600">{error.password}</span>}
    //         </div>
        
    //         <div>
    //           <button type="submit" className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">Sign in</button>
    //         </div>
    //       </form>
        
    //       <p className="mt-10 text-center text-sm text-gray-500">
    //         Not a member?
    //         <NavLink to="/signup" className="font-semibold leading-6 text-orange-600 hover:text-orange-500">Sign Up</NavLink>
    //       </p>
    //     </div>
    //   </div>
    // );
  }
  