export async function fetchEvents() {
    const rowsPerPage = 100;
    let allRecords = [];
    let start = 0;
    let totalCount = 0;

    try {
        // Fetch the first page to get the total count
        const initialResponse = await fetch(
            `https://data.paris2024.org/api/explore/v2.1/catalog/datasets/games_map_events_fr/records?rows=${rowsPerPage}&start=${start}`
        );
        const initialData = await initialResponse.json();
        totalCount = initialData.total_count;
        allRecords = initialData.results;

        // Fetch subsequent pages
        while (allRecords.length < totalCount) {
            start += rowsPerPage;
            const response = await fetch(
                `https://data.paris2024.org/api/explore/v2.1/catalog/datasets/games_map_events_fr/records?rows=${rowsPerPage}&start=${start}`
            );
            const data = await response.json();
            allRecords = allRecords.concat(data.results);
        }

        console.log('Fetched all records:', allRecords); // Debugging statement
        return allRecords;
    } catch (error) {
        console.error('Error fetching events data:', error); // Debugging statement
        return [];
    }
}
