import React, { useEffect, useState } from 'react';
import VideoList from '../components/VideoList';
import { getVideos, deleteVideo } from '../services/videoService';

const HomePage = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    loadVideos();
  }, []);

  const loadVideos = async () => {
    const videos = await getVideos();
    setVideos(videos);
  };

  const handleDelete = async (id) => {
    await deleteVideo(id);
    loadVideos();
  };

  return (
    <div>
      <h1>Lista de Videos</h1>
      <VideoList videos={videos} onDelete={handleDelete} />
    </div>
  );
};

export default HomePage;
