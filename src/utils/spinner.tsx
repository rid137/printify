// import Spinner from 'react-bootstrap/Spinner';

// // type Animation = grow
// type SpinnerTypes = {
//     animation: "grow" | "border",
//     variant: string
// }
// const Spinners: React.FC<SpinnerTypes>  = ({animation, variant}) => {
//   return <Spinner animation={animation} variant={variant} />;
// }

// export default Spinners;

const Spinner = ({cls = ''}) => {
    return (
        <div className={`w-16 h-16 my-7 border-t-4 border-baseColor border-solid rounded-full animate-spin ${cls}`}></div>
    )
}

export default Spinner;