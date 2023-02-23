import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

import { BsGoogle } from "react-icons/bs";
import toast, { Toaster } from 'react-hot-toast';

import google from '../../images/google.png'


const Social = () => {

    const { signInWithGoogle,signInWithGithub, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleGoogle = () => {
        signInWithGoogle()
            .then(result => {


                const user = result.user;
                console.log(user);

                // AuthToken(user)
                toast.success('successfully login.')
                navigate('/')

                setLoading(false)

        
            
    
            })
                    
                   

            
            .catch(error => console.log(error));
        
        

  }
 
  








    // const handleGithub = () => {
    //     signInWithGithub()
    //         .then(result => {
    //             const user = result.user;
    //             console.log(user);
    //             // setAuthToken(user);
    //             AuthToken(user)

    //             navigate('/')

    //             setLoading(false)
    //         })
    //         .catch(error => console.log(error));
        
        

    // }


  return (
      <div className='text-center flex justify-center  px-4'>
          <button onClick={handleGoogle} className='  outline-none bg-none  rounded-full  text-2xl'>
              <img src={google} alt="" />
       
          </button>
          {/* <button onClick={handleGithub} className='btn border-[tomato] text-[tomato] bg-[skyblue]'>GitHub</button> */}
        <Toaster></Toaster>
    </div>
  )
}

export default Social