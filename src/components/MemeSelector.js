import { useContext } from 'react';
import { MemeContext } from '../context/memeContext';

const MemeSelector = () => {
  const { memes } = useContext(MemeContext);
  return memes.map(({ id, name, url }) => (
    <div key={id}>
      <img src={url} width='300px' alt={name} />
    </div>
  ));
};

export default MemeSelector;
