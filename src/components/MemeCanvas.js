import { useContext } from 'react';
import { MemeContext } from '../context/memeContext';

const MemeCanvas = () => {
  const { selectedMeme } = useContext(MemeContext);
  if (!selectedMeme) return 'No selected meme';
  return (
    <div>
      <img src={selectedMeme.url} alt={selectedMeme.name} height='500px' />
    </div>
  );
};

export default MemeCanvas;
