import React, { useState } from 'react';
import Header from './components/Header';
import VideoList from './components/VideoList';
import VideoForm from './components/VideoForm';
import './App.css';

const App = () => {
    const [videos, setVideos] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [videoToEdit, setVideoToEdit] = useState(null);

    // Función para agregar un nuevo video
    const addVideo = (video) => {
        setVideos([...videos, { ...video, id: Date.now() }]);
    };

    // Función para actualizar un video existente
    const updateVideo = (updatedVideo) => {
        setVideos(videos.map(video => video.id === updatedVideo.id ? updatedVideo : video));
        setIsEditing(false);
        setVideoToEdit(null);
    };

    // Función para eliminar un video
    const deleteVideo = (id) => {
        setVideos(videos.filter(video => video.id !== id));
    };

    // Función para iniciar la edición de un video
    const editVideo = (video) => {
        setVideoToEdit(video);
        setIsEditing(true);
    };

    return (
        <div className="App">
            <Header />
            {isEditing ? (
                <VideoForm onSave={updateVideo} videoToEdit={videoToEdit} />
            ) : (
                <VideoForm onSave={addVideo} />
            )}
            <VideoList videos={videos} onEdit={editVideo} onDelete={deleteVideo} />
        </div>
    );
};

export default App;
