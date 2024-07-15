import React from 'react';
import VideoCard from './VideoCard';
import './VideoList.css';

const VideoList = ({ videos, onEdit, onDelete }) => {
    return (
        <div className="video-list">
            {videos.map(video => (
                <VideoCard
                    key={video.id}
                    video={video}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};

export default VideoList;
