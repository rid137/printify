import { Link } from "react-router-dom";

const Notfound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-ful ">
            <p>Page Not Found.</p>
            <Link to='/' className="text-baseColor">Go to home page</Link>
        </div>
    );
};

export default Notfound;