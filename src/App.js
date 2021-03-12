import { useRef } from 'react';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import MemeSelector from './components/MemeSelector';
import MemeCanvas from './components/MemeCanvas';
import MemeInput from './components/MemeInput';

const App = () => {
  const memeToShare = useRef();
  const shareMeme = async () => {
    const blob = await domtoimage.toBlob(memeToShare.current);
    saveAs(blob, `meme_${Date.now()}`);
  };
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-md-3'>
          <MemeSelector />
        </div>
        <div className='col-md-6'>
          <MemeCanvas ref={memeToShare} />
        </div>
        <div className='col-md-3'>
          <MemeInput shareMeme={shareMeme} />
        </div>
      </div>
    </div>
  );
};

export default App;
