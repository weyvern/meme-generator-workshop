import { useContext, forwardRef } from 'react';
import { MemeContext } from '../context/memeContext';

const MemeCanvas = forwardRef((props, ref) => {
  const { selectedMeme } = useContext(MemeContext);
  if (!selectedMeme) return 'No selected meme';
  return (
    <div>
      <img ref={ref} src={selectedMeme.url} alt={selectedMeme.name} className='img-fluid' />
    </div>
  );
});

export default MemeCanvas;
