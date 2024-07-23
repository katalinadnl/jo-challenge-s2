// api/fetchEventsData.js
export async function fetchEvents(start = 0, rowsPerPage = 10) {
    try {
        const response = await fetch(
            `https://data.paris2024.org/api/explore/v2.1/catalog/datasets/games_map_events_fr/records?rows=${rowsPerPage}&start=${start}`
        );
        const data = await response.json();
        console.log(`Fetched data from start=${start}, rowsPerPage=${rowsPerPage}:`, data); // Debugging statement
        return {
            totalCount: data.total_count,
            records: data.results
        };
    } catch (error) {
        console.error('Error fetching events data:', error);
        return { totalCount: 0, records: [] };
    }
}
