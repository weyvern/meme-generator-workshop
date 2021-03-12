import { useContext } from 'react';
import { MemeContext } from '../context/memeContext';

const Meme = ({ meme }) => {
  const { setSelectedMeme, setInputs } = useContext(MemeContext);

  const handleSelect = () => {
    setSelectedMeme(meme);
    setInputs(Array(meme.box_count).fill(''));
  };
  return (
    <div style={{ cursor: 'pointer' }} onClick={handleSelect}>
      <img
        src={meme.url}
        width='80px'
        height='80px'
        alt={meme.name}
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
};

export default Meme;
