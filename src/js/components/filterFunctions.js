export function getFilterValues() {
    const sport = document.getElementById("sport").value;
    const location = document.getElementById("location").value;
    const spot = document.getElementById("spot").value;
    const date = document.getElementById("date").value;
    return { sport, location, spot, date };
  }
  
  export function filterSites(sites, filters) {
    return sites.filter((site) => {
      const matchesSport = !filters.sport || site.fields.sports === filters.sport;
      const matchesLocation = !filters.location || site.fields.nom_site === filters.location;
      const matchesSpot = !filters.spot || (site.fields.address && site.fields.address.includes(filters.spot)) || site.fields.nom_site.includes(filters.spot);
      const matchesDate = !filters.date || new Date(site.fields.start_date).toISOString().split("T")[0] === filters.date;
      return matchesSport && matchesLocation && matchesSpot && matchesDate;
    });
  }
  