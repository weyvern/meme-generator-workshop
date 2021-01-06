import { useContext } from 'react';
import { MemeContext } from '../context/memeContext';
import SubmitMeme from './SubmitMeme';

const MemeInput = () => {
  const { selectedMeme, inputs, setInputs } = useContext(MemeContext);
  const updateInputs = (e, idx) => {
    const value = e.target.value || '';
    setInputs(
      inputs.map((c, i) => {
        return idx === i ? value : c;
      })
    );
  };
  return (
    <div>
      {inputs.map((input, i) => (
        <div className='input-group mb-3' key={i}>
          <input
            type='text'
            className='form-control'
            aria-label='caption'
            value={input}
            onChange={e => updateInputs(e, i)}
          />
        </div>
      ))}
      {selectedMeme && <SubmitMeme />}
    </div>
  );
};

export default MemeInput;
