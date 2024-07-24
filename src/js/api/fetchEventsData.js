export async function fetchEvents(start = 0, rowsPerPage = 10, fieldToFilterOn = '', filterValue = '') {
    try {
        let response = {};
        if (fieldToFilterOn === "starting_date") {
            response = await fetch(
                `https://data.paris2024.org/api/explore/v2.1/catalog/datasets/games_map_events_fr/records?` + (fieldToFilterOn ? `select=*&where=${fieldToFilterOn} >= "${filterValue}"&offset=${start}&limit=${rowsPerPage}` : `offset=${start}&limit=${rowsPerPage}`)
            );
        } else {
            response = await fetch(
                `https://data.paris2024.org/api/explore/v2.1/catalog/datasets/games_map_events_fr/records?` + (fieldToFilterOn ? `select=*&where=${fieldToFilterOn} like "${filterValue}"&offset=${start}&limit=${rowsPerPage}` : `offset=${start}&limit=${rowsPerPage}`)
            );
        }
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

export async function fetchAllEventsLocation() {
    try {
        const response = await fetch(
            `https://data.paris2024.org/api/explore/v2.1/catalog/datasets/games_map_events_fr/records?select=location&limit=100`
        );
        const data = await response.json();
        return {
            totalCount: data.total_count,
            records: data.results
        };
    } catch (error) {
        console.error('Error fetching events data:', error);
        return { totalCount: 0, records: [] };
    }
}

export async function fetchAllEventsTitle() {
    try {
        const response = await fetch(
            `https://data.paris2024.org/api/explore/v2.1/catalog/datasets/games_map_events_fr/records?select=title&limit=100`
        );
        const data = await response.json();
        return {
            totalCount: data.total_count,
            records: data.results
        };
    } catch (error) {
        console.error('Error fetching events data:', error);
        return { totalCount: 0, records: [] };
    }
}

export async function fetchAllEventsDates() {
    try {
        const response = await fetch(
            `https://data.paris2024.org/api/explore/v2.1/catalog/datasets/games_map_events_fr/records?select=starting_date&limit=100`
        );
        const data = await response.json();
        return {
            totalCount: data.total_count,
            records: data.results
        };
    } catch (error) {
        console.error('Error fetching events data:', error);
        return { totalCount: 0, records: [] };
    }
}
