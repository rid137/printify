import { motion } from 'framer-motion';
import Hero from "../components/hero";
import printingBg from '../assets/printingBg.jpg';
import Pricing from "../components/pricing/priceCard";
import Faq from "../components/faq";
import Login from "../components/login/login";
import Contact from '../components/contactUs';


interface HomeProps {
    showModal: boolean;
    setShowModal: (state: boolean) => void;
};


export const Home: React.FC<HomeProps> = ({showModal, setShowModal}) => {


  return (
    <div className="  bg-secColo">
        <Hero />
        <AboutUs />
        <Pricing />
        <Faq />
        {showModal && <Login setShowModal={setShowModal} />}
        <Contact />
    </div>
  )
}


const AboutUs = () => {
    return (
        <div className="py-16 px-4 xs:px-6 sm:px-10 ">
            <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                }}
                className="text-[1.3rem] font-bold text-center"
            >
                About Us
            </motion.h2>
            <div className="flex flex-col md:flex-row justify-center md:items-cente gap-8 mt-10">
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    className="md:w-1/2 text-gray-800 md:text-[1.2rem] md:leading-[2rem] md:tracking-wide text-justify"
                >
                    At printify, we're your dedicated partner in bringing your ideas to life through our 
                    exceptional printing services. With a passion for quality, a commitment to convenience, and a 
                    focus on innovation, we've redefined the printing experience to make it as easy, efficient, and 
                    enjoyable as possible. Founded by a team of print enthusiasts, we set out to revolutionize the 
                    printing industry by offering a platform that puts the power of printing directly in your hands. 
                    Our mission is clear: to simplify and enhance the printing experience for individuals and businesses
                     alike. We aim to provide a seamless and efficient solution that allows you to print what you need, 
                     when you need it, without the time-consuming queues and complex procedures traditionally associated
                      with print shops.
                </motion.p>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 },
                    }}               
                    className="md:w-1/2"
                >
                    <img src={printingBg} className="w-full max-h-[27rem]" alt="" />
                </motion.div>
            </div>
        </div>
    );
};