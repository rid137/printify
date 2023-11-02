import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose} from 'react-icons/ai';
import CustomButton from '../utils/customButton';
import { belowNavData } from '../utils/dummy';
import { UserAuth } from '../context/AuthContext';
import Logo from './logo';


interface NavProps {
    showModal: boolean;
    setShowModal: (state: boolean) => void;
};



const Nav: React.FC<NavProps> = ({ setShowModal }) => {
    const [openNav, setOpenNav] = useState(false);

    const updateModalAndNav = () => {
        setShowModal(true);
        setOpenNav((prev) => !prev);
    }

    const handleSignOutAndUpdateNav = () => {
        handleSignOut();
        setOpenNav((prev) => !prev);
    }

    const { user, logOut } = UserAuth();

    const handleSignOut = async () => {
        try {
            if(window.confirm('Are you sure you want to log out?')) {
                await logOut();
            };
        }
        catch(error) {
            console.log(error)
        };
    };

  return (
    <div>
        {/* DESKTOP NAV */}
        <nav className="flex__betwe flex justify-between items-center py-4 px-4 xs:px-6 sm:px-10">
                <Logo />
                <div className="gap-6 md:gap-20 flex__center">
                    <div className="space-x-10 md:flex justify-center items-center flex__cente hidden">
                        <a href="#pricing" className='text-baseColor text-[.9rem] hover:text-[black] transition-all '>Pricing</a>
                        
                        {
                            user ?
                            <>
                                <li className='text-baseColor cursor-pointer text-[.9rem] hover:text-[black] transition-all list-none' onClick={handleSignOut}>Sign Out</li>            
                            </> :
                            <>
                                <li className='text-baseColor cursor-pointer text-[.9rem] hover:text-[black] transition-all list-none' onClick={() => setShowModal(true)}>Sign Up</li>            
                                <li className='text-baseColor cursor-pointer text-[.9rem] hover:text-[black] transition-all list-none' onClick={() => setShowModal(true)}>Sign In</li>            
                            </>
                        }
                    </div>
                    <div className="hidden sm:block">
                        <Link to="/request">
                            <CustomButton
                                onClick={() => {}}
                                padding="6px 35px"
                                borderRadius="5px"
                                >
                                Print Now
                            </CustomButton>
                        </Link>    
                    </div>  

                    <div className={`md:hidden cursor-pointer `} onClick={() => setOpenNav((prev) => !prev)}>
                        <div className="w-10 h-1 bg-black"></div>
                        <div className="w-10 h-1 bg-black my-1"></div>
                        <div className="w-10 h-1 bg-black"></div>
                    </div>    
                </div>

            </nav>

            {/* MOBILE NAV */}
            <nav className={`w-screen absolute py-6 px-4 top-0 left-0 bg-black md:hidden transition-all text-white ${openNav ? "block": 'hidden'}`}>
                <div className={`absolute right-10 top-7 cursor-pointer`} onClick={() => setOpenNav((prev) => !prev)}>
                    <AiOutlineClose className='text-[2rem]' />
                </div>    
                <div className="flex__column mt-8 gap-4 ">
                    <a onClick={() => setOpenNav((prev) => !prev)} href="#pricing"  className='text-white text-[.9rem] hover:tracking-wide transition-all'>Pricing</a>
                    {
                        user ? 
                        <>
                            <li onClick={handleSignOutAndUpdateNav} className='text-white text-[.9rem] hover:tracking-wide transition-all list-none'>Sign Out</li>            
                        </> :
                        <>
                            <li onClick={updateModalAndNav} className='text-white text-[.9rem] hover:tracking-wide transition-all list-none'>Sign Up</li>            
                            <li onClick={updateModalAndNav} className='text-white text-[.9rem] hover:tracking-wide transition-all list-none'>Sign In</li>            

                        </>

                    }
                    <div className=" sm:hidden text-center" onClick={() => setOpenNav((prev) => !prev)}>
                        <Link to="/request">
                            <CustomButton
                                onClick={() => {}}
                                padding="6px 35px"
                                borderRadius="5px"
                                >
                                Print Now
                            </CustomButton>
                        </Link>    
                    </div>  
                </div>
            </nav>

        <div className="w-screen hidden py-2 px-10 lg:flex justify-start items-center gap-20 bg-baseColor text-white cursor-default">
            {
                belowNavData?.map((item, index) => (
                    <small className='text-[.9rem]' key={index} >
                        {item}
                    </small>
                ))
            }
        </div>
    </div>
  )
}

export default Nav;
