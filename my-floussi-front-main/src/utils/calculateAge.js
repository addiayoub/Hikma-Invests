export function calculateAge(birthday) {
    const birthDate = new Date(birthday);
    const currentDate = new Date();

    // Calculate the difference in years
    let age = currentDate.getFullYear() - birthDate.getFullYear();

    // Adjust age based on the month and day of the birthday
    if (
        currentDate.getMonth() < birthDate.getMonth() ||
        (currentDate.getMonth() === birthDate.getMonth() &&
            currentDate.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    return age;
}

// Example usage:
const birthday = '1990-05-15'; // Replace this with the user's birthday
const userAge = calculateAge(birthday);

// console.log(`The user is ${userAge} years old.`);
