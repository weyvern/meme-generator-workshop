import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const MemeContext = createContext();

const MemeState = ({ children }) => {
  const [memes, setMemes] = useState([]);
  const [error, setError] = useState('');
  const [selectedMeme, setSelectedMeme] = useState();
  const [inputs, setInputs] = useState([]);

  useEffect(() => {
    // Optional: with async/await
    /*  const getMemes = async () => {
        try {
          const res = await fetch('https://api.imgflip.com/get_memes');
          const {
            data: { memes }
          } = await res.json();
          setMemes(memes);
        } catch (error) {
          setError(error);
        }
      };
      getMemes(); */

    // Fetch
    /*  fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(({ data: { memes } }) => setMemes(memes))
      .catch(error => setError(error)); */

    // Axios
    axios
      .get(`${process.env.REACT_APP_API}/get_memes`)
      .then(({ data: { data: { memes } } }) => setMemes(memes))
      .catch(error => setError(error));
  }, []);

  return (
    <MemeContext.Provider
      value={{ memes, error, selectedMeme, setSelectedMeme, inputs, setInputs }}
    >
      {children}
    </MemeContext.Provider>
  );
};

export default MemeState;
