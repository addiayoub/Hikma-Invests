export function isValidDate(date) {
    // Try creating a new Date object from the provided string
    const dateObject = new Date(date);

    // Check if the created date object is a valid date
    // and if the string provided is not an invalid date string
    return !isNaN(dateObject);
}