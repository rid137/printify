import { useMemo, useState } from "react";
import { motion } from 'framer-motion';

const PriceCalculator = () => {
    const [pricePerPage] = useState(10);
    const [priceInput, setPriceInput] = useState("");

    const calculatePrice = (amount: number): number => {
        return pricePerPage * amount
    };

    const result = useMemo(() => {
        return calculatePrice(Number(priceInput))
    }, [priceInput])


    return (
        <div className=' pt-12 pb-16 '>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <h2 className="text-center">Pricing Calculator</h2>
            </motion.div>

            <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}  
                className='md:text-center text-justify mt-4 mb-4 text-gray-700 tracking-wide'
            > 
                Want to know the total amount for the printing of your pages? Input the number of pages below
            </motion.p>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}
            > 
            <div className="bg-white text-center mx-auto shadow-md rounded-md py-8 px-[1rem] mb-2 md:w-[40rem] w-[full] overflow-aut">

                <div className="flex__center gap-6">
                    <div className="">
                        <p className='text-[.9rem] font-bold text-gray-600'>Price Per Page:</p>
                        <p className='my-3 text-[.9rem] font-bold text-gray-600'>No of Pages:</p>
                        <p className='text-[.9rem] font-bold text-gray-600'>Total Amount:</p>
                    </div>

                    <div className=" text-[.9rem] font-bold text-gray-600">
                        <p>#10</p>
                        <p className='my-3'> <input type="number" onChange={(e) => setPriceInput(e.target.value)}  className='w-[5rem] outline-none bg-slate-800 text-white' /></p>
                        <p># {''} {result}</p>
                    </div>
                </div>
                </div>

            </motion.div>
        </div>   
    );
};

export default PriceCalculator;