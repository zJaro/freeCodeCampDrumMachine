import '../index.css'
import { useRef, useEffect } from 'react';

export default function DrumPad({text, src, onClick, displayText}){

        const audioRef = useRef(null);

    function handleClick(){
        audioRef.current.play()
        if (onClick) {
        onClick(displayText);
    }    }

      // Use useEffect to listen for keydown events for this specific pad
    useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key.toUpperCase() === text) { // Check if the pressed key matches this pad's key
        audioRef.current.play(); // Trigger the same behavior as clicking the pad
        onClick(displayText)
      }
    };

    // Add the event listener for keydown
    document.addEventListener('keydown', handleKeyPress);


    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [text, onClick]); 






    return(
        <button onClick={handleClick} id={text} className="drum-pad">
            {text}
            <audio ref={audioRef} className="clip" src={src}></audio>
        </button>
    )
}