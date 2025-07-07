import '../App.css'
import DrumPad from './DrumPad'
import Display from './Display'
import { useState } from 'react'

export default function DrumMachine(){

    const [song, setSong] = useState();

    function handleDisplay(text){
        setSong(text)
    }

    return(
        <div id="drum-machine">
            <div id="keyboard">
            <DrumPad onClick={handleDisplay} displayText="Heater 1" text="Q" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"></DrumPad>
            <DrumPad onClick={handleDisplay} displayText="Heater 2" text="W" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"></DrumPad>
            <DrumPad onClick={handleDisplay} displayText="Heater 3" text="E" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"></DrumPad>
            <DrumPad onClick={handleDisplay} displayText="Heater 4" text="A" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"></DrumPad>
            <DrumPad onClick={handleDisplay} displayText="Heater 5" text="S" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"></DrumPad>
            <DrumPad onClick={handleDisplay} displayText="Heater 6" text="D" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"></DrumPad>
            <DrumPad onClick={handleDisplay} displayText="Kick and Hat" text="Z" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"></DrumPad>
            <DrumPad onClick={handleDisplay} displayText="Kick" text="X" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"></DrumPad>
            <DrumPad onClick={handleDisplay} displayText="CC" text="C" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"></DrumPad>
            </div>
            <Display song={song}></Display>
        </div>
    )
}