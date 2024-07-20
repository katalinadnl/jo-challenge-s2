export function addMarkers(sites, Marker, map, markers) {
  clearMarkers(markers);
  const customIconUrl = "../../styles/images/icone_courir.png";
  sites.forEach((site) => {
    let lat = parseFloat(site.fields.latitude.replace(",", "."));
    let lng = parseFloat(site.fields.longitude.replace(",", "."));

    if (isNaN(lat) || isNaN(lng)) {
      if (site.geometry && site.geometry.coordinates) {
        lng = site.geometry.coordinates[0];
        lat = site.geometry.coordinates[1];
      }
    }

    if (isNaN(lat) || isNaN(lng)) {
      console.error(`Invalid position for site: ${site.fields.nom_site}`, site);
      return;
    }

    const marker = new Marker({
      position: { lat: lat, lng: lng },
      map,
      title: site.fields.nom_site,
      icon: {
        url: customIconUrl,
        scaledSize: new google.maps.Size(55, 55),
      },
    });
    markers.push(marker);
  });
}

export function clearMarkers(markers) {
  markers.forEach((marker) => marker.setMap(null));
  markers.length = 0; // Clear the array
}
