import { useContext } from 'react';
import { MemeContext } from '../context/memeContext';
import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/json';

const SubmitMeme = () => {
  const { selectedMeme, setSelectedMeme, inputs } = useContext(MemeContext);

  const querifyObj = obj => {
    const params = Object.entries(obj).map(([key, value]) => `${key}=${value}`);
    return '?' + params.join('&');
  };

  const generateMeme = () => {
    const obj = {
      username: process.env.REACT_APP_USERNAME,
      password: process.env.REACT_APP_PASSWORD,
      template_id: selectedMeme.id
    };

    const arr = inputs.map((v, idx) => `boxes[${idx}][text]=${v}`).join('&');

    axios
      .post(
        `${process.env.REACT_APP_API}/caption_image${querifyObj(obj)}&${arr}`
      )
      .then(({ data: { data: { url } } }) =>
        setSelectedMeme({ ...selectedMeme, url })
      );
  };

  return (
    <button className='btn btn-lg btn-success' onClick={generateMeme}>
      Generate
    </button>
  );
};

export default SubmitMeme;
