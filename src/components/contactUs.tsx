// import { useRef } from 'react';
import { motion } from 'framer-motion';
import CustomButton from '../utils/customButton';
import { Link } from 'react-router-dom';
import { contactItem } from '../utils/dummy';
// import emailjs from 'emailjs-com';



const Contact = () => {
//   const form = useRef()

//   const sendEmail = (e: any) => {
//     e.preventDefault();

//     emailjs.sendForm('service_cd4z053', 'template_gux3ubo', form.current, 'YS1pbtkI-Ru6eHeTr')
    
//     e.target.reset()
//   };


  return (
    <section id='contact' className='bg-gray-200 py-16 px-4 xs:px-6 sm:px-10 mb-10'>
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
            }}  
            className='text-center text-[1.3rem] font-bold'>
            Contact Us
        </motion.div>

      <div className="flex justify-center items-cente flex-col md:flex-row gap-[4rem] mt-6 mx-">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}   
                className="contact-options flex flex-col gap-6 md:w-[20%] w-full"
            >
                {
                    contactItem?.map((item, index) => (
                        <article key={`contactItem-${index}`} className="text-white bg-baseColor p-[1.3rem] px-3 rounded-[1.2rem] flex__column text-center border border-transparent break-all transition-all">
                            <h4 className='text-[1.3rem] mb-[.5rem] text-center mx-auto'>{item.icon}</h4>
                            <h4>{item.title}</h4>
                            <h5 className='text-[0.8rem] text-gray-400'>{item.email}</h5>
                            <a className='text-[0.8rem] inline-block mt-[.7rem] text-blue-500' href={item.hrefs} target='_blank'>{item.buttonText}</a>
                        </article>
                    ))
                }
                
            </motion.div>

            {/* END OF CONTACT OPTIONS */}

            <form  className='md:min-w-[50%] flex flex-col gap-[1.2rem]'>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    className=' flex flex-col gap-[1.2rem]'
                >
                    <input className='w-full p-[1.5rem] rounded-[.5rem] bg-transparent border border-baseColor' type="text" name='name' placeholder='Your Full Name' required />
                    <input className='w-full p-[1.5rem] rounded-[.5rem] bg-transparent border border-baseColor' type="email" name='email' placeholder='Your Email' required />
                    <textarea className='w-full p-[1.5rem] rounded-[.5rem] bg-transparent resize-none border border-baseColor' name="message" rows={7} placeholder='Your Message'></textarea>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 },
                    }}>
                    <button type='submit' className='md:w-[40%] w-full'>
                        <Link to="/">
                            <CustomButton
                                onClick={() => {}}
                                padding="6px 35px"
                                borderRadius="5px"
                                background='rgb(0, 12, 100)'
                                
                                >
                                Send Message
                            </CustomButton>
                        </Link>
                    </button>
                </motion.div>
            </form>
      </div>
    </section>
  );
}

export default Contact;
