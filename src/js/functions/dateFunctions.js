// Function to format the date
export function formatDate(dateString) {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
}

// Function to check if a date is today
export function isToday(dateString) {
    const today = new Date();
    const date = new Date(dateString);
    return today.toDateString() === date.toDateString();
}

// Function to check if a date is within this week
export function isThisWeek(dateString) {
    const today = new Date();
    const date = new Date(dateString);
    const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(endOfWeek.getDate() + 6);
    return date >= startOfWeek && date <= endOfWeek;
}
