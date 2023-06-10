const map = L.map('map').setView([45.4808, -0.7790], 10);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
const polygon = L.polygon([
  [45.6214591447955, -1.0439702793842578],
  [45.673667442820445, -0.9335979727423607],
  [45.68134645929183, -0.757095377366654],
  [45.57900188353143, -0.5543697477815047],
  [45.44751529152376, -0.44182321932589147],
  [45.37007799965582, -0.5664003644032041],
  [45.28875282825224, -0.6117288538511838],
  [45.283579144641564, -0.7017012364070209],
  [45.45403061876929, -0.7907668895536976],
  [45.61938203236569, -1.0390869938318206]
], {color: '#21fc33', weight: 5, smoothFactor: 1,lineCap: "square"}).addTo(map).bindPopup('Point de vente');
const polyline = L.polyline([
  [45.58461258214044, -0.9889405716819907],
  [45.60644263634051, -0.9546836045455908],
  [45.62248872905588, -0.9513190809875516],
  [45.66632462382909, -0.9516249467655552]

], {color: '#21eafc', weight: 6}).addTo(map).bindPopup('Vente hors zones : 50€');