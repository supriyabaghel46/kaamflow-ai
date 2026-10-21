import { useState } from "react";

function VoicePanel() {
  // false = not recording, true = recording
  const [recording, setRecording] = useState(false);

  function handleClick() {
    setRecording(!recording); // flips true to false, false to true
  }

  return (
    <div className="voice-panel">
      <div className="mic-circle">🎤</div>

      <div className="voice-content">
        <h3>Add Repair Job with Voice (Hindi / Hinglish)</h3>
        <p className="voice-subtitle">Simply speak what the customer says...</p>

        <div className="voice-row">
          <div className="voice-example">
            "Bhaiya iska screen toot gaya hai, iPhone 13 hai, display change
            karna hai, advance 2000 liya hai"
          </div>

          <button
            className={recording ? "record-btn stop" : "record-btn"}
            onClick={handleClick}
          >
            🎤 {recording ? "Stop Recording" : "Start Recording"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default VoicePanel;