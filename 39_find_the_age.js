const calculateAge = (birthDate) => {
    const today = new Date(); // Current date
    const birth = new Date(birthDate); // Birthdate

    let age = today.getFullYear() - birth.getFullYear(); // Difference in years

    // Check if birthday has occurred this year or not
    const monthDiff = today.getMonth() - birth.getMonth();
    const dayDiff = today.getDate() - birth.getDate();

    // If the current month is before the birth month OR
    // if we're in the birth month but the day hasn't come yet, subtract 1
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    return age;
};

// Example usage:
console.log(calculateAge("1990-05-15")); // Output: Age of the person
