export const generateDate = (date) => {
    const currentDate = new Date(date); // or provide your Date object

    // Extracting year, month, and day
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
    const day = String(currentDate.getDate()).padStart(2, '0');

    // Creating the desired date string 'YYYY-MM-DD'
    const formattedDate = `${year}-${month}-${day}`;

    return formattedDate

}