import { useEffect, useState } from "react";

const Key = ({ clip, volume, update }) => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const handleKeyPress = (e) => {
    if (e.keyCode === clip.keyCode) playSound();
  };

  const playSound = () => {
    const audioTag = document.getElementById(clip.keyTrigger);
    setActive(true);
    update()
    setTimeout(() => setActive(false), 200);
    console.log(volume)
    audioTag.volume = volume;
    audioTag.currentTime = 0;
    audioTag.play();
  };
  return (
    <div className={`drum-pad ${active && "active"}`} onClick={playSound} id={clip.id}>
      <audio src={clip.url} className="clip" id={clip.keyTrigger}></audio>
      {clip.keyTrigger}
    </div>
  );
};

export default Key;
