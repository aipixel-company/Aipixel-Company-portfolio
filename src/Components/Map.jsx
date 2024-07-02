import React, { useEffect, useRef, useState, memo } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";

// Define the locations
const locations = [
  { lat: 21.4735, lng: 55.9754, name: "Oman" },
  { lat: 25.276987, lng: 55.296249, name: "Dubai, UAE" },
  { lat: 40.712776, lng: -74.005974, name: "USA" },
  { lat: 24.7136, lng: 46.6753, name: "Saudi Arabia" },
  { lat: 30.3753, lng: 69.3451, name: "Pakistan" },
  { lat: 50.8503, lng: 4.3517, name: "Belgium" },
  { lat: 51.5074, lng: -0.1278, name: "United Kingdom" },
  { lat: 4.2105, lng: 101.9758, name: "Malaysia" },
];

// Define the custom icon
const redDotIcon = new L.Icon({
  iconUrl:
    "https://upload.wikimedia.org/wikipedia/commons/0/0e/Basic_red_dot.png",
  iconSize: [10, 10],
  iconAnchor: [5, 5],
});

// Define the data for the left and right columns
const leftColumnData = [
  { header: "5+", subtext: "years on the market" },
  { header: "50+", subtext: "projects completed" },
  { header: "60+", subtext: "clients served" },
];

const rightColumnData = [
  { header: "5+", subtext: "awards won" },
  { header: "8+", subtext: "countries served" },
  { header: "50+", subtext: "active clients, including Fortune 500 companies" },
];

// Memoized component for the info cards
const InfoCard = memo(({ header, subtext, loading }) => (
  <div
    className={`flex flex-col items-center bg-white border border-gray-300 px-4 py-10 shadow-md rounded-lg mb-4 md:mb-0 transition-transform duration-500 ${
      !loading && "transform translate-x-0"
    }`}
  >
    <div className="text-xl font-bold">{header}</div>
    <div className="text-lg text-gray-600">{subtext}</div>
  </div>
));

const Map = () => {
  const mapRef = useRef();
  const [loading, setLoading] = useState(true);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (mapRef.current && !initialized) {
      const map = mapRef.current;
      const bounds = L.latLngBounds(locations.map((loc) => [loc.lat, loc.lng]));
      map.fitBounds(bounds);
      setLoading(false);
      setInitialized(true);
    }
  }, [initialized]);

  return (
    <div className="relative">
      <MapContainer
        center={[0, 0]}
        zoom={2}
        className="absolute top-0 left-0 h-full w-full z-0"
        zoomControl={false}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        dragging={false}
        whenCreated={(mapInstance) => {
          if (!initialized) {
            mapRef.current = mapInstance;
          }
        }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
          attribution=' <a href="https://www.openstreetmap.org/copyright"></a>  <a href="https://carto.com/attributions"></a>'
        />
        {locations.map((location, idx) => (
          <Marker
            key={idx}
            position={[location.lat, location.lng]}
            icon={redDotIcon}
          >
            <Tooltip
              direction="bottom"
              offset={[0, -20]}
              opacity={1}
              className="bg-white text-black border border-gray-300 p-1"
            >
              {location.name}
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
      <div className="flex flex-col md:flex-row sm:justify-between w-full h-full relative z-10">
        <div className="flex flex-col justify-center w-full md:w-1/4 px-3 pt-4 sm:p-4">
          {leftColumnData.map((row, index) => (
            <InfoCard
              key={index}
              header={row.header}
              subtext={row.subtext}
              loading={loading}
            />
          ))}
        </div>
        <div className="flex flex-col justify-center w-full md:w-1/4 p-4">
          {rightColumnData.map((row, index) => (
            <InfoCard
              key={index}
              header={row.header}
              subtext={row.subtext}
              loading={loading}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Map;
