import React, { useEffect, useState } from 'react';
import VideoForm from '../components/VideoForm';
import { getVideo, updateVideo } from '../services/videoService';

const EditVideoPage = ({ match, history }) => {
  const [video, setVideo] = useState(null);
  const { id } = match.params;

  useEffect(() => {
    loadVideo();
  }, [id]);

  const loadVideo = async () => {
    const video = await getVideo(id);
    setVideo(video);
  };

  const handleSubmit = async (data) => {
    await updateVideo(id, data);
    history.push('/');
  };

  return (
    <div>
      <h1>Editar Video</h1>
      {video && <VideoForm initialData={video} onSubmit={handleSubmit} />}
    </div>
  );
};

export default EditVideoPage;
