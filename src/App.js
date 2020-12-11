import React, { useEffect, useState } from 'react';
import { API_URL } from './api/API';
import axios from 'axios';
import Character from './components/Character';
import './App.css';

const App = () => {
  // Setting State
  const [character, setCharacter] = useState([]);

  // Grabing API, handling side effects

  useEffect(() => {
    character.forEach((e) => {
      axios
        .get(`${API_URL}`)
        .then((res) => {
          setCharacter(res.data.result);
        })
        .catch((err) => {
          console.log('Error:', err);
        });
    }, []);
  });

  return (
    <div className='App'>
      <h1 className='Header'>Characters</h1>
      {character ? (
        <>
          <Character
            height={character.height}
            hairColor={character.hairColor}
            skinColor={character.skinColor}
            eyeColor={character.eyeColor}
            birthYear={character.birthYear}
            gender={character.gender}
            homeworld={character.homeworld}
            films={character.films}
            species={character.species}
            vehicles={character.vehicles}
            starships={character.starships}
          />
        </>
      ) : (
        'Loading....'
      )}
    </div>
  );
};

export default App;
