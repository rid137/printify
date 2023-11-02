import './order.css';

const OrderTableLazyLoader = () => {
    return (
        // <div className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-no-repeat bg-auto animate-gradient-move"></div>
        // <div className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-no-repeat moving-bg bg-auto animate-moving-bg h-8"></div> 
        <tr className="moving__bg h-8 ml-10"></tr>
    )
}

export default OrderTableLazyLoader;