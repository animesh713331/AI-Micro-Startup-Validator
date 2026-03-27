import React from 'react';

const Card = ({ title, description, imageUrl, onClick }) => {
    return (
        <div className="card">
            <div className="card-image">
                {imageUrl && <img src={imageUrl} alt={title} />}
            </div>
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
                {onClick && (
                    <button className="card-button" onClick={onClick}>
                        Learn More
                    </button>
                )}
            </div>
        </div>
    );
};

export default Card;