import { useEffect, useState } from "react";
import Key from "./Key";

function App() {
  const [currentKey, setCurrentKey] = useState("");
  const [volume, setVolume] = useState(1);
  const gridKeys = [
    {
      keyCode: 81,
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      keyTrigger: "Q",
      id: "h-1",
    },
    {
      keyCode: 87,
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      keyTrigger: "W",
      id: "h-2",
    },
    {
      keyCode: 69,
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      keyTrigger: "E",
      id: "h-3",
    },
    {
      keyCode: 65,
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      keyTrigger: "A",
      id: "h-4",
    },
    {
      keyCode: 83,
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      keyTrigger: "S",
      id: "h-6",
    },
    {
      keyCode: 68,
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      keyTrigger: "D",
      id: "drums",
    },
    {
      keyCode: 90,
      url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      keyTrigger: "Z",
      id: "k-n-h",
    },
    {
      keyCode: 88,
      url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      keyTrigger: "X",
      id: "rp4",
    },
    {
      keyCode: 67,
      url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      keyTrigger: "C",
      id: "cev",
    },
  ];
  console.log(typeof volume)
  const displayKeys = gridKeys.map((clip) => (
    <Key
      key={clip.id}
      clip={clip}
      volume={volume}
      update={() => setCurrentKey(clip.id)}
    />
  ));
  return (
    <div className="container" id="drum-machine">
      <div id="display">{currentKey}</div>
      {displayKeys}
      <br />
      <h4>Volume</h4>
      <input
        type="range"
        step="0.01"
        value={volume}
        max="1"
        min="0"
        className="input"
        onChange={(e) => setVolume(e.target.value)}
      />
    </div>
  );
}

export default App;
