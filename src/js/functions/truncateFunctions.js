export function truncateDescriptionEvent(title, description, address, maxLength = 500) {
    if (title.length < 60 && address.length < 45) {
        if (description.length > maxLength) {
            return `${description.substring(0, maxLength)}...`;
        }
    } else {
        if (description.length > 150) {
            return `${description.substring(0, 200)}...`;
        }
    }
    return description;
}

export function truncateTitleSport(title, maxLength = 95) {
    if (title.length > maxLength) {
        return `${title.substring(0, maxLength)}...`;
    }
    return title;
}
