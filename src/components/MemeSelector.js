import { useContext } from 'react';
import { MemeContext } from '../context/memeContext';
import Meme from './Meme';

const MemeSelector = () => {
  const { memes } = useContext(MemeContext);
  return (
    <div
      className='d-flex flex-wrap'
      style={{ height: '500px', overflowY: 'scroll' }}
    >
      {memes.map(meme => (
        <Meme key={meme.id} meme={meme} />
      ))}
    </div>
  );
};

export default MemeSelector;
