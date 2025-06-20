const map = L.map('map').setView([22.9734, 78.6569], 5);

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; CartoDB',
  subdomains: 'abcd',
  maxZoom: 19
}).addTo(map);

const alertIcon = L.divIcon({
  className: 'blinking',
  html: '<div style="font-size:24px;color:red;">⚠️</div>',
  iconSize: [30, 30],
  iconAnchor: [15, 15]
});

const events = [
  {
    title: "Protest in Pune",
    lat: 18.5204,
    lon: 73.8567,
    place: "Maharashtra",
    form: "https://docs.google.com/forms/d/e/1FAIpQLSfExampleMaharashtra"
  },
  {
    title: "Cyber Incident in Delhi",
    lat: 28.6139,
    lon: 77.2090,
    place: "Delhi",
    form: "https://docs.google.com/forms/d/e/1FAIpQLSfExampleDelhi"
  },
  {
    title: "Fire Breakout in Mumbai",
    lat: 19.0760,
    lon: 72.8777,
    place: "Maharashtra",
    form: "https://docs.google.com/forms/d/e/1FAIpQLSfExampleMumbai"
  }
];

let index = 0;

function addAlertMarker(event) {
  const marker = L.marker([event.lat, event.lon], { icon: alertIcon }).addTo(map);
  marker.bindPopup(`
    <b>${event.place}</b><br>
    ${event.title}<br>
    <a href="${event.form}" target="_blank">📋 Submit Analyst Input</a>
  `).openPopup();
}

setInterval(() => {
  if (index < events.length) {
    addAlertMarker(events[index]);
    index++;
  }
}, 7000);
