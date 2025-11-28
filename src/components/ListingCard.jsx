import React from 'react';
import { Star, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const ListingCard = ({ id, image, title, distance, benefit, rating }) => {
  return (
    <Link to={`/detail/${id}`} className="listing-card">
      <div className="image-container">
        <img src={image} alt={title} />
        <button className="favorite-btn">
          <Heart size={24} color="white" strokeWidth={2} />
        </button>
      </div>
      <div className="info-container">
        <div className="title-row">
          <h3 className="title">{title}</h3>
          <div className="rating">
            <Star size={14} fill="black" />
            <span>{rating}</span>
          </div>
        </div>
        <p className="distance">{distance}</p>
        <p className="benefit">{benefit}</p>
      </div>
      <style>{`
        .listing-card {
          display: block;
          margin-bottom: 32px;
          cursor: pointer;
        }
        .image-container {
          position: relative;
          aspect-ratio: 4 / 3;
          border-radius: var(--radius-md);
          overflow: hidden;
          margin-bottom: 12px;
          background: #f0f0f0;
        }
        .image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .favorite-btn {
          position: absolute;
          top: 12px;
          right: 12px;
          padding: 0;
        }
        .title-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }
        .title {
          font-size: 16px;
          font-weight: 600;
          color: var(--text-primary);
        }
        .rating {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 14px;
        }
        .distance {
          color: var(--text-secondary);
          font-size: 15px;
          margin-top: 2px;
        }
        .benefit {
          color: var(--text-primary);
          font-size: 15px;
          margin-top: 4px;
          font-weight: 600;
        }
      `}</style>
    </Link>
  );
};

export default ListingCard;
