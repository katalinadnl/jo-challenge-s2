export async function fetchSports() {
    const response = await fetch(
        "https://data.paris2024.org/api/records/1.0/search/?dataset=paris-2024-sites-de-competition&rows=100"
    );
    const data = await response.json();
    return data.records;
}
