import React, { useState } from 'react';
import { Map as MapIcon, List } from 'lucide-react';
import CategoryBar from '../components/CategoryBar';
import ListingCard from '../components/ListingCard';
import Map from '../components/Map';
import { partners } from '../data/partners';

const Home = ({ searchQuery, sortOption }) => {
    const [showMap, setShowMap] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredPartners = partners.filter(partner => {
        const matchesSearch = partner.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            partner.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || partner.category === selectedCategory;
        return matchesSearch && matchesCategory;
    }).sort((a, b) => {
        if (sortOption === 'Highest Rated') return b.rating - a.rating;
        if (sortOption === 'Most Reviews') return b.id - a.id; // Mock logic for reviews
        return 0; // Recommended (default order)
    });

    const mapMarkers = filteredPartners.map(p => ({
        position: { lat: p.lat, lng: p.lng },
        title: p.title,
        id: p.id,
        image: p.image,
        rating: p.rating,
        category: p.category,
        description: p.description
    }));

    const mapCenter = filteredPartners.length > 0
        ? { lat: filteredPartners[0].lat, lng: filteredPartners[0].lng }
        : { lat: 34.6937, lng: 135.5023 }; // Default to Osaka

    return (
        <div className="home-page">
            <CategoryBar
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
            />

            <div className="content-area">
                {showMap ? (
                    <div className="map-container-full">
                        <Map markers={mapMarkers} center={mapCenter} zoom={14} />
                    </div>
                ) : (
                    <div className="container listing-container">
                        {filteredPartners.map(partner => (
                            <ListingCard key={partner.id} {...partner} />
                        ))}
                    </div>
                )}
            </div>

            <button
                className="map-toggle-btn"
                onClick={() => setShowMap(!showMap)}
            >
                {showMap ? (
                    <>
                        <List size={18} />
                        <span>Show List</span>
                    </>
                ) : (
                    <>
                        <MapIcon size={18} />
                        <span>Show Map</span>
                    </>
                )}
            </button>

            <style>{`
        .home-page {
            height: 100%;
            display: flex;
            flex-direction: column;
            position: relative;
        }
        .content-area {
            flex: 1;
            overflow: hidden;
            position: relative;
        }
        .listing-container {
            height: 100%;
            overflow-y: auto;
            padding-top: 20px;
            padding-bottom: 80px; /* Space for toggle button */
        }
        .map-container-full {
            height: 100%;
            width: 100%;
        }
        .map-toggle-btn {
            position: absolute;
            bottom: 24px;
            left: 50%;
            transform: translateX(-50%);
            background-color: #222;
            color: white;
            border: none;
            padding: 14px 24px;
            border-radius: 24px;
            display: flex;
            align-items: center;
            gap: 8px;
            font-weight: 600;
            font-size: 14px;
            cursor: pointer;
            box-shadow: 0 6px 16px rgba(0,0,0,0.12);
            z-index: 100;
            transition: transform 0.2s;
        }
        .map-toggle-btn:hover {
            transform: translateX(-50%) scale(1.05);
        }
      `}</style>
        </div>
    );
};

export default Home;
