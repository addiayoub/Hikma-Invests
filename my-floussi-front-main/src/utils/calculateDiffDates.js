// export default function calculateDateDifference(startDate, endDate) {
//     const start = new Date(startDate);
//     const end = new Date(endDate);

//     // Calculate the difference in milliseconds
//     const differenceInMilliseconds = end - start;

//     // Convert the difference to years
//     const differenceInYears = differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

//     return differenceInYears;
// }

// // Example usage:
// const today = new Date(); // current date
// const previousDate = new Date('6-11-2020'); // your previous date

// // const result = calculateDateDifference(previousDate, today);

// // console.log(`The difference is approximately ${result.toFixed(2)} years.`);
export default function calculateDateDifference(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);

    // Calculate the difference in milliseconds
    const differenceInMilliseconds = end - start;

    // Convert the difference to years
    const differenceInYears = differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

    // Check if the difference in years is less than 1
    if (differenceInYears < 1) {
        // Calculate the difference in months
        const differenceInMonths = differenceInMilliseconds / (1000 * 60 * 60 * 24 * 30.44);
        return differenceInMonths;
    }

    return differenceInYears;
}


export function getDateDifference(startDate, endDate) {
    // Calculate the time difference in milliseconds
    const timeDifference = endDate - startDate;

    // Convert the time difference to a Date object
    const differenceDate = new Date(timeDifference);

    // Extract years, months, and days
    const years = differenceDate.getUTCFullYear() - 1970;
    const months = differenceDate.getUTCMonth();
    const days = differenceDate.getUTCDate() - 1;

    // Create the result string
    let result = '';

    // Add years to the result if it's greater than 0
    if (years > 0) {
        result += years + (years === 1 ? ' année' : ' années');
    }

    // Add months to the result if it's greater than 0
    if (months > 0) {
        if (result !== '') {
            result += ' et ';
        }
        result += months + (months === 1 ? ' mois' : ' mois');
    }

    // Add days to the result if it's greater than 0
    if (days > 0) {
        if (result !== '') {
            result += ' et ';
        }
        result += days + (days === 1 ? ' jour' : ' jours');
    }

    // If all values are 0, return "0 days"
    if (result === '') {
        result = '0 jours';
    }

    return result;
}


