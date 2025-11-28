import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Share, Heart, Star, MapPin } from 'lucide-react';
import { partners } from '../data/partners';
import Map from '../components/Map';

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const partner = partners.find(p => p.id === parseInt(id));

  if (!partner) return <div>Partner not found</div>;

  return (
    <div className="detail-page">
      {/* Header Actions */}
      <div className="detail-header">
        <button className="icon-btn" onClick={() => navigate(-1)}>
          <ArrowLeft size={20} />
        </button>
        <div className="right-actions">
          <button className="icon-btn">
            <Share size={20} />
          </button>
          <button className="icon-btn">
            <Heart size={20} />
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="hero-image">
        <img src={partner.image} alt={partner.title} />
      </div>

      <div className="container content">
        <div className="title-section">
          <h1>{partner.title}</h1>
          <div className="rating-row">
            <Star size={16} fill="black" />
            <span className="rating-text">{partner.rating} · </span>
            <span className="location-text">{partner.location}</span>
          </div>
        </div>

        <div className="divider"></div>

        <div className="benefit-section">
          <div className="benefit-card">
            <h3>Flying Pass Benefit</h3>
            <p>{partner.benefit}</p>
          </div>
        </div>

        <div className="divider"></div>

        <div className="description-section">
          <h2>About this place</h2>
          <p>{partner.description}</p>
        </div>

        <div className="divider"></div>

        <div className="location-section">
          <h2>Where you'll be</h2>

          <div className="map-placeholder">
            <Map
              center={{ lat: partner.lat, lng: partner.lng }}
              zoom={15}
              markers={[{
                position: { lat: partner.lat, lng: partner.lng },
                title: partner.title
              }]}
            />
          </div>
          <p className="location-detail">{partner.location}</p>
        </div>
      </div>

      {/* Floating Action Button for Mobile */}
      <div className="floating-footer">
        <div className="footer-content">
          <div className="price-info">
            <span className="benefit-highlight">{partner.benefit}</span>
          </div>
          <button className="action-btn">Use Pass</button>
        </div>
      </div>

      <style>{`
        .detail-page {
          background: white;
          padding-bottom: 100px;
        }
        .detail-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          display: flex;
          justify-content: space-between;
          padding: 16px 20px;
          z-index: 10;
          /* Gradient for visibility on image */
          background: linear-gradient(to bottom, rgba(0,0,0,0.2), transparent); 
        }
        .icon-btn {
          background: white;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 1px 2px rgba(0,0,0,0.1);
        }
        .right-actions {
          display: flex;
          gap: 12px;
        }
        .hero-image {
          width: 100%;
          height: 300px;
          overflow: hidden;
        }
        .hero-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .content {
          padding-top: 24px;
        }
        h1 {
          font-size: 26px;
          margin-bottom: 8px;
        }
        .rating-row {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 14px;
          font-weight: 500;
        }
        .location-text {
          text-decoration: underline;
        }
        .divider {
          height: 1px;
          background-color: var(--border);
          margin: 24px 0;
        }
        .benefit-card {
          background-color: var(--bg-secondary);
          padding: 16px;
          border-radius: 12px;
          border: 1px solid var(--border);
        }
        .benefit-card h3 {
          font-size: 16px;
          margin-bottom: 4px;
          color: var(--primary);
        }
        .benefit-card p {
          font-size: 18px;
          font-weight: 600;
        }
        .description-section h2, .location-section h2 {
          font-size: 22px;
          margin-bottom: 16px;
        }
        .description-section p {
          line-height: 1.5;
          color: var(--text-secondary);
        }
        .map-placeholder {
          width: 100%;
          height: 200px;
          background-color: #f0f0f0;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: var(--text-secondary);
          margin-bottom: 12px;
        }
        .floating-footer {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: white;
          border-top: 1px solid var(--border);
          padding: 16px 24px;
          padding-bottom: max(16px, env(safe-area-inset-bottom));
          z-index: 100;
        }
        .footer-content {
          max-width: 600px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .benefit-highlight {
          font-weight: 600;
          font-size: 16px;
          text-decoration: underline;
        }
        .action-btn {
          background-color: var(--primary);
          color: white;
          padding: 14px 24px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 16px;
        }
      `}</style>
    </div>
  );
};

export default Detail;
