import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { capitalize, clipSentence, getDateTime } from "../../utils/helpers";


interface orderHistoryRowProps {
    item: {
        orderNumber: string,      
        uid: string,       
        datetime: string,
        fileName: string[],
        id: string
    };
};

const OrderHistoryRow: React.FC<orderHistoryRowProps>  = ({item}) => {
    const { orderNumber, fileName, datetime, id  } = item;

    const { user } = UserAuth();

    return(
        <>
            {
                user?.uid === item?.uid && (
                    <tr className='flex min-w-full gap-7 mb-2 justify-between items-center'>
                        <td className='text-[.75rem] md:text-[.8rem] w-1/5 pt- pb-  text-center -red-400' >{orderNumber}</td>
                        <td className='text-[.75rem] md:text-[.8rem] w-1/5 pt- pb- text-center -blue-400'>{clipSentence(capitalize(fileName[0]), 20)}</td>
                        <td className='text-[.75rem] md:text-[.8rem] w-1/5 pt- pb- text-center -red-800'>Recieved</td>
                        <td className='text-[.75rem] md:text-[.8rem] w-1/5 pt- pb- text-center' >{getDateTime(datetime)}</td>
                        <td className='text-[.75rem] md:text-[.8rem] w-1/5  pt-1 pb-1  rounded-lg  text-center bordr-2 bg-red-400 cursor-pointer hover:scale-95 transition-all'> <Link to={`/invoice/${id}`} className=' block'> Invoice </Link></td>
                    </tr>
            )}
        </>
    );
};
export default OrderHistoryRow;