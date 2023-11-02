import { format } from 'date-fns';


export const checkExtension = (str: string): string => {
    return str.slice(str.lastIndexOf("."))
}

export const generateRandomNumber = (): number =>  {
    return Math.floor(Math.random() * 1000000);
}


export const getDateTime = (apiDate: string | Date): string => {
    // const apiDate = '2023-10-27T13:26';
    const date = new Date(apiDate);

    const formattedDate = format(date, 'EEE MMM dd yyyy HH:mm:ss');

    return formattedDate; 
}

export const capitalize = (str: string): string => {
    return str[0].toUpperCase() + str.slice(1).toLowerCase()
}

export const clipSentence = (str: string, wordAmout: number): string => {
    if(str.length > wordAmout) {
        str = str.substring(0, wordAmout) + '...'
    };
    return str;
}