import React from 'react';
import Map from '../components/Map';
import { partners } from '../data/partners';

const MapPage = () => {
    const mapMarkers = partners.map(p => ({
        position: { lat: p.lat, lng: p.lng },
        title: p.title,
        id: p.id
    }));

    return (
        <div className="map-page">
            <Map markers={mapMarkers} />
            <style>{`
                .map-page {
                    height: calc(100vh - 60px); /* Adjust for bottom nav */
                    width: 100%;
                }
            `}</style>
        </div>
    );
};

export default MapPage;
