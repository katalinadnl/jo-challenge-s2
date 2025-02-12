let map;
let markers = [];

// Function to create the Google Map and add markers
export async function createGMap(sites) {
  try {
    ((g) => {
      var h,
        a,
        k,
        p = "The Google Maps JavaScript API",
        c = "google",
        l = "importLibrary",
        q = "__ib__",
        m = document,
        b = window;
      b = b[c] || (b[c] = {});
      var d = b.maps || (b.maps = {}),
        r = new Set(),
        e = new URLSearchParams(),
        u = () =>
          h ||
          (h = new Promise(async (f, n) => {
            await (a = m.createElement("script"));
            e.set("libraries", [...r] + "");
            for (k in g)
              e.set(
                k.replace(/[A-Z]/g, (t) => "_" + t[0].toLowerCase()),
                g[k]
              );
            e.set("callback", c + ".maps." + q);
            a.src = `https://maps.${c}apis.com/maps/api/js?` + e;
            d[q] = f;
            a.onerror = () => (h = n(Error(p + " could not load.")));
            a.nonce = m.querySelector("script[nonce]")?.nonce || "";
            m.head.append(a);
          }));
      d[l]
        ? console.warn(p + " only loads once. Ignoring:", g)
        : (d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)));
    })({
      key: "AIzaSyAWXpDhNwacHzpeSieCl9alCgsKuSXebeU",
      v: "weekly",
      // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
      // Add other bootstrap parameters as needed, using camel case.
    });

    // initMap is now async
    async function initMap() {
      // Request libraries when needed, not in the script tag.
      const { Map } = await google.maps.importLibrary("maps");
      const { Marker } = await google.maps.importLibrary("marker");
      // Short namespaces can be used.
      map = new Map(document.getElementById("map"), {
        center: { lat: 48.86010463673363, lng: 2.2933603275527727 },
        zoom: 12,
      });

      addMarkers(sites, Marker, map); // Add markers to the map with fetched data
    }

    await initMap(); // Ensure initMap is awaited
  } catch (error) {
    console.error("Error creating map:", error);
  }
}

export function addMarkers(sites, Marker, map) {
  clearMarkers();
  const customIconUrl = "../../styles/images/logo_desktop.png";
  let newMarkers = [];

  sites.forEach((site) => {
    const fields = site.fields || site;
    let lat = parseFloat(
      typeof fields.latitude === "string"
        ? fields.latitude.replace(",", ".")
        : fields.lat
    );
    let lng = parseFloat(
      typeof fields.longitude === "string"
        ? fields.longitude.replace(",", ".")
        : fields.lon
    );

    if (isNaN(lat) || isNaN(lng)) {
      if (site.geometry && site.geometry.coordinates) {
        lng = parseFloat(site.geometry.coordinates[0]);
        lat = parseFloat(site.geometry.coordinates[1]);
      }
    }

    if (isNaN(lat) || isNaN(lng)) {
      console.error(
        `Invalid position for site: ${fields.nom_site || fields.title}`,
        site
      );
      return;
    }

    const marker = new Marker({
      position: { lat: lat, lng: lng },
      map,
      title: fields.nom_site || fields.title || "Unknown site",
      icon: {
        url: customIconUrl,
        scaledSize: new google.maps.Size(55, 55),
      },
    });
    markers.push(marker);
    newMarkers.push(marker);
  });

  if (newMarkers.length === 1) {
    map.setCenter(newMarkers[0].getPosition());
    map.setZoom(15);
  } else if (newMarkers.length > 1) {
    const bounds = new google.maps.LatLngBounds();
    newMarkers.forEach((marker) => bounds.extend(marker.getPosition()));
    map.fitBounds(bounds);
  }

  console.log("Markers added:", markers.length);
}

export function clearMarkers() {
  markers.forEach((marker) => marker.setMap(null));
  markers.length = 0;
}
