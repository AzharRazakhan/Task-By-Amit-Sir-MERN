import { useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";
import {signUpFormValidation} from "../validation/formValistion"
import { useFormik } from "formik";
import { postMethodData } from "../../Service/apiServie.js"
import  '../../App.css';




export default function Signup() {
  const [isLoading,setIsLoading] = useState(false);
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const [firstName, setFirstName] = useState('')
  // const [lastName, setLastName] = useState('')

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log(email,password,firstName,lastName)

  // }

//   const [formData,setFormData] = useState({
//     email:'',
//     password:'',
//     firstName:'',
//     lastName:''
//   })
  const redirect = useNavigate()

//   const [error,setError] = useState({})

//   const handleInput = (e) => {
//     const name = e?.target?.name
//     const value = e?.target?.value
//     setFormData({
//      ...formData,
//       [name]:value
//     })


//     const validationError = {};

//     if (!formData?.firstName?.trim()) {
//       validationError.firstName = 'firstName is required';
//     }else if(formData?.firstName?.length < 3) {
//       validationError.firstName = 'firstName must be at least 3 characters';
//     } 

//     if (!formData?.lastName?.trim()) {
//       validationError.lastName = 'lastName is required';
//     }else if(formData?.lastName?.length < 3) {
//       validationError.lastName = 'lastName must be at least 3 characters';
//     }

//     if (!formData?.email?.trim()) {
//       validationError.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData?.email) && formData?.email?.length > 1) {
//       validationError.email = 'Invalid email address';
//     }
  
//     if (!formData?.password?.trim()) {
//       validationError.password = 'Password is required';
//     } else if (formData?.password?.length < 6) {
//       validationError.password = 'Password must be at least 6 characters';
//     }
  
//     setError(validationError);
//   }

//  const handleSubmit = (e) => { 
//   e.preventDefault();
  
//     const validationError = {};

//     if (!formData?.firstName?.trim()) {
//       validationError.firstName = 'firstName is required';
//     }else if(formData?.firstName?.length < 3) {
//       validationError.firstName = 'firstName must be at least 3 characters';
//     } 

//     if (!formData?.lastName?.trim()) {
//       validationError.lastName = 'lastName is required';
//     }else if(formData?.lastName?.length < 3) {
//       validationError.lastName = 'lastName must be at least 3 characters';
//     }

//     if (!formData?.email?.trim()) {
//       validationError.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData?.email) && formData?.email?.length > 1) {
//       validationError.email = 'Invalid email address';
//     }
  
//     if (!formData?.password?.trim()) {
//       validationError.password = 'Password is required';
//     } else if (formData?.password.length < 6) {
//       validationError.password = 'Password must be at least 6 characters';
//     }
  
//     setError(validationError);
  
//     if (Object.keys(validationError).length === 0) {
//       alert('Form submit Success');
//       console.log(formData);
//       redirect('/signin')
//       setFormData('')

//     }
//  }
const initaialData  = {
  email:'',
  password:'',
  firstName:'',
  lastName:''
}

const {handleBlur,handleChange,handleSubmit,errors} = useFormik({
  initialValues:initaialData,
  validationSchema:signUpFormValidation,
  onSubmit:values=> {
    console.log(values)
    const result = postMethodData('auth/register','POST',values)
    result.then(json => {
      setIsLoading(true);
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
        <img className="mx-auto h-10 w-auto"                             
        src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
        alt="Your Company" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign up to your account</h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form  className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block font-medium leading-6 text-gray-900">Email address</label>
            <div className="mt-2">
              <input id="email" 
              onChange={handleChange}
              onBlur={handleBlur}
              name="email" 
              type="email" 
              autoComplete="off"  
              className={`block w-full p-2 rounded-md border-0 py-1.5
               text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                 focus:ring-orange-600 sm:text-sm sm:leading-6 ${errors.email ? 'error-border' : ''}`} />
            </div>
            {errors.email && <span className="text-red-600">{errors.email}</span>}
          </div>
          <div>
              <label htmlFor="firstName" className="block font-medium leading-6 text-gray-900">First Name</label>
              <div className="mt-2">
                <input id="firstName" name="firstName" 
                onChange={handleChange} 
                onBlur={handleBlur}
                type="text" 
                autoComplete="off"  
                className={`block w-full p-2 rounded-md border-0 py-1.5
                 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                  placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                   focus:ring-orange-600 sm:text-sm sm:leading-6 ${errors.firstName ? 'error-border' : ''}`} />
              </div>
              {errors.firstName && <span className="text-red-600">{errors.firstName}</span>}
            </div>
            <div>
              <label htmlFor="lastName" className="block font-medium leading-6 text-gray-900">Last Name</label>
              <div className="mt-2">
                <input id="lastName" 
                name="lastName" 
                type="lastName" 
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="off"  
                className={`block w-full p-2 rounded-md border-0 py-1.5
                 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                  placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                   focus:ring-orange-600 sm:text-sm sm:leading-6 ${errors.lastName ? 'error-border' :''}`} />
              </div>
              {errors.lastName && <span className="text-red-600">{errors.lastName}</span>}
            </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block font-medium leading-6 text-gray-900">Password</label>
              
            </div>
            <div className="mt-2">
              <input id="password" 
              name="password" 
              type="password" 
              onChange={handleChange} 
              onBlur={handleBlur}
              autoComplete="off"  
              className={`block w-full p-2 rounded-md border-0 py-1.5
               text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                 focus:ring-orange-600 sm:text-sm sm:leading-6 ${errors.password ? 'error-border' : ''}` } />
            </div>
            {errors.password && <span className="text-red-600">{errors.password}</span>}


          </div>
      
          <div>
            <button type="submit" className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">Sign Up</button>
          </div>
        </form>
      
        <p className="mt-10 text-center text-gray-500">
          Already have an account?
          <NavLink to="/signin" className="font-semibold leading-6 text-orange-600 hover:text-orange-500">SignIn</NavLink>
        </p>
      </div>
    </div>
  );




  // return (
  //   <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  //     <div className="sm:mx-auto sm:w-full sm:max-w-sm">
  //       <img className="mx-auto h-10 w-auto"                             src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
  //       alt="Your Company" />
  //       <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign up to your account</h2>
  //     </div>
      
  //     <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
  //       <form  className="space-y-6" onSubmit={handleSubmit}>
  //         <div>
  //           <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
  //           <div className="mt-2">
  //             <input id="email" onChange={handleInput} name="email" 
  //             type="email" autoComplete="off" 
               
  //             className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" />
  //           </div>
  //           {error.email && <span className="text-red-600">{error.email}</span>}

  //         </div>


  //         <div>
  //             <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">First Name</label>
  //             <div className="mt-2">
  //               <input id="firstName" name="firstName" onChange={handleInput} type="text" autoComplete="off"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" />
  //             </div>
  //             {error.firstName && <span className="text-red-600">{error.firstName}</span>}

  //           </div>

  //           <div>
  //             <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">Last Name</label>
  //             <div className="mt-2">
  //               <input id="lastName" name="lastName" type="lastName" onChange={handleInput} autoComplete="off"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" />
  //             </div>
  //             {error.lastName && <span className="text-red-600">{error.lastName}</span>}

  //           </div>
      
  //         <div>
  //           <div className="flex items-center justify-between">
  //             <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
              
  //           </div>
  //           <div className="mt-2">
  //             <input id="password" name="password" type="password" onChange={handleInput} autoComplete="off"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6" />
  //           </div>
  //           {error.password && <span className="text-red-600">{error.password}</span>}


  //         </div>
      
  //         <div>
  //           <button type="submit" className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">Sign Up</button>
  //         </div>
  //       </form>
      
  //       <p className="mt-10 text-center text-sm text-gray-500">
  //         Already have an account?
  //         <NavLink to="/signin" className="font-semibold leading-6 text-orange-600 hover:text-orange-500">SignIn</NavLink>
  //       </p>
  //     </div>
  //   </div>
  // );
}
