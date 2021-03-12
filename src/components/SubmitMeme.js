import { useContext } from 'react';
import { MemeContext } from '../context/memeContext';
import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/json';

const SubmitMeme = ({ shareMeme }) => {
  const { selectedMeme, setSelectedMeme, inputs } = useContext(MemeContext);

  const querifyObj = obj => {
    const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`);
    return '?' + params.join('&');
  };

  const generateMeme = () => {
    // for of
    for (let input of inputs) {
      if (!input) return alert('Please fill out all the inputs');
    }

    const obj = {
      username: process.env.REACT_APP_USERNAME,
      password: process.env.REACT_APP_PASSWORD,
      template_id: selectedMeme.id
    };
    const arr = inputs.map((v, idx) => `boxes[${idx}][text]=${v}`).join('&');

    console.log(`${process.env.REACT_APP_API}/caption_image${querifyObj(obj)}&${arr}`);
    axios
      .post(`${process.env.REACT_APP_API}/caption_image${querifyObj(obj)}&${arr}`)
      .then(({ data: { data: { url } } }) => setSelectedMeme({ ...selectedMeme, url }));
  };

  return (
    <div className='row justify-content-around'>
      <button className='btn btn-lg btn-success' onClick={generateMeme}>
        Generate
      </button>
      <button className='btn btn-lg btn-warning' onClick={shareMeme}>
        Save
      </button>
    </div>
  );
};

export default SubmitMeme;
