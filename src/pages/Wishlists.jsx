import React from 'react';

const Wishlists = () => {
    return (
        <div className="page-container">
            <h1>Wishlists</h1>
            <p>Your saved places will appear here.</p>
            <style>{`
                .page-container {
                    padding: 20px;
                    padding-bottom: 80px;
                }
            `}</style>
        </div>
    );
};

export default Wishlists;
