import React, { useEffect, useState } from 'react';
import { API_URL } from './api/API';
import axios from 'axios';
import Character from './components/Character';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const App = () => {
  // Setting State
  const [characters, setCharacters] = useState([]);

  // Grabing API, handling side effects

  useEffect(() => {
    axios
      .get(`${API_URL}`)
      .then((res) => {
        setCharacters(res.data.results);
      })
      .catch((err) => {
        console.log('Error:', err);
      });
  }, []);

  return (
    <Box component='div'>
      <Box component='div' marginTop={5} fontFamily='Space Mono, monospace'>
        <Typography variant='h1' component='h1' align='center'>
          Star Wars Characters
        </Typography>
      </Box>

      <Container>
        {characters ? (
          <>
            <Box
              boxShadow={5}
              borderRadius={10}
              display='flex'
              flexWrap='wrap'
              alignContent='space-evenly'
              justifyContent='space-evenly'
              margin={5}
            >
              {characters.map((character) => (
                <Box component='div' m={1}>
                  <Character character={character} />
                </Box>
              ))}
            </Box>
          </>
        ) : (
          'Loading....'
        )}
      </Container>
    </Box>
  );
};

export default App;
