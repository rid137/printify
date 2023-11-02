import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import CustomButton from "../utils/customButton";
import printingBg from '../assets/printingBg.jpg';
import { motion } from "framer-motion";

const Hero = () => {
    const { user } = UserAuth();


    return (
        <div className=" w-screen bg-gry-700" style={backgroundStyle}>
                <div className=" py-16 md:py-24 px-4  sm:px-10  text-white flex flex-col items-center gap-8 md:items-start justify-center my-auto">

                    <motion.h1
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        className="sm:text-[2.5rem] text-center  md:text-left lg:text-left xl:text-left min-h-fit text-[1.6rem] font-playfair font-bold md:w-[38rem]"
                    >
                        Remote Printing: Skip the Trip, Save Your Time 
                    </motion.h1>
                    

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                        className="sm:flex-row gap-3 flex-col flex">
                        <div>
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

                        <div>
                            <Link to={user ? "/dashboard": "request"}>
                                <CustomButton
                                    onClick={() => {}}
                                    padding="6px 35px"
                                    borderRadius="5px"
                                    background="transparent"
                                    border="1px solid white"                                    
                                    >
                                    {user ? "Dashboard" : "Register"}
                                </CustomButton>
                            </Link>
                        </div>

                    </motion.div>
                </div>
        </div>
    );
}
 

const backgroundStyle = {
    backgroundImage: `linear-gradient( rgba(0, 0, 0, .6),rgba(0, 0, 0, .6)),url(${printingBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'noRepeat',
    // minHeight: '40rem',
    // objectFit: 'cover'
}

export default Hero;
