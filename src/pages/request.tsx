import React, { useLayoutEffect, useState, ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import CustomButton from '../utils/customButton'
import { UserAuth } from '../context/AuthContext'
import docUpload from '../assets/docUpload.png'
import { db } from '../Firebase-config';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { storage } from '../Firebase-config';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { checkExtension, generateRandomNumber } from '../utils/helpers'


interface HomeProps {
    showModal: boolean;
    setShowModal: (state: boolean) => void;
};

interface Img {
    url: string;
    name: string;
};

interface FormChangeEvent extends ChangeEvent<HTMLInputElement> {}

interface FormState {
    phoneNumber: string;
    NoOfPages: string;
    printCategory: string;
    NoOfColouredPages: string;
    pageNoOfColouredPages: string;
    paperCategory: string;
    datetime: string;
}

const initialState: FormState = {
    phoneNumber: '',
    NoOfPages: '',
    printCategory: '',
    NoOfColouredPages: '',
    pageNoOfColouredPages: '',
    paperCategory: '',
    datetime: '',
}

type CategoryOptions = [string, string, string, string];

const printCategoryOptions: CategoryOptions = ["select option", "B&W only", "Coloured Only", "B&W and Coloured Diagrams"];
const paperCategoryOptions: CategoryOptions = ["select option", "Quarto", "A2", "A4"];
  

const Request: React.FC<HomeProps> = ({setShowModal}) => {
    // TO HANDLE FORM VALUES
    const [formValue, setFormValue] = useState(initialState)
    const { phoneNumber, NoOfPages, paperCategory, NoOfColouredPages, pageNoOfColouredPages, printCategory, datetime } = formValue;
    // console.log(formValue)


    const [fileLists, setFileLists] = useState([] as Img[])

    const [showFileUploadProgress, setShowFileUploadProgress] = useState(false)
    const [progressValue, setProgressValue] = useState(0)

    // FROM THE CONTEXT
    const { user } = UserAuth();
    
    const navigate = useNavigate()

    // FOR AUTHORIZATION OF THE PAGE
    useLayoutEffect(() => {
        // setTimeout(checkUserStatus, 5000);
        // console.log("hello")
        checkUserStatus()
      }, [user]);

      const checkUserStatus = () => {      
        if(user === null) {
            navigate('/')
            setShowModal(true)
        }
        return;
    }

    // TO HANDLE THE INPUT FIELDS
    const handleInputs = (e: FormChangeEvent) => {
        const newInput = { [e.target.name]: e.target.value};
        setFormValue({...formValue, ...newInput})
    }

    // TO HANDLE THE PRINT CAT
    const onPrintCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setFormValue({...formValue, printCategory: e.target.value})
    }

    // TO HANDLE THE PAPER CAT
    const onPaperCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setFormValue({...formValue, paperCategory: e.target.value })
    }

    
    console.log("random number", generateRandomNumber())

    // FUNCTION TO UPLOAD FILE TO FIREBASE STORAGE
    const uploadImage = (fileName: File | null) => {
    if (fileName == null) return;
    console.log("fileName", fileName)



    let extension: string = checkExtension(fileName.name)
    console.log("extension", extension)

    let extArray = [".pdf", ".PDF", ".ppt", ".PPT", ".doc", ".DOC", ".docx", ".DOCX" ]

    if (!extArray.includes(extension)) {
        alert("Document must be pdf, ppt or Ms word") 
        return;
    }

    console.log(checkExtension(fileName.name))

    const randomNumber = generateRandomNumber();

    const uniqueImage = fileName.name + randomNumber
    const imageRef = ref(storage, `images/${user?.displayName}/${uniqueImage}` ) 
    const uploadTask = uploadBytesResumable(imageRef, fileName)   

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                console.log("snapshot", snapshot)
            // Progress monitoring
            setShowFileUploadProgress(true)
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

            setProgressValue(Math.round(progress))
            console.log('Upload is ' + progress + '% done');
            },
            (error) => {
            // Handle errors
            console.error(error);
            },
            () => {
            // Upload completed successfully
            getDownloadURL(uploadTask.snapshot.ref)
            .then((url) => {
                setFileLists((prev) => [
                ...prev,
                { url: url, name: uniqueImage },
            ]);
        })
    });

  };
  console.log("imageLists", fileLists)



    // TO REFER TO THE 'printDoc' COLLECTION IN FIRESTORE DATABASE
    const collectionRef = collection(db, 'printDoc');


    const handleSave = async (e: any) => {
        e.preventDefault()

        if ( phoneNumber === '' || printCategory === '' || NoOfColouredPages === '' || pageNoOfColouredPages === '' || paperCategory === '' || datetime === '' || NoOfPages === '' || fileLists.length === 0) {
            alert("all input fields must be filled");
            return;
        }

        const randomNumber = generateRandomNumber();

        if(window.confirm('have you reviewed your order? if yes, proceed')) {
            await addDoc(collectionRef, {
                orderNumber: randomNumber,
                phoneNumber: phoneNumber,
                NoOfPages: NoOfPages,
                printCategory: printCategory,
                NoOfColouredPages: NoOfColouredPages,
                pageNoOfColouredPages: pageNoOfColouredPages,
                paperCategory: paperCategory,
                datetime: datetime,
                priceOfWnBCopies: 10 * Number(NoOfPages) - Number(NoOfColouredPages),
                priceOfColouredCopies: 30 * Number(NoOfColouredPages),
                name: user.displayName, 
                uid: user.uid,
                date: Timestamp.fromDate(new Date()),
                fileName: fileLists.map((img) => img.name)
            });

            setFormValue({ phoneNumber: '', printCategory: '', NoOfColouredPages: '', pageNoOfColouredPages: '', paperCategory: '', datetime: '', NoOfPages: ''})
            navigate('/dashboard')
        };
           return;     
    };


      
  return (
    <div className='h-scre'>
        <h2 className="text-center mt-6">
            Request for Printing
        </h2>

        <div className="w-full md:w-[40rem] mx-auto mt-12 px-4 xs:px-6 sm:px-10">
                <form action="" >
                    <label htmlFor="">Phone Number</label>
                    <input 
                        type="number" 
                        name="phoneNumber"
                        value={phoneNumber || ''}
                        onChange={(e) => handleInputs(e)}                    
                        className="w-full py-2 text-[.9rem] placeholder:text-[.8rem] px-2 outline-none mt-2 mb-6 block text-black border border-gray-400 rounded-md"  
                        placeholder="Your mobile number" 
                    />

                    <label htmlFor="">Number of Pages</label>
                    <input 
                        type="number" 
                        name="NoOfPages"
                        value={NoOfPages || ''}
                        onChange={(e) => handleInputs(e)}                    
                        className="w-full py-2 text-[.9rem] placeholder:text-[.8rem] px-2 outline-none mt-2 mb-6 block text-black border border-gray-400 rounded-md"  
                        placeholder="No of pages of the document" 
                    />
                    
                    <label htmlFor="">Print Out Format</label> <br />
                    <select onChange={onPrintCategoryChange} value={printCategory} name="" id="" className='w-full py-[8.5px] text-[.9rem] placeholder:text-[.8rem] px-2 outline-none mt-2 mb-6 block text-black border border-gray-400 rounded-md'>
                        {printCategoryOptions?.map((option, index) => <option value={option || ''} key={index}> {option} </option>  )}      
                    </select> 

                    <label htmlFor="">Number of Coloured Pages</label>
                    <input 
                        type="number" 
                        name="NoOfColouredPages"
                        value={NoOfColouredPages || ''}
                        onChange={(e) => handleInputs(e)}                    
                        className="w-full py-2 text-[.9rem] placeholder:text-[.8rem] px-2 outline-none mt-2 mb-6 block text-black border border-gray-400 rounded-md"  
                        placeholder="Fill in 0 if there is no coloured page" 
                    />

                    <label htmlFor="">Page Number of Coloured Pages(comma-separeted list)</label>
                    <input 
                        type="text" 
                        name="pageNoOfColouredPages"
                        value={pageNoOfColouredPages || ''}
                        onChange={(e) => handleInputs(e)}                    
                        className="w-full py-2 text-[.9rem] placeholder:text-[.8rem] px-2 outline-none mt-2 mb-6 block text-black border border-gray-400 rounded-md"  
                        placeholder="e.g. 1, 5, 7...Fill in 0 if there is no coloured page" 
                    />

                    <label htmlFor="">Paper Format</label> <br />
                    <select onChange={onPaperCategoryChange} value={paperCategory} name="" id="" className='w-full py-[8.5px] text-[.9rem] placeholder:text-[.8rem] px-2 outline-none mt-2 mb-6 block text-black border border-gray-400 rounded-md'>
                        {paperCategoryOptions?.map((option, index) => <option value={option || ''} key={index}> {option} </option>  )}    
                    </select> 

                    <label htmlFor="">Preferred Pick Up Date & Time</label>
                    <input 
                        type="datetime-local"
                        name='datetime' 
                        value={datetime || ''}
                        onChange={(e) => handleInputs(e)}                    
                        className="w-full py-2 text-[.9rem] placeholder:text-[.8rem] px-2 outline-none mt-2 mb-6 block text-black border border-gray-400 rounded-md"  
                        placeholder="Enter start and end time" 
                    />

                    {
                        showFileUploadProgress && <div className={`${fileLists.length > 0 && "hidden"}`}> Upload is {progressValue}% done </div>
                    }

                    {fileLists.length > 0 && fileLists.map((file, index) => <div key={index}>{file.name}</div>)}

                    <label htmlFor="fileUpload" >
                        <div style={backgroundStyle} className="className='bg-gray-300 text-center w-full bg-gray-200 cursor-pointer py-12 mt-2 mb-6'">
                            <p className="text-[1.4rem] ">Upload Document</p>
                            <small className='text-gray-900 text-[.9rem]'>The type of document must be ppt, pdf or word</small>
                        </div>
                        
                    </label>

                    <input type="file" className='hidden' id='fileUpload' onChange={(e) => {uploadImage(e.target.files && e.target.files[0])}}/>

                    <div className="text-center my-10 w-[50%] mx-auto" onClick={handleSave}>
                        <CustomButton
                            onClick={() => {}}
                            padding="6px 35px"
                            borderRadius="5px"
                            
                            >
                            Proceed
                        </CustomButton>
                    </div>  

                </form>
            </div>
    </div>
  )
}

const backgroundStyle = {
    backgroundImage: `linear-gradient( rgba(0, 0, 0, .1),rgba(0, 0, 0, .1)),url(${docUpload})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'noRepeat',
    // minHeight: '40rem',
    // objectFit: 'cover'
}


export default Request
