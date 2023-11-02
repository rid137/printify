import React from 'react'

 interface CustomButtonTypes {
    border?: string;
    background?: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    textColor?: string;
    padding?: string;
    borderRadius?: string;
    cursor?: string;
    children: React.ReactNode;
    textSize?: string;
    cls?: string;
}


const CustomButton: React.FC<CustomButtonTypes> = ({
    border = 'none',
    onClick,
    background = 'rgb(219, 0, 255)',
    textColor = 'white',
    padding = '10px 20px',
    borderRadius = '20px',
    cursor = 'pointer',
    children,
    textSize = '.9rem',
    cls=''
}) => {
    const buttonStyle = {
        border,
        background,
        padding,
        borderRadius,
        cursor,
        color: textColor,
        fontSize: textSize,
      };
  return (
    <div className={`${cls} hover:scale-90 transition-all text-center`} onClick={() => onClick} style={buttonStyle}>
        {children}
    </div>
  )
}

export default CustomButton
