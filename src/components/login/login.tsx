import React, { useState } from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { UserAuth } from '../../context/AuthContext';
import './login.css';


interface LoginProps {
    setShowModal: (state: boolean) => void;
};


const Login: React.FC<LoginProps> = ({setShowModal}) => {
    const { googleSignIn } = UserAuth();

    const [signUp, setSignUp] = useState(false);
    
    const handleOverlayClick = (e: React.MouseEvent<HTMLElement>) => {
        const target = e.target as HTMLElement;
        target.id === 'myModal' && setShowModal(false);
    };

    const handleGoogleSignIn = async () => {
        try {
            console.log("hello")
          await googleSignIn()
        }
        catch(error) {
          console.log(error)
        }
    }

  return (
    <div id="myModal" className={` fixed z-10 py-[50px] left-0 top-0 h-[100%] w-[100%] overflow-y-auto`} onClick={handleOverlayClick}>

        <div className="modal-content text-black w-[90vw] md:w-[50vw] h-fit md:h-[80vh] px-1 md:px-4 pt-7 pb-7 rounded-md overflow-y-auto">

                <div className="flex justify-end items-star">
                    <span className=" text-white mx-aut  font-bold text-[23px] md:text-lg bg-baseColor w- px-3 rounded-lg cursor-pointer" onClick={() => setShowModal(false)} >&times;</span>

                </div>

                <div className="flex__column gap-4 text-center mt-2">
                    <h3 className="text-[1.3rem] font-bold">Welcome to Printify!</h3>

                    {
                        signUp ? 
                        <>
                            <div className="bg-baseColor py-2 px-4 rounded-md mx-auto w-[90%] md:w-1/2 text-white cursor-pointer flex__center gap-4" onClick={handleGoogleSignIn}> <span className='text-[1.5rem]'><FcGoogle /> </span> <span> Sign up with Google </span></div>
                            <div className="bg-baseColor py-2 px-4 rounded-md mx-auto w-[90%] md:w-1/2 text-white cursor-pointer flex__center gap-4">  <span className='text-[1.5rem]'><FaFacebookSquare /> </span>  <span> Sign up with Facebook </span></div>
                        </>
                        :
                        <>
                            <div className="bg-baseColor py-2 px-4 rounded-md mx-auto w-[90%] md:w-1/2 text-white cursor-pointer flex__center gap-4" onClick={handleGoogleSignIn}> <span className='text-[1.5rem]'><FcGoogle /> </span> <span> Sign in with Google </span></div>
                            <div className="bg-baseColor py-2 px-4 rounded-md mx-auto w-[90%] md:w-1/2 text-white cursor-pointer flex__center gap-4">  <span className='text-[1.5rem]'><FaFacebookSquare /> </span> <span> Sign in with Facebook </span></div>
                        </>
                    }

                    {
                        signUp ? 
                        <>
                            <div className="text-center">Already have an account? <span className="text-baseColor cursor-pointer " onClick={() => setSignUp(prev => !prev )} > Sign In </span></div>
                        </>
                        :
                        <>
                            <div className="text-center">Don't have an account? <span className="text-baseColor cursor-pointer " onClick={() => setSignUp(prev => !prev )} > Sign Up </span></div>
                        </>
                    }
                </div>               
        </div>
    </div>
  );
};

export default Login;