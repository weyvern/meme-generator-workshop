import { useContext } from 'react';
import { MemeContext } from '../context/memeContext';
import SubmitMeme from './SubmitMeme';

const MemeInput = ({ shareMeme }) => {
  const { selectedMeme, inputs, setInputs } = useContext(MemeContext);

  const updateInputs = (event, index) => {
    const value = event.target.value || '';
    const newInputs = inputs.map((input, i) => {
      if (index === i) {
        return value;
      } else {
        return input;
      }
    });
    setInputs(newInputs);
    //setInputs(inputs.map((c, i) => (index === i ? value : c)));
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
      {selectedMeme && <SubmitMeme shareMeme={shareMeme} />}
    </div>
  );
};

export default MemeInput;
