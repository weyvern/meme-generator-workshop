import MemeSelector from './components/MemeSelector';
import MemeCanvas from './components/MemeCanvas';
import MemeInput from './components/MemeInput';

const App = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-3'>
          <MemeSelector />
        </div>
        <div className='col'>
          <MemeCanvas />
        </div>
        <div className='col-md-3'>
          <MemeInput />
        </div>
      </div>
    </div>
  );
};

export default App;
