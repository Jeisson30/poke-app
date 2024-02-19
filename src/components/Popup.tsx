import React from 'react';
import '../styles/popup.css';

interface PopupProps {
    pokemon: {
        name: string;
        image: string;
    };
    details: {
        base_experience: number;
        height: number;
        id: number;
        weight: number;
        sprites: {
            front_default: string;
        };
    };
    locationData: {
        regionName: string;
        areas: string[];
    };
    onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ pokemon, details, locationData, onClose }) => {
    return (
        <div className="popup">
            <div className="popup-content">
                <span className="close" onClick={onClose}>X</span>
                <h2 className="popup-title">Name: {pokemon.name}</h2>
                <div className="popup-image-container">
                    <img className="popup-image" src={pokemon.image} alt={pokemon.name} />
                </div>
                <div className="popup-details">
                    <p> <b>Base experience: </b> {details.base_experience}</p>
                    <p> <b>Height: </b> {details.height}</p>
                    <p> <b>Number: </b> {details.id}</p>
                    <p> <b>Weight: </b> {details.weight}</p>
                    <p style={{ textAlign: 'center' }}> <b>LOCATED IN: </b> </p>
                    <p> <b>Region: </b> {locationData.regionName}</p>
                    <p> <b>Areas: </b>  {locationData.areas.join(', ')}</p>
                </div>
            </div>
        </div>
    );
};

export default Popup;
