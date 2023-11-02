import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import Logo from './logo';


const Footer = () => {
  return (
    <div className="w-screen py-8 px-4 xs:px-6 sm:px-10 flex justify-between items-center bg-baseColor text-[.9rem] text-white ">
        <Logo />
        <div className="flex justify-center items-center gap-4">
            <p className='text-[1.5rem] mb-[.5rem] cursor-pointer'><FaFacebookSquare /></p>
            <p className='text-[1.5rem] mb-[.5rem] cursor-pointer'><FaTwitter /> </p>
            <p className='text-[1.5rem] mb-[.5rem] cursor-pointer'><BsInstagram /> </p>
        </div>
    </div>
  )
}

export default Footer;
