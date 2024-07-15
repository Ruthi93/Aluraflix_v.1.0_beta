import React from 'react';
import VideoForm from '../components/VideoForm';
import { addVideo } from '../services/videoService';

const AddVideoPage = ({ history }) => {
  const handleSubmit = async (data) => {
    await addVideo(data);
    history.push('/');
  };

  return (
    <div>
      <h1>Agregar Video</h1>
      <VideoForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddVideoPage;
