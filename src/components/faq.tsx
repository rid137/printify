import { useState } from 'react';
import { motion } from 'framer-motion';
import { faq } from "../utils/dummy";
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleOpenClick = (index: any ) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="cente  py- px-4 xs:px-6 sm:px-10">
            <div className=" gap-10 flex flex-col">
                <h2 className="text-center">Frequently Asked Questions</h2>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: -50 },
                        visible: { opacity: 1, y: 0 },
                    }}  
                    className="center flex-col gap-6"
                >   
                
                    {faq.map((item, index) => (
                        <div key={index} className='border p-4 md:p-8 w-full transition-all '>
                            <div className='flex justify-between items-center gap-3 cursor-pointer transition-all'>
                                <div className="w-full font-bold text-[.9rem] tracking-wide " onClick={() => handleOpenClick(index)}>
                                    {item.question}
                                </div>
                                <div>
                                
                                    { openIndex === index ? <AiOutlineMinus /> : <AiOutlinePlus />}
                                </div>
                            </div>
                            {openIndex === index && <div className='text-grey mt-10 text-[.9rem] tracking-wide text-justify'>{item.answer}</div>}
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

export default Faq;
