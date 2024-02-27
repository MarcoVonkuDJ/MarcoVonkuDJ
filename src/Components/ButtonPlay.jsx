import React, { useState, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import useSound from 'use-sound';
import elcirco from '../aud/elcirco.mp3';
import Rizzla from '../aud/Rizzla.mp3';

function ButtonPlay(props) {
  let tema;
  if (props.title === 1) {
    tema = elcirco;
  } else if (props.title === 2) {
    tema = Rizzla;
  }

  const [play, { stop }] = useSound(tema);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      play();
    } else {
      stop();
    }
  }, [isPlaying, play, stop]);

  const handleClick = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  return (
    <>
      <div
        style={{
          margin: '1%',
          textAlign: 'center',
        }}
      >
        <button
          type="button"
          className={`btn ${isPlaying ? 'btn-danger' : 'btn-success'}`}
          onClick={handleClick}
          style={{
            backgroundColor: 'purple',
            border: '4px solid black',
            
          }}
        ><i class="bi bi-play">{isPlaying ? 'STOP MUSIC' : 'PLAY MUSIC'}</i>
          
        </button>
      </div>
    </>
  );
}

export default ButtonPlay;