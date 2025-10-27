import React, { useEffect, useRef, useState, memo } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Tooltip, useMap } from "react-leaflet";

// Define HQ and other locations
const locations = [
  { lat: 31.4671, lng: 74.2662, name: "Lahore HQ (Pakistan)" },
  { lat: 21.4735, lng: 55.9754, name: "Oman" },
  { lat: 25.276987, lng: 55.296249, name: "Dubai, UAE" },
  { lat: 24.7136, lng: 46.6753, name: "Saudi Arabia" },
  { lat: 51.5074, lng: -0.1278, name: "United Kingdom" },
  { lat: 4.2105, lng: 101.9758, name: "Malaysia" },
];

// Custom red dot icon
const redDotIcon = new L.Icon({
  iconUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Basic_red_dot.png",
  iconSize: [10, 10],
  iconAnchor: [5, 5],
});

// Smooth zoom animation (triggered only when "active" is true)
const SmoothZoom = ({ center, zoom, active }) => {
  const map = useMap();

  useEffect(() => {
    if (active) {
      map.flyTo(center, zoom, {
        animate: true,
        duration: 3,
        easeLinearity: 0.25,
      });
    }
  }, [active, center, zoom, map]);

  return null;
};

// InfoCard (memoized)
const InfoCard = memo(({ header, subtext }) => (
  <div className="flex flex-col items-center bg-white/10 backdrop-blur-md border border-gray-700 text-white px-5 py-10 shadow-md rounded-xl transition-all duration-700 hover:scale-105">
    <div className="text-2xl font-bold">{header}</div>
    <div className="text-lg text-gray-300">{subtext}</div>
  </div>
));

const leftColumnData = [
  { header: "5+", subtext: "Years on the Market" },
  { header: "50+", subtext: "Projects Completed" },
  { header: "60+", subtext: "Clients Served" },
];

const rightColumnData = [
  { header: "5+", subtext: "Awards Won" },
  { header: "8+", subtext: "Countries Served" },
  { header: "50+", subtext: "Active Global Clients" },
];

const Map = () => {
  const lahoreHQ = [31.4671, 74.2662];
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  // Observe when the component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 } // 30% visible before triggering
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full min-h-[80vh] bg-[#0b0c10] overflow-hidden"
    >
      {/* Map */}
      <MapContainer
        center={lahoreHQ}
        zoom={5}
        className="absolute top-0 left-0 h-full w-full z-0 rounded-none"
        zoomControl={false}
        scrollWheelZoom={false}
        dragging={false}
        doubleClickZoom={false}
      >
        {/* Dark Map Theme */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='<a href="https://carto.com/">CARTO</a>'
        />

        {/* Smooth zoom triggers only when visible */}
        <SmoothZoom center={lahoreHQ} zoom={8} active={isInView} />

        {locations.map((location, idx) => (
          <Marker key={idx} position={[location.lat, location.lng]} icon={redDotIcon}>
            <Tooltip
              direction="bottom"
              offset={[0, -15]}
              opacity={1}
              className="bg-black text-white border border-gray-600 px-2 py-1 rounded"
            >
              {location.name}
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center h-full px-6 py-10 space-y-6 md:space-y-0">
        {/* Left Info */}
        <div className="flex flex-col space-y-4 md:w-1/4">
          {leftColumnData.map((data, i) => (
            <InfoCard key={i} {...data} />
          ))}
        </div>

        {/* Center Text */}
        <div className="text-center text-white md:w-1/2 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">
            Global Presence, Rooted in{" "}
            <span className="text-blue-400">Lahore, Pakistan</span>
          </h2>
          <p className="text-gray-400">
            37 L Block Rd, Block L Johar Town, Lahore, Pakistan
          </p>
          <p className="text-gray-500 text-sm italic">
            Serving innovation across borders.
          </p>
        </div>

        {/* Right Info */}
        <div className="flex flex-col space-y-4 md:w-1/4">
          {rightColumnData.map((data, i) => (
            <InfoCard key={i} {...data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Map;
