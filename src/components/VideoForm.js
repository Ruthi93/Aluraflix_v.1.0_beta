import React, { useState, useEffect } from 'react';
import './VideoForm.css';

const VideoForm = ({ onSave, videoToEdit }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [url, setUrl] = useState('');

    useEffect(() => {
        if (videoToEdit) {
            setTitle(videoToEdit.title);
            setDescription(videoToEdit.description);
            setImage(videoToEdit.image);
            setUrl(videoToEdit.url);
        }
    }, [videoToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const video = { title, description, image, url, id: videoToEdit ? videoToEdit.id : Date.now() };
        onSave(video);
        setTitle('');
        setDescription('');
        setImage('');
        setUrl('');
    };

    return (
        <form className="video-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Descripción"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                type="text"
                placeholder="Imagen URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />
            <input
                type="text"
                placeholder="Video URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />
            <button type="submit">{videoToEdit ? 'Actualizar' : 'Guardar'}</button>
        </form>
    );
};

export default VideoForm;
