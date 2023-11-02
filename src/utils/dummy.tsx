import { BsCheckCircleFill } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';

export const belowNavData = ["Final Year Project", "Colored/B&W","Assignments", "Past Questions", "Photocopy", "Typing", "Lecture Notes"]


export const pricingData = [
    {
        title: 'Basic',
        body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, laudantium.',
        firstItem: {
            title: 'Page: 1-100',
            icon: <BsCheckCircleFill />,
        },
        secondItem: {
            title: 'Price: #10 per w&b page',
            icon: <BsCheckCircleFill />,
        },
        thirdItem: {
            title: 'Price: #100 per colored page',
            icon: <BsCheckCircleFill />,
        },
        fourthItem: {
            title: 'Discount',
            // icon: <BsCheckCircleFill />,
        },

    },
    {
        title: 'Bulk',
        body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, laudantium.',
        firstItem: {
            title: 'Page: 1-300',
            icon: <BsCheckCircleFill />,
        },
        secondItem: {
            title: 'Price: #9 per w&b page',
            icon: <BsCheckCircleFill />,
        },
        thirdItem: {
            title: 'Price: #90 per colored page',
            icon: <BsCheckCircleFill />,
        },
        fourthItem: {
            title: 'Discount',
            icon: <BsCheckCircleFill />,
        },

    },
    {
        title: 'Mega',
        body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, laudantium.',
        firstItem: {
            title: 'Page: 1-500',
            icon: <BsCheckCircleFill />,
        },
        secondItem: {
            title: 'Price: #8 per w&b page',
            icon: <BsCheckCircleFill />,
        },
        thirdItem: {
            title: 'Price: #80 per page',
            icon: <BsCheckCircleFill />,
        },
        fourthItem: {
            title: 'Discount',
            icon: <BsCheckCircleFill />,
        },
    },
]


export const faq = [
    {
        question: 'How can I place an order for printing services on your website?',
        answer: 'You have to create an account using your google account and then click on the "print now" button.',
    },
    {
        question: 'What types of documents can I print with your service?',
        answer: 'You can print a ms word, pdf and ppt document.',
    },
    {
        question: 'How can I track the status of my printing order?',
        answer: 'After placing an order, you can navigate to your dashboard where you can view the details of your order and also keep track of the order status. ',
    },
    {
        question: 'Do you offer rush or expedited printing options for urgent projects?',
        answer: 'Use our "contact us" section to make enquiry about rush and urgent orders',
    },
    {
        question: 'What payment methods do you accept for orders?',
        answer: 'Currently, we accept payment at the time of pick up. In the future version of the website, you will be able to make payment while making orders.',
    },

]


export const contactItem = [
    {
        icon: <MdOutlineEmail />,
        title: 'Email',
        email: 'makinderidwan73@gmail.com',
        hrefs: 'mailto:makinderidwan137@gmail.com',
        buttonText: 'Send Message'

    },
    {
        icon: <RiMessengerLine />,
        title: 'Messenger',
        email: 'makinderidwan',
        hrefs: 'https://m.me/remi.ade.169',
        buttonText: 'Send Message'

    },
    {
        icon: <BsWhatsapp />,
        title: 'Whatsapp',
        email: 'makinderidwan73@gmail.com',
        hrefs: 'https://api.whatsapp.com/send?phone=2348063804622',
        buttonText: 'Send Message'

    }
]