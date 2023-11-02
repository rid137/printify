import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BsCheckCircleFill } from 'react-icons/bs';
import { pricingData } from '../../utils/dummy';
import PriceCalculator from './priceCalculator';


const Pricing = () => {

  return (
    <section id='pricing' className='pt-4 px-4 xs:px-6 sm:px-10 mb-10 bg-gray-50'>
        <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
            }}  
        >
            Economical Pricing Plans
        </motion.p>
               
        <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
            }}   
            className="text-center font-bold text-[1.3rem]"
        >
            Economical Pricing Plans
        </motion.p>

        <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
            }}   
            className='md:text-center text-justify mt-4 mb-8 text-gray-700 tracking-wide'
        >
            Explore our straightforward economical pricing plans tailored to meet your 
            printing needs. We believe in providing services that aligns with your pocket. 
            Choose the plan that siuts you best and experience a swift printing services
        </motion.p>

        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
            }}      
            className="flex items-center justify-center flex-col md:flex-row md:px-3 gap-4 md:gap-6 mt-3 pb-4"
        >
                {
                    pricingData?.map((item, index) => (
                        <div key={index} className="w-full md:w-1/3 bg-white shadow-lg rounded-md py-4 px-3 mb- mt-3 hover:text-whit cursor-default hover:bg-baseColo hover:borde hover:scale-105 transition-all border-baseColor">
                            <h4 className='font-bold text-[1.1rem]'>{item.title}</h4>
                            <p className='text-gray-600 text-[.9rem] my-3'>{item.body}</p>

                            <div className='mb-3'>
                                <div className="flex__start gap-3 mb-3">
                                    <span className='text-[1.1rem] text-baseColor'>{item.firstItem.icon}</span>
                                    <span className='text-[.9rem] font-bold text-gray-700'>{item.firstItem.title}</span>
                                </div>

                                <div className="flex__start gap-3 mb-3">
                                    <span className='text-[1.1rem] text-baseColor'>{item.secondItem.icon}</span>
                                    <span className='text-[.9rem] font-bold text-gray-700'>{item.secondItem.title}</span>
                                </div>

                                <div className="flex__start gap-3 mb-3">
                                    <span className='text-[1.1rem] text-baseColor'>{item.thirdItem.icon}</span>
                                    <span className='text-[.9rem] font-bold text-gray-700'>{item.thirdItem.title}</span>
                                </div>

                                <div className="flex__start gap-3 mb-3">
                                    <span className='text-[1.1rem] text-baseColor'>{item.fourthItem.icon ? item.fourthItem.icon : <BsCheckCircleFill className="text-black" />}</span>
                                    <span className='text-[.9rem] font-bold text-gray-700'>{item.fourthItem.title}</span>
                                </div>

                                
                            </div>

                            <div  className='bg-baseColor text-white w-ful font-bold py-[6px] px-[35px] rounded-[5px] hover:scale-90 transition-all text-center'>
                                <Link to="/request"   className='block'> Get Started</Link>
                            </div>
                        </div>
                    ))
                }
        </motion.div>
        <PriceCalculator />
    </section>
  );
};

export default Pricing;
