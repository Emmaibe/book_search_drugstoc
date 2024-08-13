/**
 * A custom React hook that formats a date string into a human-readable format.
 * The date is returned in the format "6th September, 2019", including the correct
 * ordinal suffix (st, nd, rd, th) based on the day of the month.
 *
 * @param dateString - The date string to be formatted.
 * @returns A formatted date string in the form "Day Month, Year".
 */

const useFormatDate = (dateString: string): string => {
    // Convert the date string into a Date object
    const date = new Date(dateString);

    // Extract day, month, and year from the date
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();

    // Determine the correct suffix for the day
    const getDaySuffix = (day: number) => {

        // If the day is between 4 and 20, use 'th'
        if (day > 3 && day < 21) return 'th';

        // Handle cases for 1st, 2nd, 3rd, and others
        switch (day % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    };

    const suffix = getDaySuffix(day);

    // Return the formatted date string
    return `${day}${suffix} ${month}, ${year}`;
};

export default useFormatDate;

