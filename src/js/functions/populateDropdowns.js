export function populateDropdowns(data) {
    const sportDropdown = document.getElementById("sport");
    const locationDropdown = document.getElementById("location");
    const spotDropdown = document.getElementById("spot");
    const dateDropdown = document.getElementById("date");

    if (!sportDropdown || !locationDropdown || !spotDropdown || !dateDropdown) {
        console.error('One or more dropdown elements not found');
        return;
    }

    const sportsSet = new Set();
    const locationsSet = new Set();
    const spotsSet = new Set();
    const datesSet = new Set();

    data.forEach((record) => {
        const site = record.fields;
        sportsSet.add(site.sports);
        locationsSet.add(site.nom_site);
        spotsSet.add(site.address || site.nom_site);
        datesSet.add(site.start_date);
    });

    sportsSet.forEach((sport) => {
        const option = document.createElement("option");
        option.value = sport;
        option.textContent = sport;
        sportDropdown.appendChild(option);
    });

    locationsSet.forEach((location) => {
        const option = document.createElement("option");
        option.value = location;
        option.textContent = location;
        locationDropdown.appendChild(option);
    });

    spotsSet.forEach((spot) => {
        const option = document.createElement("option");
        option.value = spot;
        option.textContent = spot;
        spotDropdown.appendChild(option);
    });

    datesSet.forEach((date) => {
        const option = document.createElement("option");
        option.value = new Date(date).toISOString().split("T")[0];
        option.textContent = new Date(date).toLocaleDateString('fr-FR');
        dateDropdown.appendChild(option);
    });
}