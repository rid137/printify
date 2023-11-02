import React, { useEffect, useState, Suspense } from 'react';
import { db } from '../Firebase-config';
import { collection, onSnapshot } from 'firebase/firestore';
import { UserAuth } from '../context/AuthContext';
import OrderTableLazyLoader from '../components/dashboard/orderTableLazyLoader';
import Spinner from '../utils/spinner';

const OrderHistoryRow = React.lazy(() => 
import('../components/dashboard/orderHistoryRow')
)


export interface Docs {
    orderNumber: string,
    phoneNumber: string,
    NoOfPages: string,
    name: string, 
    uid: string,
    printCategory: string,
    paperCategory: string,
    datetime: string,
    date: {
        seconds: number,
        nanoseconds: number
    },
    fileName: string[],
    id: string
}






const Dashboard = () => {
    const [printDoc, setPrintDoc] = useState([] as Docs[])

    const { user } = UserAuth();

    // TO REFER TO THE 'printDoc' COLLECTION ON FIREBASE
    const collectionRef = collection(db, 'printDoc');


    useEffect(() => {
        getNotes();
    }, []);

    // TO GET NOTES FROM FIREBASE
    const getNotes =  () => {
        onSnapshot(collectionRef, (data) => {
            setPrintDoc(data.docs.map((doc) => {
                return ({...doc.data(), id: doc.id}) as Docs
            }))
        })
    };

    return (
        <section className='py- md:px- md:pr-20 px-4 xs:px-6 sm:px-10   min-h-screen'>
            <h1 className='font-bold mt-4'>Welcome {user?.displayName}</h1>
            <h3 className='font-bold my-7 text-center'>Order History</h3>
            <div className="bg-white min-w-full text-black overflow-x-auto"> 
                {
                    printDoc?.length <= 0 ? 
                    <Spinner cls='mx-auto'/>
                    :
                    
                    <table className='min-w-full overflow-x-auto bg-gray-200'>
                        <thead >
                            <tr className='flex min-w-full gap-3 mb-4 justify-between items-center'>
                                <th className='text-[.75rem] w-1/5  md:text-[.8rem] '>Order Number</th>
                                <th className='text-[.75rem] w-1/5 md:text-[.8rem]'>File Name</th>
                                <th className='text-[.75rem] w-1/5 md:text-[.8rem]'>Status</th>
                                <th className='text-[.75rem] w-1/5 md:text-[.8rem]'>Preferred Pickup</th>
                                <th className='text-[.75rem] w-1/5 md:text-[.8rem]'></th>
                            </tr>
                        </thead>

                        <tbody >
                            {
                                printDoc?.map((item) => (
                                    <Suspense key={item.id} fallback={<OrderTableLazyLoader />}><OrderHistoryRow  item={item} /></Suspense>             
                                ))
                            }                    
                        </tbody>
                    </table>
                        
                }
            </div>
        </section>
    );
};

export default Dashboard;