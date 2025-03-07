export const news = (date) => {
    const currentDate = new Date();            
    const createdAt = new Date(date);
    const differenceInMilliseconds = currentDate - createdAt;          
    const millisecondsInADay = 1000 * 60 * 60 * 24;
    const differenceInDays = Math.floor(differenceInMilliseconds / millisecondsInADay);    
    if (differenceInDays < 7 ) {
        return true
    }
}