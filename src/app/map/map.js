import React from "react";
import { Marker, Popup } from "react-leaflet";
import { MapContainer } from "react-leaflet/MapContainer";
import "leaflet/dist/leaflet.css";
import { TileLayer } from "react-leaflet/TileLayer";
import L from "leaflet";

export default function Map() {
  const markers = [
    {
      lati: 11.574209,
      long: 37.361355,
      country: "Bahirdar",
      adress: "Signal mall 3rd floor",
    },
    {
      lati: 11,
      long: 39,
      country: "Hawassa",
      adress: "GIORGIS Fitlefit",
    },
  ];

  return (
    <>
      <MapContainer
        style={{
          width: "100%",
          height: 500,
          borderRadius: "30px",
          border: "10px solid #b5b9f1",
          backgroundColor: "red",
          fillColor: "red",
        }}
        center={[11, 37]}
        zoom={6}
      >
        <TileLayer
          attribution='&amp; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((val, i) => {
          return (
            <Marker
              eventHandlers={{
                mouseover: (event) => event.target.openPopup(),
              }}
              key={i}
              icon={L.divIcon({
                html: `<div style='    
                font-size: 12px;
                font-weight:600;
                color: black;
                 background-color: white;
                padding: 2px 4px;
                box-shadow:1px 1px 15px #00000066;
                border-radius:5px;
                width:min-content
                '> ${val.country} </div>`,
              })}
              position={[val.lati, val.long]}
            >
              <Popup>
                {val.country}
                <br />
                {val.adress}
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </>
  );
}