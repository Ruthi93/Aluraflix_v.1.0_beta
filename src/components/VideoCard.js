import React from 'react';
import './VideoCard.css';

const VideoCard = ({ video, onEdit, onDelete }) => {
    return (
        <div className="video-card">
            <img src={video.image} alt={video.title} />
            <h3>{video.title}</h3>
            <p>{video.description}</p>
            <button onClick={() => onEdit(video)}>Editar</button>
            <button onClick={() => onDelete(video.id)}>Eliminar</button>
        </div>
    );
};

export default VideoCard;
