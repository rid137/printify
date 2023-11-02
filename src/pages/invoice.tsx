import { useEffect, useState, useRef } from 'react';
import { db } from '../Firebase-config';
import { useParams } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { doc, getDoc, Timestamp } from "firebase/firestore";
import { Docs } from './dashboard';
import Spinner from '../utils/spinner';


interface DocDetails extends Docs {
    NoOfColouredPages: string,
    pageNoOfColouredPages: string,
    priceOfWnBCopies: number,
    priceOfColouredCopies: number,
    date: Timestamp,
    datetime: string,
}

const Invoice = () => {
    const [documentDetails, setDocumentDetails] = useState({} as DocDetails)
    const [hasDetailsLoaded, setHasDetailsLoaded] = useState(false)
    const { orderNumber, NoOfColouredPages, NoOfPages, printCategory, paperCategory, fileName, pageNoOfColouredPages, priceOfWnBCopies, priceOfColouredCopies } = documentDetails;

    const pdfRef = useRef<HTMLDivElement>(null);

    const downloadPDF = () => {
        const input = pdfRef.current;
        html2canvas(input as HTMLElement).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'em', 'a5', false);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            const imgX = (pdfWidth - imgWidth * ratio) / 2;
            const imgY = 5;
            pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
            pdf.save('invoice.pdf');
        });
    };

    const { id }  = useParams()

    // TO REFER TO THE ID OF SPECIFIC USER FROM FIRESTORE
    const docRef = doc(db, "printDoc", id as string )


    useEffect(() => {
        id && getDocumentDetails()
    }, [id])


    // TO GET SINGLE NOTE FROM FIRESTORE DATABASE
    const getDocumentDetails = async () => {
        setHasDetailsLoaded(true)
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            setDocumentDetails(docSnap.data() as DocDetails) 
            setHasDetailsLoaded(false)
        } 
        
        else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }

    console.log("documentDetails:", documentDetails)

    return(
        <div ref={pdfRef} className="min-h-screen px-4 xs:px-6 sm:px-10">
            <h3 className="text-center text-[1.2rem] font-bold my-5">Document Details</h3>

           {
            hasDetailsLoaded ? 
            <Spinner cls='mx-auto' />
            :
            <div className="flex__column gap-5 mb-10">
                <p className='text-[1rem] font-bold'>Order Number: {orderNumber}</p>
                <p className='text-[1rem] font-bold'>Name of Document: {fileName}</p>
                <p className='text-[1rem] font-bold'>Number of Pages: {NoOfPages}</p>
                <p className='text-[1rem] font-bold'>Print Out Format: {printCategory}</p>
                <p className='text-[1rem] font-bold'>Number of Coloured Pages: {NoOfColouredPages}</p>
                <p className='text-[1rem] font-bold'>Page Number of Coloured Pages: {pageNoOfColouredPages}</p>
                <p className='text-[1rem] font-bold'>Paper Size: {paperCategory}</p>
                <p className='text-[1rem] font-bold'>Price of B&W pages: #{priceOfWnBCopies}</p>
                <p className='text-[1rem] font-bold'>Price of Coloured: #{priceOfColouredCopies}</p>
                <p className='text-[1rem] font-bold'>Total Price: #{priceOfWnBCopies + priceOfColouredCopies}</p>
                {/* <p>Time You Made the Order: {documentDetails && getDateTime((date?.seconds * 1000))}</p> */}
                {/* <p>Time You Made the Order: {getDateTime(fireBaseTime)}</p> */}
                {/* <p>Your Preferred Pick Up Date and Time: {getDateTime(datetime )}</p> */}
                <p>NB: You must come along with a soft copy of this detail page for your pick up</p>
                <button onClick={downloadPDF} className="py-2 md:w-[30%] px-4 bg-baseColor text-white font-bold rounded-md hover:scale-90 transition-all">Download Details</button>

            </div>
            
           }

        </div>
    )
}

export default Invoice;